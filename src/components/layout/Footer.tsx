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
      <div className="section-container lg:py-16 py-8">
        <div className="flex flex-col md:flex-row lg:justify-between justify-center lg:items-center lg:gap-20 gap-4 px-4 lg:px-0">
          {/* Logo and Description */}
          <div className="mb-2 lg:mb-12">
            <Logo />
            <p className="mt-4 lg:text-sm text-xs text-gray-600 lg:max-w-[60%] max-w-full">
              Your personal finance companion. Track, manage, and grow your
              wealth with smart insights and automated bookkeeping.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 lg:mr-16 mr-4">
            {/* Company Column */}
            <div>
              <h3 className="lg:text-base text-sm font-semibold text-gray-900 lg:mb-4 mb-2">
                {FOOTER_NAVIGATION.company.title}
              </h3>
              <ul className="lg:space-y-3 space-y-1">
                {FOOTER_NAVIGATION.company.items.map((item) => (
                  <li key={item.title}>
                    {item.isSection ? (
                      <button
                        onClick={() => handleSectionClick(item.href)}
                        className="lg:text-sm text-xs text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="lg:text-sm text-xs text-gray-600 hover:text-purple-600 transition-colors"
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
              <h3 className="lg:text-base text-sm font-semibold text-gray-900 lg:mb-4 mb-2">
                {FOOTER_NAVIGATION.support.title}
              </h3>
              <ul className="lg:space-y-3 space-y-1">
                {FOOTER_NAVIGATION.support.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-600 hover:text-purple-600 transition-colors"
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
        <div className="lg:mt-16 mt-4 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center lg:gap-4 gap-2">
            <div className="flex items-center lg:gap-4 gap-2">
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
            <p className="lg:text-sm text-xs text-gray-600">
              © {new Date().getFullYear()} • Acorn Ledger All rights reserved.
            </p>
            <div className="flex items-center lg:gap-6 gap-2">
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
