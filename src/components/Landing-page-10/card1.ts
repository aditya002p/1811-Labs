export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  features1?: string[];
}
export type Card1Type = PricingPlan;
export const Card1: PricingPlan[] = [
  {
    title: "PRO",
    price: "149",
    features: ["NextJS Boilerplate", "AI Modules", "5 Demo Apps"],
    features1: [
      "GAuth & Magic Link",
      "Stripe & Lemon Squeezy Payments",
      "Privacy Policy & ToS",
    ],
  },
];
