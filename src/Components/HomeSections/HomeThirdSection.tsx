


// // // // // import React from 'react';

// // // // // // Define the paths for the individual logo images
// // // // // const brandLogos = [
// // // // //   '/images/brand/01.webp',
// // // // //   '/images/brand/02.webp',
// // // // //   '/images/brand/03.webp',
// // // // //   '/images/brand/04.webp',
// // // // //   '/images/brand/05.webp',
// // // // //   '/images/brand/06.webp',
// // // // // ];

// // // // // interface ClientAreaProps {}

// // // // // const ClientArea: React.FC<ClientAreaProps> = () => {
// // // // //   // Image path relative to the 'public' directory for the background
// // // // //   const backgroundImagePath = '/images/brand/bg.webp';

// // // // //   return (
// // // // //     <div
// // // // //       className="rts-client-area ptb--100 brand-bg-three bg_image"
// // // // //       style={{
// // // // //         backgroundImage: `url(${backgroundImagePath})`,
// // // // //         backgroundSize: 'cover',
// // // // //         backgroundPosition: 'center',
// // // // //         backgroundRepeat: 'no-repeat',
// // // // //       }}
// // // // //     >
// // // // //       <div className="container">
// // // // //         <div className="row">
// // // // //           <div className="col-lg-12">
// // // // //             <div className="client-three-wrapper">
// // // // //               {/* Map over the logo paths to render each logo */}
// // // // //               {brandLogos.map((src, index) => (
// // // // //                 <div key={index} className="single">
// // // // //                   <img 
// // // // //                     src={src} 
// // // // //                     alt={`Business_client ${index + 1}`} 
// // // // //                   />
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* NOTE: The inline <style> block has been removed from the component.
// // // // //         In a Next.js project, you should move this CSS into your global 
// // // // //         stylesheet (e.g., globals.css) or a CSS Module. 
// // // // //       */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ClientArea;

// // // // import React from 'react';

// // // // const brandLogos = [
// // // //   '/images/brand/01.webp',
// // // //   '/images/brand/02.webp',
// // // //   '/images/brand/03.webp',
// // // //   '/images/brand/04.webp',
// // // //   '/images/brand/05.webp',
// // // //   '/images/brand/06.webp',
// // // // ];

// // // // const ClientArea: React.FC = () => {
// // // //   const backgroundImagePath = '/images/brand/bg.webp';

// // // //   return (
// // // //     <>
// // // //       <style dangerouslySetInnerHTML={{ __html: `
// // // //         .rts-client-area {
// // // //           min-height: 300px; /* Adjust height to match your design */
// // // //           display: flex;
// // // //           align-items: flex-end; /* Pushes content to the bottom/downside */
// // // //           padding-bottom: 50px;  /* Spacing from the very bottom edge */
// // // //           background-size: cover;
// // // //           background-position: center;
// // // //           background-repeat: no-repeat;
// // // //         }

// // // //         .client-three-wrapper {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center; /* Centers logos horizontally */
// // // //           flex-wrap: nowrap;       /* Keeps them in one row for desktop */
// // // //           gap: 40px;               /* Space between logos */
// // // //           width: 100%;
// // // //         }

// // // //         .single img {
// // // //           max-width: 140px; 
// // // //           height: auto;
// // // //           display: block;
// // // //           opacity: 0.8;
// // // //           transition: 0.3s;
// // // //         }

// // // //         .single img:hover {
// // // //           opacity: 1;
// // // //           transform: translateY(-5px);
// // // //         }

// // // //         /* --- Mobile Responsiveness --- */
// // // //         @media (max-width: 991px) {
// // // //           .client-three-wrapper {
// // // //             flex-wrap: wrap;       /* Allows wrapping on tablets/phones */
// // // //             justify-content: center;
// // // //             gap: 20px;
// // // //           }
          
// // // //           .single img {
// // // //             max-width: 110px;      /* Smaller logos on mobile */
// // // //           }

// // // //           .rts-client-area {
// // // //             padding-top: 80px;     /* More top space on mobile */
// // // //             align-items: center;   /* Center vertically on mobile for better fit */
// // // //           }
// // // //         }

// // // //         @media (max-width: 480px) {
// // // //           .client-three-wrapper {
// // // //             gap: 15px;
// // // //           }
// // // //           .single img {
// // // //             max-width: 90px;
// // // //           }
// // // //         }
// // // //       `}} />

