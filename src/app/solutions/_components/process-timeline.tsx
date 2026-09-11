interface ProcessStep {
  label: string;
  title: string;
  description: string;
  note: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function ProcessTimeline({
  steps,
  heading,
  subheading,
  eyebrow = "How We Work Together",
}: ProcessTimelineProps) {
  return (
    <section
      data-testid="section-process"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[640px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="display-lg text-slate-900 mb-4">{heading}</h2>
          <p className="body-md text-slate-600">{subheading}</p>
        </div>

        {/* Steps */}
        <div className="max-w-[760px] mx-auto flex flex-col">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-testid={`process-step-${idx}`}
              className="grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-6 py-8 border-b border-slate-200 last:border-b-0"
            >
              {/* Number + connecting line */}
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-display font-bold text-base flex-shrink-0">
                  {idx + 1}
                </div>
                {idx !== steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-200 mt-1"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  {step.label}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 text-[13px] font-medium">
                  {step.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
