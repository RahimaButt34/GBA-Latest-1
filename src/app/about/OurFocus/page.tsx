






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
import OurFocusFirstSection from "../../../Components/AboutSections/OurFocus/OurFocusFirstSection";
import OurFocusSecondSection from "../../../Components/AboutSections/OurFocus/OurFocusSecondSection";
import OurFocusThirdSection from "../../../Components/AboutSections/OurFocus/OurFocusThirdSection";
import News from "../../../Components/AboutSections/OurTeam/News";
export default function Home() {
  
  
  const negativeMarginStyle: React.CSSProperties = {
    marginTop: '-80px', // Pull this section up by 80 pixels
    
  };
  const negativeMarginStyletwo: React.CSSProperties = {
    marginTop: '100px', // Pull this section up by 80 pixels
     
  };
  
  // If the gap is coming from the bottom of the first section, you can apply a margin-bottom to it:
  const firstSectionBottomStyle: React.CSSProperties = {
    marginBottom: '-80px', // Push the next section up
  };

  return (
    <>
      {/* 1. OurTeamFirstSection (Add negative bottom margin if needed) */}
      <div style={firstSectionBottomStyle}>
        <OurFocusFirstSection />
      </div>
      
      {/* 2. OurTeamSecondSection (Apply negative top margin to pull it up) */}
      <div style={negativeMarginStyletwo}>
        <OurFocusSecondSection />
      </div>
      {/* <div style={negativeMarginStyletwo}>
        <OurFocusThirdSection />
      </div> */}
      
      {/* 3. News (Apply negative top margin to pull it up further) */}
      <div style={negativeMarginStyle}>
        <News />
      </div>
      
      
    </>
  );
}