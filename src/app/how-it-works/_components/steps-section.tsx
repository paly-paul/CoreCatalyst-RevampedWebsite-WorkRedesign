import { Boxes, Share2, Shield, Search, ChevronRight, Users2, FileCheck, RefreshCcw, Radio, Activity } from "lucide-react";
import {
  ConnectorVisual,
  TaxonomyVisual,
  ReconciliationVisual,
  AdjudicationVisual,
  ActivityVisual,
} from "./step-visuals";

const steps = [
  {
    id: "step1",
    number: 1,
    badgeGradient: "from-blue-600 to-violet-600",
    labelColor: "text-cyan-600",
    label: "Step one",
    title: "Connect every system your people data lives in.",
    description:
      "Most organisations have skills data sitting in 4 to 8 different systems - none talking to each other. WorkRedesign connects to all of them in hours, not months, using pre-built connectors that require no engineering resources to configure.",
    points: [
      { icon: Boxes, text: "200+ pre-built connectors for Workday, SAP SuccessFactors, Oracle HCM, Cornerstone, Degreed, Saba, LinkedIn Learning, and all major ATS platforms" },
      { icon: ChevronRight, text: "Open REST API and webhooks for custom sources - if a system can export data, WorkRedesign can ingest it" },
      { icon: Shield, text: "OAuth 2.0 and API key authentication - data stays encrypted in transit and at rest, with field-level access controls" },
    ],
    Visual: ConnectorVisual,
  },
  {
    id: "step2",
    number: 2,
    badgeGradient: "from-violet-600 to-indigo-500",
    labelColor: "text-violet-600",
    label: "Step two",
    title: "All skills, mapped to one universal taxonomy.",
    description:
      "Raw skills data is messy. One system calls it \"Python Programming\", another \"Python 3\", a third just \"Python\". WorkRedesign's normalisation layer maps every variant to a shared taxonomy of 45,000+ skills in 35 languages - so comparisons are apples to apples.",
    points: [
      { icon: Search, text: "45,000 skills with adjacency mappings, proficiency level definitions, and market demand signals updated monthly from live job postings" },
      { icon: Share2, text: "Supports 35 languages natively - skills are matched across language variants so global teams get unified profiles regardless of input language" },
      { icon: FileCheck, text: "Your own skills taxonomy can be imported and merged - WorkRedesign bridges proprietary frameworks to the universal graph without losing your custom structure" },
    ],
    Visual: TaxonomyVisual,
  },
  {
    id: "step3",
    number: 3,
    badgeGradient: "from-cyan-500 to-blue-600",
    labelColor: "text-cyan-600",
    label: "Step three",
    title: "AI resolves conflicts - not by guessing.",
    description:
      "When sources disagree on a skill level, WorkRedesign doesn't pick the highest or most recent blindly. It applies a weighted confidence model that accounts for source reliability, data recency, evidence type, and the context of the disagreement.",
    points: [
      { icon: Activity, text: "Recency weighting - a manager assessment from 3 months ago outweighs a CV entry from 4 years ago for the same skill" },
      { icon: Shield, text: "Source trust scoring - structured assessment data carries more weight than self-declared CV entries by default, with configurable overrides" },
      { icon: Radio, text: "Confidence thresholds - only resolutions above a configurable confidence floor are auto-accepted; lower confidence cases route to human review" },
    ],
    Visual: ReconciliationVisual,
  },
  {
    id: "step4",
    number: 4,
    badgeGradient: "from-amber-500 to-orange-500",
    labelColor: "text-amber-600",
    label: "Step four",
    title: "The 6% that needs a human takes 2 minutes.",
    description:
      "When confidence falls below threshold, the case goes to the manager's review queue - not buried in a form, not requiring any training. A clean card with the context they need, and two buttons. Most managers clear their queue over a coffee.",
    points: [
      { icon: Users2, text: "Managers see only their own team members - no access to other teams' data, with full RBAC controls configured at deployment" },
      { icon: FileCheck, text: "Every decision is logged with reason, timestamp, and reviewer identity - creating a full audit trail HR and compliance teams can export" },
      { icon: RefreshCcw, text: "Overrides are fed back into the model - each manager decision improves the AI's confidence calibration for that team and skill cluster over time" },
    ],
    Visual: AdjudicationVisual,
  },
  {
    id: "step5",
    number: 5,
    badgeGradient: "from-green-500 to-cyan-500",
    labelColor: "text-green-600",
    label: "Step five",
    title: "Skills profiles that stay current - automatically.",
    description:
      "A skills profile that's 6 months old is already wrong. WorkRedesign monitors all connected sources continuously and updates profiles as soon as new data arrives - whether that's a completed course, a new manager review, or a role change in your HRIS.",
    points: [
      { icon: RefreshCcw, text: "HRIS write-back means Workday, SAP, and Oracle stay updated automatically - no manual re-entry, no sync jobs to manage" },
      { icon: Share2, text: "Downstream systems - your ATS, talent marketplace, LMS content engine, and analytics tools - always receive the current verified profile via webhook push" },
      { icon: Activity, text: "Workforce intelligence dashboards reflect every change in real time - no waiting for quarterly snapshots to run decisions against stale data" },
    ],
    Visual: ActivityVisual,
  },
];

export default function StepsSection() {
  return (
    <>
      {steps.map((step, idx) => (
        <section
          key={step.id}
          id={step.id}
          data-testid={`section-${step.id}`}
          className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f9ff]"}
        >
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div
              className={`grid md:grid-cols-2 gap-12 lg:gap-[72px] items-center ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              {/* Copy */}
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-flex items-center gap-2.5 mb-6">
                  <div
                    className={`w-[42px] h-[42px] rounded-full bg-gradient-to-br ${step.badgeGradient} text-white flex items-center justify-center font-display font-extrabold text-lg flex-shrink-0`}
                  >
                    {step.number}
                  </div>
                  <span className={`text-[11.5px] font-bold uppercase tracking-widest ${step.labelColor}`}>
                    {step.label}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-[24px] sm:text-[34px] leading-[1.18] tracking-tight text-slate-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-[16px] text-slate-500 leading-[1.75] mb-7">
                  {step.description}
                </p>
                <div className="flex flex-col gap-3">
                  {step.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-[13.5px] font-medium text-slate-700 leading-snug">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <step.Visual />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
