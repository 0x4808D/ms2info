import { NextApiRequest, NextApiResponse } from "next/types";
import { GetSkillManager } from "../../managers/refManager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillMetadata[]>
) {
  const skillManager = await GetSkillManager();

  res.status(200).json([...skillManager.skills.values()]);
}
