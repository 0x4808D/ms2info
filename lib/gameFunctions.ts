const Earring = 12;
const Hat = 13;
const Clothes = 14;
const Pants = 15;
const Gloves = 16;
const Shoes = 17;
const Cape = 18;
const Necklace = 19;
const Ring = 20;
const Belt = 21;
const Overall = 22;
const Bludgeon = 30;
const Dagger = 31;
const Longsword = 32;
const Scepter = 33;
const ThrowingStar = 34;
const SpellBook = 40;
const Shield = 41;
const Greatsword = 50;
const Bow = 51;
const Staff = 52;
const Cannon = 53;
const Blade = 54;
const Knuckle = 55;
const Orb = 56;

const NoRarity = 0;
const CommonRarity = 1;
const RareRarity = 2;
const ExceptionalRarity = 3;
const EpicRarity = 4;
const LegendaryRarity = 5;
const AscendantRarity = 6;

const ItemLevelRarityCoefficient: any = [];
ItemLevelRarityCoefficient[Bludgeon] = 1;
ItemLevelRarityCoefficient[Dagger] = 1;
ItemLevelRarityCoefficient[Longsword] = 1;
ItemLevelRarityCoefficient[Scepter] = 1;
ItemLevelRarityCoefficient[ThrowingStar] = 1;
ItemLevelRarityCoefficient[SpellBook] = 1;
ItemLevelRarityCoefficient[Shield] = 1;
ItemLevelRarityCoefficient[Greatsword] = 1;
ItemLevelRarityCoefficient[Bow] = 1;
ItemLevelRarityCoefficient[Staff] = 1;
ItemLevelRarityCoefficient[Cannon] = 1;
ItemLevelRarityCoefficient[Blade] = 1;
ItemLevelRarityCoefficient[Knuckle] = 1;
ItemLevelRarityCoefficient[Orb] = 1;
ItemLevelRarityCoefficient[Hat] = 1;
ItemLevelRarityCoefficient[Clothes] = 1;
ItemLevelRarityCoefficient[Pants] = 1;
ItemLevelRarityCoefficient[Gloves] = 1;
ItemLevelRarityCoefficient[Shoes] = 1;
ItemLevelRarityCoefficient[Overall] = 1;
ItemLevelRarityCoefficient[Earring] = 0;
ItemLevelRarityCoefficient[Cape] = 0;
ItemLevelRarityCoefficient[Necklace] = 0;
ItemLevelRarityCoefficient[Ring] = 0;
ItemLevelRarityCoefficient[Belt] = 1;

const ItemLevelCoefficient: any = [];
ItemLevelCoefficient[Bludgeon] = 1;
ItemLevelCoefficient[Dagger] = 1;
ItemLevelCoefficient[Longsword] = 1;
ItemLevelCoefficient[Scepter] = 1;
ItemLevelCoefficient[ThrowingStar] = 1;
ItemLevelCoefficient[SpellBook] = 1;
ItemLevelCoefficient[Shield] = 1;
ItemLevelCoefficient[Greatsword] = 1;
ItemLevelCoefficient[Bow] = 1;
ItemLevelCoefficient[Staff] = 1;
ItemLevelCoefficient[Cannon] = 1;
ItemLevelCoefficient[Blade] = 1;
ItemLevelCoefficient[Knuckle] = 1;
ItemLevelCoefficient[Orb] = 1;
ItemLevelCoefficient[Hat] = 0.21;
ItemLevelCoefficient[Clothes] = 0.32;
ItemLevelCoefficient[Pants] = 0.3;
ItemLevelCoefficient[Gloves] = 0.06;
ItemLevelCoefficient[Shoes] = 0.06;
ItemLevelCoefficient[Overall] = 0.62;
ItemLevelCoefficient[Earring] = 0.2;
ItemLevelCoefficient[Cape] = 0.2;
ItemLevelCoefficient[Necklace] = 0.2;
ItemLevelCoefficient[Ring] = 0.2;
ItemLevelCoefficient[Belt] = 0.2;

