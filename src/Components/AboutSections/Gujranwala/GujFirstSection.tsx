// // 'use client'
// // import React from 'react';
// // // ERROR FIX: next/image module cannot be resolved in this environment. 
// // // Replacing Next.js Image component with standard HTML <img> tag.

// // const GujranwalaAbout = () => {
// //     // --- Image paths (Adjust if your images are in a different public directory) ---
// //     const GujranwalaImagePath = '/images/GBA - Gujranwala Page/Gujranwala.png';
// //     const shapePaths = [
// //         '/images/about/shape/01.png', 
// //         '/images/about/shape/02.png', 
// //         '/images/about/shape/03.png'
// //     ];

// //     return (
// //         <>
// //             {/* ---------------------------------------------------------------------- */}
// //             {/* 1. EMBEDDED CSS (for mobile fixes and overrides) */}
// //             {/* ---------------------------------------------------------------------- */}
// //             {/* This <style> block ensures the desktop/mobile overrides work correctly, 
// //                 as they rely on global class names and !important flags from your original CSS. */}
// //             <style jsx global>{`
// //                 /* ---------- MOBILE FIXES FOR THIS PAGE ONLY ---------- */
// //                 @media (max-width: 768px) {
// //                     .name{
// //                         margin-left: 0px !important;
// //                         padding-bottom: 5px !important;
// //                     }

// //                     /* Breadcrumb big background text */
// //                     .rts-breadcrumb-area .title-area-left .bg-title {
// //                         font-size: 64px !important;
// //                         margin-left: 0 !important;
// //                         margin-top: 60px !important;
// //                     }

// //                     /* Reduce top spacing of breadcrumb block */
// //                     .rts-breadcrumb-area.top-300 {
// //                         padding-top: 120px !important;
// //                         padding-bottom: 40px !important;
// //                     }

// //                     /* Remove negative margin trick on first about container */
// //                     .rts-about-area .container {
// //                         margin-top: 0 !important;
// //                         padding-top: 20px !important;
// //                     }

// //                     /* About Gujranwala heading block */
// //                     .rts-about-area h1 {
// //                         margin-left: 0 !important;
// //                         font-size: 32px !important;
// //                         line-height: 1.2;
// //                     }

// //                     /* Big Gujranwala image height */
// //                     .about-invena-large-image .large-image-bottm-breadcrumb {
// //                         max-height: 300px !important;
// //                     }

// //                     .about-invena-large-image .large-image-bottm-breadcrumb img {
// //                         height: 300px !important;
// //                     }

// //                     /* Text under Gujranwala image */
// //                     .about-between-wrapper {
// //                         margin-top: 40px !important;
// //                         padding: 0 12px;
// //                     }

// //                     .about-between-wrapper .disc {
// //                         font-size: 14px !important;
// //                         line-height: 1.7;
// //                     }

// //                     /* Industries of Gujranwala block spacing (element not in HTML, but CSS included for completeness) */
// //                     .working-process-area-three {
// //                         margin-top: 60px !important;
// //                         margin-bottom: 60px !important;
// //                         margin-left: 0 !important;
// //                         margin-right: 0 !important;
// //                     }

// //                     .working-process-area-three .title-style-three .title {
// //                         font-size: 32px !important;
// //                         line-height: 1.2;
// //                     }

// //                     .working-process-area-three p {
// //                         font-size: 14px !important;
// //                     }

// //                     /* Industry list font size */
// //                     .industry-list li {
// //                         font-size: 14px;
// //                     }

// //                     /* Extra tighten generic container vertical gaps inside this page */
// //                     .container {
// //                         padding-left: 15px;
// //                         padding-right: 15px;
// //                     }
// //                 }
// //                 @media only screen and (max-width: 575px) {
// //                     .rts-breadcrumb-area {
// //                         height: 50px;
// //                     }
// //                 }
// //             `}</style>
            
// //             {/* ---------------------------------------------------------------------- */}
// //             {/* 2. BREADCRUMB AREA */}
// //             {/* ---------------------------------------------------------------------- */}
// //             <div className="rts-breadcrumb-area">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-lg-12">
// //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// //                                 <span className="bg-title" style={{ marginLeft: '50px' }}>
// //                                     About Us
// //                                 </span>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="shape-area">
// //                     {/* Using standard HTML <img> tag for shapes */}
// //                     <img src={shapePaths[0]} alt="shape" className="one" />
// //                     <img src={shapePaths[1]} alt="shape" className="two" />
// //                     <img src={shapePaths[2]} alt="shape" className="three" />
// //                 </div>
// //             </div>

