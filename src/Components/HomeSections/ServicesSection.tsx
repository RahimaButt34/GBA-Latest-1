
// // // src/components/sections/ServiceProjects.tsx

// // "use client";
// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';

// // // --- SWIPER IMPORTS ---
// // // You MUST run: npm install swiper
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // // Import Swiper modules if you need Navigation or Pagination functionality
// // // import { Navigation, Pagination } from 'swiper/modules'; 

// // // --- 1. DATA DEFINITION (Extracted from HTML) ---
// // const serviceItems = [
// //   {
// //     title: "Global Reach",
// //     image: "/images/about/Global Reach.jpg",
// //     href: "/service-details.html",
// //     alt: "Global Reach project image",
// //   },
// //   {
// //     title: "Business Delegations",
// //     image: "/images/about/Business Delegations.jpg",
// //     href: "/business-deligation.html",
// //     alt: "Business Delegations project image",
// //   },
// //   {
// //     title: "Pakistan Products House",
// //     image: "/images/about/Pakistan Products House.jpg",
// //     href: "/pakistan-products.html",
// //     alt: "Pakistan Products House project image",
// //   },
// //   {
// //     title: "Trade Shows & Expos",
// //     image: "/images/about/Trade Shows & Expos.jpg",
// //     href: "/trade-shows.html",
// //     alt: "Trade Shows & Expos project image",
// //   },
// //   {
// //     title: "Industry Academia Linkages",
// //     image: "/images/about/Industry Academia.jpg",
// //     href: "/industry-academia.html",
// //     alt: "Industry Academia Linkages project image",
// //   },
// //   {
// //     title: "Global Growth Windows",
// //     image: "/images/about/Global Growth Windows.jpg",
// //     href: "/global-growth.html",
// //     alt: "Global Growth Windows project image",
// //   },
// //   {
// //     title: "International Tech Gateways",
// //     image: "/images/about/International Tech.jpg",
// //     href: "/international-tech.html",
// //     alt: "International Tech Gateways project image",
// //   },
// //   {
// //     title: "Leadership Incubation & Mentorship",
// //     image: "/images/about/Leadership Incubation.jpg",
// //     href: "/leadership-incubation.html",
// //     alt: "Leadership Incubation & Mentorship project image",
// //   },
// //   {
// //     title: "Business Events",
// //     image: "/images/about/Business Events.jpg",
// //     href: "/business-events.html",
// //     alt: "Business Events project image",
// //   },
// //   {
// //     title: "Women Empowerment",
// //     image: "/images/about/Women Empowerment.jpg",
// //     href: "/women-empowerment.html",
// //     alt: "Women Empowerment project image",
// //   },
// //   {
// //     title: "BRI Centre",
// //     image: "/images/about/BRI Centre.jpg",
// //     href: "/bRI-centre.html",
// //     alt: "BRI Centre project image",
// //   },
// //   {
// //     title: "Capacity Building & Research",
// //     image: "/images/about/Capacity Building.jpg",
// //     href: "/capacity-building.html",
// //     alt: "Capacity Building & Research project image",
// //   },
// //   {
// //     title: "Global Trade Facilitation Desks",
// //     image: "/images/about/Global Trade Facilitation.jpg",
// //     href: "/global-trade.html",
// //     alt: "Global Trade Facilitation Desks project image",
// //   },
// //   {
// //     title: "Community Development",
// //     image: "/images/about/Community Development.jpg",
// //     href: "/community-development.html",
// //     alt: "Community Development project image",
// //   },
// // ];


// // const ServiceProjects: React.FC = () => {

// //     // Swiper Configuration (Matches the typical layout of 4 visible slides on desktop)
// //     const swiperConfig = {
// //         // modules: [Navigation, Pagination], // Uncomment if you enable navigation/pagination
// //         spaceBetween: 30, 
// //         slidesPerView: 1,
// //         // Responsive breakpoints for 2, 3, and 4 items
// //         breakpoints: {
// //             640: {
// //                 slidesPerView: 2,
// //             },
// //             768: {
// //                 slidesPerView: 3,
// //             },
// //             1024: {
// //                 slidesPerView: 4,
// //             },
// //         },
// //         // Enable navigation and pagination, linking them to the classes defined below
// //         // navigation: {
// //         //     nextEl: '.swiper-button-next',
// //         //     prevEl: '.swiper-button-prev',
// //         // },
// //         // pagination: {
// //         //     el: '.swiper-pagination-fraction',
// //         //     type: 'fraction',
// //         //     clickable: true,
// //         // },
// //         dir: 'ltr' // Matches the original HTML attribute
// //     };

