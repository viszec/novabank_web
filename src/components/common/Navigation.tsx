"use client";

import { useEffect, useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import type { AppRoute } from "@/types/navigation";

export default function Navigation({ className = "" }) {
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = async (id: string, href: AppRoute) => {
        if (pathname !== '/') {
            await router.push('/');
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        const targetSection = document.getElementById(id);
        if (!targetSection) return;

        const headerHeight = 96;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.history.replaceState({}, '', href);

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (pathname !== '/') return;

            const sections = NAVIGATION_ITEMS
                .filter(item => item.isSection)
                .map(item => document.getElementById(String(item.href).replace('/', '')))
                .filter(Boolean);

            const headerHeight = 96;
            const scrollPosition = window.scrollY + headerHeight + 100;

            for (const section of sections) {
                if (!section) continue;
                if (
                    section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition
                ) {
                    setActiveSection(section.id);
                    window.history.replaceState({}, '', `/${section.id}`);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <nav className={`hidden md:flex items-center gap-8 ${className}`}>
            {NAVIGATION_ITEMS.map(({ title, href, isSection }) => (
                isSection ? (
                    <button
                        key={href}
                        onClick={() => scrollToSection(String(href).replace('/', ''), href)}
                        className={`nav-item text-base font-semibold transition-colors ${
                            activeSection === String(href).replace('/', '')
                                ? "text-purple-600"
                                : "text-gray-500 hover:text-purple-600"
                        }`}
                    >
                        {title}
                    </button>
                ) : (
                    <Link
                        key={href}
                        href={href}
                        className="text-gray-500 hover:text-purple-600 transition-colors text-base font-semibold"
                    >
                        {title}
                    </Link>
                )
            ))}
        </nav>
    );
}
