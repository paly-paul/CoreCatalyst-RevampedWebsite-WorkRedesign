import CTABanner from "../_components/cta-banner";
import HiwHero from "./_components/hiw-hero";
import StepNavigation from "./_components/step-navigation";
import StepsSection from "./_components/steps-section";
import TrustSection from "./_components/trust-section";

export default function HowItWorks() {
  return (
    <div className="pt-[68px]">
      <HiwHero />

      <StepNavigation />

      <StepsSection />

      <TrustSection />

      <CTABanner
        variant="light"
        eyebrow="Ready to see it live?"
        headline="See the reconciliation engine run on your own data."
        subheadline="Bring a sample export from your LMS or HRIS. We'll run a live reconciliation in the demo and show you exactly what your skills picture would look like."
        trustItems={[
          "No synthetic data - we use yours",
          "45-minute session",
          "NDA available before demo",
        ]}
        primaryCta={{
          label: "Book a live demo",
          href: "/engage",
        }}
        secondaryCta={{
          label: "Read the technical docs",
          href: "/engage",
        }}
      />
    </div>
  );
}
