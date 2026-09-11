import { stats } from "./home.data";
import { cn } from "@/lib/utils";

export default function StatsSection() {
  return (
    <section
      data-testid="section-stats"
      className="bg-white border-y border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-testid={`stat-item-${idx}`}
              className={cn(
                "text-center py-8 px-4 sm:py-12 sm:px-6 border-slate-200",
                // last column on lg never gets a right border; on the 2-col
                // layout below lg, every odd item does (with a top border
                // starting row 2), matching the reference stat grid.
                idx % 2 === 0 ? "border-r lg:border-r" : "border-r-0",
                idx !== stats.length - 1 && "lg:border-r",
                idx >= 2 && "border-t lg:border-t-0"
              )}
            >
              <div className="text-gradient font-display font-extrabold text-4xl sm:text-[44px] leading-none tracking-tight mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-slate-600 max-w-[160px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