const LimitBreakItemLevelCoefficient: any = [];
LimitBreakItemLevelCoefficient[0] = 0;
LimitBreakItemLevelCoefficient[1] = 0.02;
LimitBreakItemLevelCoefficient[2] = 0.04;
LimitBreakItemLevelCoefficient[3] = 0.06;
LimitBreakItemLevelCoefficient[4] = 0.08;
LimitBreakItemLevelCoefficient[5] = 0.1;
LimitBreakItemLevelCoefficient[6] = 0.14;
LimitBreakItemLevelCoefficient[7] = 0.18;
LimitBreakItemLevelCoefficient[8] = 0.23;
LimitBreakItemLevelCoefficient[9] = 0.29;
LimitBreakItemLevelCoefficient[10] = 0.44;
LimitBreakItemLevelCoefficient[11] = 0.74;
LimitBreakItemLevelCoefficient[12] = 1.05;
LimitBreakItemLevelCoefficient[13] = 1.36;
LimitBreakItemLevelCoefficient[14] = 1.68;
LimitBreakItemLevelCoefficient[15] = 2;

const LimitBreakItemLevelCoefficientNA: any = [];
LimitBreakItemLevelCoefficientNA[0] = 0;
LimitBreakItemLevelCoefficientNA[1] = 0.02;
LimitBreakItemLevelCoefficientNA[2] = 0.04;
LimitBreakItemLevelCoefficientNA[3] = 0.07;
LimitBreakItemLevelCoefficientNA[4] = 0.1;
LimitBreakItemLevelCoefficientNA[5] = 0.14;
LimitBreakItemLevelCoefficientNA[6] = 0.19;
LimitBreakItemLevelCoefficientNA[7] = 0.25;
LimitBreakItemLevelCoefficientNA[8] = 0.32;
LimitBreakItemLevelCoefficientNA[9] = 0.4;
LimitBreakItemLevelCoefficientNA[10] = 0.5;
LimitBreakItemLevelCoefficientNA[11] = 0.64;
LimitBreakItemLevelCoefficientNA[12] = 0.84;
LimitBreakItemLevelCoefficientNA[13] = 1.12;
LimitBreakItemLevelCoefficientNA[14] = 1.5;
LimitBreakItemLevelCoefficientNA[15] = 2;

const LevelScoreFactorNA: any = [];
for (let i = 0; i < 100; i++) {
  LevelScoreFactorNA[i] = 0;
}
LevelScoreFactorNA[57] = 2.899;
LevelScoreFactorNA[60] = 3.4442;
LevelScoreFactorNA[67] = 12.538;
LevelScoreFactorNA[70] = 14.15;
LevelScoreFactorNA[80] = 45.91;
LevelScoreFactorNA[90] = 140.13;

const RarityScoreFactor: any = [];
RarityScoreFactor[NoRarity] = 1;
RarityScoreFactor[CommonRarity] = 1;
RarityScoreFactor[RareRarity] = 1;
RarityScoreFactor[ExceptionalRarity] = 1;
RarityScoreFactor[EpicRarity] = 0.558;
RarityScoreFactor[LegendaryRarity] = 1.2;
RarityScoreFactor[AscendantRarity] = 1.9;

function clipValue(
  clipMinValue: number,
  floorValue: number,
  clipMaxValue: number
) {
  if (clipMinValue < floorValue) {
    clipMinValue = floorValue;
  }
  if (clipMaxValue < clipMinValue) {
    clipMinValue = clipMaxValue;
  }
  return clipMinValue;
}

