const steps = [
  {
    num: 1,
    title: "Data Ingestion",
    desc: "We connect to your existing HRIS, LMS, and talent systems - no rip and replace. Your data stays in your environment.",
  },
  {
    num: 2,
    title: "AI-Assisted Mapping",
    desc: "Our AI engine extracts and structures skills signals from unstructured data across every source you connect.",
  },
  {
    num: 3,
    title: "Human-Validated Reconciliation",
    desc: "Managers and employees validate AI-generated profiles through a structured adjudication process, with a full evidence trail and bias monitoring built in.",
  },
  {
    num: 4,
    title: "Governed Skills Record",
    desc: "Every skill claim is provenance-tracked - who validated it, when, with what evidence. A record you can defend in front of your board.",
  },
  {
    num: 5,
    title: "Strategic Intelligence Layer",
    desc: "Workforce gap analysis, mobility classification, and role-based views - built on verified data, not assumptions.",
  },
  {
    num: 6,
    title: "Business Outputs",
    desc: "Redefined job descriptions. Career lattices. Automation charter. All generated from your verified skills record and ready to use.",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 mb-4">
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="display-lg text-slate-900 mb-4">
            From fragmented data to board-ready intelligence
          </h2>
          <p className="body-md text-slate-600">
            A structured six-step process that turns your existing workforce
            data into validated, actionable skills intelligence - with human
            oversight at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500 group-hover:bg-cyan-600 group-hover:shadow-[0_4px_12px_rgba(34,184,207,0.3)] text-white flex items-center justify-center font-display font-bold text-sm mb-4 transition-all">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-[17px] text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
