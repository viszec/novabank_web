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
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

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
    <div id="features" className="pt-32 pb-20 grid-pattern-subtle">
      <motion.div 
        className="featured-section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <motion.div 
            className="flex justify-between items-center mb-16"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4 -ml-16">
              <h2 className="text-4xl font-bold mt-10">
                Key Features of Acorn Ledger
              </h2>
              <p className="text-lg text-gray-600 w-[70%]">
                Acorn Ledger is a comprehensive financial management tool that
                helps you track, analyze, and manage your finances effortlessly.
              </p>
            </div>
            <div className="flex gap-2 mt-20 mr-44">
              <CarouselPrevious className="relative border-none text-purple-600 font-bold left-0 translate-x-0" />
              <CarouselNext className="relative border-none text-purple-600 font-bold right-0 translate-x-0" />
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="flex justify-center">
              <CarouselContent className="-ml-1">
                {features.map((feature, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 md:basis-1/3 lg:basis-1/4 h-[420px] mt-4"
                  >
                    <motion.div 
                      className="card-hover-wrapper h-[300px] pt-6 px-2"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Card className="card-frame absolute inset-0 border border-purple-200" />

                      <CardContent className="card-content-inner relative z-10 h-full flex flex-col justify-center items-start">
                        <div className="flex flex-col items-start gap-3 mb-3">
                          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mt-4 mb-4">
                            <feature.icon className="w-7 h-7 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-semibold leading-tight">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}
