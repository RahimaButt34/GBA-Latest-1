

// // // // 'use client';

// // // // import React from 'react';
// // // // // import Image from 'next/image'; <-- REMOVED: Caused the resolution error. Using standard <img> tag instead.

// // // // // -----------------------------------------------------------------------
// // // // // 1. CSS Styles as React.CSSProperties Objects
// // // // // We define all necessary styles here to keep the JSX clean.
// // // // // Z-Index is crucial for the watermark overlap (Watermark: 3, Text Block: 2, Main Content: 1).
// // // // // -----------------------------------------------------------------------

// // // // // Watermark style for "Our Focus" (High Z-Index for overlap)
// // // // const watermarkBgTitleStyle: React.CSSProperties = {
// // // //     fontSize: '150px',
// // // //     marginLeft: '100px',
// // // //     color: 'rgba(0, 0, 0, 0.05)', // Light grey for watermark effect
// // // //     position: 'relative', 
// // // //     zIndex: 3,           
// // // //     display: 'block',    
// // // //     lineHeight: 1.0,
// // // // };

// // // // // Main Heading Container (div above p/h1 block)
// // // // const mainHeadingBlockStyle: React.CSSProperties = {
// // // //     marginTop: '-80px', // Original offset from the HTML
// // // //     position: 'relative', 
// // // //     zIndex: 2,           
// // // // };

// // // // // Paragraph/Pre-title style ("Enabling Growth")
// // // // const nameStyle: React.CSSProperties = {
// // // //     fontSize: '16px',
// // // //     marginLeft: '100px',
// // // //     marginTop: '10px', // Adjusted to reduce gap (was 50px)
// // // //     fontWeight: 500,
// // // //     color: '#333',
// // // // };

// // // // // Main Heading (H1) style ("Our Focus")
// // // // const mainHeadingStyle: React.CSSProperties = {
// // // //     fontWeight: 800,
// // // //     marginTop: '-10px', // Keeps it close to the paragraph
// // // //     fontSize: '48px',
// // // //     marginLeft: '100px',
// // // //     color: '#1a1a1a',
// // // // };

// // // // // Main Content Container (Handles the large overlap with the hero)
// // // // const mainContainerOverlapStyle: React.CSSProperties = {
// // // //     marginTop: '-300px',
// // // //     paddingTop: 10, // pt--10 from original HTML
// // // //     position: 'relative', 
// // // //     zIndex: 1, // Lowest z-index
// // // // };

// // // // // Title style for the inner section (Made In Gujranwala Promotion)
// // // // const innerTitleStyle: React.CSSProperties = {
// // // //     fontSize: '48px',
// // // //     lineHeight: 1.2,
// // // //     fontWeight: 800,
// // // //     marginBottom: 10,
// // // // };

// // // // // Subtitle/Tagline style
// // // // const innerSubtitleStyle: React.CSSProperties = {
// // // //     fontWeight: 900, 
// // // //     color: '#000', 
// // // //     fontSize: '14px',
// // // //     marginTop: 0,
// // // //     lineHeight: 1.5,
// // // // };

// // // // // Description Paragraph Style
// // // // const discStyle: React.CSSProperties = {
// // // //     fontSize: '15px',
// // // //     lineHeight: 1.6,
// // // //     color: '#555',
// // // //     textAlign: 'justify',
// // // // };

// // // // // Image Style for the inner thumbnail
// // // // const thumbnailImageStyle: React.CSSProperties = {
// // // //     width: '100%', 
// // // //     height: 'auto',
// // // //     borderRadius: '10px',
// // // //     display: 'block',
// // // // };


// // // // // -----------------------------------------------------------------------
// // // // // 2. THE COMPONENT
// // // // // -----------------------------------------------------------------------

// // // // const OurFocusSection: React.FC = () => {
// // // //     return (
// // // //         <>
// // // //             {/* ---------------------------------------------------- */}
// // // //             {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (Watermark) */}
// // // //             {/* ---------------------------------------------------- */}
// // // //             <div className="rts-breadcrumb-area top-300">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         <div className="col-lg-12">
// // // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // // //                                 {/* Watermark: Uses watermarkBgTitleStyle with z-index: 3 (Highest) */}
// // // //                                 <span className="bg-title" style={watermarkBgTitleStyle}>Our Focus</span>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Decorative Shapes - Using <img> tag instead of Next.js <Image> */}
// // // //                 <div className="shape-area">
// // // //                     <img src="/images/about/shape/01.png" alt="shape" className="one" style={{ width: 100, height: 100 }} />
// // // //                     <img src="/images/about/shape/02.png" alt="shape" className="two" style={{ width: 100, height: 100 }} />
// // // //                     <img src="/images/about/shape/03.png" alt="shape" className="three" style={{ width: 100, height: 100 }} />
// // // //                 </div>
// // // //             </div>

// // // //             {/* ---------------------------------------------------- */}
// // // //             {/* SECTION 2: MAIN CONTENT & FOCUS POINTS */}
// // // //             {/* ---------------------------------------------------- */}
// // // //             <div className="rts-about-area rts-section-gap">
// // // //                 {/* Main Container - Uses mainContainerOverlapStyle with z-index: 1 */}
// // // //                 <div className="container" style={mainContainerOverlapStyle}>
                    
// // // //                     {/* Header Text Block (Enabling Growth / Our Focus) */}
// // // //                     <div style={mainHeadingBlockStyle}>
// // // //                         <p style={nameStyle}> Enabling Growth</p>
// // // //                         <h1 style={mainHeadingStyle}>Our Focus</h1>
// // // //                     </div>

