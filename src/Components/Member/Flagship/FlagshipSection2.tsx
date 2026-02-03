

// "use client";

// export default function FlagshipIntro() {
//   return (
//     <div className="rts-service-details-area-main-bottom members-intro-section pt--50 pb--80">
//       <style>
//         {`
//           .members-left-title {
//             font-size: 32px;
//             font-weight: 700;
//             line-height: 1.3;
//             color: #000;
//             margin-bottom: 20px;
//           }
//           .members-right-text {
//             font-size: 16px;
//             line-height: 1.8;
//             color: #333;
//             max-width: 650px;
//           }
//           .members-intro-section {
//             margin-top: 40px;
//           }
//         `}
//       </style>

//       <div className="container">
//         <div className="row align-items-start">

//           <div className="col-xl-5 col-lg-5 col-md-12">
//             <h2 className="members-left-title">
//               Building the Future: <br /> GBA Flagship Initiatives
//             </h2>
//           </div>

//           <div className="col-xl-7 col-lg-7 col-md-12">
//             <p className="members-right-text" style={{ fontSize: "15px" }}>
//              The Gujranwala Business Alliance (GBA) leads a diverse portfolio of flagship programs designed to strengthen global connectivity, accelerate industrial innovation, and empower the region’s business ecosystem. These initiatives span international trade, technology, research, leadership development, entrepreneurship, academic collaboration, and community uplift - reflecting GBA’s commitment to building a globally competitive and future-ready Gujranwala. From international trade facilitation platforms and export display centres to innovation gateways, growth windows, training programs, leadership incubation, and industry-academia collaboration, each initiative plays a strategic role in unlocking new opportunities for businesses, youth, and the wider community. Together, these programs form the backbone of GBA’s mission - connecting Gujranwala with the world, fostering sustainable economic development, and shaping a stronger, more globally integrated industrial landscape.
//                 </p>
           
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

export default function FlagshipIntro() {
  return (
    <div className="rts-service-details-area-main-bottom flagship-intro-section pt--50 pb--80">
      <div className="box-view-container"> {/* Container replaced with box-view-container */}
        <div className="row align-items-start">
          
          <div className="col-xl-5 col-lg-5 col-md-12">
            <h2 className="flagship-left-title">
              Building the Future: <br /> GBA Flagship Initiatives
            </h2>
          </div>

          <div className="col-xl-7 col-lg-7 col-md-12">
            <p className="flagship-right-text">
              The Gujranwala Business Alliance (GBA) leads a diverse portfolio of flagship programs designed to strengthen global connectivity, accelerate industrial innovation, and empower the region’s business ecosystem. These initiatives span international trade, technology, research, leadership development, entrepreneurship, academic collaboration, and community uplift - reflecting GBA’s commitment to building a globally competitive and future-ready Gujranwala. From international trade facilitation platforms and export display centres to innovation gateways, growth windows, training programs, leadership incubation, and industry-academia collaboration, each initiative plays a strategic role in unlocking new opportunities for businesses, youth, and the wider community. Together, these programs form the backbone of GBA’s mission - connecting Gujranwala with the world, fostering sustainable economic development, and shaping a stronger, more globally integrated industrial landscape.
            </p>
          </div>

        </div>
      </div>

      <style jsx global>{`
        /* --- BOX VIEW CORE --- */
        .box-view-container {
          max-width: 1100px;//1200
          margin: 0 auto;
          width: 100%;
          padding: 0 15px;
        }

        .flagship-left-title {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          color: #000;
          margin-bottom: 20px;
        }

        .flagship-right-text {
          font-size: 15px;
          line-height: 1.8;
          color: #333;
          max-width: 100%;
          text-align: justify;
        }

        .flagship-intro-section {
          margin-top: 40px;
        }

        /* --- MOBILE VIEW (UNTOUCHED) --- */
        @media (max-width: 768px) {
          .box-view-container {
            max-width: 100% !important;
          }
          .flagship-left-title {
            font-size: 26px;
            margin-bottom: 15px;
          }
          .flagship-right-text {
            font-size: 14.5px;
          }
          .flagship-intro-section {
            margin-top: 20px;
            padding-bottom: 40px !important;
          }
        }
          /* Mobile View Adjustment */
@media (max-width: 768px) {
  .box-view-container {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .flagship-right-text, 
  .members-right-text, 
  .chairman-description {
    /* 'justify' ki wajah se jo gap aata hai wo 'left' se theek ho jayega */
    text-align: left !important; 
    margin-top: 10px !important;
    padding: 0 !important;
    word-spacing: normal !important; /* Extra spacing khatam karne ke liye */
    line-height: 1.7 !important;//1.5 km
  }

  /* Agar columns ke darmiyan gap hai to */
  .row {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
  
  .col-md-12 {
    padding-bottom: 10px !important;
    margin-bottom: 0 !important;
  }
}
      `}</style>
    </div>
  );
}