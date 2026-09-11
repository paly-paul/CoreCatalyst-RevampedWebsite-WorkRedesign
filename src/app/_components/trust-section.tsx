import { trustSignals } from "./home.data";
import {
  Link,
  Search,
  Users,
  Lock,
  Grid,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Link: <Link className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Grid: <Grid className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

export default function TrustSection() {
  return (
    <section
      data-testid="section-trust"
      className="py-20 sm:py-32 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Why Organisations Trust WorkRedesign
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Built for decisions that matter
          </h2>
          <p className="body-md text-slate-600">
            Skills intelligence only has value when the people receiving it trust it enough to act on it.
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustSignals.map((signal, idx) => (
            <div
              key={idx}
              data-testid={`trust-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[signal.icon]}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {signal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
