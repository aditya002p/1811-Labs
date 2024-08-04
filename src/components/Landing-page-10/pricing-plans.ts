export interface PricingPlan {
  type: "Normal" | "Pro";
  title: string;
  price: string;
  features: string[];
  featuresNot?: string[];
}

export const PricingPlans: PricingPlan[] = [
  {
    type: "Normal",
    title: "PRO",
    price: "$149",
    features: ["NextJS Boilerplate", "AI Modules", "5 Demo Apps"],
    featuresNot: [
      "GAuth & Magic Link",
      "Stripe & Lemon Squeezy Payments",
      "Privacy Policy & ToS",
    ],
  },
  {
    type: "Pro",
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
