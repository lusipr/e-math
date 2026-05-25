// // //
// // "use client";

// // import { useRouter } from "next/navigation";
// // import Image from "next/image";

// // const topMenu = [
// //   { img: "/assets/images/cptp.png", path: "/materi/tp-cp" },
// //   { img: "/assets/images/pengantar.png", path: "/materi/pengantar-spldv" },
// // ];

// // const bottomMenu = [
// //   { img: "/assets/images/metode-grafik.png", path: "/materi/metode-grafik" },
// //   { img: "/assets/images/substitusi.png", path: "/materi/metode-subtitusi" },
// //   { img: "/assets/images/eliminasi.png", path: "/materi/metode-eliminasi" },
// //   { img: "/assets/images/campuran.png", path: "/materi/metode-campuran" },
// //   { img: "/assets/images/latihan-soal.png", path: "/latihan-soal" },
// //   { img: "/assets/images/profile.png", path: "/profile" },
// // ];

// // export default function Client() {
// //   const router = useRouter();

// //   return (
// //     <div
// //       className="
// //         min-h-screen w-full relative
// //         flex items-center justify-center
// //         font-sans
// //       "
// //       style={{
// //         backgroundImage: "url('/assets/images/latihan-soal/latsoal1.png')",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       {/* OVERLAY */}
// //       <div className="absolute inset-0 bg-black/50" />

// //       {/* glow effect */}
// //       <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
// //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

// //       {/* CONTENT */}
// //       <div className="relative z-10 w-full max-w-6xl px-6">

// //         {/* HEADER BUTTON */}
// //         <div className="flex justify-center mb-8">
// //           <button
// //             className="
// //               bg-[#93a5e6]
// //               text-white font-bold
// //               rounded-xl
// //               px-6 py-3
// //               text-lg sm:text-xl md:text-2xl lg:text-3xl
// //               shadow-lg
// //               hover:scale-105 transition
// //             "
// //           >
// //             Menu Utama
// //           </button>
// //         </div>

// //         {/* GLASS CONTAINER */}
// //         <div className=" rounded-2xl p-6 sm:p-8 lg:p-10">

// //           <div className="max-w-6xl mx-auto space-y-10">

// //             {/* TOP MENU */}
// //             <div className="flex justify-center">
// //               <div className="grid grid-cols-2 gap-4 sm:gap-6 w-[85%] sm:w-[70%] lg:w-[50%]">
// //                 {topMenu.map((item, index) => (
// //                   <div
// //                     key={index}
// //                     onClick={() => router.push(item.path)}
// //                     className="
// //                       cursor-pointer
// //                       transition-transform duration-200
// //                       hover:scale-105 active:scale-95
// //                     "
// //                   >
// //                     <Image
// //                       src={item.img}
// //                       alt="menu"
// //                       width={220}
// //                       height={160}
// //                       className="w-full h-auto"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* BOTTOM MENU */}
// //             <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-4">
// //               {bottomMenu.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   onClick={() => router.push(item.path)}
// //                   className="
// //                     cursor-pointer
// //                     transition-transform duration-200
// //                     hover:scale-105 active:scale-95
// //                     lg:w-[16%]
// //                   "
// //                 >
// //                   <Image
// //                     src={item.img}
// //                     alt="menu"
// //                     width={200}
// //                     height={140}
// //                     className="w-full h-auto"
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client"; // Next.js App Router support

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Ganti dengan 'next/router' jika pakai Pages Router
// // Jika pakai React Router: import { useNavigate } from "react-router-dom";

// // ─── Types ────────────────────────────────────────────────────────────────────

// type ButtonVariant =
//   | "amber"
//   | "teal"
//   | "purple"
//   | "blue"
//   | "green"
//   | "orange"
//   | "pink"
//   | "lavender";

// interface MenuButtonProps {
//   label: string;
//   subtitle?: string;
//   icon: string;
//   variant: ButtonVariant;
//   size?: "large" | "small";
//   href: string; // route tujuan
// }

// // ─── Variant color map ────────────────────────────────────────────────────────