// //     return (
// //         // The outer div uses your theme's custom CSS classes
// //         <div className="rts-section-gap">
// //             <div className="container">
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         {/* Title Section */}
// //                         <div className="title-style-three center">
// //                             {/* Inline styles transferred directly to the JSX style attribute */}
// //                             <span className="pre" style={{ fontSize: '16px' }}>
// //                                 Shaping a Global Future
// //                             </span>
// //                             <div className="bg-title" style={{ fontSize: '150px' }}>
// //                                 03
// //                             </div>
// //                             <h2 className="title" style={{ fontSize: '48px' }}>
// //                                 {/* Note: Classes like .solid-text and .outline-text are in your style.css file */}
// //                                 <span className="solid-text">OUR</span>
// //                                 <span className="outline-text">SERVICES</span>
// //                             </h2>
                            
// //                             {/* IMPORTANT: The <style> block from your HTML is NOT placed here.
// //                                 The styles from that block (like .title-style-three .title, .solid-text, 
// //                                 .outline-text, and media queries) MUST be present in one of the 
// //                                 global CSS files you linked in your layout.tsx (e.g., /css/style.css) 
// //                             */}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Swiper Slider Section */}
// //             {/* The container and margin classes (`container-1680`, `mt--40`) are from your theme's CSS */}
// //             <div className="container-1680 mt--40">
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         <div className="case-studies-wrapper-main-5">
// //                             {/* The Swiper wrapper is replaced by the Swiper React Component */}
// //                             <Swiper
// //                                 className="mySwiper-case-studies-5"
// //                                 {...swiperConfig} // Apply configuration
// //                             >
// //                                 <div className="swiper-wrapper">
// //                                     {serviceItems.map((item, index) => (
// //                                         <SwiperSlide key={index}>
// //                                             <div className="single-case-studies-four">
// //                                                 {/* Use Next.js Link and Image */}
// //                                                 <Link href={item.href} className="thumbnail">
// //                                                     {/* Image paths changed from assets/images/... to /images/... */}
// //                                                     <Image
// //                                                         src={item.image.replace('assets/', '/')}
// //                                                         alt={item.alt}
// //                                                         width={400} // Set a fixed width/height for Image component
// //                                                         height={300} 
// //                                                         priority={index < 4} // Load the first few images sooner
// //                                                     />
// //                                                 </Link>
// //                                                 <div className="inner">
// //                                                     <Link href={item.href}>
// //                                                         <h3 className="title">{item.title}</h3>
// //                                                     </Link>
// //                                                 </div>
// //                                             </div>
// //                                         </SwiperSlide>
// //                                     ))}
// //                                 </div>
                                
// //                                 {/* Swiper Navigation and Pagination Elements */}
// //                                 {/* The content "14" is replaced with the dynamic count of items */}
// //                                 <div className="swiper-pagination-fraction">{serviceItems.length}</div>
                                
// //                                 {/* These custom navigation classes rely on your theme's CSS to display correctly */}
// //                                 <div className="swiper-button-next">
// //                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
// //                                 </div>
// //                                 <div className="swiper-button-prev">
// //                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
// //                                 </div>

// //                             </Swiper>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ServiceProjects;


// // src/components/ServiceProjects.tsx
// 'use client'; 

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // 🛑 STEP 1: MUST IMPORT CORE SWIPER CSS HERE!
// import 'swiper/css';
// import 'swiper/css/navigation'; 
// import 'swiper/css/pagination'; 
// // Note: We use the swiper/css/navigation because your custom classes 
// // for the arrows likely rely on the base Swiper navigation styles for positioning.

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import type { Swiper as SwiperCore } from 'swiper/types';

// // -----------------------------------------------------------------------
// // 1. DATA DEFINITION (Using your HTML content)
// // -----------------------------------------------------------------------
// interface ServiceItem {
//     id: number;
//     title: string;
//     imagePath: string; // The path used in the original <img> src
//     href: string;      // The target URL
// }

// const serviceData: ServiceItem[] = [
//     { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: 'service-details.html' },
//     { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: 'business-deligation.html' },
//     { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: 'pakistan-products.html' },
//     { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: 'trade-shows.html' },
//     { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: 'industry-academia.html' },
//     { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: 'global-growth.html' },
//     { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: 'international-tech.html' },
//     { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: 'leadership-incubation.html' },
//     { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: 'business-events.html' },
//     { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: 'women-empowerment.html' },
//     { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: 'bRI-centre.html' },
//     { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: 'capacity-building.html' },
//     { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: 'global-trade.html' },
//     { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: 'community-development.html' },
// ];

// // -----------------------------------------------------------------------
// // 2. COMPONENT LOGIC
// // -----------------------------------------------------------------------
// const ServiceProjects = () => {
//     const swiperRef = React.useRef<SwiperCore>();
//     const totalSlides = serviceData.length;

