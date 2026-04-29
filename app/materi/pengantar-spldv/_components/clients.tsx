"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MateriSPLDV = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-yellow-50 p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Teks Pengantar SPLDV
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <h2 className="text-xl font-bold mb-3 text-purple-600">
          Pecahkan Misteri di Sekitarmu!
        </h2>
        <p className="text-gray-700">
          &quot;Pernah bingung menghitung harga paketan menu di kantin tapi
          penasaran harga satuannya?&quot;
        </p>
      </div>

      {/* ILUSTRASI */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="mb-3 text-gray-700">
          Misalkan di suatu kantin terdapat menu paketan seperti berikut!
        </p>
        <Image
          src="/assets/images/spldv/home1.png"
          alt="kantin"
          width={400}
          height={200}
          className="mx-auto rounded-lg"
        />
      </div>

      {/* PENJELASAN */}
      <div className="bg-yellow-100 rounded-2xl shadow p-6 mb-8 text-center">
        <p className="text-gray-800 font-medium">
          Daripada bingung nebak-nebak, Sistem Persamaan Linear Dua Variabel
          (SPLDV) bisa kasih tahu kamu cara untuk hitung harga tersebut!
        </p>
      </div>

      {/* VIDEO 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-4 text-gray-700">
          Sebelum memasuki materi Sistem Persamaan Linear Dua Variabel (SPLDV)
          kita pahami dahulu terkait Persamaan Linear Dua Variabel (PLDV) dengan
          melihat video dibawah ini!
        </p>

        <div className="flex justify-center">
          <video
            className="w-175 md:w-200 h-auto p-6 object-cover rounded-xl shadow-lg"
            controls
          >
            {" "}
            <source
              src="/assets/images/spldv/video-1-kenali-bagian.mp4"
              type="video/mp4"
            />
            Browser Anda tidak mendukung video.
          </video>
        </div>
      </div>

      {/* CIRI-CIRI */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-4 text-gray-700">
          Dari Persamaan Linear Dua Variabel (PLDV) ini, kita menemukan bahwa
          ciri-ciri PLDV yaitu:
        </p>

        <div className="space-y-2">
          <p>a. Memiliki dua variabel dan berpangkat satu</p>
          <p>b. persamaan ini menggunakan tanda sama dengan (=)</p>
          <p>c. Tidak melibatkan perkalian antar variabel dalam bentuknya.</p>
        </div>

        <div className="mt-4 bg-blue-100 p-4 rounded-xl">
          <p>
            Apakah jika angka berbentuk pecahan tetap termasuk PLDV? Jawabannya,
            iya. Karena pecahan adalah bagian bentuk angka selama memenuhi
            ciri-ciri seperti penjelasan diatas.
          </p>
        </div>
      </div>

      {/* SPLDV */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="text-gray-700">
          Karena sudah mengetahui konsep dasar Persamaan Linear Dua Variabel
          (PLDV) yang meliputi model matematika dan bagian-bagiannya.
          Selanjutnya, kita memasuki materi Sistem Persamaan Linear Dua Variabel
          (SPLDV), jika dalam PLDV hanya ada satu persamaan maka di SPLDV
          terdapat dua atau lebih persamaan linear yang memiliki dua variabel
          (misalnya: x dan y).
        </p>
      </div>

      {/* GAMBAR SPLDV */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="mb-3">
          Contoh bentuk umum SPLDV bisa dilihat dengan gambar dibawah ini:
        </p>
        <Image
          src="/assets/images/spldv/bentuk-umum-spldv.jpg"
          alt="bentuk umum spldv"
          width={800}
          height={400}
          className="mx-auto"
        />
      </div>

      {/* GAME */}
      <div className="bg-linear-to-r from-yellow-300 to-orange-300 p-6 rounded-2xl text-center shadow-lg mb-8">
        <p className="mb-4">Mainkan game ini dengan klik tombol dibawah:</p>
        <Link
          href="https://petualangan-substitusispldv.my.canva.site/salinan-dari-gamifikasi-petualangan-spldv-metode-substitusi-kelas-8"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          ▶️ Buka Canva
        </Link>
      </div>

      {/* VIDEO 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-4">
          Setelah memainkan permainan diatas, kita melanjutkan materi bagaimana
          mengubah soal yang berkaitan sehari-hari menjadi model matematika
          dengan melalui penjelasan video dibawah ini:
        </p>
        <div className="flex justify-center">
          <video
            className="w-80 md:w-100 h-auto p-6 object-cover rounded-xl shadow-lg"
            controls
          >
            <source
              src="/assets/images/spldv/video-2-mengubah-soal.mov"
              type="video/mp4"
            />
            Browser Anda tidak mendukung video.
          </video>
        </div>
      </div>

      {/* METODE */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <p className="mb-4">
          Selanjutnya memasuki materi apa saja metode penyelesaian SPLDV. Metode
          penyelesaian SPLDV ada 4 yaitu:
        </p>

        <div className="space-y-2 mb-6">
          <p>1. Metode Grafik</p>
          <p>2. Metode Substitusi</p>
          <p>3. Metode Eliminasi</p>
          <p>4. Metode Campuran (substitusi-eliminasi)</p>
        </div>

        <p className="mb-4">
          Kalian bisa klik pilihan metode penyelesaian SPLDV dengan mengklik
          tombol “next” dibawah ini!
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-purple-200 p-3 rounded-lg">Grafik</button>
          <button className="bg-purple-200 p-3 rounded-lg">Substitusi</button>
          <button className="bg-purple-200 p-3 rounded-lg">Eliminasi</button>
          <button className="bg-purple-200 p-3 rounded-lg">Campuran</button>
        </div>

        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriSPLDV;
