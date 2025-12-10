// // // // 'use client'

// // // // import React from 'react';

// // // // // Data for the service cards
// // // // const servicesData = [
// // // //     { title: "Global Reach", href: "service-details.html", image: "/images/about/Global Reach.jpg" },
// // // //     { title: "Business Delegations", href: "business-deligation.html", image: "/images/about/Business Delegations.jpg" },
// // // //     { title: "Pakistan Products House", href: "pakistan-products.html", image: "/images/about/Pakistan Products House.jpg" },
// // // //     { title: "Trade Shows & Expos", href: "trade-shows.html", image: "/images/about/Trade Shows & Expos.jpg" },
// // // //     { title: "Industry Academia Linkages", href: "industry-academia.html", image: "/images/about/Industry Academia.jpg" },
// // // //     { title: "Global Growth Windows", href: "global-growth.html", image: "/images/about/Global Growth Windows.jpg" },
// // // //     { title: "International Tech Gateways", href: "international-tech.html", image: "/images/about/International Tech.jpg" },
// // // //     { title: "Leadership Incubation & Mentorship", href: "leadership-incubation.html", image: "/images/about/Leadership Incubation.jpg" },
// // // //     { title: "Business Events", href: "business-events.html", image: "/images/about/Business Events.jpg" },
// // // //     { title: "Women Empowerment", href: "women-empowerment.html", image: "/images/about/Women Empowerment.jpg" },
// // // //     { title: "BRI Centre", href: "bRI-centre.html", image: "/images/about/BRI Centre.jpg" },
// // // //     { title: "Capacity Building & Research", href: "capacity-building.html", image: "/images/about/Capacity Building.jpg" },
// // // // ];

// // // // const OurServices = () => {
// // // //     return (
// // // //         <div className="rts-projects-area rts-section-gap">
// // // //             <div className="container">
                
// // // //                 {/* Section Title */}
// // // //                 <div className="row">
// // // //                     <div className="col-lg-12">
// // // //                         <div className="title-style-three center">
// // // //                             <span className="pre" style={{ fontSize: '16px' }}>Shaping a Global Future</span>
// // // //                             <div className="bg-title" style={{ fontSize: '150px' }}>03</div>
// // // //                             <h2 className="title" style={{ fontSize: '48px' }}>
// // // //                                 <span className="solid-text">OUR</span>
// // // //                                 <span className="outline-text">SERVICES</span>
// // // //                             </h2>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Service Cards (Responsive Grid - Simulating Swiper Slides) */}
// // // //                 <div className="container-1680 mt--40">
// // // //                     <div className="row g-4 justify-content-center">
// // // //                         {servicesData.map((service, index) => (
// // // //                             <div key={index} className="col-lg-4 col-md-6 col-sm-12">
// // // //                                 <div className="single-case-studies-four">
// // // //                                     <a href={service.href} className="thumbnail">
// // // //                                         {/* Image path updated to assume /public folder */}
// // // //                                         <img 
// // // //                                             src={service.image} 
// // // //                                             alt={service.title} 
// // // //                                             // Fallback for image loading in case file is missing
// // // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x300/F0F8FF/333333?text=${service.title.replace(/ /g, '+')}` }}
// // // //                                         />
// // // //                                     </a>
// // // //                                     <div className="inner">
// // // //                                         <a href={service.href}>
// // // //                                             <h3 className="title">{service.title}</h3>
// // // //                                         </a>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
                
// // // //                 {/* Note: Swiper navigation and pagination elements are omitted, as full Swiper implementation requires external libraries not available here. */}

// // // //             </div>
            
// // // //             {/* Custom CSS for Title Styling and Mobile Responsiveness */}
// // // //             <style jsx global>
// // // //                 {`
// // // //                     /* General Layout & Section Spacing */
// // // //                     .rts-section-gap {
// // // //                         padding-top: 100px;
// // // //                         padding-bottom: 100px;
// // // //                     }

// // // //                     /* Title Styling (Reused from previous sections) */
// // // //                     .title-style-three .title {
// // // //                         font-size: 60px;
// // // //                         font-weight: 900;
// // // //                         text-transform: uppercase;
// // // //                         display: inline-block;
// // // //                         margin: 0;
// // // //                     }

// // // //                     .title-style-three .solid-text {
// // // //                         color: #0d1c2e; /* dark navy */
// // // //                     }

// // // //                     .title-style-three .outline-text {
// // // //                         color: transparent;
// // // //                         -webkit-text-stroke: 1.5px #0d1c2e; /* outline effect */
// // // //                         text-stroke: 1.5px #0d1c2e;
// // // //                         margin-left: 10px;
// // // //                     }

// // // //                     .title-style-three .pre {
// // // //                         display: block;
// // // //                         font-size: 14px;
// // // //                         letter-spacing: 2px;
// // // //                         color: #666;
// // // //                         margin-bottom: 10px;
// // // //                     }

