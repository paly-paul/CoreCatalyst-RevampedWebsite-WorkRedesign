import { Check, X } from "lucide-react";

const goodFitItems = [
  "You have a workforce of 500 or more employees and meaningful variation in roles across functions",
  "Skills data currently lives in at least two separate systems that do not speak to each other",
  "HR leadership has executive sponsorship for this work and can bring line managers into the process",
  "You want a validated, governed output rather than another taxonomy or tagging exercise",
  "The board or executive team has asked a question about AI readiness or workforce capability that HR cannot currently answer",
  "You need something that is HRIS-agnostic and works with your existing stack rather than replacing it",
];

const notGoodFitItems = [
  "You are looking for a skills tagging tool your team self-configures without external support",
  "Your organisation has fewer than 200 employees, where the value of a full reconciliation process is hard to justify",
  "The initiative does not have senior HR or business sponsorship and line managers are unlikely to engage",
  "You need an immediate, this-quarter solution, and 90 days is too long to wait for the deliverable",
  "You have already invested in a skills platform and need help using it, rather than building the data layer underneath it",
];

export default function FitSection() {
  return (
    <section
      data-testid="section-fit"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Good Fit */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                Good fit
              </span>
            </div>
            <h2 className="display-sm text-slate-900 mb-8">
              WorkRedesign works well when
            </h2>
            <div className="space-y-4">
              {goodFitItems.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not Good Fit */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="text-xs font-semibold text-red-600 tracking-wider uppercase">
                Not the right fit
              </span>
            </div>
            <h2 className="display-sm text-slate-900 mb-8">
              We are probably not the answer if
            </h2>
            <div className="space-y-4">
              {notGoodFitItems.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
