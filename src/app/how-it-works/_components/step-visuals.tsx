import {
  Layers,
  Share2,
  Search,
  GitBranch,
  AlertTriangle,
  Users,
  Clock,
  RefreshCcw,
  Check,
} from "lucide-react";

function VisualCardFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-[20px] shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4.5 py-3 bg-[#f8f9ff] border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11.5px] font-semibold text-slate-400 tracking-wide ml-1">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* Step 1: connector setup */
const connectors = [
  { name: "Workday", icon: Layers, status: "Live", state: "connected" },
  { name: "Cornerstone", icon: RefreshCcw, status: "Live", state: "connected" },
  { name: "SAP SF", icon: Users, status: "Live", state: "connected" },
  { name: "Degreed", icon: Layers, status: "Connecting", state: "pending" },
  { name: "Oracle HCM", icon: Share2, status: "Scheduled", state: "pending" },
  { name: "Custom API", icon: GitBranch, status: "Configure", state: "pending" },
];

export function ConnectorVisual() {
  return (
    <VisualCardFrame title="Connector setup - WorkRedesign">
      <div className="grid grid-cols-3 gap-2.5">
        {connectors.map((c) => (
          <div
            key={c.name}
            className={`rounded-[11px] border px-2.5 py-3.5 text-center ${
              c.state === "connected"
                ? "bg-green-50 border-green-200"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div
              className={`w-[34px] h-[34px] rounded-[9px] mx-auto mb-2 flex items-center justify-center ${
                c.state === "connected" ? "bg-green-100" : "bg-white"
              }`}
            >
              <c.icon
                className={`w-[18px] h-[18px] ${
                  c.state === "connected" ? "text-green-600" : "text-slate-400"
                }`}
                strokeWidth={2}
              />
            </div>
            <div className="text-[11.5px] font-bold text-slate-900">{c.name}</div>
            <div
              className={`flex items-center justify-center gap-1 text-[10px] font-semibold mt-1 ${
                c.state === "connected" ? "text-green-600" : "text-amber-500"
              }`}
            >
              <span className="w-[5px] h-[5px] rounded-full bg-current" />
              {c.status}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3.5 flex items-center gap-2 bg-green-50 border border-green-200 rounded-[10px] px-3.5 py-2.5 text-xs font-semibold text-green-800">
        <Check className="w-[13px] h-[13px]" strokeWidth={2.5} />
        3 sources active - first data ingestion will start within minutes
      </div>
    </VisualCardFrame>
  );
}

/* Step 2: taxonomy lookup */
const taxonomyMatches = [
  { name: "Python Programming", id: "SKL-0031-4", lang: "EN", canonical: true },
  { name: "Python 3", id: "SKL-0031-4", lang: "EN", canonical: false },
  { name: "Programmation Python", id: "SKL-0031-4", lang: "FR", canonical: false },
  { name: "Python-Programmierung", id: "SKL-0031-4", lang: "DE", canonical: false },
];

export function TaxonomyVisual() {
  return (
    <VisualCardFrame title="Skills taxonomy lookup">
      <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-[10px] px-3.5 py-2.5 mb-3.5">
        <Search className="w-4 h-4 text-slate-400" strokeWidth={2} />
        <span className="text-sm font-medium text-slate-900">Python</span>
      </div>
      <div className="text-xs text-slate-400 font-medium mb-2.5">
        4 matches found - mapped to canonical skill
      </div>
      <div className="flex flex-col gap-1.5 mb-4">
        {taxonomyMatches.map((m) => (
          <div
            key={m.name + m.lang}
            className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[13px] ${
              m.canonical
                ? "bg-cyan-50 border border-cyan-200"
                : "bg-slate-50 border border-slate-200"
            }`}
          >
            <span className="font-semibold text-slate-900 truncate">{m.name}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-slate-400 text-[11px]">{m.id}</span>
              <span className="text-slate-400 text-[11px] font-bold">{m.lang}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { num: "45K+", label: "Total skills" },
          { num: "35", label: "Languages" },
          { num: "98%", label: "Match rate" },
        ].map((chip) => (
          <div key={chip.label} className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-center">
            <div className="text-gradient font-display font-extrabold text-lg leading-none">{chip.num}</div>
            <div className="text-[10.5px] text-slate-400 mt-1">{chip.label}</div>
          </div>
        ))}
      </div>
    </VisualCardFrame>
  );
}

/* Step 3: reconciliation conflict */
const conflictSources = [
  { chip: "CV 2021", val: "Expert", weight: "Weight: 0.3 (age: 3yr)", color: "bg-slate-100 text-slate-600" },
  { chip: "LMS 2024", val: "Intermediate", weight: "Weight: 0.7 (recent)", color: "bg-violet-100 text-violet-700" },
  { chip: "Mgr Q1 24", val: "Advanced", weight: "Weight: 0.85 (structured)", color: "bg-green-100 text-green-700" },
  { chip: "Project", val: "Advanced", weight: "Weight: 0.75 (demonstrated)", color: "bg-blue-100 text-blue-700" },
];

export function ReconciliationVisual() {
  return (
    <VisualCardFrame title="Reconciliation in progress - Aisha Patel">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 mb-3.5">
        <div className="flex items-center gap-2 text-[13px] font-bold text-amber-800 mb-2.5">
          <AlertTriangle className="w-4 h-4" strokeWidth={2} />
          Skill conflict: Data Visualisation
        </div>
        <div className="flex flex-col gap-1.5">
          {conflictSources.map((s) => (
            <div key={s.chip} className="flex items-center gap-2 text-[12px] flex-wrap">
              <span className={`px-2 py-0.5 rounded-full font-bold ${s.color}`}>{s.chip}</span>
              <span className="font-semibold text-slate-900">{s.val}</span>
              <span className="text-slate-400 ml-auto">{s.weight}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2.5 bg-indigo-50 border border-indigo-200 rounded-xl p-3.5 mb-3.5">
        <GitBranch className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <p className="text-[12.5px] text-slate-600 leading-relaxed">
          Weighted consensus: <strong className="text-slate-900">Advanced</strong> (3 of 4 sources align at advanced or above, recency-adjusted). Confidence: <strong className="text-slate-900">82%</strong> - above threshold.
        </p>
      </div>
      <div className="flex items-center gap-2.5 bg-green-50 border border-green-200 rounded-xl px-3.5 py-3">
        <Check className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.5} />
        <span className="text-[13px] font-semibold text-slate-900">Data Visualisation - resolved</span>
        <span className="ml-auto bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">Advanced</span>
      </div>
    </VisualCardFrame>
  );
}

/* Step 4: manager adjudication */
export function AdjudicationVisual() {
  return (
    <VisualCardFrame title="Manager review queue - Sarah Chen">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold text-slate-400">Needs your input</span>
        <span className="bg-amber-100 text-amber-700 text-[11px] font-bold px-2.5 py-1 rounded-full">2 pending</span>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            JK
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">James Kim</div>
            <div className="text-[11px] text-slate-400">Senior Engineer</div>
          </div>
          <span className="ml-auto bg-cyan-50 text-cyan-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-cyan-200">
            Leadership
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap mb-2.5">
          <span className="bg-amber-50 text-amber-700 text-[11px] font-semibold px-2 py-0.5 rounded-full">
            LMS: Developing
          </span>
          <span className="bg-green-50 text-green-700 text-[11px] font-semibold px-2 py-0.5 rounded-full">
            Mgr Q3: Emerging
          </span>
          <span className="text-[11px] text-slate-400">Conf: 48%</span>
        </div>
        <div className="text-[11.5px] text-slate-500 bg-indigo-50/60 rounded-lg px-2.5 py-2 mb-3">
          AI suggests: <strong className="text-slate-900">Emerging</strong> - confirm or set a different level below.
        </div>
        <div className="flex gap-2">
          <span className="flex-1 text-center bg-green-600 text-white text-[13px] font-semibold rounded-lg px-3 py-2">
            Confirm - Emerging
          </span>
          <span className="flex-1 text-center bg-white border border-slate-200 text-[13px] font-semibold text-slate-600 rounded-lg px-3 py-2">
            Set different level
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3.5 text-[12.5px] text-slate-400">
        <Clock className="w-3.5 h-3.5" strokeWidth={2} />
        Average adjudication time for your team:
        <strong className="text-slate-900">1m 47s per person</strong>
      </div>
    </VisualCardFrame>
  );
}

/* Step 5: live activity feed */
const activity = [
  { dot: "bg-blue-600", text: "Python - updated from LMS completion", delta: "Expert", time: "Just now" },
  { dot: "bg-green-500", text: "Cloud Architecture - manager confirmed", delta: "Advanced", time: "4m ago" },
  { dot: "bg-violet-600", text: "Stakeholder Management - auto-resolved", delta: "Advanced", time: "12m ago" },
  { dot: "bg-cyan-500", text: "Profile synced to Workday HCM", delta: "Synced", time: "12m ago" },
];

const downstreamSystems = ["Workday", "Talent Marketplace", "LMS engine", "Analytics", "ATS"];

export function ActivityVisual() {
  return (
    <VisualCardFrame title="Skills profile - live activity feed">
      <div className="flex flex-col gap-2.5 mb-4">
        {activity.map((a, idx) => (
          <div key={idx} className="flex items-center gap-2.5 flex-wrap text-[12.5px]">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${a.dot}`} />
            <span className="text-slate-700 font-medium">{a.text}</span>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ml-auto ${
                a.delta === "Synced"
                  ? "bg-cyan-50 text-cyan-600"
                  : "bg-green-50 text-green-600"
              }`}
            >
              {a.delta}
            </span>
            <span className="text-slate-400 text-[11px] flex-shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-slate-200">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
          Downstream systems updated
        </div>
        <div className="flex flex-wrap gap-2">
          {downstreamSystems.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              <Check className="w-3 h-3" strokeWidth={2.5} />
              {s}
            </span>
          ))}
        </div>
      </div>
    </VisualCardFrame>
  );
}
