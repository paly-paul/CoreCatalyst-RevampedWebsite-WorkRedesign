import { BarChart2, Search, Link, MessageSquare, Grid2x2, Award } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 className="w-[22px] h-[22px]" />,
  Search: <Search className="w-[22px] h-[22px]" />,
  Link: <Link className="w-[22px] h-[22px]" />,
  MessageSquare: <MessageSquare className="w-[22px] h-[22px]" />,
  Grid2x2: <Grid2x2 className="w-[22px] h-[22px]" />,
  Award: <Award className="w-[22px] h-[22px]" />,
};

interface Outcome {
  icon: string;
  title: string;
  description: string;
}

interface ManagerOutcomesSectionProps {
  outcomes: Outcome[];
  heading: string;
  eyebrow?: string;
}

export default function ManagerOutcomesSection({
  outcomes,
  heading,
  eyebrow = "What You Get",
}: ManagerOutcomesSectionProps) {
  return (
    <section
      data-testid="section-manager-outcomes"
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
          <h2 className="display-md text-slate-900">{heading}</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              data-testid={`outcome-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-3.5 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[outcome.icon]}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
