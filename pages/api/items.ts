// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetItemManager } from "../../managers/refManager";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemMetadata[]>
) {
  const itemManager = await GetItemManager();
  const items = itemManager.items;
  console.log("<api> ItemManager id: ", itemManager.id);

  res.status(200).json([...items.values()]);
}
