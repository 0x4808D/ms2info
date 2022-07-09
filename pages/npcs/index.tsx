import { Box, CircularProgress, Grid, Paper, styled } from "@mui/material";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { NpcType } from "../../lib/enums";
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
  const npc: NPCMetadata = data[index];

  if (!npc) return null;

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={"auto"}></Grid>
        <Grid item xs={1}>
          <Item>{npc.Id}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{npc.Name ?? "null"}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{NpcType[npc.Type] ?? "null"}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{npc.Level ?? "null"}</Item>
        </Grid>
      </Grid>
    </div>
  );
});

const NPCs: NextPage = () => {
  const [npcs, setNPCs] = React.useState<NPCMetadata[]>([]);
  const [filtered, setFiltered] = React.useState<NPCMetadata[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/npcs")
      .then((res) => res.json())
      .then((data) => {
        setNPCs(data);
        setFiltered(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newFiltered = npcs.filter((npc) => {
      let searchFiltered = !!searchInput;
      if (searchFiltered) {
        if (
          !(
            npc.Name &&
            npc.Name.toLowerCase().includes(searchInput.toLowerCase())
          ) &&
          !npc.Id.toString().toLowerCase().includes(searchInput.toLowerCase())
        )
          searchFiltered = false;
      }

      return !searchInput || searchFiltered;
    });
    setFiltered(newFiltered);
  }, [npcs, searchInput]);

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
          <h1>{npcs.length} NPCs</h1>
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
      headerText: "NPCs",
    },
  };
}

export default NPCs;
