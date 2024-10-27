import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center space-x-4 bg-gradient-to-l from-black to-slate-200 p-2 sm:p-4 border-4 md:border-8 border-black border-double">
      <Image
        src="/images/logo99.jpg"
        alt="Logo"
        width={64}
        height={64}
        className="rounded-full w-9 h-9 sm:w-12 sm:h-12 md:h-16 md:w-16"
      />
      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
        <h1
          className="font-bold font-serif text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl italic hover:not-italic"
          data-aos="fade-left"
          data-aos-easing="ease-in"
        >
          Shadcn UI
        </h1>
      </div>
    </div>
  );
};

export default Header;
