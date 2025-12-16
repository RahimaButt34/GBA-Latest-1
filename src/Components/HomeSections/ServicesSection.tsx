



// // // 'use client'; 

// // // import React from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';

// // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // import 'swiper/css';
// // // import 'swiper/css/navigation'; 
// // // import 'swiper/css/pagination'; 

// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Navigation, Pagination } from 'swiper/modules';
// // // import type { Swiper as SwiperCore } from 'swiper/types';

// // // // -----------------------------------------------------------------------
// // // // 1. DATA DEFINITION
// // // // -----------------------------------------------------------------------
// // // interface ServiceItem {
// // //     id: number;
// // //     title: string;
// // //     imagePath: string; // The path used in the original <img> src
// // //     href: string;      // The target URL
// // // }

// // // const serviceData: ServiceItem[] = [
// // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: 'service-details.html' },
// // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: 'business-deligation.html' },
// // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: 'pakistan-products.html' },
// // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: 'trade-shows.html' },
// // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: 'industry-academia.html' },
// // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: 'global-growth.html' },
// // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: 'international-tech.html' },
// // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: 'leadership-incubation.html' },
// // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: 'business-events.html' },
// // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: 'women-empowerment.html' },
// // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: 'bRI-centre.html' },
// // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: 'capacity-building.html' },
// // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: 'global-trade.html' },
// // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: 'community-development.html' },
// // // ];

// // // // -----------------------------------------------------------------------
// // // // 2. COMPONENT LOGIC
// // // // -----------------------------------------------------------------------
// // // const ServiceProjects = () => {
// // //     // const swiperRef = React.useRef<SwiperCore>();
// // //     const swiperRef = React.useRef<SwiperCore | null>(null);

// // //     const totalSlides = serviceData.length;

// // //     return (
// // //         // Replicating the outer HTML structure
// // //         <div className="rts-projects-area rts-section-gap">
// // //             <div className="container">
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
                        
// // //                         {/* Title Section with Watermark logic */}
// // //                         <div 
// // //                             className="title-style-three center" 
// // //                             // 💡 STEP 1: Set position: relative on the container
// // //                             style={{ position: 'relative', overflow: 'hidden' }}
// // //                         >
                            
// // //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// // //                             <div 
// // //                                 className="rts-watermark-03"
// // //                                 style={{
// // //                                     position: 'absolute',
// // //                                     top: '50%',
// // //                                     left: '50%',
// // //                                     // Center the element
// // //                                     transform: 'translate(-50%, -50%)', 
                                    
// // //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// // //                                     fontSize: '150px', 
                                    
// // //                                     // 2. Ensuring the container size is minimized but not clipping
// // //                                     lineHeight: 0.9, 
// // //                                     padding: '5px 0', 
// // //                                     display: 'block', 
                                    
// // //                                     // --- Styling (Kept bold/hollow) ---
// // //                                     fontWeight: '900', 
// // //                                     color: 'transparent', 
// // //                                     WebkitTextFillColor: 'transparent', 
// // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray
                                    
// // //                                     opacity: 1, 
// // //                                     zIndex: 0, 
// // //                                 }}
// // //                             >
// // //                                 03
// // //                             </div>
                            
// // //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// // //                             <span 
// // //                                 className="pre" 
// // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // //                             >
// // //                                 Shaping a Global Future
// // //                             </span>
                            
// // //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// // //                             <h2 
// // //                                 className="title" 
// // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // //                             >
// // //                                 <span className="solid-text">OUR</span>
// // //                                 <span className="outline-text">SERVICES</span>
// // //                             </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div className="container-1680 mt--40">
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         {/* THE MAIN SLIDER WRAPPER */}
// // //                         <div className="case-studies-wrapper-main-5">
                            
// // //                             <Swiper
// // //                                 dir="ltr"
// // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // //                                 className="mySwiper-case-studies-5"
// // //                                 modules={[Navigation, Pagination]}
                                
// // //                                 // Navigation config: Connects to your custom buttons
// // //                                 navigation={{
// // //                                     prevEl: '.swiper-button-prev-custom',
// // //                                     nextEl: '.swiper-button-next-custom',
// // //                                 }}

// // //                                 // Pagination config: Connects to your custom fraction display
// // //                                 pagination={{
// // //                                     el: '.swiper-pagination-fraction-custom',
// // //                                     type: 'fraction',
// // //                                 }}

// // //                                 // Swiper Breakpoints
// // //                                 slidesPerView={1}
// // //                                 spaceBetween={30}
// // //                                 breakpoints={{
// // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // //                                 }}
// // //                             >
// // //                                 {/* MAPPING THE DATA TO SLIDES */}
// // //                                 {serviceData.map((item) => (
// // //                                     <SwiperSlide key={item.id}>
// // //                                         <div className="single-case-studies-four">
// // //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// // //                                             <Link href={item.href} className="thumbnail">
// // //                                                 <Image 
// // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // //                                                     alt={item.title}
// // //                                                     width={400} 
// // //                                                     height={300}
// // //                                                     style={{ width: '100%', height: 'auto' }} 
// // //                                                     priority={item.id <= 4}
// // //                                                 />
// // //                                             </Link>
// // //                                             <div className="inner">
// // //                                                 <Link href={item.href}>
// // //                                                     <h3 className="title">{item.title}</h3>
// // //                                                 </Link>
// // //                                             </div>
// // //                                         </div>
// // //                                     </SwiperSlide>
// // //                                 ))}

// // //                             </Swiper>
                            
// // //                             {/* CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
// // //                             <div className="navigation-custom-wrap">
// // //                                 {/* The pagination fraction element */}
// // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // //                                 style={{ textAlign: 'center' }}>
// // //                                     {`1 / ${totalSlides}`} 
// // //                                 </div>
                                
