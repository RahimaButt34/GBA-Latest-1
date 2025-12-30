





// // // 'use client';
// // // import React from 'react';

// // // export default function SubscribeCTA() {
// // //   return (
// // //     <>
// // //       {/* ---------------------------------------------------------------------- */}
// // //       {/* 1. EMBEDDED CSS for Background Image (MUST BE UPDATED with your image path) */}
// // //       {/* ---------------------------------------------------------------------- */}
// // //       <style jsx global>{`
// // //         /* * FIX: Ensuring the background image scales correctly across all screens/zoom levels.
// // //          * IMPORTANT: You must replace 'YOUR_BACKGROUND_IMAGE_URL_HERE' with the actual path to your image.
// // //          */
// // //         .bg_image {
// // //           /* Placeholder for your actual image */
         
// // //           background-size: cover; /* **KEY CHANGE**: Ensures the background covers the entire element */
// // //           background-position: center center; /* Centers the background image */
// // //           background-repeat: no-repeat; /* Prevents tiling */
// // //           /* Setting min-height can also help if the content is short */
// // //           min-height: 250px; 
// // //           display: flex; /* Ensures the content inside is centered properly if needed */
// // //           align-items: center;
// // //           justify-content: center;
// // //           width: 100%;
// // //         }

// // //         /* * Existing styles for the component (optional, but good practice to include 
// // //          * if they are defined globally/externally).
// // //          * This ensures the CTA content is visible over the background.
// // //          */
// // //         .cta-inner-content-inner-page {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           padding: 30px; /* Example padding */
// // //           border-radius: 8px; /* Example border radius */
// // //           /* Add necessary text color for contrast if the background is dark */
// // //           color: #ffffff; 
// // //         }

// // //         /* Responsive adjustments for mobile screens */
// // //         @media (max-width: 768px) {
// // //           .cta-inner-content-inner-page {
// // //             flex-direction: column; /* Stacks content vertically */
// // //             text-align: center;
// // //           }
// // //           .left-side-content {
// // //             margin-bottom: 20px;
// // //           }
// // //           .title {
// // //             font-size: 24px !important;
// // //           }
// // //           .bg_image {
// // //             padding: 50px 0;
// // //             /* Adjust min-height for mobile if needed */
// // //             min-height: auto; 
// // //           }
// // //         }
// // //       `}</style>

// // //       {/* ---------------------------------------------------------------------- */}
// // //       {/* 2. SUBSCRIBE CTA SECTION */}
// // //       {/* ---------------------------------------------------------------------- */}
// // //       <div className="rts-cta-area-inner bg_image ptb--100">
// // //         <div className="container">
// // //           <div className="row">
// // //             <div className="col-lg-12">
// // //               <div className="cta-inner-content-inner-page">
// // //                 <div className="left-side-content">
// // //                   <span>Subscribe Newsletter</span>
// // //                   <h3 className="title">
// // //                     Stay Updated with <br /> the Latest News!
// // //                   </h3>
// // //                 </div>

// // //                 <form action="#">
// // //                   <input type="text" placeholder="Enter Email Address" />
// // //                   <button className="rts-btn btn-primary btn-white">
// // //                     Subscribe Now
// // //                   </button>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }


// // 'use client';
// // import React from 'react';

// // export default function SubscribeCTA() {
// //   return (
// //     <>
// //       <style jsx global>{`
// //         /* 1. FORCE FULL WIDTH (The fix for white gaps on the sides) */
// //         .full-width-section {
// //           width: 100vw !important;
// //           position: relative;
// //           left: 50%;
// //           right: 50%;
// //           margin-left: -50vw;
// //           margin-right: -50vw;
// //           box-sizing: border-box;
          
// //           /* BACKGROUND CLARITY */
// //           background-image: url('/images/cta/09.webp');
// //           background-size: cover;
// //           background-position: center;
// //           background-repeat: no-repeat;
// //           padding: 80px 0;
// //           overflow: hidden;

// //           /* SHINY ENDS: Neon glowing borders */
// //           border-top: 2px solid rgba(0, 212, 255, 0.7);
// //           border-bottom: 2px solid rgba(0, 212, 255, 0.7);
// //           box-shadow: 
// //             inset 0 0 80px rgba(0, 212, 255, 0.2), 
// //             0 0 20px rgba(0, 212, 255, 0.3);
// //         }

// //         /* 2. OVERLAY FOR TEXT READABILITY */
// //         .shiny-overlay {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%);
// //           z-index: 1;
// //         }

// //         /* 3. FORM STYLING (The "Glass" Look) */
// //         .glass-form {
// //           display: flex;
// //           align-items: center;
// //           background: rgba(255, 255, 255, 0.08);
// //           border: 1px solid rgba(255, 255, 255, 0.2);
// //           border-radius: 100px;
// //           padding: 8px 8px 8px 25px;
// //           backdrop-filter: blur(15px);
// //           width: 100%;
// //           max-width: 550px;
// //           box-shadow: 0 10px 30px rgba(0,0,0,0.3);
// //         }

