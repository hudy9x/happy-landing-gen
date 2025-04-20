
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        This is the new heading
        <Hero />
        <Partners />
      </main>
    </div>
  );
};

export default Index;
