

// // // // // 'use client';

// // // // // import React from 'react';
// // // // // import Image from 'next/image';

// // // // // // -----------------------------------------------------------------------
// // // // // // 1. CSS Styles as React.CSSProperties Objects (for desktop/inline styles)
// // // // // // -----------------------------------------------------------------------

// // // // // // Watermark style for "Message"
// // // // // const watermarkBgTitleStyle: React.CSSProperties = {
// // // // //     fontSize: '150px',
// // // // //     // Note: The outline (text-stroke) effect is typically handled by global CSS 
// // // // //     // or a specific utility class. For this example, we'll keep the font size 
// // // // //     // and margin-left inline property as requested by the original HTML.
// // // // //     // Assuming the outline style is defined elsewhere and applied via .bg-title class.
// // // // //     marginLeft: '50px',
// // // // // };

// // // // // // Main Heading Container (div above p.name)
// // // // // const mainHeadingBlockStyle: React.CSSProperties = {
// // // // //     marginTop: '-100px',
// // // // //     marginLeft: '-100px'
// // // // // };

// // // // // // Paragraph/Pre-title style ("Leadership with Purpose")
// // // // // const nameStyle: React.CSSProperties = {
// // // // //     fontSize: '16px',
// // // // //     marginLeft: '100px',
// // // // //     marginTop: '50px',
// // // // // };

// // // // // // Main Heading (H1) style ("Message From The Chairman")
// // // // // const mainHeadingStyle: React.CSSProperties = {
// // // // //     marginTop: '-35px',
// // // // //     fontWeight: 800,
// // // // //     fontSize: '48px',
// // // // //     marginLeft: '100px',
// // // // // };

// // // // // // Main Content Container (to handle -300px overlap)
// // // // // const mainContainerOverlapStyle: React.CSSProperties = {
// // // // //     marginTop: '-300px',
// // // // //     paddingTop: 40,
// // // // // };

// // // // // // Image Column Style
// // // // // const imageColumnStyle: React.CSSProperties = {
// // // // //     display: 'flex',
// // // // // };

// // // // // // Image Style
// // // // // const imageStyle: React.CSSProperties = {
// // // // //     width: '100%',
// // // // //     height: 'auto',
// // // // //     display: 'block',
// // // // // };

// // // // // // Chairman Name H2 Style
// // // // // const chairmanNameStyle: React.CSSProperties = {
// // // // //     fontSize: '48px',
// // // // //     marginTop: 0,
// // // // //     paddingTop: 0,
// // // // //     lineHeight: 1.2,
// // // // // };

// // // // // // Description Paragraph Style
// // // // // const discStyle: React.CSSProperties = {
// // // // //     fontSize: '15px',
// // // // //     lineHeight: 1.6,
// // // // //     marginBottom: 0,
// // // // // };

// // // // // // -----------------------------------------------------------------------
// // // // // // 2. THE COMPONENT
// // // // // // -----------------------------------------------------------------------
// // // // // const MessageSection: React.FC = () => {
// // // // //     return (
// // // // //         <>
// // // // //             {/* ---------------------------------------------------- */}
// // // // //             {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (Message) */}
// // // // //             {/* ---------------------------------------------------- */}
// // // // //             <div className="rts-breadcrumb-area top-300">
// // // // //                 <div className="container">
// // // // //                     <div className="row">
// // // // //                         <div className="col-lg-12">
// // // // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // // // //                                 {/* Watermark: Note the use of style={...} for inline styles */}
// // // // //                                 <span className="bg-title" style={watermarkBgTitleStyle}>Message</span>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Decorative Shapes (paths adjusted for Next.js /public folder) */}
// // // // //                 <div className="shape-area">
// // // // //                     {/* Assuming assets folder is inside public for next/image */}
// // // // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
// // // // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
// // // // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* ---------------------------------------------------- */}
// // // // //             {/* SECTION 2: CHAIRMAN'S MESSAGE CONTENT */}
// // // // //             {/* ---------------------------------------------------- */}
// // // // //             <div className="rts-about-area rts-section-gap">
// // // // //                 <div className="container pt--40" style={mainContainerOverlapStyle}>
// // // // //                     <div style={mainHeadingBlockStyle}>
// // // // //                         <p className="name" style={nameStyle}>Leadership with Purpose</p>
// // // // //                         <h1 style={mainHeadingStyle}>Message From The <br /> Chairman</h1>
// // // // //                     </div>
                    
// // // // //                     <div className="row" style={{ marginTop: '100px', alignItems: 'flex-start', gap: 0 }}>
                        
// // // // //                         {/* Left Column: Image */}
// // // // //                         <div className="col-lg-5" style={imageColumnStyle}>
// // // // //                             <div className="main-thumnal-inner-about-three" style={{ width: '100%', fontSize: '48px' }}>
// // // // //                                 <div className="">
// // // // //                                     <div className="thumbnail">
// // // // //                                         {/* Image path adjusted for Next.js /public folder */}
// // // // //                                         <Image 
// // // // //                                             src="/images/Our Team/Chairman - Ahmad Ikram Lone.png" 
// // // // //                                             style={imageStyle} 
// // // // //                                             alt="Ahmad Ikram Lone, Chairman of GBA"
// // // // //                                             width={500} // Set appropriate dimensions
// // // // //                                             height={600} // Set appropriate dimensions
// // // // //                                         />
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         {/* Right Column: Description */}
// // // // //                         {/* Note: In JSX, class names with dashes are accessed as strings or directly as attributes */}
// // // // //                         <div className="col-lg-7 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// // // // //                             <div className="about-content-right-three" style={{ marginTop: 0, paddingTop: 0, height: 'auto', maxHeight: '100%', overflow: 'hidden' }}>
// // // // //                                 <div className="title-style-three left" style={{ marginTop: 0, paddingTop: 0 }}>
// // // // //                                     <h2 className="title rts-text-anime-style-1" style={chairmanNameStyle}>Ahmad Ikram Lone</h2>
// // // // //                                 </div>
// // // // //                                 <p className="disc" style={discStyle}>
// // // // //                                     It is with great pride and enthusiasm that I extend my warmest greetings as **Founder & Chairman of the Gujranwala Business Alliance (GBA)**. I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are building on these strengths to create a modern business ecosystem that fosters innovation, competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders, access new markets, and position Gujranwala among the world's leading industrial cities.
// // // // //                                     <br /><br />
// // // // //                                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment. By fostering dialogue, advocating for the private sector, and offering practical support programs, we aim to remove barriers to growth and create opportunities that drive meaningful transformation. Alongside our international outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship development, and knowledge exchange - areas that prepare our business community for a rapidly evolving global economy. We take pride in providing our members with access to strategic insights, training opportunities, and international networks that help them innovate and thrive
// // // // //                                     <br /><br />
// // // // //                                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala - a city standing proudly at the forefront of Pakistan's industrial and economic growth.
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* ---------------------------------------------------- */}
// // // // //             {/* 3. GLOBAL STYLES (INCLUDING MEDIA QUERIES) */}
// // // // //             {/* ---------------------------------------------------- */}
            
// // // // //             <style jsx global>{`
// // // // //                 /* ---------- MOBILE FIXES FOR THIS PAGE ONLY (First Block) ---------- */
// // // // //                 @media (max-width: 768px) {
// // // // //                     .name {
// // // // //                         margin-left: 0px !important;
// // // // //                         padding-bottom: 5px !important;
// // // // //                     }