// const variantStyles: Record<ButtonVariant, { face: string; shadow: string }> = {
//   amber:    { face: "#F5A623", shadow: "#B07000" },
//   teal:     { face: "#1DB87A", shadow: "#0A6644" },
//   purple:   { face: "#7B5EE8", shadow: "#3D2A9E" },
//   blue:     { face: "#2E9CF0", shadow: "#0A5B9A" },
//   green:    { face: "#3DBF6A", shadow: "#186830" },
//   orange:   { face: "#F07030", shadow: "#8A3510" },
//   pink:     { face: "#E83A8A", shadow: "#880040" },
//   lavender: { face: "#9B72D0", shadow: "#52348A" },
// };

// const DEPTH = 6;

// // ─── MenuButton ───────────────────────────────────────────────────────────────

// function MenuButton({ label, subtitle, icon, variant, size = "large", href }: MenuButtonProps) {
//   const router = useRouter();
//   // React Router: const navigate = useNavigate();

//   const [pressed, setPressed] = useState(false);
//   const [popped, setPopped] = useState(false);
//   const { face, shadow } = variantStyles[variant];
//   const isSmall = size === "small";

//   const handlePress = () => setPressed(true);

//   const handleRelease = () => {
//     setPressed(false);
//     setPopped(true);
//     setTimeout(() => {
//       setPopped(false);
//       router.push(href);
//       // React Router: navigate(href);
//     }, 180); // delay agar animasi terasa sebelum navigasi
//   };

//   return (
//     <button
//       onMouseDown={handlePress}
//       onMouseUp={handleRelease}
//       onMouseLeave={() => setPressed(false)}
//       onTouchStart={handlePress}
//       onTouchEnd={handleRelease}
//       aria-label={label}
//       style={{
//         border: "none",
//         background: "none",
//         padding: 0,
//         cursor: "pointer",
//         outline: "none",
//         width: "100%",
//         display: "block",
//         WebkitTapHighlightColor: "transparent",
//         animation: popped ? "pop3d 0.22s ease" : "none",
//       }}
//     >
//       <div style={{ position: "relative", borderRadius: 18 }}>
//         {/* Shadow */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             borderRadius: 18,
//             background: shadow,
//             transform: `translateY(${DEPTH}px)`,
//             zIndex: 0,
//           }}
//         />

//         {/* Face */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             borderRadius: 18,
//             background: face,
//             transform: pressed ? `translateY(${DEPTH}px)` : "translateY(0px)",
//             transition: pressed ? "transform 0.08s ease" : "transform 0.12s ease",
//             display: "flex",
//             flexDirection: isSmall ? "column" : "row",
//             alignItems: isSmall ? "flex-start" : "center",
//             gap: isSmall ? 10 : 12,
//             padding: isSmall
//               ? pressed ? "14px 14px 12px" : "14px 14px 18px"
//               : pressed ? "16px 18px 14px" : "16px 18px 20px",
//             marginBottom: DEPTH,
//           }}
//         >
//           {/* Icon */}
//           <div
//             style={{
//               width: isSmall ? 44 : 52,
//               height: isSmall ? 44 : 52,
//               borderRadius: 14,
//               background: "rgba(255,255,255,0.28)",
//               border: "2px solid rgba(255,255,255,0.35)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: isSmall ? 22 : 26,
//               flexShrink: 0,
//             }}
//           >
//             {icon}
//           </div>

//           {/* Label */}
//           <div style={{ textAlign: "left", flex: 1 }}>
//             <div
//               style={{
//                 color: "#fff",
//                 fontFamily: "'Nunito', sans-serif",
//                 fontWeight: 900,
//                 fontSize: isSmall ? 13 : 14.5,
//                 lineHeight: 1.25,
//                 textShadow: "0 2px 4px rgba(0,0,0,0.22)",
//               }}
//             >
//               {label}
//             </div>
//             {subtitle && (
//               <div
//                 style={{
//                   color: "rgba(255,255,255,0.82)",
//                   fontFamily: "'Nunito', sans-serif",
//                   fontWeight: 700,
//                   fontSize: 11,
//                   marginTop: 3,
//                 }}
//               >
//                 {subtitle}
//               </div>
//             )}
//           </div>

//           {/* Chevron (large only) */}
//           {!isSmall && (
//             <div
//               style={{
//                 color: "rgba(255,255,255,0.7)",
//                 fontSize: 20,
//                 flexShrink: 0,
//                 marginLeft: "auto",
//               }}
//             >
//               ›
//             </div>
//           )}
//         </div>
//       </div>
//     </button>
//   );
// }

