import { Lock, Globe, ShieldCheck } from "lucide-react";
import { certBadges } from "../_data";

const iconMap: Record<string, React.ReactNode> = {
  Lock: <Lock className="w-4 h-4 text-green-700" strokeWidth={1.5} />,
  Globe: <Globe className="w-4 h-4 text-violet-700" strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-orange-700" strokeWidth={1.5} />,
};

export default function SecHero() {
  return (
    <section className="pt-16 pb-14 bg-white text-center">
      <div className="max-w-[640px] mx-auto px-6 sm:px-8">
        <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-indigo-100 rounded-full px-3.5 py-1 mb-5">
          Security
        </div>
        <h1 className="font-display font-extrabold text-[30px] sm:text-[50px] leading-[1.12] text-slate-900 mb-4">
          Enterprise-grade security,
          <br />
          <span className="text-gradient">built in from day one</span>
        </h1>
        <p className="text-[17px] text-slate-500 leading-relaxed max-w-[560px] mx-auto mb-10">
          Your employees' skill data is some of the most sensitive information in your organization. We treat it that way.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {certBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-2.5 bg-white border-[1.5px] border-slate-200 rounded-xl px-5 py-3 shadow-[0_2px_12px_rgba(34,184,207,0.08)]"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${badge.bg}`}>
                {badge.emoji ? (
                  <span className="text-[18px]" aria-hidden="true">{badge.emoji}</span>
                ) : (
                  iconMap[badge.icon]
                )}
              </div>
              <div className="text-left">
                <strong className="block text-[13px] font-bold text-slate-900">{badge.title}</strong>
                <span className="text-[11px] text-slate-400">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
