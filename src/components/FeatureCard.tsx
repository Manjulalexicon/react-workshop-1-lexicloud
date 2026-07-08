interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition">
      <Icon className="text-blue-600 mb-4" size={50} />

      <h4 className="text-xl font-bold mb-2">
        {feature.title}
      </h4>

      <p className="text-gray-600">
        {feature.description}
      </p>
    </div>
  );
}

export default FeatureCard;