// //         .glass-form input {
// //           background: transparent;
// //           border: none;
// //           color: white;
// //           flex: 1;
// //           outline: none;
// //           font-size: 16px;
// //         }

// //         .shiny-btn {
// //           background: linear-gradient(90deg, #00d4ff, #0077b6);
// //           border: none;
// //           border-radius: 100px;
// //           padding: 15px 35px;
// //           color: white;
// //           font-weight: 700;
// //           cursor: pointer;
// //           box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
// //         }

// //         @media (max-width: 991px) {
// //           .cta-inner-content-inner-page {
// //             flex-direction: column;
// //             text-align: center;
// //             gap: 30px;
// //           }
// //         }
// //       `}</style>

// //       <div className="full-width-section">
// //         <div className="shiny-overlay"></div>

// //         <div className="container" style={{ position: 'relative', zIndex: 2 }}>
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="cta-inner-content-inner-page" style={{ 
// //                 display: 'flex', 
// //                 justifyContent: 'space-between', 
// //                 alignItems: 'center' 
// //               }}>
// //                 <div className="left-side-content">
// //                   <span style={{ color: '#00d4ff', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
// //                     Subscribe Newsletter
// //                   </span>
// //                   <h3 className="title" style={{ color: '#ffffff', fontSize: '38px', marginTop: '10px' }}>
// //                     Stay Updated with <br /> the Latest News!
// //                   </h3>
// //                 </div>

// //                 <form className="glass-form" action="#">
// //                   <input type="email" placeholder="Enter Email Address" />
// //                   <button type="submit" className="shiny-btn">
// //                     Subscribe Now
// //                   </button>
// //                 </form>

// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }




// 'use client'


// export default function SubscribeCTA() {
//   return (
//     <div className="rts-cta-area-inner bg_image ptb--100">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="cta-inner-content-inner-page">
//               <div className="left-side-content">
//                 <span>Subscribe Newsletter</span>
//                 <h3 className="title">
//                   Stay Updated with <br /> the Latest News!
//                 </h3>
//               </div>

//               <form action="#">
//                 <input type="text" placeholder="Enter Email Address" />
//                 <button className="rts-btn btn-primary btn-white">
//                   Subscribe Now
//                 </button>
//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>
//                 {`
            
                        

//                         .working-process-bg {
//                     background-position: center center;
//                 background-repeat: no-repeat;
//                 background-size: 100% 100%; /* This is the key part */
// }
                       
//                 `}
//             </style>
//     </div>
    
//   );
// }




// 'use client';

// import React from 'react';

// const NewsletterCTA: React.FC = () => {
//     // Handling form submission
//     const handleSubscribe = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Add your subscription logic here
//         console.log("Subscription submitted");
//     };

//     return (
//         /* rts cta area start */
//         <div className="rts-cts-area-start bg_cts-10 bg_iamge ptb--95 mt--160">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="cta-style-10-wrapper">
//                             <div className="left-side">
//                                 <span>Subscribe Newsletter</span>
//                                 <h3 className="title" >
//                                     Stay Updated with <br /> the Latest News!
//                                 </h3>
//                             </div>
//                             <div className="right-side">
//                                 <form onSubmit={handleSubscribe}>
//                                     <input 
//                                         style={{ color: 'white' }} 
//                                         type="email" 
//                                         placeholder="Enter Email Address" 
//                                         required 
//                                     />
//                                     <button 
//                                         type="submit" 
//                                         className="rts-btn btn-primary btn-white"
//                                     >
//                                         Subscribe Now
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewsletterCTA;


























'use client';

import React from 'react';

const NewsletterCTA: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription submitted");
  };

  return (
    <div className="rts-cts-area-start bg_cts-10 bg_iamge ptb--95 mt--160">
      
      {/* ✅ STYLE TAG (sirf placeholder responsiveness) */}
      <style jsx global>{`
        /* Desktop */
        .cta-style-10-wrapper input::placeholder {
          font-size: 16px;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .cta-style-10-wrapper input::placeholder {
            font-size: 5px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cta-style-10-wrapper input::placeholder {
            font-size: 14px;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .cta-style-10-wrapper input::placeholder {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-style-10-wrapper">
              <div className="left-side">
                <span>Subscribe Newsletter</span>
                <h3 className="title">
                  Stay Updated with <br /> the Latest News!
                </h3>
              </div>
              <div className="right-side">
                <form onSubmit={handleSubscribe}>
                  <input
                    style={{ color: 'white' }}
                    type="email"
                    placeholder="Enter Email Address"
                    required
                  />
                  <button
                    type="submit"
                    className="rts-btn btn-primary btn-white"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;
