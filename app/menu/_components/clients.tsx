"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const topMenu = [
  { img: "/assets/images/cptp.png", path: "/cp-tp" },
  { img: "/assets/images/pengantar.png", path: "/pengantar" },
];

const bottomMenu = [
  { img: "/assets/images/metode-grafik.png", path: "/grafik" },
  { img: "/assets/images/substitusi.png", path: "/substitusi" },
  { img: "/assets/images/eliminasi.png", path: "/eliminasi" },
  { img: "/assets/images/campuran.png", path: "/campuran" },
  { img: "/assets/images/latihan-soal.png", path: "/latihan" },
  { img: "/assets/images/profile.png", path: "/profil" },
];

export default function Client() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center mt-8">
        <button
          className="
      bg-[#93a5e6] 
      text-white 
      px-6 py-3 
      rounded-lg 
      font-semibold 
    "
        >
          Menu Utama
        </button>
      </div>
      <div className="min-h-screen bg-white p-6 mt-8">
        {/* Title */}

        <div className="max-w-md mx-auto space-y-6">
          {/* 🔵 Baris Atas (2 gambar) */}
          <div className="grid grid-cols-2 gap-4">
            {topMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
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

          {/* 🟣 Baris Bawah (3 kolom) */}
          <div className="grid grid-cols-3 gap-4">
            {bottomMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Image
                  src={item.img}
                  alt="menu"
                  width={50}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
