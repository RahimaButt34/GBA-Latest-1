

// // // // GBAFocusAreas.tsx

// // // 'use client';

// // // import React from 'react';

// // // // -----------------------------------------------------------------------
// // // // 1. CSS Styles as React.CSSProperties Objects
// // // // Defines all necessary desktop styles to keep the JSX clean.
// // // // -----------------------------------------------------------------------

// // // const containerOverlapStyle: React.CSSProperties = {
// // //     marginTop: '-300px',
// // //     paddingTop: 40, // pt--40 from original HTML
// // // };

// // // const rowMarginTop100: React.CSSProperties = {
// // //     marginTop: '100px',
// // // };

// // // const rowMarginTop10: React.CSSProperties = {
// // //     marginTop: '10px',
// // // };

// // // const titleStyle: React.CSSProperties = {
// // //     fontSize: '48px',
// // // };

// // // const subtitleStyle: React.CSSProperties = {
// // //     fontWeight: 900,
// // //     color: 'black',
// // //     fontSize: '14px',
// // // };

// // // const subtitleStyleLarge: React.CSSProperties = {
// // //     fontWeight: 900,
// // //     color: 'black',
// // //     fontSize: '16px',
// // // };

// // // const discStyle: React.CSSProperties = {
// // //     fontSize: '15px',
// // // };

// // // const thumbnailImageStyle: React.CSSProperties = {
// // //     width: '100%',
// // //     borderRadius: '10px',
// // // };

// // // // -----------------------------------------------------------------------
// // // // 2. Reusable Focus Area Component
// // // // -----------------------------------------------------------------------

// // // interface FocusAreaProps {
// // //     title: string;
// // //     subtitle: string;
// // //     description: string;
// // //     imageSrc: string;
// // //     imageAlt: string;
// // //     sectionNumber: number;
// // //     textLeft?: boolean; // Controls order: Text LEFT (default) or Text RIGHT
// // // }

// // // const FocusArea: React.FC<FocusAreaProps> = ({
// // //     title,
// // //     subtitle,
// // //     description,
// // //     imageSrc,
// // //     imageAlt,
// // //     sectionNumber,
// // //     textLeft = true
// // // }) => {
// // //     // Determine the order for the row based on textLeft prop
// // //     const textOrderLg = textLeft ? 1 : 2;
// // //     const imageOrderLg = textLeft ? 2 : 1;

// // //     // Adjust margin-top for the first section (section 2)
// // //     const rowMarginStyle = sectionNumber === 2 ? rowMarginTop10 : rowMarginTop100;
    
// // //     // Adjust subtitle style for section 5, which uses a larger font size
// // //     const currentSubtitleStyle = sectionNumber === 5 ? subtitleStyleLarge : subtitleStyle;

// // //     // Apply the g-5 class (gap-5)
// // //     const rowClass = sectionNumber === 4 ? 'row align-items-center g-5' : 'row align-items-center g-5';


// // //     const textBlock = (
// // //         <div className="col-lg-7 col-md-12 order-lg-1 order-2">
// // //             <div className="about-content-right-three">
// // //                 <div className="title-style-three left" style={titleStyle}>
// // //                     <h2>{title}</h2>
// // //                     <p style={currentSubtitleStyle}>
// // //                         <strong>{subtitle}</strong>
// // //                     </p>
// // //                 </div>
// // //                 <br />
// // //                 <p className="disc" style={discStyle}>
// // //                     {description}
// // //                 </p>
// // //             </div>
// // //         </div>
// // //     );

// // //     const imageBlock = (
// // //         <div className="col-lg-5 col-md-12 order-lg-2 order-1 text-center">
// // //             <div className="main-thumnal-inner-about-three">
// // //                 <div className="thumbnail">
// // //                     <img
// // //                         src={imageSrc}
// // //                         alt={imageAlt}
// // //                         style={thumbnailImageStyle}
// // //                     />
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
    
// // //     // Set the rendering order based on textLeft
// // //     const content = textLeft ? [textBlock, imageBlock] : [imageBlock, textBlock];
// // //     return (
// // //         <div className="rts-about-area rts-section-gap">
// // //             <div className="container pt--40" style={containerOverlapStyle}>
// // //                 <div className={rowClass} style={rowMarginStyle}>
// // //                     {/* The order is swapped based on the section requirement */}
// // //                     {sectionNumber % 2 === 0 ? 
// // //                         <>
// // //                             {/* Even sections: Text Left, Image Right */}
// // //                             <div className="col-lg-7 col-md-12 order-lg-1 order-2">
// // //                                 <div className="about-content-right-three">
// // //                                     <div className="title-style-three left">
// // //                                         <h2 style={titleStyle}>{title}</h2>
// // //                                         <p style={currentSubtitleStyle}>
// // //                                             <strong>{subtitle}</strong>
// // //                                         </p>
// // //                                     </div>
// // //                                     <br />
// // //                                     <p className="disc" style={discStyle}>{description}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="col-lg-5 col-md-12 order-lg-2 order-1 text-center">
// // //                                 <div className="main-thumnal-inner-about-three">
// // //                                     <div className="thumbnail">
// // //                                         <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </>
// // //                         :
// // //                         <>
// // //                             {/* Odd sections: Image Left, Text Right */}
// // //                             <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
// // //                                 <div className="main-thumnal-inner-about-three">
// // //                                     <div className="thumbnail">
// // //                                         <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="col-lg-7 col-md-12 order-lg-2 order-2">
// // //                                 <div className="about-content-right-three">
// // //                                     <div className="title-style-three left">
// // //                                         <h2 style={titleStyle}>{title}</h2>
// // //                                         <p style={currentSubtitleStyle}>
// // //                                             <strong>{subtitle}</strong>
// // //                                         </p>
// // //                                     </div>
// // //                                     <br />
// // //                                     <p className="disc" style={discStyle}>{description}</p>
// // //                                 </div>
// // //                             </div>
// // //                         </>
// // //                     }
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // -----------------------------------------------------------------------
// // // // 3. MAIN COMPONENT (GBAFocusAreas)
// // // // -----------------------------------------------------------------------

