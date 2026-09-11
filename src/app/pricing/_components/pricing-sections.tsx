"use client";

import { useState } from "react";
import { FileText, Users, TrendingUp, Lock, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why do you not publish exact prices on the website?",
    a: "Because the scope varies significantly between organisations. A POC covering 200 employees in a single function is a materially different piece of work to one covering 800 employees across five functions with six source systems. Publishing a single number would either mislead you or anchor you to the wrong expectation. What we can tell you is that the indicative ranges on this page are genuine, and the Discovery Call is the fastest way to get an accurate scoped estimate.",
  },
  {
    q: "Can we start with a smaller pilot before committing to the full POC?",
    a: "Yes. If your organisation needs to demonstrate internal value before committing to a full 90-day engagement, we can design a shorter diagnostic sprint focused on a single team or role family. This is priced separately and separately scoped. It is not a free trial, but it is a lower-commitment starting point. Ask about this option on the Discovery Call.",
  },
  {
    q: "Is there an ongoing software subscription after the engagement ends?",
    a: "The platform access included during an engagement continues for the duration of that engagement and for a handover period after. Beyond that, continued platform access is available as part of the Advisory Retainer, or as a standalone licence arrangement agreed separately. We do not automatically roll you into a subscription at project close. You choose what ongoing access, if any, makes sense for your organisation.",
  },
  {
    q: "What happens if the scope changes during the engagement?",
    a: "In-scope changes, such as a department being restructured mid-engagement, are handled as part of normal delivery. Out-of-scope additions, such as adding a new function you did not include in the original agreement, are discussed transparently and quoted separately if they represent a material increase in work. We flag scope questions as they arise rather than presenting a surprise invoice at project end.",
  },
  {
    q: "Do you work with organisations outside the UK?",
    a: "Yes. We have delivered engagements across Europe, the Middle East, and sub-Saharan Africa. For organisations with multi-jurisdiction workforces, data residency and compliance requirements are scoped explicitly as part of the engagement design. Pricing for non-UK engagements is quoted in the relevant currency and adjusted for local compliance complexity.",
  },
];

const included = [
  { icon: FileText, title: "Fixed Statement of Work", desc: "Scope, deliverables, milestones, and price locked before work begins. No ambiguity, no change orders for in-scope work." },
  { icon: Users, title: "Named delivery team", desc: "You know who is doing the work before you sign. We do not hand off to junior consultants after the sale is closed." },
  { icon: TrendingUp, title: "Weekly progress reports", desc: "A concise written update every Friday covering what was completed, what is next, and any decisions needed from your team." },
  { icon: Lock, title: "Data you own completely", desc: "Your skills data is yours. At project close you receive a full export in your preferred format. We retain nothing without explicit permission." },
];

export function ModelExplainer() {
  return (
    <section data-testid="section-model-explainer" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4">
              How pricing works
            </div>
            <h2 className="display-md text-slate-900 mb-6">
              Fixed-scope. Fixed-price. No surprises.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We price every engagement based on the population size you want to cover, the number of source systems we need to integrate, and the complexity of your job architecture. Those three variables determine the scope, and the scope determines the price.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              That figure is agreed and documented in a Statement of Work before we start. You will not receive an invoice for anything not in that document.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7">
              We do not charge per user, per skill tag, or per API call. Our incentive is to deliver a clean, governed skills foundation as efficiently as possible, not to run up a bill.
            </p>
            <div className="border-l-4 border-cyan-500 bg-cyan-50 rounded-r-xl p-5">
              <p className="text-[15px] text-slate-700 font-medium leading-relaxed">
                The Discovery Call is free. We will not ask for a commitment until you have seen a scoped proposal and had the chance to pressure-test it with your team.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { num: 1, title: "Discovery Call (free)", desc: "30 minutes with a WorkRedesign founder. We understand your challenge, your current data landscape, and your timeline. No pitch deck." },
              { num: 2, title: "Scoping workshop", desc: "A structured half-day session with your HR leadership team. We map your population, your source systems, and your success criteria." },
              { num: 3, title: "Fixed-price proposal", desc: "We send a Statement of Work with a single fixed price covering the full engagement. You review, negotiate if needed, and decide." },
              { num: 4, title: "90-day delivery", desc: "We start work. Weekly checkpoints, no scope creep, and a clear milestone structure so you always know where we are." },
            ].map((step) => (
              <div key={step.num} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-[15px] mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AlwaysIncluded() {
  return (
    <section data-testid="section-always-included" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Every engagement
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            What you always get
          </h2>
          <p className="body-md text-slate-600">
            Regardless of which engagement type you choose, these commitments are non-negotiable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {included.map((item) => (
            <div
              key={item.title}
              data-testid={`included-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-3.5 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                <item.icon className="w-[22px] h-[22px]" strokeWidth={1.5} />
              </div>
              <h3 className="font-extrabold text-[15px] text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section data-testid="section-faq" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-12 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Common questions
            </span>
          </div>
          <h2 className="display-md text-slate-900">
            What people ask before they commit
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-2.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              data-testid={`faq-item-${idx}`}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="w-full min-h-[44px] flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-cyan-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-[15.5px]">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 pt-4 border-t border-slate-200 text-[15px] text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
