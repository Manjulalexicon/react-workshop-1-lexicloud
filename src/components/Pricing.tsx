import PricingCard from "./PricingCard";
import { pricingPlans } from "../data/data";

function Pricing() {
  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-6 py-16"
    >
      <h3 className="text-4xl font-bold text-center mb-12">
        Pricing
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
          />
        ))}
      </div>
    </section>
  );
}

export default Pricing;