// // // const GBAFocusAreas: React.FC = () => {
// // //     return (
// // //         <>
// // //             {/* 2. Global Business Engagement (Text Left, Image Right) */}
// // //             <FocusArea
// // //                 sectionNumber={2}
// // //                 title="Global Business Engagement"
// // //                 subtitle="Connecting People, Ideas, And Opportunities Across Borders"
// // //                 description={`Serving as a bridge between Gujranwala’s industries and the global business community, GBA
// // //                     connects entrepreneurs, investors, and trade organisations to foster cooperation, build trust,
// // //                     and create long-term partnerships. Its networking initiatives bring together business leaders,
// // //                     policymakers, and industry experts from around the world through trade delegations, business
// // //                     forums, and B2B engagement platforms. These interactions encourage knowledge sharing, investment
// // //                     opportunities, and collaborative ventures that help businesses expand their reach and strengthen
// // //                     their international presence. Beyond connections, the Alliance focuses on developing member
// // //                     capacity through training sessions, seminars, and knowledge exchange programs that promote
// // //                     global business understanding, cross-cultural engagement, and modern trade practices. By
// // //                     cultivating collaboration and shared growth, GBA continues to position Gujranwala as a vital hub
// // //                     for international business cooperation.`}
// // //                 imageSrc="/images/Focus2/Global Business.png"
// // //                 imageAlt="Global Business"
// // //                 textLeft={true} // Text is first in the HTML block
// // //             />

// // //             {/* 3. Enhancing Industrial Competitiveness (Image Left, Text Right) */}
// // //             <FocusArea
// // //                 sectionNumber={3}
// // //                 title="Enhancing Industrial Competitiveness"
// // //                 subtitle="Empowering Enterprises for Sustainable Growth"
// // //                 description={`Dedicated to empowering local enterprises, GBA provides guidance, knowledge, and strategic
// // //                     support to help businesses thrive in a competitive global market. It connects entrepreneurs with
// // //                     experienced facilitators and industry experts who offer practical advice on improving performance,
// // //                     identifying growth opportunities, and addressing operational challenges. Through collaborations
// // //                     with educational institutions, business professionals, and development organisations, the Alliance
// // //                     designs specialised training programs tailored to industry needs. These initiatives enhance
// // //                     managerial capacity, strengthen business systems, and build the leadership skills required for
// // //                     long-term success. By supporting businesses in refining strategies, streamlining operations, and
// // //                     improving competitiveness, GBA continues to nurture a resilient, future-ready business community.`}
// // //                 imageSrc="/images/Focus2/Enhancing Industrial.png"
// // //                 imageAlt="Enhancing Industrial"
// // //                 textLeft={false} // Image is first in the HTML block
// // //             />

// // //             {/* 4. Advancing Global Trade and Investment (Text Left, Image Right) */}
// // //             <FocusArea
// // //                 sectionNumber={4}
// // //                 title="Advancing Global Trade and Investment"
// // //                 subtitle="Building Partnerships that Drive Sustainable Economic Growth"
// // //                 description={`Advancing international economic cooperation is a central pillar of GBA’s mission. The Alliance
// // //                     works to strengthen Gujranwala’s global economic footprint through strategic engagement with
// // //                     partner countries, trade bodies, and investment organisations. Our focus is on fostering long-term
// // //                     relationships that enhance market access, attract investment, and create opportunities for trade,
// // //                     technology transfer, and industrial collaboration. Through structured partnerships, GBA
// // //                     facilitates direct interaction between businesses, chambers of commerce, and government
// // //                     institutions worldwide. These engagements lead to new export channels, joint ventures, and
// // //                     collaborative projects that integrate Gujranwala’s industries more deeply into the global value
// // //                     chain. Working alongside diplomatic missions, development agencies, and policy institutions, the
// // //                     Alliance promotes transparent trade practices, investment-friendly frameworks, and equitable
// // //                     market access. By cultivating trust, innovation, and shared growth, GBA continues to position
// // //                     Gujranwala as a credible, competitive, and globally connected hub for trade and investment
// // //                     cooperation.`}
// // //                 imageSrc="/images/Focus2/Advancing Global.png"
// // //                 imageAlt="Advancing Global"
// // //                 textLeft={true} // Text is first in the HTML block
// // //             />

// // //             {/* 5. Entrepreneurship & Leadership Development (Image Left, Text Right) */}
// // //             <FocusArea
// // //                 sectionNumber={5}
// // //                 title="Entrepreneurship & Leadership Development"
// // //                 subtitle="Nurturing Visionaries for Tomorrow’s Global Economy"
// // //                 description={`Entrepreneurship and leadership are the driving forces behind innovation, competitiveness, and
// // //                     sustainable growth. GBA is committed to cultivating a new generation of entrepreneurs and
// // //                     business leaders who can shape the future of Gujranwala’s industrial and economic landscape.
// // //                     Through mentorship programs, startup incubation, and leadership training, the Alliance provides
// // //                     young entrepreneurs with the tools, exposure, and confidence needed to transform ideas into
// // //                     successful enterprises. In partnership with universities, innovation centres, and international
// // //                     business forums, GBA promotes an entrepreneurial culture that encourages creativity, resilience,
// // //                     and strategic thinking. By equipping emerging leaders with global perspectives, professional
// // //                     networks, and practical skills, GBA continues to empower Gujranwala’s youth to become catalysts
// // //                     of growth - driving innovation, fostering inclusive economic development, and representing the
// // //                     region with pride in the global business arena.`}
// // //                 imageSrc="/images/Focus2/Developing Leaders.png"
// // //                 imageAlt="Developing Leaders"
// // //                 textLeft={false} // Image is first in the HTML block
// // //             />

// // //             {/* 6. Strengthening Industry - Academia Linkages (Text Left, Image Right) */}
// // //             <FocusArea
// // //                 sectionNumber={6}
// // //                 title="Strengthening Industry - Academia Linkages"
// // //                 subtitle="Bridging Knowledge, Innovation, and Industry Needs"
// // //                 description={`Collaboration between academia and industry is a cornerstone of innovation and sustainable
// // //                     economic growth. In leading economies, such partnerships have played a vital role in developing
// // //                     critical skills, advancing research, and fostering entrepreneurship. Recognising its importance,
// // //                     GBA is committed to building a strong bridge between Gujranwala’s industrial sector and academic
// // //                     institutions. The Alliance works to align academic research, training, and curricula with the
// // //                     evolving needs of industry, ensuring that graduates are equipped with practical knowledge and
// // //                     relevant technical expertise. Through joint research projects, internships, innovation programs,
// // //                     and entrepreneurship development initiatives, GBA promotes the commercialisation of ideas and the
// // //                     creation of market-driven solutions. By fostering continuous collaboration between universities,
// // //                     research centres, and industrial enterprises, GBA aims to cultivate a knowledge-based economy
// // //                     where innovation, skill development, and applied research drive industrial advancement and
// // //                     regional competitiveness.`}
// // //                 imageSrc="/images/Focus2/Strengthening Industry.png"
// // //                 imageAlt="Strengthening Industry"
// // //                 textLeft={true} // Text is first in the HTML block
// // //             />

