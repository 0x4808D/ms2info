import * as fs from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamValues } from "stream-json/streamers/StreamValues";

export class MapManager {
  maps: Map<number, MapMetadata>;
  mapNames: Map<number, string>;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 999);
    this.maps = new Map<number, MapMetadata>();
    this.mapNames = new Map<number, string>();
  }

  load() {
    return new Promise<void>(async (resolve, reject) => {
      const files = fs.readdirSync("data/mapdata/");
      for (const file of files) {
        await new Promise<void>((res) => {
          const pipeline = chain([
            fs.createReadStream(`data/mapdata/${file}`),
            parser(),
            streamValues(),
            (data) => {
              const value = data.value;
              return value;
            },
          ]);

          pipeline.on("data", (data: MapMetadata) => {
            this.maps.set(data.Id, data);
            this.mapNames.set(data.Id, data.Name);
          });

          pipeline.on("error", () => {
            reject();
          });

          pipeline.on("end", () => {
            res();
          });
        })

      }
      console.log(`${this.maps.size} maps loaded.`);
      resolve();
    });
  }
}
