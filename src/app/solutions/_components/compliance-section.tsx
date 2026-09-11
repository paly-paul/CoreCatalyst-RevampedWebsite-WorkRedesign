interface ComplianceCard {
  emoji: string;
  title: string;
  description: string;
  items: string[];
}

interface ComplianceSectionProps {
  cards: ComplianceCard[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function ComplianceSection({
  cards,
  heading,
  subheading,
  eyebrow = "Security and Compliance",
}: ComplianceSectionProps) {
  return (
    <section
      data-testid="section-compliance"
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-testid={`compliance-card-${idx}`}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200"
            >
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-2.5">
                <span aria-hidden="true">{card.emoji}</span>
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
              <ul className="flex flex-col gap-1.5 mt-3">
                {card.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-[13px] text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
