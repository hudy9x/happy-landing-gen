
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/product" className="text-gray-700 hover:text-gray-900 transition-colors">
            Product
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link to="/reviews" className="text-gray-700 hover:text-gray-900 transition-colors">
            Reviews
          </Link>
          <Link to="/labs" className="text-gray-700 hover:text-gray-900 transition-colors">
            Credit Labs
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-gray-900 transition-colors">
            Login
          </Link>
          <Button className="bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 rounded-full px-5">
            Start for free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