//     return (
//         // Replicating the outer HTML structure
//         <div className="rts-projects-area rts-section-gap">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         {/* Title Section (Keep style as is for Next.js CSS-in-JS support) */}
//                         <div className="title-style-three center">
//                             <span className="pre" style={{ fontSize: '16px' }}>Shaping a Global Future</span>
//                             <div className="bg-title" style={{ fontSize: '150px' }}>03</div>
//                             <h2 className="title" style={{ fontSize: '48px' }}>
//                                 <span className="solid-text">OUR</span>
//                                 <span className="outline-text">SERVICES</span>
//                             </h2>
//                             {/* NOTE: Inline <style> blocks are generally bad practice in React/Next.js. 
//                                  These styles should be moved to your /css/style.css file 
//                                  or a CSS module for best performance. */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container-1680 mt--40">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         {/* THE MAIN SLIDER WRAPPER */}
//                         <div className="case-studies-wrapper-main-5">
                            
//                             {/* Swiper Component (Replaces <div class="swiper mySwiper-case-studies-5">) */}
//                             <Swiper
//                                 dir="ltr"
//                                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                                 className="mySwiper-case-studies-5"
//                                 modules={[Navigation, Pagination]}
                                
//                                 // Navigation config: Connects to your custom buttons
//                                 navigation={{
//                                     prevEl: '.swiper-button-prev-custom', // Class from the HTML below
//                                     nextEl: '.swiper-button-next-custom', // Class from the HTML below
//                                 }}

//                                 // Pagination config: Connects to your custom fraction display
//                                 pagination={{
//                                     el: '.swiper-pagination-fraction-custom', // Class from the HTML below
//                                     type: 'fraction',
//                                 }}

//                                 // Swiper Breakpoints (Adjust to match your original theme's slider settings)
//                                 slidesPerView={1}
//                                 spaceBetween={30}
//                                 breakpoints={{
//                                     576: {
//                                         slidesPerView: 2,
//                                         spaceBetween: 20,
//                                     },
//                                     992: {
//                                         slidesPerView: 3,
//                                         spaceBetween: 30,
//                                     },
//                                     1600: {
//                                         slidesPerView: 4,
//                                         spaceBetween: 30,
//                                     },
//                                 }}
//                             >
//                                 {/* MAPPING THE DATA TO SLIDES */}
//                                 {serviceData.map((item) => (
//                                     <SwiperSlide key={item.id}>
//                                         <div className="single-case-studies-four">
//                                             {/* Convert <img> to Next.js <Image> and handle path */}
//                                             <Link href={item.href} className="thumbnail">
//                                                 <Image 
//                                                     src={item.imagePath.replace('assets/', '/')} // Adjusting path for Next.js public folder
//                                                     alt={item.title}
//                                                     width={400} // Set appropriate dimensions
//                                                     height={300} // Set appropriate dimensions
//                                                     // This style is often needed for custom CSS to override 
//                                                     // Next.js default image sizing while keeping the aspect ratio
//                                                     style={{ width: '100%', height: 'auto' }} 
//                                                     priority={item.id <= 4} // Priority load for first few images
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
                            
//                             {/* 🛑 STEP 2: CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
//                             {/* We must replace the original classes (swiper-button-next, etc.) 
//                                 with unique ones to prevent Swiper from moving them into the Swiper root 
//                                 and destroying your layout.
//                             */}
                            
//                             <div className="navigation-custom-wrap"
//                             >
//                                 {/* The pagination fraction element */}
//                                 <div className="swiper-pagination-fraction swiper-pagination-fraction-custom">
//                                     {`1 / ${totalSlides}`} 
//                                 </div>

                                
                                
//                                 {/* The Previous Button (Uses the class defined in navigation config) */}
//                                 <div className="swiper-button-prev swiper-button-prev-custom">
//                                     <i className="fa-sharp fa-regular fa-arrow-left"></i>
//                                 </div>

//                                 {/* The Next Button (Uses the class defined in navigation config) */}
//                                 <div className="swiper-button-next swiper-button-next-custom">
//                                     <i className="fa-sharp fa-regular fa-arrow-right"></i>
//                                 </div>
//                             </div>
                            
//                             {/* NOTE: You will need to add custom CSS for .navigation-custom-wrap, 
//                                 as the original HTML placed navigation/pagination directly inside the swiper. */}

