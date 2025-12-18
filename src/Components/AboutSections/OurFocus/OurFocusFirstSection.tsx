

// 'use client';

// import React from 'react';
// // import Image from 'next/image'; <-- REMOVED: Caused the resolution error. Using standard <img> tag instead.

// // -----------------------------------------------------------------------
// // 1. CSS Styles as React.CSSProperties Objects
// // We define all necessary styles here to keep the JSX clean.
// // Z-Index is crucial for the watermark overlap (Watermark: 3, Text Block: 2, Main Content: 1).
// // -----------------------------------------------------------------------

// // Watermark style for "Our Focus" (High Z-Index for overlap)
// const watermarkBgTitleStyle: React.CSSProperties = {
//     fontSize: '150px',
//     marginLeft: '100px',
//     color: 'rgba(0, 0, 0, 0.05)', // Light grey for watermark effect
//     position: 'relative', 
//     zIndex: 3,           
//     display: 'block',    
//     lineHeight: 1.0,
// };

// // Main Heading Container (div above p/h1 block)
// const mainHeadingBlockStyle: React.CSSProperties = {
//     marginTop: '-80px', // Original offset from the HTML
//     position: 'relative', 
//     zIndex: 2,           
// };

// // Paragraph/Pre-title style ("Enabling Growth")
// const nameStyle: React.CSSProperties = {
//     fontSize: '16px',
//     marginLeft: '100px',
//     marginTop: '10px', // Adjusted to reduce gap (was 50px)
//     fontWeight: 500,
//     color: '#333',
// };

// // Main Heading (H1) style ("Our Focus")
// const mainHeadingStyle: React.CSSProperties = {
//     fontWeight: 800,
//     marginTop: '-10px', // Keeps it close to the paragraph
//     fontSize: '48px',
//     marginLeft: '100px',
//     color: '#1a1a1a',
// };

// // Main Content Container (Handles the large overlap with the hero)
// const mainContainerOverlapStyle: React.CSSProperties = {
//     marginTop: '-300px',
//     paddingTop: 10, // pt--10 from original HTML
//     position: 'relative', 
//     zIndex: 1, // Lowest z-index
// };

// // Title style for the inner section (Made In Gujranwala Promotion)
// const innerTitleStyle: React.CSSProperties = {
//     fontSize: '48px',
//     lineHeight: 1.2,
//     fontWeight: 800,
//     marginBottom: 10,
// };

// // Subtitle/Tagline style
// const innerSubtitleStyle: React.CSSProperties = {
//     fontWeight: 900, 
//     color: '#000', 
//     fontSize: '14px',
//     marginTop: 0,
//     lineHeight: 1.5,
// };

// // Description Paragraph Style
// const discStyle: React.CSSProperties = {
//     fontSize: '15px',
//     lineHeight: 1.6,
//     color: '#555',
//     textAlign: 'justify',
// };

// // Image Style for the inner thumbnail
// const thumbnailImageStyle: React.CSSProperties = {
//     width: '100%', 
//     height: 'auto',
//     borderRadius: '10px',
//     display: 'block',
// };


// // -----------------------------------------------------------------------
// // 2. THE COMPONENT
// // -----------------------------------------------------------------------

// const OurFocusSection: React.FC = () => {
//     return (
//         <>
//             {/* ---------------------------------------------------- */}
//             {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (Watermark) */}
//             {/* ---------------------------------------------------- */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Watermark: Uses watermarkBgTitleStyle with z-index: 3 (Highest) */}
//                                 <span className="bg-title" style={watermarkBgTitleStyle}>Our Focus</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Decorative Shapes - Using <img> tag instead of Next.js <Image> */}
//                 <div className="shape-area">
//                     <img src="/images/about/shape/01.png" alt="shape" className="one" style={{ width: 100, height: 100 }} />
//                     <img src="/images/about/shape/02.png" alt="shape" className="two" style={{ width: 100, height: 100 }} />
//                     <img src="/images/about/shape/03.png" alt="shape" className="three" style={{ width: 100, height: 100 }} />
//                 </div>
//             </div>