// // ─── Menu data ────────────────────────────────────────────────────────────────

// const largeMenuItems: MenuButtonProps[] = [
//   {
//     label: "Capaian & Tujuan Pembelajaran",
//     icon: "🎯",
//     variant: "amber",
//     size: "large",
//     href: "/materi/tp-cp",
//   },
//   {
//     label: "Pengantar SPLDV",
//     icon: "📖",
//     variant: "teal",
//     size: "large",
//     href: "/materi/pengantar-spldv",
//   },
// ];

// const smallMenuItems: MenuButtonProps[] = [
//   { label: "Metode Grafik",     icon: "📈", variant: "purple",   size: "small", href: "/materi/metode-grafik" },
//   { label: "Metode Substitusi", icon: "✏️", variant: "blue",     size: "small", href: "/materi/metode-substitusi" },
//   { label: "Metode Eliminasi",  icon: "🧮", variant: "green",    size: "small", href: "/materi/metode-eliminasi" },
//   { label: "Metode Campuran",   icon: "📋", variant: "orange",   size: "small", href: "/materi/metode-campuran" },
//   { label: "Latihan Soal",      icon: "📝", variant: "pink",     size: "small", href: "/latihan-soal" },
//   { label: "Profile",           icon: "👤", variant: "lavender", size: "small", href: "/profile" },
// ];

// // ─── Root page component ──────────────────────────────────────────────────────

// export default function MenuUtama() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');
//         @keyframes pop3d {
//           0%   { transform: scale(1); }
//           40%  { transform: scale(1.07); }
//           100% { transform: scale(1); }
//         }
//       `}</style>

//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//                   backgroundImage: "url('/assets/images/latihan-soal/latsoal1.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: 16,
//         }}
//       >
//         <div
//           style={{
//             // background: "#c8e8ff",
//             borderRadius: 20,
//             padding: "28px 16px 32px",
//             fontFamily: "'Nunito', sans-serif",
//             width: "100%",
//             maxWidth: 640,
//           }}
//         >
//           {/* Title */}
//           <h1
//             style={{
//               textAlign: "center",
//               fontFamily: "'Nunito', sans-serif",
//               fontWeight: 900,
//               fontSize: 30,
//               color: "black",
//               marginBottom: 20,
//               letterSpacing: 1,
//             }}
//           >
//             ⭐ MENU UTAMA ⭐
//           </h1>

//           {/* Row 1 — large buttons */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: 16,
//               marginBottom: 16,
//             }}
//           >
//             {largeMenuItems.map((item) => (
//               <MenuButton key={item.href} {...item} />
//             ))}
//           </div>

//           {/* Row 2 — small buttons */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: 12,
//             }}
//           >
//             {smallMenuItems.map((item) => (
//               <MenuButton key={item.href} {...item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client"; // Next.js App Router support

import { useState } from "react";
import { useRouter } from "next/navigation";
// React Router: import { useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant =
  | "amber"
  | "teal"
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "lavender";

interface MenuButtonProps {
  label: string;
  subtitle?: string;
  icon: string;
  variant: ButtonVariant;
  size?: "large" | "small";
  href: string;
}

// ─── Breakpoint reference (Tailwind default) ──────────────────────────────────
// sm  : 640px  → iPhone landscape / small Android
// md  : 768px  → iPad portrait / large Android
// lg  : 1024px → iPad landscape / small laptop
// xl  : 1280px → laptop / desktop
// 2xl : 1536px → large desktop / 4K

// ─── Variant color map ────────────────────────────────────────────────────────

const variantStyles: Record<ButtonVariant, { face: string; shadow: string }> = {
  amber: { face: "#F5A623", shadow: "#B07000" },
  teal: { face: "#1DB87A", shadow: "#0A6644" },
  purple: { face: "#7B5EE8", shadow: "#3D2A9E" },
  blue: { face: "#2E9CF0", shadow: "#0A5B9A" },
  green: { face: "#3DBF6A", shadow: "#186830" },
  orange: { face: "#F07030", shadow: "#8A3510" },
  pink: { face: "#E83A8A", shadow: "#880040" },
  lavender: { face: "#9B72D0", shadow: "#52348A" },
};

// ─── MenuButton ───────────────────────────────────────────────────────────────