// // //             {/* ---------------------------------------------------- */}
// // //             {/* 4. GLOBAL STYLES (Responsive adjustments for mobile) */}
// // //             {/* ---------------------------------------------------- */}
// // //             <style jsx global>{`
// // //                 /* Your original mobile-only responsive fixes, converted and applied globally */
// // //                 @media (max-width: 768px) {

// // //                     /* Breadcrumb big background text */
// // //                     .rts-breadcrumb-area .title-area-left {
// // //                         text-align: center !important;
// // //                     }
// // //                     .rts-breadcrumb-area .bg-title {
// // //                         font-size: 60px !important;
// // //                         margin-left: 0 !important;
// // //                     }

// // //                     /* Intro "Enabling Growth / Our Focus" block (assuming you have a similar block before section 2) */
// // //                     /* Note: Targeting based on combined attributes is fragile, simplified selectors below */

// // //                     /* All containers that had margin-top:-300px (like the containers generated by FocusArea) */
// // //                     .rts-about-area .container.pt--40[style*="-300px"] {
// // //                         margin-top: 0px !important;
// // //                     }

// // //                     /* Normalise row spacing */
// // //                     .rts-about-area .row[style*="margin-top: 100px"],
// // //                     .rts-about-area .row[style*="margin-top: 10px"] {
// // //                         margin-top: 30px !important;
// // //                     }

// // //                     /* Typography tweaks for mobile */
// // //                     .about-content-right-three .title-style-three.left {
// // //                         font-size: 32px !important;
// // //                     }
// // //                     .about-content-right-three .title-style-three.left h2 {
// // //                         font-size: 26px !important;
// // //                         line-height: 1.3;
// // //                     }
// // //                     .about-content-right-three .title-style-three.left p {
// // //                         font-size: 13px !important;
// // //                     }
// // //                     .about-content-right-three p.disc {
// // //                         font-size: 14px !important;
// // //                     }

// // //                     /* Text padding so it doesn’t touch edges */
// // //                     .about-content-right-three {
// // //                         text-align: left;
// // //                         padding: 0 15px;
// // //                     }

// // //                     /* Image spacing on mobile */
// // //                     .main-thumnal-inner-about-three {
// // //                         margin-bottom: 20px;
// // //                     }
// // //                     .main-thumnal-inner-about-three .thumbnail img {
// // //                         width: 100% !important;
// // //                         height: auto;
// // //                         border-radius: 10px;
// // //                     }
// // //                 }
// // //             `}</style>
// // //         </>
// // //     );
// // // };

// // // export default GBAFocusAreas;




// // 'use client';

// // import React from 'react';

// // const containerStyle: React.CSSProperties = {
// //   marginTop: '0px',
// //   paddingTop: 0,
// // };

// // const rowMarginTop100: React.CSSProperties = { marginTop: '90px' };
// // const rowMarginTop10: React.CSSProperties = { marginTop: '50px' };

// // const titleStyle: React.CSSProperties = { fontSize: '48px', marginBottom: '10px' };

// // const subtitleStyle: React.CSSProperties = {
// //   fontWeight: 900,
// //   color: 'black',
// //   fontSize: '14px',
// //   marginBottom: '18px',
// // };

// // const subtitleStyleLarge: React.CSSProperties = {
// //   fontWeight: 900,
// //   color: 'black',
// //   fontSize: '16px',
// //   marginBottom: '18px',
// // };

// // const discStyle: React.CSSProperties = {
// //   fontSize: '16px', // ✅ paragraph size 16
// //   lineHeight: 1.8,
// //   margin: 0,
// // };

// // const thumbnailImageStyle: React.CSSProperties = {
// //   width: '100%',
  
// //   borderRadius: '14px',
// //   display: 'block',
// //   objectFit: 'cover',
// //   aspectRatio: '4 / 3', // ✅ all images same size
// // };

// // interface FocusAreaProps {
// //   title: string;
// //   subtitle: string;
// //   description: string;
// //   imageSrc: string;
// //   imageAlt: string;
// //   sectionNumber: number;
// //   textLeft?: boolean;
// // }

// // const FocusArea: React.FC<FocusAreaProps> = ({
// //   title,
// //   subtitle,
// //   description,
// //   imageSrc,
// //   imageAlt,
// //   sectionNumber,
// //   textLeft = true,
// // }) => {
// //   const rowMarginStyle = sectionNumber === 2 ? rowMarginTop10 : rowMarginTop100;
// //   const currentSubtitleStyle = sectionNumber === 5 ? subtitleStyleLarge : subtitleStyle;

// //   return (
// //     <div className="rts-about-area rts-section-gap focus2-wrap">
// //       <div className="container pt--40 focus2-container" style={containerStyle}>
// //         {/* ✅ align-items-start => text + image start from same top line */}
// //         <div className="row align-items-start g-5" style={rowMarginStyle}>
// //           {/* TEXT */}
// //           <div className={`col-lg-7 col-md-12 ${textLeft ? 'order-lg-1 order-2' : 'order-lg-2 order-2'}`}>
// //             {/* ✅ make text same height as image on desktop */}
// //             <div className="about-content-right-three focus2-textEqualHeight">
// //               <div className="title-style-three left">
// //                 <h2 style={titleStyle}>{title}</h2>
// //                 <p style={currentSubtitleStyle}>
// //                   <strong>{subtitle}</strong>
// //                 </p>
// //               </div>

// //               <p className="disc" style={discStyle}>
// //                 {description}
// //               </p>
// //             </div>
// //           </div>

// //           {/* IMAGE */}
// //           <div className={`col-lg-5 col-md-12 text-center ${textLeft ? 'order-lg-2 order-1' : 'order-lg-1 order-1'}`}>
// //             <div className="main-thumnal-inner-about-three focus2-imgWrap">
// //               <div className="thumbnail focus2-thumb">
// //                 <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ✅ GLOBAL CSS */}
// //       <style jsx global>{`
// //         /* remove unwanted gap */
// //         .focus2-wrap {
// //           padding-top: 0 !important;
// //           padding-bottom: 0 !important;
// //         }