// // // //                     .title-style-three.center {
// // // //                         text-align: center;
// // // //                     }
                    
// // // //                     /* Card Specific Styling */
// // // //                     .single-case-studies-four {
// // // //                         position: relative;
// // // //                         overflow: hidden;
// // // //                         border-radius: 8px;
// // // //                         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // // //                     }

// // // //                     .single-case-studies-four .thumbnail img {
// // // //                         width: 100%;
// // // //                         height: 300px; /* Fixed height for visual consistency */
// // // //                         object-fit: cover;
// // // //                         transition: transform 0.4s ease-in-out;
// // // //                     }

// // // //                     .single-case-studies-four:hover .thumbnail img {
// // // //                         transform: scale(1.05);
// // // //                     }
                    
// // // //                     .single-case-studies-four .inner {
// // // //                         position: absolute;
// // // //                         bottom: 0;
// // // //                         left: 0;
// // // //                         right: 0;
// // // //                         padding: 20px;
// // // //                         background: linear-gradient(0deg, rgba(13, 28, 46, 0.9) 0%, rgba(13, 28, 46, 0) 100%);
// // // //                     }

// // // //                     .single-case-studies-four .inner .title {
// // // //                         color: #ffffff;
// // // //                         font-size: 22px;
// // // //                         font-weight: 700;
// // // //                         margin-bottom: 0;
// // // //                         transition: color 0.3s;
// // // //                     }
                    
// // // //                     /* Mobile Responsiveness */
// // // //                     @media (max-width: 991px) {
// // // //                         .rts-section-gap {
// // // //                             padding-top: 60px;
// // // //                             padding-bottom: 60px;
// // // //                         }
// // // //                     }

// // // //                     @media (max-width: 768px) {
// // // //                         /* Mobile Title Adjustments */
// // // //                         .title-style-three .bg-title {
// // // //                             font-size: 100px !important;
// // // //                         }
// // // //                         .title-style-three h2 {
// // // //                             font-size: 28px !important;
// // // //                             line-height: 1.3;
// // // //                         }
// // // //                         .title-style-three .title {
// // // //                             font-size: 36px;
// // // //                         }
                        
// // // //                         /* Add spacing between sections on mobile */
// // // //                         .rts-projects-area {
// // // //                             margin-top: 40px; 
// // // //                         }
// // // //                     }
// // // //                 `}
// // // //             </style>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default OurServices;
// // // 'use client'
// // // 'use client'

// // // import React from 'react';

// // // // Data for the service cards (unchanged)
// // // const servicesData = [
// // //     { title: "Global Reach", href: "service-details.html", image: "/images/about/Global Reach.jpg" },
// // //     { title: "Business Delegations", href: "business-deligation.html", image: "/images/about/Business Delegations.jpg" },
// // //     { title: "Pakistan Products House", href: "pakistan-products.html", image: "/images/about/Pakistan Products House.jpg" },
// // //     { title: "Trade Shows & Expos", href: "trade-shows.html", image: "/images/about/Trade Shows & Expos.jpg" },
// // //     { title: "Industry Academia Linkages", href: "industry-academia.html", image: "/images/about/Industry Academia.jpg" },
// // //     { title: "Global Growth Windows", href: "global-growth.html", image: "/images/about/Global Growth Windows.jpg" },
// // //     { title: "International Tech Gateways", href: "international-tech.html", image: "/images/about/International Tech.jpg" },
// // //     { title: "Leadership Incubation & Mentorship", href: "leadership-incubation.html", image: "/images/about/Leadership Incubation.jpg" },
// // //     { title: "Business Events", href: "business-events.html", image: "/images/about/Business Events.jpg" },
// // //     { title: "Women Empowerment", href: "women-empowerment.html", image: "/images/about/Women Empowerment.jpg" },
// // //     { title: "BRI Centre", href: "bRI-centre.html", image: "/images/about/BRI Centre.jpg" },
// // //     { title: "Capacity Building & Research", href: "capacity-building.html", image: "/images/about/Capacity Building.jpg" },
// // // ];

// // // const OurServices = () => {
// // //     // Current state of the "slider" for navigation text
// // //     const currentPage = 8;
// // //     const totalPages = servicesData.length;

// // //     return (
// // //         <div className="rts-projects-area rts-section-gap">
// // //             <div className="container">

