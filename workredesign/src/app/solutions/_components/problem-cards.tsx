interface ProblemCard {
  title: string;
  description: string;
}

interface ProblemCardsProps {
  cards: ProblemCard[];
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export default function ProblemCards({
  cards,
  title,
  subtitle,
  eyebrow = "The Problem",
}: ProblemCardsProps) {
  return (
    <section
      data-testid="section-problems"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
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
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`problem-card-${idx}`}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
