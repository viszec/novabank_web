"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 10,
      annualPrice: 118,
      features: [
        "Basic Income & Expense Tracking",
        "Up to 100 Monthly Transactions",
        "Basic Financial Reports",
        "Single Currency Support",
        "Mobile App Access",
        "Email Support"
      ]
    },
    {
      name: "Standard",
      monthlyPrice: 28,
      annualPrice: 298,
      isPopular: true,
      features: [
        "Unlimited Monthly Transactions",
        "Multi-Currency Support",
        "Custom Financial Categories",
        "Advanced Financial Analytics",
        "Budget Planning Tools",
        "Priority Email Support"
      ]
    },
    {
      name: "Premium",
      monthlyPrice: 60,
      annualPrice: 598,
      features: [
        "AI-Powered Financial Insights",
        "Custom Financial Reports",
        "Unlimited Monthly Transactions",
        "Team Collaboration Features",
        "API Access for Integration",
        "24/7 Priority Support"
      ]
    }
  ];

  return (
    <section id="plans" className="section-wrapper lg:pt-28 pt-16 lg:pb-36 pb-16 bg-gray-50">
      <motion.div 
        className="section-container max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <h2 className="lg:text-4xl text-2xl font-bold mb-4">Finding Our Plans and Pricing</h2>
          <p className="lg:text-lg text-sm text-gray-600 ">Get all features of Acorn Ledger, Start your financial management journey.</p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-200 rounded-lg p-1">
            <button
              className={`px-4 lg:py-2 py-1 lg:text-sm text-xs rounded-lg ${!isAnnual ? 'bg-white shadow' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 lg:py-2 py-1 lg:text-sm text-xs rounded-lg flex items-center gap-2 ${isAnnual ? 'bg-white shadow' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
              <span className="lg:text-xs text-xxs px-2 py-1 bg-gray-50 text-purple-600 rounded">Popular</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:max-w-5xl mx-auto px-6"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl p-8 ${plan.isPopular ? 'border-2 border-purple-400 ring-1 ring-purple-400' : 'border border-gray-200'}`}
            >
              {plan.isPopular && (
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full mb-4">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 text-sm">USD</span>
              </div>

              <div className="mb-6">
                <p className="lg:font-medium font-normal text-sm mb-4 text-purple-800">
                  {plan.name === "Standard" ? "Everything in Starter, plus:" :
                    plan.name === "Premium" ? "Everything in Standard, plus:" : ""}
                </p>
                <ul className="lg:space-y-2 space-y-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-purple-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 lg:text-sm text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-[80%] mx-auto flex items-center justify-center lg:py-5 py-3 text-sm font-semibold gap-2 rounded-full lg:mb-6 mb-2 ${
                  plan.isPopular
                    ? 'bg-purple-500 text-white border-2 border-purple-500 hover:bg-white hover:text-purple-500 transition-all duration-300'
                    : 'border-2 bg-white text-purple-500 border-purple-400 hover:border-purple-800 hover:text-purple-500 hover:bg-white transition-all duration-300'
                } transition-all duration-300`}
              >
                <span className="text-center">Get Plan</span>
              </Button>

              {/* TODO: Add a button to switch to the annual plan */}

              {/* Payment Methods */}
              {/* <div className="mt-4">
                <div className="flex justify-center items-center gap-3">
                  <Image
                    src="/icons/google-pay.svg"
                    alt="Google Pay"
                    className="w-16"
                    width={164}
                    height={34}
                  />
                  <Image
                    src="/icons/paypal.svg"
                    alt="PayPal"
                    className="w-22"
                    width={124}
                    height={34}
                  />
                </div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 