// // //                 {/* Section Title (unchanged) */}
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         <div className="title-style-three center">
// // //                             <span className="pre" style={{ fontSize: '16px' }}>Shaping a Global Future</span>
// // //                             <div className="bg-title" style={{ fontSize: '150px' }}>03</div>
// // //                             <h2 className="title" style={{ fontSize: '48px' }}>
// // //                                 <span className="solid-text">OUR</span>
// // //                                 <span className="outline-text">SERVICES</span>
// // //                             </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Service Cards (Horizontal Scroll Wrapper) */}
// // //                 <div className="container-1680 mt--40">
// // //                     {/* 👇 Added a new wrapper for horizontal scrolling */}
// // //                     <div className="horizontal-scroll-wrapper">
// // //                         <div className="row g-4 justify-content-start flex-nowrap">
// // //                             {servicesData.map((service, index) => (
// // //                                 // Changed col-lg-4 to a fixed width class for horizontal layout
// // //                                 <div key={index} className="col-slide"> 
// // //                                     <div className="single-case-studies-four">
// // //                                         <a href={service.href} className="thumbnail">
// // //                                             <img 
// // //                                                 src={service.image} 
// // //                                                 alt={service.title} 
// // //                                                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x300/F0F8FF/333333?text=${service.title.replace(/ /g, '+')}` }}
// // //                                             />
// // //                                         </a>
// // //                                         <div className="inner">
// // //                                             <a href={service.href}>
// // //                                                 <h3 className="title">{service.title}</h3>
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Custom Navigation/Pagination (Simulated) */}
// // //                 <div className="slider-nav-container">
// // //                     <button className="slider-arrow left-arrow">←</button>
// // //                     <span className="slider-page-indicator">
// // //                         {currentPage} / {totalPages}
// // //                     </span>
// // //                     <button className="slider-arrow right-arrow">→</button>
// // //                 </div>

// // //             </div>

// // //             {/* Custom CSS for Title Styling and Mobile Responsiveness */}
// // //             <style jsx global>
// // //                 {`
// // //                     /* General Layout & Section Spacing */
// // //                     .rts-section-gap {
// // //                         padding-top: 100px;
// // //                         padding-bottom: 100px;
// // //                     }

// // //                     /* --- Title Styling (unchanged) --- */
// // //                     .title-style-three .title {
// // //                         font-size: 60px;
// // //                         font-weight: 900;
// // //                         text-transform: uppercase;
// // //                         display: inline-block;
// // //                         margin: 0;
// // //                     }

// // //                     .title-style-three .solid-text {
// // //                         color: #0d1c2e;
// // //                     }

// // //                     .title-style-three .outline-text {
// // //                         color: transparent;
// // //                         -webkit-text-stroke: 1.5px #0d1c2e;
// // //                         text-stroke: 1.5px #0d1c2e;
// // //                         margin-left: 10px;
// // //                     }

// // //                     .title-style-three .pre {
// // //                         display: block;
// // //                         font-size: 14px;
// // //                         letter-spacing: 2px;
// // //                         color: #666;
// // //                         margin-bottom: 10px;
// // //                     }

// // //                     .title-style-three.center {
// // //                         text-align: center;
// // //                     }
                    
// // //                     /* --- Horizontal Scroll & Card Adjustments --- */
// // //                     .horizontal-scroll-wrapper {
// // //                         overflow-x: auto; /* Enables horizontal scrolling */
// // //                         overflow-y: hidden;
// // //                         -webkit-overflow-scrolling: touch;
// // //                         padding-bottom: 20px; /* Space for scrollbar */
// // //                     }
                    
// // //                     /* Ensures items stay in a single row */
// // //                     .horizontal-scroll-wrapper .row {
// // //                         display: flex;
// // //                         flex-wrap: nowrap;
// // //                     }

// // //                     /* Fixed width for each card column (mimics col-lg-4, but prevents wrapping) */
// // //                     .col-slide {
// // //                         flex: 0 0 33.3333%; /* Show 3 cards on desktop */
// // //                         max-width: 33.3333%;
// // //                         padding: 0 8px; /* Add padding similar to g-4 */
// // //                     }

// // //                     /* Card Specific Styling (mostly unchanged) */
// // //                     .single-case-studies-four {
// // //                         position: relative;
// // //                         overflow: hidden;
// // //                         border-radius: 8px;
// // //                         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // //                         margin-top: 16px;
// // //                     }

// // //                     .single-case-studies-four .thumbnail img {
// // //                         width: 100%;
// // //                         height: 300px;
// // //                         object-fit: cover;
// // //                         transition: transform 0.4s ease-in-out;
// // //                     }

// // //                     .single-case-studies-four:hover .thumbnail img {
// // //                         transform: scale(1.05);
// // //                     }
                    
// // //                     .single-case-studies-four .inner {
// // //                         position: absolute;
// // //                         bottom: 0;
// // //                         left: 0;
// // //                         right: 0;
// // //                         padding: 20px;
// // //                         background: linear-gradient(0deg, rgba(13, 28, 46, 0.9) 0%, rgba(13, 28, 46, 0) 100%);
// // //                     }

// // //                     .single-case-studies-four .inner .title {
// // //                         color: #ffffff;
// // //                         font-size: 22px;
// // //                         font-weight: 700;
// // //                         margin-bottom: 0;
// // //                         transition: color 0.3s;
// // //                     }

// // //                     /* --- Custom Navigation Styling (Simulated) --- */
// // //                     .slider-nav-container {
// // //                         display: flex;
// // //                         justify-content: center;
// // //                         align-items: center;
// // //                         margin-top: 30px;
// // //                         gap: 15px;
// // //                     }

