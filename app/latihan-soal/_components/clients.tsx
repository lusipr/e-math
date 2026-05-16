"use client";

const BarChartIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-current"
  >
    <path d="M4 19h16" />
    <path d="M8 14v5" />
    <path d="M12 10v9" />
    <path d="M16 6v13" />
  </svg>
);

const GitBranchIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-current"
  >
    <path d="M6 3v4" />
    <path d="M6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M18 21v-4" />
    <path d="M18 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    <path d="M6 5h8a4 4 0 0 1 4 4v2" />
  </svg>
);

const MinusIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-current"
  >
    <path d="M5 12h14" />
  </svg>
);

const BlendIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-current"
  >
    <circle cx="9" cy="9" r="3" />
    <circle cx="15" cy="15" r="3" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
);

const latihanMenu = [
  {
    title: "Metode Grafik",
    icon: BarChartIcon,
    path: "/latihan-soal/metode-grafik", // ganti link Canva kamu
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Metode Substitusi",
    icon: GitBranchIcon,
    path: "https://petualangan-spldv-8.my.canva.site/aplikasi-tanpa-judul",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Metode Eliminasi",
    icon: MinusIcon,
    path: "https://petualangan-spldv-8.my.canva.site/c8w8atfrnr48kybf",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Metode Campuran",
    icon: BlendIcon,
    path: "https://soal-campuran-spldv.my.canva.site/",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function LatihanSoalPage() {
  const handleClick = (path: string) => {
    window.open(path, "_blank"); // buka Canva di tab baru
  };

  // return (
  //   <div className="min-h-screen bg-linear-to-b from-white to-blue-50 p-6">

  //     {/* HEADER */}
  //     <div className="text-center mb-10">
  //       <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
  //         Latihan Soal SPLDV
  //       </h1>
  //       <p className="text-gray-500 mt-2">
  //         Pilih metode latihan soal yang ingin kamu pelajari
  //       </p>
  //     </div>

  //     {/* CARD GRID */}
  //     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //       {latihanMenu.map((item, index) => {
  //         const Icon = item.icon;

  //         return (
  //           <div
  //             key={index}
  //             onClick={() => handleClick(item.path)}
  //             className="
  //               group cursor-pointer
  //               bg-white rounded-2xl p-6
  //               shadow-md hover:shadow-xl
  //               transition-all duration-300
  //               hover:-translate-y-2
  //               border border-gray-100
  //             "
  //           >
  //             {/* ICON */}
  //             <div
  //               className={`
  //                 w-14 h-14 flex items-center justify-center rounded-xl mb-4
  //                 ${item.color}
  //                 group-hover:scale-110 transition
  //               `}
  //             >
  //               <Icon size={28} />
  //             </div>

  //             {/* TITLE */}
  //             <h2 className="text-lg font-semibold text-gray-800">
  //               {item.title}
  //             </h2>

  //             <p className="text-sm text-gray-500 mt-2">
  //               Klik untuk mulai latihan
  //             </p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div
      className="
      min-h-screen relative overflow-hidden
      flex items-center justify-center
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
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

      {/* CONTENT CENTER */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
            Latihan Soal SPLDV
          </h1>
          <p className="text-white/80 mt-2">
            Pilih metode latihan soal yang ingin kamu pelajari
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latihanMenu.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => handleClick(item.path)}
                className="
                group cursor-pointer
                bg-white/90 backdrop-blur-md
                rounded-2xl p-6
                shadow-md hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-2
                border border-white/30
                text-left
              "
              >
                <div
                  className={`
                  w-14 h-14 flex items-center justify-center rounded-xl mb-4
                  ${item.color}
                  group-hover:scale-110 transition
                `}
                >
                  <Icon size={28} />
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Klik untuk mulai latihan
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
