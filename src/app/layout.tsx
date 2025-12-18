
// // // src/app/layout.tsx (Modified for Theme Integration)

// // import type { Metadata } from "next";
// // // You can remove Geist fonts if they conflict or if you only want your theme's fonts
// // // import { Geist, Geist_Mono } from "next/font/google"; 
// // //import "./globals.css"; // STILL NEEDED for custom styles

// // // --- 1. Define all your theme's CSS links here ---
// // const themeStyles = [
// //   // ALL PATHS START WITH / TO ACCESS THE public FOLDER
// //   "/css/plugins/fontawesome.css",
// //   "/css/plugins/swiper.css",
// //   "/css/plugins/metismenu.css",
// //   "/css/plugins/magnifying-popup.css",
// //   "/css/plugins/odometer.css",
// //   "/css/plugins/aos.css",
// //   "/css/vendor/bootstrap.min.css",
// //   "/css/style.css",
// //   // Add any other CSS files you need here
// // ];

// // // --- 2. Update Metadata ---
// // export const metadata: Metadata = {
// //   title: "Invena Business Consulting HTML Template",
// //   description: "A modern and responsive HTML template for consulting businesses.",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <head>
// //         {/* Favicon link: Path changed from assets/images/fav.png to /images/fav.png */}
// //         <link rel="shortcut icon" type="image/x-icon" href="/images/fav.png" />
        
// //         {/* Render the CSS links dynamically using the array */}
// //         {themeStyles.map((href) => (
// //           <link key={href} rel="stylesheet" href={href} />
// //         ))}

// //         {/* Google Fonts (Required since they were in your original HTML) */}
// //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// //         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
// //         <link
// //           href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
// //           rel="stylesheet"
// //         />

// //         {/* Image Preload: Path changed from assets/images/... to /images/... */}
// //         <link rel="preload" as="image" href="/images/banner/21.webp" />
// //       </head>
      
// //       {/* --- 3. Wrap Content in the Client Component --- */}
// //       {/* <ThemeWrapper> */}
// //         {children}
// //       {/* </ThemeWrapper> */}
      
// //     </html>
// //   );
// // }

// // src/app/layout.tsx (Modified for Theme Integration)

// import type { Metadata } from "next";
// // 1. Import the Header Component from the relative path
// import Header from "../Components/ResuseableComponents/Header"; 
// import Footer from "../Components/ResuseableComponents/Footer"; 

// // You can remove Geist fonts if they conflict or if you only want your theme's fonts
// // import { Geist, Geist_Mono } from "next/font/google"; 
// //import "./globals.css"; // STILL NEEDED for custom styles

// // --- 1. Define all your theme's CSS links here ---
// const themeStyles = [
//   // ALL PATHS START WITH / TO ACCESS THE public FOLDER
//   "/css/plugins/fontawesome.css",
//   "/css/plugins/swiper.css",
//   "/css/plugins/metismenu.css",
//   "/css/plugins/magnifying-popup.css",
//   "/css/plugins/odometer.css",
//   "/css/plugins/aos.css",
//   "/css/vendor/bootstrap.min.css",
//   "/css/style.css",
//   // Add any other CSS files you need here
// ];

// // --- 2. Update Metadata ---
// export const metadata: Metadata = {
//   title: "Invena Business Consulting HTML Template",
//   description: "A modern and responsive HTML template for consulting businesses.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Favicon link: Path changed from assets/images/fav.png to /images/fav.png */}
//         <link rel="shortcut icon" type="image/x-icon" href="/images/fav.png" />
        
//         {/* Render the CSS links dynamically using the array */}
//         {themeStyles.map((href) => (
//           <link key={href} rel="stylesheet" href={href} />
//         ))}

//         {/* Google Fonts (Required since they were in your original HTML) */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
//           rel="stylesheet"
//         />

//         {/* Image Preload: Path changed from assets/images/... to /images/... */}
//         <link rel="preload" as="image" href="/images/banner/21.webp" />
//       </head>
      
    
//         <Header /> 
//         {children}
//         <Footer/> 

//     </html>
//   );
// }


//10 issues 
import type { Metadata } from "next";
import Header from "../Components/ResuseableComponents/Header";
import Footer from "../Components/ResuseableComponents/Footer";
// import "./globals.css"; // Uncomment this if you have custom styles

// --- 1. Define all your theme's CSS links here ---
// 🔑 SOLUTION for "Parameter 'href' implicitly has an 'any' type."
const themeStyles: string[] = [
  // ALL PATHS START WITH / TO ACCESS THE public FOLDER
  "/css/plugins/fontawesome.css",
  "/css/plugins/swiper.css",
  "/css/plugins/metismenu.css",
  "/css/plugins/magnifying-popup.css",
  "/css/plugins/odometer.css",
  "/css/plugins/aos.css",
  "/css/vendor/bootstrap.min.css",
  "/css/style.css",
];

// --- 2. Update Metadata ---
export const metadata: Metadata = {
title: "GBA",
 description: "Gujranwala Business Alliances.",
};

export default function RootLayout({
 children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<head>
 <link rel="shortcut icon" type="image/x-icon" href="/images/fav.png" />
 
 {/* Render the CSS links dynamically using the array */}
 {themeStyles.map((href) => ( // 'href' is now correctly typed as 'string'
 <link key={href} rel="stylesheet" href={href} />
 ))}

 {/* Google Fonts (Required since they were in your original HTML) */}
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link
 href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
 rel="stylesheet"
 />

 <link rel="preload" as="image" href="/images/banner/21.webp" />
 </head>
 
 {/* 🔑 SOLUTION for Hydration Error: All visible content goes inside <body> */}
 <body> 
 <Header /> 
{children}
 <Footer/> 
 </body>

 </html>
 );
}