// // // //       <div
// // // //         className="rts-client-area brand-bg-three bg_image"
// // // //         style={{ backgroundImage: `url(${backgroundImagePath})` }}
// // // //       >
// // // //         <div className="container">
// // // //           <div className="row">
// // // //             <div className="col-lg-12">
// // // //               <div className="client-three-wrapper">
// // // //                 {brandLogos.map((src, index) => (
// // // //                   <div key={index} className="single">
// // // //                     <img 
// // // //                       src={src} 
// // // //                       alt={`Business_client ${index + 1}`} 
// // // //                     />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ClientArea;



// // // import React from 'react';

// // // const brandLogos = [
// // //   '/images/brand/01.webp',
// // //   '/images/brand/02.webp',
// // //   '/images/brand/03.webp',
// // //   '/images/brand/04.webp',
// // //   '/images/brand/05.webp',
// // //   '/images/brand/06.webp',
// // // ];

// // // const ClientArea: React.FC = () => {
// // //   const backgroundImagePath = '/images/brand/bg.webp';

// // //   return (
// // //     <>
// // //       <style dangerouslySetInnerHTML={{ __html: `
// // //         .rts-client-area {
// // //           width: 100%;
// // //           /* Increase height so logos aren't cut off */
// // //           min-height: 200px; 
// // //           display: flex;
// // //           align-items: center;    /* Vertical Center */
// // //           justify-content: center; /* Horizontal Center */
// // //           background-size: cover;
// // //           background-position: center;
// // //           background-repeat: no-repeat;
// // //           padding: 40px 0;         /* Ensures space top and bottom */
// // //         }

// // //         .client-three-wrapper {
// // //           display: flex;
// // //           justify-content: center; 
// // //           align-items: center;
// // //           flex-wrap: nowrap;       /* Force one single row */
// // //           gap: 40px;               /* Space between logos */
// // //           width: 100%;
// // //           max-width: 1200px;       /* Keeps logos from spreading too far */
// // //           margin: 0 auto;
// // //         }

// // //         .single {
// // //           flex: 0 0 auto;
// // //           display: flex;
// // //           justify-content: center;
// // //         }

// // //         .single img {
// // //           max-width: 150px;       /* Size to match Pic 2 */
// // //           height: auto;
// // //           object-fit: contain;
// // //           display: block;
// // //         }

// // //         /* --- Mobile Responsiveness --- */
// // //         @media (max-width: 1024px) {
// // //           .client-three-wrapper {
// // //             gap: 20px;
// // //             padding: 0 20px;
// // //             overflow-x: auto; /* Allow swipe on mobile so they stay in one row */
// // //             justify-content: flex-start; 
// // //             scrollbar-width: none; /* Hide scrollbar Firefox */
// // //           }
          
// // //           .client-three-wrapper::-webkit-scrollbar {
// // //             display: none; /* Hide scrollbar Chrome/Safari */
// // //           }

// // //           .single img {
// // //             max-width: 100px; /* Smaller logos for mobile */
// // //           }
          
// // //           .rts-client-area {
// // //             min-height: 150px;
// // //           }
// // //         }
// // //       `}} />

// // //       <div
// // //         className="rts-client-area brand-bg-three bg_image"
// // //         style={{ backgroundImage: `url(${backgroundImagePath})` }}
// // //       >
// // //         <div className="container">
// // //           <div className="row">
// // //             <div className="col-lg-12">
// // //               <div className="client-three-wrapper">
// // //                 {brandLogos.map((src, index) => (
// // //                   <div key={index} className="single">
// // //                     <img 
// // //                       src={src} 
// // //                       alt={`Business_client ${index + 1}`} 
// // //                     />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ClientArea;



// // import React from 'react';

// // const brandLogos = [
// //   '/images/brand/01.webp',
// //   '/images/brand/02.webp',
// //   '/images/brand/03.webp',
// //   '/images/brand/04.webp',
// //   '/images/brand/05.webp',
// //   '/images/brand/06.webp',
// // ];

