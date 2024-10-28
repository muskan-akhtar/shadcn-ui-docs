import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full max-w-[1000px] h-auto mx-auto">
      <Image
        src="/images/bgshad2.jpg"
        alt="Description of Shadcn-UI"
        width={1000} 
        height={600} 
        className="w-full h-full rounded-lg object-cover border-4 md:border-8 border-black border-double"
      />
      <div className="absolute top-4 right-3 md:right-10 flex flex-col items-center justify-center">
        <p className="text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-1 py-1 md:px-4 md:py-2 rounded-lg hover:bg-opacity-0">
          Shadcn UI adoption guide:
        </p>
        <p className="text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif bg-black bg-opacity-50 px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-opacity-0">
          Overview, examples,
        </p>
        <p className="text-white sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-50 px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-opacity-0">
          and alternatives.
        </p>
      </div>
    </div>
  );
}

export default Hero;
