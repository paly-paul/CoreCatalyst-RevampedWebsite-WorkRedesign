import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  note?: string;
  /** Optional row of checkmarked reassurance items below the buttons. */
  trustItems?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** "dark" (default) matches the slate CTA used across inner pages;
   * "light" matches the hero-gradient final CTA on the homepage. */
  variant?: "dark" | "light";
}

export default function CTABanner({
  eyebrow,
  headline,
  subheadline,
  note,
  trustItems,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CTABannerProps) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "py-20 sm:py-32",
        isLight
          ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-t border-slate-200"
          : "bg-slate-900 text-white"
      )}
    >
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        <h2
          className={cn(
            "display-lg mb-4",
            isLight ? "text-slate-900" : "text-white"
          )}
        >
          {headline}
        </h2>
        {subheadline && (
          <p
            className={cn(
              "text-[17px] leading-relaxed mb-9 max-w-2xl mx-auto",
              isLight ? "text-slate-600" : "body-lg text-slate-300"
            )}
          >
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-3.5">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors min-h-[54px] shadow-lg shadow-cyan-500/25"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] border-2 font-semibold transition-colors min-h-[54px]",
                isLight
                  ? "border-slate-200 text-cyan-600 hover:border-cyan-500 hover:bg-cyan-50"
                  : "border-slate-400 hover:border-white text-white"
              )}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
        {note && (
          <p
            className={cn(
              "mt-5 text-[13px]",
              isLight ? "text-slate-400" : "text-slate-400"
            )}
          >
            {note}
          </p>
        )}

        {trustItems && trustItems.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustItems.map((item, idx) => (
              <span
                key={idx}
                className={cn(
                  "inline-flex items-center gap-1.5 text-[13px] font-medium",
                  isLight ? "text-slate-500" : "text-slate-300"
                )}
              >
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
