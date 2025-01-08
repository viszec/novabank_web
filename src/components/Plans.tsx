"use client";

import React, { useState } from 'react';
// import Image from 'next/image';
import { Button } from './ui/button';

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
    <section id="plans" className="section-wrapper pt-28 pb-36 bg-gray-50">
      <div className="section-container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Plans</h2>
          <p className="text-xl text-gray-600 ">Get all features of Acorn Ledger, Start your financial management journey.</p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-200 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-lg ${!isAnnual ? 'bg-white shadow' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${isAnnual ? 'bg-white shadow' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
              <span className="text-xs px-2 py-1 bg-gray-50 text-purple-600 rounded">Popular</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${plan.isPopular ? 'border-2 border-purple-500 ring-1 ring-purple-500' : 'border border-gray-200'
                }`}
            >
              {plan.isPopular && (
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full mb-4">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600">USD</span>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-4 text-purple-800">
                  {plan.name === "Standard" ? "Everything in Starter, plus:" :
                    plan.name === "Premium" ? "Everything in Standard, plus:" : ""}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className={`w-full py-6 text-base font-semibold rounded-full mb-6 ${plan.isPopular
                  ? 'bg-purple-500 text-white border-2 border-purple-500 hover:bg-white hover:text-purple-500 transition-all duration-300'
                  : 'border-2 bg-white text-purple-500 border-purple-400 hover:border-purple-800 hover:text-purple-500 hover:bg-white transition-all duration-300'
                } transition-all duration-300`}>
                Get Plan
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 