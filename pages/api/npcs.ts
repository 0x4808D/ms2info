import { NextApiRequest, NextApiResponse } from "next/types";
import { GetNPCManager } from "../../managers/refManager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NPCMetadata[]>
) {
  const npcManager = await GetNPCManager();

  res.status(200).json([...npcManager.npcs.values()]);
}