// //         /* ✅ Desktop: Text height equals image height (4/3 ratio => approx) */
// //         @media (min-width: 992px) {
// //           .focus2-textEqualHeight {
// //             height: 100%;
// //             min-height: 360px; /* ✅ keeps text block close to image height */
// //             display: flex;
// //             flex-direction: column;
// //             justify-content: flex-start; /* start aligned with image top */
// //           }
// //         }

// //         /* ✅ Mobile */
// //         @media (max-width: 768px) {
// //           .focus2-imgWrap {
// //             margin-bottom: 18px;
// //           }

// //           .focus2-thumb img {
// //             width: 100% !important;
// //             border-radius: 14px;
// //             aspect-ratio: 16 / 10;
// //             object-fit: cover;
// //           }

// //           .about-content-right-three {
// //             padding: 0 12px;
// //             text-align: left;
// //           }

// //           .about-content-right-three h2 {
// //             font-size: 30px !important;
// //             line-height: 1.25;
// //           }

// //           .disc {
// //             font-size: 15px !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // const GBAFocusAreas: React.FC = () => {
// //   return (
// //     <>
// //       <FocusArea
// //         sectionNumber={2}
// //         title="Global Business Engagement"
// //         subtitle="Connecting People, Ideas, And Opportunities Across Borders"
// //         description={`Serving as a bridge between Gujranwala’s industries and the global business community, GBA
// //                     connects entrepreneurs, investors, and trade organisations to foster cooperation, build trust,
// //                     and create long-term partnerships. Its networking initiatives bring together business leaders,
// //                     policymakers, and industry experts from around the world through trade delegations, business
// //                     forums, and B2B engagement platforms. These interactions encourage knowledge sharing, investment
// //                     opportunities, and collaborative ventures that help businesses expand their reach and strengthen
// //                     their international presence. Beyond connections, the Alliance focuses on developing member
// //                     capacity through training sessions, seminars, and knowledge exchange programs that promote
// //                     global business understanding, cross-cultural engagement, and modern trade practices. By
// //                     cultivating collaboration and shared growth, GBA continues to position Gujranwala as a vital hub
// //                     for international business cooperation.`}
// //         imageSrc="/images/Focus2/Global Business.png"
// //         imageAlt="Global Business"
// //         textLeft={true}
// //       />

// //       <FocusArea
// //         sectionNumber={3}
// //         title="Enhancing Industrial Competitiveness"
// //         subtitle="Empowering Enterprises for Sustainable Growth"
// //         description={`Dedicated to empowering local enterprises, GBA provides guidance, knowledge, and strategic
// //                     support to help businesses thrive in a competitive global market. It connects entrepreneurs with
// //                     experienced facilitators and industry experts who offer practical advice on improving performance,
// //                     identifying growth opportunities, and addressing operational challenges. Through collaborations
// //                     with educational institutions, business professionals, and development organisations, the Alliance
// //                     designs specialised training programs tailored to industry needs. These initiatives enhance
// //                     managerial capacity, strengthen business systems, and build the leadership skills required for
// //                     long-term success. By supporting businesses in refining strategies, streamlining operations, and
// //                     improving competitiveness, GBA continues to nurture a resilient, future-ready business community.`}
// //         imageSrc="/images/Focus2/Enhancing Industrial.png"
// //         imageAlt="Enhancing Industrial"
// //         textLeft={false}
// //       />
// //        {/* 4. Advancing Global Trade and Investment (Text Left, Image Right) */}
// //       <FocusArea
// //         sectionNumber={4}
// //         title="Advancing Global Trade and Investment"
// //         subtitle="Building Partnerships that Drive Sustainable Economic Growth"
// //         description={`Advancing international economic cooperation is a central pillar of GBA’s mission. The Alliance
// //                     works to strengthen Gujranwala’s global economic footprint through strategic engagement with
// //                     partner countries, trade bodies, and investment organisations. Our focus is on fostering long-term
// //                     relationships that enhance market access, attract investment, and create opportunities for trade,
// //                     technology transfer, and industrial collaboration. Through structured partnerships, GBA
// //                     facilitates direct interaction between businesses, chambers of commerce, and government
// //                     institutions worldwide. These engagements lead to new export channels, joint ventures, and
// //                     collaborative projects that integrate Gujranwala’s industries more deeply into the global value
// //                     chain. Working alongside diplomatic missions, development agencies, and policy institutions, the
// //                     Alliance promotes transparent trade practices, investment-friendly frameworks, and equitable
// //                     market access. By cultivating trust, innovation, and shared growth, GBA continues to position
// //                     Gujranwala as a credible, competitive, and globally connected hub for trade and investment
// //                     cooperation.`}
// //         imageSrc="/images/Focus2/Advancing Global.png"
// //         imageAlt="Advancing Global"
// //         textLeft={true}
// //       />

// //       {/* 5. Entrepreneurship & Leadership Development (Image Left, Text Right) */}
// //       <FocusArea
// //         sectionNumber={5}
// //         title="Entrepreneurship & Leadership Development"
// //         subtitle="Nurturing Visionaries for Tomorrow’s Global Economy"
// //         description={`Entrepreneurship and leadership are the driving forces behind innovation, competitiveness, and
// //                     sustainable growth. GBA is committed to cultivating a new generation of entrepreneurs and
// //                     business leaders who can shape the future of Gujranwala’s industrial and economic landscape.
// //                     Through mentorship programs, startup incubation, and leadership training, the Alliance provides
// //                     young entrepreneurs with the tools, exposure, and confidence needed to transform ideas into
// //                     successful enterprises. In partnership with universities, innovation centres, and international
// //                     business forums, GBA promotes an entrepreneurial culture that encourages creativity, resilience,
// //                     and strategic thinking. By equipping emerging leaders with global perspectives, professional
// //                     networks, and practical skills, GBA continues to empower Gujranwala’s youth to become catalysts
// //                     of growth - driving innovation, fostering inclusive economic development, and representing the
// //                     region with pride in the global business arena.`}
// //         imageSrc="/images/Focus2/Developing Leaders.png"
// //         imageAlt="Developing Leaders"
// //         textLeft={false}
// //       />