//                         </div>
//                     </div>
//                 </div>
//             </div>
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
    { id: 1, title: 'Global Reach', imagePath: '/images/about/Global Reach.jpg', href: 'service-details.html' },
    { id: 2, title: 'Business Delegations', imagePath: '/images/about/Business Delegations.jpg', href: 'business-deligation.html' },
    { id: 3, title: 'Pakistan Products House', imagePath: '/images/about/Pakistan Products House.jpg', href: 'pakistan-products.html' },
    { id: 4, title: 'Trade Shows & Expos', imagePath: '/images/about/Trade Shows & Expos.jpg', href: 'trade-shows.html' },
    { id: 5, title: 'Industry Academia Linkages', imagePath: '/images/about/Industry Academia.jpg', href: 'industry-academia.html' },
    { id: 6, title: 'Global Growth Windows', imagePath: '/images/about/Global Growth Windows.jpg', href: 'global-growth.html' },
    { id: 7, title: 'International Tech Gateways', imagePath: '/images/about/International Tech.jpg', href: 'international-tech.html' },
    { id: 8, title: 'Leadership Incubation & Mentorship', imagePath: '/images/about/Leadership Incubation.jpg', href: 'leadership-incubation.html' },
    { id: 9, title: 'Business Events', imagePath: '/images/about/Business Events.jpg', href: 'business-events.html' },
    { id: 10, title: 'Women Empowerment', imagePath: '/images/about/Women Empowerment.jpg', href: 'women-empowerment.html' },
    { id: 11, title: 'BRI Centre', imagePath: '/images/about/BRI Centre.jpg', href: 'bRI-centre.html' },
    { id: 12, title: 'Capacity Building & Research', imagePath: '/images/about/Capacity Building.jpg', href: 'capacity-building.html' },
    { id: 13, title: 'Global Trade Facilitation Desks', imagePath: '/images/about/Global Trade Facilitation.jpg', href: 'global-trade.html' },
    { id: 14, title: 'Community Development', imagePath: '/images/about/Community Development.jpg', href: 'community-development.html' },
];

// -----------------------------------------------------------------------
// 2. COMPONENT LOGIC
// -----------------------------------------------------------------------
const ServiceProjects = () => {
    // const swiperRef = React.useRef<SwiperCore>();
    const swiperRef = React.useRef<SwiperCore | null>(null);

    const totalSlides = serviceData.length;

    return (
        // Replicating the outer HTML structure
        <div className="rts-projects-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        {/* Title Section with Watermark logic */}
                        <div 
                            className="title-style-three center" 
                            // 💡 STEP 1: Set position: relative on the container
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                          
   <div 
    className="rts-watermark-03"
    style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        // Center the element
        transform: 'translate(-50%, -50%)', 
        
        // 1. **CRITICAL FIX**: Reduced Font Size for better fit
        fontSize: '150px', 
        
        // 2. Ensuring the container size is minimized but not clipping
        lineHeight: 0.9, // Lowering line-height to reduce vertical footprint (use with caution)
        padding: '5px 0', // Slight padding kept as a safety buffer
        display: 'block', 
        
        // --- Styling (Kept bold/hollow) ---
        fontWeight: '900', 
        color: 'transparent', 
        WebkitTextFillColor: 'transparent', 
        WebkitTextStroke: '3px rgb(238, 235, 235);', 
        
        opacity: 1, 
        zIndex: 0, 
    }}
>
    03
</div>
                            {/* Pre-title text (Needs zIndex: 1 to sit above the watermark) */}
                            <span 
                                className="pre" 
                                style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}
                            >
                                Shaping a Global Future
                            </span>
                            
                            {/* Main title text (Needs zIndex: 1 to sit above the watermark) */}
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
                        {/* THE MAIN SLIDER WRAPPER */}
                        <div className="case-studies-wrapper-main-5">
                            
                            <Swiper
                                dir="ltr"
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="mySwiper-case-studies-5"
                                modules={[Navigation, Pagination]}
                                
                                // Navigation config: Connects to your custom buttons
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}

                                // Pagination config: Connects to your custom fraction display
                                pagination={{
                                    el: '.swiper-pagination-fraction-custom',
                                    type: 'fraction',
                                }}

                                // Swiper Breakpoints
                                slidesPerView={1}
                                spaceBetween={30}
                                breakpoints={{
                                    576: { slidesPerView: 2, spaceBetween: 20, },
                                    992: { slidesPerView: 3, spaceBetween: 30, },
                                    1600: { slidesPerView: 4, spaceBetween: 30, },
                                }}
                            >
                                {/* MAPPING THE DATA TO SLIDES */}
                                {serviceData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="single-case-studies-four">
                                            {/* Convert <img> to Next.js <Image> and handle path */}
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
                            
                            {/* CUSTOM PAGINATION AND NAVIGATION CONTROLS */}
                            <div className="navigation-custom-wrap">
                                {/* The pagination fraction element */}
                                <div className="swiper-pagination-fraction swiper-pagination-fraction-custom"
                                style={{ textAlign: 'center' }}>
                                    {`1 / ${totalSlides}`} 
                                </div>
                                
                                {/* The Previous Button */}
                                <div className="swiper-button-prev swiper-button-prev-custom">
                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                </div>

                                {/* The Next Button */}
                                <div className="swiper-button-next swiper-button-next-custom">
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default ServiceProjects;