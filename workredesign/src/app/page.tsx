import HeroSection from "./_components/hero-section";
import LogoBar from "./_components/logo-bar";
import ProblemSection from "./_components/problem-section";
import StepsSection from "./_components/steps-section";
import FeaturesSection from "./_components/features-section";
import TrustSection from "./_components/trust-section";
import StatsSection from "./_components/stats-section";
import PersonaTabs from "./_components/persona-tabs";
import RoleFamiliesSection from "./_components/role-families-section";
import ComparisonSection from "./_components/comparison-section";
import TestimonialSection from "./_components/testimonial-section";
import CTABanner from "./_components/cta-banner";

export default function Home() {
  return (
    <div className="pt-[68px]">
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <StepsSection />
      <FeaturesSection />
      <TrustSection />
      <StatsSection />
      <PersonaTabs />
      <RoleFamiliesSection />
      <ComparisonSection />
      <TestimonialSection />
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
