import HeroSection from "./_components/hero-section";
import LogoBar from "./_components/logo-bar";
import ProblemSection from "./_components/problem-section";
import StepsSection from "./_components/steps-section";
import CTABanner from "./_components/cta-banner";

export default function Home() {
  return (
    <div className="pt-[68px]">
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <StepsSection />
      <CTABanner
        headline="Start with a 90-day proof of concept"
        subheadline="See WorkRedesign transform your skills data into board-ready intelligence"
        primaryCta={{
          label: "Book a Discovery Call",
          href: "/engage",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/how-it-works",
        }}
      />
    </div>
  );
}
