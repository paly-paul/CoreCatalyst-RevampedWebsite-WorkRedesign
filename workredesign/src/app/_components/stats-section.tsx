import { stats } from "./home.data";

export default function StatsSection() {
  return (
    <section
      data-testid="section-stats"
      className="py-16 sm:py-20 bg-slate-900 text-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-testid={`stat-item-${idx}`}
              className="text-center"
            >
              <div className="display-lg text-cyan-400 mb-2 font-bold">
                {stat.number}
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
