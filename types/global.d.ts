type ItemMetadata = {
  Id: number;
  Name: string;
  Tab: number;
  Slots: number[];
  Medal: number;
  Rarity: number;
  Gem: {
    Gem: number;
  };
  UGC: {
    Mesh: string;
  };
  Life: {
    DurationPeriod: number;
    ExpirationTime: string;
    ExpirationType: number;
    ExpirationTypeDuration: number;
  };
  Pet: {
    PetId: number;
  };
  Basic: {
    Tag: string;
  };
  Limit: {
    JobRequirements: number[];
    JobRecommendations: number[];
    LevelLimitMin: number;
    LevelLimitMax: number;
    Gender: number;
    TransferType: number;
    Sellable: boolean;
    Breakable: boolean;
    MeretMarketListable: boolean;
    DisableEnchant: boolean;
    TradeLimitByRarity: number;
    VipOnly: boolean;
  };
  Skill: {
    SkillId: number;
    SkillLevel: number;
  };
  Fusion: {
    Fusionable: boolean;
  };
  Install: {
    IsCubeSolid: boolean;
    ObjectId: number;
  };
  Property: {
    StackLimit: number;
    SkinType: number;
    Category: string;
    BlackMarketCategory: string;
    DisableAttributeChange: boolean;
    GearScoreFactor: number;
    TradeableCount: number;
    RepackageCount: number;
    RepackageItemConsumeCount: number;
    DisableTradeWithinAccount: boolean;
    DisableDrop: boolean;
    SocketDataId: number;
    Sell: {
      SellPrice: number[];
      SellPriceCustom: number[];
    };
    SlotIcon: string;
    SlotIconCustom: string;
  };
  Customize: {
    ColorPalette: number;
    ColorIndex: number;
    HairPresets: number[];
  };
  Function: {
    Name: string;
    Id: number;
    OpenItemBox: any;
    SelectItemBox: any;
    ChatEmoticonAdd: any;
    OpenMassiveEvent: any;
    LevelPotion: any;
    VIPCoupon: any;
    HongBao: any;
    OpenCoupleEffectBox: any;
    InstallBillboard: any;
    SurvivalSkin: any;
    SurvivalLevelExp: any;
  };
  Option: {
    Static: number;
    Random: number;
    Constant: number;
    OptionLevelFactor: number;
    OptionId: number;
  };
  Music: {
    PlayCount: number;
    MasteryValue: number;
    MasteryValueMax: number;
    IsCustomScore: boolean;
    FileName: string;
    PlayTime: number;
  };
  Housing: {
    HousingCategory: number;
    TrophyId: number;
    TrophyLevel: number;
  };
  Shop: {
    ShopId: number;
  };
  BreakRewards: any[];
  AdditionalEffect: {
    Id: any;
    Level: any;
  };
  Descriptions: {
    MainDesc: string;
    GuideDesc: string;
    TooltipDesc: string;
  };
  Type: number;
  GearScore: {
    value: number;
    added: number;
  };
};

type QuestMetadata = {
  Feature: any;
  Locale: string;
  Basic: {
    ChapterID: number;
    Id: number;
    QuestType: number;
    Account: number;
    StandardLevel: number;
    AutoStart: number;
    DisableGiveup: number;
    ExceptChapterClear: number;
    Repeatable: number;
    UsePeriod: string;
    EventTag: string;
    Locking: number;
    TabIndex: number;
    ForceRegistGuide: number;
    UseNavigation: boolean;
  };
  Notify: {
    CompleteUiEffect: string;
    AcceptSoundKey: string;
    CompleteSoundKey: string;
  };
  Require: {
    Level: number;
    MaxLevel: number;
    Job: number[];
    RequiredQuests: number[];
    SelectableQuest: number[];
    Unrequire: any[];
    Field: number;
    Achievement: number;
    UnreqAchievement: number[];
    GroupID: number;
    DayOfWeek: string;
    GearScore: number;
  };
  StartNpc: number;
  CompleteNpc: number;
  Reward: {
    Exp: number;
    RelativeExp: string;
    Money: number;
    Karma: number;
    Lu: number;
  };
  RewardItem: [
    {
      Code: number;
      Rank: number;
      Count: number;
    },
    {
      Code: number;
      Rank: number;
      Count: number;
    },
    {
      Code: number;
      Rank: number;
      Count: number;
    }
  ];
  ProgressMap: number[];
  Guide: {
    Type: string;
    Icon: string;
    MinLevel: number;
    MaxLevel: number;
    Group: any;
  };
  Npc: {
    Enable: number;
    GoToField: number;
    GoToPortal: number;
  };
  Dungeon: {
    State: number;
    GoToDungeon: number;
    GoToInstanceID: number;
  };
  RemoteAccept: {
    UseRemote: string;
    RequireField: number;
  };
  RemoteComplete: {
    UseRemote: string;
    RequireField: number;
    RequireDungeonClear: number;
  };
  SummonPortal: {
    FieldID: number;
    PortalID: number;
  };
  Event: string;
  Condition: any[]; // QuestCondition[]
  Navigation: any[];
  Dispatch: {
    Type: any;
    FieldId: number;
    PortalId: number;
    ScriptId: number;
  };
  Name: string;
  Description: string;
};