// //             {/* ---------------------------------------------------------------------- */}
// //             {/* 3. ABOUT CONTENT AREA */}
// //             {/* ---------------------------------------------------------------------- */}
// //             <div className="rts-about-area rts-section-gap"> 
// //                 <div className="container pt--10" style={{ marginTop: '-300px' }}>
// //                     <div style={{ marginTop: '-80px',  marginLeft:'-70px' }}>
// //                         <p 
// //                             className="name" 
// //                             style={{ fontSize: '16px', marginLeft: '80px', marginTop: '50px' }}
// //                         > 
// //                             About Gujranwala
// //                         </p>
// //                         <h1 
// //                             style={{ fontWeight: '800', fontSize: '48px', marginTop: '-30px', marginLeft: '70px' }}
// //                         >
// //                             Gujranwala: <br/>The Industrial Heart of Pakistan
// //                         </h1>
// //                     </div>

// //                     {/* About Gujranwala Section Start */}
// //                     <div className="about-invena-large-image" style={{ marginTop: '40px' }}>
// //                         <div className="row">
// //                             <div className="col-lg-12">
// //                                 <div className="large-image-bottm-breadcrumb" style={{ maxHeight: '500px', overflow: 'hidden', borderRadius: '10px' }}>
// //                                     {/* Using standard HTML <img> tag for the main image */}
// //                                     <img 
// //                                         src={GujranwalaImagePath} 
// //                                         alt="Gujranwala" 
// //                                         className="img-fluid" 
// //                                         style={{ objectFit: 'cover', width: '100%', height: '500px', objectPosition: 'top' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* About Content Text */}
// //                         <div className="about-between-wrapper" style={{ marginTop: '90px' }}>
// //                             <p className="disc" style={{ fontSize: '15px' }}>
// //                                 Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities. Popularly known as the City of Wrestlers, it is equally recognized for its strong entrepreneurial culture and thriving manufacturing base. With a population of over 5.3 million, it is the country’s fifth-largest city and a key contributor to Pakistan’s modern urban landscape.
// //                                 <br/>
// //                                 <br/>
// //                                 As Pakistan’s third-largest industrial hub after Karachi and Faisalabad, Gujranwala contributes nearly 7% to the national GDP. It forms part of the highly industrialised north-eastern Punjab economic corridor and, together with Sialkot and Gujrat, makes up the renowned “Golden Triangle” — a powerhouse cluster of export-focused cities that anchor Pakistan’s manufacturing and trade ecosystem.
// //                                 <br/>
// //                                 <br/>
// //                                 The city hosts more than 8,000 small and medium industrial units and over 13,000 cottage industries, collectively employing around half a million workers. Its annual exports exceed USD 2.5 billion, with products from Gujranwala reaching more than 80 countries. The city also contributes approximately PKR 40 billion in annual taxes and saves over USD 3 billion through import substitution — a testament to its industrial strength and global competitiveness.
// //                                 <br/>
// //                                 <br/>
// //                                 Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business, Gujranwala offers a supportive environment for local and international investors. Its diverse industrial portfolio includes ceramics, sanitary fittings, home appliances, pumps and motors, pipes and fittings, automotive parts, plastics, textiles, rice and agro-processing, metal fabrication, cookware, chemicals and detergents, cutlery, paper and board, engineering goods, construction materials, beauty products, and food and beverages.
// //                                 <br/>
// //                                 <br/>
// //                                 Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence - powering Pakistan’s manufacturing backbone and connecting local industries with global markets.
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default GujranwalaAbout;



// // 'use client'
// // import React from 'react';

// // const GujranwalaAbout = () => {
// //     const GujranwalaImagePath = '/images/GBA - Gujranwala Page/Gujranwala.png';
// //     const shapePaths = [
// //         '/images/about/shape/01.png', 
// //         '/images/about/shape/02.png', 
// //         '/images/about/shape/03.png'
// //     ];

