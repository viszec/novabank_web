"use client";

import { useEffect, useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation({ className = "" }) {
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = async (id: string) => {
        // if not on home page, navigate to home page
        if (pathname !== '/') {
            await router.push('/');
            // wait for page to load
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    
        // 获取目标 section
        const sectionId = id.replace('/#', '');
        const targetSection = document.getElementById(sectionId);
        
        // 重试机制：确保 section 元素已加载
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
                        // 更新 URL
                        const cleanUrl = id === '/#home' ? '/' : id.replace('/#', '/');
                        window.history.pushState({}, '', cleanUrl);
                    }
                }
                retryCount++;
            }, 100);
            
            return;
        }
    
        // if section exists, scroll to it
        const headerHeight = 96;
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    
        // 更新 URL
        const cleanUrl = id === '/#home' ? '/' : id.replace('/#', '/');
        window.history.pushState({}, '', cleanUrl);
    };

    useEffect(() => {
        if (pathname !== '/') return;

        const handleScroll = () => {
            const sections = NAVIGATION_ITEMS
                .filter(item => item.isSection)
                .map(item => ({
                    id: String(item.href).replace('/#', ''),
                    element: document.getElementById(String(item.href).replace('/#', ''))
                }))
                .filter(({element}) => element);

            const headerHeight = 96;
            const scrollPosition = window.scrollY + headerHeight + 100;

            let currentSection = '';
            for (const {id, element} of sections) {
                if (!element) continue;
                if (
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
                    currentSection = id;
                    break;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial check the current section
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <nav className={`hidden md:flex items-center gap-8 ${className}`}>
            {NAVIGATION_ITEMS.map(({ title, href, isSection }) => (
                isSection ? (
                    <button
                        key={href}
                        onClick={() => scrollToSection(String(href))}
                        className={`nav-item text-base transition-colors ${
                            activeSection === String(href).replace('/#', '')
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
                        className="text-gray-500 hover:text-purple-600 transition-colors text-base"
                    >
                        {title}
                    </Link>
                )
            ))}
        </nav>
    );
}