// // // //                     {/* ---------------------------------------------------- */}
// // // //                     {/* 1. FOCUS POINT: Made In Gujranwala Promotion */}
// // // //                     {/* ---------------------------------------------------- */}
// // // //                     <div className="rts-about-area rts-section-gap">
// // // //                         <div className="container pt--10">
// // // //                             <div className="row align-items-center g-5">

// // // //                                 {/* IMAGE LEFT */}
// // // //                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
// // // //                                     <div className="main-thumnal-inner-about-three">
// // // //                                         <div className="thumbnail">
// // // //                                             {/* Changed to standard <img> tag */}
// // // //                                             <img 
// // // //                                                 src="/images/Focus2/Made In Gujranwala.png" 
// // // //                                                 alt="Made In Gujranwala"
// // // //                                                 style={thumbnailImageStyle}
// // // //                                             />
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* TEXT RIGHT */}
// // // //                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
// // // //                                     <div className="about-content-right-three">
// // // //                                         <div className="title-style-three left">
// // // //                                             <h2 style={innerTitleStyle}>Made In Gujranwala <br /> Promotion</h2>
// // // //                                             <p style={innerSubtitleStyle}>
// // // //                                                 Building Global Pathways For Gujranwala’s Industrial Growth
// // // //                                             </p>
// // // //                                         </div>
// // // //                                         <br />
// // // //                                         <p className="disc" style={discStyle}>
// // // //                                             Gujranwala is home to a diverse range of industries that make a significant contribution
// // // //                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
// // // //                                             visibility of Gujranwala’s industrial base and promote the Made in Gujranwala brand across
// // // //                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
// // // //                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
// // // //                                             The Alliance works closely with international trade bodies, chambers of commerce, and
// // // //                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
// // // //                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
// // // //                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
// // // //                                             reputation as a key hub of industrial and trade excellence.
// // // //                                         </p>
// // // //                                     </div>
// // // //                                 </div>

// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Add more focus points here (e.g., focus point 2, 3, etc.) */}

// // // //                 </div>
// // // //             </div>

// // // //             {/* ---------------------------------------------------- */}
// // // //             {/* 3. GLOBAL STYLES (Responsive adjustments for mobile) */}
// // // //             {/* ---------------------------------------------------- */}
// // // //             <style jsx global>{`
// // // //                 /* General Reset for the custom classes */
// // // //                 .rts-breadcrumb-area, .rts-about-area {
// // // //                     /* Add necessary padding/margins if not already defined in global CSS */
// // // //                 }
                
// // // //                 /* Responsive adjustments for screens <= 768px */
// // // //                 @media (max-width: 768px) {
// // // //                     /* Watermark reset for vertical stacking on mobile */
// // // //                     .rts-breadcrumb-area .title-area-left .bg-title {
// // // //                         font-size: 65px !important;
// // // //                         margin-left: 0 !important;
// // // //                         margin-bottom: 50px !important;
// // // //                         position: static !important; 
// // // //                         z-index: auto !important;
// // // //                         text-align: center;
// // // //                     }

// // // //                     /* Header text block adjustments for mobile */
// // // //                     .rts-about-area .container {
// // // //                         margin-top: -100px !important; /* Less overlap on small screen */
// // // //                     }
                    
// // // //                     /* Pre-title "Enabling Growth" */
// // // //                     .rts-about-area p[style] {
// // // //                         margin-left: 0px !important;
// // // //                         text-align: center !important;
// // // //                         margin-top: 10px !important;
// // // //                     }
                    
// // // //                     /* Main heading "Our Focus" */
// // // //                     .rts-about-area h1[style] {
// // // //                         margin-left: 0px !important;
// // // //                         text-align: center !important;
// // // //                         font-size: 36px !important;
// // // //                         margin-top: 5px !important;
// // // //                     }
                    
// // // //                     /* Inner section titles */
// // // //                     .title-style-three h2 {
// // // //                         font-size: 32px !important;
// // // //                         text-align: center !important;
// // // //                     }
// // // //                     .title-style-three p {
// // // //                         text-align: center !important;
// // // //                     }
// // // //                     .about-content-right-three .disc {
// // // //                         text-align: left !important;
// // // //                     }

// // // //                     .g-5 { gap: 3rem !important; }
// // // //                 }

// // // //                 /* Hiding the Next.js layout='responsive' style injection issue */
// // // //                 .main-thumnal-inner-about-three img {
// // // //                     object-fit: cover;
// // // //                 }
// // // //             `}</style>
// // // //         </>
// // // //     );
// // // // };

// // // // export default OurFocusSection;


// // // // 'use client'
// // // // // src/app/focus/page.tsx (or similar file)

// // // // import React from 'react';
// // // // import Image from 'next/image';

// // // // const FocusPage = () => {
// // // //     return (
// // // //         <React.Fragment>
// // // //             {/* about us area wrapper main */}
// // // //             <div className="rts-breadcrumb-area top-300">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         <div className="col-lg-12">
// // // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // // //                                 {/* Note: Paths for background images (if any) are often handled by CSS */}
// // // //                                 <span className="bg-title" style={{ fontSize: '150px', marginLeft: '100px' }}>
// // // //                                     Our Focus
// // // //                                 </span>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //                 <div className="shape-area">
// // // //                     {/* Paths changed from assets/images/... to /images/... */}
// // // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} priority={false} />
// // // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} priority={false} />
// // // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} priority={false} />
// // // //                 </div>
// // // //             </div>

