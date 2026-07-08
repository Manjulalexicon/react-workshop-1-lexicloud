import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-700 italic">
        "{testimonial.quote}"
      </p>

      <h5 className="mt-4 font-bold">
        {testimonial.author}
      </h5>
    </div>
  );
}

export default TestimonialCard;