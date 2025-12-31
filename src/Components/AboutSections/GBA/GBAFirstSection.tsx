


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// // -----------------------------------------------------------------------
// // 1. CSS Styles as React.CSSProperties Objects (for reusability and clarity)
// // -----------------------------------------------------------------------

// // Watermark style (Outline effect for 'About Us' and 'Mission & Vission')
// // Using !important in styles is generally discouraged in React/Next.js, 
// // but necessary here to override strong theme classes, similar to the original CSS.
// const watermarkBgTitleStyle: React.CSSProperties = {
//     fontSize: '150px',
//     fontWeight: '900', 
//     color: 'transparent', 
//     WebkitTextStroke: '1px #e0e0e0', // Outline
//     // textStroke: '1px #e0e0e0',       // Outline
//     lineHeight: '1', 
//     opacity: 0.5, 
//     position: 'absolute', // To act as a background element
//     zIndex: 0,
//     top: '-50px', // Adjusted to match expected position
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '100%',
//     textAlign: 'center',
//     display: 'block',
// };

// // Main Heading Container style (fixes for the negative margin offset)
// const mainHeadingContainerStyle: React.CSSProperties = {
//     marginTop: '-100px', // Original negative margin
//     fontSize: '16px',
// };

// // Main Heading (H1) style
// const mainHeadingStyle: React.CSSProperties = {
//     marginTop: '-45px', // Original negative margin
//     fontWeight: 800,
//     fontSize: '48px',
// };

// // Paragraph style
// const paragraphStyle: React.CSSProperties = {
//     fontSize: '15px',
// };

// // Mission & Vision Section Top Margin fix
// const missionVisionSectionStyle: React.CSSProperties = {
//     marginTop: '-110px', // Original negative margin
// };

// // Mission & Vision BG-Title style (different size than 'About Us')
// const missionVisionBgTitleStyle: React.CSSProperties = {
//     ...watermarkBgTitleStyle, // Inherit base watermark styles
//     marginTop: '-40px',
//     fontSize: '100px', // Smaller font for longer text
//     top: '0px', // Reset top position
// };

// // Mission & Vision H2 style
// const missionVisionTitleStyle: React.CSSProperties = {
//     fontSize: '48px',
// };

// // -----------------------------------------------------------------------
// // 2. THE COMPONENT
// // -----------------------------------------------------------------------
// const AboutSection: React.FC = () => {
//     return (
//         <>
//             {/* ---------------------------------------------------- */}
//             {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (About GBA) */}
//             {/* ---------------------------------------------------- */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Watermark: Note the use of style={...} to apply the watermark look */}
//                                 <span className="bg-title" style={watermarkBgTitleStyle}>About Us</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Decorative Shapes (paths adjusted for Next.js public folder) */}
//                 <div className="shape-area">
//                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//                 </div>
//             </div>

//             {/* Main About Us Content */}
//             <div className="rts-about-area rts-section-gap">
//                 <div className="container pt--40" style={{ marginTop: '-300px' }}> {/* CRITICAL: Original fixed negative margin for overlap */}
                    
//                     {/* Heading Block */}
//                     <div style={mainHeadingContainerStyle}>
//                         <p>About GBA</p>
//                         <h1 style={mainHeadingStyle}>Gujranwala <br />Business Alliance</h1>
//                     </div>

//                     <div className="row" style={{ marginTop: '100px' }}>
                        
