interface ProcessStep {
  number: number;
  label: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    label: "Application review",
    description: "We read every application. Response within 5 days.",
  },
  {
    number: 2,
    label: "Intro call",
    description: "30 min with the hiring manager. Two-way conversation.",
  },
  {
    number: 3,
    label: "Skills interview",
    description: "Technical or role-specific. Take-home or live - your choice.",
  },
  {
    number: 4,
    label: "Final & offer",
    description: "Meet the team. Offer within 2 days of final stage.",
  },
];

export default function ProcessSection() {
  return (
    <section
      data-testid="section-process"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <h2 className="display-md text-slate-900 mb-4">
            Our hiring process
          </h2>
          <p className="body-lg text-slate-600">
            Four steps, no surprises. We respect your time - if it's not working, we'll tell you quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              data-testid={`process-step-${step.number}`}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <div className="text-4xl font-bold text-cyan-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.label}
              </h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
