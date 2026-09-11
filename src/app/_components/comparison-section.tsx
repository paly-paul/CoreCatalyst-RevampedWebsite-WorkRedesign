import { Check, X } from "lucide-react";
import { comparison } from "./home.data";

export default function ComparisonSection() {
  return (
    <section
      data-testid="section-comparison"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              How We Compare
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Not just another skills tag tool
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Other tools integrate skills tags into your HRIS. WorkRedesign validates them, governs them, and translates them into the job redesign your organisation actually needs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse border border-slate-200 rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th scope="col" className="text-left px-5 py-4 font-display font-bold text-[15px] text-slate-900 bg-slate-50">
                  Capability
                </th>
                <th scope="col" className="text-left px-5 py-4 font-display font-bold text-[15px] text-slate-400 bg-slate-50">
                  {comparison.competitorLabel}
                </th>
                <th scope="col" className="text-left px-5 py-4 font-display font-bold text-[15px] text-white bg-gradient-to-br from-blue-600 to-violet-600">
                  WorkRedesign
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, idx) => (
                <tr key={idx} className="border-t border-slate-200 even:[&>td]:bg-slate-50">
                  <td className="px-5 py-3.5 text-sm font-semibold text-slate-900">
                    {row.capability}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-600">
                    {row.competitor ? (
                      <Check className="w-[18px] h-[18px] text-green-500" />
                    ) : (
                      <X className="w-[18px] h-[18px] text-slate-300" />
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-600 bg-blue-50/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-[18px] h-[18px] text-green-500 flex-shrink-0" />
                      {row.coreNote && <span>{row.coreNote}</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