//                         {/* Left Column: Image */}
//                         <div className="col-lg-5">
//                             <div className="main-thumnal-inner-about-three">
//                                 <div className="about-thumbnail-style-three">
//                                     <div className="thumbnail">
//                                         {/* Image path adjusted from assets/... to /... */}
//                                         <Image src='/images/GBA/GBA - Industry.jpg' alt="about" width={500} height={400} style={{ width: '100%', height: 'auto' }} />
//                                     </div>
//                                 </div>
//                                 <div className="shape">
//                                     <Image src="/images/about/shape/04.svg" alt="about" width={200} height={200} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column: Description */}
//                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//                             <div className="about-content-right-three">
//                                 <div className="title-style-three left">
//                                     {/* Empty div for structure */}
//                                 </div>
//                                 <p className="disc" style={paragraphStyle}>
//                                     The **Gujranwala Business Alliance (GBA)** is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
//                                     <br /><br />
//                                     Established in 2021, GBA has emerged as a trusted advocate and facilitator for business growth, working closely with industry leaders, government institutions, diplomatic missions, and international trade organisations. Supported by a vast network of over 1,500 national and international partners - including chambers of commerce, private enterprises, universities, and development agencies across Asia, Europe, Africa, and the Middle East - the Alliance has built strong linkages that drive industrial advancement, enhance export competitiveness, and expand access to global markets.
//                                     <br /><br />
//                                     Through trade delegations, business forums, expos, and B2B initiatives, GBA highlights Gujranwala’s industrial strength on the global stage. It also leads capacity-building programs, knowledge partnerships, and industry–academia collaborations that drive innovation and entrepreneurship. By integrating business, knowledge, and international cooperation, GBA continues to position Gujranwala as a globally connected industrial hub contributing to Pakistan’s sustainable economic progress.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
            
          
//             <style jsx global>{`
//                 /* --- Mobile Styles (max-width: 768px) --- */
//                 @media (max-width: 768px) {
//                     /* SECTION 1: Breadcrumb/Top Banner Area */
//                     .rts-breadcrumb-area.top-300 {
//                         padding-top: 50px !important; 
//                         padding-bottom: 20px !important;
//                         margin-top: 0 !important;
//                         height: auto !important; /* Allow height to adjust */
//                     }
//                     .rts-breadcrumb-area .title-area-left .bg-title {
//                         font-size: 70px !important; 
//                         opacity: 0.25 !important;
//                         top: -90px !important; 
//                         left: 0 !important;
//                         transform: none !important;
//                         width: 100% !important;
//                         text-align: center !important;
//                         padding-top: 20px !important;
//                     }
//                     .rts-breadcrumb-area .shape-area {
//                         display: none;
//                     }
//                     .rts-breadcrumb-area .title-area-left {
//                         text-align: center !important;
//                     }

//                     /* SECTION 1: Heading Block Adjustments (margin-top: -100px wala div) */
//                     div[style*="margin-top: -100px"] {
//                         margin-top: -20px !important; 
//                         padding-top: 0 !important;
//                         padding-left: 15px; /* Add default horizontal padding */
//                         padding-right: 15px;
//                     }
//                     div[style*="margin-top: -100px"] p {
//                         font-size: 16px;
//                         margin-bottom: 5px; 
//                     }
//                     div[style*="margin-top: -100px"] h1 {
//                         margin-top: -5px !important; 
//                         font-size: 30px !important; 
//                         line-height: 1.1;
//                     }

//                     /* SECTION 2: Mission & Vision Area Adjustments */
//                     .rts-about-area {
//                         padding-top: 30px !important; 
//                     }
//                     .rts-about-area .bg-title[style*="font-size: 100px"] {
//                         font-size: 40px !important; 
//                         opacity: 0.25 !important;
//                         margin-top: -15px !important; 
//                         width: 100% !important;
//                         text-align: center !important;
//                         margin-left: 0 !important;
//                         padding: 0 10px; 
//                     }
//                     .rts-about-area h2.title {
//                         font-size: 30px !important; 
//                     }

//                     /* Utility Class Overrides for Mobile Spacing */
//                     .mt_md--80, .mt_sm--80 {
//                         margin-top: 30px !important; 
//                     }
//                     .pr--100, .pl--100 {
//                         padding-right: 15px !important; 
//                         padding-left: 15px !important; 
//                     }
//                     .col-lg-7.pl--100.pl_md--0.mt_md--80.pl_sm--0.mt_sm--80 {
//                         padding-left: 15px !important; /* Ensure padding is reset */
//                         padding-right: 15px !important;
//                     }
//                     /* Ensure second section's image column padding is reset if it were present */
//                     .col-lg-7.pr--100.pr_md--0.mt_md--80.pr_sm--0.mt_sm--80 {
//                         padding-right: 15px !important; /* Ensure padding is reset */
//                         padding-left: 15px !important;
//                     }
                    
