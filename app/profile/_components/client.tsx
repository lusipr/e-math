import Image from "next/image";
import React from "react";

const Client = () => {
  return (
    <div className="min-h-[95vh] bg-gray-200 flex items-center justify-center ">
      <div className="text-center max-w-md w-full">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Profil Pengembang
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/assets/images/foto-almet.png" // ganti sesuai nama file kamu
              alt="Profile"
              width={220}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          Nama : Oktavia Furi Rama Dani, <br />
          NIM : 2202110008 <br />
          Mahasiswa Program Studi Pendidikan Matematika, <br />
          Universitas PGRI Madiun.
        </p>
      </div>
    </div>
  );
};

export default Client;