import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamValues } from "stream-json/streamers/StreamValues";
import { parseGameString } from "../lib/utils";

export class QuestManager {
  quests: Map<number, QuestMetadata>;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 999);
    this.quests = new Map<number, QuestMetadata>();
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const pipeline = chain([
        fs.createReadStream("data/quests.json"),
        parser(),
        streamValues(),
        (data) => {
          const value = data.value;
          return value;
        },
      ]);

      pipeline.on("data", (data: QuestMetadata) => {
        this.quests.set(data.Basic.Id, data);
      });

      pipeline.on("error", () => {
        reject();
      });

      pipeline.on("end", () => {
        console.log(`${this.quests.size} quests loaded.`);
        resolve();
      });
    });
  }

  parse() {
    this.quests.forEach((quest) => {
      const name = parseGameString(quest.Name);
      const description = parseGameString(quest.Description);
      quest.Name = name;
      quest.Description = description;
    });
  }
}
