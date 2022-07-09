export const Rarity = [
  {
    id: 1,
    name: "Normal",
    color: "#ffffff",
    background: "/static/rarity/common.png",
  },
  {
    id: 2,
    name: "Uncommon",
    color: "#96ff00",
    background: "/static/rarity/uncommon.png",
  },
  {
    id: 3,
    name: "Rare",
    color: "#00c0ff",
    background: "/static/rarity/rare.png",
  },
  {
    id: 4,
    name: "Epic",
    color: "#8900ff",
    background: "/static/rarity/epic.png",
  },
  {
    id: 5,
    name: "Legendary",
    color: "#ffd533",
    background: "/static/rarity/legendary.png",
  },
  {
    id: 6,
    name: "Ascendant",
    color: "#ff6c00",
    background: "/static/rarity/ascendant.png",
  },
];

export const TypeToString: any = {
  "0": "Misc",
  "1": "Currency",
  "2": "Furnishing",
  "3": "Pet",
  "4": "Lapenshard",
  "5": "Medal",
  "12": "Earring",
  "13": "Hat",
  "14": "Clothes",
  "15": "Pants",
  "16": "Gloves",
  "17": "Shoes",
  "18": "Cape",
  "19": "Necklace",
  "20": "Ring",
  "21": "Belt",
  "22": "Overall",
  "30": "Bludgeon",
  "31": "Dagger",
  "32": "Longsword",
  "33": "Scepter",
  "34": "ThrowingStar",
  "40": "Spellbook",
  "41": "Shield",
  "50": "Greatsword",
  "51": "Bow",
  "52": "Staff",
  "53": "Cannon",
  "54": "Blade",
  "55": "Knuckle",
  "56": "Orb",
};

export const GenderString: any = {
  "0": "Male",
  "1": "Female",
  "2": "Universal",
};

export enum Job {
  GlobalJob = 0,
  Beginner = 1,
  Knight = 10,
  Berserker = 20,
  Wizard = 30,
  Priest = 40,
  Archer = 50,
  HeavyGunner = 60,
  Thief = 70,
  Assassin = 80,
  RuneBlader = 90,
  Striker = 100,
  SoulBinder = 110,
}

export enum NpcType {
  Enemy = 0,
  Ally = 1,
  Friendly = 2,
}