// //       {/* 6. Strengthening Industry - Academia Linkages (Text Left, Image Right) */}
// //       <FocusArea
// //         sectionNumber={6}
// //         title="Strengthening Industry - Academia Linkages"
// //         subtitle="Bridging Knowledge, Innovation, and Industry Needs"
// //         description={`Collaboration between academia and industry is a cornerstone of innovation and sustainable
// //                     economic growth. In leading economies, such partnerships have played a vital role in developing
// //                     critical skills, advancing research, and fostering entrepreneurship. Recognising its importance,
// //                     GBA is committed to building a strong bridge between Gujranwala’s industrial sector and academic
// //                     institutions. The Alliance works to align academic research, training, and curricula with the
// //                     evolving needs of industry, ensuring that graduates are equipped with practical knowledge and
// //                     relevant technical expertise. Through joint research projects, internships, innovation programs,
// //                     and entrepreneurship development initiatives, GBA promotes the commercialisation of ideas and the
// //                     creation of market-driven solutions. By fostering continuous collaboration between universities,
// //                     research centres, and industrial enterprises, GBA aims to cultivate a knowledge-based economy
// //                     where innovation, skill development, and applied research drive industrial advancement and
// //                     regional competitiveness.`}
// //         imageSrc="/images/Focus2/Strengthening Industry.png"
// //         imageAlt="Strengthening Industry"
// //         textLeft={true}
// //       />

     
// //     </>
// //   );
// // };

// // export default GBAFocusAreas;

// // GBAFocusAreas.tsx
// 'use client';

// import React from 'react';

// /* ------------------------------
//    STYLES (content unchanged)
// ------------------------------ */

// const containerStyle: React.CSSProperties = {
//   marginTop: '0px',
//   paddingTop: 0,
// };

// const rowMarginTopDefault: React.CSSProperties = { marginTop: '90px' };
// const rowMarginTopFirst: React.CSSProperties = { marginTop: '50px' };

// const titleStyle: React.CSSProperties = {
//   fontSize: '48px', // ✅ heading 48
//   marginBottom: '10px',
//   lineHeight: 1.15,
// };

// const subtitleStyle: React.CSSProperties = {
//   fontWeight: 900,
//   color: 'black',
//   fontSize: '14px',
//   marginBottom: '18px',
// };

// const subtitleStyleLarge: React.CSSProperties = {
//   fontWeight: 900,
//   color: 'black',
//   fontSize: '16px',
//   marginBottom: '18px',
// };

// const discStyle: React.CSSProperties = {
//   fontSize: '16px', // ✅ text 16
//   lineHeight: 1.8,
//   margin: 0,
// };

// const thumbnailImageStyle: React.CSSProperties = {
//   width: '100%',
//   borderRadius: '14px',
//   display: 'block',
//   objectFit: 'cover',
//   // NOTE: desktop height will be controlled via CSS (fixed height),
//   // mobile will use aspect-ratio via CSS
// };

// /* ------------------------------
//    COMPONENT
// ------------------------------ */

// interface FocusAreaProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   sectionNumber: number;
//   textLeft?: boolean; // true => text left, image right (desktop)
// }

// const FocusArea: React.FC<FocusAreaProps> = ({
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   imageAlt,
//   sectionNumber,
//   textLeft = true,
// }) => {
//   const rowMarginStyle = sectionNumber === 2 ? rowMarginTopFirst : rowMarginTopDefault;
//   const currentSubtitleStyle = sectionNumber === 5 ? subtitleStyleLarge : subtitleStyle;

//   return (
//     <div className="rts-about-area rts-section-gap focus2-wrap">
//       <div className="container pt--40 focus2-container" style={containerStyle}>
//         {/* ✅ IMPORTANT: focus2-row so we can stretch columns on desktop */}
//         <div className="row g-5 focus2-row" style={rowMarginStyle}>
//           {/* TEXT */}
//           <div className={`col-lg-7 col-md-12 ${textLeft ? 'order-lg-1 order-2' : 'order-lg-2 order-2'}`}>
//             {/* ✅ This wrapper will be forced to same height as image on desktop */}
//             <div className="about-content-right-three focus2-textFill">
//               <div className="title-style-three left">
//                 <h2 style={titleStyle}>{title}</h2>
//                 <p style={currentSubtitleStyle}>
//                   <strong>{subtitle}</strong>
//                 </p>
//               </div>

//               <p className="disc" style={discStyle}>
//                 {description}
//               </p>
//             </div>
//           </div>

//           {/* IMAGE */}
//           <div className={`col-lg-5 col-md-12 text-center ${textLeft ? 'order-lg-2 order-1' : 'order-lg-1 order-1'}`}>
//             <div className="main-thumnal-inner-about-three focus2-imgWrap">
//               <div className="thumbnail focus2-thumb">
//                 <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ GLOBAL CSS (works for all sections) */}
//       <style jsx global>{`
//         /* remove unwanted section gaps */
//        /* ===============================
//    CONSISTENT SECTION SPACING
//    =============================== */

// /* Desktop spacing between all focus sections */
// .focus2-wrap {
//   padding-top: 80px !important;
//   padding-bottom: 80px !important;
// }
//   /* ===============================
//    CONSISTENT SECTION SPACING
//    =============================== */

// /* Desktop spacing */
// .focus2-wrap {
//   padding-top: 100px !important;
//   padding-bottom: 100px !important; /* ✅ Bottom gap add kiya taake next section touch na ho */
//     /* (Optional) Halki line divider ke liye */
// }

// /* First focus block */
// .focus2-wrap:first-of-type {
//   padding-top: 50px !important;
// }

// /* Last focus block se bottom border hata dein agar zaroorat ho */
// .focus2-wrap:last-of-type {
//   border-bottom: none;
//   padding-bottom: 100px !important; /* Sabse last section ke niche extra space */
// }

// /* Mobile spacing */
// @media (max-width: 768px) {
//   .focus2-wrap {
//     padding-top: 50px !important;
//     padding-bottom: 50px !important; /* Mobile par bhi gap ensure kiya */
//   }
// }

// /* First focus block thoda kam gap se start ho */
// .focus2-wrap:first-of-type {
//   padding-top: 50px !important;
// }

// /* Mobile spacing */
// @media (max-width: 768px) {
//   .focus2-wrap {
//     padding-top: 50px !important;
//     padding-bottom: 50px !important;
//   }
// }


