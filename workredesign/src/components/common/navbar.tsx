"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isSolutionActive = pathname.startsWith("/solutions");

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300",
          "flex items-center px-6 sm:px-8",
          scrolled
            ? "bg-white/94 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 mr-8 font-display font-extrabold text-lg">
            <span className="text-slate-900">work</span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              redesign
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 flex-1">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              Platform
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isSolutionActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                Solutions
              </button>
              <div className="invisible group-hover:visible absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg border border-slate-200 py-2 z-50">
                <Link
                  href="/solutions/chro"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  For CHROs
                </Link>
                <Link
                  href="/solutions/hr-ops"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  For HR Operations
                </Link>
                <Link
                  href="/solutions/managers"
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  For Line Managers
                </Link>
              </div>
            </div>

            <Link
              href="/how-it-works"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/how-it-works")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              How It Works
            </Link>

            <Link
              href="/pricing"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/pricing")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              Pricing
            </Link>

            <Link
              href="/security"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive("/security")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              Security
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex ml-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[10px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm transition-colors min-h-[44px]"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 ml-auto min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-72 bg-white shadow-xl z-40 transition-transform duration-300 md:hidden",
          "flex flex-col pt-[calc(68px+24px)] px-6 pb-6 overflow-y-auto",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Link
          href="/"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Platform
        </Link>

        <div className="py-2 border-b border-slate-200">
          <p className="px-4 py-2 text-sm font-semibold text-slate-600">
            Solutions
          </p>
          <Link
            href="/solutions/chro"
            className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg ml-2"
            onClick={() => setMenuOpen(false)}
          >
            For CHROs
          </Link>
          <Link
            href="/solutions/hr-ops"
            className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg ml-2"
            onClick={() => setMenuOpen(false)}
          >
            For HR Operations
          </Link>
          <Link
            href="/solutions/managers"
            className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg ml-2"
            onClick={() => setMenuOpen(false)}
          >
            For Line Managers
          </Link>
        </div>

        <Link
          href="/how-it-works"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          How It Works
        </Link>

        <Link
          href="/pricing"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>

        <Link
          href="/security"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Security
        </Link>

        <Link
          href="/blog"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </Link>

        <Link
          href="/about"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <Link
          href="/careers"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Careers
        </Link>

        <Link
          href="/contact"
          className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 rounded-lg border-b border-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <div className="mt-auto pt-6">
          <Link
            href="/"
            className="block w-full text-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-[10px] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </>
  );
}
