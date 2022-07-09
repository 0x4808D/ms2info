import { NextApiRequest, NextApiResponse } from "next/types";
import { QuestManager } from "../../managers/questManager";
import { GetQuestManager, GlobalRef } from "../../managers/refManager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestMetadata[]>
) {
  const questManager = await GetQuestManager();
  const quests = questManager.quests;

  res.status(200).json([...quests.values()]);
}
