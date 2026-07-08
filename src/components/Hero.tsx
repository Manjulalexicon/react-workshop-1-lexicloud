import { Cloud } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Transform Your Business with AI Solutions
          </h2>

          <p className="mb-8 text-lg">
            Build, scale and manage your business with secure cloud
            technology and intelligent automation.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Free
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white/10 rounded-2xl p-10 flex flex-col items-center">

          <Cloud size={120} />

          <p className="mt-4 text-xl">
            Modern Cloud Platform
          </p>

        </div>

      </div>
    </section>
  );
}

export default Hero;