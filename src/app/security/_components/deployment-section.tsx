import { Globe, Server, Lock, Shield, Cloud } from "lucide-react";

const deploymentOptions = [
  {
    icon: Cloud,
    title: "AWS Cloud",
    description:
      "Multi-region active-passive configuration with primary in eu-west-1 (Ireland) and failover in us-east-1. 99.9% uptime SLA on Enterprise tier.",
    features: ["RPO < 1 hour", "RTO < 4 hours", "99.9% uptime SLA"],
  },
  {
    icon: Globe,
    title: "Custom Geography",
    description:
      "Enterprise customers can request single-region deployment within a specific geography or private cloud for compliance.",
    features: ["GDPR compliant", "Data residency guarantees", "Custom VPC"],
  },
  {
    icon: Lock,
    title: "On-Premises",
    description:
      "Deploy WorkRedesign on your own infrastructure with the same security posture, audit trails, and compliance features.",
    features: [
      "Self-hosted",
      "Private cloud support",
      "Air-gapped deployment",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description:
      "Immutable deployments with no direct SSH access to production. All changes go through reviewed CI/CD pipeline with automated security scanning.",
    features: [
      "Immutable infrastructure",
      "Automated security scanning",
      "Zero-trust architecture",
    ],
  },
];

export default function DeploymentSection() {
  return (
    <section
      data-testid="section-deployment-info"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Infrastructure
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Built on hardened cloud infrastructure
          </h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            WorkRedesign runs on AWS with flexible deployment options for every
            security requirement - from public cloud to air-gapped on-premises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deploymentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                data-testid={`deployment-option-${option.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {option.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Automated Security Scanning
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  Container images scanned on every build
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  SAST and dependency scanning in CI
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  Critical CVEs patched within 48 hours
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Penetration Testing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  Annual third-party penetration test
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  CREST-certified security firm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="text-sm text-slate-600">
                  Results tracked to remediation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
