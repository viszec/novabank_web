"use client";

import { Button } from "./ui/button";
import Image from 'next/image'
import { DotMatrix } from "./ui/dot-matrix";

export default function Hero() {
  return (
    <div id="home" className="section-wrapper bg-beige mt-24">
      <div className="absolute inset-0 overflow-hidden">
        <DotMatrix 
          className="absolute left-0 w-2/5 h-full pointer-events-none" 
          dotColor="#e4d5ff"
          dotSize={2.5}
          gridSize={35}
          highlightColor="#9333ea"
          maxHighlightDots={10}
        />
      </div>
      <div className="section-container relative">
        {/* Header space placeholder */}
        <section className="relative pt-36 pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Year Badge */}
              <div className="flex justify-center gap-2 mb-8 max-w-fit mx-auto border border-purple-400 rounded-full px-4 py-2 animate-slide-up opacity-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
                  2025
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600">
                  🎉 Happy New Year
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl font-bold mb-8 leading-tight tracking-normal animate-slide-up opacity-0 animation-delay-100">
                Acorn Ledger
                <br />
                <span className="leading-tight">
                  Smart Finance, Simplified in One Place
                </span>
              </h1>

              {/* Subtitle */}
              <div className="mb-8 text-gray-500 animate-slide-up opacity-0 animation-delay-200">
                <p className="text-lg">
                  Acorn Ledger is a Next.js boilerplate for modern financial
                  management.
                </p>
                <p className="text-lg">
                  Access all your accounts in one elegant dashboard, with
                  seamless cross-bank integration and bank-grade security.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up opacity-0 animation-delay-300">
                <Button className="inline-flex items-center gap-2 px-8 py-6 border rounded-full bg-purple-600 text-white text-base font-semibold shadow-none hover:border-purple-400 hover:border-1 hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Get Started
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button className="inline-flex items-center gap-2 px-8 py-6 font-semibold font-mono bg-white text-gray-700 rounded-full border shadow-none border-gray-200 hover:border-purple-600 hover:bg-white transition-all duration-300">
                  Schedule a Demo
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>

              {/* Promotion Badge */}
              <div className="flex justify-center mb-12 animate-fade-scale opacity-0 animation-delay-400">
                <span className="inline-flex items-center gap-2 text-base font-semibold text-purple-500">
                  🎁 50% off before 2025
                </span>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col items-center gap-2 animate-fade-scale opacity-0 animation-delay-400">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {["Adrian", "Avery", "Leo", "Brooklynn", "Aidan"].map((name) => (
                      <Image
                        key={name}
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${name}`}
                        alt={`${name}'s avatar`}
                        width={32}
                        height={32}
                        className="w-14 h-14 rounded-full bg-purple-50 border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="flex-col items-center gap-2 ml-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-[27px]">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-semibold">
                      from 99+ happy users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
