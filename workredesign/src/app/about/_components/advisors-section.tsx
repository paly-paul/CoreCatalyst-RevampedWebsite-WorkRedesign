import { advisors } from "../about.data";

export default function AdvisorsSection() {
  return (
    <section
      data-testid="section-advisors"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Advisory board
            </span>
          </div>
          <h2 className="display-md text-slate-900">
            Guided by people who have led at scale
          </h2>
        </div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              data-testid={`advisor-card-${advisor.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-cyan-300 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {advisor.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {advisor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
