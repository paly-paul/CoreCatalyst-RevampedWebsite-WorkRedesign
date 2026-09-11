"use client";

import { useEffect, useState } from "react";
import { sidebarLinks } from "../_data";

export default function SidebarNav() {
  const [active, setActive] = useState(sidebarLinks[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sidebarLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-[92px] hidden lg:block">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
        On this page
      </h3>
      <ul className="flex flex-col gap-0.5">
        {sidebarLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`block text-sm px-3 py-1.5 rounded-lg border-l-2 transition-all ${
                  isActive
                    ? "text-blue-600 border-blue-600 bg-indigo-50 font-semibold"
                    : "text-slate-400 border-transparent font-medium hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
