"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MetodeSubstitusi = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-yellow-50 p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Metode Substitusi
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-700">
          Metode substitusi adalah suatu teknik untuk menyelesaikan sistem
          persamaan linear dengan dua variabel, di mana salah satu variabel
          digantikan ke dalam persamaan yang lain. Langkah-langkah menyelesaikan
          SPLDV dengan metode substitusi sebagai berikut.
        </p>
      </div>

      {/* CONTOH */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-3 text-gray-700 font-medium">Contoh:</p>
        <Image
          src="/assets/images/subtitusi/gambar1.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <div className="bg-yellow-100 p-4 rounded-xl mb-4">
          <p className="text-gray-800">
            Pada suatu hari, ibu dan nenek ke pasar tradisional, ibu membeli
            buah 4kg apel dan 3 kg jeruk seharga Rp. 36.000 sedangkan nenek
            membeli 2 kg apel dan 5kg jeruk seharga Rp. 32.000. Tentukan harga
            2kg apel dan 2 kg jeruk.
          </p>
        </div>
        <p className="text-gray-700 mb-2">Jawaban:</p>
        <p className="text-gray-700 mb-2">Diketahui:</p>
        <p className="text-gray-700 mb-2">
          Ubah soal cerita menjadi model matematika dahulu dan didapatkan:
        </p>
        <Image
          src="/assets/images/subtitusi/gambar2.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">
          Ditanya: Berapa harga 2kg apel dan 2 kg jeruk?
        </p>
        <p className="text-gray-700 mb-2">Dijawab:</p>
        <div className="bg-blue-100 p-4 rounded-xl mb-4 text-gray-800">
          <ol className="list-decimal pl-6 space-y-4">
            <li className="pl-2">
              <div>
                <p className="font-semibold">
                  Nyatakan m dalam n dari salah satu persamaan
                </p>
                <p>Dari persamaan (2):</p>
                <p>2m + 5n = 32.000</p>
                <p>2m = 32.000 − 5n</p>
                <p>m = (32.000 − 5n) / 2</p>
                <p>m = 16.000 − 2,5n (Persamaan 3)</p>
              </div>
            </li>

            <li className="pl-2">
              <div>
                <p className="font-semibold">
                  Substitusi persamaan (3) ke dalam persamaan (1)
                </p>
                <p>4(16.000 − 2,5n) + 3n = 36.000</p>
                <p>64.000 − 10n + 3n = 36.000</p>
                <p>64.000 − 7n = 36.000</p>
                <p>−7n = 36.000 − 64.000</p>
                <p>−7n = −28.000</p>
                <p>n = 4.000</p>
                <p className="italic">(Harga 1 kg jeruk = Rp 4.000)</p>
              </div>
            </li>

            <li className="pl-2">
              <div>
                <p className="font-semibold">
                  Substitusi nilai n ke persamaan (3)
                </p>
                <p>m = 16.000 − 2,5n</p>
                <p>m = 16.000 − 2,5(4.000)</p>
                <p>m = 16.000 − 10.000</p>
                <p>m = 6.000</p>
                <p className="italic">(Harga 1 kg apel = Rp 6.000)</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">
            Kesimpulan, harga 1kg apel seharga Rp.6000 dan 1kg jeruk seharga
            Rp.4000, kita buktikan:
          </p>
          <div className="text-gray-700 space-y-6">
            {/* Pembuktian Persamaan (1) */}
            <div>
              <p className="font-semibold mb-2">Pembuktian persamaan (1):</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>4m + 3n = 36.000</li>

                <div className="pl-4 space-y-1">
                  <p>4(6.000) + 3(4.000) = 36.000</p>
                  <p>24.000 + 12.000 = 36.000</p>
                  <p className="text-green-600 font-medium">
                    36.000 = 36.000 (terbukti)
                  </p>
                </div>
              </ol>
            </div>

            {/* Pembuktian Persamaan (2) */}
            <div>
              <p className="font-semibold mb-2">Pembuktian persamaan (2):</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>2m + 5n = 32.000</li>

                <div className="pl-4 space-y-1">
                  <p>2(6.000) + 5(4.000) = 32.000</p>
                  <p>12.000 + 20.000 = 32.000</p>
                  <p className="text-green-600 font-medium">
                    32.000 = 32.000 (terbukti)
                  </p>
                </div>
              </ol>
            </div>
          </div>

          <div className="mt-4 bg-blue-100 p-4 rounded-xl">
            <p>
              kemudian kita diminta mencari nilai dari 2m + 2n (2kg apel + 2kg
              jeruk). Maka, 2(6.000) + 2(4.000) = 12.000 + 8.000 = 20.000 (harga
              2kg apel dan 2 kg jeruk seharga Rp. 20.000)
            </p>
          </div>
        </div>
      </div>

      {/* LATIHAN */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="mb-4 text-black text-bold">
          Kerjakan soal ini secara mandiri dengan metode substitusi!
        </h2>

        <p className="text-gray-700">
          Di sebuah toko alat tulis, Andi membeli 3 buku tulis dan 2 pensil
          dengan harga Rp19.000. Di toko yang sama, Budi membeli 1 buku tulis
          dan 4 pensil dengan harga Rp13.000. Tentukan harga dari 2 buku tulis
          dan 3 pensil!
        </p>
      </div>

      {/* NEXT */}
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href={"/materi/metode-grafik"}
          className="bg-gray-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Prev
        </Link>

        <Link
          href={"/materi/metode-eliminasi"}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default MetodeSubstitusi;
