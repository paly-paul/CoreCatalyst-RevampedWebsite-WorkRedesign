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
        <div className="mb-16 max-w-2xl">
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
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {platformFeatures.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              data-testid={`feature-card-${feature.id}`}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-[10px] bg-cyan-500 flex items-center justify-center text-white mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              {feature.details && (
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-cyan-500 flex-shrink-0">•</span>
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
          className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side */}
            <div>
              <div className="w-12 h-12 rounded-[10px] bg-cyan-500 flex items-center justify-center text-white mb-6">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {platformFeatures[3].title}
              </h3>
              <p className="text-slate-600 mb-4">{platformFeatures[3].description}</p>
              <p className="text-sm text-slate-600">
                {platformFeatures[3].note}
              </p>
            </div>

            {/* Right side - Output items */}
            <div className="space-y-4">
              {platformFeatures[3].outputs && platformFeatures[3].outputs.map((output, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-cyan-600">
                    {output.icon === "FileText" && <FileText className="w-5 h-5" />}
                    {output.icon === "TrendingUp" && <TrendingUp className="w-5 h-5" />}
                    {output.icon === "Zap" && <Zap className="w-5 h-5" />}
                    {output.icon === "BarChart2" && <BarChart2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {output.title}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
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