// // //                     .slider-arrow {
// // //                         background: none;
// // //                         border: 1px solid #ccc;
// // //                         color: #333;
// // //                         font-size: 20px;
// // //                         width: 40px;
// // //                         height: 40px;
// // //                         border-radius: 50%;
// // //                         cursor: pointer;
// // //                         display: flex;
// // //                         align-items: center;
// // //                         justify-content: center;
// // //                         transition: background-color 0.3s, border-color 0.3s;
// // //                     }
                    
// // //                     .slider-arrow:hover {
// // //                         background-color: #0d1c2e;
// // //                         border-color: #0d1c2e;
// // //                         color: white;
// // //                     }

// // //                     .slider-page-indicator {
// // //                         font-size: 16px;
// // //                         font-weight: 500;
// // //                         color: #333;
// // //                     }

// // //                     /* --- Mobile Responsiveness --- */
// // //                     @media (max-width: 991px) {
// // //                         .rts-section-gap {
// // //                             padding-top: 60px;
// // //                             padding-bottom: 60px;
// // //                         }
// // //                         /* On tablets, show 2 cards at a time (adjust width) */
// // //                         .col-slide {
// // //                             flex: 0 0 50%;
// // //                             max-width: 50%;
// // //                         }
// // //                     }

// // //                     @media (max-width: 768px) {
// // //                         /* Mobile Title Adjustments */
// // //                         .title-style-three .bg-title {
// // //                             font-size: 100px !important;
// // //                         }
// // //                         .title-style-three h2 {
// // //                             font-size: 28px !important;
// // //                             line-height: 1.3;
// // //                         }
// // //                         .title-style-three .title {
// // //                             font-size: 36px;
// // //                         }
                        
// // //                         .rts-projects-area {
// // //                             margin-top: 40px; 
// // //                         }

// // //                         /* On mobile, show 1 card at a time (adjust width) */
// // //                         .col-slide {
// // //                             flex: 0 0 100%;
// // //                             max-width: 100%;
// // //                         }
// // //                     }
// // //                 `}
// // //             </style>
// // //         </div>
// // //     );
// // // };

// // // export default OurServices;

// // // 'use client'

// // // import React from 'react';

// // // // Data for the service cards (unchanged)
// // // const servicesData = [
// // //     { title: "Global Reach", href: "service-details.html", image: "/images/about/Global Reach.jpg" },
// // //     { title: "Business Delegations", href: "business-deligation.html", image: "/images/about/Business Delegations.jpg" },
// // //     { title: "Pakistan Products House", href: "pakistan-products.html", image: "/images/about/Pakistan Products House.jpg" },
// // //     { title: "Trade Shows & Expos", href: "trade-shows.html", image: "/images/about/Trade Shows & Expos.jpg" },
// // //     { title: "Industry Academia Linkages", href: "industry-academia.html", image: "/images/about/Industry Academia.jpg" },
// // //     { title: "Global Growth Windows", href: "global-growth.html", image: "/images/about/Global Growth Windows.jpg" },
// // //     { title: "International Tech Gateways", href: "international-tech.html", image: "/images/about/International Tech.jpg" },
// // //     { title: "Leadership Incubation & Mentorship", href: "leadership-incubation.html", image: "/images/about/Leadership Incubation.jpg" },
// // //     { title: "Business Events", href: "business-events.html", image: "/images/about/Business Events.jpg" },
// // //     { title: "Women Empowerment", href: "women-empowerment.html", image: "/images/about/Women Empowerment.jpg" },
// // //     { title: "BRI Centre", href: "bRI-centre.html", image: "/images/about/BRI Centre.jpg" },
// // //     { title: "Capacity Building & Research", href: "capacity-building.html", image: "/images/about/Capacity Building.jpg" },
// // // ];

// // // const OurServices = () => {
// // //     const currentPage = 8;
// // //     const totalPages = servicesData.length;

// // //     return (
// // //         <div className="rts-projects-area rts-section-gap">
// // //             <div className="container">

// // //                 {/* Section Title (unchanged) */}
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         <div className="title-style-three center">
// // //                             <span className="pre" style={{ fontSize: '16px' }}>Shaping a Global Future</span>
// // //                             <div className="bg-title" style={{ fontSize: '150px' }}>03</div>
// // //                             <h2 className="title" style={{ fontSize: '48px' }}>
// // //                                 <span className="solid-text">OUR</span>
// // //                                 <span className="outline-text">SERVICES</span>
// // //                             </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Service Cards (Horizontal Scroll Wrapper) */}
// // //                 <div className="container-1680 mt--40">
// // //                     <div className="horizontal-scroll-wrapper">
// // //                         {/* We use a content container to apply the animation */}
// // //                         <div className="scroll-content-container row g-4 justify-content-start flex-nowrap">
// // //                             {servicesData.map((service, index) => (
// // //                                 <div key={index} className="col-slide"> 
// // //                                     <div className="single-case-studies-four">
// // //                                         <a href={service.href} className="thumbnail">
// // //                                             <img 
// // //                                                 src={service.image} 
// // //                                                 alt={service.title} 
// // //                                                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x300/F0F8FF/333333?text=${service.title.replace(/ /g, '+')}` }}
// // //                                             />
// // //                                         </a>
// // //                                         <div className="inner">
// // //                                             <a href={service.href}>
// // //                                                 <h3 className="title">{service.title}</h3>
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Custom Navigation/Pagination (Simulated) */}
// // //                 <div className="slider-nav-container">
// // //                     <button className="slider-arrow left-arrow">←</button>
// // //                     <span className="slider-page-indicator">
// // //                         {currentPage} / {totalPages}
// // //                     </span>
// // //                     <button className="slider-arrow right-arrow">→</button>
// // //                 </div>

