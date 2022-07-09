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
  const quest: QuestMetadata = data[index];

  if (!quest) return null;

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={"auto"}></Grid>
        <Grid item xs={1}>
          <Item>{quest.Basic.Id}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{quest.Name ?? "null"}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{JSON.stringify(quest.Condition)}</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            {" "}
            <div
              dangerouslySetInnerHTML={{
                __html: quest.Description ?? "null",
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
});

const Quests: NextPage = () => {
  const [quests, setQuests] = React.useState<QuestMetadata[]>([]);
  const [filtered, setFiltered] = React.useState<QuestMetadata[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/quests")
      .then((res) => res.json())
      .then((data) => {
        setQuests(data);
        setFiltered(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newFiltered = quests.filter((quest) => {
      let searchFiltered = !!searchInput;
      if (searchFiltered) {
        if (
          !(
            quest.Name &&
            quest.Name.toLowerCase().includes(searchInput.toLowerCase().trim())
          ) &&
          !quest.Basic.Id.toString().toLowerCase().includes(searchInput.toLowerCase().trim())
          &&
          !quest.Description.toLowerCase().includes(searchInput.toLowerCase().trim())
        )
          searchFiltered = false;
      }

      return !searchInput || searchFiltered;
    });
    setFiltered(newFiltered);
  }, [quests, searchInput]);

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
          <h1>{quests.length} Quests</h1>
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
      headerText: "Quests",
    },
  };
}

export default Quests;