// // // //             {/* rts about area start */}
// // // //             <div className="rts-about-area rts-section-gap">
// // // //                 {/* Adjustments for the layout and container:
// // // //                     1. The negative margin on the container is a bit unusual. 
// // // //                        It's converted to camelCase for the style object.
// // // //                     2. The inner div also uses negative margin.
// // // //                 */}
// // // //                 <div className="container pt--10" style={{ marginTop: '-300px' }}>
// // // //                     <div style={{ marginTop: '-80px',  marginLeft: '-50px' }}>
// // // //                         <p style={{ fontSize: '16px', marginTop: '-90px', marginLeft: '100px' }}> 
// // // //                             Enabling Growth
// // // //                         </p>
// // // //                         <h1 style={{ fontWeight: 800, fontSize: '48px', marginLeft: '100px', marginTop: '-10px' }}>
// // // //                             Our Focus
// // // //                         </h1>
// // // //                     </div>

// // // //                     {/* 1 */}
// // // //                     <div className="rts-about-area rts-section-gap ">
// // // //                         <div className="container pt--10">
// // // //                             <div className="row align-items-center g-5">

// // // //                                 {/* IMAGE LEFT */}
// // // //                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
// // // //                                     <div className="main-thumnal-inner-about-three">
// // // //                                         <div className="thumbnail">
// // // //                                             {/* Use next/image for optimized images. Path changed from assets/images/... to /images/... 
// // // //                                                 Added 'width' and 'height' for Image component, essential for optimization.
// // // //                                                 You need to adjust these to the actual dimensions of the image. 
// // // //                                                 I've set arbitrary large values for example.
// // // //                                             */}
// // // //                                             <Image 
// // // //                                                 src="/images/Focus2/Made In Gujranwala.png" 
// // // //                                                 alt="Made In Gujranwala"
// // // //                                                 width={500} // Example width
// // // //                                                 height={400} // Example height
// // // //                                                 style={{ width: '90%', borderRadius: '10px',marginTop: '-100px'  }}
// // // //                                                 priority={false}
// // // //                                             />
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* TEXT RIGHT */}
// // // //                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
// // // //                                     <div className="about-content-right-three">
// // // //                                         <div className="title-style-three left" style={{ fontSize: '48px' }}>
// // // //                                             <h2>
// // // //                                                 Made In Gujranwala <br /> Promotion
// // // //                                             </h2>
// // // //                                             <p style={{ fontWeight: 900, color: 'black', fontSize: '14px' }}>
// // // //                                                 Building Global Pathways For Gujranwala’s Industrial Growth
// // // //                                             </p>
// // // //                                         </div>
// // // //                                         <br />
// // // //                                         <p className="disc" style={{ fontSize: '15px'  , marginTop :  '20px' }}>
// // // //                                             Gujranwala is home to a diverse range of industries that make a significant contribution
// // // //                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
// // // //                                             visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across
// // // //                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
// // // //                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
// // // //                                             The Alliance works closely with international trade bodies, chambers of commerce, and
// // // //                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
// // // //                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
// // // //                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
// // // //                                             reputation as a key hub of industrial and trade excellence.
// // // //                                         </p>
// // // //                                     </div>
// // // //                                 </div>

// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </React.Fragment>
// // // //     );
// // // // }

// // // // export default FocusPage;




// // // // 'use client'

// // // // import React from 'react';
// // // // import Image from 'next/image';

// // // // const FocusPage = () => {
// // // //     return (
// // // //         <React.Fragment>
// // // //             {/* --- SECTION 1: BREADCRUMB --- */}
// // // //             <div className="rts-breadcrumb-area top-300">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         <div className="col-lg-12">
// // // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // // //                                 <span className="bg-title watermark-focus">
// // // //                                     Our Focus
// // // //                                 </span>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //                 <div className="shape-area">
// // // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} priority={false} />
// // // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} priority={false} />
// // // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} priority={false} />
// // // //                 </div>
// // // //             </div>

// // // //             {/* --- SECTION 2: CONTENT AREA --- */}
// // // //             <div className="rts-about-area rts-section-gap">
// // // //                 <div className="container pt--10 focus-main-overlap">
                    
// // // //                     {/* Heading Block */}
// // // //                     <div className="focus-heading-wrapper">
// // // //                         <p className="focus-sub-label">Enabling Growth</p>
// // // //                         <h1 className="focus-main-title">Our Focus</h1>
// // // //                     </div>

// // // //                     <div className="rts-about-area rts-section-gap focus-content-section">
// // // //                         <div className="container pt--10">
// // // //                             <div className="row align-items-center g-5">

// // // //                                 {/* IMAGE LEFT */}
// // // //                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
// // // //                                     <div className="main-thumnal-inner-about-three">
// // // //                                         <div className="thumbnail">
// // // //                                             <Image 
// // // //                                                 src="/images/Focus2/Made In Gujranwala.png" 
// // // //                                                 alt="Made In Gujranwala"
// // // //                                                 width={500} 
// // // //                                                 height={400} 
// // // //                                                 className="focus-hero-image"
// // // //                                                 priority={false}
// // // //                                                 style={{marginTop:'-10px'}}

// // // //                                             />
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 {/* TEXT RIGHT */}
// // // //                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
// // // //                                     <div className="about-content-right-three">
// // // //                                         <div className="title-style-three left focus-text-heading">
// // // //                                             <h2>
// // // //                                                 Made In Gujranwala <br /> Promotion
// // // //                                             </h2>
// // // //                                             <p className="focus-accent-text">
// // // //                                                 Building Global Pathways For Gujranwala’s Industrial Growth
// // // //                                             </p>
// // // //                                         </div>
// // // //                                         <br />
// // // //                                         <p className="disc focus-description">
// // // //                                             Gujranwala is home to a diverse range of industries that make a significant contribution
// // // //                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
// // // //                                             visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across
// // // //                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
// // // //                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
// // // //                                             The Alliance works closely with international trade bodies, chambers of commerce, and
// // // //                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
// // // //                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
// // // //                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
// // // //                                             reputation as a key hub of industrial and trade excellence.
// // // //                                         </p>
// // // //                                     </div>
// // // //                                 </div>

// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* --- CONSOLIDATED STYLING --- */}
// // // //             <style jsx global>{`
// // // //                 /* DESKTOP STYLES - Matches your original output exactly */
// // // //                 .watermark-focus {
// // // //                     font-size: 150px;
// // // //                     margin-left: 100px;
// // // //                 }

// // // //                 .focus-main-overlap {
// // // //                     margin-top: -300px !important;
// // // //                 }

// // // //                 .focus-heading-wrapper {
// // // //                     margin-top: -80px;
// // // //                     margin-left: -50px;
// // // //                 }

// // // //                 .focus-sub-label {
// // // //                     font-size: 16px;
// // // //                     margin-top: -90px;
// // // //                     margin-left: 100px;
// // // //                 }

// // // //                 .focus-main-title {
// // // //                     font-weight: 800;
// // // //                     font-size: 48px;
// // // //                     margin-left: 100px;
// // // //                     margin-top: -10px;
// // // //                 }

// // // //                 .focus-content-section {
// // // //                     margin-top: 50px; /* Increased gap so heading doesn't touch image */
// // // //                 }

// // // //                 .focus-hero-image {
// // // //                     width: 100%;
// // // //                     border-radius: 10px;
// // // //                     margin-top: -100px;
// // // //                     height: 120%;
// // // //                 }

// // // //                 .focus-text-heading h2 {
// // // //                     font-size: 48px;
// // // //                 }

// // // //                 .focus-accent-text {
// // // //                     font-weight: 900;
// // // //                     color: black;
// // // //                     font-size: 12px;
// // // //                 }

// // // //                 .focus-description {
// // // //                     font-size: 15px;
// // // //                     margin-top: 20px;
// // // //                 }

// // // //                 /* MOBILE RESPONSIVE STYLES */
// // // //                 @media (max-width: 768px) {
// // // //                     .focus-main-overlap {
// // // //                         margin-top: 0 !important;
// // // //                         padding-left: 15px !important;
// // // //                         padding-right: 15px !important;
// // // //                     }

// // // //                     .focus-heading-wrapper,
// // // //                     .focus-sub-label,
// // // //                     .focus-main-title {
// // // //                         margin-left: 0 !important;
// // // //                         margin-top: 0 !important;
// // // //                         text-align: left;
// // // //                     }

// // // //                     .watermark-focus {
// // // //                         font-size: 50px !important;
// // // //                         margin-left: 15px !important;
// // // //                         opacity: 0.80;
// // // //                     }

// // // //                     .focus-main-title {
// // // //                         font-size: 34px !important;
// // // //                         margin-bottom: 20px;
// // // //                     }

// // // //                     .focus-hero-image {
// // // //                         margin-top: 20px !important; /* Fixed: No longer overlaps heading */
// // // //                         width: 100% !important;
// // // //                     }

// // // //                     .focus-text-heading h2 {
// // // //                         font-size: 30px !important;
// // // //                     }

// // // //                     .focus-content-section {
// // // //                         margin-top: 20px !important;
// // // //                         padding-top: 0 !important;
// // // //                     }

// // // //                     .rts-breadcrumb-area.top-300 {
// // // //                         padding-top: 60px !important;
// // // //                         height: auto !important;
// // // //                     }
// // // //                 }
// // // //             `}</style>
// // // //         </React.Fragment>
// // // //     );
// // // // }

// // // // export default FocusPage;




// // // 'use client'

// // // import React from 'react';
// // // import Image from 'next/image';

// // // const FocusPage = () => {
// // //     return (
// // //         <React.Fragment>
// // //             {/* --- SECTION 1: BREADCRUMB --- */}
// // //             <div className="rts-breadcrumb-area top-300">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         <div className="col-lg-12">
// // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // //                                 <span className="bg-title watermark-focus">
// // //                                     Our Focus
// // //                                 </span>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 <div className="shape-area">
// // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} priority={false} />
// // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} priority={false} />
// // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} priority={false} />
// // //                 </div>
// // //             </div>

// // //             {/* --- SECTION 2: CONTENT AREA --- */}
// // //             <div className="rts-about-area rts-section-gap">
// // //                 <div className="container pt--10 focus-main-overlap">
                    
// // //                     {/* Heading Block */}
// // //                     <div className="focus-heading-wrapper">
// // //                         <p className="focus-sub-label">Enabling Growth</p>
// // //                         <h1 className="focus-main-title">Our Focus</h1>
// // //                     </div>

// // //                     <div className="rts-about-area rts-section-gap focus-content-section">
// // //                         <div className="container pt--10">
// // //                             <div className="row align-items-center g-5">

// // //                                 {/* IMAGE LEFT */}
// // //                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
// // //                                     <div className="main-thumnal-inner-about-three">
// // //                                         <div className="thumbnail">
// // //                                             <Image 
// // //                                                 src="/images/Focus2/Made In Gujranwala.png" 
// // //                                                 alt="Made In Gujranwala"
// // //                                                 width={500} 
// // //                                                 height={400} 
// // //                                                 className="focus-hero-image"
// // //                                                 priority={false}
// // //                                                 style={{marginTop:'-10px'}}
// // //                                             />
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>

