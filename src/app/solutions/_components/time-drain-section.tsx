interface DrainBar {
  label: string;
  share: string;
  width: number;
}

interface TimeDrainSectionProps {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  bars: DrainBar[];
  note: string;
  image: string;
  imageAlt: string;
}

export default function TimeDrainSection({
  eyebrow,
  heading,
  paragraphs,
  bars,
  note,
  image,
  imageAlt,
}: TimeDrainSectionProps) {
  return (
    <section
      data-testid="section-time-drain"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                {eyebrow}
              </span>
            </div>
            <h2 className="display-md text-slate-900 mb-4">{heading}</h2>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              {bars.map((bar, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline gap-3 mb-1.5 text-sm">
                    <span className="text-slate-700 font-medium">{bar.label}</span>
                    <span className="text-slate-500 flex-shrink-0">{bar.share}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                      style={{ width: `${bar.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mt-6">{note}</p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-[280px] sm:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
