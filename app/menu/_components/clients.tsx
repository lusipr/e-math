// 
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const topMenu = [
  { img: "/assets/images/cptp.png", path: "/materi/tp-cp" },
  { img: "/assets/images/pengantar.png", path: "/materi/pengantar-spldv" },
];

const bottomMenu = [
  { img: "/assets/images/metode-grafik.png", path: "/materi/metode-grafik" },
  { img: "/assets/images/substitusi.png", path: "/materi/metode-subtitusi" },
  { img: "/assets/images/eliminasi.png", path: "/materi/metode-eliminasi" },
  { img: "/assets/images/campuran.png", path: "/materi/metode-campuran" },
  { img: "/assets/images/latihan-soal.png", path: "/latihan-soal" },
  { img: "/assets/images/profile.png", path: "/profile" },
];

export default function Client() {
  const router = useRouter();

  return (
    <div
      className="
        min-h-screen w-full relative
        flex items-center justify-center
        font-sans
      "
      style={{
        backgroundImage: "url('/assets/images/latihan-soal/latsoal1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* glow effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl px-6">

        {/* HEADER BUTTON */}
        <div className="flex justify-center mb-8">
          <button
            className="
              bg-[#93a5e6]
              text-white font-bold
              rounded-xl
              px-6 py-3
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              shadow-lg
              hover:scale-105 transition
            "
          >
            Menu Utama
          </button>
        </div>

        {/* GLASS CONTAINER */}
        <div className=" rounded-2xl p-6 sm:p-8 lg:p-10">

          <div className="max-w-6xl mx-auto space-y-10">

            {/* TOP MENU */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-[85%] sm:w-[70%] lg:w-[50%]">
                {topMenu.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(item.path)}
                    className="
                      cursor-pointer
                      transition-transform duration-200
                      hover:scale-105 active:scale-95
                    "
                  >
                    <Image
                      src={item.img}
                      alt="menu"
                      width={220}
                      height={160}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM MENU */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-4">
              {bottomMenu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => router.push(item.path)}
                  className="
                    cursor-pointer
                    transition-transform duration-200
                    hover:scale-105 active:scale-95
                    lg:w-[16%]
                  "
                >
                  <Image
                    src={item.img}
                    alt="menu"
                    width={200}
                    height={140}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}