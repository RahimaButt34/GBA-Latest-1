
// import GBAFirstSection from "../../../Components/AboutSections/GBA/GBAFirstSection";
// import GBASecondSection from "../../../Components/AboutSections/GBA/GBASecondSection";
// import GBAThirdSection from "../../../Components/AboutSections/GBA/GBAThirdSection";
// import Counter from "../../../Components/AboutSections/Gujranwala/Counter";
// import News from "../../../Components/AboutSections/OurTeam/News";

// export default function Home() {
//   return (
//     <>
    
//       <GBAFirstSection />
//        <GBASecondSection />
//           <GBAThirdSection />
//         <Counter />
//        <News />
       
      
//     </>
//   );
// }

'use client';

import GBAFirstSection from "../../../Components/AboutSections/GBA/GBAFirstSection";
import GBASecondSection from "../../../Components/AboutSections/GBA/GBASecondSection";
import GBAThirdSection from "../../../Components/AboutSections/GBA/GBAThirdSection";
import Counter from "../../../Components/AboutSections/Gujranwala/Counter";
import News from "../../../Components/AboutSections/OurTeam/News";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* 1. Desktop Styling: Reducing gaps between all sections */
        @media (min-width: 992px) {
          .section-wrapper {
            margin-top: -60px; /* Pulls sections closer */
            position: relative;
            z-index: 2;
          }

          /* Specifically targeting the Counter section area */
          .counter-area-wrapper {
            margin-top: -40px !important; /* Smaller gap above counter */
            margin-bottom: -30px !important; /* Smaller gap below counter */
            position: relative;
            z-index: 10;
          }
        }

        /* 2. Mobile View: Keeps layout original so responsiveness isn't disturbed */
        @media (max-width: 991px) {
          .section-wrapper, .counter-area-wrapper {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `}</style>

      <main className="main-content">
        <GBAFirstSection />
        
        <div className="section-wrapper">
          <GBASecondSection />
        </div>

        <div className="section-wrapper">
          <GBAThirdSection />
        </div>

        {/* Counter section with specific tight spacing */}
        <div className="counter-area-wrapper">
          <Counter />
        </div>

        <div className="section-wrapper">
          <News />
        </div>
      </main>
    </>
  );
}