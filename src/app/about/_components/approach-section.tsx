import { aboutApproach } from "../about.data";

export default function ApproachSection() {
  return (
    <section data-testid="section-approach" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              How we work
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Principles that shape every engagement
          </h2>
          <p className="body-md text-slate-600">
            We are not a SaaS vendor. We are a structured delivery partner. Here is what that means in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {aboutApproach.map((item) => (
            <div
              key={item.num}
              data-testid={`approach-card-${item.num}`}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex gap-5 items-start"
            >
              <div className="text-2xl sm:text-[32px] font-extrabold text-cyan-500/25 leading-none flex-shrink-0 w-10">
                {item.num}
              </div>
              <div>
                <h3 className="text-[16.5px] font-extrabold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
