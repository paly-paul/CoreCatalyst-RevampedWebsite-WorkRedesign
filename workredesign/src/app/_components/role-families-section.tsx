const roleFamilies = [
  "Finance",
  "Procurement",
  "HR & Operations",
  "Logistics & Supply Chain",
  "Customer Service",
  "Manufacturing & Operations",
  "Frontline Management",
];

export default function RoleFamiliesSection() {
  return (
    <section
      data-testid="section-role-families"
      className="py-4 sm:py-6 bg-slate-50 border-t border-b border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">
            Supported Function Families
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {roleFamilies.map((family, idx) => (
              <span
                key={idx}
                data-testid={`role-family-${idx}`}
                className="text-sm text-slate-700 font-medium"
              >
                {family}
                {idx < roleFamilies.length - 1 && (
                  <span className="mx-4 text-slate-300">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