//         /* ===============================
//            DESKTOP: heading starts with image + ends with image
//            =============================== */
//         @media (min-width: 992px) {
//           /* make both columns same height */
//           .focus2-row {
//             align-items: stretch !important;
//           }

//           /* fixed consistent image height (prototype-like) */
//           .focus2-thumb img {
//             height: 420px !important; /* ✅ set ONE consistent height */
//             width: 100%;
//             object-fit: cover;
//             border-radius: 14px;
//             display: block;
//           }

//           /* text column SAME height as image */
//           .focus2-textFill {
//             height: 420px; /* ✅ must match image height */
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between; /* ✅ heading top, para reaches bottom */
//           }
//         }

//         /* ===============================
//            MOBILE: image top, text bottom
//            =============================== */
//         @media (max-width: 768px) {
//           .focus2-imgWrap {
//             margin-bottom: 18px;
//           }

//           .focus2-thumb img {
//             height: auto !important;
//             aspect-ratio: 16 / 10;
//             width: 100% !important;
//             object-fit: cover;
//             border-radius: 14px;
//           }

//           .focus2-textFill {
//             height: auto !important;
//             display: block !important;
//           }

//           .about-content-right-three {
//             padding: 0 12px;
//             text-align: left;
//           }

//           .about-content-right-three h2 {
//             font-size: 30px !important;
//             line-height: 1.25;
//           }

//           .disc {
//             font-size: 15px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* ------------------------------
//    MAIN COMPONENT (ALL SECTIONS)
// ------------------------------ */

// const GBAFocusAreas: React.FC = () => {
//   return (
//     <>
//       {/* 2. Global Business Engagement (Text Left, Image Right) */}
//       <FocusArea
//         sectionNumber={2}
//         title="Global Business Engagement"
//         subtitle="Connecting People, Ideas, And Opportunities Across Borders"
//         description={`Serving as a bridge between Gujranwala’s industries and the global business community, GBA
//                     connects entrepreneurs, investors, and trade organisations to foster cooperation, build trust,
//                     and create long-term partnerships. Its networking initiatives bring together business leaders,
//                     policymakers, and industry experts from around the world through trade delegations, business
//                     forums, and B2B engagement platforms. These interactions encourage knowledge sharing, investment
//                     opportunities, and collaborative ventures that help businesses expand their reach and strengthen
//                     their international presence. Beyond connections, the Alliance focuses on developing member
//                     capacity through training sessions, seminars, and knowledge exchange programs that promote
//                     global business understanding, cross-cultural engagement, and modern trade practices. By
//                     cultivating collaboration and shared growth, GBA continues to position Gujranwala as a vital hub
//                     for international business cooperation.`}
//         imageSrc="/images/Focus2/Global Business.png"
//         imageAlt="Global Business"
//         textLeft={true}
//       />

//       {/* 3. Enhancing Industrial Competitiveness (Image Left, Text Right) */}
//       <FocusArea
//         sectionNumber={3}
//         title="Enhancing Industrial Competitiveness"
//         subtitle="Empowering Enterprises for Sustainable Growth"
//         description={`Dedicated to empowering local enterprises, GBA provides guidance, knowledge, and strategic
//                     support to help businesses thrive in a competitive global market. It connects entrepreneurs with
//                     experienced facilitators and industry experts who offer practical advice on improving performance,
//                     identifying growth opportunities, and addressing operational challenges. Through collaborations
//                     with educational institutions, business professionals, and development organisations, the Alliance
//                     designs specialised training programs tailored to industry needs. These initiatives enhance
//                     managerial capacity, strengthen business systems, and build the leadership skills required for
//                     long-term success. By supporting businesses in refining strategies, streamlining operations, and
//                     improving competitiveness, GBA continues to nurture a resilient, future-ready business community.`}
//         imageSrc="/images/Focus2/Enhancing Industrial.png"
//         imageAlt="Enhancing Industrial"
//         textLeft={false}
//       />

//       {/* 4. Advancing Global Trade and Investment (Text Left, Image Right) */}
//       <FocusArea
//         sectionNumber={4}
//         title="Advancing Global Trade and Investment"
//         subtitle="Building Partnerships that Drive Sustainable Economic Growth"
//         description={`Advancing international economic cooperation is a central pillar of GBA’s mission. The Alliance
//                     works to strengthen Gujranwala’s global economic footprint through strategic engagement with
//                     partner countries, trade bodies, and investment organisations. Our focus is on fostering long-term
//                     relationships that enhance market access, attract investment, and create opportunities for trade,
//                     technology transfer, and industrial collaboration. Through structured partnerships, GBA
//                     facilitates direct interaction between businesses, chambers of commerce, and government
//                     institutions worldwide. These engagements lead to new export channels, joint ventures, and
//                     collaborative projects that integrate Gujranwala’s industries more deeply into the global value
//                     chain. Working alongside diplomatic missions, development agencies, and policy institutions, the
//                     Alliance promotes transparent trade practices, investment-friendly frameworks, and equitable
//                     market access. By cultivating trust, innovation, and shared growth, GBA continues to position
//                     Gujranwala as a credible, competitive, and globally connected hub for trade and investment
//                     cooperation.`}
//         imageSrc="/images/Focus2/Advancing Global.png"
//         imageAlt="Advancing Global"
//         textLeft={true}
//       />

//       {/* 5. Entrepreneurship & Leadership Development (Image Left, Text Right) */}
//       <FocusArea
//         sectionNumber={5}
//         title="Entrepreneurship & Leadership Development"
//         subtitle="Nurturing Visionaries for Tomorrow’s Global Economy"
//         description={`Entrepreneurship and leadership are the driving forces behind innovation, competitiveness, and
//                     sustainable growth. GBA is committed to cultivating a new generation of entrepreneurs and
//                     business leaders who can shape the future of Gujranwala’s industrial and economic landscape.
//                     Through mentorship programs, startup incubation, and leadership training, the Alliance provides
//                     young entrepreneurs with the tools, exposure, and confidence needed to transform ideas into
//                     successful enterprises. In partnership with universities, innovation centres, and international
//                     business forums, GBA promotes an entrepreneurial culture that encourages creativity, resilience,
//                     and strategic thinking. By equipping emerging leaders with global perspectives, professional
//                     networks, and practical skills, GBA continues to empower Gujranwala’s youth to become catalysts
//                     of growth - driving innovation, fostering inclusive economic development, and representing the
//                     region with pride in the global business arena.`}
//         imageSrc="/images/Focus2/Developing Leaders.png"
//         imageAlt="Developing Leaders"
//         textLeft={false}
//       />

