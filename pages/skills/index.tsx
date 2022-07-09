import { Box, CircularProgress, Grid, Paper, styled } from "@mui/material";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { SearchBar } from "../../components/search";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: "84px",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  maxHeight: "84px",
  boxShadow: "none",
  textAlign: "center",
}));

// eslint-disable-next-line react/display-name
const ItemRow = React.memo(({ data, index, style }: any) => {
  const skill: SkillMetadata = data[index];

  if (!skill) return null;

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={"auto"}></Grid>
        <Grid item xs={1}>
          <Item>{skill.SkillId}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{skill.Name ?? "null"}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{JSON.stringify(skill.Descriptions)}</Item>
        </Grid>
      </Grid>
    </div>
  );
});

const Skills: NextPage = () => {
  const [skills, setSkills] = React.useState<SkillMetadata[]>([]);
  const [filtered, setFiltered] = React.useState<SkillMetadata[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setFiltered(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newFiltered = skills.filter((skill) => {
      let searchFiltered = !!searchInput;
      if (searchFiltered) {
        if (
          !(
            skill.Name &&
            skill.Name.toLowerCase().includes(searchInput.toLowerCase().trim())
          ) &&
          !skill.SkillId.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase().trim())
        )
          searchFiltered = false;
      }

      return !searchInput || searchFiltered;
    });
    setFiltered(newFiltered);
  }, [skills, searchInput]);

  return (
    <div>
      <Grid container>
        <Grid item xs={"auto"}>
          <SearchBar
            onChange={(e: any) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </Grid>
      </Grid>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <div>
          <h1>{skills.length} Skills</h1>
          <List
            height={660}
            width={"100%"}
            itemCount={filtered.length}
            itemData={filtered}
            itemSize={96}
            style={{ alignContent: "center" }}
          >
            {ItemRow}
          </List>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      headerText: "Skills",
    },
  };
}

export default Skills;
