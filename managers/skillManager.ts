import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamValues } from "stream-json/streamers/StreamValues";

export class SkillManager {
  skills: Map<number, SkillMetadata>;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 999);
    this.skills = new Map<number, SkillMetadata>();
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      const pipeline = chain([
        fs.createReadStream("data/skills.json"),
        parser(),
        streamValues(),
        (data) => {
          const value = data.value;
          return value;
        },
      ]);

      pipeline.on("data", (data: SkillMetadata) => {
        this.skills.set(data.SkillId, data);
      });

      pipeline.on("error", () => {
        reject();
      });

      pipeline.on("end", () => {
        console.log(`${this.skills.size} skills loaded.`);
        resolve();
      });
    });
  }
}
