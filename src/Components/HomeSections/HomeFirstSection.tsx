// // // // 'use client'
// // // // import React from 'react';

// // // // const AboutGBA = () => {
// // // //     // Note: Image paths are updated to start with '/' to reference the public directory.
// // // //     return (
// // // //         <div className="rts-about-area rts-section-gap">
// // // //             <div className="container pt--40">
// // // //                 <div className="row align-items-center">
                    
// // // //                     {/* Left Column - Image & Shape */}
// // // //                     <div className="col-lg-5">
// // // //                         <div className="main-thumnal-inner-about-three">
// // // //                             <div className="about-thumbnail-style-three">
// // // //                                 <div className="thumbnail">
// // // //                                     {/* Updated image path */}
// // // //                                     <img src="/images/about/Main Homepage.jpg" alt="about" />
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="shape">
// // // //                                 {/* Updated image path */}
// // // //                                 <img src="/images/about/shape/04.svg" alt="about" />
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Right Column - Content */}
// // // //                     <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// // // //                         <div className="about-content-right-three">
// // // //                             <div className="title-style-three left">
// // // //                                 <span className="pre" style={{ fontSize: '16px' }}>About GBA</span>
// // // //                                 <div className="bg-title" style={{ fontSize: '150px' }}>01</div>
// // // //                                 <h2 style={{ fontSize: '48px' }}>
// // // //                                     Empowering Businesses to Succeed Globally
// // // //                                 </h2>
// // // //                             </div>
// // // //                             <p className="disc" style={{ fontSize: '15px' }}>
// // // //                                 The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
// // // //                             </p>
// // // //                             <a href="/gba.html" className="rts-btn btn-primary">Explore</a>
// // // //                         </div>
// // // //                     </div>

// // // //                 </div>
// // // //             </div>
            
// // // //             {/* Embedded CSS for Mobile Responsiveness Overrides */}
// // // //             {/* This ensures your existing mobile fixes are applied correctly */}
// // // //             <style jsx global>
// // // //                 {`
// // // //                     @media (max-width: 768px) {
// // // //                         /* remove big gap between image and text */
// // // //                         .rts-about-area .pl_md--0.mt_md--80.pl_sm--0.mt_sm--80 {
// // // //                             margin-top: 5px !important;  /* was 80px+ */
// // // //                             padding-left: 15px !important;
// // // //                             padding-right: 15px !important;
// // // //                         }

// // // //                         /* tighter padding on top for this section */
// // // //                         .rts-about-area .container.pt--40 {
// // // //                             padding-top: 40px !important;
// // // //                         }

// // // //                         /* make heading more mobile-friendly */
// // // //                         .rts-about-area .title-style-three .bg-title {
// // // //                             font-size: 150px !important;
// // // //                         }
// // // //                         .rts-about-area .title-style-three h2 {
// // // //                             font-size: 28px !important;
// // // //                             line-height: 1.3;
// // // //                         }
// // // //                     }
// // // //                 `}
// // // //             </style>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AboutGBA;

// // // 'use client'
// // // import React from 'react';

// // // const AboutGBASection = () => {
// // //     return (
// // //         <div className="rts-about-area rts-section-gap">
// // //             <div className="container pt--40">
// // //                 <div className="row align-items-center">
// // //                     {/* Left Column - Image & Shape */}
// // //                     <div className="col-lg-5">
// // //                         <div className="main-thumnal-inner-about-three">
// // //                             <div className="about-thumbnail-style-three">
// // //                                 <div className="thumbnail">
// // //                                     <img src="/images/about/Main Homepage.jpg" alt="about" />
// // //                                 </div>
// // //                             </div>
// // //                             <div className="shape">
// // //                                 <img src="/images/about/shape/04.svg" alt="about" />
// // //                             </div>
// // //                         </div>
// // //                     </div>

// // //                     {/* Right Column - Content */}
// // //                     <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
// // //                         <div className="about-content-right-three">
// // //                             <div className="title-style-three left" style={{ position: 'relative' }}>
// // //                                 {/* WATERMARK 01 */}
// // //                                 <div className="rts-watermark-01">01</div>

// // //                                 <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}>
// // //                                     About GBA
// // //                                 </span>