//                 }


                
//             `}</style>




//     <style jsx global>{`
//                 /* --- General Mobile Settings (Applies up to 768px) --- */
//                 @media (max-width: 768px) {
                    
//                     /* Utility Class Overrides for Mobile Spacing */
//                     /* Ensures padding/margins are appropriate for small screens */
//                     .mt_md--80, .mt_sm--80 {
//                         margin-top: 30px !important; 
//                     }
//                     .pr--100, .pl--100, .pl_md--0, .pl_sm--0 {
//                         padding-right: 15px !important; 
//                         padding-left: 15px !important; 
//                     }
                    
//                     /* Reset the main container's overlapping margin */
//                     .rts-about-area .container.pt--40[style*="margin-top: -300px"] {
//                         margin-top: 0px !important; 
//                         padding-top: 20px !important;
//                     }
                    
//                     /* SECTION 1: Breadcrumb/Top Banner Area */
//                     .rts-breadcrumb-area.top-300 {
//                         padding-top: 50px !important; 
//                         padding-bottom: 20px !important;
//                         margin-top: 0 !important;
//                         height: auto !important; 
//                     }
                    
//                     /* Watermark Title ('About Us') responsiveness */
//                     .rts-breadcrumb-area .title-area-left .bg-title {
//                         font-size: 70px !important; 
//                         opacity: 0.25 !important;
//                         /* Reposition for mobile */
//                         top: -90px !important; 
//                         left: 0 !important;
//                         transform: none !important;
//                         width: 100% !important;
//                         text-align: center !important;
//                         padding-top: 20px !important;
//                     }
                    
//                     /* Hide decorative shapes on mobile */
//                     .rts-breadcrumb-area .shape-area {
//                         display: none;
//                     }

//                     /* SECTION 1: Main Heading Block Adjustments (GBA Heading) */
//                     /* Target the div with the specific inline style */
//                     div[style*="margin-top: -100px"] {
//                         margin-top: 0px !important; 
//                         padding-top: 0 !important;
//                         padding-left: 15px; 
//                         padding-right: 15px;
//                     }
//                     /* Main heading text adjustments */
//                     div[style*="margin-top: -100px"] h1 {
//                         margin-top: 0px !important; 
//                         font-size: 30px !important; 
//                         line-height: 1.1;
//                     }

//                     /* SECTION 2: Mission & Vision Watermark */
//                     .rts-about-area .bg-title[style*="font-size: 100px"] {
//                         font-size: 40px !important; 
//                         opacity: 0.25 !important;
//                         margin-top: -15px !important; 
//                         text-align: left !important;
//                     }
                    
//                     /* Mission & Vision H2 title size */
//                     .rts-about-area h2.title {
//                         font-size: 30px !important; 
//                     }
                    
//                     /* Mission & Vision H3 title size */
//                     .rts-about-area h3.title {
//                         font-size: 24px !important; 
//                         margin-top: 10px !important;
//                         margin-bottom: 5px !important;
//                     }
                    
//                     /* Ensure description text wraps naturally and looks good */
//                     .rts-about-area p.disc {
//                         font-size: 14px !important;
//                     }
                    
//                     /* Mission & Vision Stacking: Ensure columns stack on mobile */
//                     .rts-about-area .row .col-lg-6 {
//                         width: 100% !important;
//                         flex: 0 0 100% !important;
//                     }
//                 }
//             `}</style>
                
//         </>
//     );
// };

// export default AboutSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// // -----------------------------------------------------------------------
// // 1. CSS Styles as React.CSSProperties Objects (for reusability and clarity)
// // -----------------------------------------------------------------------

