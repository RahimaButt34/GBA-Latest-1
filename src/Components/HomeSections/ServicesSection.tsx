



// // // // // // // // // // 'use client'; 

// // // // // // // // // // import React from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import Image from 'next/image';

// // // // // // // // // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // // // // // // // // import 'swiper/css';
// // // // // // // // // // import 'swiper/css/navigation'; 
// // // // // // // // // // import 'swiper/css/pagination'; 

// // // // // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // // // // import { Navigation, Pagination } from 'swiper/modules';
// // // // // // // // // // import type { Swiper as SwiperCore } from 'swiper/types';

// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // // 1. DATA DEFINITION
// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // interface ServiceItem {
// // // // // // // // // //     id: number;
// // // // // // // // // //     title: string;
// // // // // // // // // //     imagePath: string; // The path used in the original <img> src
// // // // // // // // // //     href: string;      // The target URL
// // // // // // // // // // }

// // // // // // // // // // const serviceData: ServiceItem[] = [
// // // // // // // // // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: 'service-details.html' },
// // // // // // // // // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: 'business-deligation.html' },
// // // // // // // // // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: 'pakistan-products.html' },
// // // // // // // // // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: 'trade-shows.html' },
// // // // // // // // // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: 'industry-academia.html' },
// // // // // // // // // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: 'global-growth.html' },
// // // // // // // // // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: 'international-tech.html' },
// // // // // // // // // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: 'leadership-incubation.html' },
// // // // // // // // // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: 'business-events.html' },
// // // // // // // // // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: 'women-empowerment.html' },
// // // // // // // // // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: 'bRI-centre.html' },
// // // // // // // // // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: 'capacity-building.html' },
// // // // // // // // // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: 'global-trade.html' },
// // // // // // // // // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: 'community-development.html' },
// // // // // // // // // // ];

// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // // 2. COMPONENT LOGIC
// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // const ServiceProjects = () => {
// // // // // // // // // //     // const swiperRef = React.useRef<SwiperCore>();
// // // // // // // // // //     const swiperRef = React.useRef<SwiperCore | null>(null);

// // // // // // // // // //     const totalSlides = serviceData.length;

// // // // // // // // // //     return (
// // // // // // // // // //         // Replicating the outer HTML structure
// // // // // // // // // //         <div className="rts-projects-area rts-section-gap">
// // // // // // // // // //             <div className="container">
// // // // // // // // // //                 <div className="row">
// // // // // // // // // //                     <div className="col-lg-12">

// // // // // // // // // //                         {/* Title Section with Watermark logic */}
// // // // // // // // // //                         <div 
// // // // // // // // // //                             className="title-style-three center" 
// // // // // // // // // //                             // 💡 STEP 1: Set position: relative on the container
// // // // // // // // // //                             style={{ position: 'relative', overflow: 'hidden' }}
// // // // // // // // // //                         >

// // // // // // // // // //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// // // // // // // // // //                             <div 
// // // // // // // // // //                                 className="rts-watermark-03"
// // // // // // // // // //                                 style={{
// // // // // // // // // //                                     position: 'absolute',
// // // // // // // // // //                                     top: '50%',
// // // // // // // // // //                                     left: '50%',
// // // // // // // // // //                                     // Center the element
// // // // // // // // // //                                     transform: 'translate(-50%, -50%)', 

// // // // // // // // // //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// // // // // // // // // //                                     fontSize: '150px', 

// // // // // // // // // //                                     // 2. Ensuring the container size is minimized but not clipping
// // // // // // // // // //                                     lineHeight: 0.9, 
// // // // // // // // // //                                     padding: '5px 0', 
// // // // // // // // // //                                     display: 'block', 

// // // // // // // // // //                                     // --- Styling (Kept bold/hollow) ---
// // // // // // // // // //                                     fontWeight: '900', 
// // // // // // // // // //                                     color: 'transparent', 
// // // // // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // // // // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray

// // // // // // // // // //                                     opacity: 1, 
// // // // // // // // // //                                     zIndex: 0, 
// // // // // // // // // //                                 }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 03
// // // // // // // // // //                             </div>

// // // // // // // // // //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // // //                             <span 
// // // // // // // // // //                                 className="pre" 
// // // // // // // // // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 Shaping a Global Future
// // // // // // // // // //                             </span>

// // // // // // // // // //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // // //                             <h2 
// // // // // // // // // //                                 className="title" 
// // // // // // // // // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 <span className="solid-text">OUR</span>
// // // // // // // // // //                                 <span className="outline-text">SERVICES</span>
// // // // // // // // // //                             </h2>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="container-1680 mt--40">
// // // // // // // // // //                 <div className="row">
// // // // // // // // // //                     <div className="col-lg-12">
// // // // // // // // // //                         {/* THE MAIN SLIDER WRAPPER */}
// // // // // // // // // //                         <div className="case-studies-wrapper-main-5">

// // // // // // // // // //                             <Swiper
// // // // // // // // // //                                 dir="ltr"
// // // // // // // // // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // // // // // // // // //                                 className="mySwiper-case-studies-5"
// // // // // // // // // //                                 modules={[Navigation, Pagination]}

// // // // // // // // // //                                 // Navigation config: Connects to your custom buttons
// // // // // // // // // //                                 navigation={{
// // // // // // // // // //                                     prevEl: '.swiper-button-prev-custom',
// // // // // // // // // //                                     nextEl: '.swiper-button-next-custom',
// // // // // // // // // //                                 }}

// // // // // // // // // //                                 // Pagination config: Connects to your custom fraction display
// // // // // // // // // //                                 pagination={{
// // // // // // // // // //                                     el: '.swiper-pagination-fraction-custom',
// // // // // // // // // //                                     type: 'fraction',
// // // // // // // // // //                                 }}

// // // // // // // // // //                                 // Swiper Breakpoints
// // // // // // // // // //                                 slidesPerView={1}
// // // // // // // // // //                                 spaceBetween={30}
// // // // // // // // // //                                 breakpoints={{
// // // // // // // // // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // // // // // // // // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // // // // // // // // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // // // // // // // // //                                 }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 {/* MAPPING THE DATA TO SLIDES */}
// // // // // // // // // //                                 {serviceData.map((item) => (
// // // // // // // // // //                                     <SwiperSlide key={item.id}>
// // // // // // // // // //                                         <div className="single-case-studies-four">
// // // // // // // // // //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// // // // // // // // // //                                             <Link href={item.href} className="thumbnail">
// // // // // // // // // //                                                 <Image 
// // // // // // // // // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // // // // // // // // //                                                     alt={item.title}
// // // // // // // // // //                                                     width={400} 
// // // // // // // // // //                                                     height={300}
// // // // // // // // // //                                                     style={{ width: '100%', height: 'auto' }} 
// // // // // // // // // //                                                     priority={item.id <= 4}
// // // // // // // // // //                                                 />
// // // // // // // // // //                                             </Link>
// // // // // // // // // //                                             <div className="inner">
// // // // // // // // // //                                                 <Link href={item.href}>
// // // // // // // // // //                                                     <h3 className="title">{item.title}</h3>
// // // // // // // // // //                                                 </Link>
// // // // // // // // // //                                             </div>
// // // // // // // // // //                                         </div>
// // // // // // // // // //                                     </SwiperSlide>
// // // // // // // // // //                                 ))}

// // // // // // // // // //                             </Swiper>

// // // // // // // // // //                             {/* CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
// // // // // // // // // //                             <div className="navigation-custom-wrap">
// // // // // // // // // //                                 {/* The pagination fraction element */}
// // // // // // // // // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // // // // // // // // //                                 style={{ textAlign: 'center' }}>
// // // // // // // // // //                                     {`1 / ${totalSlides}`} 
// // // // // // // // // //                                 </div>

// // // // // // // // // //                                 {/* The Previous Button */}
// // // // // // // // // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // // // // // // // // //                                 </div>

