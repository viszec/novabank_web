"use client";

import Link from "next/link";
import Logo from "../common/Logo";
import { FOOTER_NAVIGATION } from "@/constants/navigation";
import { useRouter, usePathname } from "next/navigation";
import type { AppRoute } from "@/types/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = async (href: AppRoute) => {
    const sectionId = String(href).replace('/', '');
    
    // 如果不在首页，先导航到首页
    if (pathname !== '/') {
      await router.push('/');
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const headerHeight = 96;
    const targetPosition = targetSection.offsetTop - headerHeight;

    window.history.replaceState({}, '', href);
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="section-wrapper">
      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          {/* Logo and Description */}
          <div className="mb-12">
            <Logo />
            <p className="mt-4 text-base text-gray-600 max-w-[80%]">
              Your personal finance companion. Track, manage, and grow your
              wealth with smart insights and automated bookkeeping.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 mr-4">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {FOOTER_NAVIGATION.company.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.company.items.map((item) => (
                  <li key={item.title}>
                    <button
                      onClick={() => handleSectionClick(item.href)}
                      className="text-base text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {FOOTER_NAVIGATION.support.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.support.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {FOOTER_NAVIGATION.social.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-purple-600 hover:text-purple-400 transition-colors text-sm font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <p className="text-base text-gray-600">
              © {new Date().getFullYear()} • Acorn Ledger All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_NAVIGATION.legal.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