// // const ClientArea: React.FC = () => {
// //   // Ensure this path is correct in your public folder
// //   const backgroundImagePath = '/images/brand/bg.webp';

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: `
// //         .rts-client-area {
// //           width: 100%;
// //           /* This increases the white/textured area height */
// //           padding: 100px 0; 
// //           min-height: 300px; 
          
// //           display: flex;
// //           align-items: center; 
// //           justify-content: center;
          
// //           /* This makes the background image visible behind logos */
// //           background-size: cover;
// //           background-position: center;
// //           background-repeat: no-repeat;
// //           background-color: #f9f9f9; /* Fallback light color */
// //           position: relative;
// //         }

// //         .client-three-wrapper {
// //           display: flex;
// //           justify-content: center; 
// //           align-items: center;
// //           flex-wrap: nowrap; /* Keeps all logos in one row */
// //           gap: 60px; /* Space between logos */
// //           width: 100%;
// //           max-width: 1200px;
// //           margin: 0 auto;
// //           z-index: 2;
// //         }

// //         .single {
// //           flex: 0 0 auto;
// //           transition: transform 0.3s ease;
// //         }

// //         .single:hover {
// //           transform: translateY(-5px);
// //         }

// //         .single img {
// //           max-width: 150px; 
// //           height: auto;
// //           display: block;
// //           object-fit: contain;
// //           /* If your logos have white backgrounds, this makes them blend in */
// //           mix-blend-mode: multiply; 
// //         }

// //         /* --- Mobile Responsive --- */
// //         @media (max-width: 991px) {
// //           .rts-client-area {
// //             padding: 60px 0;
// //           }
// //           .client-three-wrapper {
// //             gap: 30px;
// //             overflow-x: auto; /* Swiping for mobile */
// //             justify-content: flex-start;
// //             padding: 0 40px 20px;
// //             scrollbar-width: none;
// //           }
// //           .client-three-wrapper::-webkit-scrollbar {
// //             display: none;
// //           }
// //           .single img {
// //             max-width: 110px;
// //           }
// //         }
// //       `}} />

// //       <div
// //         className="rts-client-area"
// //         style={{ backgroundImage: `url(${backgroundImagePath})` }}
// //       >
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="client-three-wrapper">
// //                 {brandLogos.map((src, index) => (
// //                   <div key={index} className="single">
// //                     <img 
// //                       src={src} 
// //                       alt={`Client Logo ${index + 1}`} 
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ClientArea;


// // import React from 'react';

// // const brandLogos = [
// //   '/images/brand/01.webp',
// //   '/images/brand/02.webp',
// //   '/images/brand/03.webp',
// //   '/images/brand/04.webp',
// //   '/images/brand/05.webp',
// //   '/images/brand/06.webp',
// // ];

// // const ClientArea: React.FC = () => {
// //   const backgroundImagePath = '/images/brand/bg.webp';

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: `
// //         .rts-client-area {
// //           width: 100%;
// //           /* Ye padding white area ki width (height) barhayegi */
// //           padding: 100px 0; 
// //           display: flex;
// //           align-items: center;    /* Logos ko vertical center karega */
// //           justify-content: center; /* Logos ko horizontal center karega */
// //           background-size: cover;
// //           background-position: center;
// //           background-repeat: no-repeat;
// //           position: relative;
// //         }

// //         .client-three-wrapper {
// //           display: flex;
// //           justify-content: center; 
// //           align-items: center;
// //           flex-wrap: nowrap;       /* Logos ko ek hi line mein rakhega */
// //           gap: 40px;               /* Logos ke darmiyan space */
// //           width: 100%;
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }

// //         .single {
// //           flex: 0 0 auto;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }

// //         .single img {
// //           max-width: 160px;        /* Logo size adjusted to match prototype */
// //           height: auto;
// //           display: block;
// //           transition: transform 0.3s ease;
// //         }

// //         .single img:hover {
// //           transform: scale(1.05);  /* Subtle hover effect */
// //         }

// //         /* --- Mobile View Responsiveness --- */
// //         @media (max-width: 991px) {
// //           .rts-client-area {
// //             padding: 60px 0;      /* Mobile par white area thora kam */
// //           }
// //           .client-three-wrapper {
// //             gap: 20px;
// //             overflow-x: auto;     /* Mobile par scrollable row */
// //             justify-content: flex-start;
// //             padding: 0 20px 10px;
// //             scrollbar-width: none;
// //           }
// //           .client-three-wrapper::-webkit-scrollbar {
// //             display: none;
// //           }
// //           .single img {
// //             max-width: 110px;
// //           }
// //         }
// //       `}} />

// //       <div
// //         className="rts-client-area brand-bg-three bg_image"
// //         style={{ backgroundImage: `url(${backgroundImagePath})` }}
// //       >
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="client-three-wrapper">
// //                 {brandLogos.map((src, index) => (
// //                   <div key={index} className="single">
// //                     <img 
// //                       src={src} 
// //                       alt={`Client Logo ${index + 1}`} 
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ClientArea;


// 'use client';
// import React from 'react';

// const brandLogos = [
//   '/images/brand/01.webp',
//   '/images/brand/02.webp',
//   '/images/brand/03.webp',
//   '/images/brand/04.webp',
//   '/images/brand/05.webp',
//   '/images/brand/06.webp',
// ];

