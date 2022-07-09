import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamValues } from "stream-json/streamers/StreamValues";

export class NPCManager {
  npcs: Map<number, NPCMetadata>;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 999);
    this.npcs = new Map<number, NPCMetadata>();
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const pipeline = chain([
        fs.createReadStream("data/npcs.json"),
        parser(),
        streamValues(),
        (data) => {
          const value = data.value;
          return value;
        },
      ]);

      pipeline.on("data", (data: NPCMetadata) => {
        this.npcs.set(data.Id, data);
      });

      pipeline.on("error", () => {
        reject();
      });

      pipeline.on("end", () => {
        console.log(`${this.npcs.size} NPCs loaded.`);
        resolve();
      });
    });
  }
}
