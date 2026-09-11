import { comparison } from "./home.data";

export default function ComparisonSection() {
  return (
    <section
      data-testid="section-comparison"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              How We Compare
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Why WorkRedesign is different
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {comparison.map((item, idx) => (
            <div
              key={idx}
              data-testid={`comparison-card-${idx}`}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                {item.name}
              </h3>

              {/* Problems */}
              <div className="mb-8 pb-8 border-b border-slate-200">
                <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
                  The Problem
                </h4>
                <ul className="space-y-3">
                  {item.problems.map((problem, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex gap-3 text-sm text-slate-600"
                    >
                      <span className="text-red-500 flex-shrink-0 pt-0.5">✕</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WorkRedesign Advantage */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
                  WorkRedesign
                </h4>
                <p className="text-sm text-cyan-700 font-semibold leading-relaxed">
                  {item.workRedesign}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
