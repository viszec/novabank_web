"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import {
  LandmarkIcon,
  ShieldCheck,
  AreaChart,
  CreditCard,
  MonitorSpeaker,
  Loader,
} from "lucide-react";

type IconType =
  | typeof LandmarkIcon
  | typeof ShieldCheck
  | typeof AreaChart
  | typeof CreditCard
  | typeof MonitorSpeaker
  | typeof Loader;

interface FeatureCard {
  title: string;
  description: string;
  icon: IconType;
}

export default function Featured() {
  const features: FeatureCard[] = [
    {
      title: "Multi-Bank Integration",
      description:
        "Connect and manage multiple bank accounts in one secure platform with real-time synchronization. Monitor and track all your transactions across different institutions.",
      icon: LandmarkIcon,
    },
    {
      title: "Advanced Security",
      description:
        "Your financial data is protected with bank-grade encryption and continuous advanced monitoring. Our intelligent system detects and prevents fraud attempts 24/7.",
      icon: ShieldCheck,
    },
    {
      title: "Smart Analytics",
      description:
        "Track and analyze your spending patterns with intelligent visualization tools and comprehensive reports. Get personalized insights to make smarter financial decisions.",
      icon: AreaChart,
    },
    {
      title: "Transaction Management",
      description:
        "Smart algorithms automatically categorize and organize your transactions with custom tags and notes. Find any payment instantly with powerful search filters.",
      icon: CreditCard,
    },
    {
      title: "Cross-Device Access",
      description:
        "Access your financial dashboard seamlessly from any device, anytime and anywhere. Real-time sync ensures your data stays updated across all platforms.",
      icon: MonitorSpeaker,
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay informed with instant notifications about all your financial transactions and account changes. Set custom alerts for important banking activities.",
      icon: Loader,
    },
  ];

  return (
    <div id="features" className="pt-28 pb-24 grid-pattern-subtle">
      <div className="featured-section-container">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-16">
            <div className="flex flex-col gap-4 -ml-16">
              <h2 className="text-4xl font-bold">
                Key Features of Acorn Ledger
              </h2>
              <p className="text-xl text-gray-600 w-[70%]">
                Acorn Ledger is a comprehensive financial management tool that
                helps you track, analyze, and manage your finances effortlessly.
              </p>
            </div>
            <div className="flex gap-2 mt-20 mr-44">
              <CarouselPrevious className="relative border-none text-purple-600 font-bold left-0 translate-x-0" />
              <CarouselNext className="relative border-none text-purple-600 font-bold right-0 translate-x-0" />
            </div>
          </div>

          <div className="relative w-full">
            <div className="flex justify-center">
              <CarouselContent className="-ml-1">
                {features.map((feature, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 md:basis-1/3 lg:basis-1/4 h-[420px] mt-4"
                  >
                    <div className="card-hover-wrapper h-[360px] pt-6 px-4">
                      <Card className="card-frame absolute inset-0 border border-purple-200" />

                      <CardContent className="card-content-inner relative z-10 h-full flex flex-col justify-center items-start">
                        <div className="flex flex-col items-start gap-3 mb-4">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mt-4 mb-4">
                            <feature.icon className="w-7 h-7 text-purple-600" />
                          </div>
                          <h3 className="text-2xl font-semibold leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
