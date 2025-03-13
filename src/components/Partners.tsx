
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Equifax_Logo.svg" 
          alt="Equifax" 
          className="h-9 opacity-70"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Experian.svg/1280px-Experian.svg.png" 
          alt="Experian" 
          className="h-9 opacity-70"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/TransUnion_Logo.svg/1280px-TransUnion_Logo.svg.png" 
          alt="TransUnion" 
          className="h-10 opacity-70"
        />
      </div>
      
      <div className="mt-10 mx-auto max-w-lg">
        <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center">
          <div className="bg-white rounded-full p-2 mr-4">
            <ArrowUpRight className="text-green-500" size={18} />
          </div>
          <p className="text-gray-700">Boost your credit score by at least +132 points!</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
