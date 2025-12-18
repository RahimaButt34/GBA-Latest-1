// 'use client'

// // src/app/about/MissionVisionSection.tsx
// import Image from 'next/image';

// const MissionVisionSection = () => {
    
//     // Note: The specific CSS for this section (especially media queries) 
//     // should ideally be in a CSS module or global style file for production.
//     // I'm including it here as an inline <style jsx global> block for quick conversion.
//     const customStyles = `
//         /* --- Styles specific to the Mission & Vision Section (Col-lg-7 and Col-lg-5) --- */
        
//         /* Reduce gap between this section and the section above (rts-about-area) - from global styles */
//         .rts-about-area + .rts-about-area {
//             margin-top: -30px !important; 
//         }

//         /* Responsive Styles for Mobile Screen (max-width: 768px) */
//         @media (max-width: 768px) {
//             /* Column Utility Classes ko override karna */
//             .mt_md--80, .mt_sm--80 {
//                 margin-top: 30px !important; /* Top margin kam kiya */
//             }
//             .pr--100, .pl--100 {
//                 padding-right: 15px !important; /* Side padding default kiya */
//                 padding-left: 15px !important; 
//             }
            
//             /* Target the main container of the Mission & Vision content */
//             .col-lg-7 {
//                 padding-right: 15px !important; 
//                 padding-left: 15px !important;
//             }
//             .col-lg-7 .title-style-three,
//             .col-lg-7 .disc {
//                 text-align: left !important;
//             }
//             .col-lg-7 .title-style-three .bg-title {
//                 /* Hide the large background title on mobile or reduce its size */
//                 display: none; 
//             }
            
//             /* Mission & Vision Watermark (FULL WIDTH ADJUSTMENT) */
//             .rts-about-area .bg-title[style*="font-size: 100px"] {
//                 font-size: 40px !important; 
//                 opacity: 0.25 !important;
//                 margin-top: -15px !important; 
//                 width: 100% !important;
//                 text-align: center !important;
//                 margin-left: 0 !important;
//                 padding: 0 10px; 
//             }
            
//             /* Mission & Vision main heading ko chota karna */
//             .rts-about-area h2.title {
//                 font-size: 30px !important;
//             }

//              /* Watermark visibility (bg-title) - make it more visible */
//             .rts-about-area .bg-title {
//                 font-size: 60px !important;
//                 opacity: 0.15 !important; /* Correcting the likely typo 8.15 to a low value like 0.15 */
//                 margin-top: -20px !important; 
//             }
//             .rts-about-area .disc {
//                 margin-bottom: 35px !important;
//             }
//         }
//     `;

//     return (
//         <>
//             {/* Inject custom styles */}
//             <style jsx global>{customStyles}</style>

//             {/* ABOUT SECTION 2 (MISSION & VISION) */}
//             <div className="rts-about-area rts-section-gap" style={{ marginTop: '-110px' }}>
//                 <div className="container pt--40">
//                     <div className="row align-items-center">

//                         {/* */}
//                         <div className="col-lg-7 pr--100 pr_md--0 mt_md--80 pr_sm--0 mt_sm--80">
//                             <div className="title-style-three left mb-4">
//                                 <span className="pre" style={{ fontSize: '16px' }}> A Vision For Progress</span>
//                                 {/* Note: In JSX, the inline style uses a JS object */}
//                                 <div className="bg-title" style={{ marginTop: '-40px', fontSize: '100px' }}> Mission & Vission</div>
//                                 <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px' }}>
//                                     Mission & Vission
//                                 </h2>
//                             </div>

//                             <p className="disc" style={{ fontSize: '15px' }}>
//                                 The Gujranwala Business Alliance (GBA) envisions Gujranwala as a globally connected industrial hub, where innovation, entrepreneurship, and international collaboration drive sustainable economic growth. Through a unified platform representing the strength of the region’s industries and small and medium enterprises, GBA aspires to position Gujranwala as a leading center of manufacturing and export excellence in Pakistan. Its mission is to empower businesses to reach international markets, develop globally competitive products, and build enduring trade partnerships that contribute to the city’s economic advancement. GBA pursues this mission through strategic collaborations, policy dialogue, trade promotion, and capacity building initiatives that strengthen the capabilities of its members and foster innovation across sectors. By promoting industry and academia linkages, entrepreneurship development, and technology driven solutions, GBA nurtures a knowledge based industrial ecosystem aligned with international standards. Guided by the principles of collaboration, inclusivity, and excellence, the Alliance strives to expand Gujranwala’s economic footprint, ensuring its business community stands as a confident and competitive force in the global economy.
//                             </p>
//                         </div>