// // Watermark style (Outline effect for 'About Us' and 'Mission & Vission')
// const watermarkBgTitleStyle: React.CSSProperties = {
//     fontSize: '150px',
//     fontWeight: '900', 
//     color: 'transparent', 
//     WebkitTextStroke: '1px #e0e0e0', // Outline
//     // textStroke: '1px #e0e0e0',      // Outline
//     lineHeight: '1', 
//     opacity: 0.5, 
//     position: 'absolute', // To act as a background element
//     zIndex: 0,
//     top: '-50px', // Adjusted to match expected position
//     // --- ADJUSTED WATERMARK STYLES TO MOVE IT TO THE LEFT LIKE THE IMAGE ---
//     left: '0', 
//     transform: 'translateX(0%)', // Removed centering transform
//     width: '100%',
//     textAlign: 'left', // Aligned to the left
//     // ------------------------------------------------------------------------
//     display: 'block',
//     paddingLeft: '15px', // Add some padding to prevent touching the edge
// };

// // Main Heading Container style (fixes for the negative margin offset)
// const mainHeadingContainerStyle: React.CSSProperties = {
//     marginTop: '-100px', // Original negative margin
//     fontSize: '16px',
//      marginLeft :'-20px',
    
// };

// // Main Heading (H1) style
// const mainHeadingStyle: React.CSSProperties = {
//     marginTop: '-45px', // Original negative margin
//     fontWeight: 800,
//     fontSize: '48px',
   
// };

// // Paragraph style
// const paragraphStyle: React.CSSProperties = {
//     fontSize: '15px',
    
// };

// // Mission & Vision Section Top Margin fix
// const missionVisionSectionStyle: React.CSSProperties = {
//     marginTop: '-110px', // Original negative margin
// };

// // Mission & Vision BG-Title style (different size than 'About Us')
// // This style is NOT adjusted as the request was specifically for the 'About Us' watermark match.
// const missionVisionBgTitleStyle: React.CSSProperties = {
//     ...watermarkBgTitleStyle, // Inherit base watermark styles
//     marginTop: '-40px',
//     fontSize: '100px', // Smaller font for longer text
//     top: '0px', // Reset top position
     
// };

// // Mission & Vision H2 style
// const missionVisionTitleStyle: React.CSSProperties = {
//     fontSize: '48px',
// };

// // -----------------------------------------------------------------------
// // 2. THE COMPONENT
// // -----------------------------------------------------------------------
// const AboutSection: React.FC = () => {
//     return (
//         <>
//             {/* ---------------------------------------------------- */}
//             {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (About GBA) */}
//             {/* ---------------------------------------------------- */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Watermark: Uses the adjusted watermarkBgTitleStyle */}
//                                 <span className="bg-title" style={watermarkBgTitleStyle}>About Us</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Decorative Shapes (paths adjusted for Next.js public folder) */}
//                 <div className="shape-area">
//                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//                 </div>
//             </div>

//             {/* Main About Us Content */}
//             <div className="rts-about-area rts-section-gap">
//                 <div className="container pt--40" style={{ marginTop: '-300px'  }}> {/* CRITICAL: Original fixed negative margin for overlap */}
                    
//                     {/* Heading Block */}
//                     <div style={mainHeadingContainerStyle}>
//                         <p style={{marginLeft:'10px'}}>About GBA</p>
//                         <h1 style={mainHeadingStyle}>Gujranwala <br />Business Alliance</h1>
//                     </div>

//                     <div className="row" style={{ marginTop: '100px' }}>
                        
