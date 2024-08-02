export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

export type Card2Type = PricingPlan;
export const Card2: PricingPlan[] = [
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
