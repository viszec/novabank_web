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
    // if not on home page, navigate to home page
    if (pathname !== '/') {
      await router.push('/');
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const sectionId = String(href).replace('/#', '');
    const targetSection = document.getElementById(sectionId);
    
    // retry mechanism: ensure section element is loaded
    if (!targetSection) {
      const maxRetries = 5;
      let retryCount = 0;
      
      const findSection = setInterval(() => {
        const section = document.getElementById(sectionId);
        if (section || retryCount >= maxRetries) {
          clearInterval(findSection);
          if (section) {
            const headerHeight = 96;
            const targetPosition = section.offsetTop - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            // update URL, remove #
            const cleanUrl = href === '/#home' ? '/' : (href as string).replace('/#', '/');
            window.history.pushState({}, '', cleanUrl);
          }
        }
        retryCount++;
      }, 100);
      return;
    }

    const headerHeight = 96;
    const targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // update URL, remove #
    const cleanUrl = href === '/#home' ? '/' : (href as string).replace('/#', '/');
    window.history.pushState({}, '', cleanUrl);
  };

  return (
    <footer className="section-wrapper">
      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          {/* Logo and Description */}
          <div className="mb-12">
            <Logo />
            <p className="mt-4 text-sm text-gray-600 max-w-[60%]">
              Your personal finance companion. Track, manage, and grow your
              wealth with smart insights and automated bookkeeping.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 mr-16">
            {/* Company Column */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {FOOTER_NAVIGATION.company.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.company.items.map((item) => (
                  <li key={item.title}>
                    {item.isSection ? (
                      <button
                        onClick={() => handleSectionClick(item.href)}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {FOOTER_NAVIGATION.support.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.support.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
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
                  className="text-purple-700 hover:text-purple-400 transition-colors text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} • Acorn Ledger All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_NAVIGATION.legal.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-xs text-gray-600 hover:text-purple-600 transition-colors"
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