// // // // //                     /* Breadcrumb big background text */
// // // // //                     .rts-breadcrumb-area .title-area-left .bg-title {
// // // // //                         font-size: 65px !important;
// // // // //                         margin-left: 0 !important;
// // // // //                         margin-bottom: 50px !important;
// // // // //                     }

// // // // //                     /* Reduce top spacing of breadcrumb block */
// // // // //                     .rts-breadcrumb-area.top-300 {
// // // // //                         padding-top: 120px !important;
// // // // //                         padding-bottom: 40px !important;
// // // // //                     }

// // // // //                     /* Remove negative margin trick on first about container */
// // // // //                     .rts-about-area .container {
// // // // //                         margin-top: 0 !important;
// // // // //                         padding-top: 20px !important;
// // // // //                     }

// // // // //                     /* About Gujranwala heading block */
// // // // //                     .rts-about-area h1 {
// // // // //                         margin-left: 0px !important;
// // // // //                     }

// // // // //                     .rts-about-area h1 {
// // // // //                         font-size: 32px !important;
// // // // //                         line-height: 1.2;
// // // // //                     }

// // // // //                     /* Big Gujranwala image height (Not relevant here, but kept for completeness) */
// // // // //                     .about-invena-large-image .large-image-bottm-breadcrumb {
// // // // //                         max-height: 300px !important;
// // // // //                     }

// // // // //                     .about-invena-large-image .large-image-bottm-breadcrumb img {
// // // // //                         height: 300px !important;
// // // // //                     }

// // // // //                     /* Text under Gujranwala image (Not relevant here, but kept for completeness) */
// // // // //                     .about-between-wrapper {
// // // // //                         margin-top: 40px !important;
// // // // //                         padding: 0 12px;
// // // // //                     }

// // // // //                     .about-between-wrapper .disc {
// // // // //                         font-size: 14px !important;
// // // // //                         line-height: 1.7;
// // // // //                     }

// // // // //                     /* Industries of Gujranwala block spacing (Not relevant here, but kept for completeness) */
// // // // //                     .working-process-area-three {
// // // // //                         margin-top: 60px !important;
// // // // //                         margin-bottom: 60px !important;
// // // // //                         margin-left: 0 !important;
// // // // //                         margin-right: 0 !important;
// // // // //                     }

// // // // //                     .working-process-area-three .title-style-three .title {
// // // // //                         font-size: 32px !important;
// // // // //                         line-height: 1.2;
// // // // //                     }

// // // // //                     .working-process-area-three p {
// // // // //                         font-size: 14px !important;
// // // // //                     }

// // // // //                     /* Industry list font size (Not relevant here, but kept for completeness) */
// // // // //                     .industry-list li {
// // // // //                         font-size: 14px;
// // // // //                     }

// // // // //                     /* Extra tighten generic container vertical gaps inside this page */
// // // // //                     .container {
// // // // //                         padding-left: 15px;
// // // // //                         padding-right: 15px;
// // // // //                     }
// // // // //                 }

// // // // //                 @media only screen and (max-width: 575px) {
// // // // //                     .rts-breadcrumb-area {
// // // // //                         height: 150px;
// // // // //                     }
// // // // //                 }
// // // // //             `}</style>

// // // // //             <style jsx global>{`
// // // // //                 /* SECOND BLOCK OF MOBILE FIXES */
// // // // //                 @media (max-width: 768px) {
// // // // //                     /* 1. Main Column Adjustment (Upar Lift karna) */
// // // // //                     .rts-about-area .col-lg-7 {
// // // // //                         /* Default margin ko reset ya kam karna */
// // // // //                         margin-top: 20px !important; 
                        
// // // // //                         /* Large screen padding ko reset karke mobile padding dena */
// // // // //                         padding-left: 15px !important;
// // // // //                         padding-right: 15px !important;
// // // // //                     }
                    
// // // // //                     /* 2. Heading (Chairman's Name) ko Responsive banana */
// // // // //                     .about-content-right-three h2.title {
// // // // //                         /* Font size ko mobile ke liye chota karna */
// // // // //                         font-size: 30px !important; 
                        
// // // // //                         /* Margin ko kam karna */
// // // // //                         margin-top: 10px !important;
// // // // //                         margin-bottom: 10px !important;
                        
// // // // //                         /* Agar aap heading ko center karna chahte hain */
// // // // //                         text-align: center; 
// // // // //                     }
                    
// // // // //                     /* 3. Paragraph Text (p.disc) ko Responsive banana */
// // // // //                     .about-content-right-three p.disc {
// // // // //                         /* Text size ko readable banana */
// // // // //                         font-size: 14px !important; 
                        
// // // // //                         /* Line height ko thoda badhana taaki aasani se padha ja sake */
// // // // //                         line-height: 1.6 !important; 
// // // // //                     }

// // // // //                     /* 4. Overall section spacing ko kam karna (agar about-content-right-three div mein extra gap hai) */
// // // // //                     .about-content-right-three {
// // // // //                         padding-top: 0 !important;
// // // // //                         padding-bottom: 20px !important;
// // // // //                     }
// // // // //                 }
// // // // //             `}</style>

// // // // //             <style jsx global>{`
// // // // //   @media (max-width: 768px) {
// // // // //     /* 1. Reset Top Gap - removing the -300px overlap that breaks mobile */
// // // // //     .rts-about-area .container.pt--40[style*="margin-top: -300px"] {
// // // // //       margin-top: 0px !important;
// // // // //       padding-top: 60px !important; /* Controlled space for watermark */
// // // // //       position: relative !important;
// // // // //     }

// // // // //     /* 2. Watermark: Small, behind text, and ALIGNED to avoid cutting */
// // // // //     .bg-title {
// // // // //       font-size: 50px !important;    /* Smaller, cleaner size */
// // // // //       position: absolute !important;
// // // // //       top: 15px !important;          /* Positions it slightly above heading */
// // // // //       left: 20px !important;         /* Fixed alignment to avoid cutting */
// // // // //       margin-left: 0 !important;     /* Resets the 50px desktop shift */
// // // // //       z-index: 0 !important;         /* Puts it BEHIND the text */
// // // // //       opacity: 0.1 !important;       /* Faded look */
// // // // //       WebkitTextStroke: 1px #ccc !important;
// // // // //       white-space: nowrap;
// // // // //     }

// // // // //     /* 3. Heading Block: FIXES THE LEFT SIDE CUTTING */
// // // // //     div[style*="margin-left: -100px"] {
// // // // //       margin-left: 0 !important;     /* STOPS THE CUTTING ON THE LEFT */
// // // // //       margin-top: 0 !important;      /* Removes the -100px desktop shift */
// // // // //       padding-left: 20px !important; /* Safe padding for mobile screens */
// // // // //       position: relative !important;
// // // // //       z-index: 2 !important;         /* Brings heading in front of watermark */
// // // // //     }

// // // // //     /* 4. Sub-heading (Leadership with Purpose) - Reseting desktop margins */
// // // // //     .name[style*="margin-left: 100px"] {
// // // // //       margin-left: 0 !important;     
// // // // //       margin-top: 10px !important;
// // // // //       font-size: 14px !important;
// // // // //     }

// // // // //     /* 5. Main Heading (Message From The Chairman) - Reseting desktop margins */
// // // // //     h1[style*="margin-left: 100px"] {
// // // // //       margin-left: 0 !important;     
// // // // //       margin-top: 5px !important;    /* Tighten gap between p and h1 */
// // // // //       font-size: 30px !important;    /* Responsive size */
// // // // //       line-height: 1.2 !important;
// // // // //     }

