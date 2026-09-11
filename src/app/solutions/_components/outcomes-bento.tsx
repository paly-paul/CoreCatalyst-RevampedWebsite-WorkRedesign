import { Settings2, Lock, Clipboard, TrendingUp, Users, Search } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Settings2: <Settings2 className="w-[26px] h-[26px]" />,
  Lock: <Lock className="w-[26px] h-[26px]" />,
  Clipboard: <Clipboard className="w-[26px] h-[26px]" />,
  TrendingUp: <TrendingUp className="w-[26px] h-[26px]" />,
  Users: <Users className="w-[26px] h-[26px]" />,
  Search: <Search className="w-[26px] h-[26px]" />,
};

interface BentoCard {
  icon: string;
  title: string;
  description: string;
  wide?: boolean;
}

interface OutcomesBentoProps {
  cards: BentoCard[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function OutcomesBento({
  cards,
  heading,
  subheading,
  eyebrow = "What You Get",
}: OutcomesBentoProps) {
  return (
    <section
      data-testid="section-outcomes-bento"
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

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`bento-card-${idx}`}
              className={`group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all ${
                card.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="text-cyan-600 mb-3.5 transition-colors">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
