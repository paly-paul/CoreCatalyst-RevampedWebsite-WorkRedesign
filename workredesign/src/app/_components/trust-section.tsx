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
        <div className="mb-16 max-w-2xl">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustSignals.map((signal, idx) => (
            <div
              key={idx}
              data-testid={`trust-card-${idx}`}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-[10px] bg-cyan-500 flex items-center justify-center text-white mb-6">
                {iconMap[signal.icon]}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {signal.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
