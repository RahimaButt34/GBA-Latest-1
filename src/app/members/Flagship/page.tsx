

// import FlagshipSection1 from "../../../Components/Member/Flagship/FlagshipSection1";
// import FlagshipSection2 from "../../../Components/Member/Flagship/FlagshipSection2";
// import FlagshipSection3 from "../../../Components/Member/Flagship/FlagshipSection3";
// import Counter2 from "../../../Components/Member/Flagship/Counter2";
// import News from "../../../Components/AboutSections/OurTeam/News";
// //import FlagshipSection4 from "../../Components/Member/Flagship/FlagshipSection4";



// export default function Page() {
//   return (
//     <div>
//     <FlagshipSection1/>
//     <FlagshipSection2/>
//     <FlagshipSection3/>
//     <Counter2/>
//     <News/>
    

//     </div>
//   );
// }

'use client';

import FlagshipSection1 from "../../../Components/Member/Flagship/FlagshipSection1";
import FlagshipSection2 from "../../../Components/Member/Flagship/FlagshipSection2";
import FlagshipSection3 from "../../../Components/Member/Flagship/FlagshipSection3";
import Counter2 from "../../../Components/Member/Flagship/Counter2";
import News from "../../../Components/AboutSections/OurTeam/News";

export default function Page() {
  return (
    <>
      <style jsx global>{`
        /* --- Desktop View (Large Screens) --- */
        @media (min-width: 992px) {
          /* General gap reduction for all sections */
          .section-gap-reduce {
            margin-top: -60px;
            position: relative;
            z-index: 2;
          }

          /* Specific control for Counter2 Section */
          .counter-spacing {
            /* Pulls Counter closer to Section 3 */
            margin-top: -40px !important; 
            /* Pulls News Section closer to Counter */
            margin-bottom: -40px !important; 
            position: relative;
            z-index: 10;
          }
        }

        /* --- Mobile View Responsiveness --- */
        /* Keeps layout exactly as original on small screens */
        @media (max-width: 991px) {
          .section-gap-reduce, .counter-spacing {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
      `}</style>

      <div>
        {/* Section 1: Normal */}
        <FlagshipSection1 />

        {/* Section 2: Reduced gap from top */}
        <div >
          <FlagshipSection2 />
        </div>

        {/* Section 3: Reduced gap from top */}
        <div >
          <FlagshipSection3 />
        </div>

        {/* Counter2: Tight spacing above and below */}
        <div className="counter-spacing">
          <Counter2 />
        </div>

        {/* News: Reduced gap from Counter */}
        <div className="section-gap-reduce">
          <News />
        </div>
      </div>
    </>
  );
}