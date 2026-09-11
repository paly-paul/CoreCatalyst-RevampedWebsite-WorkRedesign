import Image from "next/image";
import { aboutOrigin } from "../about.data";

export default function OriginSection() {
  return (
    <section
      data-testid="section-origin"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={aboutOrigin.image}
              alt="Origin story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                {aboutOrigin.label}
              </span>
            </div>
            <h2 className="display-md text-slate-900 mb-6">
              {aboutOrigin.heading}
            </h2>
            <div className="space-y-4 mb-8">
              {aboutOrigin.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-slate-100 rounded-lg p-6">
              <div className="text-2xl font-bold text-cyan-600 mb-2">
                {aboutOrigin.callout.title}
              </div>
              <p className="text-sm text-slate-600">
                {aboutOrigin.callout.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