export function calcItemGearScore(
  gearScoreFactorValue: number,
  rarity: number,
  itemSlot: number,
  enchantLevel: number,
  limitBreakLevel: number
) {
  let maxEnchantValue = 15;
  enchantLevel = clipValue(enchantLevel, 0, maxEnchantValue);
  let scoreResult = 0;
  let itemGearScore = 0;
  let addItemGearScore = 0;
  if (gearScoreFactorValue > 0) {
    if (limitBreakLevel < 60) {
      if (rarity > 3 && gearScoreFactorValue >= 50) {
        if (ItemLevelRarityCoefficient[itemSlot] > 0) {
          if (rarity >= 5) {
            scoreResult =
              (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
                ItemLevelCoefficient[itemSlot] *
                2 *
                Math.max(rarity - 3, 1) +
              Math.max(
                (gearScoreFactorValue - 50) *
                  100 *
                  ItemLevelCoefficient[itemSlot],
                0
              );
          } else {
            scoreResult =
              (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
              ItemLevelCoefficient[itemSlot] *
              2 *
              Math.max(rarity - 3, 1);
          }
        } else {
          if (
            itemSlot == Earring ||
            itemSlot == Cape ||
            itemSlot == Necklace ||
            itemSlot == Ring
          ) {
            if (rarity >= 5) {
              scoreResult =
                (10 * gearScoreFactorValue + Math.max((rarity - 2) * 5, 0)) *
                  ItemLevelCoefficient[itemSlot] *
                  2 *
                  Math.max(rarity - 4, 1) +
                Math.max(
                  (gearScoreFactorValue - 50) *
                    100 *
                    ItemLevelCoefficient[itemSlot],
                  0
                );
            } else {
              scoreResult =
                (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
                ItemLevelCoefficient[itemSlot];
            }
          } else {
            scoreResult =
              (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
              ItemLevelCoefficient[itemSlot];
          }
        }
      } else {
        scoreResult =
          (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
          ItemLevelCoefficient[itemSlot];
      }
      if (rarity > 3 && gearScoreFactorValue >= 50) {
        if (ItemLevelRarityCoefficient[itemSlot] > 0) {
          scoreResult =
            (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
            1030 *
            RarityScoreFactor[rarity] *
            ItemLevelCoefficient[itemSlot];
        } else {
          if (
            itemSlot == Earring ||
            itemSlot == Cape ||
            itemSlot == Necklace ||
            itemSlot == Ring
          ) {
            scoreResult =
              (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
              1030 *
              RarityScoreFactor[rarity] *
              ItemLevelCoefficient[itemSlot];
          } else {
            scoreResult =
              (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
              ItemLevelCoefficient[itemSlot];
          }
        }
      } else {
        scoreResult =
          (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
          ItemLevelCoefficient[itemSlot];
      }
    } else {
      if (limitBreakLevel < 70) {
        if (rarity > 3 && gearScoreFactorValue >= 50) {
          if (ItemLevelRarityCoefficient[itemSlot] > 0) {
            scoreResult =
              (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
              1030 *
              RarityScoreFactor[rarity] *
              ItemLevelCoefficient[itemSlot];
          } else {
            if (
              itemSlot == Earring ||
              itemSlot == Cape ||
              itemSlot == Necklace ||
              itemSlot == Ring
            ) {
              scoreResult =
                (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
                1030 *
                RarityScoreFactor[rarity] *
                ItemLevelCoefficient[itemSlot];
            } else {
              scoreResult =
                (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
                ItemLevelCoefficient[itemSlot];
            }
          }
        } else {
          scoreResult =
            (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
            ItemLevelCoefficient[itemSlot];
        }
      } else {
        if (rarity > 3 && gearScoreFactorValue >= 50) {
          let rarityFactor = RarityScoreFactor[rarity];
          if (ItemLevelRarityCoefficient[itemSlot] > 0) {
            scoreResult =
              (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
              1030 *
              rarityFactor *
              ItemLevelCoefficient[itemSlot];
          } else {
            if (
              itemSlot == Earring ||
              itemSlot == Cape ||
              itemSlot == Necklace ||
              itemSlot == Ring
            ) {
              scoreResult =
                (2 + LevelScoreFactorNA[gearScoreFactorValue]) *
                1030 *
                rarityFactor *
                ItemLevelCoefficient[itemSlot];
            } else {
              scoreResult =
                (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
                ItemLevelCoefficient[itemSlot];
            }
          }
        } else {
          scoreResult =
            (10 * gearScoreFactorValue + Math.max((rarity - 1) * 5, 0)) *
            ItemLevelCoefficient[itemSlot];
          scoreResult = 0;
          if (limitBreakLevel < 60) {
            itemGearScore = scoreResult;
          } else {
            if (limitBreakLevel < 70) {
              itemGearScore = scoreResult;
            } else {
              itemGearScore = scoreResult;
            }
          }
          if (limitBreakLevel < 60) {
            if (rarity >= 4) {
              addItemGearScore =
                itemGearScore * LimitBreakItemLevelCoefficientNA[enchantLevel];
            } else {
              addItemGearScore =
                itemGearScore * LimitBreakItemLevelCoefficient[enchantLevel];
            }
          } else {
            if (limitBreakLevel < 70) {
              if (rarity >= 4) {
                addItemGearScore =
                  itemGearScore *
                  LimitBreakItemLevelCoefficientNA[enchantLevel];
              } else {
                addItemGearScore =
                  itemGearScore * LimitBreakItemLevelCoefficient[enchantLevel];
              }
            } else {
              if (limitBreakLevel < 80) {
                if (rarity >= 4) {
                  addItemGearScore =
                    itemGearScore *
                    LimitBreakItemLevelCoefficientNA[enchantLevel];
                } else {
                  addItemGearScore =
                    itemGearScore *
                    LimitBreakItemLevelCoefficient[enchantLevel];
                }
              } else {
                if (rarity >= 4) {
                  addItemGearScore =
                    itemGearScore *
                    LimitBreakItemLevelCoefficientNA[enchantLevel];
                } else {
                  addItemGearScore =
                    itemGearScore *
                    LimitBreakItemLevelCoefficient[enchantLevel];
                }
              }
            }
          }
        }
      }
    }
  }
  itemGearScore = scoreResult;
  return [itemGearScore, addItemGearScore];
}

export enum ItemType {
  None,
  Currency,
  Furnishing,
  Pet,
  Lapenshard,
  Medal,
  Earring = 12,
  Hat = 13,
  Clothes = 14,
  Pants = 15,
  Gloves = 16,
  Shoes = 17,
  Cape = 18,
  Necklace = 19,
  Ring = 20,
  Belt = 21,
  Overall = 22,
  Bludgeon = 30,
  Dagger = 31,
  Longsword = 32,
  Scepter = 33,
  ThrowingStar = 34,
  Spellbook = 40,
  Shield = 41,
  Greatsword = 50,
  Bow = 51,
  Staff = 52,
  Cannon = 53,
  Blade = 54,
  Knuckle = 55,
  Orb = 56,
}

export const GetItemType = (pItemId: number) => {
  const index = Math.floor(pItemId / 100000);
  switch (index) {
    case 112:
      return ItemType.Earring;
    case 113:
      return ItemType.Hat;
    case 114:
      return ItemType.Clothes;
    case 115:
      return ItemType.Pants;
    case 116:
      return ItemType.Gloves;
    case 117:
      return ItemType.Shoes;
    case 118:
      return ItemType.Cape;
    case 119:
      return ItemType.Necklace;
    case 120:
      return ItemType.Ring;
    case 121:
      return ItemType.Belt;
    case 122:
      return ItemType.Overall;
    case 130:
      return ItemType.Bludgeon;
    case 131:
      return ItemType.Dagger;
    case 132:
      return ItemType.Longsword;
    case 133:
      return ItemType.Scepter;
    case 134:
      return ItemType.ThrowingStar;
    case 140:
      return ItemType.Spellbook;
    case 141:
      return ItemType.Shield;
    case 150:
      return ItemType.Greatsword;
    case 151:
      return ItemType.Bow;
    case 152:
      return ItemType.Staff;
    case 153:
      return ItemType.Cannon;
    case 154:
      return ItemType.Blade;
    case 155:
      return ItemType.Knuckle;
    case 156:
      return ItemType.Orb;
    case 209:
      return ItemType.Medal;
    case 410:
    case 420:
    case 430:
      return ItemType.Lapenshard;
    case 501:
    case 502:
    case 503:
    case 504:
    case 505:
      return ItemType.Furnishing;
    case 600:
      return ItemType.Pet;
    case 900:
      return ItemType.Currency;
    default:
      return ItemType.None;
  }
};
