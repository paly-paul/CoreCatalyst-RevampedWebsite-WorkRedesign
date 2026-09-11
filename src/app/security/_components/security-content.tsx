import {
  GitBranch,
  Lock,
  Globe,
  BarChart2,
  Users,
  Calendar,
  FileText,
  Search,
  Smartphone,
  ShieldCheck,
  Bell,
  Check,
  ChevronRight,
  Mail,
} from "lucide-react";
import { docSections } from "../_data";

const iconMap: Record<string, React.ReactNode> = {
  GitBranch: <GitBranch className="w-[22px] h-[22px]" />,
  Lock: <Lock className="w-[22px] h-[22px]" />,
  Globe: <Globe className="w-[22px] h-[22px]" />,
  BarChart2: <BarChart2 className="w-[22px] h-[22px]" />,
  Users: <Users className="w-[22px] h-[22px]" />,
  Calendar: <Calendar className="w-[22px] h-[22px]" />,
  FileText: <FileText className="w-[22px] h-[22px]" />,
  Search: <Search className="w-[22px] h-[22px]" />,
  Smartphone: <Smartphone className="w-[22px] h-[22px]" />,
  ShieldCheck: <ShieldCheck className="w-[22px] h-[22px]" />,
  Bell: <Bell className="w-[22px] h-[22px]" />,
};

/** Renders `**bold**` markers as <strong>. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, idx) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={idx} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </>
  );
}

export default function SecurityContent() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      {docSections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-24">
          <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2.5">
            {section.label}
          </div>
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-4">
            {section.heading}
          </h2>
          {section.paragraphs.map((p, idx) => (
            <p key={idx} className="text-[15px] text-slate-500 leading-relaxed mb-4 last:mb-0">
              <RichText text={p} />
            </p>
          ))}

          {section.features && (
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {section.features.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-slate-50 border-[1.5px] border-slate-200 rounded-2xl p-5"
                >
                  <div className="text-blue-600 mb-2.5">{iconMap[feat.icon]}</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          )}

          {section.dataFlow && (
            <div className="bg-slate-50 border-[1.5px] border-slate-200 rounded-2xl p-6 mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Data flow encryption summary
              </div>
              <div className="flex flex-col gap-3.5">
                {section.dataFlow.map((row, idx) => (
                  <div key={idx} className="flex flex-wrap items-center gap-3">
                    <div className="flex-1 min-w-[160px] bg-white border-[1.5px] border-slate-200 rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-slate-900">
                      {row.from}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <div className="flex-1 min-w-[160px] bg-white border-[1.5px] border-slate-200 rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-slate-900">
                      {row.to}
                    </div>
                    <span className="flex-shrink-0 text-[11px] font-bold rounded-md px-2 py-1 bg-green-100 text-green-800">
                      {row.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.table && (
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {section.table.headers.map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wide border-b border-slate-200"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.framework}>
                      <td className="px-4 py-3.5 border-b border-slate-200 font-semibold text-slate-900">
                        {row.framework}
                      </td>
                      <td className="px-4 py-3.5 border-b border-slate-200">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                            row.statusType === "yes"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {row.statusType === "yes" ? (
                            <Check className="w-3 h-3" strokeWidth={3} />
                          ) : (
                            <ChevronRight className="w-3 h-3" strokeWidth={3} />
                          )}
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 border-b border-slate-200 text-[13px] text-slate-500">
                        {row.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.disclosure && (
            <div className="bg-orange-50 border-[1.5px] border-orange-200 rounded-2xl p-6 mt-6">
              <h4 className="flex items-center gap-2 text-[15px] font-bold text-amber-900 mb-2">
                <Mail className="w-4 h-4" strokeWidth={2} />
                {section.disclosure.title}
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                Send vulnerability reports to{" "}
                <a href="mailto:security@workredesign.org" className="font-semibold underline">
                  security@workredesign.org
                </a>
                . Please encrypt sensitive details using our{" "}
                <a href="#" className="font-semibold underline">
                  PGP public key
                </a>
                . We do not operate a paid bug bounty program at this time, but we will publicly acknowledge researchers who report valid issues if they wish.
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                {section.disclosure.body2}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
