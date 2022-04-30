export const languages = [
  "Common",
  "Dwarvish",
  "Elvish",
  "Giant",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Orc",
  "Abyssal",
  "Celestial",
  "Draconic",
  "Deep Speech",
  "Infernal",
  "Primordial",
  "Sylvan",
  "Undercommon",
];

export const conditions = [
  "Blinded",
  "Charmed",
  "Deafened",
  "Frightened",
  "Grappled",
  "Incapacitated",
  "Invisible",
  "Paralyzed",
  "Petrified",
  "Poisoned",
  "Prone",
  "Restrained",
  "Stunned",
  "Unconscious",
  "Exhaustion",
];

export const skills = [
  {
    stat: "DEX",
    name: "Acrobatics",
  },
  {
    stat: "WIS",
    name: "Animal Handling",
  },
  {
    stat: "INT",
    name: "Arcana",
  },
  {
    stat: "STR",
    name: "Athletics",
  },
  {
    stat: "CHA",
    name: "Deception",
  },
  {
    stat: "INT",
    name: "History",
  },
  {
    stat: "WIS",
    name: "Insight",
  },
  {
    stat: "CHA",
    name: "Intimidation",
  },
  {
    stat: "INT",
    name: "Investigation",
  },
  {
    stat: "WIS",
    name: "Medicine",
  },
  {
    stat: "INT",
    name: "Nature",
  },
  {
    stat: "WIS",
    name: "Perception",
  },
  {
    stat: "CHA",
    name: "Performance",
  },
  {
    stat: "CHA",
    name: "Persuasion",
  },
  {
    stat: "INT",
    name: "Religion",
  },
  {
    stat: "DEX",
    name: "Sleight of Hand",
  },
  {
    stat: "DEX",
    name: "Stealth",
  },
  {
    stat: "WIS",
    name: "Survival",
  },
];

export const damageType = [
  "Slashing",
  "Piercing",
  "Bludgeoning",
  "Poison",
  "Acid",
  "Fire",
  "Cold",
  "Radiant",
  "Necrotic",
  "Lightning",
  "Thunder",
  "Force",
  "Psychic",
];

export const size = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];

export const type = [
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead",
];

export const states = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

export const alignment_view = [
  {
    value: 0,
    label: "Good",
  },
  {
    value: 10,
    label: "Neutral",
  },
  {
    value: 20,
    label: "Evil",
  },
];

export const alignment_behavior = [
  {
    value: 0,
    label: "Lawful",
  },
  {
    value: 10,
    label: "Neutral",
  },
  {
    value: 20,
    label: "Chaotic",
  },
];

export const challengeRating = [
  {
    value: "0",
    exp: 10,
    profBonus: 2,
  },
  {
    value: "1/8",
    exp: 25,
    profBonus: 2,
  },
  {
    value: "1/4",
    exp: 50,
    profBonus: 2,
  },
  {
    value: "1/2",
    exp: 100,
    profBonus: 2,
  },
  {
    value: "1",
    exp: 200,
    profBonus: 2,
  },
  {
    value: "2",
    exp: 450,
    profBonus: 2,
  },
  {
    value: "3",
    exp: 700,
    profBonus: 2,
  },
  {
    value: "4",
    exp: 1100,
    profBonus: 2,
  },
  {
    value: "5",
    exp: 1800,
    profBonus: 3,
  },
  {
    value: "6",
    exp: 2300,
    profBonus: 3,
  },
  {
    value: "7",
    exp: 2900,
    profBonus: 3,
  },
  {
    value: "8",
    exp: 3900,
    profBonus: 3,
  },
  {
    value: "9",
    exp: 5000,
    profBonus: 4,
  },
  {
    value: "10",
    exp: 5900,
    profBonus: 4,
  },
  {
    value: "11",
    exp: 7200,
    profBonus: 4,
  },
  {
    value: "12",
    exp: 8400,
    profBonus: 4,
  },
  {
    value: "13",
    exp: 10000,
    profBonus: 5,
  },
  {
    value: "14",
    exp: 11500,
    profBonus: 5,
  },
  {
    value: "15",
    exp: 13000,
    profBonus: 5,
  },
  {
    value: "16",
    exp: 15000,
    profBonus: 5,
  },
  {
    value: "17",
    exp: 18000,
    profBonus: 6,
  },
  {
    value: "18",
    exp: 20000,
    profBonus: 6,
  },
  {
    value: "19",
    exp: 22000,
    profBonus: 6,
  },
  {
    value: "20",
    exp: 25000,
    profBonus: 6,
  },
  {
    value: "21",
    exp: 33000,
    profBonus: 7,
  },
  {
    value: "22",
    exp: 41000,
    profBonus: 7,
  },
  {
    value: "23",
    exp: 50000,
    profBonus: 7,
  },
  {
    value: "24",
    exp: 62000,
    profBonus: 7,
  },
  {
    value: "25",
    exp: 75000,
    profBonus: 8,
  },
  {
    value: "26",
    exp: 90000,
    profBonus: 8,
  },
  {
    value: "27",
    exp: 105000,
    profBonus: 8,
  },
  {
    value: "28",
    exp: 120000,
    profBonus: 8,
  },
  {
    value: "29",
    exp: 135000,
    profBonus: 9,
  },
  {
    value: "30",
    exp: 155000,
    profBonus: 9,
  },
];

export const actionButtonsInit = [
  {
    title: "SPECIAL TRAITS",
  },
  {
    title: "ACTIONS",
    hasAttack: true,
  },
  {
    title: "BONUS ACTION",
    hasAttack: true,
  },
  {
    title: "REACTIONS",
  },
  {
    title: "LEGENDARY ACTIONS",
    isLegendary: true
  },
  {
    title: "LIAR ACTIONS",
  },
];

export const atackType =[
  "Mele Spell",
  "Mele Weapone",
  "Range Spell",
  "Range Weapone"
]