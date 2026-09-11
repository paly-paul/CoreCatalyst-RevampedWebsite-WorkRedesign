import { Layers, BarChart2, Clipboard, Users, TrendingUp, Lock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-[22px] h-[22px]" />,
  BarChart2: <BarChart2 className="w-[22px] h-[22px]" />,
  Clipboard: <Clipboard className="w-[22px] h-[22px]" />,
  Users: <Users className="w-[22px] h-[22px]" />,
  TrendingUp: <TrendingUp className="w-[22px] h-[22px]" />,
  Lock: <Lock className="w-[22px] h-[22px]" />,
};

interface Integration {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

interface IntegrationSectionProps {
  integrations: Integration[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function IntegrationSection({
  integrations,
  heading,
  subheading,
  eyebrow = "System Connections",
}: IntegrationSectionProps) {
  return (
    <section
      data-testid="section-integrations"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">{heading}</h2>
          <p className="body-md text-slate-600">{subheading}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              data-testid={`integration-card-${idx}`}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all flex gap-3.5 items-start"
            >
              <div className="w-11 h-11 rounded-[10px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 flex-shrink-0 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[item.icon]}
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[11px] font-semibold">
                  ✓ {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
