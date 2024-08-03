export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  featuresNot?: string[];
}
export type PricingNormalType = PricingPlan;
export const PricingNormal: PricingPlan[] = [
  {
    title: "PRO",
    price: "$149",
    features: ["NextJS Boilerplate", "AI Modules", "5 Demo Apps"],
    featuresNot: [
      "GAuth & Magic Link",
      "Stripe & Lemon Squeezy Payments",
      "Privacy Policy & ToS",
    ],
  },
];

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

export type PricingProType = PricingPlan;
export const PricingPro: PricingPlan[] = [
  {
    title: "PRO",
    price: "$199",
    features: [
      "NextJS Boilerplate",
      "AI Modules",
      "5 Demo Apps",
      "GAuth & Magic Link",
      "Stripe & Lemon Squeezy Payments",
      "Privacy Policy & ToS",
    ],
  },
];
