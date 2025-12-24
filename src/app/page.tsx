
// //import HomeFirstSection from "../Components/HomeSections/HomeFirstSection";
// import HomeSecondSection from "../Components/HomeSections/HomeSecondSection";
// //import HomeThirdSection from "../Components/HomeSections/HomeThirdSection";
// import HomeFourthSection from "../Components/HomeSections/HomeFourthSection";
// import HomeFifthSection from "../Components/HomeSections/HomeFifthSection";
// import ServicesSection from "../Components/HomeSections/ServicesSection";


// export default function Home() {
//   return (
//     <>
//       {/* <HomeFirstSection /> */}
//       <HomeSecondSection />
//       <ServicesSection />
//       {/* <HomeThirdSection /> */}
//       <HomeFourthSection />
//       <HomeFifthSection />
      
//     </>
//   );
// }


// pages/index.tsx or app/page.tsx

import HomeSecondSection from "../Components/HomeSections/HomeSecondSection";
import HomeThirdSection from "../Components/HomeSections/HomeThirdSection";
import HomeFourthSection from "../Components/HomeSections/HomeFourthSection";
import HomeFifthSection from "../Components/HomeSections/HomeFifthSection";
import ServicesSection from "../Components/HomeSections/ServicesSection";

export default function Home() {
  // Common style to reduce vertical spacing
  const sectionStyle = {
    margin: 0,
    padding: 0
  };

  return (
    <>
      <div style={sectionStyle}>
        <HomeSecondSection />
      </div>

      <div style={sectionStyle}>
        <ServicesSection />
      </div>


       <div style={sectionStyle}>
        <HomeThirdSection />
      </div>
      <div style={sectionStyle}>
        <HomeFourthSection />
      </div>

      <div style={sectionStyle}>
        <HomeFifthSection />
      </div>
    </>
  );
}