// // //                                 {/* The Previous Button */}
// // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // //                                 </div>

// // //                                 {/* The Next Button */}
// // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
            
// // //             {/* 🛑 ADDED RESPONSIVE STYLES HERE */}
// // //             <style jsx global>
// // //                 {`
// // //                     /* --- Our Services Title Styles (Desktop Base) --- */
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

// // //                     /* ==================================== */
// // //                     /* --- MOBILE OVERRIDES (max-width: 768px) --- */
// // //                     /* ==================================== */
// // //                     @media (max-width: 768px) {
// // //                         /* --- SECTION 3: OUR SERVICES WATERMARK 03 FIX --- */
// // //                         .rts-projects-area .rts-watermark-03 {
// // //                             /* Match the size of Watermark 02 from HomeSections */
// // //                             font-size: 100px !important; 
// // //                             opacity: 0.6 !important;
// // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; /* Thinner stroke */
// // //                             line-height: 1 !important; /* Adjust line-height to 1 for better vertical spacing on mobile */
// // //                             /* Position/transform can remain as they are centered relative to the container */
// // //                         }

// // //                         /* --- SECTION 3: OUR SERVICES HEADING FIX --- */
// // //                         .rts-projects-area .title-style-three .title {
// // //                             font-size: 36px !important; /* Match HomeSections heading size for mobile */
// // //                         }
// // //                     }

// // //                     /* Further size reduction for very small screens (phones) */
// // //                     @media (max-width: 480px) {
// // //                         .rts-projects-area .rts-watermark-03 {
// // //                             /* Match the size of Watermark 02 from HomeSections */
// // //                             font-size: 80px !important; 
// // //                         }
// // //                     }
// // //                 `}
// // //             </style>
// // //         </div>
// // //     );
// // // }; 

// // // export default ServiceProjects;

// // // 'use client'; 

// // // import React from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';

// // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // import 'swiper/css';
// // // import 'swiper/css/navigation'; 
// // // import 'swiper/css/pagination'; 

// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Navigation, Pagination } from 'swiper/modules';
// // // import type { Swiper as SwiperCore } from 'swiper/types';

// // // // -----------------------------------------------------------------------
// // // // 1. DATA DEFINITION
// // // // -----------------------------------------------------------------------
// // // interface ServiceItem {
// // //     id: number;
// // //     title: string;
// // //     imagePath: string; // The path used in the original <img> src
// // //     href: string;      // The target URL
// // // }

// // // const serviceData: ServiceItem[] = [
// // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // // ];
// // // // -----------------------------------------------------------------------
// // // // 2. COMPONENT LOGIC
// // // // -----------------------------------------------------------------------
// // // const ServiceProjects = () => {
// // //     // const swiperRef = React.useRef<SwiperCore>();
// // //     const swiperRef = React.useRef<SwiperCore | null>(null);

// // //     const totalSlides = serviceData.length;

// // //     return (
// // //         // Replicating the outer HTML structure
// // //         <div className="rts-projects-area rts-section-gap">
// // //             <div className="container">
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
                        
// // //                         {/* Title Section with Watermark logic */}
// // //                         <div 
// // //                             className="title-style-three center" 
// // //                             // 💡 STEP 1: Set position: relative on the container
// // //                             style={{ position: 'relative' }}
// // //                         >
                            
// // //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// // //                             <div 
// // //                                 className="rts-watermark-03"
// // //                                 style={{
// // //                                     position: 'absolute',
// // //                                     top: '0%',
// // //                                     left: '50%',
// // //                                     // Center the element
// // //                                     transform: 'translate(-50%, -50%)', 
                                    
// // //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// // //                                     fontSize: '150px', 
                                    
// // //                                     // 2. Ensuring the container size is minimized but not clipping
// // //                                     lineHeight: 0.9, 
// // //                                     padding: '5px 0', 
// // //                                     display: 'block', 
                                    
// // //                                     // --- Styling (Kept bold/hollow) ---
// // //                                     fontWeight: '900', 
// // //                                     color: 'transparent', 
// // //                                     WebkitTextFillColor: 'transparent', 
// // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray
                                    
// // //                                     opacity: 0.3, 
// // //                                     zIndex: 0, 
// // //                                 }}
// // //                             >
// // //                                 03
// // //                             </div>
                            
// // //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// // //                             <span 
// // //                                 className="pre" 
// // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // //                             >
// // //                                 Shaping a Global Future
// // //                             </span>
                            
// // //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// // //                             <h2 
// // //                                 className="title" 
// // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // //                             >
// // //                                 <span className="solid-text">OUR</span>
// // //                                 <span className="outline-text">SERVICES</span>
// // //                             </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div className="container-1680 mt--40">
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         {/* THE MAIN SLIDER WRAPPER */}
// // //                         {/* 💡 CRITICAL: Added position: relative here for arrow positioning */}
// // //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>
                            
// // //                             <Swiper
// // //                                 dir="ltr"
// // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // //                                 className="mySwiper-case-studies-5"
// // //                                 modules={[Navigation, Pagination]}
                                
// // //                                 // Navigation config: Connects to your custom buttons
// // //                                 navigation={{
// // //                                     prevEl: '.swiper-button-prev-custom',
// // //                                     nextEl: '.swiper-button-next-custom',
// // //                                 }}

// // //                                 // Pagination config: Connects to your custom fraction display
// // //                                 pagination={{
// // //                                     el: '.swiper-pagination-fraction-custom',
// // //                                     type: 'fraction',
// // //                                 }}

