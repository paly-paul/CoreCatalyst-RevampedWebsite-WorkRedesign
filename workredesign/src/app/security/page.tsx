import CTABanner from "../_components/cta-banner";
import TrustClaimsSection from "./_components/trust-claims-section";
import DeploymentSection from "./_components/deployment-section";

const certs = [
  {
    title: "SOC 2 Type II",
    description: "Security, availability, and confidentiality audited and certified.",
  },
  {
    title: "ISO 27001",
    description: "International information security management standard.",
  },
  {
    title: "GDPR Compliant",
    description: "Full GDPR compliance with data residency options.",
  },
  {
    title: "CCPA Ready",
    description: "California Consumer Privacy Act compliance built in.",
  },
];

const features = [
  {
    title: "AES-256 Encryption",
    description: "Military-grade encryption for data in transit and at rest.",
  },
  {
    title: "Role-Based Access Control",
    description: "Fine-grained permissions. No blanket access.",
  },
  {
    title: "Comprehensive Audit Logs",
    description: "Every action tracked. Provenance on every skill record.",
  },
  {
    title: "SSO & SAML",
    description: "Enterprise authentication with your identity provider.",
  },
];

export default function Security() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">
            Built for the Enterprise. Secured for the Regulated.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            WorkRedesign is trusted by some of the world's most security-conscious organisations.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-12">
            Certifications & Compliance
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {certs.map((cert) => (
              <div key={cert.title} className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-[1200xl] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-12">
            Security Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustClaimsSection />

      <DeploymentSection />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200 text-center">
            <p className="text-lg text-slate-700 mb-4">
              <strong>Your data is never used for model training.</strong> Your
              workforce skills record stays in your environment or private cloud.
            </p>
            <p className="text-slate-600">
              Available deployment: AWS, Azure, GCP, or on-premise.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Request our security documentation"
        subheadline="Detailed security posture and compliance information available to authorised reviewers"
        primaryCta={{
          label: "Request Security Docs",
          href: "/contact",
        }}
      />
    </div>
  );
}
