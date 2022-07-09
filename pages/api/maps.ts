import { NextApiRequest, NextApiResponse } from "next/types";
import { GetMapManager } from "../../managers/refManager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const mapManager = await GetMapManager();

  const maps = [...mapManager.mapNames.entries()].map(([id, name]) => ({
    Id: id,
    Name: name,
  }));
  res.status(200).json(maps);
}
