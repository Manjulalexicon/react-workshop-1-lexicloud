import type { PricingPlan } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-8 hover:scale-105 transition duration-300">

      <h4 className="text-2xl font-bold">
        {plan.name}
      </h4>

      <p className="text-4xl text-blue-600 my-4 font-bold">
        {plan.price}
      </p>

      <ul className="space-y-2 mb-6">
        {plan.features.map((feature) => (
          <li key={feature}>✔ {feature}</li>
        ))}
      </ul>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Choose Plan
      </button>

    </div>
  );
}

export default PricingCard;