// // //                                 <h2 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}>
// // //                                     Empowering Businesses to Succeed Globally
// // //                                 </h2>
// // //                             </div>
// // //                             <p className="disc" style={{ fontSize: '15px' }}>
// // //                                 The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association...
// // //                                 {/* (Full text truncated for brevity) */}
// // //                             </p>
// // //                             <a href="/about/GBA" className="rts-btn btn-primary">Explore</a>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <style jsx global>{`
// // //                 .rts-watermark-01 {
// // //                     position: absolute;
// // //                     top: 0%;
// // //                     left: 0%;
// // //                     transform: translate(5%, -50%);
// // //                     font-size: 150px;
// // //                     font-weight: 900;
// // //                     color: transparent;
// // //                     -webkit-text-fill-color: transparent;
// // //                     -webkit-text-stroke: 3px #f5f0f0ff;
// // //                     opacity: 0.3;
// // //                     z-index: 0;
// // //                     line-height: 1;
// // //                 }

// // //                 @media (max-width: 768px) {
// // //                     .rts-about-area .rts-watermark-01 {
// // //                         font-size: 80px !important;
// // //                         top: 5% !important;
// // //                         transform: translate(0%, 0%) !important;
// // //                         opacity: 0.6 !important;
// // //                     }
// // //                     .rts-about-area .about-content-right-three h2 {
// // //                         font-size: 28px !important;
// // //                     }
// // //                 }
// // //             `}</style>
// // //         </div>
// // //     );
// // // };

// // // export default AboutGBASection;


// // 'use client'
// // import React from 'react';

// // const HomeSections = () => {
// //     return (
// //         <>
// //             {/* ==================================== */}
// //             {/* 1. About GBA Section */}
// //             {/* ==================================== rts padding upadted from 80 to 120*/}
// //             <div className="rts-about-area rts-section-gap" style={{ overflow: 'hidden', padding: '120px 0' }}>
// //                 <div className="container">
// //                     <div className="row align-items-center">

// //                         {/* Left Column - Image & Black Background Div */}
// //                         <div className="col-lg-5 col-md-12">
// //                             <div className="main-thumnal-inner-about-three" style={{ position: 'relative' }}>
// //                                 {/* Black Background Shape */}
// //                                 <div style={{
// //                                     position: 'absolute',
// //                                     top: '-20px',
// //                                     left: '0',
// //                                     width: '80%',
// //                                     height: '90%',
// //                                     backgroundColor: '#1c2633',
// //                                     borderRadius: '10px',
// //                                     zIndex: 0
// //                                 }}></div>
                                
// //                                 <div className="about-thumbnail-style-three" style={{ position: 'relative', zIndex: 1 }}>
// //                                     <div className="thumbnail" style={{ padding: '30px 0 0 30px' }}>
// //                                         <img 
// //                                             src="/images/about/Main Homepage.jpg" 
// //                                             alt="about" 
// //                                             style={{ 
// //                                                 width: '100%', 
// //                                                 borderRadius: '0 0 100px 0', //
// //                                                 display: 'block'
// //                                             }} 
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Right Column - Content (Locked Alignment for 100% Screen) */}
// //                         <div className="col-lg-7 col-md-12">
// //                             <div style={{ 
// //                                 paddingLeft: '8%', // Fixed percentage instead of pl--100
// //                                 width: '100%',
// //                                 maxWidth: '750px' //
// //                             }}>
// //                                 <div className="about-content-right-three" style={{ position: 'relative' }}>
                                    
// //                                     <div className="title-style-three left" style={{ position: 'relative', marginBottom: '25px' }}>
// //                                         {/* Watermark 01 */}
// //                                         <div style={{
// //                                             position: 'absolute',
// //                                             top: '-55px',
// //                                             left: '-5px',
// //                                             fontSize: 'clamp(80px, 12vw, 150px)',
// //                                             fontWeight: '900',
// //                                             color: 'transparent',
// //                                             WebkitTextStroke: '2px #f3f3f3',
// //                                             zIndex: 0,
// //                                             lineHeight: '1',
// //                                             opacity: 0.5
// //                                         }}>01</div>

