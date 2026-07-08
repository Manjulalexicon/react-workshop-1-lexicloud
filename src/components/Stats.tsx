import { statistics } from "../data/data";

function Stats() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statistics.map((item) => (
          <div key={item.label}>
            <h4 className="text-4xl font-bold">{item.value}</h4>
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;