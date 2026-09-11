import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-20 sm:pt-32 pb-20 sm:pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                Skills Intelligence Platform - B2B
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-xl text-slate-900 mb-4">
              Know what your people<br />
              <span className="text-gradient">can actually do.</span>
            </h1>

            {/* Subheadline */}
            <p className="body-lg text-slate-600 max-w-[520px] mb-3">
              Skills intelligence that is human-engineered, not just AI-generated - trustworthy enough to act on at board level.
            </p>

            {/* Callout box */}
            <div className="bg-violet-50 border-l-3 border-violet-600 rounded-r-lg p-4 mb-6 max-w-[520px]">
              <p className="text-slate-600 text-base leading-relaxed">
                AI is already redesigning the work. WorkRedesign helps you redesign your workforce to match - with validated skills data, redefined job descriptions, career lattices, and an automation charter built from a single governed pipeline.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                href="/engage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors min-h-[54px] shadow-lg shadow-cyan-500/25"
              >
                Start a 90-Day Proof of Concept
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-cyan-600 font-semibold hover:gap-3 transition-all min-h-[54px]"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Secondary text */}
            <p className="text-xs text-slate-500 mt-4">
              <Link href="/engage" className="text-blue-600 font-medium hover:text-blue-700">
                Talk to the Team
              </Link>
              {" "}- no sales pitch, just an honest conversation.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300">
              {/* Placeholder for hero image */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=560&fit=crop&crop=center"
                alt="Diverse team collaborating in a modern boardroom"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-md flex gap-3 items-center">
              {/* Pulse dot */}
              <div className="relative w-2 h-2 rounded-full bg-green-500 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-[10px] bg-cyan-500 flex items-center justify-center flex-shrink-0 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="w-5 h-5"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Board-Ready Intelligence Export
                </div>
                <div className="text-xs text-slate-600">
                  From raw HRIS data to strategic workforce insight
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
