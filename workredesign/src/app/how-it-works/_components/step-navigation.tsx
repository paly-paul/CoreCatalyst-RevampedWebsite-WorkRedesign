"use client";

import { useState } from "react";

const steps = [
  { num: 1, label: "Connect your sources" },
  { num: 2, label: "Ingest & normalise" },
  { num: 3, label: "AI reconciliation" },
  { num: 4, label: "Human adjudication" },
  { num: 5, label: "Living skills profiles" },
];

export default function StepNavigation() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div
      data-testid="section-step-navigation"
      className="bg-slate-50 border-b border-slate-200 sticky top-[68px] z-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 sm:gap-4 sm:justify-center">
          {steps.map((step) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              data-testid={`step-nav-item-${step.num}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                activeStep === step.num
                  ? "bg-cyan-500 text-white"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-cyan-300"
              }`}
            >
              <div className="font-semibold text-sm">{step.num}</div>
              <span className="text-xs sm:text-sm font-medium">{step.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
