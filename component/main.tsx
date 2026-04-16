import Image from "next/image";
import React from "react";

const MainComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10 font-sans">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Pecahkan Misteri di Sekitarmu!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 mb-4 italic">
          Pernah bingung menghitung harga paketan menu di kantin tapi
          penasaran harga satuannya?
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          Misalkan di suatu kantin terdapat menu paketan seperti berikut!
        </p>

        {/* Image from assets */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 rounded-lg p-3">
            <Image
              src="/assets/images/home1.png"
              alt="Ilustrasi kantin"
              width={500}
              height={300}
              className="rounded-md object-contain"
            />
          </div>
        </div>

        {/* Bottom Explanation */}
        <p className="text-gray-800">
          Daripada bingung nebak-nebak,{" "}
          <span className="font-bold">
            (Sistem Persamaan Linear Dua Variabel) SPLDV
          </span>{" "}
          bisa kasih tahu kamu cara untuk hitung harga tersebut!
        </p>
      </div>
    </div>
  );
};

export default MainComponent;