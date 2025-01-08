import Link from "next/link";
import Logo from "../common/Logo";

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: "About", href: "/#about" },
      { label: "Features", href: "/#features" },
      { label: "Plans", href: "/#plans" },
    ],
    Support: [
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/#help-center" },
    ],
  };

  const socialLinks = [
    { name: "X", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Email", href: "#" },
  ];

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
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-purple-600 hover:text-purple-400 transition-colors text-sm font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-base text-gray-600">
              © {new Date().getFullYear()} • Acorn Ledger All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
