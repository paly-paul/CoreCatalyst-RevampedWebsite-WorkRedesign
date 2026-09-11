const companies = [
  "Global Finance Co",
  "Healthcare Alliance",
  "TechScale Group",
  "Infrastructure Corp",
  "Public Sector Hub",
  "Cloud Ventures",
  "Retail Networks",
];

export default function LogoBar() {
  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 sm:mb-8">
          Trusted by forward-thinking organisations
        </p>
        <div className="overflow-x-auto -mx-6 sm:mx-0 sm:overflow-visible">
          <div className="flex gap-8 sm:gap-12 px-6 sm:px-0 sm:justify-center flex-wrap">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
