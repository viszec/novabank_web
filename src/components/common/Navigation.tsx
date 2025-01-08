"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id: string) => {
        const targetSection = document.getElementById(id);
        if (!targetSection) return;

        const headerHeight = 96; // 6rem = 96px
        const targetPosition = targetSection.offsetTop - headerHeight;

        // Smooth scroll to position
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const headerHeight = 96;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - headerHeight;
                const sectionBottom = sectionTop + section.clientHeight;

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="hidden md:flex items-center gap-8 pt-4">
            {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "features", label: "Features" },
                { id: "plans", label: "Plans" },
                { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`nav-item text-base font-semibold transition-colors ${activeSection === id
                            ? "text-purple-600"
                            : "text-gray-500 hover:text-purple-600"
                        }`}
                >
                    {label}
                </button>
            ))}
        </nav>
    );
}