//                         {/* Left Column: Image */}
//                         <div className="col-lg-5">
//                             <div className="main-thumnal-inner-about-three">
//                                 <div className="about-thumbnail-style-three">
//                                     <div className="thumbnail">
//                                         {/* Image path adjusted from assets/... to /... */}
//                                         <Image src='/images/GBA/GBA - Industry.jpg' alt="about" width={500} height={400} style={{ width: '100%', height: 'auto' }} />
//                                     </div>
//                                 </div>
//                                 <div className="shape">
//                                     <Image src="/images/about/shape/04.svg" alt="about" width={200} height={200} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column: Description */}
//                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//                             <div className="about-content-right-three">
//                                 <div className="title-style-three left">
//                                     {/* Empty div for structure */}
//                                 </div>
//                                 <p className="disc" style={paragraphStyle}>
//                                     The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
//                                     <br /><br />
//                                     Established in 2021, GBA has emerged as a trusted advocate and facilitator for business growth, working closely with industry leaders, government institutions, diplomatic missions, and international trade organisations. Supported by a vast network of over 1,500 national and international partners - including chambers of commerce, private enterprises, universities, and development agencies across Asia, Europe, Africa, and the Middle East - the Alliance has built strong linkages that drive industrial advancement, enhance export competitiveness, and expand access to global markets.
//                                     <br /><br />
//                                     Through trade delegations, business forums, expos, and B2B initiatives, GBA highlights Gujranwala’s industrial strength on the global stage. It also leads capacity-building programs, knowledge partnerships, and industry–academia collaborations that drive innovation and entrepreneurship. By integrating business, knowledge, and international cooperation, GBA continues to position Gujranwala as a globally connected industrial hub contributing to Pakistan’s sustainable economic progress.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
            
           

          
//                             
//         </>
//     );
// };

// export default AboutSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const AboutSection: React.FC = () => {
//     return (
//         <>
//             {/* --- SECTION 1: BREADCRUMB --- */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Watermark with custom class */}
//                                 <span className="bg-title watermark-about">About Us</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="shape-area">
//                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//                 </div>
//             </div>

//             {/* --- SECTION 2: MAIN CONTENT --- */}
//             <div className="rts-about-area rts-section-gap">
//                 {/* Main overlap container with custom class */}
//                 <div className="container pt--40 about-main-overlap">
                    
//                     {/* Heading Block with custom class */}
//                     <div className="about-heading-container">
//                         <p className="about-sub-label">About GBA</p>
//                         <h1 className="about-main-title">Gujranwala <br />Business Alliance</h1>
//                     </div>

//                     <div className="row about-content-row">
                        
//                         {/* Left Column: Image */}
//                         <div className="col-lg-5">
//                             <div className="main-thumnal-inner-about-three">
//                                 <div className="about-thumbnail-style-three">
//                                     <div className="thumbnail">
//                                         <Image 
//                                             src='/images/GBA/GBA - Industry.jpg' 
//                                             alt="about" 
//                                             width={500} 
//                                             height={400} 
//                                             style={{ width: '100%', height: 'auto' }} 
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="shape">
//                                     <Image src="/images/about/shape/04.svg" alt="about" width={200} height={200} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column: Description */}
//                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//                             <div className="about-content-right-three">
//                                 <p className="disc about-description-text">
//                                     The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
//                                     <br /><br />
//                                     Established in 2021, GBA has emerged as a trusted advocate and facilitator for business growth, working closely with industry leaders, government institutions, diplomatic missions, and international trade organisations. Supported by a vast network of over 1,500 national and international partners - including chambers of commerce, private enterprises, universities, and development agencies across Asia, Europe, Africa, and the Middle East - the Alliance has built strong linkages that drive industrial advancement, enhance export competitiveness, and expand access to global markets.
//                                     <br /><br />
//                                     Through trade delegations, business forums, expos, and B2B initiatives, GBA highlights Gujranwala’s industrial strength on the global stage. It also leads capacity-building programs, knowledge partnerships, and industry–academia collaborations that drive innovation and entrepreneurship. By integrating business, knowledge, and international cooperation, GBA continues to position Gujranwala as a globally connected industrial hub contributing to Pakistan’s sustainable economic progress.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- CONSOLIDATED STYLES --- */}
//             <style jsx global>{`
//                 /* DESKTOP STYLES - Matches your original design exactly */
//                 .watermark-about {
//                     font-size: 150px;
//                     font-weight: 900;
//                     color: transparent;
//                     -webkit-text-stroke: 1px #e0e0e0;
//                     line-height: 1;
//                     opacity: 0.5;
//                     position: absolute;
//                     z-index: 0;
//                     top: -50px;
//                     left: 0;
//                     width: 100%;
//                     text-align: left;
//                     display: block;
//                     padding-left: 15px;
//                 }

//                 .about-main-overlap {
//                     margin-top: -300px !important;
//                     position: relative;
//                 }