//             {/* ---------------------------------------------------- */}
//             {/* SECTION 2: MAIN CONTENT & FOCUS POINTS */}
//             {/* ---------------------------------------------------- */}
//             <div className="rts-about-area rts-section-gap">
//                 {/* Main Container - Uses mainContainerOverlapStyle with z-index: 1 */}
//                 <div className="container" style={mainContainerOverlapStyle}>
                    
//                     {/* Header Text Block (Enabling Growth / Our Focus) */}
//                     <div style={mainHeadingBlockStyle}>
//                         <p style={nameStyle}> Enabling Growth</p>
//                         <h1 style={mainHeadingStyle}>Our Focus</h1>
//                     </div>

//                     {/* ---------------------------------------------------- */}
//                     {/* 1. FOCUS POINT: Made In Gujranwala Promotion */}
//                     {/* ---------------------------------------------------- */}
//                     <div className="rts-about-area rts-section-gap">
//                         <div className="container pt--10">
//                             <div className="row align-items-center g-5">

//                                 {/* IMAGE LEFT */}
//                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
//                                     <div className="main-thumnal-inner-about-three">
//                                         <div className="thumbnail">
//                                             {/* Changed to standard <img> tag */}
//                                             <img 
//                                                 src="/images/Focus2/Made In Gujranwala.png" 
//                                                 alt="Made In Gujranwala"
//                                                 style={thumbnailImageStyle}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* TEXT RIGHT */}
//                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
//                                     <div className="about-content-right-three">
//                                         <div className="title-style-three left">
//                                             <h2 style={innerTitleStyle}>Made In Gujranwala <br /> Promotion</h2>
//                                             <p style={innerSubtitleStyle}>
//                                                 Building Global Pathways For Gujranwala’s Industrial Growth
//                                             </p>
//                                         </div>
//                                         <br />
//                                         <p className="disc" style={discStyle}>
//                                             Gujranwala is home to a diverse range of industries that make a significant contribution
//                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
//                                             visibility of Gujranwala’s industrial base and promote the Made in Gujranwala brand across
//                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
//                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
//                                             The Alliance works closely with international trade bodies, chambers of commerce, and
//                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
//                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
//                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
//                                             reputation as a key hub of industrial and trade excellence.
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                     {/* Add more focus points here (e.g., focus point 2, 3, etc.) */}

//                 </div>
//             </div>

//             {/* ---------------------------------------------------- */}
//             {/* 3. GLOBAL STYLES (Responsive adjustments for mobile) */}
//             {/* ---------------------------------------------------- */}
//             <style jsx global>{`
//                 /* General Reset for the custom classes */
//                 .rts-breadcrumb-area, .rts-about-area {
//                     /* Add necessary padding/margins if not already defined in global CSS */
//                 }
                
//                 /* Responsive adjustments for screens <= 768px */
//                 @media (max-width: 768px) {
//                     /* Watermark reset for vertical stacking on mobile */
//                     .rts-breadcrumb-area .title-area-left .bg-title {
//                         font-size: 65px !important;
//                         margin-left: 0 !important;
//                         margin-bottom: 50px !important;
//                         position: static !important; 
//                         z-index: auto !important;
//                         text-align: center;
//                     }

//                     /* Header text block adjustments for mobile */
//                     .rts-about-area .container {
//                         margin-top: -100px !important; /* Less overlap on small screen */
//                     }
                    
//                     /* Pre-title "Enabling Growth" */
//                     .rts-about-area p[style] {
//                         margin-left: 0px !important;
//                         text-align: center !important;
//                         margin-top: 10px !important;
//                     }
                    
//                     /* Main heading "Our Focus" */
//                     .rts-about-area h1[style] {
//                         margin-left: 0px !important;
//                         text-align: center !important;
//                         font-size: 36px !important;
//                         margin-top: 5px !important;
//                     }
                    
//                     /* Inner section titles */
//                     .title-style-three h2 {
//                         font-size: 32px !important;
//                         text-align: center !important;
//                     }
//                     .title-style-three p {
//                         text-align: center !important;
//                     }
//                     .about-content-right-three .disc {
//                         text-align: left !important;
//                     }

//                     .g-5 { gap: 3rem !important; }
//                 }

//                 /* Hiding the Next.js layout='responsive' style injection issue */
//                 .main-thumnal-inner-about-three img {
//                     object-fit: cover;
//                 }
//             `}</style>
//         </>
//     );
// };

// export default OurFocusSection;


