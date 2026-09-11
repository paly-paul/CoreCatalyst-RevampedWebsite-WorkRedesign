import Link from "next/link";

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="py-20 sm:py-32 bg-slate-900 text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        <h2 className="display-lg text-white mb-4">{headline}</h2>
        {subheadline && (
          <p className="body-lg text-slate-300 max-w-2xl mx-auto mb-8">
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors min-h-[54px]"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] border-2 border-slate-400 hover:border-white text-white font-semibold transition-colors min-h-[54px]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