//                 .about-heading-container {
//                     margin-top: -100px;
//                     margin-left: -20px;
//                 }

//                 .about-sub-label {
//                     font-size: 16px;
//                     margin-left: 10px;
                      
//                 }

//                 .about-main-title {
//                     margin-top: -45px;
//                     font-weight: 800;
//                     font-size: 48px;
//                     line-height: 1.2;
//                 }

//                 .about-content-row {
//                     margin-top: 100px;
//                 }

//                 .about-description-text {
//                     font-size: 15px;
//                     line-height: 1.6;
//                 }

//                 /* MOBILE RESPONSIVE STYLES */
//                 @media (max-width: 768px) {
//                     .about-main-overlap {
//                         margin-top: 0 !important;
//                         padding-left: 20px !important;
//                         padding-right: 20px !important;
//                     }

//                     .about-heading-container {
//                         margin-left: 0 !important;
//                         margin-top: 0 !important;
//                     }

//                     .watermark-about {
//                         font-size: 60px !important;
//                         top: -20px !important;
//                         opacity: 0.80;
//                     }

//                     .about-main-title {
//                         font-size: 32px !important;
//                         margin-top: -10 !important;
//                     }

//                     .about-sub-label {
//                         margin-left: 0 !important;
//                         margin-top: 10px !important;
//                     }

//                     .about-content-row {
//                         margin-top: 30px !important;
//                     }

//                     .about-description-text {
//                         font-size: 14px !important;
//                     }

//                     .rts-breadcrumb-area.top-300 {
//                         padding-top: 60px !important;
//                         height: auto !important;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default AboutSection;


