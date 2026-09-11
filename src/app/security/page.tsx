import Link from "next/link";
import SecHero from "./_components/sec-hero";
import SidebarNav from "./_components/sidebar-nav";
import SecurityContent from "./_components/security-content";

export default function Security() {
  return (
    <div className="pt-[68px]">
      <SecHero />

      {/* Docs body: sidebar + content */}
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 items-start">
          <SidebarNav />
          <SecurityContent />
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-[560px] mx-auto px-6 sm:px-8">
          <h2 className="font-display font-extrabold text-[26px] sm:text-[30px] text-slate-900 leading-tight mb-4">
            Questions about our
            <br />
            <span className="text-gradient">security posture?</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[480px] mx-auto mb-7">
            Our security team responds to enterprise security questionnaires and can provide our SOC 2 report under NDA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white font-semibold text-[15px] hover:opacity-90 transition-opacity"
            >
              Contact Security Team
            </Link>
            <Link
              href="/engage"
              className="px-7 py-3 rounded-lg border-[1.5px] border-blue-600 text-blue-600 font-semibold text-[15px] hover:bg-indigo-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