// 'use client'
// // src/app/focus/page.tsx (or similar file)

// import React from 'react';
// import Image from 'next/image';

// const FocusPage = () => {
//     return (
//         <React.Fragment>
//             {/* about us area wrapper main */}
//             <div className="rts-breadcrumb-area top-300">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-area-left" style={{ textAlign: 'left' }}>
//                                 {/* Note: Paths for background images (if any) are often handled by CSS */}
//                                 <span className="bg-title" style={{ fontSize: '150px', marginLeft: '100px' }}>
//                                     Our Focus
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="shape-area">
//                     {/* Paths changed from assets/images/... to /images/... */}
//                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} priority={false} />
//                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} priority={false} />
//                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} priority={false} />
//                 </div>
//             </div>

//             {/* rts about area start */}
//             <div className="rts-about-area rts-section-gap">
//                 {/* Adjustments for the layout and container:
//                     1. The negative margin on the container is a bit unusual. 
//                        It's converted to camelCase for the style object.
//                     2. The inner div also uses negative margin.
//                 */}
//                 <div className="container pt--10" style={{ marginTop: '-300px' }}>
//                     <div style={{ marginTop: '-80px',  marginLeft: '-50px' }}>
//                         <p style={{ fontSize: '16px', marginTop: '-90px', marginLeft: '100px' }}> 
//                             Enabling Growth
//                         </p>
//                         <h1 style={{ fontWeight: 800, fontSize: '48px', marginLeft: '100px', marginTop: '-10px' }}>
//                             Our Focus
//                         </h1>
//                     </div>

//                     {/* 1 */}
//                     <div className="rts-about-area rts-section-gap ">
//                         <div className="container pt--10">
//                             <div className="row align-items-center g-5">

//                                 {/* IMAGE LEFT */}
//                                 <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
//                                     <div className="main-thumnal-inner-about-three">
//                                         <div className="thumbnail">
//                                             {/* Use next/image for optimized images. Path changed from assets/images/... to /images/... 
//                                                 Added 'width' and 'height' for Image component, essential for optimization.
//                                                 You need to adjust these to the actual dimensions of the image. 
//                                                 I've set arbitrary large values for example.
//                                             */}
//                                             <Image 
//                                                 src="/images/Focus2/Made In Gujranwala.png" 
//                                                 alt="Made In Gujranwala"
//                                                 width={500} // Example width
//                                                 height={400} // Example height
//                                                 style={{ width: '90%', borderRadius: '10px',marginTop: '-100px'  }}
//                                                 priority={false}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* TEXT RIGHT */}
//                                 <div className="col-lg-7 col-md-12 order-lg-2 order-2">
//                                     <div className="about-content-right-three">
//                                         <div className="title-style-three left" style={{ fontSize: '48px' }}>
//                                             <h2>
//                                                 Made In Gujranwala <br /> Promotion
//                                             </h2>
//                                             <p style={{ fontWeight: 900, color: 'black', fontSize: '14px' }}>
//                                                 Building Global Pathways For Gujranwala’s Industrial Growth
//                                             </p>
//                                         </div>
//                                         <br />
//                                         <p className="disc" style={{ fontSize: '15px'  , marginTop :  '20px' }}>
//                                             Gujranwala is home to a diverse range of industries that make a significant contribution
//                                             to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
//                                             visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across
//                                             international markets. Through strategic initiatives and collaborations, GBA highlights the
//                                             city’s manufacturing excellence, product diversity, and export potential on global platforms.
//                                             The Alliance works closely with international trade bodies, chambers of commerce, and
//                                             business councils to foster partnerships, facilitate B2B linkages, and create sustainable
//                                             export opportunities. By promoting industrial clusters, encouraging cross-border cooperation,
//                                             and showcasing innovation-driven enterprises, GBA continues to strengthen Gujranwala’s
//                                             reputation as a key hub of industrial and trade excellence.
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }

// export default FocusPage;




'use client'

import React from 'react';
import Image from 'next/image';

