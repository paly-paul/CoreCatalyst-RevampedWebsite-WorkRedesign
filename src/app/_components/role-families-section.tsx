const roleFamilies = [
  { emoji: "📈", label: "Finance & Accounting" },
  { emoji: "📦", label: "Procurement & SCM" },
  { emoji: "👥", label: "HR & People Ops" },
  { emoji: "🚚", label: "Logistics & Operations" },
  { emoji: "📞", label: "Customer Service" },
  { emoji: "🏢", label: "Warehouse & Frontline" },
  { emoji: "⚒️", label: "Technical & Engineering" },
  { emoji: "👓", label: "Legal & Compliance" },
];

export default function RoleFamiliesSection() {
  return (
    <section
      data-testid="section-role-families"
      className="py-7 bg-slate-50 border-t border-b border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          Skills validation across every function - from C-suite to frontline
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {roleFamilies.map((family, idx) => (
            <span
              key={idx}
              data-testid={`role-family-${idx}`}
              className="text-[13px] font-semibold px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700"
            >
              {family.emoji} {family.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
