
// // //import HomeFirstSection from "../Components/HomeSections/HomeFirstSection";
// // import HomeSecondSection from "../Components/HomeSections/HomeSecondSection";
// // //import HomeThirdSection from "../Components/HomeSections/HomeThirdSection";
// // import HomeFourthSection from "../Components/HomeSections/HomeFourthSection";
// // import HomeFifthSection from "../Components/HomeSections/HomeFifthSection";
// // import ServicesSection from "../Components/HomeSections/ServicesSection";


// // export default function Home() {
// //   return (
// //     <>
// //       {/* <HomeFirstSection /> */}
// //       <HomeSecondSection />
// //       <ServicesSection />
// //       {/* <HomeThirdSection /> */}
// //       <HomeFourthSection />
// //       <HomeFifthSection />
      
// //     </>
// //   );
// // }


// // pages/index.tsx or app/page.tsx

// import HomeSecondSection from "../Components/HomeSections/HomeSecondSection";
// import HomeThirdSection from "../Components/HomeSections/HomeThirdSection";
// import HomeFourthSection from "../Components/HomeSections/HomeFourthSection";
// import HomeFifthSection from "../Components/HomeSections/HomeFifthSection";
// import ServicesSection from "../Components/HomeSections/ServicesSection";

// export default function Home() {
//   // Common style to reduce vertical spacing
//   const sectionStyle = {
//     margin: 0,
//     padding: 0
//   };

//   return (
//     <>
//       <div style={sectionStyle}>
//         <HomeSecondSection />
//       </div>

//       <div style={sectionStyle}>
//         <ServicesSection />
//       </div>


//        <div style={sectionStyle}>
//         <HomeThirdSection />
//       </div>
//       <div style={sectionStyle}>
//         <HomeFourthSection />
//       </div>

//       <div style={sectionStyle}>
//         <HomeFifthSection />
//       </div>
//     </>
//   );
// }

'use client';

import HomeSecondSection from "../Components/HomeSections/HomeSecondSection";
import HomeThirdSection from "../Components/HomeSections/HomeThirdSection";
import HomeFourthSection from "../Components/HomeSections/HomeFourthSection";
import HomeFifthSection from "../Components/HomeSections/HomeFifthSection";
import ServicesSection from "../Components/HomeSections/ServicesSection";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* ----------------------------------------------------------- */
        /* DESKTOP ONLY: Reduce vertical gaps between sections        */
        /* ----------------------------------------------------------- */
        @media (min-width: 992px) {
          .desktop-pull-up {
            margin-top: -90px !important;
            position: relative;
            z-index: 5;
            background-color: white; /* Prevents overlap transparency */
          }
            .desktop-pull-up2 {
            margin-top: -90px !important;
            padding-bottom:80px;
            position: relative;
            z-index: 5;
            background-color: white; /* Prevents overlap transparency */
          }
            .desktop-pull-up3 {
            margin-top: -40px !important;
            padding-bottom:40px;
            position: relative;
            z-index: 5;
            background-color: white; /* Prevents overlap transparency */
          }
          
          

          .final-pull-up {
            margin-top: -40px !important;
            position: relative;
            z-index: 5;
          }
        }

        /* ----------------------------------------------------------- */
        /* MOBILE VIEW: No changes are made here, so it remains       */
        /* exactly as it was designed originally.                     */
        /* ----------------------------------------------------------- */
      `}</style>

      <main className="main-page-wrapper">
        {/* SECTION 1 - Always Normal */}
        <section>
          <HomeSecondSection />
        </section>

        {/* SECTION 2 - Desktop Pushed Up, Mobile Normal */}
        <div className="desktop-pull-up2">
          <ServicesSection />
        </div>

        {/* SECTION 3 - Desktop Pushed Up, Mobile Normal */}
        <div className="desktop-pull-up3">
          <HomeThirdSection />
        </div>

        {/* SECTION 4 - Desktop Pushed Up, Mobile Normal */}
        <div className="desktop-pull-up3">
          <HomeFourthSection />
        </div>

        {/* SECTION 5 - Smaller Desktop Pull Up, Mobile Normal */}
        <div className="final-pull-up">
          <HomeFifthSection />
        </div>
      </main>
    </>
  );
}