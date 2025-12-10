// 'use client'
// import React from 'react';

// const HomeSections = () => {
//     return (
//         <>
//             {/* ==================================== */}
//             {/* 1. About GBA Section */}
//             {/* ==================================== */}
//             <div className="rts-about-area rts-section-gap">
//                 <div className="container pt--40">
//                     <div className="row align-items-center">

//                         {/* Left Column - Image & Shape */}
//                         <div className="col-lg-5">
//                             <div className="main-thumnal-inner-about-three">
//                                 <div className="about-thumbnail-style-three">
//                                     <div className="thumbnail">
//                                         <img src="/images/about/Main Homepage.jpg" alt="about" />
//                                     </div>
//                                 </div>
//                                 <div className="shape">
//                                     <img src="/images/about/shape/04.svg" alt="about" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column - Content */}
//                         <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
//                             <div className="about-content-right-three">
//                                 <div className="title-style-three left">
//                                     <span className="pre" style={{ fontSize: '16px' }}>About GBA</span>
//                                     <div className="bg-title" style={{ fontSize: '150px' }}>01</div>
//                                     <h2 style={{ fontSize: '48px' }}>
//                                         Empowering Businesses to Succeed Globally
//                                     </h2>
//                                 </div>
//                                 <p className="disc" style={{ fontSize: '15px' }}>
//                                     The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
//                                 </p>
//                                 <a href="/gba.html" className="rts-btn btn-primary">Explore</a>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             {/* ==================================== */}
//             {/* 2. Our Focus / Working Process Section */}
//             {/* ==================================== */}
//             {/* <div className="working-process-area-three rts-section-gap working-process-bg" > */}
//                 <div
//   className="working-process-area-three rts-section-gap working-process-bg"
//   style={{
//     marginTop: "120px",
//     marginBottom: "120px",
//     marginLeft: "60px",
//     marginRight: "60px",
//   }}
// >


//                 <div className="container">

//                     {/* Section Title */}
//                     <div className="row mt--40">
//                         <div className="title-style-three center">
//                             <span className="pre" style={{ fontSize: '16px' }}>Enabling Growth</span>
//                             <div className="bg-title" style={{ fontSize: '150px' }}>02</div>
//                             <h2 className="title" style={{ fontSize: '48px' }}>
//                                 <span className="solid-text">OUR</span>
//                                 <span className="outline-text">Focus</span>
//                             </h2>
//                         </div>
//                     </div>

//                     {/* Focus Cards Grid */}
//                     <div className="row g-5 mt--20 align-items-center rts_jump_animation-wrapper">

//                         {[
//                             { title: "Made In Gujranwala Promotion", desc: "Building Global Pathways for Gujranwala’s Industrial Growth", icon: "Made In Gujranwala -Promotion.png", innerClass: "one" },
//                             { title: "Global Business Engagement", desc: "Connecting People, Ideas, and Opportunities Across Borders", icon: "Global Business-Engagement.png", innerClass: "two" },
//                             { title: "Enhancing Industrial Competitiveness", desc: "Empowering Enterprises for Sustainable Growth", icon: "Enhancing Industrial- Competitiveness.png", innerClass: "three" },
//                             { title: "Advancing Global Trade & Investment", desc: "Building Partnerships that Drive Sustainable Economic Growth", icon: "Advancing Global Trade-& Investment.png", innerClass: "four" },
//                             { title: "Enterpreneurship & Leadership Development", desc: "Nurturing Visionaries for Tomorrow’s Global Economy", icon: "Entrepreneurship & Leadership-Development.png", innerClass: "five" },
//                             { title: "Industry-Academia Linkages", desc: "Bridging Knowledge, Innovation, and Industry Needs", icon: "Industry-Academia-Linkages.png", innerClass: "six" },
//                         ].map((item, index) => (
//                             <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
//                                 <div className="rts-working-process-1 process-lg text-center">
//                                     <div className={`inner ${item.innerClass}`}>
//                                         <div className="icon">
//                                             <img 
//                                                 src={`/images/Our Focus - icons/Our Focus - icons/${item.icon}`} 
//                                                 alt="Working_process"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="content">
//                                         <h6 className="title" style={{ fontSize: '18px' }}>
//                                             {item.title.split(' ').slice(0, 3).join(' ')} <br /> 
//                                             {item.title.split(' ').slice(3).join(' ')}
//                                         </h6>
//                                         <p className="disc">
//                                             {item.desc.split(',').join('').split(' ').slice(0, 5).join(' ')} <br /> 
//                                             {item.desc.split(',').join('').split(' ').slice(5).join(' ')}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>