// // // // //     /* 6. Reduce the 100px gap before the image starts */
// // // // //     .row[style*="margin-top: 100px"] {
// // // // //       margin-top: 30px !important;
// // // // //     }

// // // // //     /* 7. Ensure breadcrumb area doesn't create extra top space */
// // // // //     .rts-breadcrumb-area.top-300 {
// // // // //       padding-top: 80px !important;
// // // // //       height: auto !important;
// // // // //     }
// // // // //   }
// // // // // `}</style>
            
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default MessageSection;

// // // // 'use client';

// // // // import React from 'react';
// // // // import Image from 'next/image';

// // // // const MessageSection: React.FC = () => {
// // // //     return (
// // // //         <>
// // // //             {/* --- SECTION 1: BREADCRUMB --- */}
// // // //             <div className="rts-breadcrumb-area top-300">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         <div className="col-lg-12">
// // // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // // //                                 <span className="bg-title watermark-style">Message</span>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 <div className="shape-area">
// // // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
// // // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
// // // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
// // // //                 </div>
// // // //             </div>

// // // //             {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
// // // //             <div className="rts-about-area rts-section-gap">
// // // //                 {/* Removed inline style={mainContainerOverlapStyle} */}
// // // //                 <div className="container pt--40 main-container-overlap">
                    
// // // //                     {/* Removed inline style={mainHeadingBlockStyle} */}
// // // //                     <div className="heading-block-container">
// // // //                         {/* Removed inline style={nameStyle} */}
// // // //                         <p className="name sub-heading-name">Leadership with Purpose</p>
                        
// // // //                         {/* Removed inline style={mainHeadingStyle} */}
// // // //                         <h1 className="main-title-h1">Message From The <br /> Chairman</h1>
// // // //                     </div>
                    
// // // //                     {/* Inline style for the row is kept for layout, but handled in media query below */}
// // // //                     <div className="row content-row-spacing" style={{ alignItems: 'flex-start', gap: 0 }}>
                        
// // // //                         <div className="col-lg-5 image-column-flex">
// // // //                             <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
// // // //                                 <div className="thumbnail">
// // // //                                     <Image 
// // // //                                         src="/images/Our Team/Chairman - Ahmad Ikram Lone.png" 
// // // //                                         className="chairman-image"
// // // //                                         alt="Ahmad Ikram Lone, Chairman of GBA"
// // // //                                         width={500} 
// // // //                                         height={600} 
// // // //                                     />
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="col-lg-7 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// // // //                             <div className="about-content-right-three chairman-text-wrapper">
// // // //                                 <div className="title-style-three left">
// // // //                                     <h2 className="title rts-text-anime-style-1 chairman-name-text">Ahmad Ikram Lone</h2>
// // // //                                 </div>
// // // //                                 {/* <p className="disc chairman-description">
// // // //                                     It is with great pride and enthusiasm that I extend my warmest greetings as **Founder & Chairman of the Gujranwala Business Alliance (GBA)**. I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities...
// // // //                                     <br /><br />
// // // //                                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment...
// // // //                                     <br /><br />
// // // //                                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala.
// // // //                                 </p> */}

// // // //                                  <p className="disc chairman-description" >
// // // //                                     It is with great pride and enthusiasm that I extend my warmest greetings as **Founder & Chairman of the Gujranwala Business Alliance (GBA)**. I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are building on these strengths to create a modern business ecosystem that fosters innovation, competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders, access new markets, and position Gujranwala among the world's leading industrial cities.
// // // //                                     <br /><br />
// // // //                                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment. By fostering dialogue, advocating for the private sector, and offering practical support programs, we aim to remove barriers to growth and create opportunities that drive meaningful transformation. Alongside our international outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship development, and knowledge exchange - areas that prepare our business community for a rapidly evolving global economy. We take pride in providing our members with access to strategic insights, training opportunities, and international networks that help them innovate and thrive
// // // //                                     <br /><br />
// // // //                                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala - a city standing proudly at the forefront of Pakistan's industrial and economic growth.
// // // //                                 </p>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* --- CONSOLIDATED STYLING BLOCK --- */}
// // // //             <style jsx global>{`
// // // //                 /* 1. DESKTOP STYLES (Keeping your exact output) */
// // // //                 .watermark-style { font-size: 150px; margin-left: 50px; position: absolute; z-index: 0; }
// // // //                 .main-container-overlap { margin-top: -300px; position: relative; }
// // // //                 .heading-block-container { margin-top: -100px; margin-left: -100px; position: relative; z-index: 10; }
// // // //                 .sub-heading-name { font-size: 16px; margin-left: 100px; margin-top: 50px; }
// // // //                 .main-title-h1 { margin-top: -35px; font-weight: 800; font-size: 48px; margin-left: 100px; line-height: 1.2; }
// // // //                 .content-row-spacing { margin-top: 100px; }
// // // //                 .chairman-image { width: 100%; height: auto; display: block; }
// // // //                 .chairman-name-text { font-size: 48px; margin-top: 0; line-height: 1.2; }
// // // //                 .chairman-description { font-size: 15px; line-height: 1.6; }

// // // //                 /* 2. MOBILE RESPONSIVE FIXES (Only triggers on small screens) */
// // // //                 @media (max-width: 768px) {
// // // //                     /* STOP THE CUTTING: Reset negative and large positive margins */
// // // //                     .heading-block-container, 
// // // //                     .sub-heading-name, 
// // // //                     .main-title-h1 {
// // // //                         margin-left: 0 !important;
// // // //                         margin-top: 0 !important;
// // // //                         padding-left: 15px !important; /* Safety gap so text doesn't touch edge */
// // // //                     }

// // // //                     .main-container-overlap {
// // // //                         margin-top: 0 !important; /* Removes huge gap from breadcrumb */
// // // //                         padding-top: 40px !important;
// // // //                     }

// // // //                     .watermark-style {
// // // //                         font-size: 60px !important;
// // // //                         margin-left: 15px !important;
// // // //                         top: -20px !important;
// // // //                         opacity: 0.1;
// // // //                     }

// // // //                     .main-title-h1 {
// // // //                         font-size: 30px !important;
// // // //                         margin-top: 5px !important;
// // // //                     }

// // // //                     .content-row-spacing {
// // // //                         margin-top: 30px !important;
// // // //                     }

// // // //                     .chairman-name-text {
// // // //                         font-size: 32px !important;
// // // //                         text-align: left;
// // // //                         margin-top: 20px !important;
// // // //                     }

// // // //                     .rts-breadcrumb-area.top-300 {
// // // //                         padding-top: 80px !important;
// // // //                         height: auto !important;
// // // //                     }
// // // //                 }
// // // //             `}</style>
// // // //         </>
// // // //     );
// // // // };

// // // // export default MessageSection;





// // // 'use client';

// // // import React from 'react';
// // // import Image from 'next/image';

// // // const MessageSection: React.FC = () => {
// // //     return (
// // //         <>
// // //             {/* --- SECTION 1: BREADCRUMB --- */}
// // //             <div className="rts-breadcrumb-area top-300">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         <div className="col-lg-12">
// // //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// // //                                 <span className="bg-title watermark-style">Message</span>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="shape-area">
// // //                     <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
// // //                     <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
// // //                     <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
// // //                 </div>
// // //             </div>

// // //             {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
// // //             <div className="rts-about-area rts-section-gap">
// // //                 <div className="container pt--40 main-container-overlap">
                    