function MenuButton({
  label,
  subtitle,
  icon,
  variant,
  size = "large",
  href,
}: MenuButtonProps) {
  const router = useRouter();
  // React Router: const navigate = useNavigate();

  const [pressed, setPressed] = useState(false);
  const [popped, setPopped] = useState(false);
  const { face, shadow } = variantStyles[variant];
  const isSmall = size === "small";

  const handlePress = () => setPressed(true);

  const handleRelease = () => {
    setPressed(false);
    setPopped(true);
    setTimeout(() => {
      setPopped(false);
      router.push(href);
      // React Router: navigate(href);
    }, 180);
  };

  return (
    <button
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      aria-label={label}
      className={[
        "w-full border-none bg-transparent p-0 cursor-pointer outline-none block select-none",
        "[WebkitTapHighlightColor:transparent]",
        popped ? "animate-pop3d" : "",
      ].join(" ")}
    >
      {/* Wrapper relatif untuk posisi shadow */}
      <div className="relative rounded-[14px] sm:rounded-2xl md:rounded-[18px]">
        {/* Shadow layer */}
        <div
          className="absolute inset-0 z-0 rounded-[14px] sm:rounded-2xl md:rounded-[18px] translate-y-1.25 sm:translate-y-1.5"
          style={{ backgroundColor: shadow }}
        />

        {/* Face layer */}
        <div
          className={[
            "relative z-10 rounded-[14px] sm:rounded-2xl md:rounded-[18px]",
            "mb-1.25 sm:mb-1.5",
            "transition-transform ease-out",
            pressed
              ? "duration-80 translate-y-1.25 sm:translate-y-1.5"
              : "duration-120 translate-y-0",
            // Layout: small buttons stack vertically, large go horizontal
            isSmall
              ? "flex flex-col items-start"
              : "flex flex-row items-center",
            // Gap responsive
            isSmall ? "gap-2 sm:gap-2.5" : "gap-2 sm:gap-3",
            // Padding responsive (large)
            !isSmall &&
              (pressed
                ? "px-3 pt-3 pb-2.5 sm:px-4 sm:pt-3.5 sm:pb-3 md:px-4.5 md:pt-4 md:pb-3.5"
                : "px-3 pt-3 pb-3.5 sm:px-4 sm:pt-3.5 sm:pb-4 md:px-4.5 md:pt-4 md:pb-5"),
            // Padding responsive (small)
            isSmall &&
              (pressed
                ? "px-3 pt-3 pb-2.5 sm:px-3 sm:pt-3 sm:pb-2.5 md:px-3.5 md:pt-3.5 md:pb-3"
                : "px-3 pt-3 pb-3.5 sm:px-3 sm:pt-3 sm:pb-4 md:px-3.5 md:pt-3.5 md:pb-4.5"),
          ].join(" ")}
          style={{ backgroundColor: face }}
        >
          {/* Icon box — scales up on bigger screens */}
          <div
            className={[
              "rounded-[10px] sm:rounded-xl md:rounded-[14px]",
              "shrink-0 flex items-center justify-center",
              "bg-white/30 border-2 border-white/35",
              isSmall
                ? "w-9 h-9 text-[18px] sm:w-10 sm:h-10 sm:text-[20px] md:w-11 md:h-11 md:text-[22px]"
                : "w-10 h-10 text-[20px] sm:w-11 sm:h-11 sm:text-[22px] md:w-13 md:h-13 md:text-[26px]",
            ].join(" ")}
          >
            {icon}
          </div>

          {/* Text block */}
          <div className="text-left flex-1 min-w-0">
            <p
              className={[
                "text-white font-black leading-tight m-0 truncate",
                "[text-shadow:0_2px_4px_rgba(0,0,0,0.22)]",
                "font-[Nunito,sans-serif]",
                isSmall
                  ? "text-[11px] sm:text-[12px] md:text-[13px]"
                  : "text-[12px] sm:text-[13.5px] md:text-[14.5px]",
              ].join(" ")}
              title={label}
            >
              {label}
            </p>
            {subtitle && (
              <p
                className={[
                  "text-white/80 font-bold mt-0.5 m-0 font-[Nunito,sans-serif]",
                  "text-[9px] sm:text-[10px] md:text-[11px]",
                ].join(" ")}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Chevron — large button only, hidden on very small screens */}
          {!isSmall && (
            <span className="hidden sm:inline text-white/70 text-lg md:text-xl shrink-0 ml-auto">
              ›
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Menu data ────────────────────────────────────────────────────────────────

const largeMenuItems: MenuButtonProps[] = [
  {
    label: "Capaian & Tujuan Pembelajaran",
    icon: "🎯",
    variant: "amber",
    size: "large",
    href: "/materi/tp-cp",
  },
  {
    label: "Pengantar SPLDV",
    icon: "📖",
    variant: "teal",
    size: "large",
    href: "/materi/pengantar-spldv",
  },
];

const smallMenuItems: MenuButtonProps[] = [
  {
    label: "Metode Grafik",
    icon: "📈",
    variant: "purple",
    size: "small",
    href: "/materi/metode-grafik",
  },
  {
    label: "Metode Substitusi",
    icon: "✏️",
    variant: "blue",
    size: "small",
    href: "/materi/metode-subtitusi",
  },
  {
    label: "Metode Eliminasi",
    icon: "🧮",
    variant: "green",
    size: "small",
    href: "/materi/metode-eliminasi",
  },
  {
    label: "Metode Campuran",
    icon: "📋",
    variant: "orange",
    size: "small",
    href: "/materi/metode-campuran",
  },
  {
    label: "Latihan Soal",
    icon: "📝",
    variant: "pink",
    size: "small",
    href: "/latihan-soal",
  },
  {
    label: "Profile",
    icon: "👤",
    variant: "lavender",
    size: "small",
    href: "/profile",
  },
];

// ─── Root page component ──────────────────────────────────────────────────────

export default function MenuUtama() {
  return (
    <>
      {/* Google Fonts + keyframe animasi pop — tidak bisa via Tailwind murni */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');

        @keyframes pop3d {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.07); }
          100% { transform: scale(1); }
        }
        .animate-pop3d { animation: pop3d 0.22s ease; }
      `}</style>

      {/*
        ─── Responsive layout breakdown ─────────────────────────
        < 640px  (iPhone SE, Android kecil) : p-3, card penuh lebar
          640px  (iPhone Pro Max, Android L): p-4, max-w-lg
          768px  (iPad portrait, tablet)    : p-6, max-w-xl
         1024px  (iPad landscape, laptop)   : p-8, max-w-2xl
         1280px+ (desktop / large monitor)  : p-10, max-w-3xl, centered
      */}
      <div
        className="
    min-h-screen flex items-center justify-center
    bg-[url('/assets/images/latihan-soal/latsoal1.png')] bg-cover bg-center bg-no-repeat
    p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10
  "
      >
        {/* Menu card */}
        <div
          className="
          w-full
          max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
          rounded-2xl sm:rounded-[20px] md:rounded-3xl
          px-3 pt-5 pb-6
          sm:px-4 sm:pt-6 sm:pb-7
          md:px-6 md:pt-7 md:pb-8
          lg:px-8 lg:pt-8 lg:pb-10
          xl:px-10 xl:pt-10 xl:pb-12
          font-[Nunito,sans-serif]
        "
        >
          {/* Title — scales across breakpoints */}
          <h1
            className="
            text-center font-black tracking-wide text-black
            mb-4 sm:mb-5 md:mb-6 lg:mb-7
            text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl
            font-[Nunito,sans-serif]
          "
          >
            ⭐ MENU UTAMA ⭐
          </h1>

          {/*
            Row 1 — large buttons
            Mobile  : 1 kolom (terlalu sempit untuk 2 kolom di HP kecil)
            sm+     : 2 kolom
          */}
          <div
            className="
            grid gap-3
            grid-cols-1 sm:grid-cols-2
            sm:gap-4 md:gap-5 lg:gap-6
            mb-3 sm:mb-4 md:mb-5 lg:mb-6
          "
          >
            {largeMenuItems.map((item) => (
              <MenuButton key={item.href} {...item} />
            ))}
          </div>

          {/*
            Row 2 — small buttons
            Mobile  : 2 kolom (lebih nyaman di tangan)
            sm+     : 3 kolom
            lg+     : 6 kolom (1 baris penuh di layar lebar)
          */}
          <div
            className="
            grid gap-2
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-3
            sm:gap-3 md:gap-4 lg:gap-5
          "
          >
            {smallMenuItems.map((item) => (
              <MenuButton key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
