import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">Get in Touch</h1>
          <p className="body-lg text-slate-600">
            We typically respond within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact channels */}
            <div>
              <h2 className="display-sm text-slate-900 mb-8">Contact Channels</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Sales Enquiry",
                    email: "sales@workredesign.org",
                  },
                  {
                    title: "Support",
                    email: "support@workredesign.org",
                  },
                  {
                    title: "Partnerships",
                    email: "partnerships@workredesign.org",
                  },
                  {
                    title: "Press",
                    email: "press@workredesign.org",
                  },
                ].map((channel) => (
                  <div key={channel.title}>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {channel.title}
                    </h3>
                    <Link
                      href={`mailto:${channel.email}`}
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      {channel.email}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h2 className="display-sm text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