// //                                         <span style={{ 
// //                                             display: 'block', 
// //                                             fontSize: '15px', 
// //                                             fontWeight: '600',
// //                                             textTransform: 'uppercase', 
// //                                             letterSpacing: '2px',
// //                                             color: '#666',
// //                                             position: 'relative',
// //                                             zIndex: 1
// //                                         }}>About GBA</span>
                                        
// //                                         <h2 style={{ 
// //                                             fontSize: 'clamp(28px, 4vw, 48px)',
// //                                             fontWeight: '800',
// //                                             lineHeight: '1.2',
// //                                             color: '#1c2633',
// //                                             position: 'relative',
// //                                             zIndex: 1,
// //                                             marginTop: '8px'
// //                                         }}>
// //                                             Empowering Businesses <br /> to Succeed Globally
// //                                         </h2>
// //                                     </div>

// //                                     {/* Paragraph Justified to match Figma */}
// //                                     <p className="disc" style={{ 
// //                                         fontSize: '16px', 
// //                                         lineHeight: '1.7', 
// //                                         textAlign: 'justify', 
// //                                         color: '#555',
// //                                         marginBottom: '35px'
// //                                     }}>
// //                                         The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
// //                                     </p>

// //                                     {/* <a href="/about/GBA" className="rts-btn btn-primary" style={{
// //                                         padding: '15px 40px',
// //                                         backgroundColor: '#1c2633',
// //                                         color: 'white',
// //                                         borderRadius: '6px',
// //                                         fontWeight: '600',
// //                                         display: 'inline-block'
// //                                     }}>
// //                                         Explore
// //                                     </a> */}
// //                                     <a href="/about/GBA" className="rts-btn btn-primary" style={{marginTop:'80px'}}>Explore</a>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

           
// //             <style jsx global>{`
// //                 /* Yeh CSS fix karega k screen 100% ho ya 190%, alignment same rahe */
// //                 .container {
// //                     max-width: 1400px !important; 
// //                     width: 90% !important;
// //                     margin: 0 auto;
// //                 }

// //                 @media (max-width: 991px) {
// //                     .container { width: 95% !important; }
// //                     .disc { text-align: left !important; }
// //                 }
// //             `}</style>
// //         </>
// //     );
// // };

// // export default HomeSections;



// // 'use client'
// // import React from 'react';

// // const HomeSections = () => {
// //     return (
// //         <>
// //             {/* 1. About GBA Section */}
// //             <div className="rts-about-area rts-section-gap" style={{ overflow: 'hidden', padding: '120px 0' }}>
// //                 <div className="container">
// //                     <div className="row align-items-center">

// //                         {/* Left Column - Image & Black Background Div */}
// //                         <div className="col-lg-5 col-md-12">
// //                             <div className="main-thumnal-inner-about-three" style={{ position: 'relative' }}>
// //                                 <div style={{
// //                                     position: 'absolute',
// //                                     top: '-20px',
// //                                     left: '0',
// //                                     width: '80%',
// //                                     height: '90%',
// //                                     backgroundColor: '#1c2633',
// //                                     borderRadius: '10px',
// //                                     zIndex: 0
// //                                 }}></div>
                                
// //                                 <div className="about-thumbnail-style-three" style={{ position: 'relative', zIndex: 1 }}>
// //                                     <div className="thumbnail" style={{ padding: '30px 0 0 30px' }}>
// //                                         <img 
// //                                             src="/images/about/Main Homepage.jpg" 
// //                                             alt="about" 
// //                                             style={{ 
// //                                                 width: '100%', 
// //                                                 borderRadius: '0 0 100px 0',
// //                                                 display: 'block'
// //                                             }} 
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Right Column - Content */}
// //                         <div className="col-lg-7 col-md-12">
// //                             <div style={{ 
// //                                 paddingLeft: '8%',
// //                                 width: '100%',
// //                                 maxWidth: '750px'
// //                             }}>
// //                                 <div className="about-content-right-three" style={{ position: 'relative' }}>
                                    