// // //                                 // Swiper Breakpoints
// // //                                 slidesPerView={1}
// // //                                 spaceBetween={30}
// // //                                 breakpoints={{
// // //                                     // Default/Mobile (1 slide)
// // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // //                                 }}
// // //                             >
// // //                                 {/* MAPPING THE DATA TO SLIDES */}
// // //                                 {serviceData.map((item) => (
// // //                                     <SwiperSlide key={item.id}>
// // //                                         <div className="single-case-studies-four">
// // //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// // //                                             <Link href={item.href} className="thumbnail">
// // //                                                 <Image 
// // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // //                                                     alt={item.title}
// // //                                                     width={400} 
// // //                                                     height={300}
// // //                                                     style={{ width: '100%', height: 'auto' }} 
// // //                                                     priority={item.id <= 4}
// // //                                                 />
// // //                                             </Link>
// // //                                             <div className="inner">
// // //                                                 <Link href={item.href}>
// // //                                                     <h3 className="title">{item.title}</h3>
// // //                                                 </Link>
// // //                                             </div>
// // //                                         </div>
// // //                                     </SwiperSlide>
// // //                                 ))}

// // //                             </Swiper>
                            
// // //                             {/* CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
// // //                             <div className="navigation-custom-wrap">
// // //                                 {/* The pagination fraction element (Hidden on mobile via CSS below) */}
// // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // //                                 style={{ textAlign: 'center' }}>
// // //                                     {`1 / ${totalSlides}`} 
// // //                                 </div>
                                
// // //                                 {/* The Previous Button */}
// // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // //                                 </div>

// // //                                 {/* The Next Button */}
// // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
            
// // //             {/* 🛑 ADDED RESPONSIVE STYLES HERE */}
// // //             <style jsx global>
// // //                 {`
// // //                     /* --- Our Services Title Styles (Desktop Base) --- */
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
                    
// // //                     /* --- SWIPER ARROW BASE STYLES (REQUIRED FOR ABSOLUTE POSITIONING) --- */
// // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // //                         position: absolute;
// // //                         top: 50%; /* Center vertically */
// // //                         transform: translateY(-50%);
// // //                         z-index: 10;
// // //                         cursor: pointer;
// // //                         display: flex;
// // //                         align-items: center;
// // //                         justify-content: center;
// // //                         width: 50px; /* Base size */
// // //                         height: 50px; /* Base size */
// // //                         border: 1px solid #ccc;
// // //                         border-radius: 50%;
// // //                         color: #0d1c2e;
// // //                         background: #fff;
// // //                         transition: all 0.3s;
// // //                     }
                    
// // //                     /* Specific positioning */
// // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // //                         left: -60px; /* Outside the main content area */
// // //                     }
                    
// // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // //                         right: -60px; /* Outside the main content area */
// // //                     }
                    
// // //                     /* Hide pagination fraction on desktop (if you don't want it) or style it */
// // //                     .navigation-custom-wrap {
// // //                         display: flex;
// // //                         align-items: center;
// // //                         justify-content: center;
// // //                         /* Optional: margin-top: 20px; */
// // //                     }
                    
// // //                     .swiper-pagination-fraction-custom {
// // //                         // FIX: Changed from multiline CSS comment to // comment
// // //                         display: block; /* Default visible on desktop */
// // //                     }


// // //                     /* ==================================== */
// // //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// // //                     /* ==================================== */
// // //                     @media (max-width: 991px) {
// // //                         /* 💡 CRITICAL FIX: Reposition arrows inside the visible area */
// // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // //                             top: 40%; /* Slightly higher */
// // //                             width: 35px; /* Smaller size */
// // //                             height: 35px; /* Smaller size */
// // //                             font-size: 14px; /* Smaller icon */
// // //                             border-width: 0; /* Remove border */
// // //                             background: rgba(13, 28, 46, 0.7); /* Darker background */
// // //                             color: #fff; /* White icon */
// // //                         }

// // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // //                             left: 10px; /* Move inside the container */
// // //                         }

// // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // //                             right: 10px; /* Move inside the container */
// // //                         }

// // //                         /* Hide the pagination fraction text/div on mobile for cleaner look */
// // //                         .swiper-pagination-fraction-custom {
// // //                             display: none !important;
// // //                         }
// // //                     }
                    
// // //                     /* --- Further size reduction for very small screens (phones) --- */
// // //                     @media (max-width: 768px) {
// // //                         /* --- SECTION 3: OUR SERVICES WATERMARK 03 FIX --- */
// // //                         .rts-projects-area .rts-watermark-03 {
// // //                             /* Match the size of Watermark 02 from HomeSections */
// // //                             font-size: 100px !important; 
// // //                             opacity: 0.6 !important;
// // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; /* Thinner stroke */
// // //                             line-height: 1 !important; /* Adjust line-height to 1 for better vertical spacing on mobile */
// // //                         }

// // //                         /* --- SECTION 3: OUR SERVICES HEADING FIX --- */
// // //                         .rts-projects-area .title-style-three .title {
// // //                             font-size: 36px !important; /* Match HomeSections heading size for mobile */
// // //                         }
// // //                     }
                    
// // //                     @media (max-width: 480px) {
// // //                         .rts-projects-area .rts-watermark-03 {
// // //                             font-size: 80px !important; 
// // //                         }
// // //                     }
// // //                 `}
// // //             </style>
// // //         </div>
// // //     );
// // // }; 

// // // export default ServiceProjects;
// // 'use client';

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';

// // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // // RESTORED: Pagination CSS for the counter styling
// // import 'swiper/css/pagination';

// // import { Swiper, SwiperSlide } from 'swiper/react';
// // // RESTORED: Pagination module
// // import { Navigation, Pagination } from 'swiper/modules';
// // import type { Swiper as SwiperCore } from 'swiper/types';


