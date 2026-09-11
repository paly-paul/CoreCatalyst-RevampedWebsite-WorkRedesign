"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { personas } from "./home.data";

export default function PersonaTabs() {
  const [activePersona, setActivePersona] = useState("chro");
  const active = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section
      data-testid="section-personas"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-10 max-w-[720px] mx-auto text-center">
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
        <div className="flex flex-wrap gap-2 mb-10">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              data-testid={`persona-tab-${persona.id}`}
              className={`min-h-[44px] px-5 py-2.5 rounded-[10px] text-sm font-semibold border-2 transition-colors ${
                activePersona === persona.id
                  ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white border-transparent"
                  : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-600"
              }`}
            >
              {persona.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div
          key={active.id}
          data-testid={`persona-panel-${active.id}`}
          className="grid md:grid-cols-2 gap-10 md:gap-12 items-start"
        >
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/10 text-cyan-600 text-[13px] font-semibold mb-5">
              {active.title}
            </div>
            <blockquote className="text-lg italic text-slate-600 border-l-[3px] border-violet-600 pl-4 mb-6 leading-relaxed">
              "{active.quote}"
            </blockquote>
            <h3 className="text-lg sm:text-[22px] font-display font-bold text-slate-900 mb-6">
              {active.heading}
            </h3>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                What You Get
              </h4>
              <ul className="flex flex-col gap-2.5">
                {active.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 bg-white border border-slate-200 rounded-[10px] px-3.5 py-3"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex-shrink-0 mt-px">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 px-4 py-3.5 bg-violet-600/5 border border-violet-600/10 rounded-[10px] text-[13px] text-slate-600 leading-relaxed">
              <strong className="text-violet-600">{active.customise.label}</strong>{" "}
              {active.customise.text}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative md:mt-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.image}
              alt={active.imageAlt}
              className="w-full h-[280px] sm:h-[380px] object-cover rounded-2xl shadow-lg"
            />
            {active.anxiety && (
              <div className="relative sm:absolute sm:-bottom-5 sm:left-5 sm:right-5 mt-3 sm:mt-0 bg-white border border-slate-200 rounded-xl p-4 shadow-md">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  The real concern
                </div>
                <p className="text-[13px] text-slate-600 italic leading-relaxed">
                  {active.anxiety}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
