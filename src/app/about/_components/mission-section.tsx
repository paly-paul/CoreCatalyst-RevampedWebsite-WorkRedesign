import { aboutMission } from "../about.data";

export default function MissionSection() {
  return (
    <section
      data-testid="section-mission"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
          <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
            {aboutMission.label}
          </span>
        </div>
        <h2 className="display-md text-slate-900 mb-8">
          {aboutMission.heading}
        </h2>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-lg p-7 mb-8">
          <p className="text-lg italic font-medium text-slate-900">
            "{aboutMission.quote}"
          </p>
        </div>
        <div className="space-y-6">
          {aboutMission.paragraphs.map((para, idx) => (
            <p key={idx} className="body-md text-slate-600">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
