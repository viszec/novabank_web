"use client";

import {
  Target,
  Shield,
  Rocket,
  LineChart,
  Layout,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import { useInView } from '@/hooks/useInView';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TechLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function About() {
  const [techStackRef, techStackInView] = useInView<HTMLDivElement>();
  const [whatIsRef, whatIsInView] = useInView<HTMLDivElement>();
  const [whyChooseRef, whyChooseInView] = useInView<HTMLDivElement>();
  const features: Feature[] = [
    {
      title: "Unified Banking Integration",
      description:
        "Connect and manage all your financial accounts in one centralized dashboard, with secure cross-bank synchronization.",
      icon: <Target className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Bank-Grade Security",
      description:
        "Your financial data is protected with industry-leading security protocols and encryption standards.",
      icon: <Shield className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Quick Setup",
      description:
        "Get started in minutes with our streamlined onboarding process and intuitive interface.",
      icon: <Rocket className="w-10 h-10 text-purple-600" />,
    },
  ];

  const benefits: Feature[] = [
    {
      title: "Seamless Experience",
      description:
        "Access all your financial information through an elegant, user-friendly dashboard.",
      icon: <Layout className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Smart Analytics",
      description:
        "Get intelligent insights into your spending patterns and financial health.",
      icon: <LineChart className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay current with automatic synchronization across all your connected accounts.",
      icon: <RefreshCw className="w-8 h-8 text-purple-600" />,
    },
  ];

  const techLogos: TechLogo[] = [
    {
      src: "/icons/nextjs.svg",
      alt: "Next.js",
      width: 48,
      height: 48,
      className: "w-16 h-16",
    },
    {
      src: "/icons/typescript.svg",
      alt: "Typescript",
      width: 48,
      height: 48,
      className: "w-16 h-16",
    },
    {
      src: "/icons/tailwindcss.svg",
      alt: "Tailwind",
      width: 48,
      height: 48,
      className: "w-16 h-16",
    },
    { src: "/icons/shadcn.svg", alt: "Shadcn UI", width: 200, height: 40 },
    { src: "/icons/vercel.svg", alt: "Vercel", width: 200, height: 40 },
    { src: "/icons/plaid.svg", alt: "Plaid", width: 120, height: 40 },
    { src: "/icons/appwrite.svg", alt: "Appwrite", width: 200, height: 40 },
  ];

  return (
    <section id="about" className="section-wrapper pt-32 pb-4 relative">
      {/* Background Grid Pattern - Right Half */}
      <div
        className="absolute right-0 w-1/3 h-1/5 inset-y-0 bg-[radial-gradient(#e4d5ff_2px,transparent_2px)] bg-[size:30px_30px]"
        style={{
          maskImage: "linear-gradient(to left, white, transparent)",
          WebkitMaskImage: "linear-gradient(to left, white, transparent)",
        }}
      />

      <div className="section-container pb-24">
        {/* Tech Stack Section */}
        <div 
          ref={techStackRef}
          className={`text-center mb-20 opacity-0 ${
            techStackInView ? 'animate-slide-up' : ''
          }`}
        >
          <p className="mb-8 text-4xl font-bold">
            <span className="font-garamond italic font-bold text-4xl text-purple-600">Acorn Ledger </span>
            <span className="text-gray-700 text-3xl">
              {" "}
              is built on the shoulders of giants
            </span>
          </p>
          <div className="logo-scroll-container">
            <div className="logo-scroll">
              {[...techLogos, ...techLogos].map((logo, index) => (
                <Image 
                  key={`${logo.alt}-${index}`} 
                  {...logo} 
                  alt={logo.alt}
                  width={Math.floor(logo.width * 0.8)}
                  height={Math.floor(logo.height * 0.8)}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* What is Acorn Section */}
        <div className="section-container">
          <div 
            ref={whatIsRef}
            className="grid md:grid-cols-2 gap-24 items-center pt-10 pb-32"
          >
            <div className={`card-gradient rounded-2xl w-[580px] h-[400px] opacity-0 ${
              whatIsInView ? 'animate-slide-in' : ''
            }`}>
              <Image
                src="/images/whatIsAcorn.png"
                alt="Acorn Robot"
                className="w-full h-full object-cover rounded-2xl"
                width={580}
                height={400}
                loading="lazy"
              />
            </div>
            <div className={`space-y-6 opacity-0 ${
              whatIsInView ? 'animate-slide-in animation-delay-200' : ''
            }`}>
              <h2 className="text-2xl font-bold">
                Redefining Personal Finance Management
              </h2>
              <p className="text-gray-600 text-base">
                Acorn Ledger is a Next.js-powered financial management platform
                that simplifies your banking experience. Built with modern
                financial integration capabilities and enterprise-grade
                security.
              </p>
              <div className="space-y-4 border py-3 px-6 rounded-2xl bg-gray-50 border-white">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Acorn Section */}
          <div 
            ref={whyChooseRef}
            className="grid md:grid-cols-2 gap-12 items-center pb-28"
          >
            <div className={`space-y-6 opacity-0 ${
              whyChooseInView ? 'animate-slide-in' : ''
            }`}>
              <div className="inline-block px-6 py-1 bg-white rounded-full border border-purple-600">
                <span className="text-sm text-purple-600 font-semibold">
                  Benefits
                </span>
              </div>
              <h2 className="text-2xl font-bold">
                Experience Financial Freedom Like Never Before
              </h2>
              <p className="text-gray-600 text-base">
                Experience modern financial management with a platform designed
                for simplicity and efficiency.
              </p>
              <div className="space-y-4 border py-3 px-6 rounded-2xl bg-gray-50 border-white">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    {benefit.icon}
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`card-gradient mt-14 rounded-2xl w-[560px] h-[400px] opacity-0 ${
              whyChooseInView ? 'animate-slide-in animation-delay-200' : ''
            }`}>
              <Image
                src="/images/whyChooseAcorn.jpg"
                alt="Acorn City"
                className="item-w-full h-full object-cover rounded-2xl"
                width={580}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