'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <>
            {/* --- SECTION 1: BREADCRUMB --- */}
            <div className="rts-breadcrumb-area top-300">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left" style={{ textAlign: 'left' }}>
                                <span className="bg-title watermark-about">About Us</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-area">
                    <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
                    <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
                    <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
                </div>
            </div>

            {/* --- SECTION 2: MAIN CONTENT --- */}
            <div className="rts-about-area rts-section-gap">
                <div className="container pt--40 about-main-overlap">
                    
                    <div className="about-heading-container">
                        <p className="about-sub-label">About GBA</p>
                        <h1 className="about-main-title">Gujranwala <br />Business Alliance</h1>
                    </div>

                    <div className="row about-content-row">
                        
                        <div className="col-lg-5">
                            <div className="main-thumnal-inner-about-three">
                                <div className="about-thumbnail-style-three">
                                    <div className="thumbnail">
                                        <Image 
                                            src='/images/GBA/GBA - Industry.jpg' 
                                            alt="about" 
                                            width={500} 
                                            height={400} 
                                            style={{ width: '100%', height: 'auto' }} 
                                        />
                                    </div>
                                </div>
                                <div className="shape">
                                    <Image src="/images/about/shape/04.svg" alt="about" width={200} height={200} />
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three">
                                <p className="disc about-description-text">
                                    The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
                                    <br /><br />
                                     Established in 2021, GBA has emerged as a trusted advocate and facilitator for business growth, working closely with industry leaders, government institutions, diplomatic missions, and international trade organisations. Supported by a vast network of over 1,500 national and international partners - including chambers of commerce, private enterprises, universities, and development agencies across Asia, Europe, Africa, and the Middle East - the Alliance has built strong linkages that drive industrial advancement, enhance export competitiveness, and expand access to global markets.
                                     <br /><br />
                                     Through trade delegations, business forums, expos, and B2B initiatives, GBA highlights Gujranwala’s industrial strength on the global stage. It also leads capacity-building programs, knowledge partnerships, and industry–academia collaborations that drive innovation and entrepreneurship. By integrating business, knowledge, and international cooperation, GBA continues to position Gujranwala as a globally connected industrial hub contributing to Pakistan’s sustainable economic progress.
                                </p>
                            </div>
                        </div> */}
                        
 <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three">
                                <p className="disc about-description-text">
                                    The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
                                    <br /><br />
                                    Established in 2021, GBA has emerged as a trusted advocate and facilitator for business growth, working closely with industry leaders, government institutions, diplomatic missions, and international trade organisations. Supported by a vast network of over 1,500 national and international partners - including chambers of commerce, private enterprises, universities, and development agencies across Asia, Europe, Africa, and the Middle East - the Alliance has built strong linkages that drive industrial advancement, enhance export competitiveness, and expand access to global markets.
                                    <br /><br />
                                    Through trade delegations, business forums, expos, and B2B initiatives, GBA highlights Gujranwala’s industrial strength on the global stage. It also leads capacity-building programs, knowledge partnerships, and industry–academia collaborations that drive innovation and entrepreneurship. By integrating business, knowledge, and international cooperation, GBA continues to position Gujranwala as a globally connected industrial hub contributing to Pakistan’s sustainable economic progress.
                                </p>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>

            {/* --- STYLES (ONLY GAP FIXED) --- */}
            <style jsx global>{`
                .watermark-about {
                    font-size: 150px;
                    font-weight: 900;
                    color: transparent;
                    -webkit-text-stroke: 1px #e0e0e0;
                    opacity: 0.5;
                    position: absolute;
                    top: -60px;
                }

                /* ✅ FIX 1: Breadcrumb padding reduced */
                .rts-breadcrumb-area.top-300 {
                    padding-top: 120px !important; /* 🔽 was too large */
                    padding-bottom: 50px !important;
                    height: auto !important;
                }

                /* ✅ FIX 2: Overlap reduced */
                .about-main-overlap {
                    margin-top: -160px !important; /* 🔽 was -300px */
                    position: relative;
                }

                .about-heading-container {
                    margin-top: -100px;
                    margin-left: -20px;
                }

                .about-content-row {
                    margin-top: 100px;
                }

                /* MOBILE (unchanged, already correct) */
                @media (max-width: 768px) {
                    .about-main-overlap {
                        margin-top: 0 !important;
                    }

                    .rts-breadcrumb-area.top-300 {
                        padding-top: 60px !important;
                    }
                }
                    @media (max-width: 768px) {

                    .rts-breadcrumb-area.top-300 {
                        padding-top: 70px !important;
                        padding-bottom: 30px !important;
                    }

                    .watermark-about {
                        font-size: 60px !important;
                        top: -20px !important;
                        opacity: 0.25;
                    }

                    .about-main-overlap {
                        margin-top: 0 !important;
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .about-heading-container {
                        margin-top: 0 !important;
                        margin-left: 0 !important;
                        text-align: left;
                    }

                    .about-sub-label {
                        font-size: 14px;
                        margin-bottom: 5px;
                    }

                    .about-main-title {
                        font-size: 30px;
                        line-height: 1.25;
                        margin-top: 0;
                    }

                    .about-content-row {
                        margin-top: 30px !important;
                    }

                    .about-description-text {
                        font-size: 14px;
                        line-height: 1.7;
                    }

                    .main-thumnal-inner-about-three {
                        margin-bottom: 30px;
                    }
                }
                    /* Watermark ko thora upar set karne ke liye */
.watermark-about {
    font-size: 150px;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px #e0e0e0;
    opacity: 0.5;
    position: absolute;
    top: -80px; /* Isay -60px se -80px kar dein */
    left: 0;
    z-index: 0;
}

/* "About GBA" text ki alignment */
.about-sub-label {
    margin-top: 60px !important; /* Isse text niche watermark ke darmiyan ayega */
    margin-bottom: 0px !important; /* Heading ke kareeb karne ke liye */
    display: block;
    position: relative;
    z-index: 1;
    color: #666;
    font-size: 16px;
    letter-spacing: 1px;
}

/* Main Heading ki alignment */
.about-main-title {
    margin-top: 5px !important; /* Heading aur sub-label ka gap khatam karne ke liye */
    line-height: 1.1;
    font-weight: 800;
}

/* Container ki overall position */
.about-heading-container {
    margin-top: -120px !important; 
    margin-left: 0px; /* Left alignment check karein */
    position: relative;
}
            `}</style>
           
            
            
        </>
    );
};

export default AboutSection;






