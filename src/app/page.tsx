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
        variant="light"
        eyebrow="90-Day Proof of Concept"
        headline="Start with a 90-day proof of concept"
        subheadline="We do not ask you to commit to a platform before you have seen results. Our structured POC delivers a validated skills map, career lattices, and an automation charter for a defined part of your organisation - in 90 days. Enough to take to the board. Enough to know if this is right for you."
        note="No commitment required. We start with an honest conversation about your situation."
        primaryCta={{
          label: "Book a Discovery Call",
          href: "/engage",
        }}
        secondaryCta={{
          label: "Talk to the Team",
          href: "/engage",
        }}
      />
    </div>
  );
}
