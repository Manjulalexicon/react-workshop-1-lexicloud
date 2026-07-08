import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/data";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gray-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-4xl font-bold text-center mb-10">
          Testimonials
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;