// //     return (
// //         <>
            
            
// //             {/* 2. BREADCRUMB AREA */}
// //             <div className="rts-breadcrumb-area">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-lg-12">
// //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// //                                 <span className="bg-title" style={{ marginLeft: '50px' }}>
// //                                     About Us
// //                                 </span>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="shape-area">
// //                     <img src={shapePaths[0]} alt="shape" className="one" />
// //                     <img src={shapePaths[1]} alt="shape" className="two" />
// //                     <img src={shapePaths[2]} alt="shape" className="three" />
// //                 </div>
// //             </div>

// //             {/* 3. ABOUT CONTENT AREA */}
// //             <div className="rts-about-area rts-section-gap"> 
// //                 {/* Keep your Desktop Styles exactly as they were */}
// //                 <div className="container pt--10" style={{ marginTop: '-300px' }}>
// //                     <div style={{ marginTop: '-80px',  marginLeft:'-70px' }}>
// //                         <p 
// //                             className="name" 
// //                             style={{ fontSize: '16px', marginLeft: '80px', marginTop: '50px' }}
// //                         > 
// //                             About Gujranwala
// //                         </p>
// //                         <h1 
// //                             style={{ fontWeight: '800', fontSize: '48px', marginTop: '-30px', marginLeft: '70px' }}
// //                         >
// //                             Gujranwala: <br/>The Industrial Heart of Pakistan
// //                         </h1>
// //                     </div>

// //                     <div className="about-invena-large-image" style={{ marginTop: '40px' }}>
// //                         <div className="row">
// //                             <div className="col-lg-12">
// //                                 <div className="large-image-bottm-breadcrumb" style={{ maxHeight: '500px', overflow: 'hidden', borderRadius: '10px' }}>
// //                                     <img 
// //                                         src={GujranwalaImagePath} 
// //                                         alt="Gujranwala" 
// //                                         className="img-fluid" 
// //                                         style={{ objectFit: 'cover', width: '100%', height: '500px', objectPosition: 'top' }}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="about-between-wrapper" style={{ marginTop: '90px' }}>
// //                             <p className="disc" style={{ fontSize: '15px' }}>
// //                                 Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities. Popularly known as the City of Wrestlers, it is equally recognized for its strong entrepreneurial culture and thriving manufacturing base. With a population of over 5.3 million, it is the country’s fifth-largest city and a key contributor to Pakistan’s modern urban landscape.
// //                                 <br/><br/>
// //                                 As Pakistan’s third-largest industrial hub after Karachi and Faisalabad, Gujranwala contributes nearly 7% to the national GDP. It forms part of the highly industrialised north-eastern Punjab economic corridor and, together with Sialkot and Gujrat, makes up the renowned “Golden Triangle” — a powerhouse cluster of export-focused cities that anchor Pakistan’s manufacturing and trade ecosystem.
// //                                 <br/><br/>
// //                                 The city hosts more than 8,000 small and medium industrial units and over 13,000 cottage industries, collectively employing around half a million workers. Its annual exports exceed USD 2.5 billion, with products from Gujranwala reaching more than 80 countries.
// //                                 <br/><br/>
// //                                 Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business, Gujranwala offers a supportive environment for local and international investors. Its diverse industrial portfolio includes ceramics, sanitary fittings, home appliances, pumps and motors, metal fabrication, cookware, chemicals, and food and beverages.
// //                                 <br/><br/>
// //                                 Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence - powering Pakistan’s manufacturing backbone and connecting local industries with global markets.
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default GujranwalaAbout;

// 'use client'
// import React from 'react';

// const GujranwalaAbout = () => {
//     const GujranwalaImagePath = '/images/GBA - Gujranwala Page/Gujranwala.png';
//     const shapePaths = [
//         '/images/about/shape/01.png', 
//         '/images/about/shape/02.png', 
//         '/images/about/shape/03.png'
//     ];

//     return (
//         <>
//             {/* 2. BREADCRUMB AREA */}
//             <div className="rts-breadcrumb-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 <span className="bg-title breadcrumb-title-custom">
//                                     About Us
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="shape-area">
//                     <img src={shapePaths[0]} alt="shape" className="one" />
//                     <img src={shapePaths[1]} alt="shape" className="two" />
//                     <img src={shapePaths[2]} alt="shape" className="three" />
//                 </div>
//             </div>