// // //                     <div className="heading-block-container">
// // //                         <p className="name sub-heading-name">Leadership with Purpose</p>
// // //                         <h1 className="main-title-h1">Message From The <br /> Chairman</h1>
// // //                     </div>
                    
// // //                     <div className="row content-row-spacing" style={{ alignItems: 'flex-start', gap: 0 }}>
                        
// // //                         <div className="col-lg-5 image-column-flex">
// // //                             <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
// // //                                 <div className="thumbnail">
// // //                                     <Image 
// // //                                         src="/images/Our Team/Chairman - Ahmad Ikram Lone.png" 
// // //                                         className="chairman-image"
// // //                                         alt="Ahmad Ikram Lone, Chairman of GBA"
// // //                                         width={500} 
// // //                                         height={600} 
// // //                                     />
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         <div className="col-lg-7 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// // //                             <div className="about-content-right-three chairman-text-wrapper">
// // //                                 <div className="title-style-three left">
// // //                                     <h2 className="title rts-text-anime-style-1 chairman-name-text">Ahmad Ikram Lone</h2>
// // //                                 </div>
// // //                                 {/* Restored original paragraph text exactly as requested */}
// // //                                 <p className="disc chairman-description">
// // //                                     It is with great pride and enthusiasm that I extend my warmest greetings as **Founder & Chairman of the Gujranwala Business Alliance (GBA)**. I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are building on these strengths to create a modern business ecosystem that fosters innovation, competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders, access new markets, and position Gujranwala among the world's leading industrial cities.
// // //                                     <br /><br />
// // //                                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment. By fostering dialogue, advocating for the private sector, and offering practical support programs, we aim to remove barriers to growth and create opportunities that drive meaningful transformation. Alongside our international outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship development, and knowledge exchange - areas that prepare our business community for a rapidly evolving global economy. We take pride in providing our members with access to strategic insights, training opportunities, and international networks that help them innovate and thrive
// // //                                     <br /><br />
// // //                                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala - a city standing proudly at the forefront of Pakistan's industrial and economic growth.
// // //                                 </p>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* --- CONSOLIDATED STYLING BLOCK --- */}
// // //             <style jsx global>{`
// // //                 /* DESKTOP VIEW (Keeps your original design) */
// // //                 .watermark-style { font-size: 150px; margin-left: 50px; position: absolute; z-index: 0; }
// // //                 .main-container-overlap { margin-top: -300px; position: relative; }
// // //                 .heading-block-container { margin-top: -100px; margin-left: -100px; position: relative; z-index: 10; }
// // //                 .sub-heading-name { font-size: 16px; margin-left: 100px; margin-top: 50px; }
// // //                 .main-title-h1 { margin-top: -35px; font-weight: 800; font-size: 48px; margin-left: 100px; line-height: 1.2; }
// // //                 .content-row-spacing { margin-top: 100px; }
// // //                 .chairman-image { width: 100%; height: auto; display: block; }
// // //                 .chairman-name-text { font-size: 48px; margin-top: 0; line-height: 1.2; }
// // //                 .chairman-description { font-size: 15px; line-height: 1.6; margin-bottom: 0; }

// // //                 /* MOBILE RESPONSIVE VIEW */
// // //                 @media (max-width: 768px) {
// // //                     .heading-block-container, 
// // //                     .sub-heading-name, 
// // //                     .main-title-h1 {
// // //                         margin-left: 0 !important;
// // //                         margin-top: 0 !important;
// // //                         padding-left: 15px !important;
// // //                         padding-right: 15px !important;
// // //                     }

// // //                     .main-container-overlap {
// // //                         margin-top: 0 !important;
// // //                         padding-top: 40px !important;
// // //                     }

// // //                     .watermark-style {
// // //                         font-size: 55px !important;
// // //                         margin-left: 15px !important;
// // //                         top: -15px !important;
// // //                         opacity: 0.12;
// // //                     }

// // //                     .main-title-h1 {
// // //                         font-size: 32px !important;
// // //                         margin-top: 5px !important;
// // //                     }

// // //                     .content-row-spacing {
// // //                         margin-top: 30px !important;
// // //                     }

// // //                     .chairman-name-text {
// // //                         font-size: 34px !important;
// // //                         margin-top: 20px !important;
// // //                         padding-left: 15px;
// // //                     }

// // //                     .chairman-description {
// // //                         padding-left: 15px;
// // //                         padding-right: 15px;
// // //                         font-size: 14px !important;
// // //                     }

// // //                     .rts-breadcrumb-area.top-300 {
// // //                         padding-top: 60px !important;
// // //                         height: auto !important;
// // //                     }
// // //                 }
// // //             `}</style>
// // //         </>
// // //     );
// // // };

// // // export default MessageSection;


// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';

// // const MessageSection: React.FC = () => {
// //     return (
// //         <>
// //             {/* --- SECTION 1: BREADCRUMB --- */}
// //             <div className="rts-breadcrumb-area top-300">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-lg-12">
// //                             <div className="title-area-left" style={{ textAlign: 'left' }}>
// //                                 <span className="bg-title watermark-style">Message</span>
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

// //             {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
// //             <div className="rts-about-area rts-section-gap">
// //                 <div className="container pt--40 main-container-overlap">
                    
// //                     <div className="heading-block-container">
// //                         <p className="name sub-heading-name">Leadership with Purpose</p>
// //                         <h1 className="main-title-h1">Message From The <br /> Chairman</h1>
// //                     </div>
                    
// //                     {/* flex-nowrap ensure karta hai ke columns side-by-side rahein */}
// //                     <div className="row content-row-spacing d-flex align-items-start" style={{ gap: 0 }}>
                        
// //                         <div className="col-lg-5 image-column-flex">
// //                             <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
// //                                 <div className="thumbnail chairman-image-wrapper">
// //                                     <Image 
// //                                         src="/images/Our Team/Chairman - Ahmad Ikram Lone.png" 
// //                                         className="chairman-image"
// //                                         alt="Ahmad Ikram Lone, Chairman of GBA"
// //                                         width={550} 
// //                                         height={650} 
// //                                         priority
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// //                             <div className="about-content-right-three chairman-text-wrapper">
// //                                 <div className="title-style-three left">
// //                                     <h2 className="title rts-text-anime-style-1 chairman-name-text">Ahmad Ikram Lone</h2>
// //                                 </div>
// //                                 <p className="disc chairman-description">
// //                                     It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are building on these strengths to create a modern business ecosystem that fosters innovation, competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders, access new markets, and position Gujranwala among the world's leading industrial cities.
// //                                     <br /><br />
// //                                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment. By fostering dialogue, advocating for the private sector, and offering practical support programs, we aim to remove barriers to growth and create opportunities that drive meaningful transformation. Alongside our international outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship development, and knowledge exchange - areas that prepare our business community for a rapidly evolving global economy. We take pride in providing our members with access to strategic insights, training opportunities, and international networks that help them innovate and thrive.
// //                                     <br /><br />
// //                                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala - a city standing proudly at the forefront of Pakistan's industrial and economic growth.
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* --- CONSOLIDATED STYLING BLOCK --- */}
// //             <style jsx global>{`
// //                 /* DESKTOP VIEW FIXES */
// //                 .watermark-style { font-size: 150px; margin-left: 50px; position: absolute; z-index: 0; }
// //                 .main-container-overlap { margin-top: -300px; position: relative; }
// //                 .heading-block-container { margin-top: -100px; margin-left: -100px; position: relative; z-index: 10; }
// //                 .sub-heading-name { font-size: 16px; margin-left: 100px; margin-top: 50px; }
// //                 .main-title-h1 { margin-top: -35px; font-weight: 800; font-size: 48px; margin-left: 100px; line-height: 1.2; }
                