// // //             </div>

// // //             {/* Custom CSS for Title Styling and Mobile Responsiveness */}
// // //             <style jsx global>
// // //                 {`
// // //                     /* General Layout & Section Spacing */
// // //                     .rts-section-gap {
// // //                         padding-top: 100px;
// // //                         padding-bottom: 100px;
// // //                     }

// // //                     /* --- Title Styling (unchanged) --- */
// // //                     .title-style-three .title {
// // //                         font-size: 60px;
// // //                         font-weight: 900;
// // //                         text-transform: uppercase;
// // //                         display: inline-block;
// // //                         margin: 0;
// // //                     }

// // //                     /* ... (other title styles remain the same) ... */
// // //                     .title-style-three .solid-text { color: #0d1c2e; }
// // //                     .title-style-three .outline-text {
// // //                         color: transparent;
// // //                         -webkit-text-stroke: 1.5px #0d1c2e;
// // //                         text-stroke: 1.5px #0d1c2e;
// // //                         margin-left: 10px;
// // //                     }
// // //                     .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
// // //                     .title-style-three.center { text-align: center; }
                    
// // //                     /* --- Horizontal Scroll & Card Adjustments --- */
// // //                     .horizontal-scroll-wrapper {
// // //                         overflow-x: auto; /* Enables manual horizontal scrolling */
// // //                         overflow-y: hidden;
// // //                         -webkit-overflow-scrolling: touch;
// // //                         padding-bottom: 20px;
// // //                         /* Hide default scrollbar */
// // //                         scrollbar-width: none; /* Firefox */
// // //                         -ms-overflow-style: none;  /* IE and Edge */
// // //                     }
// // //                     .horizontal-scroll-wrapper::-webkit-scrollbar {
// // //                         display: none; /* Chrome, Safari, Opera */
// // //                     }

// // //                     .scroll-content-container {
// // //                         /* This container is used to apply the animation to shift the content */
// // //                         animation: slide-scroll 60s linear infinite; /* Increased duration for slower animation */
// // //                         animation-play-state: running; /* Start animation automatically */
// // //                         min-width: calc(100% + 1px); /* Ensure there's enough content width to trigger animation */
// // //                         display: flex;
// // //                         flex-wrap: nowrap;
// // //                     }
                    
// // //                     /* Pause animation on hover */
// // //                     .horizontal-scroll-wrapper:hover .scroll-content-container {
// // //                         animation-play-state: paused;
// // //                     }

// // //                     .col-slide {
// // //                         flex: 0 0 33.3333%;
// // //                         max-width: 33.3333%;
// // //                         padding: 0 8px;
// // //                     }

// // //                     /* --- Card Specific Styling & Hover Animation --- */
// // //                     .single-case-studies-four {
// // //                         position: relative;
// // //                         overflow: hidden;
// // //                         border-radius: 8px;
// // //                         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // //                         margin-top: 16px;
// // //                         transition: box-shadow 0.3s ease;
// // //                     }
                    
// // //                     /* New: Lift and highlight card on hover */
// // //                     .single-case-studies-four:hover {
// // //                         box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
// // //                         transform: translateY(-5px);
// // //                     }

// // //                     .single-case-studies-four .thumbnail img {
// // //                         width: 100%;
// // //                         height: 300px;
// // //                         object-fit: cover;
// // //                         transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother transition */
// // //                     }

// // //                     .single-case-studies-four:hover .thumbnail img {
// // //                         transform: scale(1.1); /* Deeper zoom on hover */
// // //                     }
                    
// // //                     .single-case-studies-four .inner {
// // //                         position: absolute;
// // //                         bottom: 0;
// // //                         left: 0;
// // //                         right: 0;
// // //                         padding: 20px;
// // //                         background: linear-gradient(0deg, rgba(13, 28, 46, 0.9) 0%, rgba(13, 28, 46, 0) 100%);
// // //                     }

// // //                     .single-case-studies-four .inner .title {
// // //                         color: #ffffff;
// // //                         font-size: 22px;
// // //                         font-weight: 700;
// // //                         margin-bottom: 0;
// // //                         transition: color 0.3s;
// // //                     }

