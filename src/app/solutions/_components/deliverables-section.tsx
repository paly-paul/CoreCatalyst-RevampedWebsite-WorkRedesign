import { BarChart2, Users, Globe, Clipboard, Link, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 className="w-[22px] h-[22px]" />,
  Users: <Users className="w-[22px] h-[22px]" />,
  Globe: <Globe className="w-[22px] h-[22px]" />,
  Clipboard: <Clipboard className="w-[22px] h-[22px]" />,
  Link: <Link className="w-[22px] h-[22px]" />,
  Zap: <Zap className="w-[22px] h-[22px]" />,
};

interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

interface DeliverablesSectionProps {
  deliverables: Deliverable[];
  heading: string;
  subheading: string;
  eyebrow?: string;
  tag?: string;
}

export default function DeliverablesSection({
  deliverables,
  heading,
  subheading,
  eyebrow = "The Output Set",
  tag = "Delivered in 90 days",
}: DeliverablesSectionProps) {
  return (
    <section
      data-testid="section-deliverables"
      className="py-20 sm:py-32 bg-slate-50"
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              data-testid={`deliverable-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 transition-all flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 flex-shrink-0 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[item.icon]}
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-2.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-semibold">
                  ✓ {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
