import { testimonial } from "./home.data";

export default function TestimonialSection() {
  return (
    <section
      data-testid="section-testimonial"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 text-center">
        {/* Quote */}
        <blockquote className="mb-8">
          <p className="display-md text-slate-900 italic leading-relaxed mb-6">
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Attribution */}
        <div>
          <p className="text-slate-600 font-semibold">
            {testimonial.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
