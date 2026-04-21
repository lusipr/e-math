import Image from "next/image";
import React from "react";

const MainComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      {/* Card 1 */}
      <Image
        src="/assets/images/home3.png"
        alt="Ilustrasi kantin"
        width={500}
        height={300}
        className="rounded-md object-contain mx-auto"
      />
      {/* Card 2 */}
      <div className="max-w-3xl w-full p-4">
        {/* Title */}
        <h1 className="text-5xl md:text-3xl font-bold text-gray-900 mb-2">
          #Serunya
        </h1>
        <h1 className="text-5xl md:text-3xl font-bold text-gray-900 mb-2">
          Belajar
        </h1>
        {/* Subtitle */}
        <p className="text-gray-700 mb-4 italic">
          Belajar matematika itu seru, apalagi kalau bisa langsung dipraktikkan
          di kehidupan sehari-hari!
        </p>
        {/* Button */}
        <div className="flex justify-center">
          <button
            className="
      bg-[#3852b2] 
      text-white 
      px-6 py-3 
      rounded-lg 
      font-semibold 
      shadow-[2px_4px_0_#f3be79]
      hover:translate-y-0.5
      hover:shadow-[1px_2px_0_#f3be79]
      transition-all duration-200
    "
          >
            Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