// const ClientArea: React.FC = () => {
//   const backgroundImagePath = '/images/brand/bg.webp';

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         .rts-client-area {
//           width: 100%;
//           padding: 100px 0; 
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           position: relative;
//         }

//         /* --- Desktop View: Ek line mein (Pic 2 ki tarah) --- */
//         .client-three-wrapper {
//           display: flex;
//           justify-content: center; 
//           align-items: center;
//           flex-wrap: nowrap;        /* Logos ko ek hi line mein rakhega */
//           gap: 40px;                /* Logos ke darmiyan desktop space */
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .single {
//           flex: 0 0 auto;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .single img {
//           max-width: 160px;
//           height: auto;
//           display: block;
//           transition: transform 0.3s ease;
//         }

//         .single img:hover {
//           transform: scale(1.05);
//         }

//         /* --- Mobile & Tablet View: Responsive (Grid style) --- */
//         @media (max-width: 1199px) {
//             .client-three-wrapper {
//                 gap: 30px;
//                 padding: 0 20px;
//             }
//             .single img {
//                 max-width: 130px;
//             }
//         }

//         @media (max-width: 991px) {
//           .rts-client-area {
//             padding: 60px 0;
//           }
//           .client-three-wrapper {
//             flex-wrap: wrap;       /* Mobile par logos niche shift honge */
//             gap: 25px;
//             justify-content: center;
//           }
//           .single {
//             flex: 0 0 30%;         /* Tablet par 3 logos per row */
//           }
//           .single img {
//             max-width: 110px;
//           }
//         }

//         @media (max-width: 576px) {
//           .client-three-wrapper {
//             gap: 20px;
//           }
//           .single {
//             flex: 0 0 42%;         /* Mobile par 2 logos per row */
//           }
//           .single img {
//             max-width: 100px;
//           }
//         }
//       `}} />

//       <div
//         className="rts-client-area brand-bg-three bg_image"
//         style={{ backgroundImage: `url(${backgroundImagePath})` }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="client-three-wrapper">
//                 {brandLogos.map((src, index) => (
//                   <div key={index} className="single">
//                     <img 
//                       src={src} 
//                       alt={`Client Logo ${index + 1}`} 
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientArea;

'use client';
import React from 'react';

const brandLogos = [
  '/images/brand/01.webp',
  '/images/brand/02.webp',
  '/images/brand/03.webp',
  '/images/brand/04.webp',
  '/images/brand/05.webp',
  '/images/brand/06.webp',
];

const ClientArea: React.FC = () => {
  const backgroundImagePath = '/images/brand/bg.webp';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .rts-client-area {
          width: 100%;
          padding: 80px 0; 
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        /* --- Desktop View: Spacing and Smaller Divs (Pic 2 Style) --- */
        .client-three-wrapper {
          display: flex;
          justify-content: center; 
          align-items: center;
          flex-wrap: nowrap;        
          gap: 30px;                /* Logos ke darmiyan gap */
          width: 90%;               /* Left aur Right se space chorne ke liye */
          max-width: 1100px;        /* Container ko thoda narrow kiya hai */
          margin: 0 auto;
          padding: 0 40px;          /* Inner side spacing */
        }

        .single {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;      /* Logo ka box white */
          padding: 15px 25px;       /* Box ke andar padding */
          border-radius: 8px;       /* Rounded corners */
          box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Light shadow for prototype look */
        }

        .single img {
          max-width: 120px;         /* Logo size thoda chota kiya (Prototype look) */
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .single img:hover {
          transform: scale(1.08);
        }

        /* --- Mobile View: Still Responsive --- */
        @media (max-width: 991px) {
          .client-three-wrapper {
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            padding: 0 20px;
            gap: 15px;
          }
          .single {
            flex: 0 0 30%;         /* 3 logos per row on tablet */
            padding: 10px 15px;
          }
          .single img {
            max-width: 90px;
          }
        }

        @media (max-width: 576px) {
          .single {
            flex: 0 0 42%;         /* 2 logos per row on mobile */
          }
          .single img {
            max-width: 80px;
          }
        }
      `}} />

      <div
        className="rts-client-area brand-bg-three bg_image"
        style={{ backgroundImage: `url(${backgroundImagePath})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client-three-wrapper">
                {brandLogos.map((src, index) => (
                  <div key={index} className="single">
                    <img 
                      src={src} 
                      alt={`Client Logo ${index + 1}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientArea;