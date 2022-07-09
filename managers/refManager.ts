import { ItemManager } from "./itemManager";
import { MapManager } from "./mapManager";
import { NPCManager } from "./npcManager";
import { QuestManager } from "./questManager";
import { SkillManager } from "./skillManager";

export class GlobalRef<T> {
  private readonly sym: symbol;

  constructor(uniqueName: string) {
    this.sym = Symbol.for(uniqueName);
  }

  get value() {
    return (global as any)[this.sym] as T;
  }

  set value(value: T) {
    (global as any)[this.sym] = value;
  }
}

export async function GetItemManager() {
  const itemManagerRef = new GlobalRef<ItemManager>("itemManager");
  if (!itemManagerRef.value) {
    await initGlobals();
  }
  return itemManagerRef.value;
}

export async function GetQuestManager() {
  const questManagerRef = new GlobalRef<QuestManager>("questManager");
  if (!questManagerRef.value) {
    await initGlobals();
  }
  return questManagerRef.value;
}

export async function GetNPCManager() {
  const npcManagerRef = new GlobalRef<NPCManager>("npcManager");
  if (!npcManagerRef.value) {
    await initGlobals();
  }
  return npcManagerRef.value;
}

export async function GetMapManager() {
  const mapManagerRef = new GlobalRef<MapManager>("mapManager");
  if (!mapManagerRef.value) {
    await initGlobals();
  }
  return mapManagerRef.value;
}

export async function GetSkillManager() {
  const skillManagerRef = new GlobalRef<SkillManager>("skillManager");
  if (!skillManagerRef.value) {
    await initGlobals();
  }
  return skillManagerRef.value;
}

export async function initGlobals() {
  const itemManagerRef = new GlobalRef<ItemManager>("itemManager");
  if (!itemManagerRef.value) {
    itemManagerRef.value = new ItemManager();
  }

  const questManagerRef = new GlobalRef<QuestManager>("questManager");
  if (!questManagerRef.value) {
    questManagerRef.value = new QuestManager();
  }

  const npcManagerRef = new GlobalRef<NPCManager>("npcManager");
  if (!npcManagerRef.value) {
    npcManagerRef.value = new NPCManager();
  }

  const mapManagerRef = new GlobalRef<MapManager>("mapManager");
  if (!mapManagerRef.value) {
    mapManagerRef.value = new MapManager();
  }

  const skillManagerRef = new GlobalRef<SkillManager>("skillManager");
  if (!skillManagerRef.value) {
    skillManagerRef.value = new SkillManager();
  }

  await Promise.all([
    itemManagerRef.value.load(),
    questManagerRef.value.load(),
    npcManagerRef.value.load(),
    mapManagerRef.value.load(),
    skillManagerRef.value.load(),
  ]);

  itemManagerRef.value.parse();
  questManagerRef.value.parse();
}
