import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-extrabold text-lg mb-4">
              <span className="text-slate-900">Work</span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                Redesign
              </span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Skills intelligence that is human-engineered, not just
              AI-generated - trustworthy enough to act on at board level.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
              Platform
            </h4>
            <div className="space-y-3">
              <Link
                href="/how-it-works"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/solutions/chro"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/security"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Security
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
              Company
            </h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/engage"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                How We Engage
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
              Resources
            </h4>
            <div className="space-y-3">
              <Link
                href="/blog"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/security"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Security & Compliance
              </Link>
              <Link
                href="/engage"
                className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-slate-600">
          <p>© 2026 WorkRedesign. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-slate-900 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
