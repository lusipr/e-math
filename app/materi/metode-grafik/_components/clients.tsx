"use client";
import React from "react";
import Image from "next/image";
import GeoGebraGraph from "./geobra";
import Link from "next/link";

const MetodeGrafik = () => {
  const a1 = 1,
    b1 = 1,
    c1 = 16;
  const a2 = 2,
    b2 = 3,
    c2 = 45;
  const result = { x: 3, y: 13 };

  return (
    <div className="min-h-screen bg-[url('/assets/images/home/home2.png')] bg-cover bg-center bg-no-repeat p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Metode Grafik
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-700">
          Metode grafik digunakam untuk menyelesaikan Sistem Persamaan Linear
          Dua Variabel (SPLDV) dengan cara menentukan titik perpotongan dari dua
          garis lurus yang mewakili masing-masing persamaan.
        </p>
      </div>

      {/* LANGKAH */}
      <div className="bg-blue-100 rounded-2xl p-6 mb-8 shadow">
        <h2 className="font-bold text-lg mb-4 text-blue-700">
          Langkah-langkah:
        </h2>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl shadow">
            1️⃣ Menentukan titik potong terhadap sumbu-x dan sumbu-y
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            2️⃣ Menggambar grafik dari kedua persamaan
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            3️⃣ Menentukan titik perpotongan kedua garis
          </div>
        </div>
      </div>

      {/* CONTOH */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-3 text-gray-700 font-medium">Contoh:</p>
        <Image
          // src="/assets/images/grafik/gambar1.PNG"
          src="/assets/images/eliminasi/gambar1.PNG"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <p className="mb-3 text-gray-700">Diberikan soal sebagai berikut!</p>

        <div className="bg-yellow-100 p-4 rounded-xl mb-4">
          <p className="text-gray-800">
            Pak Hadi seorang kolektor antik sepeda roda dua dan roda tiga.
            Jumlah semua sepeda 16 buah dan jumlah semua kaki seluruh sepeda
            berjumlah 45 buah. Berapakah masing-masing sepeda roda dua dan
            sepeda roda tiga yang dimiliki Pak Hadi?
          </p>
        </div>

        <p className="text-gray-700 mb-3">
          Nah, sebelum memasuki langkah pertama kita buat dahulu soal tersebut
          menjadi model matematika.
        </p>
        <div className="bg-blue-100 p-4 rounded-xl mb-4">
          <Image
            src="/assets/images/grafik/grafik2.png"
            alt="bentuk umum spldv"
            width={800}
            height={400}
            className="mx-auto"
          />
        </div>
        <p className="text-gray-700">
          Dari model persamaan kedua mengapa didapatkan 2x+ 3y = 45 karena
          sepeda x punya dua roda dan sepeda y punya 3 roda. Selanjutnya
          memasuki langkah-langkah penyelesaian SPLDV dengan metode grafik.
        </p>
        <div className="bg-blue-100 rounded-2xl p-6 mb-8 shadow">
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl shadow">
              <p>
                1️⃣ Menentukan titik potong masing-masing persamaan terhadap
                sumbu-x dan sumbu-y.
              </p>
              <div className="flex justify-center">
                <video
                  className="w-175 md:w-200 h-auto p-6 object-cover rounded-xl shadow-lg"
                  controls
                >
                  <source
                    src="/assets/images/grafik/video-1-langkah-a.mov"
                    type="video/mp4"
                  />
                  Browser Anda tidak mendukung video.
                </video>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p>
                2️⃣ Menggambar grafik dari kedua persamaan berdasarkan
                titik-titik yang telah ditemukan.
              </p>
              <div className="flex justify-center">
                <video
                  className="w-175 md:w-200 h-auto p-6 object-cover rounded-xl shadow-lg"
                  controls
                >
                  <source
                    src="/assets/images/grafik/video-1-langkah-b.mov"
                    type="video/mp4"
                  />
                  Browser Anda tidak mendukung video
                </video>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              3️⃣ Menentukan titik potong antara dua garis, yang merupakan solusi
              dari SPLDV tersebut.
              {/* PEMBUKTIAN */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="space-y-2 text-gray-700">
                  <p className="text-gray-700">
                    Titik potong kedua garis adalah (3, 13). Pembuktian:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Jumlah kendaraan: 3 + 13 = 16</li>
                    <li>Jumlah roda: 2(3) + 3(13) = 45</li>
                  </ul>
                </div>

                <div className="mt-4 bg-blue-100 p-4 rounded-xl">
                  <p>
                    Hal ini berarti nilai x = 3 dan y = 13 merupakan solusi yang
                    memenuhi kedua persamaan. Dalam konteks permasalahan, nilai
                    x menyatakan jumlah sepeda roda dua sebanyak 3 buah,
                    sedangkan nilai y menyatakan jumlah sepeda roda tiga
                    sebanyak 13 buah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LATIHAN */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="mb-4 text-black text-bold">
          Kerjakan secara mandiri latihan soal metode grafik!
        </h2>

        <p className="text-gray-700">
          Andi membeli 2 buku dan 1 pensil dengan harga total Rp10.000,
          sedangkan Budi membeli 1 buku dan 2 pensil seharga Rp8.000. Tentukan
          harga masing-masing 1 buku dan 1 pensil menggunakan metode grafik!
        </p>
        {/* CEK */}
        <div className="bg-blue-100 p-6 rounded-2xl text-center shadow-lg mb-8">
          <p className="mb-4">Cek grafik kamu disini!</p>

          <GeoGebraGraph
            equations={[`${a1}x + ${b1}y = ${c1}`, `${a2}x + ${b2}y = ${c2}`]}
            point={result}
          />
        </div>
      </div>

      {/* NEXT */}
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href={"/materi/pengantar-spldv"}
          className="bg-gray-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Prev
        </Link>

        <Link
          href={"/materi/metode-subtitusi"}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default MetodeGrafik;