//             {/* 3. ABOUT CONTENT AREA */}
//             <div className="rts-about-area rts-section-gap"> 
//                 {/* Main overlap container */}
//                 <div className="container pt--10 main-content-overlap">
                    
//                     {/* Heading block */}
//                     <div className="heading-group-wrapper">
//                         <p className="name sub-title-custom"> 
//                             About Gujranwala
//                         </p>
//                         <h1 className="main-headline-custom">
//                             Gujranwala: <br/>The Industrial Heart of Pakistan
//                         </h1>
//                     </div>

//                     <div className="about-invena-large-image image-section-spacing">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="large-image-bottm-breadcrumb image-container-crop">
//                                     <img 
//                                         src={GujranwalaImagePath} 
//                                         alt="Gujranwala" 
//                                         className="img-fluid main-hero-img" 
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="about-between-wrapper description-spacing">
//                             {/* <p className="disc main-description-text">
//                                 Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities. Popularly known as the City of Wrestlers, it is equally recognized for its strong entrepreneurial culture and thriving manufacturing base. With a population of over 5.3 million, it is the country’s fifth-largest city and a key contributor to Pakistan’s modern urban landscape.
//                                 <br/><br/>
//                                 As Pakistan’s third-largest industrial hub after Karachi and Faisalabad, Gujranwala contributes nearly 7% to the national GDP. It forms part of the highly industrialised north-eastern Punjab economic corridor and, together with Sialkot and Gujrat, makes up the renowned “Golden Triangle” — a powerhouse cluster of export-focused cities that anchor Pakistan’s manufacturing and trade ecosystem.
//                                 <br/><br/>
//                                 The city hosts more than 8,000 small and medium industrial units and over 13,000 cottage industries, collectively employing around half a million workers. Its annual exports exceed USD 2.5 billion, with products from Gujranwala reaching more than 80 countries.
//                                 <br/><br/>
//                                 Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business, Gujranwala offers a supportive environment for local and international investors. Its diverse industrial portfolio includes ceramics, sanitary fittings, home appliances, pumps and motors, metal fabrication, cookware, chemicals, and food and beverages.
//                                 <br/><br/>
//                                 Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence - powering Pakistan’s manufacturing backbone and connecting local industries with global markets.
//                             </p> */}

//                             <p className="disc main-description-text" >
//                                 Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities. Popularly known as the City of Wrestlers, it is equally recognized for its strong entrepreneurial culture and thriving manufacturing base. With a population of over 5.3 million, it is the country’s fifth-largest city and a key contributor to Pakistan’s modern urban landscape.
//                                 <br/><br/>
//                                 As Pakistan’s third-largest industrial hub after Karachi and Faisalabad, Gujranwala contributes nearly 7% to the national GDP. It forms part of the highly industrialised north-eastern Punjab economic corridor and, together with Sialkot and Gujrat, makes up the renowned “Golden Triangle” — a powerhouse cluster of export-focused cities that anchor Pakistan’s manufacturing and trade ecosystem.
//                                 <br/><br/>
//                                 The city hosts more than 8,000 small and medium industrial units and over 13,000 cottage industries, collectively employing around half a million workers. Its annual exports exceed USD 2.5 billion, with products from Gujranwala reaching more than 80 countries.
//                                 <br/><br/>
//                                 Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business, Gujranwala offers a supportive environment for local and international investors. Its diverse industrial portfolio includes ceramics, sanitary fittings, home appliances, pumps and motors, metal fabrication, cookware, chemicals, and food and beverages.
//                                 <br/><br/>
//                                 Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence - powering Pakistan’s manufacturing backbone and connecting local industries with global markets.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* CSS STYLING BLOCK */}
//             <style jsx global>{`
//                 /* --- DESKTOP STYLES (Keeps your original design exactly) --- */
//                 .breadcrumb-title-custom { margin-left: 50px; }
//                 .main-content-overlap { margin-top: -300px; position: relative; }
//                 .heading-group-wrapper { margin-top: -80px; margin-left: -70px; }
//                 .sub-title-custom { font-size: 16px; margin-left: 80px; margin-top: 50px; }
//                 .main-headline-custom { font-weight: 800; font-size: 48px; margin-top: -30px; margin-left: 70px; line-height: 1.2; }
//                 .image-section-spacing { margin-top: 40px; }
//                 .image-container-crop { maxHeight: 500px; overflow: hidden; border-radius: 10px; }
//                 .main-hero-img { object-fit: cover; width: 100%; height: 500px; object-position: top; }
//                 .description-spacing { margin-top: 90px; }
//                 .main-description-text { font-size: 15px; }