type NPCMetadata = {
  Id: number;
  Name: string;
  NpcMetadataModel: {
    Model: string;
    Scale: number;
  };
  TemplateId: number;
  Type: number;
  Level: number;
  StateActions: {
    Normal: [
      {
        Item1: string;
        Item2: number;
        Item3: number;
      },
      {
        Item1: string;
        Item2: number;
        Item3: number;
      },
      {
        Item1: string;
        Item2: number;
        Item3: number;
      }
    ];
    Combat: [
      {
        Item1: string;
        Item2: number;
        Item3: number;
      }
    ];
    Dead: [
      {
        Item1: string;
        Item2: number;
        Item3: number;
      }
    ];
  };
  AiInfo: string;
  Experience: number;
  GlobalDropBoxIds: any[];
  Rotation: {
    X: number;
    Y: number;
    Z: number;
  };
  MoveRange: number;
  Coord: {
    X: number;
    Y: number;
    Z: number;
  };
  Animation: number;
  NpcMetadataBasic: {
    NpcAttackGroup: number;
    NpcDefenseGroup: number;
    AttackDamage: boolean;
    HitImmune: boolean;
    AbnormalImmune: boolean;
    Class: number;
    Kind: number;
    HpBar: number;
    RotationDisabled: boolean;
    CarePathToEnemy: boolean;
    MaxSpawnCount: Number;
    GroupSpawnCount: number;
    RareDegree: number;
    Difficulty: number;
    PropertyTags: any[];
    MainTags: string[];
    SubTags: string[];
    EventTags: any[];
    Race: any;
    MinimapIconName: string;
  };
  NpcMetadataSpeed: {
    RotationSpeed: number;
    WalkSpeed: number;
    RunSpeed: number;
  };
  NpcMetadataDistance: {
    Avoid: number;
    Sight: number;
    SightHeightUp: number;
    SightHeightDown: number;
    CustomLastSightRadius: number;
    CustomLastSightUp: number;
    CustomLastSightDown: number;
  };
  NpcMetadataSkill: {
    SkillIds: any[];
    SkillLevels: string;
    SkillPriorities: string;
    SkillProbs: any[];
    SkillCooldown: number;
  };
  NpcMetadataEffect: {
    EffectIds: any[];
    EffectLevels: string[];
    EffectGroup: number;
  };
  NpcMetadataCombat: {
    CombatAbandonTick: number;
    CombatAbandonImpossibleTick: number;
    CanIgnoreExtendedLifetime: boolean;
    CanShowHiddenTarget: boolean;
  };
  NpcMetadataDead: {
    Time: number;
    Actions: string[];
  };
  NpcMetadataInteract: {
    InteractFunction: any;
    InteractCastingTime: number;
    InteractCooldownTime: number;
  };
  NpcStats: {
    Str: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Dex: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Int: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Luk: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Hp: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    HpRegen: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    HpInterval: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Sp: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    SpRegen: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    SpInterval: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Ep: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    EpRegen: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    EpInterval: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    AtkSpd: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    MoveSpd: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Accuracy: {
      Bonus: 8;
      Base: 8;
      Total: 8;
    };
    Evasion: {
      Bonus: 4;
      Base: 4;
      Total: 4;
    };
    CritRate: {
      Bonus: 0;
      Base: 0;
      Total: 0;
    };
    CritDamage: {
      Bonus: 0;
      Base: 0;
      Total: 0;
    };
    CritResist: {
      Bonus: 0;
      Base: 0;
      Total: 0;
    };
    Defense: {
      Bonus: 29;
      Base: 29;
      Total: 29;
    };
    Guard: {
      Bonus: 0;
      Base: 0;
      Total: 0;
    };
    JumpHeight: {
      Bonus: 0;
      Base: 0;
      Total: 0;
    };
    PhysAtk: {
      Bonus: 100;
      Base: 100;
      Total: 100;
    };
    MagAtk: {
      Bonus: 100;
      Base: 100;
      Total: 100;
    };
    PhysRes: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    MagRes: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    MinAtk: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    MaxAtk: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Damage: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    Pierce: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    MountSpeed: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    BonusAtk: {
      Bonus: number;
      Base: number;
      Total: number;
    };
    BonusAtkPet: {
      Bonus: number;
      Base: number;
      Total: number;
    };
  };
  ShopId: number;
  NpcMetadataCapsule: {
    Radius: number;
    Height: number;
    Ignore: boolean;
  };
};

type SkillMetadata = {
  SkillId: number;
  SkillLevels: [
    {
      Level: number;
      Spirit: number;
      Stamina: number;
      Feature: string;
      SkillMotions: {
        SequenceName: string;
        MotionEffect: string;
        SkillAttacks: {
          AttackPoint: number;
          TargetCount: number;
          MagicPathId: number;
          CubeMagicPathId: number;
          RangeProperty: {
            IncludeCaster: boolean;
            RangeType: string;
            Distance: number;
            RangeAdd: { X: number; Y: number; Z: number };
            RangeOffset: { X: number; Y: number; Z: number };
          };
          SkillConditions: any;
          DamageProperty: { DamageRate: number; HitSpeedRate: number };
        }[];
      }[];
      SkillAdditionalData: any;
      SkillUpgrade: {
        LevelRequired: number;
        SkillIdsRequired: any[];
        SkillLevelsRequired: any[];
      };
    }
  ];
  SubSkills: any[];
  Job: number;
  State: string;
  DamageType: number;
  Type: number;
  SubType: number;
  Element: number;
  SuperArmor: number;
  IsSpRecovery: boolean;
  MaxLevel: number;
  RangeType: number;
  Name: string;
  Descriptions: {
    [level: string]: string;
  };
};

type MapMetadata = {
  Id: number;
  Name: string;
};
