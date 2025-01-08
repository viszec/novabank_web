'use client';

import Link from 'next/link';
import Logo from '../common/Logo';
import Navigation from '../common/Navigation';
import { Button } from '../ui/button';
import { User } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 pt-6 pb-4 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href="https://novabank.vercel.app/sign-in" 
                  className="text-gray-500 hover:text-purple-600 transition-colors"
                >
                  <User className="w-6 h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="border-0 bg-transparent p-0 shadow-none">
                <p className="text-sm font-medium text-purple-600">Sign In</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Link href="https://novabank.vercel.app/sign-up">
            <Button 
              variant="ghost"
              className="text-base font-medium rounded-full bg-purple-600 text-white h-12 px-6 border border-purple-600 hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}