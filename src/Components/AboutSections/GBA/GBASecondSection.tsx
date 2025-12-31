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
       /* --- Desktop & Global Styling --- */
       
        .gba-mission-vision-section {
            margin-top: -110px;
        }

        /* Container ko relative rakhna zaroori hai watermark ke liye */
        .title-style-three.left {
            position: relative;
            padding-top: 50px; /* Space for watermark visibility */
            margin-bottom: 25px !important;
        }

        .gba-pre-title {
            font-size: 16px;
            position: relative;
            z-index: 2;
            display: block;
            margin-bottom: 0px;
        }

        /* ✅ WATERMARK: Absolute positioning for exact overlap */
        .gba-watermark-main {
            position: absolute;
            top: -10px;      /* Image 1 ke mutabiq position */
            left: -5px;      /* Thora left align */
            font-size: 80px; /* Bara size jaisa pic mein hai */
            line-height: 1;
            font-weight: 900;
            color: transparent;
            -webkit-text-stroke: 1px #ececec; /* Light outline */
            opacity: 0.6;
            z-index: 0;
            white-space: nowrap;
            pointer-events: none;
        }

        /* ✅ HEADING: Watermark ke upar aur thora niche */
        .gba-heading-main {
            font-size: 52px; /* Slightly larger for better impact */
            font-weight: 800;
            position: relative;
            z-index: 2;
            margin-top: 5px !important;
            color: #1c2539;
            letter-spacing: -1px;
        }

        /* ✅ IMAGE: Upar shift karne ke liye */
        .gba-image-wrapper {
            margin-top: -30px !important; /* Image ko upar le jane ke liye negative margin barhaya */
            position: relative;
            z-index: 5;
        }

        .gba-rounded-img {
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08); /* Professional look */
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

            
    /* ✅ WATERMARK (MOBILE) */
    .gba-watermark-main {
      font-size: 42px !important;   /* watermark chhota */
      top: -5px !important;
      left: -10px !important;
      opacity: 0.35 !important;
      -webkit-text-stroke: 1px #e2e2e2;
    }

    /* ✅ MAIN HEADING (MOBILE) */
    .gba-heading-main {
      font-size: 30px !important;   /* Mission & Vision font kam */
      line-height: 1.25;
      margin-top: 6px !important;
      letter-spacing: -0.5px;
    }
      @media (max-width: 768px) {

  /* IMAGE CARD FIX */
  .thumbnail-large,
  .choose-image-wrapper,
  .why-join-image {
    width: 100%;
    margin: 0 auto 20px auto;
    text-align: center;
  }

  .thumbnail-large img,
  .choose-image-wrapper img,
  .why-join-image img {
    width: 100% !important;
    height: auto !important;
    border-radius: 14px;
    object-fit: cover;
  }

  /* IMAGE CONTAINER SPACING */
  .col-lg-5 {
    margin-bottom: 25px;
  }

  /* SMALL LABEL (CHOOSE) */
  .choose-sub-title,
  .why-join-label,
  .pre-title {
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 6px;
    display: block;
  }

  /* MAIN HEADING (Why Join GBA?) */
  .why-join-title,
  .section-title,
  h2 {
    font-size: 28px !important;
    line-height: 1.25;
    margin-bottom: 12px;
  }

  /* DESCRIPTION TEXT */
  .why-join-desc,
  .disc,
  p {
    font-size: 14px;
    line-height: 1.7;
  }
    /* --- Responsive Styles for Mobile Screen (max-width: 768px) --- */
        @media (max-width: 768px) {
            .gba-mission-vision-section {
                margin-top: 0px !important;
                fontsize:48px
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

            /* Mobile pe watermark chhota aur image normal */
            .gba-watermark-main {
                font-size: 40px;
            }

}
             @media (max-width: 768px) {
            .gba-mission-vision-section {
                margin-top: 0px !important;
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

            /* Mobile pe watermark chhota aur image normal */
            .gba-watermark-main {
                font-size: 40px;
            }
            
            .gba-image-wrapper {
                margin-top: 40px !important;
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
                                <div className="bg-title gba-watermark-main" style={{ fontSize: '130px', left: '-40px' }}> Mission & Vision</div>
                                <h2 className="title rts-text-anime-style-1 gba-heading-main">
                                    Mission & Vision
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