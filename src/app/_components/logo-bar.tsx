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
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <p className="text-center text-[13px] font-medium text-slate-400 uppercase tracking-wider mb-6">
          Trusted by forward-thinking organisations
        </p>
        <div className="-mx-6 overflow-x-auto sm:mx-0 sm:overflow-visible">
          <div className="flex items-center gap-10 px-6 sm:px-0 sm:justify-center sm:flex-wrap">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-2 whitespace-nowrap font-display font-semibold text-[15px] text-slate-400 opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-60" />
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
