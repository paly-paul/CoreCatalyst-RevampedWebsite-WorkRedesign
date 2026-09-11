"use client";

import { useState } from "react";
import { personas } from "./home.data";

export default function PersonaTabs() {
  const [activePersona, setActivePersona] = useState("chro");
  const active = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section
      data-testid="section-personas"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Who It Is For
            </span>
          </div>
          <h2 className="display-lg text-slate-900 mb-4">
            The intelligence your leaders have been asking for
          </h2>
          <p className="body-md text-slate-600">
            WorkRedesign addresses the specific questions that keep HR and business leaders awake - with answers grounded in evidence. It covers every population: Finance, Procurement, HR, Logistics, Operations, Customer Service, and frontline roles - not just knowledge workers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-slate-200">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              data-testid={`persona-tab-${persona.id}`}
              className={`px-6 py-4 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activePersona === persona.id
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              {persona.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div
          data-testid={`persona-panel-${active.id}`}
          className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-12"
        >
          {/* Badge and Quote */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wider uppercase mb-4">
              {active.title}
            </div>
            <blockquote className="text-xl font-semibold text-slate-900 italic mb-6">
              "{active.quote}"
            </blockquote>
          </div>

          {/* Heading */}
          <h3 className="display-md text-slate-900 mb-8">{active.heading}</h3>

          {/* Outcomes */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-6">
              What You Get
            </h4>
            <ul className="space-y-4">
              {active.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-700 pt-0.5">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