// // // // // // // // // //                                 {/* The Next Button */}
// // // // // // // // // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* 🛑 ADDED RESPONSIVE STYLES HERE */}
// // // // // // // // // //             <style jsx global>
// // // // // // // // // //                 {`
// // // // // // // // // //                     /* --- Our Services Title Styles (Desktop Base) --- */
// // // // // // // // // //                     .title-style-three .title {
// // // // // // // // // //                         font-size: 60px;
// // // // // // // // // //                         font-weight: 900;
// // // // // // // // // //                         text-transform: uppercase;
// // // // // // // // // //                         display: inline-block;
// // // // // // // // // //                         margin: 0;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .solid-text {
// // // // // // // // // //                         color: #0d1c2e; 
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .outline-text {
// // // // // // // // // //                         color: transparent;
// // // // // // // // // //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// // // // // // // // // //                         text-stroke: 1.5px #0d1c2e;
// // // // // // // // // //                         margin-left: 10px;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .pre {
// // // // // // // // // //                         display: block;
// // // // // // // // // //                         font-size: 14px;
// // // // // // // // // //                         letter-spacing: 2px;
// // // // // // // // // //                         color: #666;
// // // // // // // // // //                         margin-bottom: 10px;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three.center {
// // // // // // // // // //                         text-align: center;
// // // // // // // // // //                     }

// // // // // // // // // //                     /* ==================================== */
// // // // // // // // // //                     /* --- MOBILE OVERRIDES (max-width: 768px) --- */
// // // // // // // // // //                     /* ==================================== */
// // // // // // // // // //                     @media (max-width: 768px) {
// // // // // // // // // //                         /* --- SECTION 3: OUR SERVICES WATERMARK 03 FIX --- */
// // // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // // //                             /* Match the size of Watermark 02 from HomeSections */
// // // // // // // // // //                             font-size: 100px !important; 
// // // // // // // // // //                             opacity: 0.6 !important;
// // // // // // // // // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; /* Thinner stroke */
// // // // // // // // // //                             line-height: 1 !important; /* Adjust line-height to 1 for better vertical spacing on mobile */
// // // // // // // // // //                             /* Position/transform can remain as they are centered relative to the container */
// // // // // // // // // //                         }

// // // // // // // // // //                         /* --- SECTION 3: OUR SERVICES HEADING FIX --- */
// // // // // // // // // //                         .rts-projects-area .title-style-three .title {
// // // // // // // // // //                             font-size: 36px !important; /* Match HomeSections heading size for mobile */
// // // // // // // // // //                         }
// // // // // // // // // //                     }

// // // // // // // // // //                     /* Further size reduction for very small screens (phones) */
// // // // // // // // // //                     @media (max-width: 480px) {
// // // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // // //                             /* Match the size of Watermark 02 from HomeSections */
// // // // // // // // // //                             font-size: 80px !important; 
// // // // // // // // // //                         }
// // // // // // // // // //                     }
// // // // // // // // // //                 `}
// // // // // // // // // //             </style>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // }; 

// // // // // // // // // // export default ServiceProjects;

// // // // // // // // // // 'use client'; 

// // // // // // // // // // import React from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import Image from 'next/image';

// // // // // // // // // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // // // // // // // // import 'swiper/css';
// // // // // // // // // // import 'swiper/css/navigation'; 
// // // // // // // // // // import 'swiper/css/pagination'; 

// // // // // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // // // // import { Navigation, Pagination } from 'swiper/modules';
// // // // // // // // // // import type { Swiper as SwiperCore } from 'swiper/types';

// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // // 1. DATA DEFINITION
// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // interface ServiceItem {
// // // // // // // // // //     id: number;
// // // // // // // // // //     title: string;
// // // // // // // // // //     imagePath: string; // The path used in the original <img> src
// // // // // // // // // //     href: string;      // The target URL
// // // // // // // // // // }

// // // // // // // // // // const serviceData: ServiceItem[] = [
// // // // // // // // // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// // // // // // // // // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// // // // // // // // // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// // // // // // // // // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// // // // // // // // // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// // // // // // // // // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// // // // // // // // // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// // // // // // // // // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// // // // // // // // // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// // // // // // // // // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// // // // // // // // // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// // // // // // // // // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// // // // // // // // // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// // // // // // // // // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // // // // // // // // // ];
// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // // 2. COMPONENT LOGIC
// // // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // const ServiceProjects = () => {
// // // // // // // // // //     // const swiperRef = React.useRef<SwiperCore>();
// // // // // // // // // //     const swiperRef = React.useRef<SwiperCore | null>(null);

// // // // // // // // // //     const totalSlides = serviceData.length;

// // // // // // // // // //     return (
// // // // // // // // // //         // Replicating the outer HTML structure
// // // // // // // // // //         <div className="rts-projects-area rts-section-gap">
// // // // // // // // // //             <div className="container">
// // // // // // // // // //                 <div className="row">
// // // // // // // // // //                     <div className="col-lg-12">

// // // // // // // // // //                         {/* Title Section with Watermark logic */}
// // // // // // // // // //                         <div 
// // // // // // // // // //                             className="title-style-three center" 
// // // // // // // // // //                             // 💡 STEP 1: Set position: relative on the container
// // // // // // // // // //                             style={{ position: 'relative' }}
// // // // // // // // // //                         >

// // // // // // // // // //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// // // // // // // // // //                             <div 
// // // // // // // // // //                                 className="rts-watermark-03"
// // // // // // // // // //                                 style={{
// // // // // // // // // //                                     position: 'absolute',
// // // // // // // // // //                                     top: '0%',
// // // // // // // // // //                                     left: '50%',
// // // // // // // // // //                                     // Center the element
// // // // // // // // // //                                     transform: 'translate(-50%, -50%)', 

// // // // // // // // // //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// // // // // // // // // //                                     fontSize: '150px', 

// // // // // // // // // //                                     // 2. Ensuring the container size is minimized but not clipping
// // // // // // // // // //                                     lineHeight: 0.9, 
// // // // // // // // // //                                     padding: '5px 0', 
// // // // // // // // // //                                     display: 'block', 

// // // // // // // // // //                                     // --- Styling (Kept bold/hollow) ---
// // // // // // // // // //                                     fontWeight: '900', 
// // // // // // // // // //                                     color: 'transparent', 
// // // // // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // // // // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray

// // // // // // // // // //                                     opacity: 0.3, 
// // // // // // // // // //                                     zIndex: 0, 
// // // // // // // // // //                                 }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 03
// // // // // // // // // //                             </div>

// // // // // // // // // //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // // //                             <span 
// // // // // // // // // //                                 className="pre" 
// // // // // // // // // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 Shaping a Global Future
// // // // // // // // // //                             </span>

// // // // // // // // // //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // // //                             <h2 
// // // // // // // // // //                                 className="title" 
// // // // // // // // // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 <span className="solid-text">OUR</span>
// // // // // // // // // //                                 <span className="outline-text">SERVICES</span>
// // // // // // // // // //                             </h2>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="container-1680 mt--40">
// // // // // // // // // //                 <div className="row">
// // // // // // // // // //                     <div className="col-lg-12">
// // // // // // // // // //                         {/* THE MAIN SLIDER WRAPPER */}
// // // // // // // // // //                         {/* 💡 CRITICAL: Added position: relative here for arrow positioning */}
// // // // // // // // // //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>

// // // // // // // // // //                             <Swiper
// // // // // // // // // //                                 dir="ltr"
// // // // // // // // // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // // // // // // // // //                                 className="mySwiper-case-studies-5"
// // // // // // // // // //                                 modules={[Navigation, Pagination]}

// // // // // // // // // //                                 // Navigation config: Connects to your custom buttons
// // // // // // // // // //                                 navigation={{
// // // // // // // // // //                                     prevEl: '.swiper-button-prev-custom',
// // // // // // // // // //                                     nextEl: '.swiper-button-next-custom',
// // // // // // // // // //                                 }}

// // // // // // // // // //                                 // Pagination config: Connects to your custom fraction display
// // // // // // // // // //                                 pagination={{
// // // // // // // // // //                                     el: '.swiper-pagination-fraction-custom',
// // // // // // // // // //                                     type: 'fraction',
// // // // // // // // // //                                 }}

// // // // // // // // // //                                 // Swiper Breakpoints
// // // // // // // // // //                                 slidesPerView={1}
// // // // // // // // // //                                 spaceBetween={30}
// // // // // // // // // //                                 breakpoints={{
// // // // // // // // // //                                     // Default/Mobile (1 slide)
// // // // // // // // // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // // // // // // // // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // // // // // // // // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // // // // // // // // //                                 }}
// // // // // // // // // //                             >
// // // // // // // // // //                                 {/* MAPPING THE DATA TO SLIDES */}
// // // // // // // // // //                                 {serviceData.map((item) => (
// // // // // // // // // //                                     <SwiperSlide key={item.id}>
// // // // // // // // // //                                         <div className="single-case-studies-four">
// // // // // // // // // //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// // // // // // // // // //                                             <Link href={item.href} className="thumbnail">
// // // // // // // // // //                                                 <Image 
// // // // // // // // // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // // // // // // // // //                                                     alt={item.title}
// // // // // // // // // //                                                     width={400} 
// // // // // // // // // //                                                     height={300}
// // // // // // // // // //                                                     style={{ width: '100%', height: 'auto' }} 
// // // // // // // // // //                                                     priority={item.id <= 4}
// // // // // // // // // //                                                 />
// // // // // // // // // //                                             </Link>
// // // // // // // // // //                                             <div className="inner">
// // // // // // // // // //                                                 <Link href={item.href}>
// // // // // // // // // //                                                     <h3 className="title">{item.title}</h3>
// // // // // // // // // //                                                 </Link>
// // // // // // // // // //                                             </div>
// // // // // // // // // //                                         </div>
// // // // // // // // // //                                     </SwiperSlide>
// // // // // // // // // //                                 ))}

// // // // // // // // // //                             </Swiper>

// // // // // // // // // //                             {/* CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
// // // // // // // // // //                             <div className="navigation-custom-wrap">
// // // // // // // // // //                                 {/* The pagination fraction element (Hidden on mobile via CSS below) */}
// // // // // // // // // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // // // // // // // // //                                 style={{ textAlign: 'center' }}>
// // // // // // // // // //                                     {`1 / ${totalSlides}`} 
// // // // // // // // // //                                 </div>

// // // // // // // // // //                                 {/* The Previous Button */}
// // // // // // // // // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // // // // // // // // //                                 </div>

// // // // // // // // // //                                 {/* The Next Button */}
// // // // // // // // // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* 🛑 ADDED RESPONSIVE STYLES HERE */}
// // // // // // // // // //             <style jsx global>
// // // // // // // // // //                 {`
// // // // // // // // // //                     /* --- Our Services Title Styles (Desktop Base) --- */
// // // // // // // // // //                     .title-style-three .title {
// // // // // // // // // //                         font-size: 60px;
// // // // // // // // // //                         font-weight: 900;
// // // // // // // // // //                         text-transform: uppercase;
// // // // // // // // // //                         display: inline-block;
// // // // // // // // // //                         margin: 0;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .solid-text {
// // // // // // // // // //                         color: #0d1c2e; 
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .outline-text {
// // // // // // // // // //                         color: transparent;
// // // // // // // // // //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// // // // // // // // // //                         text-stroke: 1.5px #0d1c2e;
// // // // // // // // // //                         margin-left: 10px;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three .pre {
// // // // // // // // // //                         display: block;
// // // // // // // // // //                         font-size: 14px;
// // // // // // // // // //                         letter-spacing: 2px;
// // // // // // // // // //                         color: #666;
// // // // // // // // // //                         margin-bottom: 10px;
// // // // // // // // // //                     }
// // // // // // // // // //                     .title-style-three.center {
// // // // // // // // // //                         text-align: center;
// // // // // // // // // //                     }

// // // // // // // // // //                     /* --- SWIPER ARROW BASE STYLES (REQUIRED FOR ABSOLUTE POSITIONING) --- */
// // // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // // //                         position: absolute;
// // // // // // // // // //                         top: 50%; /* Center vertically */
// // // // // // // // // //                         transform: translateY(-50%);
// // // // // // // // // //                         z-index: 10;
// // // // // // // // // //                         cursor: pointer;
// // // // // // // // // //                         display: flex;
// // // // // // // // // //                         align-items: center;
// // // // // // // // // //                         justify-content: center;
// // // // // // // // // //                         width: 50px; /* Base size */
// // // // // // // // // //                         height: 50px; /* Base size */
// // // // // // // // // //                         border: 1px solid #ccc;
// // // // // // // // // //                         border-radius: 50%;
// // // // // // // // // //                         color: #0d1c2e;
// // // // // // // // // //                         background: #fff;
// // // // // // // // // //                         transition: all 0.3s;
// // // // // // // // // //                     }

// // // // // // // // // //                     /* Specific positioning */
// // // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // // // // // // // // //                         left: -60px; /* Outside the main content area */
// // // // // // // // // //                     }

// // // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // // //                         right: -60px; /* Outside the main content area */
// // // // // // // // // //                     }

// // // // // // // // // //                     /* Hide pagination fraction on desktop (if you don't want it) or style it */
// // // // // // // // // //                     .navigation-custom-wrap {
// // // // // // // // // //                         display: flex;
// // // // // // // // // //                         align-items: center;
// // // // // // // // // //                         justify-content: center;
// // // // // // // // // //                         /* Optional: margin-top: 20px; */
// // // // // // // // // //                     }

// // // // // // // // // //                     .swiper-pagination-fraction-custom {
// // // // // // // // // //                         // FIX: Changed from multiline CSS comment to // comment
// // // // // // // // // //                         display: block; /* Default visible on desktop */
// // // // // // // // // //                     }


// // // // // // // // // //                     /* ==================================== */
// // // // // // // // // //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// // // // // // // // // //                     /* ==================================== */
// // // // // // // // // //                     @media (max-width: 991px) {
// // // // // // // // // //                         /* 💡 CRITICAL FIX: Reposition arrows inside the visible area */
// // // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // // //                             top: 40%; /* Slightly higher */
// // // // // // // // // //                             width: 35px; /* Smaller size */
// // // // // // // // // //                             height: 35px; /* Smaller size */
// // // // // // // // // //                             font-size: 14px; /* Smaller icon */
// // // // // // // // // //                             border-width: 0; /* Remove border */
// // // // // // // // // //                             background: rgba(13, 28, 46, 0.7); /* Darker background */
// // // // // // // // // //                             color: #fff; /* White icon */
// // // // // // // // // //                         }

// // // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // // // // // // // // //                             left: 10px; /* Move inside the container */
// // // // // // // // // //                         }

// // // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // // //                             right: 10px; /* Move inside the container */
// // // // // // // // // //                         }

// // // // // // // // // //                         /* Hide the pagination fraction text/div on mobile for cleaner look */
// // // // // // // // // //                         .swiper-pagination-fraction-custom {
// // // // // // // // // //                             display: none !important;
// // // // // // // // // //                         }
// // // // // // // // // //                     }

// // // // // // // // // //                     /* --- Further size reduction for very small screens (phones) --- */
// // // // // // // // // //                     @media (max-width: 768px) {
// // // // // // // // // //                         /* --- SECTION 3: OUR SERVICES WATERMARK 03 FIX --- */
// // // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // // //                             /* Match the size of Watermark 02 from HomeSections */
// // // // // // // // // //                             font-size: 100px !important; 
// // // // // // // // // //                             opacity: 0.6 !important;
// // // // // // // // // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; /* Thinner stroke */
// // // // // // // // // //                             line-height: 1 !important; /* Adjust line-height to 1 for better vertical spacing on mobile */
// // // // // // // // // //                         }

// // // // // // // // // //                         /* --- SECTION 3: OUR SERVICES HEADING FIX --- */
// // // // // // // // // //                         .rts-projects-area .title-style-three .title {
// // // // // // // // // //                             font-size: 36px !important; /* Match HomeSections heading size for mobile */
// // // // // // // // // //                         }
// // // // // // // // // //                     }

// // // // // // // // // //                     @media (max-width: 480px) {
// // // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // // //                             font-size: 80px !important; 
// // // // // // // // // //                         }
// // // // // // // // // //                     }
// // // // // // // // // //                 `}
// // // // // // // // // //             </style>
// // // // // // // // // //         </div>
// // // // // // // // // //     );
// // // // // // // // // // }; 

// // // // // // // // // // export default ServiceProjects;
// // // // // // // // // 'use client';

// // // // // // // // // import React from 'react';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import Image from 'next/image';

// // // // // // // // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // // // // // // // import 'swiper/css';
// // // // // // // // // import 'swiper/css/navigation';
// // // // // // // // // // RESTORED: Pagination CSS for the counter styling
// // // // // // // // // import 'swiper/css/pagination';

// // // // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // // // // RESTORED: Pagination module
// // // // // // // // // import { Navigation, Pagination } from 'swiper/modules';
// // // // // // // // // import type { Swiper as SwiperCore } from 'swiper/types';


// // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // 1. DATA DEFINITION
// // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // interface ServiceItem {
// // // // // // // // //     id: number;
// // // // // // // // //     title: string;
// // // // // // // // //     imagePath: string; // The path used in the original <img> src
// // // // // // // // //     href: string;      // The target URL
// // // // // // // // // }

// // // // // // // // // const serviceData: ServiceItem[] = [
// // // // // // // // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// // // // // // // // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// // // // // // // // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// // // // // // // // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// // // // // // // // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// // // // // // // // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// // // // // // // // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// // // // // // // // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// // // // // // // // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// // // // // // // // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// // // // // // // // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// // // // // // // // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// // // // // // // // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// // // // // // // // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // // // // // // // // ];
// // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // // 2. COMPONENT LOGIC
// // // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // const ServiceProjects = () => {
// // // // // // // // //     // RESTORED: swiperRef for potential manual control, though not critical here
// // // // // // // // //     const swiperRef = React.useRef<SwiperCore | null>(null);

// // // // // // // // //     // RESTORED: totalSlides calculation for the initial counter text
// // // // // // // // //     const totalSlides = serviceData.length;

// // // // // // // // //     return (
// // // // // // // // //         // Replicating the outer HTML structure
// // // // // // // // //         <div className="rts-projects-area rts-section-gap">
// // // // // // // // //             <div className="container">
// // // // // // // // //                 <div className="row">
// // // // // // // // //                     <div className="col-lg-12">

// // // // // // // // //                         {/* Title Section with Watermark logic */}
// // // // // // // // //                         <div 
// // // // // // // // //                             className="title-style-three center" 
// // // // // // // // //                             // 💡 STEP 1: Set position: relative on the container
// // // // // // // // //                             style={{ position: 'relative' }}
// // // // // // // // //                         >

// // // // // // // // //                             {/* 💡 WATERMARK 03 DIV (Applying light gray hollow style) */}
// // // // // // // // //                             <div 
// // // // // // // // //                                 className="rts-watermark-03"
// // // // // // // // //                                 style={{
// // // // // // // // //                                     position: 'absolute',
// // // // // // // // //                                     top: '0%',
// // // // // // // // //                                     left: '50%',
// // // // // // // // //                                     // Center the element
// // // // // // // // //                                     transform: 'translate(-50%, -50%)', 

// // // // // // // // //                                     // 1. **CRITICAL FIX**: Reduced Font Size for better fit
// // // // // // // // //                                     fontSize: '150px', 

// // // // // // // // //                                     // 2. Ensuring the container size is minimized but not clipping
// // // // // // // // //                                     lineHeight: 0.9, 
// // // // // // // // //                                     padding: '5px 0', 
// // // // // // // // //                                     display: 'block', 

// // // // // // // // //                                     // --- Styling (Kept bold/hollow) ---
// // // // // // // // //                                     fontWeight: '900', 
// // // // // // // // //                                     color: 'transparent', 
// // // // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // // // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)', // Adjusted to match HomeSections light gray

// // // // // // // // //                                     opacity: 0.3, 
// // // // // // // // //                                     zIndex: 0, 
// // // // // // // // //                                 }}
// // // // // // // // //                             >
// // // // // // // // //                                 03
// // // // // // // // //                             </div>

// // // // // // // // //                             {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // //                             <span 
// // // // // // // // //                                 className="pre" 
// // // // // // // // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // // // // // // // //                             >
// // // // // // // // //                                 Shaping a Global Future
// // // // // // // // //                             </span>

// // // // // // // // //                             {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
// // // // // // // // //                             <h2 
// // // // // // // // //                                 className="title" 
// // // // // // // // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // // // // // // // //                             >
// // // // // // // // //                                 <span className="solid-text">OUR</span>
// // // // // // // // //                                 <span className="outline-text">SERVICES</span>
// // // // // // // // //                             </h2>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="container-1680 mt--40">
// // // // // // // // //                 <div className="row">
// // // // // // // // //                     <div className="col-lg-12">
// // // // // // // // //                         {/* THE MAIN SLIDER WRAPPER */}
// // // // // // // // //                         {/* 💡 CRITICAL: Added position: relative here for arrow positioning */}
// // // // // // // // //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>

// // // // // // // // //                             <Swiper
// // // // // // // // //                                 dir="ltr"
// // // // // // // // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // // // // // // // //                                 className="mySwiper-case-studies-5"
// // // // // // // // //                                 // RESTORED: Pagination module
// // // // // // // // //                                 modules={[Navigation, Pagination]}

// // // // // // // // //                                 // Navigation config: Connects to your custom buttons
// // // // // // // // //                                 navigation={{
// // // // // // // // //                                     prevEl: '.swiper-button-prev-custom',
// // // // // // // // //                                     nextEl: '.swiper-button-next-custom',
// // // // // // // // //                                 }}

// // // // // // // // //                                 // RESTORED: Pagination config to link to the fraction element
// // // // // // // // //                                 pagination={{
// // // // // // // // //                                     el: '.swiper-pagination-fraction-custom',
// // // // // // // // //                                     type: 'fraction',
// // // // // // // // //                                 }}

// // // // // // // // //                                 // Swiper Breakpoints
// // // // // // // // //                                 slidesPerView={1}
// // // // // // // // //                                 spaceBetween={30}
// // // // // // // // //                                 breakpoints={{
// // // // // // // // //                                     // Default/Mobile (1 slide)
// // // // // // // // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // // // // // // // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // // // // // // // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // // // // // // // //                                 }}
// // // // // // // // //                             >
// // // // // // // // //                                 {/* MAPPING THE DATA TO SLIDES */}
// // // // // // // // //                                 {serviceData.map((item) => (
// // // // // // // // //                                     <SwiperSlide key={item.id}>
// // // // // // // // //                                         <div className="single-case-studies-four">
// // // // // // // // //                                             {/* Convert <img> to Next.js <Image> and handle path */}
// // // // // // // // //                                             <Link href={item.href} className="thumbnail">
// // // // // // // // //                                                 <Image 
// // // // // // // // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // // // // // // // //                                                     alt={item.title}
// // // // // // // // //                                                     width={400} 
// // // // // // // // //                                                     height={300}
// // // // // // // // //                                                     style={{ width: '100%', height: 'auto' }} 
// // // // // // // // //                                                     priority={item.id <= 4}
// // // // // // // // //                                                 />
// // // // // // // // //                                             </Link>
// // // // // // // // //                                             <div className="inner">
// // // // // // // // //                                                 <Link href={item.href}>
// // // // // // // // //                                                     <h3 className="title">{item.title}</h3>
// // // // // // // // //                                                 </Link>
// // // // // // // // //                                             </div>
// // // // // // // // //                                         </div>
// // // // // // // // //                                     </SwiperSlide>
// // // // // // // // //                                 ))}

// // // // // // // // //                             </Swiper>

// // // // // // // // //                             {/* CUSTOM NAVIGATION CONTROLS AND COUNTER */}
// // // // // // // // //                             <div className="navigation-custom-wrap">

// // // // // // // // //                                 {/* The Previous Button */}
// // // // // // // // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // // // // // // // //                                 </div>

// // // // // // // // //                                 {/* RESTORED: The pagination fraction element (Swiper populates this) */}
// // // // // // // // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // // // // // // // //                                 style={{ textAlign: 'center' }}>
// // // // // // // // //                                     {/* Swiper replaces this with the actual current/total count */}
// // // // // // // // //                                     {`1 / ${totalSlides}`} 
// // // // // // // // //                                 </div>

// // // // // // // // //                                 {/* The Next Button */}
// // // // // // // // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // // // // // // // //                                 </div>
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* 🛑 UPDATED STYLES */}
// // // // // // // // //             <style jsx global>
// // // // // // // // //                 {`
// // // // // // // // //                     /* --- Our Services Title Styles (Desktop Base) --- */
// // // // // // // // //                     .title-style-three .title {
// // // // // // // // //                         font-size: 60px;
// // // // // // // // //                         font-weight: 900;
// // // // // // // // //                         text-transform: uppercase;
// // // // // // // // //                         display: inline-block;
// // // // // // // // //                         margin: 0;
// // // // // // // // //                     }
// // // // // // // // //                     .title-style-three .solid-text {
// // // // // // // // //                         color: #0d1c2e; 
// // // // // // // // //                     }
// // // // // // // // //                     .title-style-three .outline-text {
// // // // // // // // //                         color: transparent;
// // // // // // // // //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// // // // // // // // //                         text-stroke: 1.5px #0d1c2e;
// // // // // // // // //                         margin-left: 10px;
// // // // // // // // //                     }
// // // // // // // // //                     .title-style-three .pre {
// // // // // // // // //                         display: block;
// // // // // // // // //                         font-size: 14px;
// // // // // // // // //                         letter-spacing: 2px;
// // // // // // // // //                         color: #666;
// // // // // // // // //                         margin-bottom: 10px;
// // // // // // // // //                     }
// // // // // // // // //                     .title-style-three.center {
// // // // // // // // //                         text-align: center;
// // // // // // // // //                     }

// // // // // // // // //                     /* --- SWIPER ARROW BASE STYLES (REQUIRED FOR ABSOLUTE POSITIONING) --- */
// // // // // // // // //                     /* Note: Arrows are positioned relative to their parent (.case-studies-wrapper-main-5) */
// // // // // // // // //                     .case-studies-wrapper-main-5 {
// // // // // // // // //                         padding-bottom: 60px; /* Added space for the pagination/navigation wrapper below the slides */
// // // // // // // // //                     }

// // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // //                         position: absolute;
// // // // // // // // //                         top: 50%; /* Center vertically (relative to the slide area) */
// // // // // // // // //                         transform: translateY(-50%);
// // // // // // // // //                         z-index: 10;
// // // // // // // // //                         cursor: pointer;
// // // // // // // // //                         display: flex;
// // // // // // // // //                         align-items: center;
// // // // // // // // //                         justify-content: center;
// // // // // // // // //                         width: 50px; 
// // // // // // // // //                         height: 50px; 
// // // // // // // // //                         border: 1px solid #ccc;
// // // // // // // // //                         border-radius: 50%;
// // // // // // // // //                         color: #0d1c2e;
// // // // // // // // //                         background: #fff;
// // // // // // // // //                         transition: all 0.3s;
// // // // // // // // //                     }

// // // // // // // // //                     /* Navigation Wrapper (For the arrows and the counter) */
// // // // // // // // //                     .navigation-custom-wrap {
// // // // // // // // //                         /* Position the wrapper below the slides, relative to the main component's content flow */
// // // // // // // // //                         position: absolute;
// // // // // // // // //                         bottom: 0; /* Align to the bottom of the content area */
// // // // // // // // //                         left: 50%;
// // // // // // // // //                         transform: translateX(-50%);

// // // // // // // // //                         display: flex;
// // // // // // // // //                         align-items: center;
// // // // // // // // //                         justify-content: space-between; /* Space out the arrow, counter, and arrow */
// // // // // // // // //                         width: 250px; /* Fixed width to contain the elements cleanly */
// // // // // // // // //                         z-index: 10;
// // // // // // // // //                     }

// // // // // // // // //                     /* Specific positioning for Arrows inside the bottom wrapper */
// // // // // // // // //                     .navigation-custom-wrap .swiper-button-prev-custom {
// // // // // // // // //                         position: relative; /* Change from absolute to relative to flow inside the wrapper */
// // // // // // // // //                         left: auto;
// // // // // // // // //                         top: auto;
// // // // // // // // //                         transform: none;
// // // // // // // // //                     }
// // // // // // // // //                     .navigation-custom-wrap .swiper-button-next-custom {
// // // // // // // // //                         position: relative; /* Change from absolute to relative to flow inside the wrapper */
// // // // // // // // //                         right: auto;
// // // // // // // // //                         top: auto;
// // // // // // // // //                         transform: none;
// // // // // // // // //                     }

// // // // // // // // //                     /* Hiding default Swiper arrow icons provided by swiper.css to show only your custom icon */
// // // // // // // // //                     .swiper-button-next-custom:after,
// // // // // // // // //                     .swiper-button-prev-custom:after {
// // // // // // // // //                         content: '';
// // // // // // // // //                     }

// // // // // // // // //                     /* Pagination Fraction Styling */
// // // // // // // // //                     .swiper-pagination-fraction-custom {
// // // // // // // // //                         color: #0d1c2e;
// // // // // // // // //                         font-size: 16px;
// // // // // // // // //                         font-weight: 500;
// // // // // // // // //                         flex-grow: 1; /* Allows it to take up the space between the arrows */
// // // // // // // // //                         text-align: center;
// // // // // // // // //                     }

// // // // // // // // //                     /* ==================================== */
// // // // // // // // //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// // // // // // // // //                     /* ==================================== */
// // // // // // // // //                     @media (max-width: 991px) {
// // // // // // // // //                         /* 💡 CRITICAL FIX: Reposition arrows back INSIDE the slide view for mobile */
// // // // // // // // //                         /* The bottom counter setup usually looks bad on mobile, so we move them to the sides of the slider area */

// // // // // // // // //                         .case-studies-wrapper-main-5 {
// // // // // // // // //                             padding-bottom: 0; /* Remove padding if arrows move back up */
// // // // // // // // //                         }

// // // // // // // // //                         .navigation-custom-wrap {
// // // // // // // // //                             /* Hide the entire bottom wrapper as we move the arrows to the side */
// // // // // // // // //                             display: none; 
// // // // // // // // //                         }

// // // // // // // // //                         /* Re-apply absolute positioning for arrows relative to the slide container */
// // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // //                             position: absolute;
// // // // // // // // //                             top: 40%; /* Slightly higher */
// // // // // // // // //                             transform: translateY(-50%);
// // // // // // // // //                             width: 35px; /* Smaller size */
// // // // // // // // //                             height: 35px; /* Smaller size */
// // // // // // // // //                             font-size: 14px; /* Smaller icon */
// // // // // // // // //                             border-width: 0; /* Remove border */
// // // // // // // // //                             background: rgba(13, 28, 46, 0.7); /* Darker background */
// // // // // // // // //                             color: #fff; /* White icon */
// // // // // // // // //                         }

// // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // // // // // // // //                             left: 10px; /* Move inside the container */
// // // // // // // // //                         }

// // // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // // //                             right: 10px; /* Move inside the container */
// // // // // // // // //                         }

// // // // // // // // //                         /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES --- */
// // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // //                             font-size: 100px !important; 
// // // // // // // // //                             opacity: 0.6 !important;
// // // // // // // // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
// // // // // // // // //                             line-height: 1 !important; 
// // // // // // // // //                         }

// // // // // // // // //                         .rts-projects-area .title-style-three .title {
// // // // // // // // //                             font-size: 36px !important; 
// // // // // // // // //                         }
// // // // // // // // //                     }

// // // // // // // // //                     @media (max-width: 480px) {
// // // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // // //                             font-size: 80px !important; 
// // // // // // // // //                         }
// // // // // // // // //                     }
// // // // // // // // //                 `}
// // // // // // // // //             </style>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default ServiceProjects;

// // // // // // // // 'use client';

// // // // // // // // import React from 'react';
// // // // // // // // import Link from 'next/link';
// // // // // // // // import Image from 'next/image';

// // // // // // // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // // // // // // import 'swiper/css';
// // // // // // // // import 'swiper/css/navigation';
// // // // // // // // import 'swiper/css/pagination';

// // // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // // import { Navigation, Pagination } from 'swiper/modules';
// // // // // // // // import type { Swiper as SwiperCore } from 'swiper/types';


// // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // 1. DATA DEFINITION
// // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // interface ServiceItem {
// // // // // // // //     id: number;
// // // // // // // //     title: string;
// // // // // // // //     imagePath: string; // The path used in the original <img> src
// // // // // // // //     href: string;      // The target URL
// // // // // // // // }

// // // // // // // // const serviceData: ServiceItem[] = [
// // // // // // // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// // // // // // // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// // // // // // // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// // // // // // // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// // // // // // // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// // // // // // // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// // // // // // // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// // // // // // // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// // // // // // // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// // // // // // // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// // // // // // // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// // // // // // // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// // // // // // // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// // // // // // // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // // // // // // // ];
// // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // // 2. COMPONENT LOGIC
// // // // // // // // // -----------------------------------------------------------------------
// // // // // // // // const ServiceProjects = () => {
// // // // // // // //     const swiperRef = React.useRef<SwiperCore | null>(null);
// // // // // // // //     const totalSlides = serviceData.length;

// // // // // // // //     return (
// // // // // // // //         // Replicating the outer HTML structure
// // // // // // // //         <div className="rts-projects-area rts-section-gap">
// // // // // // // //             <div className="container">
// // // // // // // //                 <div className="row">
// // // // // // // //                     <div className="col-lg-12">

// // // // // // // //                         {/* Title Section with Watermark logic (No change here) */}
// // // // // // // //                         <div 
// // // // // // // //                             className="title-style-three center" 
// // // // // // // //                             style={{ position: 'relative' }}
// // // // // // // //                         >

// // // // // // // //                             {/* Watermark 03 DIV (No change here) */}
// // // // // // // //                             <div 
// // // // // // // //                                 className="rts-watermark-03"
// // // // // // // //                                 style={{
// // // // // // // //                                     position: 'absolute',
// // // // // // // //                                     top: '0%',
// // // // // // // //                                     left: '50%',
// // // // // // // //                                     transform: 'translate(-50%, -50%)', 
// // // // // // // //                                     fontSize: '150px', 
// // // // // // // //                                     lineHeight: 0.9, 
// // // // // // // //                                     padding: '5px 0', 
// // // // // // // //                                     display: 'block', 
// // // // // // // //                                     fontWeight: '900', 
// // // // // // // //                                     color: 'transparent', 
// // // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)',
// // // // // // // //                                     opacity: 0.3, 
// // // // // // // //                                     zIndex: 0, 
// // // // // // // //                                 }}
// // // // // // // //                             >
// // // // // // // //                                 03
// // // // // // // //                             </div>

// // // // // // // //                             {/* Pre-title text (No change here) */}
// // // // // // // //                             <span 
// // // // // // // //                                 className="pre" 
// // // // // // // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // // // // // // //                             >
// // // // // // // //                                 Shaping a Global Future
// // // // // // // //                             </span>

// // // // // // // //                             {/* Main title text (No change here) */}
// // // // // // // //                             <h2 
// // // // // // // //                                 className="title" 
// // // // // // // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // // // // // // //                             >
// // // // // // // //                                 <span className="solid-text">OUR</span>
// // // // // // // //                                 <span className="outline-text">SERVICES</span>
// // // // // // // //                             </h2>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </div>

// // // // // // // //             <div className="container-1680 mt--40">
// // // // // // // //                 <div className="row">
// // // // // // // //                     <div className="col-lg-12">
// // // // // // // //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>

// // // // // // // //                             <Swiper
// // // // // // // //                                 dir="ltr"
// // // // // // // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // // // // // // //                                 className="mySwiper-case-studies-5"
// // // // // // // //                                 modules={[Navigation, Pagination]}

// // // // // // // //                                 navigation={{
// // // // // // // //                                     prevEl: '.swiper-button-prev-custom',
// // // // // // // //                                     nextEl: '.swiper-button-next-custom',
// // // // // // // //                                 }}

// // // // // // // //                                 pagination={{
// // // // // // // //                                     el: '.swiper-pagination-fraction-custom',
// // // // // // // //                                     type: 'fraction',
// // // // // // // //                                 }}

// // // // // // // //                                 slidesPerView={1}
// // // // // // // //                                 spaceBetween={30}
// // // // // // // //                                 breakpoints={{
// // // // // // // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // // // // // // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // // // // // // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // // // // // // //                                 }}
// // // // // // // //                             >
// // // // // // // //                                 {/* MAPPING THE DATA TO SLIDES (No change here) */}
// // // // // // // //                                 {serviceData.map((item) => (
// // // // // // // //                                     <SwiperSlide key={item.id}>
// // // // // // // //                                         <div className="single-case-studies-four">
// // // // // // // //                                             <Link href={item.href} className="thumbnail">
// // // // // // // //                                                 <Image 
// // // // // // // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // // // // // // //                                                     alt={item.title}
// // // // // // // //                                                     width={400} 
// // // // // // // //                                                     height={300}
// // // // // // // //                                                     style={{ width: '100%', height: 'auto' }} 
// // // // // // // //                                                     priority={item.id <= 4}
// // // // // // // //                                                 />
// // // // // // // //                                             </Link>
// // // // // // // //                                             <div className="inner">
// // // // // // // //                                                 <Link href={item.href}>
// // // // // // // //                                                     <h3 className="title">{item.title}</h3>
// // // // // // // //                                                 </Link>
// // // // // // // //                                             </div>
// // // // // // // //                                         </div>
// // // // // // // //                                     </SwiperSlide>
// // // // // // // //                                 ))}

// // // // // // // //                             </Swiper>

// // // // // // // //                             {/* CUSTOM NAVIGATION CONTROLS AND COUNTER (No change in HTML) */}
// // // // // // // //                             <div className="navigation-custom-wrap">

// // // // // // // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // // // // // // //                                 </div>

// // // // // // // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // // // // // // //                                 style={{ textAlign: 'center' }}>
// // // // // // // //                                     {`1 / ${totalSlides}`} 
// // // // // // // //                                 </div>

// // // // // // // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </div>

// // // // // // // //             {/* 🛑 CRITICAL STYLING UPDATE: Changing the Arrow Button Look */}
// // // // // // // //             <style jsx global>
// // // // // // // //                 {`
// // // // // // // //                     /* --- Title Styles (Kept) --- */
// // // // // // // //                     .title-style-three .title {
// // // // // // // //                         font-size: 60px;
// // // // // // // //                         font-weight: 900;
// // // // // // // //                         text-transform: uppercase;
// // // // // // // //                         display: inline-block;
// // // // // // // //                         margin: 0;
// // // // // // // //                     }
// // // // // // // //                     .title-style-three .solid-text {
// // // // // // // //                         color: #0d1c2e; 
// // // // // // // //                     }
// // // // // // // //                     .title-style-three .outline-text {
// // // // // // // //                         color: transparent;
// // // // // // // //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// // // // // // // //                         text-stroke: 1.5px #0d1c2e;
// // // // // // // //                         margin-left: 10px;
// // // // // // // //                     }
// // // // // // // //                     .title-style-three .pre {
// // // // // // // //                         display: block;
// // // // // // // //                         font-size: 14px;
// // // // // // // //                         letter-spacing: 2px;
// // // // // // // //                         color: #666;
// // // // // // // //                         margin-bottom: 10px;
// // // // // // // //                     }
// // // // // // // //                     .title-style-three.center {
// // // // // // // //                         text-align: center;
// // // // // // // //                     }

// // // // // // // //                     /* --- SWIPER ARROW BASE STYLES (MODIFIED FOR READ MORE LOOK) --- */
// // // // // // // //                     .case-studies-wrapper-main-5 {
// // // // // // // //                         padding-bottom: 60px; 
// // // // // // // //                     }

// // // // // // // //                     /* --- Desktop/Base Arrow Styling --- */
// // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // //                         /* Resetting default Swiper positioning */
// // // // // // // //                         position: absolute; /* Kept as absolute base */
// // // // // // // //                         top: 50%; 
// // // // // // // //                         transform: translateY(-50%);
// // // // // // // //                         z-index: 10;
// // // // // // // //                         cursor: pointer;
// // // // // // // //                         display: flex;
// // // // // // // //                         align-items: center;
// // // // // // // //                         justify-content: center;

// // // // // // // //                         /* 💡 REMOVING CIRCULAR STYLING */
// // // // // // // //                         width: 40px; /* Smaller footprint */
// // // // // // // //                         height: 40px; /* Smaller footprint */
// // // // // // // //                         border: none; /* Removed border */
// // // // // // // //                         border-radius: 0; /* Removed border-radius */
// // // // // // // //                         background: none; /* Removed background */
// // // // // // // //                         color: #0d1c2e; /* Ensure icon color is dark/visible */
// // // // // // // //                         font-size: 18px; /* Slightly larger icon */
// // // // // // // //                         transition: all 0.3s;
// // // // // // // //                     }

// // // // // // // //                     /* Navigation Wrapper (Positioned below slides) */
// // // // // // // //                     .navigation-custom-wrap {
// // // // // // // //                         position: absolute;
// // // // // // // //                         bottom: 0; 
// // // // // // // //                         left: 50%;
// // // // // // // //                         transform: translateX(-50%);

// // // // // // // //                         display: flex;
// // // // // // // //                         align-items: center;
// // // // // // // //                         justify-content: space-between; 
// // // // // // // //                         width: 180px; /* Adjusted width to look cleaner with smaller arrows */
// // // // // // // //                         z-index: 10;
// // // // // // // //                     }

// // // // // // // //                     /* Specific positioning for Arrows inside the bottom wrapper */
// // // // // // // //                     .navigation-custom-wrap .swiper-button-prev-custom,
// // // // // // // //                     .navigation-custom-wrap .swiper-button-next-custom {
// // // // // // // //                         position: relative; /* Flow inside the wrapper */
// // // // // // // //                         left: auto;
// // // // // // // //                         top: auto;
// // // // // // // //                         transform: none;

// // // // // // // //                         /* Adding the hover/active style similar to read more buttons */
// // // // // // // //                         /* Example: When hovered, slightly darken or change color */
// // // // // // // //                         &:hover {
// // // // // // // //                             color: #ff5e14; /* Example: Use a theme color on hover */
// // // // // // // //                         }
// // // // // // // //                     }

// // // // // // // //                     /* Hiding default Swiper arrow icons */
// // // // // // // //                     .swiper-button-next-custom:after,
// // // // // // // //                     .swiper-button-prev-custom:after {
// // // // // // // //                         content: '';
// // // // // // // //                     }

// // // // // // // //                     /* Pagination Fraction Styling (Kept) */
// // // // // // // //                     .swiper-pagination-fraction-custom {
// // // // // // // //                         color: #0d1c2e;
// // // // // // // //                         font-size: 16px;
// // // // // // // //                         font-weight: 500;
// // // // // // // //                         flex-grow: 1; 
// // // // // // // //                         text-align: center;
// // // // // // // //                     }

// // // // // // // //                     /* ==================================== */
// // // // // // // //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// // // // // // // //                     /* ==================================== */
// // // // // // // //                     @media (max-width: 991px) {
// // // // // // // //                         /* Arrows are hidden from the bottom bar and moved back to the side of the slide area */

// // // // // // // //                         .case-studies-wrapper-main-5 {
// // // // // // // //                             padding-bottom: 0; 
// // // // // // // //                         }

// // // // // // // //                         .navigation-custom-wrap {
// // // // // // // //                             display: none; 
// // // // // // // //                         }

// // // // // // // //                         /* Re-apply absolute positioning for arrows relative to the slide container (Styled like the new desktop version) */
// // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // //                             position: absolute;
// // // // // // // //                             top: 40%; 
// // // // // // // //                             transform: translateY(-50%);

// // // // // // // //                             /* Clean mobile arrow style (no dark circle) */
// // // // // // // //                             width: 35px; 
// // // // // // // //                             height: 35px; 
// // // // // // // //                             font-size: 16px; 
// // // // // // // //                             border: none;
// // // // // // // //                             background: none; 
// // // // // // // //                             color: #0d1c2e; /* Keep them dark, or choose a visible color */
// // // // // // // //                         }

// // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // // // // // // //                             left: 10px; 
// // // // // // // //                         }

// // // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // // //                             right: 10px; 
// // // // // // // //                         }

// // // // // // // //                         /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES (Kept) --- */
// // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // //                             font-size: 100px !important; 
// // // // // // // //                             opacity: 0.6 !important;
// // // // // // // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
// // // // // // // //                             line-height: 1 !important; 
// // // // // // // //                         }

// // // // // // // //                         .rts-projects-area .title-style-three .title {
// // // // // // // //                             font-size: 36px !important; 
// // // // // // // //                         }
// // // // // // // //                     }

// // // // // // // //                     @media (max-width: 480px) {
// // // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // // //                             font-size: 80px !important; 
// // // // // // // //                         }
// // // // // // // //                     }
// // // // // // // //                 `}
// // // // // // // //             </style>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default ServiceProjects;


// // // // // // // 'use client';

// // // // // // // import React from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import Image from 'next/image';

// // // // // // // // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// // // // // // // import 'swiper/css';
// // // // // // // import 'swiper/css/navigation';
// // // // // // // import 'swiper/css/pagination';

// // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // import { Navigation, Pagination } from 'swiper/modules';
// // // // // // // import type { Swiper as SwiperCore } from 'swiper/types';


// // // // // // // // -----------------------------------------------------------------------
// // // // // // // // 1. DATA DEFINITION
// // // // // // // // -----------------------------------------------------------------------
// // // // // // // interface ServiceItem {
// // // // // // //     id: number;
// // // // // // //     title: string;
// // // // // // //     imagePath: string; // The path used in the original <img> src
// // // // // // //     href: string;      // The target URL
// // // // // // // }

// // // // // // // const serviceData: ServiceItem[] = [
// // // // // // //     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: '/services/global-reach' },
// // // // // // //     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: '/services/business-deligation' },
// // // // // // //     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: '/services/pakistan-products' },
// // // // // // //     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: '/services/trade-shows' },
// // // // // // //     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: '/services/industry-academia' },
// // // // // // //     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: '/services/global-growth' },
// // // // // // //     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: '/services/international-tech' },
// // // // // // //     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: '/services/leadership-incubation' },
// // // // // // //     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: '/services/business-events' },
// // // // // // //     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: '/services/women-empowerment' },
// // // // // // //     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: '/services/bri-centre' },
// // // // // // //     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: '/services/capacity-building' },
// // // // // // //     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: '/services/global-trade' },
// // // // // // //     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: '/services/community-development' },
// // // // // // // ];
// // // // // // // // -----------------------------------------------------------------------
// // // // // // // // 2. COMPONENT LOGIC
// // // // // // // // -----------------------------------------------------------------------
// // // // // // // const ServiceProjects = () => {
// // // // // // //     const swiperRef = React.useRef<SwiperCore | null>(null);
// // // // // // //     const totalSlides = serviceData.length;

// // // // // // //     return (
// // // // // // //         // Replicating the outer HTML structure
// // // // // // //         <div className="rts-projects-area rts-section-gap">
// // // // // // //             <div className="container">
// // // // // // //                 <div className="row">
// // // // // // //                     <div className="col-lg-12">

// // // // // // //                         {/* Title Section with Watermark logic (No change here) */}
// // // // // // //                         <div 
// // // // // // //                             className="title-style-three center" 
// // // // // // //                             style={{ position: 'relative' }}
// // // // // // //                         >

// // // // // // //                             {/* Watermark 03 DIV (No change here) */}
// // // // // // //                             <div 
// // // // // // //                                 className="rts-watermark-03"
// // // // // // //                                 style={{
// // // // // // //                                     position: 'absolute',
// // // // // // //                                     top: '0%',
// // // // // // //                                     left: '50%',
// // // // // // //                                     transform: 'translate(-50%, -50%)', 
// // // // // // //                                     fontSize: '150px', 
// // // // // // //                                     lineHeight: 0.9, 
// // // // // // //                                     padding: '5px 0', 
// // // // // // //                                     display: 'block', 
// // // // // // //                                     fontWeight: '900', 
// // // // // // //                                     color: 'transparent', 
// // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // //                                     WebkitTextStroke: '3px rgb(238, 235, 235)',
// // // // // // //                                     opacity: 0.3, 
// // // // // // //                                     zIndex: 0, 
// // // // // // //                                 }}
// // // // // // //                             >
// // // // // // //                                 03
// // // // // // //                             </div>

// // // // // // //                             {/* Pre-title text (No change here) */}
// // // // // // //                             <span 
// // // // // // //                                 className="pre" 
// // // // // // //                                 style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
// // // // // // //                             >
// // // // // // //                                 Shaping a Global Future
// // // // // // //                             </span>

// // // // // // //                             {/* Main title text (No change here) */}
// // // // // // //                             <h2 
// // // // // // //                                 className="title" 
// // // // // // //                                 style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}
// // // // // // //                             >
// // // // // // //                                 <span className="solid-text">OUR</span>
// // // // // // //                                 <span className="outline-text">SERVICES</span>
// // // // // // //                             </h2>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             <div className="container-1680 mt--40">
// // // // // // //                 <div className="row">
// // // // // // //                     <div className="col-lg-12">
// // // // // // //                         <div className="case-studies-wrapper-main-5" style={{ position: 'relative' }}>

// // // // // // //                             <Swiper
// // // // // // //                                 dir="ltr"
// // // // // // //                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
// // // // // // //                                 className="mySwiper-case-studies-5"
// // // // // // //                                 modules={[Navigation, Pagination]}

// // // // // // //                                 navigation={{
// // // // // // //                                     prevEl: '.swiper-button-prev-custom',
// // // // // // //                                     nextEl: '.swiper-button-next-custom',
// // // // // // //                                 }}

// // // // // // //                                 pagination={{
// // // // // // //                                     el: '.swiper-pagination-fraction-custom',
// // // // // // //                                     type: 'fraction',
// // // // // // //                                 }}

// // // // // // //                                 slidesPerView={1}
// // // // // // //                                 spaceBetween={30}
// // // // // // //                                 breakpoints={{
// // // // // // //                                     576: { slidesPerView: 2, spaceBetween: 20, },
// // // // // // //                                     992: { slidesPerView: 3, spaceBetween: 30, },
// // // // // // //                                     1600: { slidesPerView: 4, spaceBetween: 30, },
// // // // // // //                                 }}
// // // // // // //                             >
// // // // // // //                                 {/* MAPPING THE DATA TO SLIDES (No change here) */}
// // // // // // //                                 {serviceData.map((item) => (
// // // // // // //                                     <SwiperSlide key={item.id}>
// // // // // // //                                         <div className="single-case-studies-four">
// // // // // // //                                             <Link href={item.href} className="thumbnail">
// // // // // // //                                                 <Image 
// // // // // // //                                                     src={item.imagePath.replace('assets/', '/')} 
// // // // // // //                                                     alt={item.title}
// // // // // // //                                                     width={400} 
// // // // // // //                                                     height={300}
// // // // // // //                                                     style={{ width: '100%', height: 'auto' }} 
// // // // // // //                                                     priority={item.id <= 4}
// // // // // // //                                                 />
// // // // // // //                                             </Link>
// // // // // // //                                             <div className="inner">
// // // // // // //                                                 <Link href={item.href}>
// // // // // // //                                                     <h3 className="title">{item.title}</h3>
// // // // // // //                                                 </Link>
// // // // // // //                                             </div>
// // // // // // //                                         </div>
// // // // // // //                                     </SwiperSlide>
// // // // // // //                                 ))}

// // // // // // //                             </Swiper>

// // // // // // //                             {/* CUSTOM NAVIGATION CONTROLS AND COUNTER (No change in HTML) */}
// // // // // // //                             <div className="navigation-custom-wrap">

// // // // // // //                                 <div className="swiper-button-prev swiper-button-prev-custom">
// // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// // // // // // //                                 </div>

// // // // // // //                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
// // // // // // //                                 style={{ textAlign: 'center' }}>
// // // // // // //                                     {`1 / ${totalSlides}`} 
// // // // // // //                                 </div>

// // // // // // //                                 <div className="swiper-button-next swiper-button-next-custom">
// // // // // // //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* 🛑 CRITICAL STYLING UPDATE: Applying .rts-read-more styles to the arrows */}
// // // // // // //             <style jsx global>
// // // // // // //                 {`
// // // // // // //                     /* --- Title Styles (Kept) --- */
// // // // // // //                     .title-style-three .title {
// // // // // // //                         font-size: 60px;
// // // // // // //                         font-weight: 900;
// // // // // // //                         text-transform: uppercase;
// // // // // // //                         display: inline-block;
// // // // // // //                         margin: 0;
// // // // // // //                     }
// // // // // // //                     .title-style-three .solid-text {
// // // // // // //                         color: #0d1c2e; 
// // // // // // //                     }
// // // // // // //                     .title-style-three .outline-text {
// // // // // // //                         color: transparent;
// // // // // // //                         -webkit-text-stroke: 1.5px #0d1c2e; 
// // // // // // //                         text-stroke: 1.5px #0d1c2e;
// // // // // // //                         margin-left: 10px;
// // // // // // //                     }
// // // // // // //                     .title-style-three .pre {
// // // // // // //                         display: block;
// // // // // // //                         font-size: 14px;
// // // // // // //                         letter-spacing: 2px;
// // // // // // //                         color: #666;
// // // // // // //                         margin-bottom: 10px;
// // // // // // //                     }
// // // // // // //                     .title-style-three.center {
// // // // // // //                         text-align: center;
// // // // // // //                     }

// // // // // // //                     /* --- NAVIGATION WRAPPER (Kept positioning logic) --- */
// // // // // // //                     .case-studies-wrapper-main-5 {
// // // // // // //                         padding-bottom: 60px; 
// // // // // // //                     }

// // // // // // //                     /* Resetting Swiper's default absolute positioning for the arrow elements */
// // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // //                     .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // //                         /* This block resets absolute Swiper positioning to allow the arrows to flow in the wrapper */
// // // // // // //                         position: absolute; 
// // // // // // //                         top: 50%; 
// // // // // // //                         transform: translateY(-50%);
// // // // // // //                         z-index: 10;
// // // // // // //                         cursor: pointer;
// // // // // // //                         display: flex;
// // // // // // //                         align-items: center;
// // // // // // //                         justify-content: center;

// // // // // // //                         /* Resetting visual styles (from previous circle style) */
// // // // // // //                         width: auto;
// // // // // // //                         height: auto;
// // // // // // //                         border: none;
// // // // // // //                         background: none;

// // // // // // //                         /* 💡 Applying core text styles from .rts-read-more */
// // // // // // //                         color: #130c08ff;
// // // // // // //                         font-weight: 600;
// // // // // // //                         text-transform: uppercase;
// // // // // // //                         font-size: 14px;

// // // // // // //                         /* Transition for the hover effect */
// // // // // // //                         transition: all 0.3s;
// // // // // // //                     }

// // // // // // //                     /* Navigation Wrapper (Positioned below slides) */
// // // // // // //                     .navigation-custom-wrap {
// // // // // // //                         position: absolute;
// // // // // // //                         bottom: 0; 
// // // // // // //                         left: 50%;
// // // // // // //                         transform: translateX(-50%);

// // // // // // //                         display: flex;
// // // // // // //                         align-items: center;
// // // // // // //                         justify-content: space-between; 
// // // // // // //                         width: 180px; 
// // // // // // //                         z-index: 10;
// // // // // // //                     }

// // // // // // //                     /* Specific positioning for Arrows inside the bottom wrapper */
// // // // // // //                     .navigation-custom-wrap .swiper-button-prev-custom,
// // // // // // //                     .navigation-custom-wrap .swiper-button-next-custom {
// // // // // // //                         position: relative; /* Flow inside the wrapper */
// // // // // // //                         left: auto;
// // // // // // //                         top: auto;
// // // // // // //                         transform: none;

// // // // // // //                         /* NOTE: The 'margin-left: -20px;' from .rts-read-more is omitted here 
// // // // // // //                                 as the wrapper controls the spacing. */
// // // // // // //                     }

// // // // // // //                     /* Hover Effect for Right Arrow (Next Button) */
// // // // // // //                     /* Mimics .rts-read-more:hover i { margin-left: 12px; } */
// // // // // // //                     .navigation-custom-wrap .swiper-button-next-custom:hover i {
// // // // // // //                         margin-left: 12px;
// // // // // // //                     }
// // // // // // //                     /* Hover Effect for Left Arrow (Previous Button) - Reverse the movement */
// // // // // // //                     .navigation-custom-wrap .swiper-button-prev-custom:hover i {
// // // // // // //                         margin-right: 12px; /* Moves left arrow further left */
// // // // // // //                     }

// // // // // // //                     /* Icon Spacing for Right Arrow */
// // // // // // //                     .navigation-custom-wrap .swiper-button-next-custom i {
// // // // // // //                         margin-left: 8px; /* Initial margin from the read-more style */
// // // // // // //                         transition: margin-left 0.3s;
// // // // // // //                     }
// // // // // // //                     /* Icon Spacing for Left Arrow (Reverse spacing) */
// // // // // // //                     .navigation-custom-wrap .swiper-button-prev-custom i {
// // // // // // //                         margin-right: 8px; /* Initial margin (reversed) */
// // // // // // //                         transition: margin-right 0.3s;
// // // // // // //                     }

// // // // // // //                     /* Hiding default Swiper arrow icons */
// // // // // // //                     .swiper-button-next-custom:after,
// // // // // // //                     .swiper-button-prev-custom:after {
// // // // // // //                         color: transparent !important;

// // // // // // //                     }


// // // // // // //                     /* Pagination Fraction Styling (Kept) */
// // // // // // //                     .swiper-pagination-fraction-custom {
// // // // // // //                         color: #0d1c2e;
// // // // // // //                         font-size: 16px;
// // // // // // //                         font-weight: 500;
// // // // // // //                         flex-grow: 1; 
// // // // // // //                         text-align: center;
// // // // // // //                     }

// // // // // // //                     /* ==================================== */
// // // // // // //                     /* --- MOBILE OVERRIDES (max-width: 991px/Tablet & Mobile) --- */
// // // // // // //                     /* ==================================== */
// // // // // // //                     @media (max-width: 991px) {
// // // // // // //                         /* Arrows are hidden from the bottom bar and moved back to the side of the slide area */

// // // // // // //                         .case-studies-wrapper-main-5 {
// // // // // // //                             padding-bottom: 0; 
// // // // // // //                         }

// // // // // // //                         .navigation-custom-wrap {
// // // // // // //                             display: none; 
// // // // // // //                         }

// // // // // // //                         /* Re-apply absolute positioning for arrows relative to the slide container (Styled like the new desktop version) */
// // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom,
// // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // //                             position: absolute;
// // // // // // //                             top: 40%; 
// // // // // // //                             transform: translateY(-50%);

// // // // // // //                             /* Clean mobile arrow style (matching read-more styling) */
// // // // // // //                             width: 35px; 
// // // // // // //                             height: 35px; 
// // // // // // //                             font-size: 16px; 
// // // // // // //                             border: none;
// // // // // // //                             background: none; 
// // // // // // //                             color: #070505ff; /* Use primary color */
// // // // // // //                         }

// // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-prev-custom {
// // // // // // //                             left: 10px; 
// // // // // // //                         }

// // // // // // //                         .case-studies-wrapper-main-5 .swiper-button-next-custom {
// // // // // // //                             right: 10px; 
// // // // // // //                         }

// // // // // // //                         /* --- SECTION 3: MOBILE HEADING/WATERMARK FIXES (Kept) --- */
// // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // //                             font-size: 100px !important; 
// // // // // // //                             opacity: 0.6 !important;
// // // // // // //                             -webkit-text-stroke: 2px rgb(238, 235, 235) !important; 
// // // // // // //                             line-height: 1 !important; 
// // // // // // //                         }

// // // // // // //                         .rts-projects-area .title-style-three .title {
// // // // // // //                             font-size: 36px !important; 
// // // // // // //                         }
// // // // // // //                     }

// // // // // // //                     @media (max-width: 480px) {
// // // // // // //                         .rts-projects-area .rts-watermark-03 {
// // // // // // //                             font-size: 80px !important; 
// // // // // // //                         }
// // // // // // //                     }
// // // // // // //                 `}
// // // // // // //             </style>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default ServiceProjects;





























// // // // // // 'use client';

// // // // // // import React from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import Image from 'next/image';

// // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // import { Navigation, Pagination } from 'swiper/modules';

// // // // // // import 'swiper/css';
// // // // // // import 'swiper/css/navigation';
// // // // // // import 'swiper/css/pagination';

// // // // // // const services = [
// // // // // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/service-details' },
// // // // // //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/business-deligation' },
// // // // // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/pakistan-products' },
// // // // // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/trade-shows' },
// // // // // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/industry-academia' },
// // // // // //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/global-growth' },
// // // // // //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/international-tech' },
// // // // // //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/leadership-incubation' },
// // // // // //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/business-events' },
// // // // // //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/women-empowerment' },
// // // // // //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/bri-centre' },
// // // // // //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/capacity-building' },
// // // // // //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/global-trade' },
// // // // // //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/community-development' },
// // // // // // ];

// // // // // // const ServiceProjects = () => {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className="rts-section-gap">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="title-style-three center">
// // // // // //                 <span className="pre">Shaping a Global Future</span>
// // // // // //                 <div className="bg-title">03</div>
// // // // // //                 <h2 className="title">
// // // // // //                   <span className="solid-text">OUR</span>
// // // // // //                   <span className="outline-text">SERVICES</span>
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="container-1680 mt--40">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="case-studies-wrapper-main-5">
// // // // // //                 <Swiper
// // // // // //                   modules={[Navigation, Pagination]}
// // // // // //                   // 1. Point navigation to custom classes
// // // // // //                   navigation={{
// // // // // //                     prevEl: '.swiper-button-prev-custom',
// // // // // //                     nextEl: '.swiper-button-next-custom',
// // // // // //                   }}
// // // // // //                   // 2. Point pagination to custom class
// // // // // //                   pagination={{ 
// // // // // //                     type: 'fraction',
// // // // // //                     el: '.swiper-pagination-fraction-custom',
// // // // // //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// // // // // //                     formatFractionTotal: (number) => number.toString().padStart(2, '0'),
// // // // // //                   }}
// // // // // //                   spaceBetween={30}
// // // // // //                   slidesPerView={1}
// // // // // //                   breakpoints={{
// // // // // //                     576: { slidesPerView: 2 },
// // // // // //                     992: { slidesPerView: 3 },
// // // // // //                     1600: { slidesPerView: 4 },
// // // // // //                   }}
// // // // // //                   className="mySwiper-case-studies-5"
// // // // // //                 >
// // // // // //                   {services.map((item, index) => (
// // // // // //                     <SwiperSlide key={index}>
// // // // // //                       <div className="single-case-studies-four">
// // // // // //                         <Link href={item.link} className="thumbnail">
// // // // // //                           <Image
// // // // // //                             src={item.img}
// // // // // //                             alt={item.title}
// // // // // //                             width={400}
// // // // // //                             height={300}
// // // // // //                             style={{ width: '100%', height: 'auto' }}
// // // // // //                           />
// // // // // //                         </Link>
// // // // // //                         <div className="inner">
// // // // // //                           <Link href={item.link}>
// // // // // //                             <h3 className="title">{item.title}</h3>
// // // // // //                           </Link>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </SwiperSlide>
// // // // // //                   ))}
// // // // // //                 </Swiper>

// // // // // //                 {/* 3. CUSTOM CONTROLS AREA (Arrows and Fraction) */}
// // // // // //                 <div className="swiper-controls-container">
// // // // // //                     <div className="swiper-button-prev-custom">
// // // // // //                         <i className="far fa-arrow-left"></i>
// // // // // //                     </div>

// // // // // //                     <div className="swiper-pagination-fraction-custom"></div>

// // // // // //                     <div className="swiper-button-next-custom">
// // // // // //                         <i className="far fa-arrow-right"></i>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx global>{`
// // // // // //         .swiper-controls-container {
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             gap: 30px;
// // // // // //             margin-top: 50px;
// // // // // //         }

// // // // // //         /* BUTTON STYLING (Pic 1 Style) */
// // // // // //         .swiper-button-prev-custom,
// // // // // //         .swiper-button-next-custom {
// // // // // //             width: 50px;
// // // // // //             height: 50px;
// // // // // //             background: #ffffff;
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             border-radius: 8px;
// // // // // //             cursor: pointer;
// // // // // //             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // // // //             transition: 0.3s;
// // // // // //             color: #0d1c2e;
// // // // // //             font-size: 18px;
// // // // // //             border: none;
// // // // // //             z-index: 10;
// // // // // //         }

// // // // // //         .swiper-button-prev-custom:hover,
// // // // // //         .swiper-button-next-custom:hover {
// // // // // //             background: #0d1c2e;
// // // // // //             color: #ffffff;
// // // // // //         }

// // // // // //         /* FRACTION STYLING */
// // // // // //         .swiper-pagination-fraction-custom {
// // // // // //             font-size: 20px;
// // // // // //             font-weight: 500;
// // // // // //             color: #0d1c2e;
// // // // // //             width: auto !important;
// // // // // //             position: relative !important;
// // // // // //             display: flex;
// // // // // //             gap: 5px;
// // // // // //         }

// // // // // //         /* Making the first number bold like Pic 1 */
// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // // // //             font-weight: 800;
// // // // // //             color: #0d1c2e;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // // // //             color: #6d767e;
// // // // // //             font-weight: 400;
// // // // // //         }

// // // // // //         /* Hiding Swiper's default icons if any remain */
// // // // // //         .swiper-button-next:after, .swiper-button-prev:after {
// // // // // //             display: none !important;
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       {/* CLIENT AREA */}
// // // // // //       <div className="rts-client-area ptb--100 brand-bg-three bg_image">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="client-three-wrapper">
// // // // // //                 {[1, 2, 3, 4, 5, 6].map((num) => (
// // // // // //                   <div className="single" key={num}>
// // // // // //                     <Image
// // // // // //                       src={`/images/brand/0${num}.webp`}
// // // // // //                       alt="Business client"
// // // // // //                       width={150}
// // // // // //                       height={80}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default ServiceProjects;




// // // // // // 'use client';

// // // // // // import React from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import Image from 'next/image';

// // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // import { Navigation, Pagination } from 'swiper/modules';

// // // // // // import 'swiper/css';
// // // // // // import 'swiper/css/navigation';
// // // // // // import 'swiper/css/pagination';

// // // // // // const services = [
// // // // // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/service-details' },
// // // // // //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/business-deligation' },
// // // // // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/pakistan-products' },
// // // // // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/trade-shows' },
// // // // // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/industry-academia' },
// // // // // //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/global-growth' },
// // // // // //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/international-tech' },
// // // // // //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/leadership-incubation' },
// // // // // //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/business-events' },
// // // // // //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/women-empowerment' },
// // // // // //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/bri-centre' },
// // // // // //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/capacity-building' },
// // // // // //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/global-trade' },
// // // // // //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/community-development' },
// // // // // // ];

// // // // // // const ServiceProjects = () => {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className="rts-section-gap">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="title-style-three center">
// // // // // //                 <span className="pre">Shaping a Global Future</span>
// // // // // //                 <div className="bg-title">03</div>
// // // // // //                 <h2 className="title">
// // // // // //                   <span className="solid-text">OUR</span>
// // // // // //                   <span className="outline-text">SERVICES</span>
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="container-1680 mt--40">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="case-studies-wrapper-main-5">
// // // // // //                 <Swiper
// // // // // //                   modules={[Navigation, Pagination]}
// // // // // //                   navigation={{
// // // // // //                     prevEl: '.swiper-button-prev-custom',
// // // // // //                     nextEl: '.swiper-button-next-custom',
// // // // // //                   }}
// // // // // //                   pagination={{ 
// // // // // //                     type: 'fraction',
// // // // // //                     el: '.swiper-pagination-fraction-custom',
// // // // // //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// // // // // //                     formatFractionTotal: (number) => number.toString().padStart(2, '0'),
// // // // // //                   }}
// // // // // //                   spaceBetween={30}
// // // // // //                   slidesPerView={1}
// // // // // //                   breakpoints={{
// // // // // //                     576: { slidesPerView: 2 },
// // // // // //                     992: { slidesPerView: 3 },
// // // // // //                     1600: { slidesPerView: 4 },
// // // // // //                   }}
// // // // // //                   className="mySwiper-case-studies-5"
// // // // // //                 >
// // // // // //                   {services.map((item, index) => (
// // // // // //                     <SwiperSlide key={index}>
// // // // // //                       <div className="single-case-studies-four">
// // // // // //                         <Link href={item.link} className="thumbnail">
// // // // // //                           <Image
// // // // // //                             src={item.img}
// // // // // //                             alt={item.title}
// // // // // //                             width={400}
// // // // // //                             height={300}
// // // // // //                             style={{ width: '100%', height: 'auto' }}
// // // // // //                           />
// // // // // //                         </Link>
// // // // // //                         <div className="inner">
// // // // // //                           <Link href={item.link}>
// // // // // //                             <h3 className="title">{item.title}</h3>
// // // // // //                           </Link>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </SwiperSlide>
// // // // // //                   ))}
// // // // // //                 </Swiper>

// // // // // //                 <div className="swiper-controls-container">
// // // // // //                     <div className="swiper-button-prev-custom">
// // // // // //                         <i className="far fa-arrow-left"></i>
// // // // // //                     </div>

// // // // // //                     <div className="swiper-pagination-fraction-custom"></div>

// // // // // //                     <div className="swiper-button-next-custom">
// // // // // //                         <i className="far fa-arrow-right"></i>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx global>{`
// // // // // //         .swiper-controls-container {
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             gap: 30px;
// // // // // //             margin-top: 50px;
// // // // // //         }

// // // // // //         .swiper-button-prev-custom,
// // // // // //         .swiper-button-next-custom {
// // // // // //             width: 50px;
// // // // // //             height: 50px;
// // // // // //             background: #ffffff;
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             border-radius: 8px;
// // // // // //             cursor: pointer;
// // // // // //             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // // // //             transition: 0.3s;
// // // // // //             color: #0d1c2e;
// // // // // //             font-size: 18px;
// // // // // //             border: none;
// // // // // //             z-index: 10;
// // // // // //         }

// // // // // //         .swiper-button-prev-custom:hover,
// // // // // //         .swiper-button-next-custom:hover {
// // // // // //             background: #0d1c2e;
// // // // // //             color: #ffffff;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom {
// // // // // //             font-size: 20px;
// // // // // //             font-weight: 500;
// // // // // //             color: #0d1c2e;
// // // // // //             width: auto !important;
// // // // // //             position: relative !important;
// // // // // //             display: flex;
// // // // // //             gap: 5px;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // // // //             font-weight: 800;
// // // // // //             color: #0d1c2e;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // // // //             color: #6d767e;
// // // // // //             font-weight: 400;
// // // // // //         }

// // // // // //         .swiper-button-next:after, .swiper-button-prev:after {
// // // // // //             display: none !important;
// // // // // //         }

// // // // // //         /* --- RESPONSIVE MOBILE VIEW --- */
// // // // // //         @media (max-width: 768px) {
// // // // // //           /* Heading and Watermark responsiveness */
// // // // // //           .title-style-three .bg-title {
// // // // // //             font-size: 70px !important; /* Smaller watermark */
// // // // // //             top: 10px !important;
// // // // // //             line-height: 1;
// // // // // //           }

// // // // // //           .title-style-three .title {
// // // // // //             font-size: 32px !important; /* Smaller main title */
// // // // // //             line-height: 1.2;
// // // // // //           }

// // // // // //           .title-style-three .pre {
// // // // // //             font-size: 14px !important;
// // // // // //             margin-bottom: 10px;
// // // // // //           }

// // // // // //           /* Swiper Controls responsiveness */
// // // // // //           .swiper-controls-container {
// // // // // //             gap: 15px;
// // // // // //             margin-top: 30px;
// // // // // //           }

// // // // // //           .swiper-button-prev-custom,
// // // // // //           .swiper-button-next-custom {
// // // // // //             width: 40px;
// // // // // //             height: 40px;
// // // // // //             font-size: 14px;
// // // // // //           }

// // // // // //           .swiper-pagination-fraction-custom {
// // // // // //             font-size: 16px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 480px) {
// // // // // //           .title-style-three .title {
// // // // // //             font-size: 26px !important; /* Extra small screens */
// // // // // //           }
// // // // // //           .title-style-three .bg-title {
// // // // // //             font-size: 50px !important;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="rts-client-area ptb--100 brand-bg-three bg_image">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="client-three-wrapper">
// // // // // //                 {[1, 2, 3, 4, 5, 6].map((num) => (
// // // // // //                   <div className="single" key={num}>
// // // // // //                     <Image
// // // // // //                       src={`/images/brand/0${num}.webp`}
// // // // // //                       alt="Business client"
// // // // // //                       width={150}
// // // // // //                       height={80}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default ServiceProjects;



// // // // // // 'use client';

// // // // // // import React from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import Image from 'next/image';

// // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // import { Navigation, Pagination } from 'swiper/modules';

// // // // // // import 'swiper/css';
// // // // // // import 'swiper/css/navigation';
// // // // // // import 'swiper/css/pagination';

// // // // // // const services = [
// // // // // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/service-details' },
// // // // // //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/business-deligation' },
// // // // // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/pakistan-products' },
// // // // // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/trade-shows' },
// // // // // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/industry-academia' },
// // // // // //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/global-growth' },
// // // // // //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/international-tech' },
// // // // // //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/leadership-incubation' },
// // // // // //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/business-events' },
// // // // // //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/women-empowerment' },
// // // // // //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/bri-centre' },
// // // // // //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/capacity-building' },
// // // // // //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/global-trade' },
// // // // // //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/community-development' },
// // // // // // ];

// // // // // // const ServiceProjects = () => {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className="rts-section-gap">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="title-style-three center">
// // // // // //                 <span className="pre">Shaping a Global Future</span>
// // // // // //                 <div className="bg-title" 
// // // // // //                 style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',}}>03</div>
// // // // // //                 <h2 className="title">
// // // // // //                   <span className="solid-text">OUR</span>
// // // // // //                   <span className="outline-text">SERVICES</span>
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="container-1680 mt--40">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="case-studies-wrapper-main-5">
// // // // // //                 <Swiper
// // // // // //                   modules={[Navigation, Pagination]}
// // // // // //                   navigation={{
// // // // // //                     prevEl: '.swiper-button-prev-custom',
// // // // // //                     nextEl: '.swiper-button-next-custom',
// // // // // //                   }}
// // // // // //                   pagination={{ 
// // // // // //                     type: 'fraction',
// // // // // //                     el: '.swiper-pagination-fraction-custom',
// // // // // //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// // // // // //                     formatFractionTotal: (number) => number.toString().padStart(2, '0'),
// // // // // //                   }}
// // // // // //                   spaceBetween={30}
// // // // // //                   slidesPerView={1}
// // // // // //                   breakpoints={{
// // // // // //                     576: { slidesPerView: 2 },
// // // // // //                     992: { slidesPerView: 3 },
// // // // // //                     1600: { slidesPerView: 4 },
// // // // // //                   }}
// // // // // //                   className="mySwiper-case-studies-5"
// // // // // //                 >
// // // // // //                   {services.map((item, index) => (
// // // // // //                     <SwiperSlide key={index}>
// // // // // //                       <div className="single-case-studies-four">
// // // // // //                         <Link href={item.link} className="thumbnail">
// // // // // //                           <Image
// // // // // //                             src={item.img}
// // // // // //                             alt={item.title}
// // // // // //                             width={400}
// // // // // //                             height={300}
// // // // // //                             style={{ width: '100%', height: 'auto' }}
// // // // // //                           />
// // // // // //                         </Link>
// // // // // //                         <div className="inner">
// // // // // //                           <Link href={item.link}>
// // // // // //                             <h3 className="title">{item.title}</h3>
// // // // // //                           </Link>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </SwiperSlide>
// // // // // //                   ))}
// // // // // //                 </Swiper>

// // // // // //                 <div className="swiper-controls-container">
// // // // // //                     <div className="swiper-button-prev-custom">
// // // // // //                         <i className="far fa-arrow-left"></i>
// // // // // //                     </div>

// // // // // //                     <div className="swiper-pagination-fraction-custom"></div>

// // // // // //                     <div className="swiper-button-next-custom">
// // // // // //                         <i className="far fa-arrow-right"></i>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx global>{`
// // // // // //         .swiper-controls-container {
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             gap: 30px;
// // // // // //             margin-top: 50px;
// // // // // //         }

// // // // // //         .swiper-button-prev-custom,
// // // // // //         .swiper-button-next-custom {
// // // // // //             width: 50px;
// // // // // //             height: 50px;
// // // // // //             background: #ffffff;
// // // // // //             display: flex;
// // // // // //             align-items: center;
// // // // // //             justify-content: center;
// // // // // //             border-radius: 8px;
// // // // // //             cursor: pointer;
// // // // // //             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // // // //             transition: 0.3s;
// // // // // //             color: #0d1c2e;
// // // // // //             font-size: 18px;
// // // // // //             border: none;
// // // // // //             z-index: 10;
// // // // // //         }

// // // // // //         .swiper-button-prev-custom:hover,
// // // // // //         .swiper-button-next-custom:hover {
// // // // // //             background: #0d1c2e;
// // // // // //             color: #ffffff;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom {
// // // // // //             font-size: 20px;
// // // // // //             font-weight: 500;
// // // // // //             color: #0d1c2e;
// // // // // //             width: auto !important;
// // // // // //             position: relative !important;
// // // // // //             display: flex;
// // // // // //             gap: 5px;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // // // //             font-weight: 800;
// // // // // //             color: #0d1c2e;
// // // // // //         }

// // // // // //         .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // // // //             color: #6d767e;
// // // // // //             font-weight: 400;
// // // // // //         }

// // // // // //         .swiper-button-next:after, .swiper-button-prev:after {
// // // // // //             display: none !important;
// // // // // //         }

// // // // // //         /* --- RESPONSIVE MOBILE UPDATES --- */
// // // // // //         @media (max-width: 768px) {
// // // // // //           /* Heading and Watermark */
// // // // // //           .title-style-three .bg-title {
// // // // // //             font-size: 80px !important; /* Smaller Watermark */
// // // // // //             top: 5px !important;
// // // // // //             opacity: 0.8; /* Slightly fainter */

// // // // // //           }

// // // // // //           .title-style-three .title {
// // // // // //             font-size: 28px !important; /* Adjusted heading size */
// // // // // //           }

// // // // // //           .title-style-three .pre {
// // // // // //             font-size: 13px !important;
// // // // // //             margin-bottom: 5px;
// // // // // //           }

// // // // // //           .container-1680.mt--40 {
// // // // // //             margin-top: 20px !important; /* Lowered gap above cards */
// // // // // //           }

// // // // // //           /* REDUCED GAP BETWEEN CARDS AND COUNTER */
// // // // // //           .swiper-controls-container {
// // // // // //             gap: 15px;
// // // // // //             margin-top: 20px !important; /* Much lower gap to match your request */
// // // // // //           }

// // // // // //           .swiper-button-prev-custom,
// // // // // //           .swiper-button-next-custom {
// // // // // //             width: 42px;
// // // // // //             height: 42px;
// // // // // //             font-size: 14px;
// // // // // //           }

// // // // // //           .swiper-pagination-fraction-custom {
// // // // // //             font-size: 15px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 480px) {
// // // // // //           .title-style-three .title {
// // // // // //             font-size: 24px !important;
// // // // // //           }
// // // // // //           .title-style-three .bg-title {
// // // // // //             font-size: 45px !important;
// // // // // //           }
// // // // // //           .swiper-controls-container {
// // // // // //             margin-top: 15px !important; /* Tightest gap for small screens */
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="rts-client-area ptb--100 brand-bg-three bg_image">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="client-three-wrapper">
// // // // // //                 {[1, 2, 3, 4, 5, 6].map((num) => (
// // // // // //                   <div className="single" key={num}>
// // // // // //                     <Image
// // // // // //                       src={`/images/brand/0${num}.webp`}
// // // // // //                       alt="Business client"
// // // // // //                       width={150}
// // // // // //                       height={80}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default ServiceProjects;


// // // // // 'use client';

// // // // // import React from 'react';
// // // // // import Link from 'next/link';
// // // // // import Image from 'next/image';

// // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // import { Navigation, Pagination } from 'swiper/modules';

// // // // // import 'swiper/css';
// // // // // import 'swiper/css/navigation';
// // // // // import 'swiper/css/pagination';

// // // // // const services = [
// // // // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
// // // // //    {  title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
// // // // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
// // // // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
// // // // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
// // // // //   {  title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
// // // // //     { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
// // // // //     { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
// // // // //     {  title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
// // // // //     {  title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
// // // // //     { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
// // // // //     {  title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
// // // // //     {  title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
// // // // //     {  title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
// // // // // ];



// // // // // const ServiceProjects = () => {
// // // // //   return (
// // // // //     <>
// // // // //       <div className="rts-section-gap">
// // // // //         <div className="container">
// // // // //           <div className="row">
// // // // //             <div className="col-lg-12">
// // // // //               <div className="title-style-three center">
// // // // //                 <span className="pre">Shaping a Global Future</span>
// // // // //                 <div className="bg-title" 
// // // // //                 style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',}}>03</div>
// // // // //                 <h2 className="title">
// // // // //                   <span className="solid-text">OUR</span>
// // // // //                   <span className="outline-text">SERVICES</span>
// // // // //                 </h2>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="container-1680 mt--40">
// // // // //           <div className="row">
// // // // //             <div className="col-lg-12">
// // // // //               <div className="case-studies-wrapper-main-5">
// // // // //                 <Swiper
// // // // //                   modules={[Navigation, Pagination]}
// // // // //                   navigation={{
// // // // //                     prevEl: '.swiper-button-prev-custom',
// // // // //                     nextEl: '.swiper-button-next-custom',
// // // // //                   }}
// // // // //                   pagination={{ 
// // // // //                     type: 'fraction',
// // // // //                     el: '.swiper-pagination-fraction-custom',
// // // // //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// // // // //                     formatFractionTotal: (number) => number.toString().padStart(2, '0'),
// // // // //                   }}
// // // // //                   spaceBetween={30}
// // // // //                   slidesPerView={1}
// // // // //                   breakpoints={{
// // // // //                     576: { slidesPerView: 2 },
// // // // //                     992: { slidesPerView: 3 },
// // // // //                     1600: { slidesPerView: 4 },
// // // // //                   }}
// // // // //                   className="mySwiper-case-studies-5"
// // // // //                 >
// // // // //                   {services.map((item, index) => (
// // // // //                     <SwiperSlide key={index}>
// // // // //                       <div className="single-case-studies-four">
// // // // //                         <Link href={item.link} className="thumbnail">
// // // // //                           <Image
// // // // //                             src={item.img}
// // // // //                             alt={item.title}
// // // // //                             width={400}
// // // // //                             height={300}
// // // // //                             style={{ width: '100%', height: 'auto' }}
// // // // //                           />
// // // // //                         </Link>
// // // // //                         <div className="inner">
// // // // //                           <Link href={item.link}>
// // // // //                             <h3 className="title">{item.title}</h3>
// // // // //                           </Link>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </SwiperSlide>
// // // // //                   ))}
// // // // //                 </Swiper>

// // // // //                 <div className="swiper-controls-container">
// // // // //                     <div className="swiper-button-prev-custom">
// // // // //                         <i className="far fa-arrow-left"></i>
// // // // //                     </div>

// // // // //                     <div className="swiper-pagination-fraction-custom"></div>

// // // // //                     <div className="swiper-button-next-custom">
// // // // //                         <i className="far fa-arrow-right"></i>
// // // // //                     </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx global>{`
// // // // //         .swiper-controls-container {
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             justify-content: center;
// // // // //             gap: 30px;
// // // // //             margin-top: 50px;
// // // // //         }

// // // // //         .swiper-button-prev-custom,
// // // // //         .swiper-button-next-custom {
// // // // //             width: 50px;
// // // // //             height: 50px;
// // // // //             background: #ffffff;
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             justify-content: center;
// // // // //             border-radius: 8px;
// // // // //             cursor: pointer;
// // // // //             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // // //             transition: 0.3s;
// // // // //             color: #0d1c2e;
// // // // //             font-size: 18px;
// // // // //             border: none;
// // // // //             z-index: 10;
// // // // //         }

// // // // //         .swiper-button-prev-custom:hover,
// // // // //         .swiper-button-next-custom:hover {
// // // // //             background: #0d1c2e;
// // // // //             color: #ffffff;
// // // // //         }

// // // // //         .swiper-pagination-fraction-custom {
// // // // //             font-size: 20px;
// // // // //             font-weight: 500;
// // // // //             color: #0d1c2e;
// // // // //             width: auto !important;
// // // // //             position: relative !important;
// // // // //             display: flex;
// // // // //             gap: 5px;
// // // // //         }

// // // // //         .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // // //             font-weight: 800;
// // // // //             color: #0d1c2e;
// // // // //         }

// // // // //         .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // // //             color: #6d767e;
// // // // //             font-weight: 400;
// // // // //         }

// // // // //         .swiper-button-next:after, .swiper-button-prev:after {
// // // // //             display: none !important;
// // // // //         }

// // // // //         /* --- RESPONSIVE MOBILE UPDATES --- */
// // // // //         @media (max-width: 768px) {
// // // // //           .title-style-three .bg-title {
// // // // //             font-size: 80px !important; 
// // // // //             top: 5px !important;
// // // // //             opacity: 0.8; 
// // // // //           }

// // // // //           .title-style-three .title {
// // // // //             font-size: 28px !important;
// // // // //           }

// // // // //           .title-style-three .pre {
// // // // //             font-size: 13px !important;
// // // // //             margin-bottom: 5px;
// // // // //           }

// // // // //           .container-1680.mt--40 {
// // // // //             margin-top: 20px !important; 
// // // // //           }

// // // // //           .swiper-controls-container {
// // // // //             margin-top: 5px !important; 
// // // // //       margin-bottom: 15px !important; /* REDUCED GAP from buttons to images */
// // // // //       padding-bottom: 20px;           /* ADDED PADDING at bottom for cleaner look */
// // // // //       gap: 10px;
// // // // //           }

// // // // //           .swiper-button-prev-custom,
// // // // //           .swiper-button-next-custom {
// // // // //             width: 42px;
// // // // //             height: 42px;
// // // // //             font-size: 14px;
// // // // //           }

// // // // //           .swiper-pagination-fraction-custom {
// // // // //             font-size: 15px;
// // // // //           }
// // // // //         }

// // // // //         @media (max-width: 480px) {
// // // // //           .title-style-three .title {
// // // // //             font-size: 24px !important;
// // // // //           }
// // // // //           .title-style-three .bg-title {
// // // // //             font-size: 45px !important;
// // // // //           }
// // // // //           .swiper-controls-container {
// // // // //             margin-top: 15px !important;
// // // // //           }
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="rts-client-area ptb--100 brand-bg-three bg_image">
// // // // //         <div className="container">
// // // // //           <div className="row">
// // // // //             <div className="col-lg-12">
// // // // //               <div className="client-three-wrapper">
// // // // //                 {[1, 2, 3, 4, 5, 6].map((num) => (
// // // // //                   <div className="single" key={num}>
// // // // //                     <Image
// // // // //                       src={`/images/brand/0${num}.webp`}
// // // // //                       alt="Business client"
// // // // //                       width={150}
// // // // //                       height={80}
// // // // //                     />
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default ServiceProjects;









// // // // 'use client';

// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import Image from 'next/image';

// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Navigation, Pagination } from 'swiper/modules';

// // // // import 'swiper/css';
// // // // import 'swiper/css/navigation';
// // // // import 'swiper/css/pagination';

// // // // const services = [
// // // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
// // // //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
// // // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
// // // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
// // // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
// // // //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
// // // //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
// // // //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
// // // //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
// // // //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
// // // //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
// // // //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
// // // //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
// // // //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
// // // // ];

// // // // const ServiceProjects = () => {
// // // //   return (
// // // //     <>
// // // //       <div className="rts-section-gap">
// // // //         <div className="container">
// // // //           <div className="row">
// // // //             <div className="col-lg-12">
// // // //               <div className="title-style-three center">
// // // //                 <span className="pre">Shaping a Global Future</span>
// // // //                 <div className="bg-title watermark-service">03</div>
// // // //                 <h2 className="title">
// // // //                   <span className="solid-text">OUR</span>
// // // //                   <span className="outline-text">SERVICES</span>
// // // //                 </h2>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="container-1680 mt--40">
// // // //           <div className="row">
// // // //             <div className="col-lg-12">
// // // //               <div className="case-studies-wrapper-main-5">
// // // //                 <Swiper
// // // //                   modules={[Navigation, Pagination]}
// // // //                   navigation={{
// // // //                     prevEl: '.swiper-button-prev-custom',
// // // //                     nextEl: '.swiper-button-next-custom',
// // // //                   }}
// // // //                   pagination={{
// // // //                     type: 'fraction',
// // // //                     el: '.swiper-pagination-fraction-custom',
// // // //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// // // //                     formatFractionTotal: (number) => number.toString().padStart(2, '0'),
// // // //                   }}
// // // //                   spaceBetween={30}
// // // //                   slidesPerView={1}
// // // //                   breakpoints={{
// // // //                     576: { slidesPerView: 2 },
// // // //                     992: { slidesPerView: 3 },
// // // //                     1600: { slidesPerView: 4 },
// // // //                   }}
// // // //                   className="mySwiper-case-studies-5"
// // // //                 >
// // // //                   {services.map((item, index) => (
// // // //                     <SwiperSlide key={index}>
// // // //                       <div className="single-case-studies-four">
// // // //                         <Link href={item.link} className="thumbnail">
// // // //                           <Image
// // // //                             src={item.img}
// // // //                             alt={item.title}
// // // //                             width={400}
// // // //                             height={300}
// // // //                             style={{ width: '100%', height: 'auto' }}
// // // //                           />
// // // //                         </Link>
// // // //                         <div className="inner">
// // // //                           <Link href={item.link}>
// // // //                             <h3 className="title">{item.title}</h3>
// // // //                           </Link>
// // // //                         </div>
// // // //                       </div>
// // // //                     </SwiperSlide>
// // // //                   ))}
// // // //                 </Swiper>

// // // //                 <div className="swiper-controls-container">
// // // //                   <div className="swiper-button-prev-custom">
// // // //                     <i className="far fa-arrow-left"></i>
// // // //                   </div>

// // // //                   <div className="swiper-pagination-fraction-custom"></div>

// // // //                   <div className="swiper-button-next-custom">
// // // //                     <i className="far fa-arrow-right"></i>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ================== GLOBAL STYLES ================== */}
// // // //       <style jsx global>{`
// // // //         /* Watermark for Services Section - Adjusted to bring it down */
// // // // .bg-title.watermark-service {
// // // //     position: absolute;
// // // //     /* 0% se barha kar 10% ya 20% karein niche lane ke liye */
// // // //     top: 5% !important; 
// // // //     left: 50% !important;
// // // //     /* Transform ko wahi rehne dein center alignment ke liye */
// // // //     transform: translate(-50%, -50%) !important;
    
// // // //     font-size: 150px;
// // // //     font-weight: 900;
// // // //     color: transparent;
// // // //     -webkit-text-fill-color: transparent;
// // // //     -webkit-text-stroke: 3px #f5f0f0ff;
// // // //     opacity: 0.3;
// // // //     z-index: 0;
// // // //     line-height: 1;
// // // //     padding: 5px 0;
// // // //     display: block;
// // // // }
// // // //         /* Title & Pretext */
// // // //         .title-style-three .title {
// // // //           font-size: 60px;
// // // //           font-weight: 900; 
// // // //           text-transform: uppercase;
// // // //           display: inline-block;
// // // //           margin: 0;
// // // //         }
// // // //         .title-style-three .solid-text {
// // // //           color: #0d1c2e; 
// // // //         }
// // // //         .title-style-three .outline-text {
// // // //           color: transparent;
// // // //           -webkit-text-stroke: 1.5px #0d1c2e; 
// // // //           text-stroke: 1.5px #0d1c2e;
// // // //           margin-left: 10px;
// // // //         }
// // // //         .title-style-three .pre {
// // // //           display: block;
// // // //           font-size: 14px;
// // // //           letter-spacing: 2px;
// // // //           color: #666;
// // // //           margin-bottom: 10px;
// // // //         }
// // // //         .title-style-three.center {
// // // //           text-align: center;
// // // //         }

// // // //         /* Swiper controls */
// // // //         .swiper-controls-container {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           gap: 30px;
// // // //           margin-top: 50px;
// // // //         }
// // // //         .swiper-button-prev-custom,
// // // //         .swiper-button-next-custom {
// // // //           width: 50px;
// // // //           height: 50px;
// // // //           background: #ffffff;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           border-radius: 8px;
// // // //           cursor: pointer;
// // // //           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // //           transition: 0.3s;
// // // //           color: #0d1c2e;
// // // //           font-size: 18px;
// // // //           border: none;
// // // //           z-index: 10;
// // // //         }
// // // //         .swiper-button-prev-custom:hover,
// // // //         .swiper-button-next-custom:hover {
// // // //           background: #0d1c2e;
// // // //           color: #ffffff;
// // // //         }
// // // //         .swiper-pagination-fraction-custom {
// // // //           font-size: 20px;
// // // //           font-weight: 500;
// // // //           color: #0d1c2e;
// // // //           width: auto !important;
// // // //           position: relative !important;
// // // //           display: flex;
// // // //           gap: 5px;
// // // //         }
// // // //         .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // //           font-weight: 800;
// // // //           color: #0d1c2e;
// // // //         }
// // // //         .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // //           color: #6d767e;
// // // //           font-weight: 400;
// // // //         }
// // // //         .swiper-button-next:after, .swiper-button-prev:after {
// // // //           display: none !important;
// // // //         }
// // // //           .swiper-pagination-fraction-custom {
// // // //   font-size: 20px;
// // // //   font-weight: 500;
// // // //   color: #0d1c2e;
// // // //   width: auto !important;
// // // //   position: relative !important;
// // // //   display: flex;
// // // //   gap: 5px;
// // // // }


// // // //         /* ======= RESPONSIVE ======= */
// // // //         @media (max-width: 768px) {
// // // //           .bg-title.watermark-service {
// // // //             font-size: 80px !important;
// // // //             top: 5px !important;
// // // //             opacity: 0.8;
// // // //           }
// // // //           .title-style-three .title { font-size: 28px !important; }
// // // //           .title-style-three .pre { font-size: 13px !important; margin-bottom: 5px; }
// // // //           .container-1680.mt--40 { margin-top: 20px !important; }
// // // //           .swiper-controls-container { margin-top: 5px !important; gap: 10px; }
// // // //           .swiper-button-prev-custom,
// // // //           .swiper-button-next-custom { width: 42px; height: 42px; font-size: 14px; }
// // // //           .swiper-pagination-fraction-custom { font-size: 15px; }
// // // //         }

// // // //         @media (max-width: 480px) {
// // // //           .title-style-three .title { font-size: 24px !important; }
// // // //           .bg-title.watermark-service { font-size: 45px !important; }
// // // //           .swiper-controls-container { margin-top: 15px !important; }
// // // //         }
// // // //         @media (max-width: 768px) {
// // // //   /* Watermark fix */
// // // //   .bg-title.watermark-service { 
// // // //     font-size: 80px !important; 
// // // //     top: 5px !important; 
// // // //     opacity: 0.8; 
// // // //   }

// // // //   /* 1. Container ke neeche gap barhane ke liye */
// // // //   .rts-section-gap {
// // // //     padding-bottom: 100px !important; /* Is value ko barha dein jitna gap chahiye */
// // // //   }

// // // //   /* 2. Arrows aur Counter ko upar move karne ke liye */
// // // //   .swiper-controls-container { 
// // // //     margin-top: -30px !important; /* Negative margin se ye slides ke kareeb upar chala jayega */
// // // //     gap: 15px; 
// // // //     position: relative;
// // // //     z-index: 20;
// // // //   }

// // // //   /* Layout thora saaf karne ke liye */
// // // //   .title-style-three .title { font-size: 28px !important; }
// // // //   .swiper-button-prev-custom, .swiper-button-next-custom { width: 45px; height: 45px; }
// // // // }t
// // // //       `}</style>
     
// // // // <style jsx global>{`
// // // //   /* 1. Watermark Styling (Desktop & Mobile Fix) */
// // // //   .bg-title.watermark-service {
// // // //     position: absolute;
// // // //     top: 5% !important; /* Desktop view */
// // // //     left: 50% !important;
// // // //     transform: translate(-50%, -50%) !important;
// // // //     font-size: 150px;
// // // //     font-weight: 900;
// // // //     color: transparent;
// // // //     -webkit-text-fill-color: transparent;
// // // //     -webkit-text-stroke: 3px #f5f0f0ff;
// // // //     opacity: 0.3;
// // // //     z-index: 0;
// // // //     line-height: 1;
// // // //     display: block;
// // // //   }

// // // //   /* 2. Swiper Controls Container (The Flexbox Fix) */
// // // //   .swiper-controls-container {
// // // //     display: flex;
// // // //     align-items: center;      /* Vertically aligns arrows and counter */
// // // //     justify-content: center;   /* Horizontally centers everything */
// // // //     gap: 30px;
// // // //     margin-top: 50px;
// // // //     height: 50px;             /* Match this with arrow height */
// // // //   }

// // // //   /* 3. Arrows Styling */
// // // //   .swiper-button-prev-custom,
// // // //   .swiper-button-next-custom {
// // // //     width: 50px;
// // // //     height: 50px;
// // // //     background: #ffffff;
// // // //     display: flex;
// // // //     align-items: center;
// // // //     justify-content: center;
// // // //     border-radius: 8px;
// // // //     cursor: pointer;
// // // //     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // // //     transition: 0.3s;
// // // //     color: #0d1c2e;
// // // //     font-size: 18px;
// // // //     border: none;
// // // //     z-index: 10;
// // // //   }

// // // //   /* 4. Counter / Pagination Styling (Equal Height Fix) */
// // // //   .swiper-pagination-fraction-custom {
// // // //     font-size: 20px;
// // // //     font-weight: 500;
// // // //     color: #0d1c2e;
// // // //     width: auto !important;
// // // //     position: relative !important;
// // // //     display: flex;
// // // //     align-items: center;      /* Centers text between arrows vertically */
// // // //     gap: 8px;
// // // //     line-height: 1;           /* Ensures text doesn't jump up */
// // // //     margin: 0;
// // // //     margin-top:10px;
// // // //   }

// // // //   .swiper-pagination-fraction-custom .swiper-pagination-current {
// // // //     font-weight: 800;
// // // //     color: #0d1c2e;
// // // //   }

// // // //   .swiper-pagination-fraction-custom .swiper-pagination-total {
// // // //     color: #6d767e;
// // // //     font-weight: 400;
// // // //   }

// // // //   /* ======= RESPONSIVE / MOBILE VIEW ======= */
// // // //   @media (max-width: 768px) {
// // // //     /* Watermark ko mobile par thora neeche laane ke liye */
// // // //     .bg-title.watermark-service {
// // // //       font-size: 80px !important;
// // // //       top: 15% !important;    /* Pehle 5px tha, ab thora neeche move kiya hai */
// // // //       opacity: 0.6;
// // // //     }

// // // //     /* Counter alignment for mobile */
// // // //     .swiper-controls-container {
// // // //       margin-top: 20px !important; 
// // // //       gap: 15px; 
// // // //       height: 45px;
// // // //     }

// // // //     .swiper-button-prev-custom,
// // // //     .swiper-button-next-custom {
// // // //       width: 45px;
// // // //       height: 45px;
// // // //     }

// // // //     .swiper-pagination-fraction-custom {
// // // //       font-size: 16px;
// // // //       margin-top:10px;
// // // //     }

// // // //     .rts-section-gap {
// // // //       padding-bottom: 80px !important;
// // // //     }
// // // //   }
// // // // `}</style>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ServiceProjects;








// // // 'use client';

// // // import React, { useState } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';

// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Navigation, Pagination } from 'swiper/modules';

// // // import 'swiper/css';
// // // import 'swiper/css/navigation';
// // // import 'swiper/css/pagination';

// // // const services = [
// // //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
// // //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
// // //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
// // //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
// // //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
// // //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
// // //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
// // //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
// // //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
// // //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
// // //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
// // //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
// // //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
// // //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
// // // ];

// // // const ServiceProjects = () => {
// // //   const [activeSlide, setActiveSlide] = useState(1);

// // //   return (
// // //     <>
// // //       <div className="rts-section-gap">
// // //         <div className="container">
// // //           <div className="row">
// // //             <div className="col-lg-12">
// // //               <div className="title-style-three center">
// // //                 <span className="pre">Shaping a Global Future</span>
// // //                 <div className="bg-title watermark-service">03</div>
// // //                 <h2 className="title">
// // //                   <span className="solid-text">OUR</span>
// // //                   <span className="outline-text">SERVICES</span>
// // //                 </h2>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="container-1680 mt--40">
// // //           <div className="row">
// // //             <div className="col-lg-12">
// // //               <div className="case-studies-wrapper-main-5">
// // //                 <Swiper
// // //                   modules={[Navigation, Pagination]}
// // //                   onSlideChange={(swiper) => setActiveSlide(swiper.realIndex + 1)}
// // //                   navigation={{
// // //                     prevEl: '.swiper-button-prev-custom',
// // //                     nextEl: '.swiper-button-next-custom',
// // //                   }}
// // //                   spaceBetween={30}
// // //                   slidesPerView={1}
// // //                   breakpoints={{
// // //                     576: { slidesPerView: 2 },
// // //                     992: { slidesPerView: 3 },
// // //                     1600: { slidesPerView: 4 },
// // //                   }}
// // //                   className="mySwiper-case-studies-5"
// // //                 >
// // //                   {services.map((item, index) => (
// // //                     <SwiperSlide key={index}>
// // //                       <div className="single-case-studies-four">
// // //                         <Link href={item.link} className="thumbnail">
// // //                           <Image
// // //                             src={item.img}
// // //                             alt={item.title}
// // //                             width={400}
// // //                             height={300}
// // //                             style={{ width: '100%', height: 'auto' }}
// // //                           />
// // //                         </Link>
// // //                         <div className="inner">
// // //                           <Link href={item.link}>
// // //                             <h3 className="title">{item.title}</h3>
// // //                           </Link>
// // //                         </div>
// // //                       </div>
// // //                     </SwiperSlide>
// // //                   ))}
// // //                 </Swiper>

// // //                 <div className="swiper-controls-container">
// // //                   <div className="swiper-button-prev-custom">
// // //                     <i className="far fa-arrow-left"></i>
// // //                   </div>

// // //                   <div className="swiper-pagination-fraction-custom">
// // //                     <span className="swiper-pagination-current">
// // //                       {activeSlide.toString().padStart(2, '0')}
// // //                     </span>
// // //                     <span className="separator">/</span>
// // //                     <span className="swiper-pagination-total">
// // //                       {services.length.toString().padStart(2, '0')}
// // //                     </span>
// // //                   </div>

// // //                   <div className="swiper-button-next-custom">
// // //                     <i className="far fa-arrow-right"></i>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx global>{`
// // //         .bg-title.watermark-service {
// // //           position: absolute;
// // //           top: 5% !important;
// // //           left: 50% !important;
// // //           transform: translate(-50%, -50%) !important;
// // //           font-size: 150px;
// // //           font-weight: 900;
// // //           color: transparent;
// // //           -webkit-text-fill-color: transparent;
// // //           -webkit-text-stroke: 3px #f5f0f0ff;
// // //           opacity: 0.3;
// // //           z-index: 0;
// // //           line-height: 1;
// // //           display: block;
// // //         }

// // //         .title-style-three .title {
// // //           font-size: 60px;
// // //           font-weight: 900;
// // //           text-transform: uppercase;
// // //           display: inline-block;
// // //           margin: 0;
// // //         }

// // //         .title-style-three .solid-text { color: #0d1c2e; }
// // //         .title-style-three .outline-text {
// // //           color: transparent;
// // //           -webkit-text-stroke: 1.5px #0d1c2e;
// // //           text-stroke: 1.5px #0d1c2e;
// // //           margin-left: 10px;
// // //         }

// // //         .swiper-controls-container {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           gap: 30px;
// // //           margin-top: 50px;
// // //         }

// // //         .swiper-button-prev-custom,
// // //         .swiper-button-next-custom {
// // //           width: 50px;
// // //           height: 50px;
// // //           background: #ffffff;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           border-radius: 8px;
// // //           cursor: pointer;
// // //           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// // //           color: #0d1c2e;
// // //           border: none;
// // //         }

// // //         .swiper-pagination-fraction-custom {
// // //           font-size: 20px;
// // //           font-weight: 500;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           color: #0d1c2e;
// // //         }

// // //         .swiper-pagination-current { font-weight: 800; }
// // //         .swiper-pagination-total { color: #6d767e; font-weight: 400; }

// // //         @media (max-width: 768px) {
// // //           .bg-title.watermark-service { font-size: 80px !important; top: 15% !important; }
// // //           .title-style-three .title { font-size: 28px !important; }
// // //           .swiper-controls-container { margin-top: 20px !important; gap: 15px; }
// // //           .swiper-button-prev-custom, .swiper-button-next-custom { width: 45px; height: 45px; }
// // //         }
          
          
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default ServiceProjects;


// // 'use client';

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';

// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination } from 'swiper/modules';

// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';

// // const services = [
// //   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
// //   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
// //   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
// //   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
// //   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
// //   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
// //   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
// //   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
// //   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
// //   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
// //   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
// //   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
// //   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
// //   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
// // ];

// // const ServiceProjects = () => {
// //   return (
// //     <>
// //       <div className="rts-section-gap">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="title-style-three center">
// //                 <span className="pre">Shaping a Global Future</span>
// //                 <div className="bg-title watermark-service">03</div>
// //                 <h2 className="title">
// //                   <span className="solid-text">OUR</span>
// //                   <span className="outline-text">SERVICES</span>
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="container-1680 mt--40">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="case-studies-wrapper-main-5">
// //                 <Swiper
// //                   modules={[Navigation, Pagination]}
// //                   navigation={{
// //                     prevEl: '.swiper-button-prev-custom',
// //                     nextEl: '.swiper-button-next-custom',
// //                   }}
// //                   pagination={{
// //                     type: 'fraction',
// //                     el: '.swiper-pagination-fraction-custom',
// //                     formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
// //                     // This forces the total to always stay at 14 regardless of view
// //                     renderFraction: function (currentClass, totalClass) {
// //                         return `<span class="${currentClass}"></span> / <span class="${totalClass}">${services.length.toString().padStart(2, '0')}</span>`;
// //                     }
// //                   }}
// //                   // Crucial settings to fix the "Stuck at 12" issue:
// //                   loop={true}
// //                   slidesPerGroup={1}
// //                   spaceBetween={30}
// //                   slidesPerView={1}
// //                   breakpoints={{
// //                     576: { slidesPerView: 2, slidesPerGroup: 1 },
// //                     992: { slidesPerView: 3, slidesPerGroup: 1 },
// //                     1600: { slidesPerView: 4, slidesPerGroup: 1 },
// //                   }}
// //                   className="mySwiper-case-studies-5"
// //                 >
// //                   {services.map((item, index) => (
// //                     <SwiperSlide key={index}>
// //                       <div className="single-case-studies-four">
// //                         <Link href={item.link} className="thumbnail">
// //                           <Image
// //                             src={item.img}
// //                             alt={item.title}
// //                             width={400}
// //                             height={300}
// //                             style={{ width: '100%', height: 'auto' }}
// //                           />
// //                         </Link>
// //                         <div className="inner">
// //                           <Link href={item.link}>
// //                             <h3 className="title">{item.title}</h3>
// //                           </Link>
// //                         </div>
// //                       </div>
// //                     </SwiperSlide>
// //                   ))}
// //                 </Swiper>

// //                 <div className="swiper-controls-container">
// //                   <div className="swiper-button-prev-custom">
// //                     <i className="far fa-arrow-left"></i>
// //                   </div>
// //                   <div className="swiper-pagination-fraction-custom"></div>
// //                   <div className="swiper-button-next-custom">
// //                     <i className="far fa-arrow-right"></i>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx global>{`
// //         .bg-title.watermark-service {
// //           position: absolute;
// //           top: 5% !important; 
// //           left: 50% !important;
// //           transform: translate(-50%, -50%) !important;
// //           font-size: 150px;
// //           font-weight: 900;
// //           color: transparent;
// //           -webkit-text-fill-color: transparent;
// //           -webkit-text-stroke: 3px #f5f0f0ff;
// //           opacity: 0.3;
// //           z-index: 0;
// //           line-height: 1;
// //           display: block;
// //         }
// //         .title-style-three .title {
// //           font-size: 60px;
// //           font-weight: 900; 
// //           text-transform: uppercase;
// //           display: inline-block;
// //           margin: 0;
// //         }
// //         .title-style-three .solid-text { color: #0d1c2e; }
// //         .title-style-three .outline-text {
// //           color: transparent;
// //           -webkit-text-stroke: 1.5px #0d1c2e; 
// //           text-stroke: 1.5px #0d1c2e;
// //           margin-left: 10px;
// //         }
// //         .swiper-controls-container {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 30px;
// //           margin-top: 50px;
// //         }
// //         .swiper-button-prev-custom,
// //         .swiper-button-next-custom {
// //           width: 50px;
// //           height: 50px;
// //           background: #ffffff;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
// //           color: #0d1c2e;
// //           border: none;
// //         }
// //         .swiper-pagination-fraction-custom {
// //           font-size: 20px;
// //           font-weight: 500;
// //           color: #0d1c2e;
// //           display: flex;
// //           gap: 8px;
// //         }
// //         .swiper-pagination-current { font-weight: 800; }
// //         .swiper-pagination-total { color: #6d767e; font-weight: 400; }

// //         @media (max-width: 768px) {
// //           .title-style-three .title { font-size: 28px !important; }
// //           .bg-title.watermark-service { font-size: 80px !important; }
// //           .swiper-controls-container { margin-top: 20px !important; }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default ServiceProjects;


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const services = [
//   { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
//   { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
//   { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
//   { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
//   { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
//   { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
//   { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
//   { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
//   { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
//   { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
//   { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
//   { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
//   { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
//   { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
// ];

// const ServiceProjects = () => {
//   const [activeSlide, setActiveSlide] = useState(1);

//   return (
//     <>
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-three center">
//                 <span className="pre">Shaping a Global Future</span>
//                 <div className="bg-title watermark-service">03</div>
//                 <h2 className="title">
//                   <span className="solid-text">OUR</span>
//                   <span className="outline-text">SERVICES</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container-1680 mt--40">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="case-studies-wrapper-main-5">
//                 <Swiper
//                   modules={[Navigation]}
//                   onSlideChange={(swiper) => setActiveSlide(swiper.realIndex + 1)}
//                   navigation={{
//                     prevEl: '.swiper-button-prev-custom',
//                     nextEl: '.swiper-button-next-custom',
//                   }}
//                   loop={true}
//                   spaceBetween={30}
//                   slidesPerView={1}
//                   breakpoints={{
//                     576: { slidesPerView: 2 },
//                     992: { slidesPerView: 3 },
//                     1600: { slidesPerView: 4 },
//                   }}
//                   className="mySwiper-case-studies-5"
//                 >
//                   {services.map((item, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="single-case-studies-four">
//                         <Link href={item.link} className="thumbnail">
//                           <Image
//                             src={item.img}
//                             alt={item.title}
//                             width={400}
//                             height={300}
//                             style={{ width: '100%', height: 'auto' }}
//                           />
//                         </Link>
//                         <div className="inner">
//                           <Link href={item.link}>
//                             <h3 className="title">{item.title}</h3>
//                           </Link>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>

//                 {/* UPDATED: Cleaned Controls Container */}
//                 <div className="swiper-controls-container">
//                   <button className="swiper-button-prev-custom" aria-label="Previous slide">
//                     <i className="far fa-arrow-left"></i>
//                   </button>

//                   <div className="swiper-pagination-fraction-custom">
//                     <span className="swiper-pagination-current">
//                       {activeSlide.toString().padStart(2, '0')}
//                     </span>
//                     <span className="separator">/</span>
//                     <span className="swiper-pagination-total">
//                       {services.length.toString().padStart(2, '0')}
//                     </span>
//                   </div>

//                   <button className="swiper-button-next-custom" aria-label="Next slide">
//                     <i className="far fa-arrow-right"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .bg-title.watermark-service {
//           position: absolute;
//           top: 5% !important;
//           left: 50% !important;
//           transform: translate(-50%, -50%) !important;
//           font-size: 150px;
//           font-weight: 900;
//           color: transparent;
//           -webkit-text-fill-color: transparent;
//           -webkit-text-stroke: 3px #f5f0f0ff;
//           opacity: 0.3;
//           z-index: 0;
//           line-height: 1;
//           display: block;
//         }

//         .title-style-three .title {
//           font-size: 60px;
//           font-weight: 900;
//           text-transform: uppercase;
//           display: inline-block;
//           margin: 0;
//         }

//         .title-style-three .solid-text { color: #0d1c2e; }
//         .title-style-three .outline-text {
//           color: transparent;
//           -webkit-text-stroke: 1.5px #0d1c2e;
//           text-stroke: 1.5px #0d1c2e;
//           margin-left: 10px;
//         }

//         /* FIXED STYLING FOR CONTROLS */
//         .swiper-controls-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 40px; /* Distance between buttons and counter */
//           margin-top: 60px;
//           width: 100%;
//         }

//         .swiper-button-prev-custom,
//         .swiper-button-next-custom {
//           width: 50px;
//           height: 50px;
//           background: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 8px;
//           cursor: pointer;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
//           transition: all 0.3s ease;
//           color: #0d1c2e;
//           border: none;
//           padding: 0;
//         }

//         .swiper-button-prev-custom:hover,
//         .swiper-button-next-custom:hover {
//           background: #0d1c2e;
//           color: #fff;
//         }

//         .swiper-pagination-fraction-custom {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           font-size: 22px;
//           font-family: inherit;
//           min-width: 100px; /* Ensures counter doesn't jump when numbers change */
//         }

//         .swiper-pagination-current {
//           font-weight: 800;
//           color: #0d1c2e;
//           min-width: 25px;
//           text-align: right;
//         }

//         .separator {
//           color: #6d767e;
//           opacity: 0.5;
//           font-weight: 300;
//         }

//         .swiper-pagination-total {
//           color: #6d767e;
//           font-weight: 400;
//           min-width: 25px;
//           text-align: left;
//         }

//         @media (max-width: 768px) {
//           .bg-title.watermark-service { font-size: 80px !important; top: 15% !important; }
//           .title-style-three .title { font-size: 28px !important; }
//           .swiper-controls-container { margin-top: 40px !important; gap: 20px; }
//           .swiper-button-prev-custom, .swiper-button-next-custom { width: 45px; height: 45px; }
//           .swiper-pagination-fraction-custom { font-size: 18px; min-width: 80px; }
//         }

//         /* Mobile Specific Adjustments */
// @media (max-width: 768px) {
//   .swiper-controls-container {
//     /* Pulls it up even more on mobile to avoid long empty spaces */
//     margin-top: -40px; 
//     gap: 20px;
//     padding-bottom: 30px;
//   }
  
//   .rts-section-gap {
//     padding-bottom: 40px !important;
//   }

//   .swiper-pagination-fraction-custom {
//     font-size: 18px;
//   }
//       `}</style>
//     </>
//   );
// };

// export default ServiceProjects;



'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { title: 'Global Reach', img: '/images/about/Global Reach.jpg', link: '/services/global-reach' },
  { title: 'Business Delegations', img: '/images/about/Business Delegations.jpg', link: '/services/business-deligation' },
  { title: 'Pakistan Products House', img: '/images/about/Pakistan Products House.jpg', link: '/services/pakistan-products' },
  { title: 'Trade Shows & Expos', img: '/images/about/Trade Shows & Expos.jpg', link: '/services/trade-shows' },
  { title: 'Industry Academia Linkages', img: '/images/about/Industry Academia.jpg', link: '/services/industry-academia' },
  { title: 'Global Growth Windows', img: '/images/about/Global Growth Windows.jpg', link: '/services/global-growth' },
  { title: 'International Tech Gateways', img: '/images/about/International Tech.jpg', link: '/services/international-tech' },
  { title: 'Leadership Incubation & Mentorship', img: '/images/about/Leadership Incubation.jpg', link: '/services/leadership-incubation' },
  { title: 'Business Events', img: '/images/about/Business Events.jpg', link: '/services/business-events' },
  { title: 'Women Empowerment', img: '/images/about/Women Empowerment.jpg', link: '/services/women-empowerment' },
  { title: 'BRI Centre', img: '/images/about/BRI Centre.jpg', link: '/services/bri-centre' },
  { title: 'Capacity Building & Research', img: '/images/about/Capacity Building.jpg', link: '/services/capacity-building' },
  { title: 'Global Trade Facilitation Desks', img: '/images/about/Global Trade Facilitation.jpg', link: '/services/global-trade' },
  { title: 'Community Development', img: '/images/about/Community Development.jpg', link: '/services/community-development' },
];

const ServiceProjects = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <>
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-three center">
                <span className="pre">Shaping a Global Future</span>
                <div className="bg-title watermark-service">03</div>
                <h2 className="title">
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
              <div className="case-studies-wrapper-main-5">
                <Swiper
                  modules={[Navigation]}
                  onSlideChange={(swiper) => setActiveSlide(swiper.realIndex + 1)}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1600: { slidesPerView: 4 },
                  }}
                  className="mySwiper-case-studies-5"
                >
                  {services.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-case-studies-four">
                        <Link href={item.link} className="thumbnail">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={300}
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </Link>
                        <div className="inner">
                          <Link href={item.link}>
                            <h3 className="title">{item.title}</h3>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* UPDATED: Cleaned Controls Container */}
                <div className="swiper-controls-container">
                  <button className="swiper-button-prev-custom" aria-label="Previous slide">
                    <i className="far fa-arrow-left"></i>
                  </button>

                  <div className="swiper-pagination-fraction-custom">
                    <span className="swiper-pagination-current">
                      {activeSlide.toString().padStart(2, '0')}
                    </span>
                    <span className="separator">/</span>
                    <span className="swiper-pagination-total">
                      {services.length.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <button className="swiper-button-next-custom" aria-label="Next slide">
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bg-title.watermark-service {
          position: absolute;
          top: -10% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          font-size: 150px;
          font-weight: 900;
          color: transparent;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 3px #f5f0f0ff;
          opacity: 0.8;
          z-index: 0;
          line-height: 1;
           padding: 5px 0;
        }


        .title-style-three .title {
          font-size: 60px;
          font-weight: 900;
          text-transform: uppercase;
          display: inline-block;
          margin: 0;
        }

        .title-style-three .solid-text { color: #0d1c2e; }
        .title-style-three .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px #0d1c2e;
          text-stroke: 1.5px #0d1c2e;
          margin-left: 10px;
        }

        /* FIXED STYLING FOR CONTROLS */
        .swiper-controls-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px; /* Distance between buttons and counter */
          margin-top: 60px;
          width: 100%;
        }

        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          width: 50px;
          height: 50px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          color: #0d1c2e;
          border: none;
          padding: 0;
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background: #0d1c2e;
          color: #fff;
        }

        .swiper-pagination-fraction-custom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 22px;
          font-family: inherit;
          min-width: 100px; /* Ensures counter doesn't jump when numbers change */
        }

        .swiper-pagination-current {
          font-weight: 800;
          color: #0d1c2e;
          min-width: 25px;
          text-align: right;
        }

        .separator {
          color: #6d767e;
          opacity: 0.5;
          font-weight: 300;
        }

        .swiper-pagination-total {
          color: #6d767e;
          font-weight: 400;
          min-width: 25px;
          text-align: left;
        }
          

        @media (max-width: 768px) {
          .bg-title.watermark-service { font-size: 80px !important; top: 0% !important; opacity:0.8,z-index: 0 !important;
    line-height: 1 !important; }
          .title-style-three .title { font-size: 28px !important; }
          .swiper-controls-container { margin-top: 40px !important; gap: 20px; }
          .swiper-button-prev-custom, .swiper-button-next-custom { width: 45px; height: 45px; }
          .swiper-pagination-fraction-custom { font-size: 18px; min-width: 80px; }
        }

        /* Mobile Specific Adjustments */
@media (max-width: 768px) {
  .swiper-controls-container {
    /* Pulls it up even more on mobile to avoid long empty spaces */ 
    margin-top: -40px; 
    gap: 20px;
    padding-bottom: 30px;
  }
  
  .rts-section-gap {
    padding-bottom: 40px !important;
  }

  .swiper-pagination-fraction-custom {
    font-size: 18px;
  }
    
      `}</style>
    </>
  );
};

export default ServiceProjects;