// // // -----------------------------------------------------------------------
// // // 1. DATA DEFINITION
// // // -----------------------------------------------------------------------
// // interface ServiceItem {
// //     id: number;
// //     title: string;
// //     imagePath: string; // The path used in the original <img> src
// //     href: string;      // The target URL
// // }

// // const serviceData: ServiceItem[] = [
// //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // ];
// // // -----------------------------------------------------------------------
// // // 2. COMPONENT LOGIC
// // // -----------------------------------------------------------------------
// // const ServiceProjects = () => {
// //     // RESTORED: swiperRef for potential manual control, though not critical here
// //     const swiperRef = React.useRef<SwiperCore | null>(null);

// //     // RESTORED: totalSlides calculation for the initial counter text
// //     const totalSlides = serviceData.length;

// //     return (
// //         // Replicating the outer HTML structure
// //         <div className="rts-projects-area rts-section-gap">
// //             <div className="container">
// //                 <div className="row">
// //                     <div className="col-lg-12">
                        
// //                         {/* Title Section with Watermark logic */}
// //                         <div 
// //                             className="title-style-three center" 
// //                             // 💡 STEP 1: Set position: relative on the container
// //                             style={{ position: 'relative' }}
// //                         >
                            
// //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// //                             <div 
// //                                 className="rts-watermark-03"
// //                                 style={{
// //                                     position: 'absolute',
// //                                     top: '0%',
// //                                     left: '50%',
// //                                     // Center the element
// //                                     transform: 'translate(-50%, -50%)', 
                                    
// //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// //                                     fontSize: '150px', 
                                    
// //                                     // 2. Ensuring the container size is minimized but not clipping
// //                                     lineHeight: 0.9, 
// //                                     padding: '5px 0', 
// //                                     display: 'block', 
                                    
// //                                     // --- Styling (Kept bold/hollow) ---
// //                                     fontWeight: '900', 
// //                                     color: 'transparent', 
// //                                     WebkitTextFillColor: 'transparent', 
// //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray
                                    
// //                                     opacity: 0.3, 
// //                                     zIndex: 0, 
// //                                 }}
// //                             >
// //                                 03
// //                             </div>
                            
// //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// //                             <span 
// //                                 className="pre" 
// //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// //                             >
// //                                 Shaping a Global Future
// //                             </span>
                            
// //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// //                             <h2 
// //                                 className="title" 
// //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// //                             >
// //                                 <span className="solid-text">OUR</span>
// //                                 <span className="outline-text">SERVICES</span>
// //                             </h2>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="container-1680 mt--40">
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         {/* THE MAIN SLIDER WRAPPER */}
// //                         {/* 💡 CRITICAL: Added position: relative here for arrow positioning */}
// //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>
                            
// //                             <Swiper
// //                                 dir="ltr"
// //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// //                                 className="mySwiper-case-studies-5"
// //                                 // RESTORED: Pagination module
// //                                 modules={[Navigation, Pagination]}
                                
// //                                 // Navigation config: Connects to your custom buttons
// //                                 navigation={{
// //                                     prevEl: '.swiper-button-prev-custom',
// //                                     nextEl: '.swiper-button-next-custom',
// //                                 }}

// //                                 // RESTORED: Pagination config to link to the fraction element
// //                                 pagination={{
// //                                     el: '.swiper-pagination-fraction-custom',
// //                                     type: 'fraction',
// //                                 }}

// //                                 // Swiper Breakpoints
// //                                 slidesPerView={1}
// //                                 spaceBetween={30}
// //                                 breakpoints={{
// //                                     // Default/Mobile (1 slide)
// //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// //                                 }}
// //                             >
// //                                 {/* MAPPING THE DATA TO SLIDES */}
// //                                 {serviceData.map((item) => (
// //                                     <SwiperSlide key={item.id}>
// //                                         <div className="single-case-studies-four">
// //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// //                                             <Link href={item.href} className="thumbnail">
// //                                                 <Image 
// //                                                     src={item.imagePath.replace('assets/', '/')} 
// //                                                     alt={item.title}
// //                                                     width={400} 
// //                                                     height={300}
// //                                                     style={{ width: '100%', height: 'auto' }} 
// //                                                     priority={item.id <= 4}
// //                                                 />
// //                                             </Link>
// //                                             <div className="inner">
// //                                                 <Link href={item.href}>
// //                                                     <h3 className="title">{item.title}</h3>
// //                                                 </Link>
// //                                             </div>
// //                                         </div>
// //                                     </SwiperSlide>
// //                                 ))}

// //                             </Swiper>
                            
// //                             {/* CUSTOM NAVIGATION CONTROLS AND COUNTER */}
// //                             <div className="navigation-custom-wrap">
                                
// //                                 {/* The Previous Button */}
// //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// //                                 </div>

// //                                 {/* RESTORED: The pagination fraction element (Swiper populates this) */}
// //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// //                                 style={{ textAlign: 'center' }}>
// //                                     {/* Swiper replaces this with the actual current/total count */}
// //                                     {`1 / ${totalSlides}`} 
// //                                 </div>
                                
// //                                 {/* The Next Button */}
// //                                 <div className="swiper-button-next swiper-button-next-custom">
// //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
            
// //             {/* 🛑 UPDATED STYLES */}
// //             <style jsx global>
// //                 {`
// //                     /* --- Our Services Title Styles (Desktop Base) --- */
// //                     .title-style-three .title {
// //                         font-size: 60px;
// //                         font-weight: 900;
// //                         text-transform: uppercase;
// //                         display: inline-block;
// //                         margin: 0;
// //                     }
// //                     .title-style-three .solid-text {
// //                         color: #0d1c2e; 
// //                     }
// //                     .title-style-three .outline-text {
// //                         color: transparent;
// //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// //                         text-stroke: 1.5px #0d1c2e;
// //                         margin-left: 10px;
// //                     }
// //                     .title-style-three .pre {
// //                         display: block;
// //                         font-size: 14px;
// //                         letter-spacing: 2px;
// //                         color: #666;
// //                         margin-bottom: 10px;
// //                     }
// //                     .title-style-three.center {
// //                         text-align: center;
// //                     }
                    
