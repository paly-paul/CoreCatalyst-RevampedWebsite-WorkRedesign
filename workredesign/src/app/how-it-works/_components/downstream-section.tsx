import { CheckCircle } from "lucide-react";

export default function DownstreamSection() {
  const downstreamSystems = [
    "Workday",
    "Talent Marketplace",
    "LMS engine",
    "Analytics",
    "ATS",
  ];

  return (
    <section
      data-testid="section-downstream-benefits"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="display-md text-slate-900 mb-4">
            Your skills data flows downstream
          </h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            Every verified profile update automatically syncs to your entire
            talent ecosystem - no manual exports, no waiting for sync jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div data-testid="downstream-benefit-1" className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">HRIS Write-back</h3>
                <p className="text-slate-600 text-sm">
                  Workday, SAP, and Oracle stay updated automatically with the
                  latest verified skills - no manual re-entry required.
                </p>
              </div>
            </div>

            <div data-testid="downstream-benefit-2" className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Talent Systems
                </h3>
                <p className="text-slate-600 text-sm">
                  ATS, talent marketplaces, and succession planning tools receive
                  current profiles via webhook push.
                </p>
              </div>
            </div>

            <div data-testid="downstream-benefit-3" className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Learning Platforms
                </h3>
                <p className="text-slate-600 text-sm">
                  LMS content engines and learning paths auto-adjust to real-time
                  skill levels for personalized recommendations.
                </p>
              </div>
            </div>

            <div data-testid="downstream-benefit-4" className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Analytics & BI
                </h3>
                <p className="text-slate-600 text-sm">
                  Workforce intelligence dashboards and reporting tools reflect
                  every change in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Downstream systems updated
              </div>
              <div className="space-y-3">
                {downstreamSystems.map((system) => (
                  <div
                    key={system}
                    data-testid={`downstream-system-${system.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium text-slate-900">{system}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
