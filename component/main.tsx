// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const MainComponent = () => {
//   return (
//     <div className="w-full min-h-full flex flex-col items-center justify-center bg-sky-200 font-sans">
//       {/* Card 1 */}
//       <Image
//         src="/assets/images/home3.png"
//         alt="Ilustrasi kantin"
//         width={500}
//         height={300}
//         className="rounded-md object-contain mx-auto"
//       />
//       {/* Card 2 */}
//       <div className="max-w-3xl w-full p-4">
//         {/* Title */}
//         <h1 className="text-5xl md:text-3xl font-bold text-gray-900 mb-2">
//           #Serunya
//         </h1>
//         <h1 className="text-5xl md:text-3xl font-bold text-gray-900 mb-2">
//           Belajar
//         </h1>
//         {/* Subtitle */}
//         <p className="text-gray-700 mb-4 italic">
//           Belajar matematika itu seru, apalagi kalau bisa langsung dipraktikkan
//           di kehidupan sehari-hari!
//         </p>
//         {/* Button */}
//         <div className="flex justify-center">
//           <Link
//             href={"/menu"}
//             className="
//       bg-[#3852b2] 
//       text-white 
//       px-6 py-3 
//       rounded-lg 
//       font-semibold 
//       shadow-[2px_4px_0_#f3be79]
//       hover:translate-y-0.5
//       hover:shadow-[1px_2px_0_#f3be79]
//       transition-all duration-200
//     "
//           >
//             Mulai Belajar
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainComponent;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center font-sans overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/images/home/home1.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gelap + blur biar teks kebaca */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full px-6 py-10 text-center">

        {/* Glass Card */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">

          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            #Serunya
          </h1>

          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow mb-4">
            Belajar
          </h1>

          <p className="text-white/90 italic mb-6 text-sm md:text-base leading-relaxed">
            Belajar matematika itu seru, apalagi kalau bisa langsung dipraktikkan
            di kehidupan sehari-hari!
          </p>

          <Link
            href="/menu"
            className="inline-block bg-[#3852b2] text-white px-6 py-3 rounded-xl font-semibold shadow-[0_6px_0_#f3be79] hover:translate-y-1 hover:shadow-[0_3px_0_#f3be79] transition-all duration-200"
          >
            Mulai Belajar
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MainComponent;