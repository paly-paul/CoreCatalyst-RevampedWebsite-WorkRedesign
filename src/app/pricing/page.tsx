import Link from "next/link";
import EngagementTypes from "./_components/engagement-types";
import { ModelExplainer, AlwaysIncluded, FAQ } from "./_components/pricing-sections";

export default function Pricing() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 to-slate-100 text-center">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-6">
            Engagement model
          </div>
          <h1 className="font-display font-extrabold text-[32px] sm:text-[54px] leading-[1.1] tracking-tight text-slate-900 max-w-[740px] mx-auto mb-6">
            Scoped to your organisation.{" "}
            <span className="text-cyan-600">Priced on outcomes.</span>
          </h1>
          <p className="text-[17.5px] text-slate-600 leading-relaxed max-w-[580px] mx-auto mb-3">
            WorkRedesign is not a software subscription. It is a structured engagement with a defined scope, clear deliverables, and pricing agreed before work begins. No seat licences. No annual lock-in before you have seen results.
          </p>
          <p className="text-sm text-slate-400 italic">
            All engagements start with a complimentary Discovery Call to confirm fit and scope.
          </p>
        </div>
      </section>

      <ModelExplainer />

      <EngagementTypes />

      <AlwaysIncluded />

      <FAQ />

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-[24px] px-8 py-14 sm:px-14 sm:py-16 text-center text-white">
            <h2 className="font-display font-extrabold text-[28px] sm:text-[42px] tracking-tight mb-4">
              The next step is a conversation
            </h2>
            <p className="text-[17px] text-white/85 max-w-[520px] mx-auto leading-relaxed mb-9">
              Book a 30-minute call with one of our founders. We will tell you whether WorkRedesign is the right fit for where you are right now, and what a scoped engagement would look like for your organisation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/engage"
                className="px-8 py-3.5 rounded-xl bg-white text-cyan-600 font-extrabold text-[15px] hover:opacity-90 transition-opacity"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/how-it-works"
                className="px-7 py-3.5 rounded-xl bg-white/10 border-[1.5px] border-white/30 text-white font-bold text-[15px] hover:bg-white/20 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