//             {/* Combined Custom CSS for Specific Theming and Mobile Overrides */}
//             <style jsx global>
//                 {`
//                     /* --- Our Focus Title Styles --- */
//                     .title-style-three .title {
//                         font-size: 60px;
//                         font-weight: 900;
//                         text-transform: uppercase;
//                         display: inline-block;
//                         margin: 0;
//                     }
//                     .title-style-three .solid-text {
//                         color: #0d1c2e; /* dark navy */
//                     }
//                     .title-style-three .outline-text {
//                         color: transparent;
//                         -webkit-text-stroke: 1.5px #0d1c2e; /* outline effect */
//                         text-stroke: 1.5px #0d1c2e;
//                         margin-left: 10px;
//                     }
//                     .title-style-three .pre {
//                         display: block;
//                         font-size: 14px;
//                         letter-spacing: 2px;
//                         color: #666;
//                         margin-bottom: 10px;
//                     }
//                     .title-style-three.center {
//                         text-align: center;
//                     }

//                     /* --- About GBA Mobile Overrides (max-width: 768px) --- */
//                     @media (max-width: 768px) {
//                         /* remove big gap between image and text */
//                         .rts-about-area .pl_md--0.mt_md--80.pl_sm--0.mt_sm--80 {
//                             margin-top: 5px !important; 
//                             padding-left: 15px !important;
//                             padding-right: 15px !important;
//                         }

//                         /* tighter padding on top for this section */
//                         .rts-about-area .container.pt--40 {
//                             padding-top: 40px !important;
//                         }

//                         /* make heading more mobile-friendly */
//                         .rts-about-area .title-style-three .bg-title {
//                             font-size: 100px !important; /* Slightly reduced for better fit */
//                         }
//                         .rts-about-area .title-style-three h2 {
//                             font-size: 28px !important;
//                             line-height: 1.3;
//                         }
//                         .title-style-three .title {
//                             font-size: 36px; /* Adjust focus title size for mobile */
//                         }
//                     }
//                 `}
//             </style>
//         </>
//     );
// };

// export default HomeSections;



//update wateramrk code 
'use client'
import React from 'react';
import { useRouter } from "next/navigation";

