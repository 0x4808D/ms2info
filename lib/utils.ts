import { ItemManager } from "../managers/itemManager";
import { MapManager } from "../managers/mapManager";
import { NPCManager } from "../managers/npcManager";
import { QuestManager } from "../managers/questManager";
import { GlobalRef } from "../managers/refManager";
import { SkillManager } from "../managers/skillManager";

export function _unescape(html: string): string {
  let returnText = html;
  returnText = returnText.replaceAll(/&nbsp;/gi, " ");
  returnText = returnText.replaceAll(/&amp;/gi, "&");
  returnText = returnText.replaceAll(/&quot;/gi, `"`);
  returnText = returnText.replaceAll(/&lt;/gi, "<");
  returnText = returnText.replaceAll(/&gt;/gi, ">");
  returnText = returnText.replaceAll(/&apos;/gi, "'");
  returnText = returnText.replaceAll("\\n", "<br>");
  returnText = returnText.replaceAll("size=", "uwu=");

  return returnText;
}

export function parseGameString(html: string) {
  const itemManagerRef = new GlobalRef<ItemManager>("itemManager");
  const questManagerRef = new GlobalRef<QuestManager>("questManager");
  const npcManagerRef = new GlobalRef<NPCManager>("npcManager");
  const mapManagerRef = new GlobalRef<MapManager>("mapManager");
  const skillManagerRef = new GlobalRef<SkillManager>("skillManager");
  const items = itemManagerRef.value.items;
  const quests = questManagerRef.value.quests;
  const npcs = npcManagerRef.value.npcs;
  const maps = mapManagerRef.value.mapNames;
  const skills = skillManagerRef.value.skills;
  let returnText = _unescape(html);
  returnText = parseItems(returnText, items);
  returnText = parseNPCs(returnText, npcs);
  returnText = parseQuests(returnText, quests);
  returnText = parseSkills(returnText, skills);
  returnText = parseMaps(returnText, maps);
  return returnText;
}

export function parseItems(html: string, items: Map<number, ItemMetadata>) {
  let returnText = html;
  const itemRegex = /\$item:(\d+)\$/gi;
  let matches = returnText.match(itemRegex);

  for (const match of matches ?? []) {
    const itemId = +match.replaceAll("$", "").replaceAll("item:", "");
    returnText = returnText.replaceAll(match, items.get(itemId)?.Name ?? "");
  }

  const itemsRegex = /\$itemPlural:(\d+)\$/gi;
  matches = returnText.match(itemsRegex);
  for (const match of matches ?? []) {
    const itemId = +match.replaceAll("$", "").replaceAll("itemPlural:", "");
    returnText = returnText.replaceAll(
      match,
      `${items.get(itemId)?.Name ?? ""}'s`
    );
  }

  return returnText;
}

export function parseNPCs(html: string, npcs: Map<number, NPCMetadata>) {
  let returnText = html;
  const regex = /\$npc:(\d+)\$/gi;
  let matches = returnText.match(regex);

  for (const match of matches ?? []) {
    const npcId = +match.replaceAll("$", "").replaceAll("npc:", "");
    returnText = returnText.replaceAll(match, npcs.get(npcId)?.Name ?? "");
  }

  const regex2 = /\$npcName:(\d+)\$/gi;
  matches = returnText.match(regex2);

  for (const match of matches ?? []) {
    const npcId = +match.replaceAll("$", "").replaceAll("npcName:", "");
    returnText = returnText.replaceAll(match, npcs.get(npcId)?.Name ?? "");
  }

  const regex3 = /\$npcPlural:(\d+)\$/gi;
  matches = returnText.match(regex3);
  for (const match of matches ?? []) {
    const npcId = +match.replaceAll("$", "").replaceAll("npcPlural:", "");
    returnText = returnText.replaceAll(match, npcs.get(npcId)?.Name ?? "");
  }

  const regex4 = /\$npcNamePlural:(\d+)\$/gi;
  matches = returnText.match(regex4);
  for (const match of matches ?? []) {
    const npcId = +match.replaceAll("$", "").replaceAll("npcNamePlural:", "");
    returnText = returnText.replaceAll(
      match,
      `${npcs.get(npcId)?.Name ?? ""}'s`
    );
  }

  const regex5 = /\$npcTitle:(\d+)\$/gi;
  matches = returnText.match(regex5);
  for (const match of matches ?? []) {
    const npcId = +match.replaceAll("$", "").replaceAll("npcTitle:", "");
    returnText = returnText.replaceAll(match, npcs.get(npcId)?.Name ?? "");
  }

  return returnText;
}

export function parseQuests(html: string, quests: Map<number, QuestMetadata>) {
  let returnText = html;
  const regex = /\$quest:(\d+)\$/gi;
  let matches = returnText.match(regex);

  for (const match of matches ?? []) {
    const questId = +match.replaceAll("$", "").replaceAll("quest:", "");
    returnText = returnText.replaceAll(match, quests.get(questId)?.Name ?? "");
  }

  return returnText;
}

export function parseSkills(html: string, skills: Map<number, SkillMetadata>) {
  let returnText = html;
  const regex = /\$skill:(\d+)\$/gi;
  let matches = returnText.match(regex);

  for (const match of matches ?? []) {
    const skillId = +match.replaceAll("$", "").replaceAll("skill:", "");
    returnText = returnText.replaceAll(match, skills.get(skillId)?.Name ?? "");
  }

  return returnText;
}

export function parseMaps(html: string, maps: Map<number, string>) {
  let returnText = html;
  const regex = /\$map:(\d+)\$/gi;
  let matches = returnText.match(regex);

  for (const match of matches ?? []) {
    const mapId = +match.replaceAll("$", "").replaceAll("map:", "");
    returnText = returnText.replaceAll(match, maps.get(mapId) ?? "");
  }

  return returnText;
}