// //                     /* --- SWIPER ARROW BASE STYLES (REQUIRED FOR ABSOLUTE POSITIONING) --- */
// //                     /* Note: Arrows are positioned relative to their parent (.case-studies-wrapper-main-5) */
// //                     .case-studies-wrapper-main-5 {
// //                         padding-bottom: 60px; /* Added space for the pagination/navigation wrapper below the slides */
// //                     }
                    
// //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// //                         position: absolute;
// //                         top: 50%; /* Center vertically (relative to the slide area) */
// //                         transform: translateY(-50%);
// //                         z-index: 10;
// //                         cursor: pointer;
// //                         display: flex;
// //                         align-items: center;
// //                         justify-content: center;
// //                         width: 50px; 
// //                         height: 50px; 
// //                         border: 1px solid #ccc;
// //                         border-radius: 50%;
// //                         color: #0d1c2e;
// //                         background: #fff;
// //                         transition: all 0.3s;
// //                     }
                    
// //                     /* Navigation Wrapper (For the arrows and the counter) */
// //                     .navigation-custom-wrap {
// //                         /* Position the wrapper below the slides, relative to the main component's content flow */
// //                         position: absolute;
// //                         bottom: 0; /* Align to the bottom of the content area */
// //                         left: 50%;
// //                         transform: translateX(-50%);
                        
// //                         display: flex;
// //                         align-items: center;
// //                         justify-content: space-between; /* Space out the arrow, counter, and arrow */
// //                         width: 250px; /* Fixed width to contain the elements cleanly */
// //                         z-index: 10;
// //                     }
                    
// //                     /* Specific positioning for Arrows inside the bottom wrapper */
// //                     .navigation-custom-wrap .swiper-button-prev-custom {
// //                         position: relative; /* Change from absolute to relative to flow inside the wrapper */
// //                         left: auto;
// //                         top: auto;
// //                         transform: none;
// //                     }
// //                     .navigation-custom-wrap .swiper-button-next-custom {
// //                         position: relative; /* Change from absolute to relative to flow inside the wrapper */
// //                         right: auto;
// //                         top: auto;
// //                         transform: none;
// //                     }

// //                     /* Hiding default Swiper arrow icons provided by swiper.css to show only your custom icon */
// //                     .swiper-button-next-custom:after,
// //                     .swiper-button-prev-custom:after {
// //                         content: '';
// //                     }

// //                     /* Pagination Fraction Styling */
// //                     .swiper-pagination-fraction-custom {
// //                         color: #0d1c2e;
// //                         font-size: 16px;
// //                         font-weight: 500;
// //                         flex-grow: 1; /* Allows it to take up the space between the arrows */
// //                         text-align: center;
// //                     }

// //                     /* ==================================== */
// //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// //                     /* ==================================== */
// //                     @media (max-width: 991px) {
// //                         /* 💡 CRITICAL FIX: Reposition arrows back INSIDE the slide view for mobile */
// //                         /* The bottom counter setup usually looks bad on mobile, so we move them to the sides of the slider area */
                        
// //                         .case-studies-wrapper-main-5 {
// //                             padding-bottom: 0; /* Remove padding if arrows move back up */
// //                         }
                        
// //                         .navigation-custom-wrap {
// //                             /* Hide the entire bottom wrapper as we move the arrows to the side */
// //                             display: none; 
// //                         }
                        
// //                         /* Re-apply absolute positioning for arrows relative to the slide container */
// //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// //                             position: absolute;
// //                             top: 40%; /* Slightly higher */
// //                             transform: translateY(-50%);
// //                             width: 35px; /* Smaller size */
// //                             height: 35px; /* Smaller size */
// //                             font-size: 14px; /* Smaller icon */
// //                             border-width: 0; /* Remove border */
// //                             background: rgba(13, 28, 46, 0.7); /* Darker background */
// //                             color: #fff; /* White icon */
// //                         }

// //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// //                             left: 10px; /* Move inside the container */
// //                         }

// //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// //                             right: 10px; /* Move inside the container */
// //                         }
                        
// //                         /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES --- */
// //                         .rts-projects-area .rts-watermark-03 {
// //                             font-size: 100px !important; 
// //                             opacity: 0.6 !important;
// //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
// //                             line-height: 1 !important; 
// //                         }

// //                         .rts-projects-area .title-style-three .title {
// //                             font-size: 36px !important; 
// //                         }
// //                     }
                    
// //                     @media (max-width: 480px) {
// //                         .rts-projects-area .rts-watermark-03 {
// //                             font-size: 80px !important; 
// //                         }
// //                     }
// //                 `}
// //             </style>
// //         </div>
// //     );
// // };

// // export default ServiceProjects;

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import type { Swiper as SwiperCore } from 'swiper/types';


// // -----------------------------------------------------------------------
// // 1. DATA DEFINITION
// // -----------------------------------------------------------------------
// interface ServiceItem {
//     id: number;
//     title: string;
//     imagePath: string; // The path used in the original <img> src
//     href: string;      // The target URL
// }

// const serviceData: ServiceItem[] = [
//     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
//     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
//     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
//     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
//     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
//     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
//     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
//     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
//     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
//     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
//     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
//     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
//     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
//     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// ];
// // -----------------------------------------------------------------------
// // 2. COMPONENT LOGIC
// // -----------------------------------------------------------------------
// const ServiceProjects = () => {
//     const swiperRef = React.useRef<SwiperCore | null>(null);
//     const totalSlides = serviceData.length;