const HomeSections = () => {
    const router = useRouter();
    return (
        <>
            {/* ==================================== */}
            {/* 1. About GBA Section */}
            {/* ==================================== */}
            <div className="rts-about-area rts-section-gap">
                <div className="container pt--40">
                    <div className="row align-items-center">

                        {/* Left Column - Image & Shape */}
                        <div className="col-lg-5">
                            <div className="main-thumnal-inner-about-three">
                                <div className="about-thumbnail-style-three">
                                    <div className="thumbnail">
                                        <img src="/images/about/Main Homepage.jpg" alt="about" />
                                    </div>
                                </div>
                                <div className="shape">
                                    <img src="/images/about/shape/04.svg" alt="about" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three">
                                <div
                                    className="title-style-three left"
                                    // 💡 CRITICAL: Anchor the absolute watermark to this parent div
                                    style={{ position: 'relative' }}
                                >

                                    {/* 💡 INSERTED WATERMARK DIV - Fixed Positioning and Styling */}
                                    <div
                                        className="rts-watermark-01"
                                        style={{
                                            position: 'absolute',
                                            // Positioned near the top-left of the container
                                            top: '15%',
                                            left: '0%',

                                            // Shifts the watermark slightly right and centers it vertically
                                            transform: 'translate(5%, -50%)',

                                            // --- Styling (Hollow, Heavy, Light Gray) ---
                                            fontSize: '180px', // Use 180px to prevent clipping
                                            fontWeight: '900', // Heavy stroke look

                                            color: 'transparent',
                                            WebkitTextFillColor: 'transparent',
                                            WebkitTextStroke: '3px #f5f0f0ff', // Light gray color

                                            opacity: 1,
                                            zIndex: 0, // CRITICAL: Places it in the background
                                            lineHeight: 1,
                                            padding: '5px 0', // Safety buffer
                                            display: 'block',
                                        }}
                                    >
                                        01
                                    </div>
                                    {/* END WATERMARK DIV */}


                                    <span
                                        className="pre"
                                        style={{
                                            fontSize: '16px',
                                            zIndex: 1,         // CRITICAL: Ensure text is on top
                                            position: 'relative' // CRITICAL: Ensure text is on top
                                        }}
                                    >
                                        About GBA
                                    </span>

                                    <h2 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}>
                                        Empowering Businesses to Succeed Globally
                                    </h2>
                                </div>
                                <p className="disc" style={{ fontSize: '15px' }}>
                                    The Gujranwala Business Alliance (GBA) is a dynamic and forward-thinking business association representing the collective strength of over 500 member companies from across Gujranwala’s diverse industrial sectors. Dedicated to promoting international trade, fostering partnerships, and driving industrial advancement, GBA serves as a central platform for collaboration, policy dialogue, and global engagement. Representing Pakistan’s third-largest industrial city, home to more than 21,000 SMEs and industrial units, GBA works to strengthen Gujranwala’s position as a powerhouse of manufacturing, innovation, and export excellence. By connecting local enterprises with international markets, investors, and trade bodies, the Alliance plays a pivotal role in expanding Gujranwala’s economic footprint worldwide.
                                </p>
                                <button
                                    className="rts-btn btn-primary"
                                    onClick={() => router.push("/blog-details")}
                                >
                                    Explore
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================================== */}
            {/* 2. Our Focus / Working Process Section */}
            {/* ==================================== */}
            {/* <div className="working-process-area-three rts-section-gap working-process-bg" > */}
            <div
                className="working-process-area-three rts-section-gap working-process-bg"
                style={{
                    marginTop: "120px",
                    marginBottom: "120px",
                    marginLeft: "60px",
                    marginRight: "60px",
                }}
            >


                <div className="container">

                    {/* Section Title */}
                    <div className="row mt--40">
                        <div
                            className="title-style-three center"
                            // 💡 Anchor the absolute watermark to this parent div
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                            {/* 💡 UPDATED WATERMARK DIV '02' - Size Reduced to Prevent Clipping */}
                            <div
                                className="rts-watermark-02"
                                style={{
                                    position: 'absolute',
                                    // Centered horizontally and vertically within the container
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',

                                    // --- CRITICAL FIX: Reduced size to 150px ---
                                    fontSize: '150px',
                                    fontWeight: '900',

                                    color: 'transparent',
                                    WebkitTextFillColor: 'transparent',
                                    WebkitTextStroke: '3px #dad7d7ff', // Light gray color

                                    opacity: 1,
                                    zIndex: 0, // Places it in the background
                                    lineHeight: 1,
                                    padding: '5px 0',
                                    display: 'block',
                                }}
                            >
                                02
                            </div>
                            {/* END WATERMARK DIV */}

                            {/* The text elements are now relative and z-indexed above the watermark */}
                            <span
                                className="pre"
                                style={{
                                    fontSize: '16px',
                                    zIndex: 1,
                                    position: 'relative'
                                }}
                            >
                                Enabling Growth
                            </span>

                            <h2
                                className="title"
                                style={{
                                    fontSize: '48px',
                                    zIndex: 1,
                                    position: 'relative'
                                }}
                            >
                                <span className="solid-text">OUR</span>
                                <span className="outline-text">Focus</span>
                            </h2>
                        </div>
                    </div>

                    {/* Focus Cards Grid */}
                    <div className="row g-5 mt--20 align-items-center rts_jump_animation-wrapper">

                        {[
                            { title: "Made In Gujranwala Promotion", desc: "Building Global Pathways for Gujranwala’s Industrial Growth", icon: "Made In Gujranwala -Promotion.png", innerClass: "one" },
                            { title: "Global Business Engagement", desc: "Connecting People, Ideas, and Opportunities Across Borders", icon: "Global Business-Engagement.png", innerClass: "two" },
                            { title: "Enhancing Industrial Competitiveness", desc: "Empowering Enterprises for Sustainable Growth", icon: "Enhancing Industrial- Competitiveness.png", innerClass: "three" },
                            { title: "Advancing Global Trade & Investment", desc: "Building Partnerships that Drive Sustainable Economic Growth", icon: "Advancing Global Trade-& Investment.png", innerClass: "four" },
                            { title: "Enterpreneurship & Leadership Development", desc: "Nurturing Visionaries for Tomorrow’s Global Economy", icon: "Entrepreneurship & Leadership-Development.png", innerClass: "five" },
                            { title: "Industry-Academia Linkages", desc: "Bridging Knowledge, Innovation, and Industry Needs", icon: "Industry-Academia-Linkages.png", innerClass: "six" },
                        ].map((item, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
                                <div className="rts-working-process-1 process-lg text-center">
                                    <div className={`inner ${item.innerClass}`}>
                                        <div className="icon">
                                            <img
                                                src={`/images/Our Focus - icons/Our Focus - icons/${item.icon}`}
                                                alt="Working_process"
                                            />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h6 className="title" style={{ fontSize: '18px' }}>
                                            {item.title.split(' ').slice(0, 3).join(' ')} <br />
                                            {item.title.split(' ').slice(3).join(' ')}
                                        </h6>
                                        <p className="disc">
                                            {item.desc.split(',').join('').split(' ').slice(0, 5).join(' ')} <br />
                                            {item.desc.split(',').join('').split(' ').slice(5).join(' ')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Combined Custom CSS for Specific Theming and Mobile Overrides */}
            <style jsx global>
                {`
                    /* --- Our Focus Title Styles --- */
                    .title-style-three .title {
                        font-size: 60px;
                        font-weight: 900;
                        text-transform: uppercase;
                        display: inline-block;
                        margin: 0;
                    }
                    .title-style-three .solid-text {
                        color: #0d1c2e; /* dark navy */
                    }
                    .title-style-three .outline-text {
                        color: transparent;
                        -webkit-text-stroke: 1.5px #0d1c2e; /* outline effect */
                        text-stroke: 1.5px #0d1c2e;
                        margin-left: 10px;
                    }
                    .title-style-three .pre {
                        display: block;
                        font-size: 14px;
                        letter-spacing: 2px;
                        color: #666;
                        margin-bottom: 10px;
                    }
                    .title-style-three.center {
                        text-align: center;
                    }

                    /* --- About GBA Mobile Overrides (max-width: 768px) --- */
                    @media (max-width: 768px) {
                        /* remove big gap between image and text */
                        .rts-about-area .pl_md--0.mt_md--80.pl_sm--0.mt_sm--80 {
                            margin-top: 5px !important; 
                            padding-left: 15px !important;
                            padding-right: 15px !important;
                        }

                        /* tighter padding on top for this section */
                        .rts-about-area .container.pt--40 {
                            padding-top: 40px !important;
                        }

                        /* make heading more mobile-friendly */
                        .rts-about-area .title-style-three .bg-title {
                            font-size: 100px !important; /* Slightly reduced for better fit */
                        }
                        .rts-about-area .title-style-three h2 {
                            font-size: 28px !important;
                            line-height: 1.3;
                        }
                        .title-style-three .title {
                            font-size: 36px; /* Adjust focus title size for mobile */
                        }
                    }
                `}
            </style>
        </>
    );
};

export default HomeSections;