import {
  Crosshair,
  Clipboard,
  Link,
  Zap,
  TrendingUp,
  Grid2x2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Crosshair: <Crosshair className="w-[22px] h-[22px]" />,
  Clipboard: <Clipboard className="w-[22px] h-[22px]" />,
  Link: <Link className="w-[22px] h-[22px]" />,
  Zap: <Zap className="w-[22px] h-[22px]" />,
  TrendingUp: <TrendingUp className="w-[22px] h-[22px]" />,
  Grid2x2: <Grid2x2 className="w-[22px] h-[22px]" />,
};

interface OutcomeCard {
  title: string;
  description: string;
  details?: string[];
  icon?: string;
}

interface OutcomeCardsProps {
  cards: OutcomeCard[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function OutcomeCards({
  cards,
  heading,
  subheading,
  eyebrow = "What You Get",
}: OutcomeCardsProps) {
  return (
    <section
      data-testid="section-outcomes"
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
          <h2 className="display-lg text-slate-900 mb-4">{heading}</h2>
          <p className="body-md text-slate-600">{subheading}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`outcome-card-${idx}`}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              {card.icon && (
                <div className="w-[52px] h-[52px] rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-[18px] transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                  {iconMap[card.icon]}
                </div>
              )}
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {card.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {card.description}
              </p>
              {card.details && card.details.length > 0 && (
                <ul className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-200">
                  {card.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex gap-2 text-[13px] text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