// //                 .content-row-spacing { margin-top: 80px; }
                
// //                 .chairman-image-wrapper {
// //                     position: sticky;
// //                     top: 20px;
// //                 }
// //                 .chairman-image { 
// //                     width: 100%; 
// //                     height: auto; 
// //                     display: block; 
// //                     border-radius: 4px;
// //                 }

// //                 .chairman-name-text { font-size: 48px; margin-top: 0; line-height: 1.2; margin-bottom: 20px; }
                
// //                 /* Alignment aur Balance ke liye text-justify use kiya hai */
// //                 .chairman-description { 
// //                     font-size:12px; 
// //                     line-height: 1.65; 
// //                     margin-bottom: 0; 
// //                     text-align: justify; /* Pic 1 jaisi look ke liye */
// //                     padding-right: 10px;
// //                 }

// //                 /* Mobile Responsive View */
// //                 @media (max-width: 991px) {
// //                     .pl--50 { padding-left: 15px !important; }
// //                 }

// //                 @media (max-width: 768px) {
// //                     .heading-block-container, .sub-heading-name, .main-title-h1 {
// //                         margin-left: 0 !important; margin-top: 0 !important;
// //                         padding-left: 15px !important; padding-right: 15px !important;
// //                     }
// //                     .main-container-overlap { margin-top: 0 !important; padding-top: 40px !important; }
// //                     .watermark-style { font-size: 55px !important; margin-left: 15px !important; top: -15px !important; opacity: 0.80; }
// //                     .main-title-h1 { font-size: 32px !important; margin-top: 5px !important; }
// //                     .content-row-spacing { margin-top: 30px !important; }
// //                     .chairman-name-text { font-size: 34px !important; margin-top: 20px !important; padding-left: 15px; }
// //                     .chairman-description { padding: 0 15px !important; font-size: 14px !important; text-align: left; }
// //                     .rts-breadcrumb-area.top-300 { padding-top: 60px !important; height: auto !important; }
// //                 }
// //             `}</style>
// //         </>
// //     );
// // };

// // export default MessageSection;



// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const MessageSection: React.FC = () => {
//   return (
//     <>
//       {/* --- SECTION 1: BREADCRUMB --- */}
//       <div className="rts-breadcrumb-area top-300">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left" style={{ textAlign: 'left' }}>
//                 <span className="bg-title watermark-style">Message</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="shape-area">
//           <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//           <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//           <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//         </div>
//       </div>

//       {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
//       <div className="rts-about-area rts-section-gap">
//         <div className="container pt--40 main-container-overlap">
//           <div className="heading-block-container">
//             <p className="name sub-heading-name">Leadership with Purpose</p>
//             <h1 className="main-title-h1">
//               Message From The <br /> Chairman
//             </h1>
//           </div>

//           {/* flex-nowrap ensure karta hai ke columns side-by-side rahein */}
//           <div className="row content-row-spacing d-flex align-items-start" style={{ gap: 0 }}>
//             <div className="col-lg-5 image-column-flex">
//               <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
//                 <div className="thumbnail chairman-image-wrapper">
//                   <Image
//                     src="/images/Our Team/Chairman - Ahmad Ikram Lone.png"
//                     className="chairman-image"
//                     alt="Ahmad Ikram Lone, Chairman of GBA"
//                     width={550}
//                     height={650}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//               <div className="about-content-right-three chairman-text-wrapper">
//                 <div className="title-style-three left">
//                   <h2 className="title rts-text-anime-style-1 chairman-name-text">Ahmad Ikram Lone</h2>
//                 </div>
//                 <p className="disc chairman-description">
//                   It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of
//                   the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to
//                   advancing Gujranwala's industrial potential and connecting our enterprises with global
//                   opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial
//                   excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are
//                   building on these strengths to create a modern business ecosystem that fosters innovation,
//                   competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders,
//                   access new markets, and position Gujranwala among the world's leading industrial cities.
//                   <br />
//                   <br />
//                   At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed
//                   to engaging with industry leaders, academia, policymakers, and international trade organisations
//                   to promote an enabling environment for business and investment. By fostering dialogue, advocating
//                   for the private sector, and offering practical support programs, we aim to remove barriers to
//                   growth and create opportunities that drive meaningful transformation. Alongside our international
//                   outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship
//                   development, and knowledge exchange - areas that prepare our business community for a rapidly
//                   evolving global economy. We take pride in providing our members with access to strategic insights,
//                   training opportunities, and international networks that help them innovate and thrive.
//                   <br />
//                   <br />
//                   I extend my sincere appreciation to our members, partners, and stakeholders for their trust and
//                   collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala -
//                   a city standing proudly at the forefront of Pakistan's industrial and economic growth.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- CONSOLIDATED STYLING BLOCK --- */}
//       <style jsx global>{`
//         /* DESKTOP VIEW FIXES */
//         .watermark-style {
//           font-size: 150px;
//           margin-left: 50px;
//           position: absolute;
//           z-index: 0;
//         }

//         /* ✅ ONLY CHANGE: reduce extra top gap (adjust values as you want) */
//         .rts-breadcrumb-area.top-300 {
//           padding-top: 110px !important; /* 🔽 reduce to 90px/80px if still big */
//           padding-bottom: 50px !important;
//           height: auto !important;
//           min-height: unset !important;
//         }

//         /* ✅ ONLY CHANGE: reduce overlap so grey area disappears */
//         .main-container-overlap {
//           margin-top: -200px; /* 🔽 was -300px (too much). Try -180 / -160 if needed */
//           position: relative;
//         }

//         /* ✅ ONLY CHANGE: heading pull slightly less */
//         .heading-block-container {
//           margin-top: -60px; /* 🔽 was -100px */
//           margin-left: -100px;
//           position: relative;
//           z-index: 10;
//         }

//         .sub-heading-name {
//           font-size: 16px;
//           margin-left: 100px;
//           margin-top: 50px;
//         }

//         .main-title-h1 {
//           margin-top: -35px;
//           font-weight: 800;
//           font-size: 48px;
//           margin-left: 100px;
//           line-height: 1.2;
//         }

//         .content-row-spacing {
//           margin-top: 80px;
//         }

//         .chairman-image-wrapper {
//           position: sticky;
//           top: 20px;
//         }

//         .chairman-image {
//           width: 100%;
//           height: auto;
//           display: block;
//           border-radius: 4px;
//         }

//         .chairman-name-text {
//           font-size: 48px;
//           margin-top: 0;
//           line-height: 1.2;
//           margin-bottom: 20px;
//         }

//         /* Alignment aur Balance ke liye text-justify use kiya hai */
//         .chairman-description {
//           font-size: 12px;
//           line-height: 1.65;
//           margin-bottom: 0;
//           text-align: justify;
//           padding-right: 10px;
//         }

//         /* Mobile Responsive View */
//         @media (max-width: 991px) {
//           .pl--50 {
//             padding-left: 15px !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .heading-block-container,
//           .sub-heading-name,
//           .main-title-h1 {
//             margin-left: 0 !important;
//             margin-top: 0 !important;
//             padding-left: 15px !important;
//             padding-right: 15px !important;
//           }