//                 /* --- MOBILE RESPONSIVE STYLES (Fixes the cutting issue) --- */
//                 @media (max-width: 768px) {
//                     /* Reset margins so content stays inside the screen */
//                     .main-content-overlap {
//                         margin-top: 0 !important;
//                         padding-left: 15px !important;
//                         padding-right: 15px !important;
//                     }
                    
//                     .heading-group-wrapper, 
//                     .sub-title-custom, 
//                     .main-headline-custom,
//                     .breadcrumb-title-custom {
//                         margin-left: 0 !important;
//                         margin-top: 10px !important;
//                     }

//                     .main-headline-custom {
//                         font-size: 32px !important; /* Smaller text for mobile */
//                         line-height: 1.3;
//                     }

//                     .sub-title-custom {
//                         margin-top: 20px !important;
//                     }

//                     .main-hero-img {
//                         height: 300px !important; /* Adjust image height for mobile */
//                     }

//                     .description-spacing {
//                         margin-top: 40px !important;
//                     }

//                     .image-section-spacing {
//                         margin-top: 20px !important;
//                     }

//                     .rts-breadcrumb-area {
//                         padding-top: 60px !important;
//                         height: auto !important;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default GujranwalaAbout;










// 'use client'
// import React from 'react';

// const GujranwalaAbout = () => {
//   const GujranwalaImagePath = '/images/GBA - Gujranwala Page/Gujranwala.png';
//   const shapePaths = [
//     '/images/about/shape/01.png',
//     '/images/about/shape/02.png',
//     '/images/about/shape/03.png'
//   ];

//   return (
//     <>
//       {/* 2. BREADCRUMB AREA */}
//       <div className="rts-breadcrumb-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left" style={{ textAlign: 'left' }}>
//                 <span className="bg-title breadcrumb-title-custom">
//                   About Us
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shape-area">
//           <img src={shapePaths[0]} alt="shape" className="one" />
//           <img src={shapePaths[1]} alt="shape" className="two" />
//           <img src={shapePaths[2]} alt="shape" className="three" />
//         </div>
//       </div>

//       {/* 3. ABOUT CONTENT AREA */}
//       <div className="rts-about-area rts-section-gap">
//         {/* Main overlap container */}
//         <div className="container pt--10 main-content-overlap">

//           {/* Heading block */}
//           <div className="heading-group-wrapper">
//             <p className="name sub-title-custom">
//               About Gujranwala
//             </p>
//             <h1 className="main-headline-custom">
//               Gujranwala: <br />The Industrial Heart of Pakistan
//             </h1>
//           </div>

//           <div className="about-invena-large-image image-section-spacing">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="large-image-bottm-breadcrumb image-container-crop">
//                   <img
//                     src={GujranwalaImagePath}
//                     alt="Gujranwala"
//                     className="img-fluid main-hero-img"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="about-between-wrapper description-spacing">
//               <p className="disc main-description-text" >
//                 Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities. Popularly known as the City of Wrestlers, it is equally recognized for its strong entrepreneurial culture and thriving manufacturing base. With a population of over 5.3 million, it is the country’s fifth-largest city and a key contributor to Pakistan’s modern urban landscape.
//                 <br /><br />
//                 As Pakistan’s third-largest industrial hub after Karachi and Faisalabad, Gujranwala contributes nearly 7% to the national GDP. It forms part of the highly industrialised north-eastern Punjab economic corridor and, together with Sialkot and Gujrat, makes up the renowned “Golden Triangle” — a powerhouse cluster of export-focused cities that anchor Pakistan’s manufacturing and trade ecosystem.
//                 <br /><br />
//                 The city hosts more than 8,000 small and medium industrial units and over 13,000 cottage industries, collectively employing around half a million workers. Its annual exports exceed USD 2.5 billion, with products from Gujranwala reaching more than 80 countries.
//                 <br /><br />
//                 Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business, Gujranwala offers a supportive environment for local and international investors. Its diverse industrial portfolio includes ceramics, sanitary fittings, home appliances, pumps and motors, metal fabrication, cookware, chemicals, and food and beverages.
//                 <br /><br />
//                 Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence - powering Pakistan’s manufacturing backbone and connecting local industries with global markets.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS STYLING BLOCK */}
//       <style jsx global>{`
//         /* --- DESKTOP STYLES (Keeps your original design exactly) --- */
//         .breadcrumb-title-custom { margin-left: 50px; }