// // //                                 {/* TEXT RIGHT */}
// // //                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
// // //                                     <div className="about-content-right-three">
// // //                                         <div className="title-style-three left focus-text-heading">
// // //                                             <h2>
// // //                                                 Made In Gujranwala <br /> Promotion
// // //                                             </h2>
// // //                                             <p className="focus-accent-text">
// // //                                                 Building Global Pathways For Gujranwala’s Industrial Growth
// // //                                             </p>
// // //                                         </div>
// // //                                         <br />
// // //                                         <p className="disc focus-description">
// // //                                             Gujranwala is home to a diverse range of industries that make a significant contribution
// // //                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
// // //                                             visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across
// // //                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
// // //                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
// // //                                             The Alliance works closely with international trade bodies, chambers of commerce, and
// // //                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
// // //                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
// // //                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
// // //                                             reputation as a key hub of industrial and trade excellence.
// // //                                         </p>
// // //                                     </div>
// // //                                 </div>

// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* --- CONSOLIDATED STYLING --- */}
// // //             <style jsx global>{`
// // //                 /* ===============================
// // //                    FIX EXTRA GAPS (LIKE PIC 2)
// // //                    =============================== */

// // //                 /* 1) Breadcrumb top space (yehi main extra gap banata hai) */
// // //                 .rts-breadcrumb-area.top-300{
// // //                     padding-top: 140px !important;   /* was too much */
// // //                     padding-bottom: 70px !important; /* keep tight like prototype */
// // //                     height: auto !important;
// // //                     min-height: unset !important;
// // //                 }

// // //                 /* Watermark position/size stays */
// // //                 .watermark-focus {
// // //                     font-size: 150px;
// // //                     margin-left: 70px;
// // //                     margin-top:-20px;
// // //                 }

// // //                 /* 2) Outer section gap ko neutralize for this page look */
// // //                 .rts-about-area.rts-section-gap{
// // //                     padding-top: 0 !important;
// // //                     padding-bottom: 0 !important;
// // //                 }

// // //                 /* 3) Overlap: was -300 (bohat zyada), isi se blank area feel hota */
// // //                 .focus-main-overlap {
// // //                     margin-top: -100px !important;  /* ✅ tightened to match pic2 */
// // //                     padding-top: 0 !important;
// // //                 }

// // //                 /* 4) Heading block: negative margins remove to stop weird spacing */
// // //                 .focus-heading-wrapper {
// // //                     margin-top: 0px !important;
// // //                     margin-left: -70px !important;
// // //                     padding-top: 0 !important;
// // //                 }

// // //                 .focus-sub-label {
// // //                     font-size: 16px;
// // //                     margin: 0 !important;
// // //                     margin-left: 100px !important;
// // //                 }

// // //                 .focus-main-title {
// // //                     font-weight: 800;
// // //                     font-size: 48px;
// // //                     margin: 8px 0 0 100px !important; /* ✅ controlled spacing */
// // //                 }

// // //                 /* 5) Heading -> Image gap smaller like prototype */
// // //                 .focus-content-section {
// // //                     margin-top: 18px !important; /* was 50 */
// // //                     padding-top: 0 !important;
// // //                 }

// // //                 /* 6) Image: remove extra top pull & weird height */
// // //                 .focus-hero-image {
// // //                     width: 100%;
// // //                     border-radius: 10px;
// // //                     margin-top: 0px !important; /* ✅ no extra pull */
// // //                     height: auto !important;    /* ✅ avoid tall stretching */
// // //                 }

// // //                 .focus-text-heading h2 {
// // //                     font-size: 48px;
// // //                     margin-bottom: 6px;
// // //                 }

// // //                 .focus-accent-text {
// // //                     font-weight: 900;
// // //                     color: black;
// // //                     font-size: 12px;
// // //                     margin-top: 0;
// // //                 }

// // //                 .focus-description {
// // //                     font-size: 15px;
// // //                     margin-top: 14px; /* slightly tighter */
// // //                 }

// // //                 /* ===============================
// // //                    MOBILE RESPONSIVE STYLES
// // //                    =============================== */
// // //                 @media (max-width: 768px) {
// // //                     .rts-breadcrumb-area.top-300 {
// // //                         padding-top: 80px !important;
// // //                         padding-bottom: 35px !important;
// // //                         height: auto !important;
// // //                     }

// // //                     .focus-main-overlap {
// // //                         margin-top: 0 !important;
// // //                         padding-left: 15px !important;
// // //                         padding-right: 15px !important;
// // //                     }

// // //                     .watermark-focus {
// // //                         font-size: 50px !important;
// // //                         margin-left: 15px !important;
// // //                         opacity: 0.80;
// // //                         margin-top:50px;
// // //                     }

// // //                     .focus-heading-wrapper,
// // //                     .focus-sub-label,
// // //                     .focus-main-title {
// // //                         margin-left: 15px !important;
// // //                         text-align: left;
// // //                     }

// // //                     .focus-main-title {
// // //                         font-size: 34px !important;
// // //                         margin-top: 6px !important;
// // //                         margin-bottom: 12px !important;
// // //                     }

// // //                     .focus-content-section {
// // //                         margin-top: 14px !important;
// // //                         padding-top: 0 !important;
// // //                     }

// // //                     .focus-hero-image {
// // //                         margin-top: 0px !important;
// // //                         width: 100% !important;
// // //                         height: auto !important;
// // //                     }

// // //                     .focus-text-heading h2 {
// // //                         font-size: 30px !important;
// // //                     }
// // //                 }
// // //                     /* ===============================
// // //    MOBILE RESPONSIVE HEADING FIX
// // //    =============================== */
// // // @media (max-width: 768px) {
// // //     /* 1. Main Section Heading (Our Focus) */
// // //     .focus-main-title {
// // //         font-size: clamp(32px, 8vw, 40px) !important; /* Dynamically scales between 32px and 40px */
// // //         margin-left: 15px !important;
// // //         line-height: 1.2 !important;
// // //         letter-spacing: -1px;
// // //     }