//           .main-container-overlap {
//             margin-top: 0 !important;
//             padding-top: 40px !important;
//           }

//           .watermark-style {
//             font-size: 55px !important;
//             margin-left: 15px !important;
//             top: 0px !important;
//             opacity: 0.8;
//           }

//           .main-title-h1 {
//             font-size: 32px !important;
//             margin-top: 5px !important;
//           }

//           .content-row-spacing {
//             margin-top: 30px !important;
//           }

//           .chairman-name-text {
//             font-size: 34px !important;
//             margin-top: 20px !important;
//             padding-left: 15px;
//           }

//           .chairman-description {
//             padding: 0 15px !important;
//             font-size: 14px !important;
//             text-align: left;
//           }

//           .rts-breadcrumb-area.top-300 {
//             padding-top: 60px !important;
//             height: auto !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default MessageSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const MessageSection: React.FC = () => {
//   return (
//     <>
//       {/* --- SECTION 1: BREADCRUMB (RESTORED TO ORIGINAL) --- */}
//       <div className="rts-breadcrumb-area top-300">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left" style={{ textAlign: 'left' }}>
//                 <span className="bg-title watermark-style">Message</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="shape-area">
//           <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//           <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//           <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//         </div>
//       </div>

//       {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
//       <div className="rts-about-area rts-section-gap">
//         <div className="container pt--40 main-container-overlap">
//           <div className="heading-block-container">
//             <p className="name sub-heading-name">Leadership with Purpose</p>
//             <h1 className="main-title-h1">
//               Message From The <br /> Chairman
//             </h1>
//           </div>

//           {/* Row using flex to ensure columns are same height */}
//           <div className="row content-row-spacing d-flex align-items-stretch" style={{ gap: 0 }}>
//             <div className="col-lg-5 image-column-flex">
//               <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
//                 <div className="thumbnail chairman-image-wrapper">
//                   <Image
//                     src="/images/Our Team/Chairman - Ahmad Ikram Lone.png"
//                     className="chairman-image"
//                     alt="Ahmad Ikram Lone, Chairman of GBA"
//                     width={550}
//                     height={650}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//               {/* Flexbox here ensures text stretches to match image height */}
//               <div className="about-content-right-three chairman-text-wrapper d-flex flex-column justify-content-between h-100">
//                 <div className="title-style-three left">
//                   <h2 className="chairman-name-text">Ahmad Ikram Lone</h2>
//                 </div>
//                 <div className="chairman-description-container d-flex flex-column justify-content-between flex-grow-1">
//                   <p className="disc chairman-description">
//                     It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of
//                     the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to
//                     advancing Gujranwala's industrial potential and connecting our enterprises with global
//                     opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial
//                     excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are
//                     building on these strengths to create a modern business ecosystem that fosters innovation,
//                     competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders,
//                     access new markets, and position Gujranwala among the world's leading industrial cities.
//                   </p>
//                   <p className="disc chairman-description">
//                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed
//                     to engaging with industry leaders, academia, policymakers, and international trade organisations
//                     to promote an enabling environment for business and investment. By fostering dialogue, advocating
//                     for the private sector, and offering practical support programs, we aim to remove barriers to
//                     growth and create opportunities that drive meaningful transformation. Alongside our international
//                     outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship
//                     development, and knowledge exchange.
//                   </p>
//                   <p className="disc chairman-description">
//                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and
//                     collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala -
//                     a city standing proudly at the forefront of Pakistan's industrial and economic growth.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         /* RESTORED TOP PART STYLES */
//         .watermark-style {
//           font-size: 150px;
//           margin-left: 50px;
//           position: absolute;
//           z-index: 0;
//         }

//         .rts-breadcrumb-area.top-300 {
//           padding-top: 110px !important; 
//           padding-bottom: 50px !important;
//           height: auto !important;
//           min-height: unset !important;
//         }

//         .main-container-overlap {
//           margin-top: -200px; 
//           position: relative;
//         }

//         .heading-block-container {
//           margin-top: -60px; 
//           margin-left: -100px;
//           position: relative;
//           z-index: 10;
//         }

//         .sub-heading-name {
//           font-size: 16px;
//           margin-left: 100px;
//           margin-top: 50px;
//         }

//         .main-title-h1 {
//           margin-top: -35px;
//           font-weight: 800;
//           font-size: 48px;
//           margin-left: 100px;
//           line-height: 1.2;
//         }

//         .content-row-spacing {
//           margin-top: 80px;
//         }

//         /* TEXT AND IMAGE ALIGNMENT FIX */
//         .chairman-image {
//           width: 100%;
//           height: auto;
//           display: block;
//           border-radius: 4px;
//         }

//         .chairman-name-text {
//           font-size: 40px !important; /* Set to 40px as requested */
//           margin-top: 0;
//           line-height: 1.2;
//           margin-bottom: 20px;
//         }

//         .chairman-description {
//           font-size: 15px !important; /* Set to 15px as requested */
//           line-height: 1.7;
//           margin-bottom: 0;
//           text-align: justify;
//         }

//         /* This stretches the space between paragraphs to match image height */
//         .chairman-description-container {
//           gap: 15px; 
//         }

//         /* Mobile Responsive View */
//         @media (max-width: 991px) {
//           .pl--50 {
//             padding-left: 15px !important;
//           }
//           .chairman-text-wrapper {
//             height: auto !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .heading-block-container,
//           .sub-heading-name,
//           .main-title-h1 {
//             margin-left: 0 !important;
//             margin-top: 0 !important;
//             padding-left: 15px !important;
//           }
//           .main-container-overlap {
//             margin-top: 0 !important;
//             padding-top: 40px !important;
//           }
//           .chairman-name-text {
//             font-size: 34px !important;
//             padding-left: 15px;
//           }
//           .chairman-description {
//             padding: 0 15px !important;
//             text-align: left;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default MessageSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const MessageSection: React.FC = () => {
//   return (
//     <>
//       {/* --- SECTION 1: BREADCRUMB (UNCHANGED) --- */}
//       <div className="rts-breadcrumb-area top-300">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left" style={{ textAlign: 'left' }}>
//                 <span className="bg-title watermark-style">Message</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="shape-area">
//           <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//           <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//           <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//         </div>
//       </div>

//       {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
//       <div className="rts-about-area rts-section-gap">
//         <div className="container pt--40 main-container-overlap">
//           <div className="heading-block-container">
//             <p className="name sub-heading-name">Leadership with Purpose</p>
//             <h1 className="main-title-h1">
//               Message From The <br /> Chairman
//             </h1>
//           </div>

//           <div className="row content-row-spacing d-flex align-items-stretch" style={{ gap: 0 }}>
//             {/* Image Column */}
//             <div className="col-lg-5 image-column-flex">
//               <div className="main-thumnal-inner-about-three" style={{ width: '100%' }}>
//                 <div className="thumbnail chairman-image-wrapper">
//                   <Image
//                     src="/images/Our Team/Chairman - Ahmad Ikram Lone.png"
//                     className="chairman-image"
//                     alt="Ahmad Ikram Lone, Chairman of GBA"
//                     width={550}
//                     height={650}
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Text Column - Aligned to Image Height */}
//             <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//               <div className="about-content-right-three chairman-text-wrapper d-flex flex-column h-100">
//                 <div className="title-style-three left">
//                   <h2 className="chairman-name-text">Ahmad Ikram Lone</h2>
//                 </div>
                