// // //                     /* --- CSS Keyframes for Auto-Scrolling --- */
// // //                     /* Calculate the distance to scroll one complete loop of 12 items */
// // //                     @keyframes slide-scroll {
// // //                         0% { transform: translateX(0); }
// // //                         100% { transform: translateX(calc(-33.3333% * 12)); } /* Adjust this based on number of slides and visibility */
// // //                     }

// // //                     /* --- Custom Navigation Styling (unchanged) --- */
// // //                     .slider-nav-container {
// // //                         display: flex;
// // //                         justify-content: center;
// // //                         align-items: center;
// // //                         margin-top: 30px;
// // //                         gap: 15px;
// // //                     }

// // //                     /* ... (other navigation styles remain the same) ... */
// // //                     .slider-arrow {
// // //                         background: none;
// // //                         border: 1px solid #ccc;
// // //                         color: #333;
// // //                         font-size: 20px;
// // //                         width: 40px;
// // //                         height: 40px;
// // //                         border-radius: 50%;
// // //                         cursor: pointer;
// // //                         display: flex;
// // //                         align-items: center;
// // //                         justify-content: center;
// // //                         transition: background-color 0.3s, border-color 0.3s;
// // //                     }
                    
// // //                     .slider-arrow:hover {
// // //                         background-color: #0d1c2e;
// // //                         border-color: #0d1c2e;
// // //                         color: white;
// // //                     }
// // //                     .slider-page-indicator { font-size: 16px; font-weight: 500; color: #333; }


// // //                     /* --- Mobile Responsiveness (adjusted to show 100% width on smaller screens) --- */
// // //                     @media (max-width: 991px) {
// // //                         .col-slide {
// // //                             flex: 0 0 50%; /* Show 2 cards on tablet */
// // //                             max-width: 50%;
// // //                         }
// // //                         /* Adjust animation based on new card width */
// // //                         @keyframes slide-scroll {
// // //                             0% { transform: translateX(0); }
// // //                             100% { transform: translateX(calc(-50% * 12)); }
// // //                         }
// // //                     }

// // //                     @media (max-width: 768px) {
// // //                         .col-slide {
// // //                             flex: 0 0 100%; /* Show 1 card on mobile */
// // //                             max-width: 100%;
// // //                         }
// // //                         /* Adjust animation based on new card width */
// // //                         @keyframes slide-scroll {
// // //                             0% { transform: translateX(0); }
// // //                             100% { transform: translateX(calc(-100% * 12)); }
// // //                         }
// // //                     }
// // //                 `}
// // //             </style>
// // //         </div>
// // //     );
// // // };

// // // export default OurServices;

// // 'use client'

// // import React from 'react';

// // // Data for the service cards (unchanged)
// // const servicesData = [
// //     { title: "Global Reach", href: "service-details.html", image: "/images/about/Global Reach.jpg" },
// //     { title: "Business Delegations", href: "business-deligation.html", image: "/images/about/Business Delegations.jpg" },
// //     { title: "Pakistan Products House", href: "pakistan-products.html", image: "/images/about/Pakistan Products House.jpg" },
// //     { title: "Trade Shows & Expos", href: "trade-shows.html", image: "/images/about/Trade Shows & Expos.jpg" },
// //     { title: "Industry Academia Linkages", href: "industry-academia.html", image: "/images/about/Industry Academia.jpg" },
// //     { title: "Global Growth Windows", href: "global-growth.html", image: "/images/about/Global Growth Windows.jpg" },
// //     { title: "International Tech Gateways", href: "international-tech.html", image: "/images/about/International Tech.jpg" },
// //     { title: "Leadership Incubation & Mentorship", href: "leadership-incubation.html", image: "/images/about/Leadership Incubation.jpg" },
// //     { title: "Business Events", href: "business-events.html", image: "/images/about/Business Events.jpg" },
// //     { title: "Women Empowerment", href: "women-empowerment.html", image: "/images/about/Women Empowerment.jpg" },
// //     { title: "BRI Centre", href: "bRI-centre.html", image: "/images/about/BRI Centre.jpg" },
// //     { title: "Capacity Building & Research", href: "capacity-building.html", image: "/images/about/Capacity Building.jpg" },
// // ];

// // const OurServices = () => {
// //     const currentPage = 8;
// //     const totalPages = servicesData.length;

// //     return (
// //         <div className="rts-projects-area rts-section-gap">
// //             <div className="container">