//       {/* 6. Strengthening Industry - Academia Linkages (Text Left, Image Right) */}
//       <FocusArea
//         sectionNumber={6}
//         title="Strengthening Industry - Academia Linkages"
//         subtitle="Bridging Knowledge, Innovation, and Industry Needs"
//         description={`Collaboration between academia and industry is a cornerstone of innovation and sustainable
//                     economic growth. In leading economies, such partnerships have played a vital role in developing
//                     critical skills, advancing research, and fostering entrepreneurship. Recognising its importance,
//                     GBA is committed to building a strong bridge between Gujranwala’s industrial sector and academic
//                     institutions. The Alliance works to align academic research, training, and curricula with the
//                     evolving needs of industry, ensuring that graduates are equipped with practical knowledge and
//                     relevant technical expertise. Through joint research projects, internships, innovation programs,
//                     and entrepreneurship development initiatives, GBA promotes the commercialisation of ideas and the
//                     creation of market-driven solutions. By fostering continuous collaboration between universities,
//                     research centres, and industrial enterprises, GBA aims to cultivate a knowledge-based economy
//                     where innovation, skill development, and applied research drive industrial advancement and
//                     regional competitiveness.`}
//         imageSrc="/images/Focus2/Strengthening Industry.png"
//         imageAlt="Strengthening Industry"
//         textLeft={true}
//       />
//     </>
//   );
// };

// export default GBAFocusAreas;


// GBAFocusAreas.tsx
'use client';

import React from 'react';

/* ------------------------------
   STYLES (content unchanged)
   ✅ ONLY GAP FIX (top/bottom spacing)
------------------------------ */

const containerStyle: React.CSSProperties = {
  marginTop: '0px',
  paddingTop: 0,
};

// ✅ keep your existing margins if you want (not changing image/text alignment)
const rowMarginTopDefault: React.CSSProperties = { marginTop: '90px' };
const rowMarginTopFirst: React.CSSProperties = { marginTop: '50px' };

const titleStyle: React.CSSProperties = {
  fontSize: '48px',
  marginBottom: '10px',
  lineHeight: 1.15,
};

const subtitleStyle: React.CSSProperties = {
  fontWeight: 900,
  color: 'black',
  fontSize: '14px',
  marginBottom: '18px',
};

const subtitleStyleLarge: React.CSSProperties = {
  fontWeight: 900,
  color: 'black',
  fontSize: '16px',
  marginBottom: '18px',
};

const discStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.8,
  margin: 0,
};

const thumbnailImageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '14px',
  display: 'block',
  objectFit: 'cover',
};

/* ------------------------------
   COMPONENT
------------------------------ */

interface FocusAreaProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sectionNumber: number;
  textLeft?: boolean;
}

const FocusArea: React.FC<FocusAreaProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  sectionNumber,
  textLeft = true,
}) => {
  const rowMarginStyle = sectionNumber === 2 ? rowMarginTopFirst : rowMarginTopDefault;
  const currentSubtitleStyle = sectionNumber === 5 ? subtitleStyleLarge : subtitleStyle;

  return (
    // ✅ NEW: focus2-section controls equal top/bottom spacing
    <section className="focus2-section">
      <div className="rts-about-area rts-section-gap">
        <div className="container pt--40 focus2-container" style={containerStyle}>
          <div className="row g-5 focus2-row" style={rowMarginStyle}>
            {/* TEXT */}
            <div className={`col-lg-7 col-md-12 ${textLeft ? 'order-lg-1 order-2' : 'order-lg-2 order-2'}`}>
              <div className="about-content-right-three">
                <div className="title-style-three left">
                  <h2 style={titleStyle}>{title}</h2>
                  <p style={currentSubtitleStyle}>
                    <strong>{subtitle}</strong>
                  </p>
                </div>

                <p className="disc" style={discStyle}>
                  {description}
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className={`col-lg-5 col-md-12 text-center ${textLeft ? 'order-lg-2 order-1' : 'order-lg-1 order-1'}`}>
              <div className="main-thumnal-inner-about-three">
                <div className="thumbnail">
                  <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ GLOBAL CSS: ONLY TOP/BOTTOM GAP FIX (no image/text changes) */}
        <style jsx global>{`
          /* ===============================
             EQUAL TOP & BOTTOM GAPS (ALL SECTIONS)
             =============================== */

          /* IMPORTANT:
             Theme ki .rts-section-gap / .rts-about-area spacing ko ignore kar ke,
             hum apna wrapper use kar rahe hain.
          */

          .focus2-section {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }

          /* First section ko bhi equal hi rakho (agar same gap chahiye)
             If you want first one slightly smaller, change to 50px. */
          .focus2-section:first-of-type {
            padding-top: 80px !important;
          }

          /* Last section ke baad extra gap nahi chahiye to uncomment:
          .focus2-section:last-of-type {
            padding-bottom: 0px !important;
          }
          */

          @media (max-width: 768px) {
            .focus2-section {
              padding-top: 10px !important;
              padding-bottom: 10px !important;
            }
          }
        `}</style>
        <style jsx global>{`
  /* ===============================
     MOBILE VIEW RESPONSIVE HEADING & CONTENT
     =============================== */

  @media (max-width: 768px) {
    /* 1. Section Gaps Adjustments */
    .focus2-section {
      padding-top: 30px !important;
      padding-bottom: 30px !important;
    }

    /* 2. Main Title (H2) Responsiveness */
    /* Clamp use kiya hai taake font size screen ke sath barhe ya ghate */
    .title-style-three h2 {
      font-size: clamp(26px, 8vw, 34px) !important; 
      line-height: 1.2 !important;
      margin-bottom: 12px !important;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-align: left;
    }

    /* 3. Subtitle Styling */
    .title-style-three p {
      font-size: 13px !important;
      line-height: 1.4 !important;
      margin-bottom: 15px !important;
      text-align: left;
      font-weight: 800 !important;
    }

    /* 4. Paragraph (Description) */
    .disc {
      font-size: 15px !important;
      line-height: 1.6 !important;
      margin-top: 0 !important;
      text-align: left;
    }

    /* 5. Image & Row Adjustments */
    .focus2-row {
      margin-top: 20px !important; /* Row spacing tight kar di */
      display: flex;
      flex-direction: column; /* Mobile par stack order fix */
    }

    /* Mobile par Image hamesha pehle aaye aur gap ho */
    .order-1 {
      margin-bottom: 25px !important;
    }

    .focus2-container {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }

    /* Theme ki extra spacing remove karne ke liye */
    .rts-section-gap {
      padding: 0 !important;
    }
  }

  /* Very small screens (like iPhone SE) */
  @media (max-width: 400px) {
    .title-style-three h2 {
      font-size: 24px !important;
    }
  }
`}</style>
      </div>
    </section>
  );
};