//     return (
//         // Replicating the outer HTML structure
//         <div className="rts-projects-area rts-section-gap">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
                        
//                         {/* Title Section with Watermark logic (No change here) */}
//                         <div 
//                             className="title-style-three center" 
//                             style={{ position: 'relative' }}
//                         >
                            
//                             {/* Watermark 03 DIV (No change here) */}
//                             <div 
//                                 className="rts-watermark-03"
//                                 style={{
//                                     position: 'absolute',
//                                     top: '0%',
//                                     left: '50%',
//                                     transform: 'translate(-50%, -50%)', 
//                                     fontSize: '150px', 
//                                     lineHeight: 0.9, 
//                                     padding: '5px 0', 
//                                     display: 'block', 
//                                     fontWeight: '900', 
//                                     color: 'transparent', 
//                                     WebkitTextFillColor: 'transparent', 
//                                     WebkitTextStroke: '3px rgb(238, 235, 235)',
//                                     opacity: 0.3, 
//                                     zIndex: 0, 
//                                 }}
//                             >
//                                 03
//                             </div>
                            
//                             {/* Pre-title text (No change here) */}
//                             <span 
//                                 className="pre" 
//                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
//                             >
//                                 Shaping a Global Future
//                             </span>
                            
//                             {/* Main title text (No change here) */}
//                             <h2 
//                                 className="title" 
//                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
//                             >
//                                 <span className="solid-text">OUR</span>
//                                 <span className="outline-text">SERVICES</span>
//                             </h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container-1680 mt--40">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>
                            
//                             <Swiper
//                                 dir="ltr"
//                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                                 className="mySwiper-case-studies-5"
//                                 modules={[Navigation, Pagination]}
                                
//                                 navigation={{
//                                     prevEl: '.swiper-button-prev-custom',
//                                     nextEl: '.swiper-button-next-custom',
//                                 }}

//                                 pagination={{
//                                     el: '.swiper-pagination-fraction-custom',
//                                     type: 'fraction',
//                                 }}

//                                 slidesPerView={1}
//                                 spaceBetween={30}
//                                 breakpoints={{
//                                     576: { slidesPerView: 2, spaceBetween: 20, },
//                                     992: { slidesPerView: 3, spaceBetween: 30, },
//                                     1600: { slidesPerView: 4, spaceBetween: 30, },
//                                 }}
//                             >
//                                 {/* MAPPING THE DATA TO SLIDES (No change here) */}
//                                 {serviceData.map((item) => (
//                                     <SwiperSlide key={item.id}>
//                                         <div className="single-case-studies-four">
//                                             <Link href={item.href} className="thumbnail">
//                                                 <Image 
//                                                     src={item.imagePath.replace('assets/', '/')} 
//                                                     alt={item.title}
//                                                     width={400} 
//                                                     height={300}
//                                                     style={{ width: '100%', height: 'auto' }} 
//                                                     priority={item.id <= 4}
//                                                 />
//                                             </Link>
//                                             <div className="inner">
//                                                 <Link href={item.href}>
//                                                     <h3 className="title">{item.title}</h3>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                 ))}

//                             </Swiper>
                            
//                             {/* CUSTOM NAVIGATION CONTROLS AND COUNTER (No change in HTML) */}
//                             <div className="navigation-custom-wrap">
                                
//                                 <div className="swiper-button-prev swiper-button-prev-custom">
//                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
//                                 </div>

//                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
//                                 style={{ textAlign: 'center' }}>
//                                     {`1 / ${totalSlides}`} 
//                                 </div>
                                
//                                 <div className="swiper-button-next swiper-button-next-custom">
//                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* 🛑 CRITICAL STYLING UPDATE: Changing the Arrow Button Look */}
//             <style jsx global>
//                 {`
//                     /* --- Title Styles (Kept) --- */
//                     .title-style-three .title {
//                         font-size: 60px;
//                         font-weight: 900;
//                         text-transform: uppercase;
//                         display: inline-block;
//                         margin: 0;
//                     }
//                     .title-style-three .solid-text {
//                         color: #0d1c2e; 
//                     }
//                     .title-style-three .outline-text {
//                         color: transparent;
//                         -webkit-text-stroke: 1.5px #0d1c2e; 
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
                    
//                     /* --- SWIPER ARROW BASE STYLES (MODIFIED FOR READ MORE LOOK) --- */
//                     .case-studies-wrapper-main-5 {
//                         padding-bottom: 60px; 
//                     }
                    
//                     /* --- Desktop/Base Arrow Styling --- */
//                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
//                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
//                         /* Resetting default Swiper positioning */
//                         position: absolute; /* Kept as absolute base */
//                         top: 50%; 
//                         transform: translateY(-50%);
//                         z-index: 10;
//                         cursor: pointer;
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
                        
//                         /* 💡 REMOVING CIRCULAR STYLING */
//                         width: 40px; /* Smaller footprint */
//                         height: 40px; /* Smaller footprint */
//                         border: none; /* Removed border */
//                         border-radius: 0; /* Removed border-radius */
//                         background: none; /* Removed background */
//                         color: #0d1c2e; /* Ensure icon color is dark/visible */
//                         font-size: 18px; /* Slightly larger icon */
//                         transition: all 0.3s;
//                     }

//                     /* Navigation Wrapper (Positioned below slides) */
//                     .navigation-custom-wrap {
//                         position: absolute;
//                         bottom: 0; 
//                         left: 50%;
//                         transform: translateX(-50%);
                        
