import { platformFeatures } from "./home.data";
import {
  Database,
  Users,
  Shield,
  FileText,
  TrendingUp,
  Zap,
  BarChart2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
};

export default function FeaturesSection() {
  return (
    <section
      data-testid="section-features"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              The Platform
            </span>
          </div>
          <h2 className="display-lg text-slate-900 mb-4">
            Four pillars. One governed pipeline.
          </h2>
          <p className="body-md text-slate-600">
            WorkRedesign is built around a single principle: skills data is only as valuable as the decisions you can make with it.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {platformFeatures.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              data-testid={`feature-card-${feature.id}`}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-5 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2.5">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">{feature.description}</p>
              {feature.details && (
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              )}
            </div>
          ))}
        </div>

        {/* Full-width Business Outputs Card */}
        <div
          data-testid="feature-card-business-outputs"
          className="group bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-cyan-200 transition-all"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side */}
            <div>
              <div className="w-12 h-12 rounded-[14px] bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-5 transition-all group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(34,184,207,0.3)]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-[22px] font-semibold text-slate-900 mb-3">
                {platformFeatures[3].title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">{platformFeatures[3].description}</p>
              <p className="text-sm text-slate-600 mt-3">
                {platformFeatures[3].note}
              </p>
            </div>

            {/* Right side - Output items */}
            <div className="grid sm:grid-cols-2 gap-3">
              {platformFeatures[3].outputs && platformFeatures[3].outputs.map((output, idx) => (
                <div key={idx} className="flex gap-2.5 items-start bg-slate-50 border border-slate-200 rounded-[10px] p-3.5">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0 text-cyan-600">
                    {output.icon === "FileText" && <FileText className="w-[18px] h-[18px]" />}
                    {output.icon === "TrendingUp" && <TrendingUp className="w-[18px] h-[18px]" />}
                    {output.icon === "Zap" && <Zap className="w-[18px] h-[18px]" />}
                    {output.icon === "BarChart2" && <BarChart2 className="w-[18px] h-[18px]" />}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {output.title}
                    </div>
                    <div className="text-[13px] text-slate-600 mt-0.5">
                      {output.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