/* ------------------------------
   MAIN COMPONENT (ALL SECTIONS)
------------------------------ */

const GBAFocusAreas: React.FC = () => {
  return (
    <>
      <FocusArea
        sectionNumber={2}
        title="Global Business Engagement"
        subtitle="Connecting People, Ideas, And Opportunities Across Borders"
        description={`Serving as a bridge between Gujranwala’s industries and the global business community, GBA
                    connects entrepreneurs, investors, and trade organisations to foster cooperation, build trust,
                    and create long-term partnerships. Its networking initiatives bring together business leaders,
                    policymakers, and industry experts from around the world through trade delegations, business
                    forums, and B2B engagement platforms. These interactions encourage knowledge sharing, investment
                    opportunities, and collaborative ventures that help businesses expand their reach and strengthen
                    their international presence. Beyond connections, the Alliance focuses on developing member
                    capacity through training sessions, seminars, and knowledge exchange programs that promote
                    global business understanding, cross-cultural engagement, and modern trade practices. By
                    cultivating collaboration and shared growth, GBA continues to position Gujranwala as a vital hub
                    for international business cooperation.`}
        imageSrc="/images/Focus2/Global Business.png"
        imageAlt="Global Business"
        textLeft={true}
      />

      <FocusArea
        sectionNumber={3}
        title="Enhancing Industrial Competitiveness"
        subtitle="Empowering Enterprises for Sustainable Growth"
        description={`Dedicated to empowering local enterprises, GBA provides guidance, knowledge, and strategic
                    support to help businesses thrive in a competitive global market. It connects entrepreneurs with
                    experienced facilitators and industry experts who offer practical advice on improving performance,
                    identifying growth opportunities, and addressing operational challenges. Through collaborations
                    with educational institutions, business professionals, and development organisations, the Alliance
                    designs specialised training programs tailored to industry needs. These initiatives enhance
                    managerial capacity, strengthen business systems, and build the leadership skills required for
                    long-term success. By supporting businesses in refining strategies, streamlining operations, and
                    improving competitiveness, GBA continues to nurture a resilient, future-ready business community.`}
        imageSrc="/images/Focus2/Enhancing Industrial.png"
        imageAlt="Enhancing Industrial"
        textLeft={false}
      />

      <FocusArea
        sectionNumber={4}
        title="Advancing Global Trade and Investment"
        subtitle="Building Partnerships that Drive Sustainable Economic Growth"
        description={`Advancing international economic cooperation is a central pillar of GBA’s mission. The Alliance
                    works to strengthen Gujranwala’s global economic footprint through strategic engagement with
                    partner countries, trade bodies, and investment organisations. Our focus is on fostering long-term
                    relationships that enhance market access, attract investment, and create opportunities for trade,
                    technology transfer, and industrial collaboration. Through structured partnerships, GBA
                    facilitates direct interaction between businesses, chambers of commerce, and government
                    institutions worldwide. These engagements lead to new export channels, joint ventures, and
                    collaborative projects that integrate Gujranwala’s industries more deeply into the global value
                    chain. Working alongside diplomatic missions, development agencies, and policy institutions, the
                    Alliance promotes transparent trade practices, investment-friendly frameworks, and equitable
                    market access. By cultivating trust, innovation, and shared growth, GBA continues to position
                    Gujranwala as a credible, competitive, and globally connected hub for trade and investment
                    cooperation.`}
        imageSrc="/images/Focus2/Advancing Global.png"
        imageAlt="Advancing Global"
        textLeft={true}
      />

      <FocusArea
        sectionNumber={5}
        title="Entrepreneurship & Leadership Development"
        subtitle="Nurturing Visionaries for Tomorrow’s Global Economy"
        description={`Entrepreneurship and leadership are the driving forces behind innovation, competitiveness, and
                    sustainable growth. GBA is committed to cultivating a new generation of entrepreneurs and
                    business leaders who can shape the future of Gujranwala’s industrial and economic landscape.
                    Through mentorship programs, startup incubation, and leadership training, the Alliance provides
                    young entrepreneurs with the tools, exposure, and confidence needed to transform ideas into
                    successful enterprises. In partnership with universities, innovation centres, and international
                    business forums, GBA promotes an entrepreneurial culture that encourages creativity, resilience,
                    and strategic thinking. By equipping emerging leaders with global perspectives, professional
                    networks, and practical skills, GBA continues to empower Gujranwala’s youth to become catalysts
                    of growth - driving innovation, fostering inclusive economic development, and representing the
                    region with pride in the global business arena.`}
        imageSrc="/images/Focus2/Developing Leaders.png"
        imageAlt="Developing Leaders"
        textLeft={false}
      />

      <FocusArea
        sectionNumber={6}
        title="Strengthening Industry - Academia Linkages"
        subtitle="Bridging Knowledge, Innovation, and Industry Needs"
        description={`Collaboration between academia and industry is a cornerstone of innovation and sustainable
                    economic growth. In leading economies, such partnerships have played a vital role in developing
                    critical skills, advancing research, and fostering entrepreneurship. Recognising its importance,
                    GBA is committed to building a strong bridge between Gujranwala’s industrial sector and academic
                    institutions. The Alliance works to align academic research, training, and curricula with the
                    evolving needs of industry, ensuring that graduates are equipped with practical knowledge and
                    relevant technical expertise. Through joint research projects, internships, innovation programs,
                    and entrepreneurship development initiatives, GBA promotes the commercialisation of ideas and the
                    creation of market-driven solutions. By fostering continuous collaboration between universities,
                    research centres, and industrial enterprises, GBA aims to cultivate a knowledge-based economy
                    where innovation, skill development, and applied research drive industrial advancement and
                    regional competitiveness.`}
        imageSrc="/images/Focus2/Strengthening Industry.png"
        imageAlt="Strengthening Industry"
        textLeft={true}
      />
    </>
  );
};

export default GBAFocusAreas;
