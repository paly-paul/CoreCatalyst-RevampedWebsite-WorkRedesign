"use client";

import { Lock, Clock, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      data-testid="section-booking"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Text and guarantees */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                Book your call
              </span>
            </div>
            <h2 className="display-md text-slate-900 mb-6">
              Ready to start the conversation?
            </h2>
            <p className="text-slate-600 mb-4">
              Fill in the short form and a WorkRedesign founder will be in touch within one business day to confirm a time. We will read what you have written before the call, so we are not starting from scratch when we meet.
            </p>
            <p className="text-slate-600 mb-8">
              If you would rather not fill in a form, you can also reach us directly at <strong>hello@workredesign.org</strong>
            </p>

            {/* Guarantees */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Lock className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">No automated follow-up</p>
                  <p className="text-sm text-slate-600">Your details are not added to a marketing sequence. You will hear from a human.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">30 minutes, no longer</p>
                  <p className="text-sm text-slate-600">We respect your calendar. The call ends when the time is up unless you want to continue.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">No commitment required</p>
                  <p className="text-sm text-slate-600">The Discovery Call is completely free and carries no obligation on either side.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Book a Discovery Call
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              We will confirm a time within one business day.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium">
                  Request sent! We will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Sarah"
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Chen"
                      required
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@yourcompany.com"
                    required
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    required
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Your role
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select your role</option>
                    <option>CHRO / Chief People Officer</option>
                    <option>VP / Head of HR</option>
                    <option>HR Director</option>
                    <option>Head of HR Operations</option>
                    <option>People Analytics Lead</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Workforce size
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select workforce size</option>
                    <option>200-500 employees</option>
                    <option>500-1,500 employees</option>
                    <option>1,500-5,000 employees</option>
                    <option>5,000-20,000 employees</option>
                    <option>20,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    What are you trying to solve? (optional)
                  </label>
                  <textarea
                    placeholder="A short description helps us prepare for the call."
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Request a Discovery Call
                </button>

                <p className="text-xs text-slate-500">
                  By submitting this form you agree to us contacting you about your enquiry. We do not share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