//                         display: flex;
//                         align-items: center;
//                         justify-content: space-between; 
//                         width: 180px; /* Adjusted width to look cleaner with smaller arrows */
//                         z-index: 10;
//                     }
                    
//                     /* Specific positioning for Arrows inside the bottom wrapper */
//                     .navigation-custom-wrap .swiper-button-prev-custom,
//                     .navigation-custom-wrap .swiper-button-next-custom {
//                         position: relative; /* Flow inside the wrapper */
//                         left: auto;
//                         top: auto;
//                         transform: none;
                        
//                         /* Adding the hover/active style similar to read more buttons */
//                         /* Example: When hovered, slightly darken or change color */
//                         &:hover {
//                             color: #ff5e14; /* Example: Use a theme color on hover */
//                         }
//                     }

//                     /* Hiding default Swiper arrow icons */
//                     .swiper-button-next-custom:after,
//                     .swiper-button-prev-custom:after {
//                         content: '';
//                     }

//                     /* Pagination Fraction Styling (Kept) */
//                     .swiper-pagination-fraction-custom {
//                         color: #0d1c2e;
//                         font-size: 16px;
//                         font-weight: 500;
//                         flex-grow: 1; 
//                         text-align: center;
//                     }

//                     /* ==================================== */
//                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
//                     /* ==================================== */
//                     @media (max-width: 991px) {
//                         /* Arrows are hidden from the bottom bar and moved back to the side of the slide area */
                        
//                         .case-studies-wrapper-main-5 {
//                             padding-bottom: 0; 
//                         }
                        
//                         .navigation-custom-wrap {
//                             display: none; 
//                         }
                        
//                         /* Re-apply absolute positioning for arrows relative to the slide container (Styled like the new desktop version) */
//                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
//                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
//                             position: absolute;
//                             top: 40%; 
//                             transform: translateY(-50%);
                            
//                             /* Clean mobile arrow style (no dark circle) */
//                             width: 35px; 
//                             height: 35px; 
//                             font-size: 16px; 
//                             border: none;
//                             background: none; 
//                             color: #0d1c2e; /* Keep them dark, or choose a visible color */
//                         }

//                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
//                             left: 10px; 
//                         }

//                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
//                             right: 10px; 
//                         }
                        
//                         /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES (Kept) --- */
//                         .rts-projects-area .rts-watermark-03 {
//                             font-size: 100px !important; 
//                             opacity: 0.6 !important;
//                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
//                             line-height: 1 !important; 
//                         }

//                         .rts-projects-area .title-style-three .title {
//                             font-size: 36px !important; 
//                         }
//                     }
                    
//                     @media (max-width: 480px) {
//                         .rts-projects-area .rts-watermark-03 {
//                             font-size: 80px !important; 
//                         }
//                     }
//                 `}
//             </style>
//         </div>
//     );
// };

// export default ServiceProjects;


'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper/types';


// -----------------------------------------------------------------------
// 1. DATA DEFINITION
// -----------------------------------------------------------------------
interface ServiceItem {
    id: number;
    title: string;
    imagePath: string; // The path used in the original <img> src
    href: string;      // The target URL
}

