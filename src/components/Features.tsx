import FeatureCard from "./FeatureCard";
import { features } from "../data/data";

function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-16"
    >
      <h3 className="text-4xl font-bold text-center mb-12">
        Our Features
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;