



// import GujFirstSection from "../../../Components/AboutSections/Gujranwala/GujFirstSection";
// import GujSecondSection from "../../../Components/AboutSections/Gujranwala/GujSecondSection";
// import Counter from "../../../Components/AboutSections/Gujranwala/Counter";

// import News from "../../../Components/AboutSections/OurTeam/News";

// export default function Home() {
//   return (
//     <>
    
//       <GujFirstSection />
//        <GujSecondSection />
//        <Counter />
//        <News />
      
//     </>
//   );
// }

'use client';

import GujFirstSection from "../../../Components/AboutSections/Gujranwala/GujFirstSection";
import GujSecondSection from "../../../Components/AboutSections/Gujranwala/GujSecondSection";
import Counter from "../../../Components/AboutSections/Gujranwala/Counter";
import News from "../../../Components/AboutSections/OurTeam/News";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* --- Desktop Styling (992px and up) --- */
        @media (min-width: 992px) {
          /* General section gap reduction */
          .section-tight {
            margin-top: -50px; 
            position: relative;
            z-index: 2;
          }

          /* Specific control for Counter area */
          .counter-wrapper {
            /* This pulls the counter closer to the top section */
            margin-top: -30px !important; 
            /* This pulls the News section closer to the counter */
            margin-bottom: -40px !important; 
            position: relative;
            z-index: 5;
          }
        }

        /* --- Mobile View (Responsive Safety) --- */
        @media (max-width: 991px) {
          .section-tight, .counter-wrapper {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
      `}</style>

      <main className="main-content">
        {/* 1. First Section: Normal position */}
        <GujFirstSection />

        {/* 2. Second Section: Pulled up slightly */}
        <div className="section-tight">
          <GujSecondSection />
        </div>

        {/* 3. Counter: Specific gaps for top and bottom */}
        <div className="counter-wrapper">
          <Counter />
        </div>

        {/* 4. News Section: Pulled closer to the counter */}
        <div className="section-tight">
          <News />
        </div>
      </main>
    </>
  );
}