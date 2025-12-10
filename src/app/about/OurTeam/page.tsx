




// import OurTeamFirstSection from "../../Components/AboutSections/OurTeam/OurTeamFirstSection";
// import OurTeamSecondSection from "../../Components/AboutSections/OurTeam/OurTeamSecondSection";
// import News from "../../Components/AboutSections/OurTeam/News";
// // import HomeFifthSection from "../../Components/HomeSections/HomeFifthSection";


// export default function Home() {
//   return (
//     <>
    
//       <OurTeamFirstSection />
//        <OurTeamSecondSection />
//        <News />
//        {/* <HomeFifthSection/>
//      */}
//     </>
//   );
// }



'use client'; // Assuming you might need client-side features, though not strictly required for this change.

import React from 'react';
import OurTeamFirstSection from "../../../Components/AboutSections/OurTeam/OurTeamFirstSection";
import OurTeamSecondSection from "../../../Components/AboutSections/OurTeam/OurTeamSecondSection";
import News from "../../../Components/AboutSections/OurTeam/News";


export default function Home() {
  
  // Define a large negative margin value to drastically reduce the gap.
  // The exact value (e.g., -100px) depends on how much default spacing is in the components.
  const negativeMarginStyle: React.CSSProperties = {
    marginTop: '-80px', // Pull this section up by 80 pixels
  };
  
  // If the gap is coming from the bottom of the first section, you can apply a margin-bottom to it:
  const firstSectionBottomStyle: React.CSSProperties = {
    marginBottom: '-80px', // Push the next section up
  };

  return (
    <>
      {/* 1. OurTeamFirstSection (Add negative bottom margin if needed) */}
      <div style={firstSectionBottomStyle}>
        <OurTeamFirstSection />
      </div>
      
      {/* 2. OurTeamSecondSection (Apply negative top margin to pull it up) */}
      <div style={negativeMarginStyle}>
        <OurTeamSecondSection />
      </div>
      
      {/* 3. News (Apply negative top margin to pull it up further) */}
      <div style={negativeMarginStyle}>
        <News />
      </div>
      
      
    </>
  );
}