//         /* ✅ ONLY CHANGE: remove extra top grey space by reducing breadcrumb padding */
//         .rts-breadcrumb-area{
//           padding-top: 150px !important;   /* 🔽 was large default -> reduced */
//           padding-bottom: 55px !important;
//           height: auto !important;
//           min-height: unset !important;
//         }

//         /* ✅ ONLY CHANGE: reduce overlap slightly to remove extra grey */
//         .main-content-overlap { margin-top: -180px; position: relative; } /* 🔽 was -300px */

//         .heading-group-wrapper { margin-top: -80px; margin-left: -70px; }
//         .sub-title-custom { font-size: 16px; margin-left: 80px; margin-top: 50px; }
//         .main-headline-custom { font-weight: 800; font-size: 48px; margin-top: -30px; margin-left: 70px; line-height: 1.2; }
//         .image-section-spacing { margin-top: 40px; }
//         .image-container-crop { maxHeight: 500px; overflow: hidden; border-radius: 10px; }
//         .main-hero-img { object-fit: cover; width: 100%; height: 500px; object-position: top; }
//         .description-spacing { margin-top: 90px; }
//         .main-description-text { font-size: 15px; }

//         /* --- MOBILE RESPONSIVE STYLES (same as your code, responsive) --- */
//         @media (max-width: 768px) {
//           .main-content-overlap {
//             margin-top: 0 !important;
//             padding-left: 15px !important;
//             padding-right: 15px !important;
//           }

//           .heading-group-wrapper, 
//           .sub-title-custom, 
//           .main-headline-custom,
//           .breadcrumb-title-custom {
//             margin-left: 0 !important;
//             margin-top: 10px !important;
//           }

//           .main-headline-custom {
//             font-size: 32px !important;
//             line-height: 1.3;
//           }

//           .sub-title-custom {
//             margin-top: 20px !important;
//           }

//           .main-hero-img {
//             height: 300px !important;
//           }

//           .description-spacing {
//             margin-top: 40px !important;
//           }

//           .image-section-spacing {
//             margin-top: 20px !important;
//           }

//           .rts-breadcrumb-area {
//             padding-top: 90px !important;
//             padding-bottom: 10px !important;
//             height: auto !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default GujranwalaAbout;



'use client'
import React from 'react';