//                 {/* This container ensures the paragraphs spread out to match the image bottom */}
//                 <div className="chairman-description-container d-flex flex-column justify-content-between flex-grow-1">
//                   <p className="disc chairman-description">
//                     It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of
//                     the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to
//                     advancing Gujranwala's industrial potential and connecting our enterprises with global
//                     opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial
//                     excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are
//                     building on these strengths to create a modern business ecosystem that fosters innovation,
//                     competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders,
//                     access new markets, and position Gujranwala among the world's leading industrial cities.
//                   </p>
//                   <p className="disc chairman-description">
//                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed
//                     to engaging with industry leaders, academia, policymakers, and international trade organisations
//                     to promote an enabling environment for business and investment. By fostering dialogue, advocating
//                     for the private sector, and offering practical support programs, we aim to remove barriers to
//                     growth and create opportunities that drive meaningful transformation. Alongside our international
//                     outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship
//                     development, and knowledge exchange.
//                   </p>
//                   <p className="disc chairman-description">
//                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and
//                     collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala -
//                     a city standing proudly at the forefront of Pakistan's industrial and economic growth.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .watermark-style {
//           font-size: 150px;
//           margin-left: 50px;
//           position: absolute;
//           z-index: 0;
//         }

//         .rts-breadcrumb-area.top-300 {
//           padding-top: 110px !important; 
//           padding-bottom: 50px !important;
//           height: auto !important;
//           min-height: unset !important;
//         }

//         .main-container-overlap {
//           margin-top: -200px; 
//           position: relative;
//         }

//         .heading-block-container {
//           margin-top: -60px; 
//           margin-left: -100px;
//           position: relative;
//           z-index: 10;
//         }

//         .sub-heading-name {
//           font-size: 16px;
//           margin-left: 100px;
//           margin-top: 50px;
//         }

//         .main-title-h1 {
//           margin-top: -35px;
//           font-weight: 800;
//           font-size: 48px;
//           margin-left: 100px;
//           line-height: 1.2;
//         }

//         .content-row-spacing {
//           margin-top: 80px;
//         }

//         .chairman-image {
//           width: 100%;
//           height: 100%; /* Matches parent height */
//           display: block;
//           border-radius: 4px;
//         }

//         .chairman-name-text {
//           font-size: 40px !important;
//           margin-top: 0;
//           line-height: 1.2;
//           margin-bottom: 20px;
//         }

//         .chairman-description {
//           font-size: 15px !important;
//           line-height: 1.7;
//           margin-bottom: 0; /* Let flex justify-content handle spacing */
//           text-align: justify;
//         }

//         /* --- KEY FIX FOR PIC2 ALIGNMENT --- */
//         .chairman-description-container {
//           /* This forces the paragraphs to spread out and hit the image bottom */
//           flex-grow: 1;
//         }

//         /* Mobile Responsive View */
//         @media (max-width: 991px) {
//           .pl--50 {
//             padding-left: 15px !important;
//           }
//           .chairman-text-wrapper {
//             height: auto !important; /* On mobile, don't force height */
//           }
//           .chairman-description-container {
//             justify-content: flex-start !important;
//             gap: 20px;
//           }
//         }

//         @media (max-width: 768px) {
//           .heading-block-container,
//           .sub-heading-name,
//           .main-title-h1 {
//             margin-left: 0 !important;
//             margin-top: 0 !important;
//             padding-left: 15px !important;
//           }
//           .main-container-overlap {
//             margin-top: 0 !important;
//             padding-top: 40px !important;
//           }
//           .chairman-name-text {
//             font-size: 34px !important;
//             padding-left: 15px;
//           }
//           .chairman-description {
//             padding: 0 15px !important;
//             text-align: left;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default MessageSection;


// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const MessageSection: React.FC = () => {
//   return (
//     <>
//       {/* --- SECTION 1: BREADCRUMB (UNCHANGED) --- */}
//       <div className="rts-breadcrumb-area top-300">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left" style={{ textAlign: 'left' }}>
//                 <span className="bg-title watermark-style">Message</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="shape-area">
//           <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
//           <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
//           <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
//         </div>
//       </div>

//       {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
//       <div className="rts-about-area rts-section-gap">
//         <div className="container pt--40 main-container-overlap">
//           <div className="heading-block-container">
//             <p className="name sub-heading-name">Leadership with Purpose</p>
//             <h1 className="main-title-h1">
//               Message From The <br /> Chairman
//             </h1>
//           </div>

//           {/* d-flex align-items-stretch ensures the image column and text column are always the same height */}
//           <div className="row content-row-spacing d-flex align-items-stretch" style={{ gap: 0 }}>
//             {/* Image Column */}
//             <div className="col-lg-5 image-column-flex">
//               <div className="main-thumnal-inner-about-three" style={{ width: '100%', height: '100%' }}>
//                 <div className="thumbnail chairman-image-wrapper" style={{ height: '100%' }}>
//                   <Image
//                     src="/images/Our Team/Chairman - Ahmad Ikram Lone.png"
//                     className="chairman-image"
//                     alt="Ahmad Ikram Lone, Chairman of GBA"
//                     width={550}
//                     height={650}
//                     style={{ 
//                         objectFit: 'cover', 
//                         width: '100%', 
//                         height: '100%', // Forces image to match the text column height
//                         borderRadius: '10px' 
//                     }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Text Column */}
//             <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//               <div className="about-content-right-three chairman-text-wrapper d-flex flex-column h-100">
//                 <div className="title-style-three left">
//                   <h2 className="chairman-name-text">Ahmad Ikram Lone</h2>
//                 </div>
                
//                 <div className="chairman-description-container d-flex flex-column justify-content-between flex-grow-1">
//                   <p className="disc chairman-description">
//                     It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of
//                     the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to
//                     advancing Gujranwala's industrial potential and connecting our enterprises with global
//                     opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial
//                     excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are
//                     building on these strengths to create a modern business ecosystem that fosters innovation,
//                     competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders,
//                     access new markets, and position Gujranwala among the world's leading industrial cities.
//                   </p>
//                   <p className="disc chairman-description">
//                     At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed
//                     to engaging with industry leaders, academia, policymakers, and international trade organisations
//                     to promote an enabling environment for business and investment. By fostering dialogue, advocating
//                     for the private sector, and offering practical support programs, we aim to remove barriers to
//                     growth and create opportunities that drive meaningful transformation. Alongside our international
//                     outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship
//                     development, and knowledge exchange.
//                   </p>
//                   <p className="disc chairman-description">
//                     I extend my sincere appreciation to our members, partners, and stakeholders for their trust and
//                     collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala -
//                     a city standing proudly at the forefront of Pakistan's industrial and economic growth.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .watermark-style {
//           font-size: 150px;
//           margin-left: 50px;
//           position: absolute;
//           z-index: 0;
//         }

//         .rts-breadcrumb-area.top-300 {
//           padding-top: 110px !important; 
//           padding-bottom: 50px !important;
//           height: auto !important;
//           min-height: unset !important;
//         }

//         .main-container-overlap {
//           margin-top: -200px; 
//           position: relative;
//         }

//         .heading-block-container {
//           margin-top: -60px; 
//           margin-left: -100px;
//           position: relative;
//           z-index: 10;
//         }

//         .sub-heading-name {
//           font-size: 16px;
//           margin-left: 100px;
//           margin-top: 50px;
//         }