// // //     /* 2. Content Item Heading (Made In Gujranwala Promotion) */
// // //     .focus-text-heading h2 {
// // //         font-size: clamp(26px, 7vw, 32px) !important; /* Shrinks smoothly on small phones */
// // //         line-height: 1.2 !important;
// // //         margin-bottom: 10px !important;
// // //         text-align: left;
// // //     }

// // //     /* 3. Sub-label (Enabling Growth) */
// // //     .focus-sub-label {
// // //         font-size: 14px !important;
// // //         margin-left: 15px !important;
// // //         text-transform: uppercase;
// // //         letter-spacing: 1px;
// // //     }

// // //     /* 4. Description Text */
// // //     .focus-description {
// // //         font-size: 14px !important;
// // //         line-height: 1.6 !important;
// // //         text-align: justify; /* Optional: cleaner look on mobile */
// // //     }

// // //     /* 5. Accent Text (The bold subtitle) */
// // //     .focus-accent-text {
// // //         font-size: 13px !important;
// // //         line-height: 1.4 !important;
// // //         display: block; /* Ensures it stays on its own block */
// // //     }

// // //     /* 6. Fix for very small screens (iPhone SE / etc) */
// // //     @media (max-width: 400px) {
// // //         .focus-main-title {
// // //             font-size: 28px !important;
// // //         }
// // //         .focus-text-heading h2 {
// // //             font-size: 24px !important;
// // //         }
// // //     }
// // // }
// // //             `}</style>
// // //         </React.Fragment>
// // //     );
// // // }

// // // export default FocusPage;


// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';

// // const OurFocusSection: React.FC = () => {
// //     return (
// //         <>
// //             {/* --- SECTION 1: BREADCRUMB --- */}
// //             <div className="rts-breadcrumb-area top-300">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-lg-12">
// //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// //                                 {/* SYNCED: Same styling as 'About Us' watermark */}
// //                                 <span className="bg-title watermark-focus">Our Focus</span>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="shape-area">
// //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
// //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
// //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
// //                 </div>
// //             </div>

// //             {/* --- SECTION 2: MAIN CONTENT --- */}
// //             <div className="rts-about-area rts-section-gap">
// //                 {/* SYNCED: Using the same overlap and heading container logic as GBA */}
// //                 <div className="container pt--40 focus-main-overlap">
                    
// //                     <div className="focus-heading-container">
// //                         <p className="focus-sub-label">Enabling Growth</p>
// //                         <h1 className="focus-main-title">Our Focus</h1>
// //                     </div>

// //                     <div className="row focus-content-row d-flex align-items-stretch">
                        
// //                         <div className="col-lg-5">
// //                             <div className="main-thumnal-inner-about-three" style={{ height: '100%' }}>
// //                                 <div className="about-thumbnail-style-three" style={{ height: '100%' }}>
// //                                     <div className="thumbnail" style={{ height: '100%' }}>
// //                                         <Image 
// //                                             src='/images/Focus2/Made In Gujranwala.png' 
// //                                             alt="Our Focus" 
// //                                             width={500} 
// //                                             height={600} 
// //                                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// //                             <div className="about-content-right-three h-100">
// //                                 <div className="title-style-three left">
// //                                     <h2 style={{ fontSize: '48px', fontWeight: '800' }}>Made In Gujranwala <br /> Promotion</h2>
// //                                     <p style={{ fontWeight: '900', color: 'black', fontSize: '14px', marginTop: '10px' }}>
// //                                         Building Global Pathways For Gujranwala’s Industrial Growth
// //                                     </p>
// //                                 </div>
// //                                 <p className="disc focus-description-text" style={{ textAlign: 'justify', marginTop: '20px' }}>
// //                                     Gujranwala is home to a diverse range of industries that make a significant contribution to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across international markets. Through strategic initiatives and collaborations, GBA highlights the city’s manufacturing excellence, product diversity, and export potential on global platforms.
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* --- STYLES SYNCED TO GBA SECTION --- */}
// //             <style jsx global>{`
// //                 .watermark-focus {
// //                     font-size: 150px;
// //                     font-weight: 900;
// //                     color: transparent;
// //                     -webkit-text-stroke: 1px #e0e0e0;
// //                     opacity: 0.5;
// //                     position: absolute;
// //                     top: -80px; /* Exact GBA alignment */
// //                     left: 0;
// //                     z-index: 0;
// //                 }

// //                 .rts-breadcrumb-area.top-300 {
// //                     padding-top: 150px !important;
// //                     padding-bottom: 55px !important;
// //                     height: auto !important;
// //                 }

// //                 .focus-main-overlap {
// //                     margin-top: -160px !important; /* Exact GBA overlap */
// //                     position: relative;
// //                 }

// //                 .focus-heading-container {
// //                     margin-top: -120px !important; /* Exact GBA alignment */
// //                     position: relative;
// //                 }

// //                 .focus-sub-label {
// //                     margin-top: 60px !important; /* Positions text relative to watermark */
// //                     margin-bottom: 0px !important;
// //                     display: block;
// //                     position: relative;
// //                     z-index: 1;
// //                     color: #666;
// //                     font-size: 16px;
// //                     letter-spacing: 1px;
// //                 }

// //                 .focus-main-title {
// //                     margin-top: 5px !important;
// //                     line-height: 1.1;
// //                     font-weight: 800;
// //                     font-size: 48px;
// //                 }