const serviceData: ServiceItem[] = [
    { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
    { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
    { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
    { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
    { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
    { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
    { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
    { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
    { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
    { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
    { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
    { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
    { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
    { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
];
// -----------------------------------------------------------------------
// 2. COMPONENT LOGIC
// -----------------------------------------------------------------------
const ServiceProjects = () => {
    const swiperRef = React.useRef<SwiperCore | null>(null);
    const totalSlides = serviceData.length;

    return (
        // Replicating the outer HTML structure
        <div className="rts-projects-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        {/* Title Section with Watermark logic (No change here) */}
                        <div 
                            className="title-style-three center" 
                            style={{ position: 'relative' }}
                        >
                            
                            {/* Watermark 03 DIV (No change here) */}
                            <div 
                                className="rts-watermark-03"
                                style={{
                                    position: 'absolute',
                                    top: '0%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)', 
                                    fontSize: '150px', 
                                    lineHeight: 0.9, 
                                    padding: '5px 0', 
                                    display: 'block', 
                                    fontWeight: '900', 
                                    color: 'transparent', 
                                    WebkitTextFillColor: 'transparent', 
                                    WebkitTextStroke: '3px rgb(238, 235, 235)',
                                    opacity: 0.3, 
                                    zIndex: 0, 
                                }}
                            >
                                03
                            </div>
                            
                            {/* Pre-title text (No change here) */}
                            <span 
                                className="pre" 
                                style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
                            >
                                Shaping a Global Future
                            </span>
                            
                            {/* Main title text (No change here) */}
                            <h2 
                                className="title" 
                                style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
                            >
                                <span className="solid-text">OUR</span>
                                <span className="outline-text">SERVICES</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-1680 mt--40">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>
                            
                            <Swiper
                                dir="ltr"
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="mySwiper-case-studies-5"
                                modules={[Navigation, Pagination]}
                                
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}

                                pagination={{
                                    el: '.swiper-pagination-fraction-custom',
                                    type: 'fraction',
                                }}

                                slidesPerView={1}
                                spaceBetween={30}
                                breakpoints={{
                                    576: { slidesPerView: 2, spaceBetween: 20, },
                                    992: { slidesPerView: 3, spaceBetween: 30, },
                                    1600: { slidesPerView: 4, spaceBetween: 30, },
                                }}
                            >
                                {/* MAPPING THE DATA TO SLIDES (No change here) */}
                                {serviceData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="single-case-studies-four">
                                            <Link href={item.href} className="thumbnail">
                                                <Image 
                                                    src={item.imagePath.replace('assets/', '/')} 
                                                    alt={item.title}
                                                    width={400} 
                                                    height={300}
                                                    style={{ width: '100%', height: 'auto' }} 
                                                    priority={item.id <= 4}
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href={item.href}>
                                                    <h3 className="title">{item.title}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            
                            {/* CUSTOM NAVIGATION CONTROLS AND COUNTER (No change in HTML) */}
                            <div className="navigation-custom-wrap">
                                
                                <div className="swiper-button-prev swiper-button-prev-custom">
                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                </div>

                                <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
                                style={{ textAlign: 'center' }}>
                                    {`1 / ${totalSlides}`} 
                                </div>
                                
                                <div className="swiper-button-next swiper-button-next-custom">
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 🛑 CRITICAL STYLING UPDATE: Applying .rts-read-more styles to the arrows */}
            <style jsx global>
                {`
                    /* --- Title Styles (Kept) --- */
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
                    
                    /* --- NAVIGATION WRAPPER (Kept positioning logic) --- */
                    .case-studies-wrapper-main-5 {
                        padding-bottom: 60px; 
                    }
                    
                    /* Resetting Swiper's default absolute positioning for the arrow elements */
                    .case-studies-wrapper-main-5 .swiper-button-prev-custom,
                    .case-studies-wrapper-main-5 .swiper-button-next-custom {
                        /* This block resets absolute Swiper positioning to allow the arrows to flow in the wrapper */
                        position: absolute; 
                        top: 50%; 
                        transform: translateY(-50%);
                        z-index: 10;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        /* Resetting visual styles (from previous circle style) */
                        width: auto;
                        height: auto;
                        border: none;
                        background: none;
                        
                        /* 💡 Applying core text styles from .rts-read-more */
                        color: #130c08ff;
                        font-weight: 600;
                        text-transform: uppercase;
                        font-size: 14px;
                        
                        /* Transition for the hover effect */
                        transition: all 0.3s;
                    }

                    /* Navigation Wrapper (Positioned below slides) */
                    .navigation-custom-wrap {
                        position: absolute;
                        bottom: 0; 
                        left: 50%;
                        transform: translateX(-50%);
                        
                        display: flex;
                        align-items: center;
                        justify-content: space-between; 
                        width: 180px; 
                        z-index: 10;
                    }
                    
                    /* Specific positioning for Arrows inside the bottom wrapper */
                    .navigation-custom-wrap .swiper-button-prev-custom,
                    .navigation-custom-wrap .swiper-button-next-custom {
                        position: relative; /* Flow inside the wrapper */
                        left: auto;
                        top: auto;
                        transform: none;
                        
                        /* NOTE: The 'margin-left: -20px;' from .rts-read-more is omitted here 
                                as the wrapper controls the spacing. */
                    }

                    /* Hover Effect for Right Arrow (Next Button) */
                    /* Mimics .rts-read-more:hover i { margin-left: 12px; } */
                    .navigation-custom-wrap .swiper-button-next-custom:hover i {
                        margin-left: 12px;
                    }
                    /* Hover Effect for Left Arrow (Previous Button) - Reverse the movement */
                    .navigation-custom-wrap .swiper-button-prev-custom:hover i {
                        margin-right: 12px; /* Moves left arrow further left */
                    }
                    
                    /* Icon Spacing for Right Arrow */
                    .navigation-custom-wrap .swiper-button-next-custom i {
                        margin-left: 8px; /* Initial margin from the read-more style */
                        transition: margin-left 0.3s;
                    }
                    /* Icon Spacing for Left Arrow (Reverse spacing) */
                    .navigation-custom-wrap .swiper-button-prev-custom i {
                        margin-right: 8px; /* Initial margin (reversed) */
                        transition: margin-right 0.3s;
                    }

                    /* Hiding default Swiper arrow icons */
                    .swiper-button-next-custom:after,
                    .swiper-button-prev-custom:after {
                        content: '';
                    }

                    /* Pagination Fraction Styling (Kept) */
                    .swiper-pagination-fraction-custom {
                        color: #0d1c2e;
                        font-size: 16px;
                        font-weight: 500;
                        flex-grow: 1; 
                        text-align: center;
                    }

                    /* ==================================== */
                    /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
                    /* ==================================== */
                    @media (max-width: 991px) {
                        /* Arrows are hidden from the bottom bar and moved back to the side of the slide area */
                        
                        .case-studies-wrapper-main-5 {
                            padding-bottom: 0; 
                        }
                        
                        .navigation-custom-wrap {
                            display: none; 
                        }
                        
                        /* Re-apply absolute positioning for arrows relative to the slide container (Styled like the new desktop version) */
                        .case-studies-wrapper-main-5 .swiper-button-prev-custom,
                        .case-studies-wrapper-main-5 .swiper-button-next-custom {
                            position: absolute;
                            top: 40%; 
                            transform: translateY(-50%);
                            
                            /* Clean mobile arrow style (matching read-more styling) */
                            width: 35px; 
                            height: 35px; 
                            font-size: 16px; 
                            border: none;
                            background: none; 
                            color: #070505ff; /* Use primary color */
                        }

                        .case-studies-wrapper-main-5 .swiper-button-prev-custom {
                            left: 10px; 
                        }

                        .case-studies-wrapper-main-5 .swiper-button-next-custom {
                            right: 10px; 
                        }
                        
                        /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES (Kept) --- */
                        .rts-projects-area .rts-watermark-03 {
                            font-size: 100px !important; 
                            opacity: 0.6 !important;
                            -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
                            line-height: 1 !important; 
                        }

                        .rts-projects-area .title-style-three .title {
                            font-size: 36px !important; 
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .rts-projects-area .rts-watermark-03 {
                            font-size: 80px !important; 
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ServiceProjects;