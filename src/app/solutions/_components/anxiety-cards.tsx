import {
  BarChart2,
  Crosshair,
  User,
  Link,
  Clipboard,
  Lock,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 className="w-[22px] h-[22px]" />,
  Crosshair: <Crosshair className="w-[22px] h-[22px]" />,
  User: <User className="w-[22px] h-[22px]" />,
  Link: <Link className="w-[22px] h-[22px]" />,
  Clipboard: <Clipboard className="w-[22px] h-[22px]" />,
  Lock: <Lock className="w-[22px] h-[22px]" />,
};

interface AnxietyCard {
  question: string;
  answer: string;
  icon?: string;
}

interface AnxietyCardsProps {
  cards: AnxietyCard[];
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export default function AnxietyCards({
  cards,
  title,
  subtitle,
  eyebrow = "The Real Questions",
}: AnxietyCardsProps) {
  return (
    <section
      data-testid="section-anxiety-cards"
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
          <h2 className="display-md text-slate-900 mb-4">{title}</h2>
          <p className="body-md text-slate-600">{subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`anxiety-card-${idx}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              {card.icon && (
                <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                  {iconMap[card.icon]}
                </div>
              )}
              <h3 className="text-base font-semibold text-slate-900 mb-3 italic leading-snug">
                "{card.question}"
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