// //                 {/* Section Title (unchanged) */}
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         <div className="title-style-three center">
// //                             <span className="pre" style={{ fontSize: '16px' }}>Shaping a Global Future</span>
// //                             <div className="bg-title" style={{ fontSize: '150px' }}>03</div>
// //                             <h2 className="title" style={{ fontSize: '48px' }}>
// //                                 <span className="solid-text">OUR</span>
// //                                 <span className="outline-text">SERVICES</span>
// //                             </h2>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Service Cards (Horizontal Scroll Wrapper) */}
// //                 <div className="container-1680 mt--40">
// //                     <div className="horizontal-scroll-wrapper">
// //                         {/* We use a content container to apply the animation */}
// //                         <div className="scroll-content-container row g-4 justify-content-start flex-nowrap">
// //                             {servicesData.map((service, index) => (
// //                                 <div key={index} className="col-slide"> 
// //                                     <div className="single-case-studies-four">
// //                                         <a href={service.href} className="thumbnail">
// //                                             <img 
// //                                                 src={service.image} 
// //                                                 alt={service.title} 
// //                                                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x300/F0F8FF/333333?text=${service.title.replace(/ /g, '+')}` }}
// //                                             />
// //                                         </a>
// //                                         <div className="inner">
// //                                             <a href={service.href}>
// //                                                 <h3 className="title">{service.title}</h3>
// //                                             </a>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Custom Navigation/Pagination (Simulated) */}
// //                 <div className="slider-nav-container">
// //                     <button className="slider-arrow left-arrow">←</button>
// //                     <span className="slider-page-indicator">
// //                         {currentPage} / {totalPages}
// //                     </span>
// //                     <button className="slider-arrow right-arrow">→</button>
// //                 </div>

// //             </div>

// //             {/* Custom CSS for Title Styling and Mobile Responsiveness */}
// //             <style jsx global>
// //                 {`
// //                     /* General Layout & Section Spacing */
// //                     .rts-section-gap {
// //                         padding-top: 100px;
// //                         padding-bottom: 100px;
// //                     }

// //                     /* --- Title Styling (unchanged) --- */
// //                     .title-style-three .title {
// //                         font-size: 60px;
// //                         font-weight: 900;
// //                         text-transform: uppercase;
// //                         display: inline-block;
// //                         margin: 0;
// //                     }

// //                     /* ... (other title styles remain the same) ... */
// //                     .title-style-three .solid-text { color: #0d1c2e; }
// //                     .title-style-three .outline-text {
// //                         color: transparent;
// //                         -webkit-text-stroke: 1.5px #0d1c2e;
// //                         text-stroke: 1.5px #0d1c2e;
// //                         margin-left: 10px;
// //                     }
// //                     .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
// //                     .title-style-three.center { text-align: center; }
                    
// //                     /* --- Horizontal Scroll & Card Adjustments --- */
// //                     .horizontal-scroll-wrapper {
// //                         overflow-x: auto; /* Enables manual horizontal scrolling */
// //                         overflow-y: hidden;
// //                         -webkit-overflow-scrolling: touch;
// //                         padding-bottom: 20px;
// //                         /* Hide default scrollbar */
// //                         scrollbar-width: none; /* Firefox */
// //                         -ms-overflow-style: none;  /* IE and Edge */
// //                     }
// //                     .horizontal-scroll-wrapper::-webkit-scrollbar {
// //                         display: none; /* Chrome, Safari, Opera */
// //                     }

// //                     .scroll-content-container {
// //                         /* This container is used to apply the animation to shift the content */
// //                         animation: slide-scroll 60s linear infinite; /* Increased duration for slower animation */
// //                         animation-play-state: running; /* Start animation automatically */
// //                         min-width: calc(100% + 1px); /* Ensure there's enough content width to trigger animation */
// //                         display: flex;
// //                         flex-wrap: nowrap;
// //                     }
                    
// //                     /* Pause animation on hover */
// //                     .horizontal-scroll-wrapper:hover .scroll-content-container {
// //                         animation-play-state: paused;
// //                     }

// //                     .col-slide {
// //                         flex: 0 0 33.3333%;
// //                         max-width: 33.3333%;
// //                         padding: 0 8px;
// //                     }

// //                     /* --- Card Specific Styling & Hover Animation --- */
// //                     .single-case-studies-four {
// //                         position: relative;
// //                         overflow: hidden;
// //                         border-radius: 8px;
// //                         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// //                         margin-top: 16px;
// //                         transition: box-shadow 0.3s ease;
// //                     }
                    
// //                     /* New: Lift and highlight card on hover */
// //                     .single-case-studies-four:hover {
// //                         box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
// //                         transform: translateY(-5px);
// //                     }

// //                     .single-case-studies-four .thumbnail img {
// //                         width: 100%;
// //                         height: 300px;
// //                         object-fit: cover;
// //                         transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother transition */
// //                     }

// //                     .single-case-studies-four:hover .thumbnail img {
// //                         transform: scale(1.1); /* Deeper zoom on hover */
// //                     }
                    
// //                     .single-case-studies-four .inner {
// //                         position: absolute;
// //                         bottom: 0;
// //                         left: 0;
// //                         right: 0;
// //                         padding: 20px;
// //                         background: linear-gradient(0deg, rgba(13, 28, 46, 0.9) 0%, rgba(13, 28, 46, 0) 100%);
// //                     }

