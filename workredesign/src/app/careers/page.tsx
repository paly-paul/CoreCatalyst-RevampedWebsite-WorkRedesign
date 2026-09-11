import Link from "next/link";
import CTABanner from "../_components/cta-banner";
import ProcessSection from "./_components/process-section";

const jobs = [
  {
    title: "Senior Product Manager",
    department: "Product",
    location: "London / Remote",
    type: "Full-time",
  },
  {
    title: "Solutions Engineer",
    department: "Solutions",
    location: "US / Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Europe",
    type: "Full-time",
  },
];

const benefits = [
  { title: "Remote First", description: "Work from anywhere. We're distributed across 6 continents." },
  { title: "Equity", description: "Own a piece of the company. We share success with our team." },
  { title: "Learning Budget", description: "£2k/year for courses, conferences, and development." },
  { title: "Flexible Hours", description: "Ship great work. How and when you do it is up to you." },
];

export default function Careers() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">
            Build the Future of Work With Us
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            We're hiring mission-driven people who believe skills intelligence changes everything.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200xl] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-12">
            Why WorkRedesign
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 rounded-xl p-8">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h2 className="display-md text-slate-900 text-center mb-12">
            Open Roles
          </h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <Link
                key={job.title}
                href="#"
                className="block bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-cyan-300 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {job.department} • {job.location}
                    </p>
                  </div>
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CTABanner
        headline="Don't see your role? Send a speculative application."
        primaryCta={{
          label: "Get in Touch",
          href: "/contact",
        }}
      />
    </div>
  );
}
