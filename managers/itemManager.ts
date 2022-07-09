import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamValues } from "stream-json/streamers/StreamValues";
import { calcItemGearScore, GetItemType } from "../lib/gameFunctions";
import { parseGameString } from "../lib/utils";

export class ItemManager {
  items: Map<number, ItemMetadata>;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 999);
    this.items = new Map<number, ItemMetadata>();
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const pipeline = chain([
        fs.createReadStream("data/items.json"),
        parser(),
        streamValues(),
        (data) => {
          const value = data.value;
          return value;
        },
      ]);

      pipeline.on("data", (data: ItemMetadata) => {
        this.items.set(data.Id, data);
      });

      pipeline.on("error", () => {
        reject();
      });

      pipeline.on("end", () => {
        console.log(`${this.items.size} items loaded.`);
        resolve();
      });
    });
  }

  parse() {
    this.items.forEach((item) => {
      const type = GetItemType(item.Id);

      const gearScore = calcItemGearScore(
        item.Property.GearScoreFactor,
        item.Rarity,
        type,
        0,
        0
      );

      const newDescriptions = {
        MainDesc: parseGameString(item.Descriptions.MainDesc),
        GuideDesc: parseGameString(item.Descriptions.GuideDesc),
        TooltipDesc: parseGameString(item.Descriptions.TooltipDesc),
      };

      item.Type = type;
      item.GearScore = {
        value: gearScore[0],
        added: gearScore[1],
      };
      item.Descriptions = newDescriptions;
    });
  }
}
