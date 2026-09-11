"use client";

import { useEffect, useState } from "react";

const steps = [
  { num: 1, id: "step1", label: "Connect your sources" },
  { num: 2, id: "step2", label: "Ingest & normalise" },
  { num: 3, id: "step3", label: "AI reconciliation" },
  { num: 4, id: "step4", label: "Human adjudication" },
  { num: 5, id: "step5", label: "Living skills profiles" },
];

export default function StepNavigation() {
  const [activeStep, setActiveStep] = useState("step1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStep(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    steps.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-testid="section-step-navigation"
      className="bg-white border-t border-b border-slate-200 sticky top-[68px] z-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-stretch overflow-x-auto">
          {steps.map((step, idx) => {
            const isActive = activeStep === step.id;
            return (
              <a
                key={step.num}
                href={`#${step.id}`}
                data-testid={`step-nav-item-${step.num}`}
                className={`flex-1 flex items-center gap-3 px-3.5 py-[18px] whitespace-nowrap transition-colors border-b-[3px] ${
                  idx !== steps.length - 1 ? "border-r border-r-slate-200" : ""
                } ${
                  isActive
                    ? "border-b-cyan-500 bg-[#fafbff]"
                    : "border-b-transparent hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-[30px] h-[30px] rounded-full border-[1.5px] flex items-center justify-center font-display font-bold text-[13px] flex-shrink-0 transition-colors ${
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}
                >
                  {step.num}
                </div>
                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    isActive ? "text-cyan-600" : "text-slate-500"
                  }`}
                >
                  {step.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