// //                     .single-case-studies-four .inner .title {
// //                         color: #ffffff;
// //                         font-size: 22px;
// //                         font-weight: 700;
// //                         margin-bottom: 0;
// //                         transition: color 0.3s;
// //                     }

// //                     /* --- CSS Keyframes for Auto-Scrolling --- */
// //                     /* Calculate the distance to scroll one complete loop of 12 items */
// //                     @keyframes slide-scroll {
// //                         0% { transform: translateX(0); }
// //                         100% { transform: translateX(calc(-33.3333% * 12)); } /* Adjust this based on number of slides and visibility */
// //                     }

// //                     /* --- Custom Navigation Styling (unchanged) --- */
// //                     .slider-nav-container {
// //                         display: flex;
// //                         justify-content: center;
// //                         align-items: center;
// //                         margin-top: 30px;
// //                         gap: 15px;
// //                     }

// //                     /* ... (other navigation styles remain the same) ... */
// //                     .slider-arrow {
// //                         background: none;
// //                         border: 1px solid #ccc;
// //                         color: #333;
// //                         font-size: 20px;
// //                         width: 40px;
// //                         height: 40px;
// //                         border-radius: 50%;
// //                         cursor: pointer;
// //                         display: flex;
// //                         align-items: center;
// //                         justify-content: center;
// //                         transition: background-color 0.3s, border-color 0.3s;
// //                     }
                    
// //                     .slider-arrow:hover {
// //                         background-color: #0d1c2e;
// //                         border-color: #0d1c2e;
// //                         color: white;
// //                     }
// //                     .slider-page-indicator { font-size: 16px; font-weight: 500; color: #333; }


// //                     /* --- Mobile Responsiveness (adjusted to show 100% width on smaller screens) --- */
// //                     @media (max-width: 991px) {
// //                         .col-slide {
// //                             flex: 0 0 50%; /* Show 2 cards on tablet */
// //                             max-width: 50%;
// //                         }
// //                         /* Adjust animation based on new card width */
// //                         @keyframes slide-scroll {
// //                             0% { transform: translateX(0); }
// //                             100% { transform: translateX(calc(-50% * 12)); }
// //                         }
// //                     }

// //                     @media (max-width: 768px) {
// //                         .col-slide {
// //                             flex: 0 0 100%; /* Show 1 card on mobile */
// //                             max-width: 100%;
// //                         }
// //                         /* Adjust animation based on new card width */
// //                         @keyframes slide-scroll {
// //                             0% { transform: translateX(0); }
// //                             100% { transform: translateX(calc(-100% * 12)); }
// //                         }
// //                     }
// //                 `}
// //             </style>
// //         </div>
// //     );
// // };

// // export default OurServices;

// // ClientArea.tsx
// import React from 'react';

// // Define the paths for the individual logo images
// const brandLogos = [
//   '/images/brand/01.webp',
//   '/images/brand/02.webp',
//   '/images/brand/03.webp',
//   '/images/brand/04.webp',
//   '/images/brand/05.webp',
//   '/images/brand/06.webp',
// ];

// interface ClientAreaProps {}

// const ClientArea: React.FC<ClientAreaProps> = () => {
//   // Image path relative to the 'public' directory for the background
//   const backgroundImagePath = '/images/brand/bg.webp';

//   return (
//     <div
//       className="rts-client-area ptb--100 brand-bg-three bg_image"
//       style={{
//         backgroundImage: `url(${backgroundImagePath})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="client-three-wrapper">
//               {/* Map over the logo paths to render each logo */}
//               {brandLogos.map((src, index) => (
//                 <div key={index} className="single">
//                   <img 
//                     src={src} 
//                     alt={`Business_client ${index + 1}`} 
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* NOTE: The inline <style> block has been removed from the component.
//         In a Next.js project, you should move this CSS into your global 
//         stylesheet (e.g., globals.css) or a CSS Module. 
//       */}
//     </div>
//   );
// };

// export default ClientArea;


import React from 'react';

// Define the paths for the individual logo images
const brandLogos = [
  '/images/brand/01.webp',
  '/images/brand/02.webp',
  '/images/brand/03.webp',
  '/images/brand/04.webp',
  '/images/brand/05.webp',
  '/images/brand/06.webp',
];

interface ClientAreaProps {}

const ClientArea: React.FC<ClientAreaProps> = () => {
  // Image path relative to the 'public' directory for the background
  const backgroundImagePath = '/images/brand/bg.webp';

  return (
    <div
      className="rts-client-area ptb--100 brand-bg-three bg_image"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-three-wrapper">
              {/* Map over the logo paths to render each logo */}
              {brandLogos.map((src, index) => (
                <div key={index} className="single">
                  <img 
                    src={src} 
                    alt={`Business_client ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* NOTE: The inline <style> block has been removed from the component.
        In a Next.js project, you should move this CSS into your global 
        stylesheet (e.g., globals.css) or a CSS Module. 
      */}
    </div>
  );
};

export default ClientArea;