// //                                     <div className="title-style-three left" style={{ position: 'relative', marginBottom: '25px' }}>
// //                                         <div style={{
// //                                             position: 'absolute',
// //                                             top: '-55px',
// //                                             left: '-5px',
// //                                             fontSize: 'clamp(80px, 12vw, 150px)',
// //                                             fontWeight: '900',
// //                                             color: 'transparent',
// //                                             WebkitTextStroke: '2px #f3f3f3',
// //                                             zIndex: 0,
// //                                             lineHeight: '1',
// //                                             opacity: 0.5
// //                                         }}>01</div>

// //                                         <span style={{ 
// //                                             display: 'block', 
// //                                             fontSize: '15px', 
// //                                             fontWeight: '600',
// //                                             textTransform: 'uppercase', 
// //                                             letterSpacing: '2px',
// //                                             color: '#666',
// //                                             position: 'relative',
// //                                             zIndex: 1
// //                                         }}>About GBA</span>
                                        
// //                                         <h2 style={{ 
// //                                             fontSize: 'clamp(28px, 4vw, 48px)',
// //                                             fontWeight: '800',
// //                                             lineHeight: '1.2',
// //                                             color: '#1c2633',
// //                                             position: 'relative',
// //                                             zIndex: 1,
// //                                             marginTop: '8px'
// //                                         }}>
// //                                             Empowering Businesses <br /> to Succeed Globally
// //                                         </h2>
// //                                     </div>

// //                                     {/* Paragraph Fixed: textAlign changed to 'left' to remove gaps */}
// //                                     <p className="disc" style={{ 
// //                                         fontSize: '16px', 
// //                                         lineHeight: '1.7', 
// //                                         textAlign: 'left', 
// //                                         color: '#555',
// //                                         marginBottom: '35px',
// //                                         wordSpacing: 'normal',
// //                                         letterSpacing: 'normal'
// //                                     }}>
// //                                         The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
// //                                     </p>

// //                                     <a href="/about/GBA" className="rts-btn btn-primary" style={{marginTop:'80px'}}>Explore</a>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <style jsx global>{`
// //                 .container {
// //                     max-width: 1400px !important; 
// //                     width: 90% !important;
// //                     margin: 0 auto;
// //                 }

// //                 @media (max-width: 991px) {
// //                     .container { width: 95% !important; }
// //                     .disc { text-align: left !important; }
// //                 }
// //             `}</style>
// //         </>
// //     );
// // };

// // export default HomeSections;



// 'use client'
// import React from 'react';

// const HomeSections = () => {
//     return (
//         <>
//             {/* 1. About GBA Section */}
//             <div className="rts-about-area rts-section-gap" style={{ overflow: 'hidden', padding: '120px 0' }}>
//                 {/* Standard Bootstrap Container for centered Boxed View */}
//                 <div className="container">
//                     <div className="row align-items-center justify-content-center">

//                         {/* Left Column - Image & Black Background Div */}
//                         <div className="col-lg-5 col-md-12">
//                             <div className="main-thumnal-inner-about-three" style={{ position: 'relative' }}>
//                                 <div style={{
//                                     position: 'absolute',
//                                     top: '-20px',
//                                     left: '0',
//                                     width: '80%',
//                                     height: '90%',
//                                     backgroundColor: '#1c2633',
//                                     borderRadius: '10px',
//                                     zIndex: 0
//                                 }}></div>
                                
//                                 <div className="about-thumbnail-style-three" style={{ position: 'relative', zIndex: 1 }}>
//                                     <div className="thumbnail" style={{ padding: '30px 0 0 30px' }}>
//                                         <img 
//                                             src="/images/about/Main Homepage.jpg" 
//                                             alt="about" 
//                                             style={{ 
//                                                 width: '100%', 
//                                                 borderRadius: '0 0 100px 0',
//                                                 display: 'block'
//                                             }} 
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column - Content */}
//                         <div className="col-lg-7 col-md-12">
//                             {/* Content centering and padding */}
//                             <div className="about-content-wrapper" style={{ 
//                                 paddingLeft: '8%',
//                                 width: '100%',
//                                 maxWidth: '750px'
//                             }}>
//                                 <div className="about-content-right-three" style={{ position: 'relative' }}>
                                    
