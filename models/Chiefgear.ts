export enum GearTier {
  Green = 'green',
  Blue = 'blue',
  Purple = 'purple',
  PurpleT1 = 'purple-T1',
  Gold = 'gold',
  GoldT1 = 'gold-T1',
  GoldT2 = 'gold-T2',
  Red = 'red',
  RedT1 = 'red-T1',
  RedT2 = 'red-T2',
  RedT3 = 'red-T3'
}

export type GearLevel = {
  order: number;
  level: string;
  tier: GearTier;
  stars: number;
  hardenedAlloy: number;
  polishingSolution: number;
  designPlans: number;
  lunarAmber: number;
};

// models ku
export const gearLevels: GearLevel[] = [
  { order: 0, level: 'green-0', tier: GearTier.Green, stars: 0, hardenedAlloy: 1500, polishingSolution: 15, designPlans: 0, lunarAmber: 0 },
  { order: 1, level: 'green-1', tier: GearTier.Green, stars: 1, hardenedAlloy: 3800, polishingSolution: 40, designPlans: 0, lunarAmber: 0 },
  { order: 2, level: 'blue-0', tier: GearTier.Blue, stars: 0, hardenedAlloy: 7000, polishingSolution: 70, designPlans: 0, lunarAmber: 0 },
  { order: 3, level: 'blue-1', tier: GearTier.Blue, stars: 1, hardenedAlloy: 9700, polishingSolution: 95, designPlans: 0, lunarAmber: 0 },
  { order: 4, level: 'blue-2', tier: GearTier.Blue, stars: 2, hardenedAlloy: 0, polishingSolution: 0, designPlans: 45, lunarAmber: 0 },
  { order: 5, level: 'blue-3', tier: GearTier.Blue, stars: 3, hardenedAlloy: 0, polishingSolution: 0, designPlans: 50, lunarAmber: 0 },
  { order: 6, level: 'purple-0', tier: GearTier.Purple, stars: 0, hardenedAlloy: 0, polishingSolution: 0, designPlans: 60, lunarAmber: 0 },
  { order: 7, level: 'purple-1', tier: GearTier.Purple, stars: 1, hardenedAlloy: 0, polishingSolution: 0, designPlans: 70, lunarAmber: 0 },
  { order: 8, level: 'purple-2', tier: GearTier.Purple, stars: 2, hardenedAlloy: 6500, polishingSolution: 65, designPlans: 40, lunarAmber: 0 },
  { order: 9, level: 'purple-3', tier: GearTier.Purple, stars: 3, hardenedAlloy: 8000, polishingSolution: 80, designPlans: 50, lunarAmber: 0 },
  { order: 10, level: 'purpleT1-0', tier: GearTier.PurpleT1, stars: 0, hardenedAlloy: 10000, polishingSolution: 95, designPlans: 60, lunarAmber: 0 },
  { order: 11, level: 'purpleT1-1', tier: GearTier.PurpleT1, stars: 1, hardenedAlloy: 11000, polishingSolution: 110, designPlans: 70, lunarAmber: 0 },
  { order: 12, level: 'purpleT1-2', tier: GearTier.PurpleT1, stars: 2, hardenedAlloy: 13000, polishingSolution: 130, designPlans: 85, lunarAmber: 0 },
  { order: 13, level: 'purpleT1-3', tier: GearTier.PurpleT1, stars: 3, hardenedAlloy: 15000, polishingSolution: 160, designPlans: 100, lunarAmber: 0 },
  { order: 14, level: 'gold-0', tier: GearTier.Gold, stars: 0, hardenedAlloy: 22000, polishingSolution: 220, designPlans: 40, lunarAmber: 0 },
  { order: 15, level: 'gold-1', tier: GearTier.Gold, stars: 1, hardenedAlloy: 23000, polishingSolution: 230, designPlans: 40, lunarAmber: 0 },
  { order: 16, level: 'gold-2', tier: GearTier.Gold, stars: 2, hardenedAlloy: 25000, polishingSolution: 250, designPlans: 45, lunarAmber: 0 },
  { order: 17, level: 'gold-3', tier: GearTier.Gold, stars: 3, hardenedAlloy: 26000, polishingSolution: 260, designPlans: 45, lunarAmber: 0 },
  { order: 18, level: 'goldT1-0', tier: GearTier.GoldT1, stars: 0, hardenedAlloy: 28000, polishingSolution: 280, designPlans: 45, lunarAmber: 0 },
  { order: 19, level: 'goldT1-1', tier: GearTier.GoldT1, stars: 1, hardenedAlloy: 30000, polishingSolution: 300, designPlans: 55, lunarAmber: 0 },
  { order: 20, level: 'goldT1-2', tier: GearTier.GoldT1, stars: 2, hardenedAlloy: 32000, polishingSolution: 320, designPlans: 55, lunarAmber: 0 },
  { order: 21, level: 'goldT1-3', tier: GearTier.GoldT1, stars: 3, hardenedAlloy: 35000, polishingSolution: 340, designPlans: 55, lunarAmber: 0 },
  { order: 22, level: 'goldT2-0', tier: GearTier.GoldT2, stars: 0, hardenedAlloy: 38000, polishingSolution: 360, designPlans: 55, lunarAmber: 0 },
  { order: 23, level: 'goldT2-1', tier: GearTier.GoldT2, stars: 1, hardenedAlloy: 43000, polishingSolution: 430, designPlans: 75, lunarAmber: 0 },
  { order: 24, level: 'goldT2-2', tier: GearTier.GoldT2, stars: 2, hardenedAlloy: 45000, polishingSolution: 460, designPlans: 80, lunarAmber: 0 },
  { order: 25, level: 'goldT2-3', tier: GearTier.GoldT2, stars: 3, hardenedAlloy: 48000, polishingSolution: 500, designPlans: 85, lunarAmber: 0 },
  { order: 26, level: 'red-0', tier: GearTier.Red, stars: 0, hardenedAlloy: 12500, polishingSolution: 132, designPlans: 21, lunarAmber: 2 },
  { order: 27, level: 'red-1', tier: GearTier.Red, stars: 1, hardenedAlloy: 12500, polishingSolution: 132, designPlans: 21, lunarAmber: 2 },
  { order: 28, level: 'red-2', tier: GearTier.Red, stars: 2, hardenedAlloy: 54000, polishingSolution: 132, designPlans: 21, lunarAmber: 2 },
  { order: 29, level: 'red-3', tier: GearTier.Red, stars: 3, hardenedAlloy: 56000, polishingSolution: 134, designPlans: 22, lunarAmber: 4 },
  { order: 30, level: 'redT1-0', tier: GearTier.RedT1, stars: 0, hardenedAlloy: 59000, polishingSolution: 140, designPlans: 22, lunarAmber: 2 },
  { order: 31, level: 'redT1-1', tier: GearTier.RedT1, stars: 1, hardenedAlloy: 61000, polishingSolution: 140, designPlans: 22, lunarAmber: 2 },
  { order: 32, level: 'redT1-2', tier: GearTier.RedT1, stars: 2, hardenedAlloy: 63000, polishingSolution: 140, designPlans: 22, lunarAmber: 2 },
  { order: 33, level: 'redT1-3', tier: GearTier.RedT1, stars: 3, hardenedAlloy: 65000, polishingSolution: 140, designPlans: 24, lunarAmber: 4 },
  { order: 34, level: 'redT2-0', tier: GearTier.RedT2, stars: 0, hardenedAlloy: 68000, polishingSolution: 140, designPlans: 23, lunarAmber: 2 },
  { order: 35, level: 'redT2-1', tier: GearTier.RedT2, stars: 1, hardenedAlloy: 70000, polishingSolution: 140, designPlans: 23, lunarAmber: 2 },
  { order: 36, level: 'redT2-2', tier: GearTier.RedT2, stars: 2, hardenedAlloy: 72000, polishingSolution: 149, designPlans: 26, lunarAmber: 4 },
  { order: 37, level: 'redT2-3', tier: GearTier.RedT2, stars: 3, hardenedAlloy: 74000, polishingSolution: 155, designPlans: 25, lunarAmber: 2 },
  { order: 38, level: 'redT3-0', tier: GearTier.RedT3, stars: 0, hardenedAlloy: 77000, polishingSolution: 155, designPlans: 25, lunarAmber: 2 },
  { order: 39, level: 'redT3-1', tier: GearTier.RedT3, stars: 1, hardenedAlloy: 80000, polishingSolution: 155, designPlans: 25, lunarAmber: 4 },
  { order: 40, level: 'redT3-2', tier: GearTier.RedT3, stars: 2, hardenedAlloy: 83000, polishingSolution: 167, designPlans: 27, lunarAmber: 3 },
  { order: 41, level: 'redT3-3', tier: GearTier.RedT3, stars: 3, hardenedAlloy: 86000, polishingSolution: 167, designPlans: 27, lunarAmber: 3 }
];