const FocusPage = () => {
    return (
        <React.Fragment>
            {/* --- SECTION 1: BREADCRUMB --- */}
            <div className="rts-breadcrumb-area top-300">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left" style={{ textAlign: 'left' }}>
                                <span className="bg-title watermark-focus">
                                    Our Focus
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} priority={false} />
                    <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} priority={false} />
                    <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} priority={false} />
                </div>
            </div>

            {/* --- SECTION 2: CONTENT AREA --- */}
            <div className="rts-about-area rts-section-gap">
                <div className="container pt--10 focus-main-overlap">
                    
                    {/* Heading Block */}
                    <div className="focus-heading-wrapper">
                        <p className="focus-sub-label">Enabling Growth</p>
                        <h1 className="focus-main-title">Our Focus</h1>
                    </div>

                    <div className="rts-about-area rts-section-gap focus-content-section">
                        <div className="container pt--10">
                            <div className="row align-items-center g-5">

                                {/* IMAGE LEFT */}
                                <div className="col-lg-5 col-md-12 order-lg-1 order-1 text-center">
                                    <div className="main-thumnal-inner-about-three">
                                        <div className="thumbnail">
                                            <Image 
                                                src="/images/Focus2/Made In Gujranwala.png" 
                                                alt="Made In Gujranwala"
                                                width={500} 
                                                height={400} 
                                                className="focus-hero-image"
                                                priority={false}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* TEXT RIGHT */}
                                <div className="col-lg-7 col-md-12 order-lg-2 order-2">
                                    <div className="about-content-right-three">
                                        <div className="title-style-three left focus-text-heading">
                                            <h2>
                                                Made In Gujranwala <br /> Promotion
                                            </h2>
                                            <p className="focus-accent-text">
                                                Building Global Pathways For Gujranwala’s Industrial Growth
                                            </p>
                                        </div>
                                        <br />
                                        <p className="disc focus-description">
                                            Gujranwala is home to a diverse range of industries that make a significant contribution
                                            to Pakistan’s national economy. One of GBA’s foremost priorities is to enhance the global
                                            visibility of Gujranwala’s industrial base and promote the **Made in Gujranwala** brand across
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
                </div>
            </div>

            {/* --- CONSOLIDATED STYLING --- */}
            <style jsx global>{`
                /* DESKTOP STYLES - Matches your original output exactly */
                .watermark-focus {
                    font-size: 150px;
                    margin-left: 100px;
                }

                .focus-main-overlap {
                    margin-top: -300px !important;
                }

                .focus-heading-wrapper {
                    margin-top: -80px;
                    margin-left: -50px;
                }

                .focus-sub-label {
                    font-size: 16px;
                    margin-top: -90px;
                    margin-left: 100px;
                }

                .focus-main-title {
                    font-weight: 800;
                    font-size: 48px;
                    margin-left: 100px;
                    margin-top: -10px;
                }

                .focus-content-section {
                    margin-top: 50px; /* Increased gap so heading doesn't touch image */
                }

                .focus-hero-image {
                    width: 90%;
                    border-radius: 10px;
                    margin-top: -100px;
                    height: auto;
                }

                .focus-text-heading h2 {
                    font-size: 48px;
                }

                .focus-accent-text {
                    font-weight: 900;
                    color: black;
                    font-size: 14px;
                }

                .focus-description {
                    font-size: 15px;
                    margin-top: 20px;
                }

                /* MOBILE RESPONSIVE STYLES */
                @media (max-width: 768px) {
                    .focus-main-overlap {
                        margin-top: 0 !important;
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }

                    .focus-heading-wrapper,
                    .focus-sub-label,
                    .focus-main-title {
                        margin-left: 0 !important;
                        margin-top: 0 !important;
                        text-align: left;
                    }

                    .watermark-focus {
                        font-size: 50px !important;
                        margin-left: 15px !important;
                        opacity: 0.15;
                    }

                    .focus-main-title {
                        font-size: 34px !important;
                        margin-bottom: 20px;
                    }

                    .focus-hero-image {
                        margin-top: 20px !important; /* Fixed: No longer overlaps heading */
                        width: 100% !important;
                    }

                    .focus-text-heading h2 {
                        font-size: 30px !important;
                    }

                    .focus-content-section {
                        margin-top: 20px !important;
                        padding-top: 0 !important;
                    }

                    .rts-breadcrumb-area.top-300 {
                        padding-top: 60px !important;
                        height: auto !important;
                    }
                }
            `}</style>
        </React.Fragment>
    );
}

export default FocusPage;