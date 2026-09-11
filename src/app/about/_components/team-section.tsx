import { teamMembers } from "../about.data";
import { ExternalLink } from "lucide-react";

export default function TeamSection() {
  return (
    <section
      data-testid="section-team"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              The team
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Practitioners, not just builders
          </h2>
          <p className="body-md text-slate-600 max-w-2xl mx-auto">
            Every person on our team has worked inside HR, people analytics, or workforce strategy before building technology for it.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              data-testid={`team-card-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-cyan-600 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-slate-600 border border-slate-200 rounded-md px-3 py-2 hover:border-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