const GujranwalaAbout = () => {
  // Image paths for easy management
  const GujranwalaImagePath = '/images/GBA - Gujranwala Page/Gujranwala.png';
  const shapePaths = [
    '/images/about/shape/01.png',
    '/images/about/shape/02.png',
    '/images/about/shape/03.png'
  ];

  return (
    <>
      {/* --- 2. BREADCRUMB AREA (The Grey Header Section) --- */}
      <div className="rts-breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left" style={{ textAlign: 'left' }}>
                {/* Large Background Watermark "About Us" */}
                <span className="bg-title breadcrumb-title-custom">
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Floating background shapes in the header */}
        <div className="shape-area">
          <img src={shapePaths[0]} alt="shape" className="one" />
          <img src={shapePaths[1]} alt="shape" className="two" />
          <img src={shapePaths[2]} alt="shape" className="three" />
        </div>
      </div>

      {/* --- 3. ABOUT CONTENT AREA (Main body of the page) --- */}
      <div className="rts-about-area rts-section-gap">
        {/* main-content-overlap pulls this container up into the breadcrumb area */}
        <div className="container pt--10 main-content-overlap">

          {/* Wrapper for Sub-title and Main Heading */}
          <div className="heading-group-wrapper">
            {/* Small Label "About Gujranwala" */}
            <p className="name sub-title-custom">
              About Gujranwala
            </p>
            {/* Large Hero Title */}
            <h1 className="main-headline-custom">
              Gujranwala: <br />The Industrial Heart of Pakistan
            </h1>
          </div>

          {/* Image Section below the titles */}
          <div className="about-invena-large-image image-section-spacing">
            <div className="row">
              <div className="col-lg-12">
                {/* Container to crop and round the main industrial image */}
                <div className="large-image-bottm-breadcrumb image-container-crop">
                  <img
                    src={GujranwalaImagePath}
                    alt="Gujranwala"
                    className="img-fluid main-hero-img"
                  />
                </div>
              </div>
            </div>

            {/* Description Paragraphs Section */}
            <div className="about-between-wrapper description-spacing">
              <p className="disc main-description-text" >
                Gujranwala, located in Punjab, is one of Pakistan’s most dynamic and industrially driven cities...
                <br /><br />
                As Pakistan’s third-largest industrial hub... together with Sialkot and Gujrat, makes up the renowned “Golden Triangle”...
                <br /><br />
                The city hosts more than 8,000 small and medium industrial units...
                <br /><br />
                Recognized by the World Bank as the 6th best city in Pakistan for ease of doing business...
                <br /><br />
                Driven by quality, affordability, and innovation, Gujranwala continues to solidify its position as a centre of industrial excellence...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS STYLING BLOCK --- */}
      <style jsx global>{`
        /* --- DESKTOP STYLES --- */
        
        /* Sets the horizontal position of the background watermark */
        .breadcrumb-title-custom { margin-left: 50px; }

        /* Controls the size and vertical spacing of the top grey header */
        .rts-breadcrumb-area{
          padding-top: 150px !important;   /* Space from the top of the browser */
          padding-bottom: 55px !important; /* Space before the white section starts */
          height: auto !important;
          min-height: unset !important;
        }

        /* Essential for "Negative Margin" - pulls the content up into the grey breadcrumb area */
        .main-content-overlap { 
          margin-top: -180px; 
          position: relative; 
        }

        /* Positions the title/subtitle block relative to the watermark */
        .heading-group-wrapper { margin-top: -80px; margin-left: -70px; }
        
        /* Small 'About Gujranwala' text styling */
        .sub-title-custom { font-size: 16px; margin-left: 80px; margin-top: 50px; }
        
        /* Main Heading styling (Bold and Large) */
        .main-headline-custom { 
          font-weight: 800; 
          font-size: 48px; 
          margin-top: -30px; 
          margin-left: 70px; 
          line-height: 1.2; 
        }

        /* Adds breathing room between titles and the large image */
        .image-section-spacing { margin-top: 40px; }
        
        /* Crops the image container so the image doesn't overflow */
        .image-container-crop { maxHeight: 500px; overflow: hidden; border-radius: 10px; }
        
        /* Ensures the hero image covers its area nicely without stretching */
        .main-hero-img { object-fit: cover; width: 100%; height: 500px; object-position: top; }
        
        /* Spacing between the hero image and the long description text */
        .description-spacing { margin-top: 90px; }
        
        /* Font size for the main body text */
        .main-description-text { font-size: 15px; }

        /* --- MOBILE RESPONSIVE STYLES (Applies to screens smaller than 768px) --- */
        @media (max-width: 768px) {
          /* Disables the overlap so text doesn't hide under the header on small screens */
          .main-content-overlap {
            margin-top: 0 !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          /* Resets all left margins to zero for a clean mobile stack */
          .heading-group-wrapper, 
          .sub-title-custom, 
          .main-headline-custom,
          .breadcrumb-title-custom {
            margin-left: 0 !important;
            margin-top: 10px !important;
          }

          /* Shrinks the main title font size for mobile screens */
          .main-headline-custom {
            font-size: 32px !important;
            line-height: 1.3;
          }

          /* Adjusts spacing between elements for smaller viewports */
          .sub-title-custom {
            margin-top: 20px !important;
          }

          /* Reduces image height so it doesn't take the whole screen on mobile */
          .main-hero-img {
            height: 300px !important;
          }

          /* Reduces spacing gaps to save space on mobile */
          .description-spacing {
            margin-top: 40px !important;
          }

          .image-section-spacing {
            margin-top: 20px !important;
          }

          /* Shrinks the header height on mobile */
          .rts-breadcrumb-area {
            padding-top: 90px !important;
            padding-bottom: 10px !important;
            height: auto !important;
          }
        }
      `}</style>




      
    </>
  );
};

export default GujranwalaAbout;