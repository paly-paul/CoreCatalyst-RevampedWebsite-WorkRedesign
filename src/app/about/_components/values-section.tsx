import { Users, TrendingUp, Lock, Heart, Crosshair, ShieldCheck } from "lucide-react";
import { aboutValues } from "../about.data";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-[22px] h-[22px]" />,
  TrendingUp: <TrendingUp className="w-[22px] h-[22px]" />,
  Lock: <Lock className="w-[22px] h-[22px]" />,
  Heart: <Heart className="w-[22px] h-[22px]" />,
  Crosshair: <Crosshair className="w-[22px] h-[22px]" />,
  ShieldCheck: <ShieldCheck className="w-[22px] h-[22px]" />,
};

export default function ValuesSection() {
  return (
    <section data-testid="section-values" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              What we believe
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            The principles that shape how we work
          </h2>
          <p className="body-md text-slate-600">
            Every decision we make, from how we structure engagements to how we build our platform, comes back to these commitments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutValues.map((value) => (
            <div
              key={value.title}
              data-testid={`value-card-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[value.icon]}
              </div>
              <h3 className="text-[16.5px] font-extrabold text-slate-900 mb-2.5 tracking-tight">
                {value.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
