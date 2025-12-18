

'use client'

import React from 'react';

// Data for the event posts (assuming images are located in the public/blog directory)
const eventsData = [
    {
        id: 1,
        image: "/images/blog/04.webp",
        category: "Business Solution",
        author: "David Dolean",
        title: "Building a Brand That from Market Leaders",
        link: "blog-details.html"
    },
    {
        id: 2,
        image: "/images/blog/05.webp",
        category: "Business Solution",
        author: "David Dolean",
        title: "Transforming Your Approach to Business",
        link: "blog-details.html"
    },
    {
        id: 3,
        image: "/images/blog/06.webp",
        category: "Business Solution",
        author: "David Dolean",
        title: "The quick settle tips of the new ages exist",
        link: "blog-details.html"
    },
];

const Events = () => {
    return (
        <div className="rts-blog-area rts-section-gapTop">
            <div className="container pt--40">
                {/* Section Title with Watermark */}
                <div className="row">
                    <div className="col-lg-12">
                        <div 
                            className="title-style-three center"
                            // 💡 CRITICAL: Anchor the absolute watermark to this parent div
                            style={{ position: 'relative'}}
                        >
                            <span 
                                className="pre" 
                                style={{ 
                                    fontSize: '16px',
                                    zIndex: 1, 
                                    position: 'relative' // Text must be on top
                                }}
                            >
                                Highlights
                            </span>
                            
                            {/* 💡 WATERMARK DIV '05' - Centered Positioning and Styling */}
                            <div 
                                className="rts-watermark-05"
                                style={{
                                    position: 'absolute',
                                    // Centered horizontally and vertically within the container
                                    top: '0%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)', 
                                    
                                    // --- Styling (Hollow, Heavy, Light Gray) ---
                                    // Size is adjusted to 150px to ensure it does not clip
                                    fontSize: '150px', 
                                    fontWeight: '900', 
                                    
                                    color: 'transparent', 
                                    WebkitTextFillColor: 'transparent', 
                                    WebkitTextStroke: '3px #f5f0f0ff', // Light gray color
                                    
                                    opacity: 0.3, 
                                    zIndex: 0, // CRITICAL: Places it in the background
                                    lineHeight: 1,
                                    padding: '5px 0', 
                                    display: 'block',
                                }}
                            >
                                05
                            </div>
                            {/* END WATERMARK DIV */}
                            
                            <h2 
                                className="title rts-text-anime-style-1" 
                                style={{ 
                                    fontSize: '48px',
                                    zIndex: 1, 
                                    position: 'relative' 
                                }}
                            >
                                Events
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Event Posts Grid */}
                <div className="row g-5 mt--20">
                    {eventsData.map((post) => (
                        <div key={post.id} className="col-lg-4 col-md-6">
                            {/* single Post blog large */}
                            <div className="rts-blog-h-2-wrapper">
                                <a href={post.link} className="thumbnail">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        // Placeholder fallback for missing images
                                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
                                    />
                                </a>
                                <div className="body">
                                    <span>{post.category} / by {post.author}</span>
                                    <a href={post.link}>
                                        <h4 className="title">{post.title}</h4>
                                    </a>
                                    <a className="rts-read-more btn-primary" href={post.link}>
                                        <i className="far fa-arrow-right"></i>Read More
                                    </a>
                                </div>
                            </div>
                            {/* single Post blog large End */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom CSS (Based on previous theme styles) */}
            <style jsx global>{`
                /* General Styling Reset and Setup (adjusting container padding for mobile) */
                .rts-section-gapTop {
                    padding-top: 100px;
                    padding-bottom: 50px;
                }
                
                .rts-blog-area .container.pt--40 {
                    padding-top: 40px;
                }
                
                .title-style-three.center { text-align: center; }
                .title-style-three .pre { 
                    display: block; 
                    font-size: 14px; 
                    letter-spacing: 2px; 
                    color: #666; 
                    margin-bottom: 10px; 
                }
                .title-style-three .title { 
                    font-weight: 900;
                    text-transform: uppercase;
                    color: #0d1c2e;
                }
                /* This is a mock-up for the outline effect from your previous component's title */
                .title-style-three .bg-title {
                    font-weight: 900;
                    opacity: 0.05;
                    line-height: 1;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: -1;
                    top: -50px;
                }

                /* Blog Post Card Wrapper */
                .rts-blog-h-2-wrapper {
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    background: white;
                }

                .rts-blog-h-2-wrapper:hover {
                    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
                    transform: translateY(-5px);
                }

                .rts-blog-h-2-wrapper .thumbnail img {
                    width: 100%;
                    height: 250px; /* Fixed height for consistent card appearance */
                    object-fit: cover;
                    transition: transform 0.5s;
                }
                
                .rts-blog-h-2-wrapper:hover .thumbnail img {
                    transform: scale(1.05);
                }

                .rts-blog-h-2-wrapper .body {
                    padding: 25px;
                }

                .rts-blog-h-2-wrapper .body span {
                    display: block;
                    font-size: 14px;
                    color: #888;
                    margin-bottom: 10px;
                    margin-left:-20px;
                }

                .rts-blog-h-2-wrapper .body .title {
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.4;
                    color: #0d1c2e;
                    margin-bottom: 15px;
                    transition: color 0.3s;
                    margin-left:-20px;
                }

                .rts-blog-h-2-wrapper .body .title:hover {
                    color: #ff5e14; /* Example hover color */
                }

                .rts-read-more {
                    display: inline-flex;
                    align-items: center;
                    font-weight: 600;
                    color: #ff5e14;
                    text-transform: uppercase;
                    font-size: 14px;
                    
                }
                .rts-read-more i {
                    margin-left: -20px;
                    transition: margin-left 0.3s;
                }
                .rts-read-more:hover i {
                    margin-left: 12px;
                }


                /* ==================================== */
                /* --- MOBILE OVERRIDES (Watermark and Title) --- */
                /* ==================================== */
                @media (max-width: 768px) {
                    /* --- SECTION 5: EVENTS WATERMARK 05 FIX --- */
                    .rts-blog-area .rts-watermark-05 {
                        /* Match the size of Watermark 02/03 from previous sections */
                        font-size: 100px !important; 
                        opacity: 0.6 !important;
                        -webkit-text-stroke: 2px #f5f0f0ff !important; /* Thinner stroke */
                        line-height: 1 !important; 
                        /* Position/transform can remain as they are centered */
                    }

                    /* --- SECTION 5: EVENTS HEADING FIX --- */
                    .rts-blog-area .title-style-three .title {
                        font-size: 36px !important; /* Match previous headings for mobile */
                    }
                    
                    /* Adjust section and container padding */
                    .rts-blog-area.rts-section-gapTop {
                        padding-top: 0 !important;
                        margin-top: 0 !important;
                    }

                    .rts-blog-area .container.pt--40 {
                        padding-top: 20px !important;
                    }
                    
                    /* Ensure full width on mobile for better usability */
                    .col-lg-4, .col-md-6 {
                        max-width: 100%;
                        flex: 0 0 100%;
                    }
                }

                /* Further size reduction for very small screens (phones) */
                @media (max-width: 480px) {
                    .rts-blog-area .rts-watermark-05 {
                        font-size: 80px !important; 
                    }
                }
            `}</style>
        </div>
    );
};

export default Events;