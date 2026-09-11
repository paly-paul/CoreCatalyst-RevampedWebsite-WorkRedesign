interface FlowStep {
  title: string;
  description: string;
  note: string;
}

interface ManagerFlowSectionProps {
  steps: FlowStep[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function ManagerFlowSection({
  steps,
  heading,
  subheading,
  eyebrow = "How It Works",
}: ManagerFlowSectionProps) {
  return (
    <section
      data-testid="section-manager-flow"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">{heading}</h2>
          <p className="body-md text-slate-600">{subheading}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-testid={`flow-card-${idx}`}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-display font-bold text-sm mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {step.title}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {step.description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 text-[13px] font-medium">
                {step.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