//         .main-title-h1 {
//           margin-top: -35px;
//           font-weight: 800;
//           font-size: 48px;
//           margin-left: 100px;
//           line-height: 1.2;
//         }

//         .content-row-spacing {
//           margin-top: 80px;
//         }

//         .chairman-name-text {
//           font-size: 40px !important;
//           margin-top: 0;
//           line-height: 1.2;
//           margin-bottom: 20px;
//         }

//         .chairman-description {
//           font-size: 15px !important;
//           line-height: 1.7;
//           margin-bottom: 0;
//           text-align: justify;
//         }

//         .chairman-description-container {
//           flex-grow: 1;
//         }

//         @media (max-width: 991px) {
//           .pl--50 {
//             padding-left: 15px !important;
//           }
//           .chairman-text-wrapper {
//             height: auto !important;
//           }
//           .chairman-description-container {
//             justify-content: flex-start !important;
//             gap: 20px;
//           }
//           .chairman-image {
//              height: auto !important; /* Allow image to be natural on mobile */
//           }
//         }

//         @media (max-width: 768px) {
//           .heading-block-container,
//           .sub-heading-name,
//           .main-title-h1 {
//             margin-left: 0 !important;
//             margin-top: 0 !important;
//             padding-left: 15px !important;
//           }
//           .main-container-overlap {
//             margin-top: 0 !important;
//             padding-top: 40px !important;
//           }
//           .chairman-name-text {
//             font-size: 34px !important;
//             padding-left: 15px;
//           }
//           .chairman-description {
//             padding: 0 15px !important;
//             text-align: left;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default MessageSection;

'use client';

import React from 'react';
import Image from 'next/image';

const MessageSection: React.FC = () => {
  return (
    <>
      {/* --- SECTION 1: BREADCRUMB (UNCHANGED) --- */}
      <div className="rts-breadcrumb-area top-300">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left" style={{ textAlign: 'left' }}>
                <span className="bg-title watermark-style">Message</span>
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

      {/* --- SECTION 2: CHAIRMAN'S MESSAGE --- */}
      <div className="rts-about-area rts-section-gap">
        <div className="container pt--40 main-container-overlap">
          <div className="heading-block-container">
            <p className="name sub-heading-name">Leadership with Purpose</p>
            <h1 className="main-title-h1">
              Message From The <br /> Chairman
            </h1>
          </div>

          <div className="row content-row-spacing d-flex align-items-stretch" style={{ gap: 0 }}>
            {/* Image Column */}
            <div className="col-lg-5 image-column-flex">
              <div className="main-thumnal-inner-about-three" style={{ width: '100%', height: '100%' }}>
                <div className="thumbnail chairman-image-wrapper" style={{ height: '100%' }}>
                  <Image
                    src="/images/Our Team/Chairman - Ahmad Ikram Lone.png"
                    className="chairman-image"
                    alt="Ahmad Ikram Lone, Chairman of GBA"
                    width={550}
                    height={650}
                    style={{ 
                        objectFit: 'cover', 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '10px' 
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-7 pl--50 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
              <div className="about-content-right-three chairman-text-wrapper d-flex flex-column h-100">
                <div className="title-style-three left">
                  <h2 className="chairman-name-text">Ahmad Ikram Lone</h2>
                </div>
                
                <div className="chairman-description-container d-flex flex-column justify-content-between flex-grow-1">
                  <p className="disc chairman-description">
                    It is with great pride and enthusiasm that I extend my warmest greetings as Founder & Chairman of
                    the Gujranwala Business Alliance (GBA). I am honoured to lead this alliance, dedicated to
                    advancing Gujranwala's industrial potential and connecting our enterprises with global
                    opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial
                    excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are
                    building on these strengths to create a modern business ecosystem that fosters innovation,
                    competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders,
                    access new markets, and position Gujranwala among the world's leading industrial cities.
                  </p>
                  <p className="disc chairman-description">
                    At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed
                    to engaging with industry leaders, academia, policymakers, and international trade organisations
                    to promote an enabling environment for business and investment. By fostering dialogue, advocating
                    for the private sector, and offering practical support programs, we aim to remove barriers to
                    growth and create opportunities that drive meaningful transformation. Alongside our international
                    outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship
                    development, and knowledge exchange.
                  </p>
                  <p className="disc chairman-description">
                    I extend my sincere appreciation to our members, partners, and stakeholders for their trust and
                    collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala -
                    a city standing proudly at the forefront of Pakistan's industrial and economic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .watermark-style {
          font-size: 150px;
          margin-left: 50px;
          position: absolute;
          z-index: 0;
        }

        .rts-breadcrumb-area.top-300 {
          padding-top: 140px !important; //top-distance
          padding-bottom: 50px !important;
          height: auto !important;
          min-height: unset !important;
        }

        .main-container-overlap {
          margin-top: -200px; 
          position: relative;
        }

        .heading-block-container {
          margin-top: -60px; 
          margin-left: -100px;
          position: relative;
          z-index: 10;
        }

        .sub-heading-name {
          font-size: 16px;
          margin-left: 100px;
          margin-top: 50px;
        }

        .main-title-h1 {
          margin-top: -35px;
          font-weight: 800;
          font-size: 48px;
          margin-left: 100px;
          line-height: 1.2;
        }

        .content-row-spacing {
          margin-top: 80px;
        }

        .chairman-name-text {
          font-size: 40px !important;
          margin-top: 0;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .chairman-description {
          font-size: 15px !important;
          line-height: 1.7;
          margin-bottom: 0;
          text-align: justify;
        }

        .chairman-description-container {
          flex-grow: 1;
        }

        /* --- NEW ADDED MOBILE RESPONSIVE STYLING --- */
        
        @media (max-width: 1199px) {
           .watermark-style { font-size: 100px; margin-left: 50px; }
           .heading-block-container { margin-left: -50px; }
           .sub-heading-name, .main-title-h1 { margin-left: 50px; }
        }

        @media (max-width: 991px) {
          .rts-breadcrumb-area.top-300 { padding-top: 80px !important; }
          .main-container-overlap { margin-top: -100px; }
          .heading-block-container { margin-left: 0; margin-top: 0; text-align: center; }
          .sub-heading-name, .main-title-h1 { margin-left: 0; text-align: center; }
          .main-title-h1 { font-size: 36px; }
          
          .content-row-spacing { margin-top: 40px; }
          .pl--50 { padding-left: 0 !important; }
          
          .chairman-text-wrapper { height: auto !important; margin-top: 30px; }
          .chairman-description-container { justify-content: flex-start !important; gap: 20px; }
          .chairman-image { height: 400px !important; width: 100% !important; }
          .chairman-name-text { text-align: center; font-size: 32px !important; }
        }

        @media (max-width: 768px) {
          .watermark-style { font-size: 60px; top: -30px; opacity:0.8 }
          .main-title-h1 { font-size: 28px; }
          .sub-heading-name, .main-title-h1 { margin-left: 0; text-align: center; margin-top:20px }
          .chairman-image { height: 350px !important; }
          .chairman-description { text-align: left; padding: 0 10px; }
          .rts-section-gap { padding-bottom: 60px; }
        }

        @media (max-width: 480px) {
          .watermark-style { opacaity: 0.8; } /* Hide watermark on very small screens to avoid overflow */
          .main-title-h1 { font-size: 24px; }
          .chairman-name-text { font-size: 26px !important; }
          .chairman-description { font-size: 14px !important; line-height: 1.6; }
        }

        
      `}</style>
      
    </>
  );
};

export default MessageSection;