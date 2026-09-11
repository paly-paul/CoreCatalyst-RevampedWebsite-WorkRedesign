import Link from "next/link";
import MissionSection from "./_components/mission-section";
import OriginSection from "./_components/origin-section";
import ValuesSection from "./_components/values-section";
import TeamSection from "./_components/team-section";
import AdvisorsSection from "./_components/advisors-section";
import ApproachSection from "./_components/approach-section";
import { aboutHero } from "./about.data";

export default function About() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-6">
                {aboutHero.eyebrow}
              </div>
              <h1 className="font-display font-extrabold text-[32px] sm:text-[51px] leading-[1.1] tracking-tight text-slate-900 mb-6">
                {aboutHero.headline}{" "}
                <span className="text-cyan-600">{aboutHero.headlineAccent}</span>
              </h1>
              <p className="text-[17.5px] text-slate-600 leading-relaxed max-w-[500px]">
                {aboutHero.body}
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.14)] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={aboutHero.image}
                alt={aboutHero.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <MissionSection />

      <OriginSection />

      <ValuesSection />

      <TeamSection />

      <AdvisorsSection />

      <ApproachSection />

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-[24px] px-8 py-14 sm:px-14 sm:py-16 text-center text-white">
            <h2 className="font-display font-extrabold text-[28px] sm:text-[42px] tracking-tight mb-4">
              Start with a conversation
            </h2>
            <p className="text-[17px] text-white/85 max-w-[520px] mx-auto leading-relaxed mb-9">
              A 30-minute call with one of our founders. No pitch deck, no product demo. Just an honest conversation about what you are trying to solve and whether we are the right fit.
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
