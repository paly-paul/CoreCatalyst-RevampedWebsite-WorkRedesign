"use client";

import { useState } from "react";
import { FileText, Users, TrendingUp, Lock, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why do you not publish exact prices on the website?",
    a: "Because the scope varies significantly between organisations. Publishing a single number would either mislead you or anchor you to the wrong expectation. The Discovery Call is the fastest way to get an accurate scoped estimate.",
  },
  {
    q: "Can we start with a smaller pilot before committing to the full engagement?",
    a: "Yes. If your organisation needs to demonstrate internal value before committing to a full 90-day engagement, we can design a shorter diagnostic sprint. Ask about this option on the Discovery Call.",
  },
  {
    q: "Is there an ongoing software subscription after the engagement ends?",
    a: "Continued platform access is available as part of the Advisory Retainer, or as a standalone licence arrangement agreed separately. We do not automatically roll you into a subscription at project close.",
  },
  {
    q: "What happens if the scope changes during the engagement?",
    a: "In-scope changes are handled as part of normal delivery. Out-of-scope additions are discussed transparently and quoted separately if they represent a material increase in work.",
  },
  {
    q: "Do you work with organisations outside the UK?",
    a: "Yes. We have delivered engagements across Europe, the Middle East, and sub-Saharan Africa. Pricing for non-UK engagements is quoted in the relevant currency.",
  },
];

const included = [
  { icon: FileText, title: "Fixed Statement of Work", desc: "Scope, deliverables, and price locked before work begins." },
  { icon: Users, title: "Named delivery team", desc: "You know who is doing the work before you sign." },
  { icon: TrendingUp, title: "Weekly progress reports", desc: "Concise written updates every Friday covering progress and next steps." },
  { icon: Lock, title: "Data you own completely", desc: "Your skills data is yours at project close with full export rights." },
];

export function ModelExplainer() {
  return (
    <section data-testid="section-model-explainer" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                How pricing works
              </span>
            </div>
            <h2 className="display-md text-slate-900 mb-6">
              Fixed-scope. Fixed-price. No surprises.
            </h2>
            <p className="text-slate-600 mb-4">
              We price every engagement based on population size, source systems, and job architecture complexity. That scope determines the price.
            </p>
            <p className="text-slate-600 mb-6">
              That figure is agreed and documented in a Statement of Work before we start. You will not receive an invoice for anything not in that document.
            </p>
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>The Discovery Call is free.</strong> We will not ask for a commitment until you have seen a scoped proposal.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: "Discovery Call (free)", desc: "30 minutes with a WorkRedesign founder. No pitch deck." },
              { num: 2, title: "Scoping workshop", desc: "Map your population, source systems, and success criteria." },
              { num: 3, title: "Fixed-price proposal", desc: "Statement of Work with a single fixed price." },
              { num: 4, title: "90-day delivery", desc: "Weekly checkpoints, no scope creep, clear milestones." },
            ].map((step) => (
              <div key={step.num} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-cyan-600 flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
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
    <section data-testid="section-always-included" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Every engagement
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            What you always get
          </h2>
          <p className="body-md text-slate-600 max-w-2xl mx-auto">
            Regardless of which engagement type you choose, these commitments are non-negotiable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {included.map((item) => (
            <div
              key={item.title}
              data-testid={`included-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white rounded-xl p-8 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
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
    <section data-testid="section-faq" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="mb-16 text-center">
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

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              data-testid={`faq-item-${idx}`}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-left">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
