import { Boxes, Check, Clock, FileText, Layers, Users, Briefcase, CheckCircle2, Activity } from "lucide-react";

const sources = [
  { icon: FileText, name: "CV / Resume", sub: "Self-declared", bg: "bg-indigo-50", color: "text-blue-600" },
  { icon: Layers, name: "LMS Records", sub: "Completion data", bg: "bg-violet-50", color: "text-violet-600" },
  { icon: Users, name: "Manager Input", sub: "Assessed levels", bg: "bg-green-50", color: "text-green-600" },
  { icon: Briefcase, name: "Job History", sub: "Demonstrated use", bg: "bg-cyan-50", color: "text-cyan-600" },
  { icon: CheckCircle2, name: "Assessments", sub: "Test scores", bg: "bg-amber-50", color: "text-amber-600" },
  { icon: Activity, name: "Performance", sub: "Review data", bg: "bg-red-50", color: "text-red-600" },
];

const outputs = [
  { label: "Verified skills profiles", dot: "bg-blue-600" },
  { label: "Gap intelligence", dot: "bg-green-500" },
  { label: "Career pathways", dot: "bg-violet-600" },
  { label: "HRIS write-back", dot: "bg-cyan-500" },
];

export default function HiwHero() {
  return (
    <section className="relative pt-16 pb-20 sm:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-[260px] -right-40 w-[700px] h-[700px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-16 w-[420px] h-[420px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #ddd6fe 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 pt-8 pb-2">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pl-2 pr-3.5 py-1.5 text-[12.5px] font-semibold text-cyan-600 mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-blue-600 animate-pulse" />
              Under the hood
            </div>
            <h1 className="font-display font-extrabold text-[34px] sm:text-[48px] leading-[1.12] tracking-tight text-slate-900 mb-5">
              From scattered signals
              <br />
              to <span className="text-gradient">verified skills truth</span> -<br />
              in five steps.
            </h1>
            <p className="text-[17px] text-slate-500 leading-[1.72] max-w-[480px] mb-9">
              WorkRedesign doesn't ask employees to self-report their skills, or trust any single source blindly. It pulls from every system, resolves the conflicts, and hands managers a clean picture - continuously, automatically.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-slate-900">
                <Boxes className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                200+ data connectors
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-slate-900">
                <Check className="w-3.5 h-3.5 text-green-500" strokeWidth={2.5} />
                94% auto-resolved
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-slate-900">
                <Clock className="w-3.5 h-3.5 text-violet-600" strokeWidth={2.5} />
                Live in 1 day
              </span>
            </div>
          </div>

          {/* Right: data flow diagram */}
          <div className="bg-white border border-slate-200 rounded-[22px] shadow-[0_16px_56px_rgba(34,184,207,0.2)] p-6 sm:p-7">
            <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-slate-400 mb-4">
              <Boxes className="w-3 h-3" strokeWidth={2.5} />
              Data sources feeding the engine
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {sources.map((s) => (
                <div
                  key={s.name}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-3 text-center"
                >
                  <div className={`w-8 h-8 rounded-[9px] ${s.bg} flex items-center justify-center mx-auto mb-2`}>
                    <s.icon className={`w-4 h-4 ${s.color}`} strokeWidth={2} />
                  </div>
                  <div className="text-[11.5px] font-bold text-slate-900 leading-tight">{s.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 mb-4 relative">
              <div
                className="absolute right-[-1px] top-1/2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "7px solid #7950f2",
                }}
              />
            </div>

            <div className="flex items-center gap-3.5 bg-gradient-to-br from-indigo-50 to-violet-50 border-[1.5px] border-indigo-200 rounded-2xl px-4.5 py-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                <Boxes className="w-[22px] h-[22px] text-white" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-sm text-slate-900">
                  WorkRedesign Reconciliation Engine
                </div>
                <div className="text-[11.5px] text-slate-400 mt-0.5">
                  AI-powered, 45K-skill taxonomy, recency-weighted confidence
                </div>
              </div>
              <span className="ml-auto flex-shrink-0 bg-green-100 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap">
                94% automated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {outputs.map((o) => (
                <div
                  key={o.label}
                  className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-[10px] px-3 py-2.5"
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${o.dot}`} />
                  <span className="text-xs font-semibold text-slate-900">{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