//                         {/* */}
//                         <div className="col-lg-5">
//                             <div className="thumbnail-large">
//                                 {/* CRITICAL: Update image path and use Next.js Image component. 
//                                     Original path: assets\images\GBA\Mission & Vision.jpg 
//                                     New path: /images/GBA/Mission-Vision.jpg (assuming public/images/GBA exists) */}
//                                 <Image 
//                                     src="/images/GBA/Mission-Vision.jpg" 
//                                     alt="why" 
//                                     width={600} // Set appropriate dimensions
//                                     height={400} // Set appropriate dimensions
//                                 />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MissionVisionSection;



// 'use client'

// // src/app/about/MissionVisionSection.tsx
// import Image from 'next/image';

// const MissionVisionSection = () => {
    
   
//     const customStyles = `
//         /* --- Styles specific to the Mission & Vision Section (Col-lg-7 and Col-lg-5) --- */
//         
//         /* Reduce gap between this section and the section above (rts-about-area) - from global styles */
//         .rts-about-area + .rts-about-area {
//             margin-top: -30px !important; 
//         }

//         /* Responsive Styles for Mobile Screen (max-width: 768px) */
//         @media (max-width: 768px) {
//             /* Column Utility Classes ko override karna */
//             .mt_md--80, .mt_sm--80 {
//                 margin-top: 30px !important; /* Top margin kam kiya */
//             }
//             .pr--100, .pl--100 {
//                 padding-right: 15px !important; /* Side padding default kiya */
//                 padding-left: 15px !important; 
//             }
//             
//             /* Target the main container of the Mission & Vision content */
//             .col-lg-7 {
//                 padding-right: 15px !important; 
//                 padding-left: 15px !important;
//             }
//             .col-lg-7 .title-style-three,
//             .col-lg-7 .disc {
//                 text-align: left !important;
//             }
//             .col-lg-7 .title-style-three .bg-title {
//                 /* Hide the large background title on mobile or reduce its size */
//                 display: none; 
//             }
//             
//             /* Mission & Vision Watermark (FULL WIDTH ADJUSTMENT) */
//             .rts-about-area .bg-title[style*="font-size: 100px"] {
//                 font-size: 40px !important; 
//                 opacity: 0.25 !important;
//                 margin-top: -15px !important; 
//                 width: 100% !important;
              
//                 
//                 /* >>> FIX: Change text-align from center to left <<< */
//                 text-align: left !important;
//                 /* >>> FIX: Add a small left margin to position it better <<< */
//                 margin-left: 15px !important; 
//                 padding: 0 10px; 
//             }
//             
//             /* Mission & Vision main heading ko chota karna */
//             .rts-about-area h2.title {
//                 font-size: 30px !important;
//             }

//             /* Watermark visibility (bg-title) - make it more visible */
//             .rts-about-area .bg-title {
//                 font-size: 60px !important;
//                 opacity: 0.15 !important; /* Correcting the likely typo 8.15 to a low value like 0.15 */
//                 margin-top: -20px !important; 
//             }
//             .rts-about-area .disc {
//                 margin-bottom: 35px !important;
//             }
//         }
//     `;
//     return (
//         <>
//             {/* Inject custom styles */}
//             <style jsx global>{customStyles}</style>

//             {/* ABOUT SECTION 2 (MISSION & VISION) */}
//             <div className="rts-about-area rts-section-gap" style={{ marginTop: '-110px' }}>
//                 <div className="container pt--40">
//                     <div className="row align-items-center">

//                         {/* LEFT SIDE PARAGRAPH */}
//                         <div className="col-lg-7 pr--100 pr_md--0 mt_md--80 pr_sm--0 mt_sm--80">
//                             <div className="title-style-three left mb-4">
//                                 <span className="pre" style={{ fontSize: '16px' }}> A Vision For Progress</span>
//                                 <div className="bg-title" style={{ marginTop: '-40px', fontSize: '100px' }}> Mission & Vission</div>
//                                 <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px' }}>
//                                     Mission & Vission
//                                 </h2>
//                             </div>

//                             <p className="disc" style={{ fontSize: '15px' }}>
//                                 The Gujranwala Business Alliance (GBA) envisions Gujranwala as a globally connected industrial hub, where innovation, entrepreneurship, and international collaboration drive sustainable economic growth. Through a unified platform representing the strength of the region’s industries and small and medium enterprises, GBA aspires to position Gujranwala as a leading center of manufacturing and export excellence in Pakistan. Its mission is to empower businesses to reach international markets, develop globally competitive products, and build enduring trade partnerships that contribute to the city’s economic advancement. GBA pursues this mission through strategic collaborations, policy dialogue, trade promotion, and capacity building initiatives that strengthen the capabilities of its members and foster innovation across sectors. By promoting industry and academia linkages, entrepreneurship development, and technology driven solutions, GBA nurtures a knowledge based industrial ecosystem aligned with international standards. Guided by the principles of collaboration, inclusivity, and excellence, the Alliance strives to expand Gujranwala’s economic footprint, ensuring its business community stands as a confident and competitive force in the global economy.
//                             </p>
//                         </div>

