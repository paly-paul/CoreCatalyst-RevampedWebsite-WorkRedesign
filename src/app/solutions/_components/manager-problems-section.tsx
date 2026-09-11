import { Eye, Search, TrendingUp, MessageSquare, Calendar } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-[22px] h-[22px]" />,
  Search: <Search className="w-[22px] h-[22px]" />,
  TrendingUp: <TrendingUp className="w-[22px] h-[22px]" />,
  MessageSquare: <MessageSquare className="w-[22px] h-[22px]" />,
  Calendar: <Calendar className="w-[22px] h-[22px]" />,
};

interface ProblemItem {
  icon: string;
  title: string;
  description: string;
  before: string;
  after: string;
}

interface ManagerProblemsSectionProps {
  items: ProblemItem[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function ManagerProblemsSection({
  items,
  heading,
  subheading,
  eyebrow = "The Real Friction",
}: ManagerProblemsSectionProps) {
  return (
    <section
      data-testid="section-manager-problems"
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              data-testid={`problem-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-3.5 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                <div className="rounded-lg p-3 text-[13px] leading-snug bg-red-500/5 border border-red-500/15 text-slate-600">
                  <strong className="block text-[11px] font-bold uppercase tracking-wider text-red-500 mb-1">
                    Before
                  </strong>
                  {item.before}
                </div>
                <div className="rounded-lg p-3 text-[13px] leading-snug bg-green-500/5 border border-green-500/15 text-slate-600">
                  <strong className="block text-[11px] font-bold uppercase tracking-wider text-green-600 mb-1">
                    After
                  </strong>
                  {item.after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