//                                     <div className="title-style-three left" style={{ position: 'relative', marginBottom: '25px' }}>
//                                         <div style={{
//                                             position: 'absolute',
//                                             top: '-55px',
//                                             left: '-5px',
//                                             fontSize: 'clamp(80px, 12vw, 150px)',
//                                             fontWeight: '900',
//                                             color: 'transparent',
//                                             WebkitTextStroke: '2px #f3f3f3',
//                                             zIndex: 0,
//                                             lineHeight: '1',
//                                             opacity: 0.5
//                                         }}>01</div>

//                                         <span style={{ 
//                                             display: 'block', 
//                                             fontSize: '15px', 
//                                             fontWeight: '600',
//                                             textTransform: 'uppercase', 
//                                             letterSpacing: '2px',
//                                             color: '#666',
//                                             position: 'relative',
//                                             zIndex: 1
//                                         }}>About GBA</span>
                                        
//                                         <h2 style={{ 
//                                             fontSize: 'clamp(28px, 4vw, 48px)',
//                                             fontWeight: '800',
//                                             lineHeight: '1.2',
//                                             color: '#1c2633',
//                                             position: 'relative',
//                                             zIndex: 1,
//                                             marginTop: '8px'
//                                         }}>
//                                             Empowering Businesses <br /> to Succeed Globally
//                                         </h2>
//                                     </div>

//                                     <p className="disc" style={{ 
//                                         fontSize: '16px', 
//                                         lineHeight: '1.7', 
//                                         textAlign: 'left', 
//                                         color: '#555',
//                                         marginBottom: '35px',
//                                         wordSpacing: 'normal',
//                                         letterSpacing: 'normal'
//                                     }}>
//                                         The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
//                                     </p>

//                                     <a href="/about/GBA" className="rts-btn btn-primary" style={{marginTop:'80px'}}>Explore</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx global>{`
//                 /* Boxed View Styling */
//                 .container {
//                     max-width: 1200px !important; /* Boxed width for better focus */
//                     width: 100% !important;
//                     margin: 0 auto !important;
//                     padding-left: 15px;
//                     padding-right: 15px;
//                 }

//                 @media (max-width: 991px) {
//                     .container { width: 95% !important; }
//                     .about-content-wrapper { padding-left: 0 !important; margin-top: 50px; }
//                     .disc { text-align: left !important; }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HomeSections;


'use client'
import React from 'react';

const HomeSections = () => {
    return (
        <>
            {/* 1. About GBA Section */}
            <div className="rts-about-area rts-section-gap" style={{ overflow: 'hidden', padding: '120px 0', backgroundColor: '#fff' }}>
                
                {/* Mazeed narrowed container for more side margins */}
                <div className="container custom-boxed-container">
                    <div className="row align-items-center">

                        {/* Left Column - Image Section */}
                        <div className="col-lg-5 col-md-12">
                            <div className="main-thumnal-inner-about-three" style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '0',
                                    width: '80%',
                                    height: '90%',
                                    backgroundColor: '#1c2633',
                                    borderRadius: '10px',
                                    zIndex: 0
                                }}></div>
                                
                                <div className="about-thumbnail-style-three" style={{ position: 'relative', zIndex: 1 }}>
                                    <div className="thumbnail" style={{ padding: '30px 0 0 30px' }}>
                                        <img 
                                            src="/images/about/Main Homepage.jpg" 
                                            alt="about" 
                                            style={{ 
                                                width: '100%', 
                                                borderRadius: '0 0 100px 0',
                                                display: 'block'
                                            }} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content Section */}
                        <div className="col-lg-7 col-md-12">
                            <div className="content-inner-wrapper" style={{ paddingLeft: '10%' }}>
                                <div className="about-content-right-three" style={{ position: 'relative' }}>
                                    
                                    <div className="title-style-three left" style={{ position: 'relative', marginBottom: '25px' }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '-55px',
                                            left: '-5px',
                                            fontSize: 'clamp(80px, 12vw, 150px)',
                                            fontWeight: '900',
                                            color: 'transparent',
                                            WebkitTextStroke: '2px #f3f3f3',
                                            zIndex: 0,
                                            lineHeight: '1',
                                            opacity: 0.5
                                        }}>01</div>

                                        <span style={{ 
                                            display: 'block', 
                                            fontSize: '15px', 
                                            fontWeight: '600',
                                            textTransform: 'uppercase', 
                                            letterSpacing: '2px',
                                            color: '#666',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>About GBA</span>
                                        
                                        <h2 style={{ 
                                            fontSize: 'clamp(28px, 4vw, 42px)',
                                            fontWeight: '800',
                                            lineHeight: '1.2',
                                            color: '#1c2633',
                                            position: 'relative',
                                            zIndex: 1,
                                            marginTop: '8px'
                                        }}>
                                            Empowering Businesses <br /> to Succeed Globally
                                        </h2>
                                    </div>

                                    <p className="disc" style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.7', 
                                        textAlign: 'left', 
                                        color: '#555',
                                        marginBottom: '35px'
                                    }}>
                                        The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
                                    </p>

                                    <a href="/about/GBA" className="rts-btn btn-primary" style={{ marginTop: '80px' }}>Explore</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx global>{`

            /* --- MOBILE OVERRIDES (max-width: 768px) --- */
                    /* ==================================== */
                    @media (max-width: 768px) {
                        
                        /* --- SECTION 1: ABOUT GBA WATERMARK 01 FIX --- */
                        .rts-about-area .rts-watermark-01 {
                            font-size: 80px !important; /* Reduced size */
                            top: 0% !important; /* Move higher */
                            left: 5% !important; /* Keep near the edge */
                            transform: translate(0%, 0%) !important; /* Reset complex transform */
                            opacity: 0.6 !important; /* Make it slightly more subtle */
                            -webkit-text-stroke: 2px #f5f0f0ff !important; /* Slightly thinner stroke for small screens */

                            /* Ensure the 20px request does not apply here. Keeping 80px for better visibility */
                        }

                        /* --- SECTION 1: ABOUT GBA CONTENT SPACING/HEADINGS --- */
                        .rts-about-area .pl--100.pl_md--0.mt_md--80.pl_sm--0.mt_sm--80 {
                            margin-top: 15px !important; 
                            padding-left: 15px !important;
                            padding-right: 15px !important;
                        }
                        .rts-about-area .container.pt--40 {
                            padding-top: 40px !important;
                        }
                        .rts-about-area .about-content-right-three h2 {
                            font-size: 28px !important;
                            line-height: 1.3;
                        }
                        .rts-about-area .disc {
                            font-size: 14px !important;
                        }
                        //top se distance km krna lia 
                        @media (max-width: 768px) {
                    .rts-about-area {
                        padding: 60px 0 !important; /* Mobile pe kam padding */
                    }
                /* Focused Box View */
                .custom-boxed-container {
                    max-width: 1100px !important; /* Narrower width for more side margins 1400/1140 */
                    margin: 0 auto !important;
                    padding-left: 20px;
                    padding-right: 20px;
                }

                @media (max-width: 1199px) {
                    .custom-boxed-container { max-width: 960px !important; }
                }

                @media (max-width: 991px) {
                    .custom-boxed-container { max-width: 100% !important; width: 92% !important; }
                    .content-inner-wrapper { padding-left: 0 !important; margin-top: 60px; }
                }
                   
                


                
            `}</style>
            
            <style jsx global>{`
  /* --- SIRF MOBILE VIEW FIXES (768px and below) --- */
  @media (max-width: 768px) {
      
      
      .disc, .main-description-text {
          text-align: left !important;  /* Justify se gaps ban rahe hain, ise Left karein */
          word-spacing: -0.5px !important; /* Words ko qareeb lane ke liye */
          line-height: 1.5 !important;
          display: block !important;
      }

      /* 4. Heading ko overlap se bachane ke liye */
      .about-content-right-three h2 {
          font-size: 26px !important;
          line-height: 1.2 !important;
          margin-top: 10px !important;
          position: relative;
          z-index: 2;
      }

      /* 5. Mobile Container Gap Fix */
      .custom-boxed-container {
          padding-left: 15px !important;
          padding-right: 15px !important;
          width: 100% !important;
          margin-top: 0 !important;
      }
  }
`}</style>


        </>
    );
};

export default HomeSections;