//                         {/* RIGHT SIDE IMAGE */}
//                         <div className="col-lg-5"
//                          style={{ marginTop: '100px' }}>
//                             <div className="thumbnail-large">
//                                 {/* The path is relative to the PUBLIC directory, which is correct */}
//                                 <Image 
//                                     src="/images/GBA/image.png" 
//                                     alt="Gujranwala Business Alliance Mission and Vision" 
//                                     width={500} 
//                                     height={400}
//                                      style={{ borderRadius: '10px' }}
                                    
                                    
//                                 />

                               
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MissionVisionSection;




'use client'

// src/app/about/MissionVisionSection.tsx
import Image from 'next/image';

const MissionVisionSection = () => {
    
    const customStyles = `
        /* --- Desktop & Global Styling (Moved from Inline) --- */
        .gba-mission-vision-section {
            margin-top: -110px;
        }
        .gba-container-padding {
            padding-top: 40px;
        }
        .gba-pre-title {
            font-size: 16px;
        }
        .gba-watermark-main {
            margin-top: -40px; 
            font-size: 100px;
            white-space: nowrap; /* Prevents cutoff */
        }
        .gba-heading-main {
            font-size: 48px;
        }
        .gba-description-text {
            font-size: 15px;
        }
        .gba-image-wrapper {
            margin-top: 100px;
        }
        .gba-rounded-img {
            border-radius: 10px;
        }

        /* --- Global existing styles preservation --- */
        .rts-about-area + .rts-about-area {
            margin-top: -30px !important; 
        }

        /* --- Responsive Styles for Mobile Screen (max-width: 768px) --- */
        @media (max-width: 768px) {
            .gba-mission-vision-section {
                margin-top: 0px !important; /* Reset negative margin for mobile flow */
            }
            .mt_md--80, .mt_sm--80 {
                margin-top: 30px !important; 
            }
            .pr--100, .pl--100 {
                padding-right: 15px !important; 
                padding-left: 15px !important; 
            }
            
            .col-lg-7 {
                padding-right: 15px !important; 
                padding-left: 15px !important;
            }
            .col-lg-7 .title-style-three,
            .col-lg-7 .disc {
                text-align: left !important;
            }

            /* FIX: Ensure watermark is visible in full form and not cut off */
            .gba-watermark-main {
                display: block !important;
                font-size: 42px !important; /* Scaled to fit screen width */
                opacity: 0.12 !important;
                margin-top: -20px !important; 
                width: 100% !important;
                text-align: left !important;
                margin-left: 0px !important; 
                white-space: nowrap !important; /* Forces full form on one line */
            }
            
            .gba-heading-main {
                font-size: 30px !important;
            }

            .gba-image-wrapper {
                margin-top: 30px !important;
            }

            .rts-about-area .disc {
                margin-bottom: 35px !important;
            }
        }
    `;

    return (
        <>
            <style jsx global>{customStyles}</style>

            <div className="rts-about-area rts-section-gap gba-mission-vision-section">
                <div className="container gba-container-padding">
                    <div className="row align-items-center">

                        {/* LEFT SIDE PARAGRAPH */}
                        <div className="col-lg-7 pr--100 pr_md--0 mt_md--80 pr_sm--0 mt_sm--80">
                            <div className="title-style-three left mb-4">
                                <span className="pre gba-pre-title"> A Vision For Progress</span>
                                <div className="bg-title gba-watermark-main"> Mission & Vission</div>
                                <h2 className="title rts-text-anime-style-1 gba-heading-main">
                                    Mission & Vission
                                </h2>
                            </div>

                            <p className="disc gba-description-text">
                                The Gujranwala Business Alliance (GBA) envisions Gujranwala as a globally connected industrial hub, where innovation, entrepreneurship, and international collaboration drive sustainable economic growth. Through a unified platform representing the strength of the region’s industries and small and medium enterprises, GBA aspires to position Gujranwala as a leading center of manufacturing and export excellence in Pakistan. Its mission is to empower businesses to reach international markets, develop globally competitive products, and build enduring trade partnerships that contribute to the city’s economic advancement. GBA pursues this mission through strategic collaborations, policy dialogue, trade promotion, and capacity building initiatives that strengthen the capabilities of its members and foster innovation across sectors. By promoting industry and academia linkages, entrepreneurship development, and technology driven solutions, GBA nurtures a knowledge based industrial ecosystem aligned with international standards. Guided by the principles of collaboration, inclusivity, and excellence, the Alliance strives to expand Gujranwala’s economic footprint, ensuring its business community stands as a confident and competitive force in the global economy.
                            </p>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="col-lg-5 gba-image-wrapper">
                            <div className="thumbnail-large">
                                <Image 
                                    src="/images/GBA/image.png" 
                                    alt="Gujranwala Business Alliance Mission and Vision" 
                                    width={500} 
                                    height={400}
                                    className="gba-rounded-img"
                                     style={{ borderRadius: '10px' }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionVisionSection;