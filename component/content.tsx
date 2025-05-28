import Image from "next/image";
import React from "react";

// Helper untuk mengambil ID video dari URL YouTube
function getYoutubeId(url: string) {
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : "";
}

const materi = [
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
  {
    title: "Operasi Hitung Bilangan Bulat",
    desc: "Pelajari cara menjumlah, mengurang, mengalikan, dan membagi bilangan bulat dengan mudah.",
    url: "https://youtu.be/IMe0c7Uzwes?si=qjjMEgL-cCtJytiN",
  },
  {
    title: "Belajar Algoritma",
    desc: "Memahami konsep pecahan, cara membaca, dan mengoperasikan pecahan dasar.",
    url: "https://youtu.be/7T4ethkG9wM?si=AITlzW8RIsJ_0-_f",
  },
  {
    title: "Belajar Membaca",
    desc: "Belajar mengenal berbagai bangun datar dan cara menghitung kelilingnya.",
    url: "https://youtu.be/ipmcPCLnRTY?si=nCCz4mNHNb5yDEwo",
  },
];

const Content: React.FC = () => {
  return (
    <div className="mt-16 w-full flex flex-col items-center mb-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-8">Materi Populer</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {materi.map((item, idx) => {
          const videoId = getYoutubeId(item.url);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "https://via.placeholder.com/320x180?text=No+Image";
          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
            >
              <Image
                width={480} // tambahkan width
                height={360} // tambahkan height
                src={thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">{item.desc}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Tonton Video
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
