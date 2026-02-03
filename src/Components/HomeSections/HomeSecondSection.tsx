
'use client'
import React from 'react';

const HomeSections = () => {
    return (
        <>
           

            {/* ==================================== */}
            {/* 2. Our Focus / Working Process Section */}
            {/* ==================================== */}
            <div className='box-view'>
            <div
                className=" working-process-area-three rts-section-gap working-process-bg"
                style={{
                    // marginTop: "0px",//upadte 120
                    // marginBottom: "120px",
                    // marginLeft: "160px",
                    // marginRight: "160px",
                }}
            >

                <div className="container">

                    {/* Section Title */}
                    <div className="row mt--40">
                        <div
                            className="title-style-three center"
                            // 💡 Anchor the absolute watermark to this parent div
                            style={{ position: 'relative' }}
                        >
                            {/* 💡 WATERMARK 02 DIV (Updated to new hollow style) */}
                            <div
                                className="rts-watermark-02"
                                style={{
                                    position: 'absolute',
                                    // Centered horizontally and vertically within the container
                                    top: '0%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',

                                    // --- Styling (Hollow, Heavy, Light Gray - MATCHING GujranwalaAbout) ---
                                    fontSize: '150px',
                                    fontWeight: '900',

                                    color: 'transparent',
                                    WebkitTextFillColor: 'transparent',
                                    WebkitTextStroke: '3px #dad7d7ff', // Light gray color

                                    opacity: 0.3,
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
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item"   >
                                <div className="rts-working-process-1 process-lg text-center"  >
                                     <div className="rts-working-process-1 process-lg text-center2"   >
                                    
                                    
                                    <div className={`inner ${item.innerClass}`} >
                                        <div className="icon">
                                            <img
                                                src={`/images/Our Focus - icons/${item.icon}`}
                                                alt="Working_process"
                                                
                                            />
                                        </div>
                                    </div></div>
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
</div>
            {/* Combined Custom CSS for Specific Theming and Mobile Overrides */}
            <style jsx global>
                {`

 .working-process-bg {
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }


            .box-view {
    padding-left: 90px;
    padding-right: 90px;
}
    .rts-working-process-1 .inner .icon {
    background: white !important; /* White background khatam */
    width: 80% !important; /* Icon box ko container ke mutabiq kiya */
    height: 80% !important;
}
    @media (max-width: 768px) {
    .box-view {
        padding-left: 16px;
        padding-right: 16px;
    }
}


                        

                    /* --- Our Focus Title Styles (Desktop Base) --- */
                    .title-style-three .title {
                        font-size: 60px;
                        font-weight: 900;
                        text-transform: uppercase;
                        display: inline-block;
                        margin: 0;
                    }
                    .title-style-three .solid-text {
                        color: #0d1c2e; 
                    }
                    .title-style-three .outline-text {
                        color: transparent;
                        -webkit-text-stroke: 1.5px #0d1c2e; 
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

                    
                        /* --- SECTION 2: OUR FOCUS WATERMARK 02 FIX --- */
                        .working-process-area-three {
                            margin: 60px 0 !important; /* Tighter vertical spacing for section */
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                        .working-process-area-three .rts-watermark-02 {
                            font-size: 80px !important; /* Reduced size */
                            opacity: 0.6 !important;
                            -webkit-text-stroke: 2px #dad7d7ff !important; /* Slightly thinner stroke for small screens */
                            /* Position/transform can remain as they are centered relative to the container */
                        }

                        /* --- SECTION 2: OUR FOCUS HEADING FIX --- */
                        .working-process-area-three .title-style-three .title {
                            font-size: 36px; /* Adjust focus title size for mobile */
                        }b
//                         .working-process-bg {
//     background-image: url('/images/bg/working-process-bg.png'); /* apna image path */
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: cover;     /* responsive */

// }


                        /* --- SECTION 2: CARDS FIX --- */
                        .rts-working-process-1 .content .title {
                            font-size: 16px !important; /* Smaller card titles */
                        }
                        .rts-working-process-1 .content .disc {
                             font-size: 13px !important; /* Smaller card descriptions */
                        }
                    }

                    /* Further size reduction for very small screens (phones) */
                    @media (max-width: 480px) {
                        .rts-about-area .rts-watermark-01 {
                            font-size: 80px !important; /* Even smaller watermark 01 */
                        }
                        .working-process-area-three .rts-watermark-02 {
                            font-size: 80px !important; /* Even smaller watermark 02 */
                        }
                    }
                        .working-process-bg {
                    background-position: center center;
                background-repeat: no-repeat;
                background-size: 100% 100%; /* This is the key part */
}
           


/* ===== WATERMARK 02 - OUR FOCUS ===== */
.working-process-area-three .rts-watermark-02 {
   




     position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(55%, -50%);
    font-size: 180px;       /* Desktop size */
    font-weight: 900;
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px #f5f0f0ff; /* Hollow light gray */
    opacity: 0.3;
    z-index: 0;
    line-height: 1;
    padding: 5px 0;
    display: block;
}


/* ===== WATERMARK 02 - OUR FOCUS (Desktop) ===== */
.working-process-area-three .rts-watermark-02 {
    font-size: 150px !important;
    font-weight: 900;
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px #f5f0f0ff !important;
    opacity: 0.8 !important;
    z-index: 0;
    line-height: 1;
    padding: 5px 0;
}

/* ===== MOBILE SIZES (SAME AS EVENTS) ===== */
@media (max-width: 768px) {
    .rts-about-area .rts-watermark-01,
    .working-process-area-three .rts-watermark-02 {
        font-size: 80px !important;
        opacity: 0.6 !important;
        -webkit-text-stroke: 2px #f5f0f0ff !important;
    }
}

@media (max-width: 480px) {
    .rts-about-area .rts-watermark-01,
    .working-process-area-three .rts-watermark-02 {
        font-size: 80px !important;
    }
}
  /* ===================================== */
/* MOBILE VIEW FIX FOR WATERMARK 02      */
/* ===================================== */
@media (max-width: 768px) {
  /* 1. Section boundary fix */
  .working-process-area-three {
    margin: 40px 15px !important; /* Mobile margin adjust */
    padding-top: 60px !important; /* Top padding taaki 02 piche chupa na rahe */
    overflow: hidden !important;   /* Boundary: Watermark bahar nahi jayega */
    position: relative;
  }

  /* 2. Watermark 02 Position & Look */
  .working-process-area-three .rts-watermark-02 {
    font-size: 80px !important;    /* Size reduced for mobile */
    top: 10% !important;           /* 0% se thoda niche kiya taaki section ke upar na nikal jaye */
    left: 50% !important;
    transform: translate(-50%, -50%) !important; /* Perfect Center */
    opacity: 0.5 !important;
    -webkit-text-stroke: 2px #dad7d7ff !important;
    z-index: 0 !important;
    white-space: nowrap;
  }

  /* 3. Text adjustment to prevent overlap */
  .working-process-area-three .title-style-three.center {
    position: relative;
    z-index: 2; /* Text hamesha watermark ke upar rahega */
  }

  .working-process-area-three .title-style-three .title {
    font-size: 32px !important; /* Heading size adjustment */
  }
}

/* Extra small phones fix */
@media (max-width: 480px) {
  .working-process-area-three .rts-watermark-02 {
    font-size: 70px !important;
    top: 8% !important;
  }
}



}






                `}
            </style>
        </>
    );
};

export default HomeSections;