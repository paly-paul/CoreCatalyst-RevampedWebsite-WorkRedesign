import { Star } from "lucide-react";
import { testimonial } from "./home.data";

export default function TestimonialSection() {
  return (
    <section
      data-testid="section-testimonial"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="max-w-[720px] mx-auto bg-white border border-slate-200 rounded-[32px] p-8 sm:p-12 text-center shadow-md">
          <div className="flex justify-center gap-1 mb-6" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className="w-[22px] h-[22px] fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl text-slate-900 italic leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.avatar}
                alt={testimonial.authorName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-base text-slate-900">
                {testimonial.authorName}
              </div>
              <div className="text-sm text-slate-600 mt-0.5">
                {testimonial.authorTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
