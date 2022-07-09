import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import type { NextPage } from "next";
import { FixedSizeList as List } from "react-window";
import Image from "next/image";
import React, { useEffect } from "react";

import { SearchBar } from "../../components/search";
import theme from "../../styles/theme/theme";
import FilterInput from "../../components/filterinput";
import { GenderString, Job, Rarity, TypeToString } from "../../lib/enums";

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

const MS2Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0,0,0, 0.85)",
    color: "white",
    width: "400px",
    padding: theme.spacing(2),
    border: "1px groove rgba(255,255,255, 0.2)",
    boxShadow: "0 0 5px #000",
  },
}));

// eslint-disable-next-line react/display-name
const ItemRow = React.memo(({ data, index, style }: any) => {
  const item: ItemMetadata = data[index];

  if (!item) return null;

  const rarity = Rarity.find((r) => r.id === item.Rarity);

  const untradable = !item.Property.TradeableCount;
  const unsellable =
    !item.Property.Sell.SellPriceCustom ||
    !item.Property.Sell.SellPriceCustom[0];

  const restrictionTag = [];
  if (untradable) restrictionTag.push("Untradable");
  if (unsellable) restrictionTag.push("Unsellable");

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={"auto"}>
          <MS2Tooltip
            placement="right"
            // open={index === 0}
            title={
              <React.Fragment>
                <Typography
                  color={rarity?.color}
                  style={{ marginTop: theme.spacing(1) }}
                >
                  {item.Name}
                </Typography>
                <Typography color={rarity?.color}>
                  {Array(item.Rarity).fill("★")}
                  {Array(6 - item.Rarity).fill("☆")}
                </Typography>
                <div
                  style={{
                    backgroundImage: `url(${rarity?.background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "64px 64px",
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Image
                    width={64}
                    height={64}
                    unoptimized
                    src={`/static/${
                      item.Property.SlotIcon !== "icon0.png"
                        ? item.Property.SlotIcon.substring(21)
                        : item.Property.SlotIconCustom.substring(21)
                    }`}
                    alt="Item Icon"
                  />
                </div>

                {!!item.GearScore?.value && (
                  <Typography variant="body2">
                    Gear Score {item.GearScore.value.toFixed(0)} (+
                    {item.GearScore.added})
                  </Typography>
                )}

                {item.Limit.LevelLimitMin && (
                  <Typography variant="body2" sx={{ color: "darkgray" }}>
                    Requires Level {item.Limit.LevelLimitMin}
                  </Typography>
                )}

                <Typography variant="body2" sx={{ color: "darkgray" }}>
                  {rarity?.name} {TypeToString[item.Type.toString()]}
                </Typography>

                {item.Descriptions.TooltipDesc && (
                  <>
                    <Divider />
                    <Typography variant="body2" sx={{ color: "darkgray" }}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.Descriptions.TooltipDesc,
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.Descriptions.GuideDesc,
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.Descriptions.MainDesc,
                        }}
                      />
                    </Typography>
                  </>
                )}

                <Divider />

                {restrictionTag.length > 0 && (
                  <Typography
                    variant="body2"
                    sx={{ color: "red", paddingTop: theme.spacing(1) }}
                  >
                    {restrictionTag.join(", ")}
                  </Typography>
                )}

                {item.Property.DisableTradeWithinAccount && (
                  <Typography
                    variant="body2"
                    sx={{ color: "red", paddingTop: theme.spacing(1) }}
                  >
                    Bound to character
                  </Typography>
                )}
              </React.Fragment>
            }
          >
            <div
              style={{
                backgroundImage: `url(${rarity?.background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "80px 80px",
                marginRight: theme.spacing(1),
              }}
            >
              <Image
                width={80}
                height={80}
                unoptimized
                src={`/static/${
                  item.Property.SlotIcon !== "icon0.png"
                    ? item.Property.SlotIcon.substring(21)
                    : item.Property.SlotIconCustom.substring(21)
                }`}
                alt="Item Icon"
              />
            </div>
          </MS2Tooltip>
        </Grid>
        <Grid item xs={1}>
          <Item>{item.Id}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{item.Name ?? "null"}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            {item.Limit.JobRequirements?.map((j) => Job[j]).join(", ")}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
});

const Items: NextPage = (props: any) => {
  const [items, setItems] = React.useState<ItemMetadata[]>([]);
  const [filtered, setFiltered] = React.useState<ItemMetadata[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");
  const [rarityFilterOptions, setRarityFilterOptions] = React.useState<
    string[]
  >([]);
  const [typeFilterOptions, setTypeFilterOptions] = React.useState<string[]>(
    []
  );
  const [levelFilterOptions, setLevelFilterOptions] = React.useState<number>(0);
  const [gearScoreFilterOptions, setGearScoreFilterOptions] =
    React.useState<number>(0);
  const [genderFilterOptions, setGenderFilterOptions] = React.useState<
    string[]
  >([]);
  const [jobFilterOptions, setJobFilterOptions] = React.useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newFiltered = items.filter((item) => {
      let searchFiltered = !!searchInput;
      if (searchFiltered) {
        if (
          !(
            item.Name &&
            item.Name.toLowerCase().includes(searchInput.toLowerCase())
          ) &&
          !item.Id.toString().toLowerCase().includes(searchInput.toLowerCase())
        )
          searchFiltered = false;
      }

      let rarityFiltered = !!rarityFilterOptions.length;
      if (rarityFiltered) {
        const rarity = Rarity.find((r) => r.id === item.Rarity);
        if (!rarity || !rarityFilterOptions.includes(rarity.name))
          rarityFiltered = false;
      }

      let typeFiltered = !!typeFilterOptions.length;
      if (typeFiltered) {
        const type = TypeToString[item.Type.toString()];
        if (!type || !typeFilterOptions.includes(type)) typeFiltered = false;
      }

      let levelFiltered = !!levelFilterOptions;
      if (levelFiltered) {
        const level = item.Limit.LevelLimitMin;
        if (!item.Limit.LevelLimitMin || level < levelFilterOptions)
          levelFiltered = false;
      }

      let gearScoreFiltered = !!gearScoreFilterOptions;
      if (gearScoreFiltered) {
        const gearScore = item.GearScore?.value;
        if (!item.GearScore || !gearScore || gearScore < gearScoreFilterOptions)
          gearScoreFiltered = false;
      }

      let genderFiltered = !!genderFilterOptions.length;
      if (genderFiltered) {
        const gender = GenderString[item.Limit.Gender.toString()];
        if (!gender || !genderFilterOptions.includes(gender))
          genderFiltered = false;
      }

      let jobFiltered = !!jobFilterOptions.length;
      if (jobFiltered) {
        const jobs: string[] = item.Limit.JobRequirements?.map(
          (j: number) => Job[j]
        );
        if (!jobs || !jobs.some((j) => jobFilterOptions.includes(j)))
          jobFiltered = false;
      }

      return (
        (!typeFilterOptions.length || typeFiltered) &&
        (!rarityFilterOptions.length || rarityFiltered) &&
        (!genderFilterOptions.length || genderFiltered) &&
        (!jobFilterOptions.length || jobFiltered) &&
        (!levelFilterOptions || levelFiltered) &&
        (!gearScoreFilterOptions || gearScoreFiltered) &&
        (!searchInput || searchFiltered)
      );
    });
    setFiltered(newFiltered);
  }, [
    gearScoreFilterOptions,
    genderFilterOptions,
    items,
    jobFilterOptions,
    levelFilterOptions,
    rarityFilterOptions,
    searchInput,
    typeFilterOptions,
  ]);

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

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={2}>
          <FilterInput
            label={"Rarity"}
            onChange={(e: any) =>
              setRarityFilterOptions(
                typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value
              )
            }
            value={rarityFilterOptions}
          >
            {Rarity.map((option, index) => (
              <MenuItem
                key={option.name}
                value={option.name}
                style={{ color: option.color }}
              >
                {option.name}
              </MenuItem>
            ))}
          </FilterInput>
        </Grid>
        <Grid item xs={"auto"}>
          <FilterInput
            label={"Type"}
            onChange={(e: any) =>
              setTypeFilterOptions(
                typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value
              )
            }
            value={typeFilterOptions}
          >
            {Object.values<string>(TypeToString).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </FilterInput>
        </Grid>
        <Grid item xs={"auto"}>
          <FilterInput
            label={"Gender"}
            onChange={(e: any) =>
              setGenderFilterOptions(
                typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value
              )
            }
            value={genderFilterOptions}
          >
            {Object.values<string>(GenderString).map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </FilterInput>
        </Grid>
        <Grid item xs={"auto"}>
          <FilterInput
            label={"Job"}
            onChange={(e: any) =>
              setJobFilterOptions(
                typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value
              )
            }
            value={jobFilterOptions}
          >
            {Object.keys(Job)
              .filter((j) => isNaN(+j))
              .map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </FilterInput>
        </Grid>
        <Grid item xs={"auto"}>
          <TextField
            label={"Level"}
            type={"number"}
            onChange={(e: any) => setLevelFilterOptions(e.target.value)}
            value={levelFilterOptions}
          ></TextField>
        </Grid>
        <Grid item xs={"auto"}>
          <TextField
            label={"Gear Score"}
            type={"number"}
            onChange={(e: any) => setGearScoreFilterOptions(e.target.value)}
            value={gearScoreFilterOptions}
          ></TextField>
        </Grid>
      </Grid>
      <Typography variant="h6">{filtered.length} items found</Typography>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
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
  );
};

export async function getStaticProps() {
  return {
    props: {
      headerText: "Items",
    },
  };
}

export default Items;
