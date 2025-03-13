
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1 mb-6">
          <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <span className="text-sm font-medium">Powered by GPT-4o</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Increase your credit score <br/> automatically using AI
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The fastest way to improve your credit score and capacity.
          <br />
          Powered by patented AI automation and machine learning.
          <br />
          Guaranteed growth or your money back.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700">100% Guaranteed Growth</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700">No credit card required</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700">24/7 Live Human Support</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-md flex items-center">
            Get started for Free
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="outline" className="px-6 py-6 rounded-md">
            Live Demo
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
