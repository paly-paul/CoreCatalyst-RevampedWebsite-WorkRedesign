interface OutcomeCard {
  title: string;
  description: string;
  details?: string[];
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
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
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
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`outcome-card-${idx}`}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              {card.details && card.details.length > 0 && (
                <ul className="space-y-2">
                  {card.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex gap-3 text-xs text-slate-600"
                    >
                      <span className="text-cyan-500 flex-shrink-0 pt-0.5">✓</span>
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