// //                 .focus-content-row {
// //                     margin-top: 100px;
// //                 }

// //                 .focus-description-text {
// //                     font-size: 15.5px !important;
// //                     line-height: 1.65;
// //                     color: #444;
// //                 }

// //                 /* Mobile Responsive Adjustments (Synced to GBA) */
// //                 @media (max-width: 768px) {
// //                     .watermark-focus {
// //                         font-size: 60px !important;
// //                         top: -20px !important;
// //                         opacity: 0.25;
// //                     }
// //                     .focus-main-overlap {
// //                         margin-top: 0 !important;
// //                     }
// //                     .focus-heading-container {
// //                         margin-top: 0 !important;
// //                         text-align: left;
// //                     }
// //                     .focus-main-title {
// //                         font-size: 30px;
// //                     }
// //                     .focus-content-row {
// //                         margin-top: 30px !important;
// //                     }
// //                 }
// //             `}</style>
// //         </>
// //     );
// // };

// // export default OurFocusSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const OurFocusSection: React.FC = () => {
//     return (
//         <>
//             {/* --- SECTION 1: BREADCRUMB (Header Area - Safe & Untouched) --- */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Watermark remains fixed in its correct position */}
//                                 <span className="bg-title watermark-focus">Our Focus</span>
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

//             {/* --- SECTION 2: MAIN CONTENT (Spacing and Image Corner Fixed) --- */}
//             <div className="rts-about-area focus-section-main">
//                 <div className="container focus-main-overlap">
                    
//                     <div className="focus-heading-container">
//                         <p className  ="focus-sub-label"    >Enabling Growth</p>
//                         <h1 className="focus-main-title">Our Focus</h1>
//                     </div>

//                     {/* GAP REDUCED: Between Title and Row */}
//                     <div className="row focus-content-row d-flex align-items-center">
                        
