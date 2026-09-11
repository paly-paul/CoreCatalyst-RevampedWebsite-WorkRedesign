import { Check, AlertTriangle, Plus } from "lucide-react";

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600",
  green: "bg-green-500/10 text-green-600",
  cyan: "bg-cyan-500/10 text-cyan-600",
  orange: "bg-orange-500/10 text-orange-600",
  violet: "bg-violet-500/10 text-violet-600",
  red: "bg-red-500/10 text-red-600",
};

interface Skill {
  name: string;
  source: string;
  actions: string[];
}

interface WidgetProps {
  employee: { name: string; role: string; avatar: string };
  skills: Skill[];
  footerLead: string;
  footerNote: string;
  tagsLabel: string;
  tags: { label: string; color: string }[];
  heading: string;
  subheading: string;
  eyebrow?: string;
}

export default function AdjudicationWidget({
  employee,
  skills,
  footerLead,
  footerNote,
  tagsLabel,
  tags,
  heading,
  subheading,
  eyebrow = "The Adjudication Interface",
}: WidgetProps) {
  return (
    <section
      data-testid="section-widget"
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

        {/* Widget card */}
        <div className="max-w-[680px] mx-auto bg-slate-50 border border-slate-200 rounded-[28px] p-7 sm:p-10 shadow-md">
          {/* Header */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={employee.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <strong className="block text-base font-bold text-slate-900">
                {employee.name}
              </strong>
              <span className="text-[13px] text-slate-600">{employee.role}</span>
            </div>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Skills pending adjudication
          </div>

          {/* Skill rows */}
          <div className="flex flex-col">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`flex flex-wrap justify-between items-center gap-4 py-3 ${
                  idx !== skills.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <div>
                  <div className="text-[15px] font-semibold text-slate-900">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-400">{skill.source}</div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {skill.actions.includes("accept") && (
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold bg-green-500/10 text-green-600 border border-green-500/20">
                      <Check className="w-3.5 h-3.5" /> Accept
                    </span>
                  )}
                  {skill.actions.includes("evidence") && (
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold bg-cyan-50 text-cyan-600 border border-cyan-200">
                      <Plus className="w-3.5 h-3.5" /> Add evidence
                    </span>
                  )}
                  {skill.actions.includes("dispute") && (
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold bg-red-500/10 text-red-600 border border-red-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" /> Dispute
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-5 px-4 py-3.5 rounded-[10px] bg-green-500/5 border border-green-500/15 text-[13px] text-slate-600 leading-relaxed">
            <strong className="text-green-600">{footerLead}</strong> {footerNote}
          </div>

          {/* Function tags */}
          <div className="mt-5 pt-4 border-t border-slate-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {tagsLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColorMap[tag.color] ?? "bg-slate-100 text-slate-600"}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