//                         <div className="col-lg-5">
//                             {/* CORNER FIX: Container ensures no half-cut edges */}
//                             <div className="focus-image-wrapper">
//                                 <Image 
//                                     src='/images/Focus2/Made In Gujranwala.png' 
//                                     alt="Our Focus" 
//                                     width={600} 
//                                     height={500} 
//                                     className="focus-image-styled"
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//                             <div className="about-content-right-three">
//                                 <div className="title-style-three left">
//                                     <h2 style={{ fontSize: '48px', fontWeight: '800' }}>Made In Gujranwala <br /> Promotion</h2>
//                                     <p style={{ fontWeight: '900', color: 'black', fontSize: '14px', marginTop: '10px' }}>
//                                         Building Global Pathways For Gujranwala’s Industrial Growth
//                                     </p>
//                                 </div>
//                                 {/* <p className="disc focus-description-text" style={{ textAlign: 'justify', marginTop: '20px' }}>
//                                     Gujranwala is home to a diverse range of industries that make a significant contribution to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across international markets. Through strategic initiatives and collaborations, GBA highlights the city’s manufacturing excellence, product diversity, and export potential on global platforms.
//                                 </p> */}
//                                 <p className="disc focus-description-text "  style={{ textAlign: 'justify', marginTop: '20px' }}>
//     Gujranwala is home to a diverse range of industries that make a significant contribution
//     to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
//     visibility of Gujranwala’s industrial base and promote the <strong>Made in Gujranwala</strong> brand across
//     international markets. Through strategic initiatives and collaborations, GBA highlights the
//     city’s manufacturing excellence, product diversity, and export potential on global platforms.
//     The Alliance works closely with international trade bodies, chambers of commerce, and
//     business councils to foster partnerships, facilitate B2B linkages, and create sustainable
//     export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
//     and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
//     reputation as a key hub of industrial and trade excellence.
// </p>


                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <style jsx global>{`
//                 /* 1. Header & Watermark Styles (DO NOT CHANGE) */
//                 .watermark-focus {
//                     font-size: 150px;
//                     font-weight: 900;
//                     color: transparent;
//                     -webkit-text-stroke: 1px #e0e0e0;
//                     opacity: 0.5;
//                     position: absolute;
//                     top: -80px;
//                     left: 0;
//                     z-index: 0;
//                 }

//                 .rts-breadcrumb-area.top-300 {
//                     padding-top: 150px !important;
//                     padding-bottom: 55px !important;
//                     height: auto !important;
//                 }

//                 .focus-main-overlap {
//                     margin-top: -160px !important;
//                     position: relative;
//                 }

//                 .focus-heading-container {
//                     margin-top: -120px !important;
//                     position: relative;
//                 }
                    

//                 /* 2. FIXING THE SPACING (THE PURPLE ARROWS FIX) */
//                 .focus-section-main {
//                     padding-top: 0px !important; 
//                     padding-bottom: 80px;
//                 }

//                 .focus-content-row {
//                     margin-top: 40px !important; /* Reduced from 100px to 40px */
//                 }

//                 /* 3. FIXING THE IMAGE CORNERS (THE ROUNDED LOOK) */
//                 .focus-image-wrapper {
//                     width: 100%;
//                     border-radius: 15px; /* Adjust this for more/less roundness */
//                     overflow: hidden;
//                     box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//                     display: block;
//                 }

//                 .focus-image-styled {
//                     width: 100%;
//                     height: auto;
//                     object-fit: cover;
//                     border-radius: 15px; /* Must match wrapper */
//                     transition: transform 0.3s ease;
//                 }

//                 // .focus-sub-label {
//                 //     margin-top: 60px !important;
//                 //     //margin-bottom: -15px !important;
//                 //      margin-bottom: 20px !important;
//                 //     color: #666;
//                 //     font-size: 16px;
//                 //     letter-spacing: 1px;
//                 // }
// .focus-sub-label {
//     margin-top: 60px !important;
//     margin-bottom: 0 !important; /* flow safe */
//     position: relative;
//     top: 30px; /* 🔽 Enable Growth neeche aa jayega */
//     color: #666;
//     font-size: 16px;
//     letter-spacing: 1px;
// }

//                 .focus-main-title {
//                     margin-top: 30px !important;
//                     line-height: 1.1;
//                     font-weight: 800;
//                     font-size: 48px;
//                     // margin-bottom: 20px !important;
//                 }

//                 .focus-description-text {
//                     font-size: 16px !important;
//                     line-height: 1.7;
//                     color: #444;
//                 }

//                 /* Mobile Optimization */
//                 @media (max-width: 768px) {
//                     .focus-main-overlap { margin-top: 0 !important; }
//                     .focus-heading-container { margin-top: 0 !important; }
//                     .focus-content-row { margin-top: 30px !important; }
//                     .watermark-focus { font-size: 60px !important; top: -20px !important; }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default OurFocusSection;




'use client';

import React from 'react';
import Image from 'next/image';

const OurFocusSection: React.FC = () => {
    return (
        <>
            {/* --- SECTION 1: BREADCRUMB (Header Area - Safe & Untouched) --- */}
            <div className="rts-breadcrumb-area top-300">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left" style={{ textAlign: 'left' }}>
                                <span className="bg-title watermark-focus">Our Focus</span>
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
            <div className="rts-about-area focus-section-main">
                <div className="container focus-main-overlap">
                    
                    <div className="focus-heading-container">
                        <p className="focus-sub-label">Enabling Growth</p>
                        <h1 className="focus-main-title">Our Focus</h1>
                    </div>

                    {/* d-flex align-items-start matches the image top */}
                    <div className="row focus-content-row d-flex align-items-start">
                        
                        <div className="col-lg-5">
                            <div className="focus-image-wrapper">
                                <Image 
                                    src='/images/Focus2/Made In Gujranwala.png' 
                                    alt="Our Focus" 
                                    width={600} 
                                    height={500} 
                                    className="focus-image-styled"
                                />
                            </div>
                        </div>

                        {/* Reduced padding-left to 30px to bring text closer to image */}
                        <div className="col-lg-7 pl--30 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three">
                                {/* padding-top: 45px pushes text down to match image top corner perfectly */}
                                <div className="title-style-three left" style={{ paddingTop: '45px' }}>
                                    <h2 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1' }}>Made In Gujranwala <br /> Promotion</h2>
                                    <p style={{ fontWeight: '900', color: 'black', fontSize: '14px', marginTop: '10px' }}>
                                        Building Global Pathways For Gujranwala’s Industrial Growth
                                    </p>
                                </div>
                                <p className="disc focus-description-text" style={{ textAlign: 'justify', marginTop: '20px' }}>
                                    Gujranwala is home to a diverse range of industries that make a significant contribution
                                    to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
                                    visibility of Gujranwala’s industrial base and promote the <strong>Made in Gujranwala</strong> brand across
                                    international markets. Through strategic initiatives and collaborations, GBA highlights the
                                    city’s manufacturing excellence, product diversity, and export potential on global platforms.
                                    The Alliance works closely with international trade bodies, chambers of commerce, and
                                    business councils to foster partnerships, facilitate B2B linkages, and create sustainable
                                    export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
                                    and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
                                    reputation as a key hub of industrial and trade excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .watermark-focus {
                    font-size: 150px;
                    font-weight: 900;
                    color: transparent;
                    -webkit-text-stroke: 1px #e0e0e0;
                    opacity: 0.5;
                    position: absolute;
                    top: -80px;
                    left: 0;
                    z-index: 0;
                }

                .rts-breadcrumb-area.top-300 {
                    padding-top: 150px !important;
                    padding-bottom: 55px !important;
                    height: auto !important;
                }

                .focus-main-overlap {
                    margin-top: -160px !important;
                    position: relative;
                }

                .focus-heading-container {
                    margin-top: -120px !important;
                    position: relative;
                }

                .focus-section-main {
                    padding-top: 0px !important; 
                    padding-bottom: 80px;
                }

                /* Gap between "Our Focus" and Row reduced to zero */
                .focus-content-row {
                    margin-top: 0px !important; 
                }

                .focus-image-wrapper {
                    width: 100%;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    display: block;
                }

                .focus-image-styled {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    border-radius: 15px;
                }

                .focus-sub-label {
                    margin-top: 60px !important;
                    margin-bottom: 0 !important;
                    position: relative;
                    top: 30px;
                    color: #666;
                    font-size: 16px;
                    letter-spacing: 1px;
                }

                .focus-main-title {
                    margin-top: 30px !important;
                    line-height: 1.1;
                    font-weight: 800;
                    font-size: 48px;
                }

                .focus-description-text {
                    font-size: 16px !important;
                    line-height: 1.7;
                    color: #444;
                }

                /* Text closer to image */
                .pl--30 {
                    padding-left: 30px !important;
                }

                @media (max-width: 768px) {
                    .focus-main-overlap { margin-top: 0 !important; }
                    .focus-heading-container { margin-top: 0 !important; }
                    .focus-content-row { margin-top: 30px !important; }
                    .watermark-focus { font-size: 60px !important; top: 40px !important; }
                    .pl--30 { padding-left: 15px !important; }
                    .rts-breadcrumb-area.top-300 {
                    padding-top: 10px !important;
                    padding-bottom: 10px !important;
                    height: auto !important;
                }

                }
            `}</style>
        </>
    );
};

export default OurFocusSection;




