

// // // 'use client'

// // // import React from 'react';

// // // // Data for the event posts (assuming images are located in the public/blog directory)
// // // const eventsData = [
// // //     {
// // //         id: 1,
// // //         image: "/images/blog/04.webp",
// // //         category: "Business Solution",
// // //         author: "David Dolean",
// // //         title: "Building a Brand That from Market Leaders",
// // //         link: "blog-details.html"
// // //     },
// // //     {
// // //         id: 2,
// // //         image: "/images/blog/05.webp",
// // //         category: "Business Solution",
// // //         author: "David Dolean",
// // //         title: "Transforming Your Approach to Business",
// // //         link: "blog-details.html"
// // //     },
// // //     {
// // //         id: 3,
// // //         image: "/images/blog/06.webp",
// // //         category: "Business Solution",
// // //         author: "David Dolean",
// // //         title: "The quick settle tips of the new ages exist",
// // //         link: "blog-details.html"
// // //     },
// // // ];

// // // const Events = () => {
// // //     return (
// // //         <div className="rts-blog-area rts-section-gapTop">
// // //             <div className="container pt--40">
// // //                 {/* Section Title with Watermark */}
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         <div 
// // //                             className="title-style-three center"
// // //                             // 💡 CRITICAL: Anchor the absolute watermark to this parent div
// // //                             style={{ position: 'relative'}}
// // //                         >
// // //                             <span 
// // //                                 className="pre" 
// // //                                 style={{ 
// // //                                     fontSize: '16px',
// // //                                     zIndex: 1, 
// // //                                     position: 'relative' // Text must be on top
// // //                                 }}
// // //                             >
// // //                                 Highlights
// // //                             </span>
                            
// // //                             {/* 💡 WATERMARK DIV '05' - Centered Positioning and Styling */}
// // //                             <div 
// // //                                 className="rts-watermark-05"
// // //                                 style={{
// // //                                     position: 'absolute',
// // //                                     // Centered horizontally and vertically within the container
// // //                                     top: '0%',
// // //                                     left: '50%',
// // //                                     transform: 'translate(-50%, -50%)', 
                                    
// // //                                     // --- Styling (Hollow, Heavy, Light Gray) ---
// // //                                     // Size is adjusted to 150px to ensure it does not clip
// // //                                     fontSize: '150px', 
// // //                                     fontWeight: '900', 
                                    
// // //                                     color: 'transparent', 
// // //                                     WebkitTextFillColor: 'transparent', 
// // //                                     WebkitTextStroke: '3px #f5f0f0ff', // Light gray color
                                    
// // //                                     opacity: 0.3, 
// // //                                     zIndex: 0, // CRITICAL: Places it in the background
// // //                                     lineHeight: 1,
// // //                                     padding: '5px 0', 
// // //                                     display: 'block',
// // //                                 }}
// // //                             >
// // //                                 05
// // //                             </div>
// // //                             {/* END WATERMARK DIV */}
                            
// // //                             <h2 
// // //                                 className="title rts-text-anime-style-1" 
// // //                                 style={{ 
// // //                                     fontSize: '48px',
// // //                                     zIndex: 1, 
// // //                                     position: 'relative' 
// // //                                 }}
// // //                             >
// // //                                 Events
// // //                             </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Event Posts Grid */}
// // //                 <div className="row g-5 mt--20">
// // //                     {eventsData.map((post) => (
// // //                         <div key={post.id} className="col-lg-4 col-md-6">
// // //                             {/* single Post blog large */}
// // //                             <div className="rts-blog-h-2-wrapper">
// // //                                 <a href={post.link} className="thumbnail">
// // //                                     <img 
// // //                                         src={post.image} 
// // //                                         alt={post.title} 
// // //                                         // Placeholder fallback for missing images
// // //                                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // //                                     />
// // //                                 </a>
// // //                                 <div className="body">
// // //                                     <span>{post.category} / by {post.author}</span>
// // //                                     <a href={post.link}>
// // //                                         <h4 className="title">{post.title}</h4>
// // //                                     </a>
// // //                                     <a className="rts-read-more btn-primary" href={post.link}>
// // //                                         <i className="far fa-arrow-right"></i>Read More
// // //                                     </a>
// // //                                 </div>
// // //                             </div>
// // //                             {/* single Post blog large End */}
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>

// // //             {/* Custom CSS (Based on previous theme styles) */}
// // //             <style jsx global>{`
// // //                 /* General Styling Reset and Setup (adjusting container padding for mobile) */
// // //                 .rts-section-gapTop {
// // //                     padding-top: 100px;
// // //                     padding-bottom: 50px;
// // //                 }
                
// // //                 .rts-blog-area .container.pt--40 {
// // //                     padding-top: 40px;
// // //                 }
                
// // //                 .title-style-three.center { text-align: center; }
// // //                 .title-style-three .pre { 
// // //                     display: block; 
// // //                     font-size: 14px; 
// // //                     letter-spacing: 2px; 
// // //                     color: #666; 
// // //                     margin-bottom: 10px; 
// // //                 }
// // //                 .title-style-three .title { 
// // //                     font-weight: 900;
// // //                     text-transform: uppercase;
// // //                     color: #0d1c2e;
// // //                 }
// // //                 /* This is a mock-up for the outline effect from your previous component's title */
// // //                 .title-style-three .bg-title {
// // //                     font-weight: 900;
// // //                     opacity: 0.05;
// // //                     line-height: 1;
// // //                     position: absolute;
// // //                     left: 50%;
// // //                     transform: translateX(-50%);
// // //                     z-index: -1;
// // //                     top: -50px;
// // //                 }

// // //                 /* Blog Post Card Wrapper */
// // //                 .rts-blog-h-2-wrapper {
// // //                     border-radius: 8px;
// // //                     overflow: hidden;
// // //                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // //                     transition: all 0.3s ease;
// // //                     background: white;
// // //                 }

// // //                 .rts-blog-h-2-wrapper:hover {
// // //                     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
// // //                     transform: translateY(-5px);
// // //                 }

// // //                 .rts-blog-h-2-wrapper .thumbnail img {
// // //                     width: 100%;
// // //                     height: 250px; /* Fixed height for consistent card appearance */
// // //                     object-fit: cover;
// // //                     transition: transform 0.5s;
// // //                 }
                
// // //                 .rts-blog-h-2-wrapper:hover .thumbnail img {
// // //                     transform: scale(1.05);
// // //                 }

// // //                 .rts-blog-h-2-wrapper .body {
// // //                     padding: 25px;
// // //                 }

// // //                 .rts-blog-h-2-wrapper .body span {
// // //                     display: block;
// // //                     font-size: 14px;
// // //                     color: #888;
// // //                     margin-bottom: 10px;
// // //                     margin-left:-20px;
// // //                 }

// // //                 .rts-blog-h-2-wrapper .body .title {
// // //                     font-size: 22px;
// // //                     font-weight: 700;
// // //                     line-height: 1.4;
// // //                     color: #0d1c2e;
// // //                     margin-bottom: 15px;
// // //                     transition: color 0.3s;
// // //                     margin-left:-20px;
// // //                 }

// // //                 .rts-blog-h-2-wrapper .body .title:hover {
// // //                     color: #ff5e14; /* Example hover color */
// // //                 }

// // //                 .rts-read-more {
// // //                     display: inline-flex;
// // //                     align-items: center;
// // //                     font-weight: 600;
// // //                     color: #ff5e14;
// // //                     text-transform: uppercase;
// // //                     font-size: 14px;
                    
// // //                 }
// // //                 .rts-read-more i {
// // //                     margin-left: -20px;
// // //                     transition: margin-left 0.3s;
// // //                 }
// // //                 .rts-read-more:hover i {
// // //                     margin-left: 12px;
// // //                 }


// // //                 /* ==================================== */
// // //                 /* --- MOBILE OVERRIDES (Watermark and Title) --- */
// // //                 /* ==================================== */
// // //                 @media (max-width: 768px) {
// // //                     /* --- SECTION 5: EVENTS WATERMARK 05 FIX --- */
// // //                     .rts-blog-area .rts-watermark-05 {
// // //                         /* Match the size of Watermark 02/03 from previous sections */
// // //                         font-size: 100px !important; 
// // //                         opacity: 0.6 !important;
// // //                         -webkit-text-stroke: 2px #f5f0f0ff !important; /* Thinner stroke */
// // //                         line-height: 1 !important; 
// // //                         /* Position/transform can remain as they are centered */
// // //                     }

// // //                     /* --- SECTION 5: EVENTS HEADING FIX --- */
// // //                     .rts-blog-area .title-style-three .title {
// // //                         font-size: 36px !important; /* Match previous headings for mobile */
// // //                     }
                    
// // //                     /* Adjust section and container padding */
// // //                     .rts-blog-area.rts-section-gapTop {
// // //                         padding-top: 0 !important;
// // //                         margin-top: 0 !important;
// // //                     }

// // //                     .rts-blog-area .container.pt--40 {
// // //                         padding-top: 20px !important;
// // //                     }
                    
// // //                     /* Ensure full width on mobile for better usability */
// // //                     .col-lg-4, .col-md-6 {
// // //                         max-width: 100%;
// // //                         flex: 0 0 100%;
// // //                     }
// // //                 }

// // //                 /* Further size reduction for very small screens (phones) */
// // //                 @media (max-width: 480px) {
// // //                     .rts-blog-area .rts-watermark-05 {
// // //                         font-size: 80px !important; 
// // //                     }
// // //                 }
// // //             `}</style>
// // //         </div>
// // //     );
// // // };

// // // export default Events;


// // 'use client'

// // import React from 'react';

// // // Data for the event posts (assuming images are located in the public/blog directory)
// // const eventsData = [
// //     {
// //         id: 1,
// //         image: "/images/blog/04.webp",
// //         category: "Business Solution",
// //         author: "David Dolean",
// //         title: "Building a Brand That from Market Leaders",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 2,
// //         image: "/images/blog/05.webp",
// //         category: "Business Solution",
// //         author: "David Dolean",
// //         title: "Transforming Your Approach to Business",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 3,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 4,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution4",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 5,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution5",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 6,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution6",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 7,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// //     {
// //         id: 8,
// //         image: "/images/blog/06.webp",
// //         category: "Business Solution",
// //         author: "David Dolean",
// //         title: "The quick settle tips of the new ages exist",
// //         link: "blog-details.html"
// //     },
// // ];

// // const Events = () => {
// //     return (
// //         <div className="rts-blog-area rts-section-gapTop">
// //             <div className="container pt--40">
// //                 {/* Section Title with Watermark */}
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         <div 
// //                             className="title-style-three center"
// //                             // 💡 CRITICAL: Anchor the absolute watermark to this parent div
// //                             style={{ position: 'relative'}}
// //                         >
// //                             <span 
// //                                 className="pre" 
// //                                 style={{ 
// //                                     fontSize: '16px',
// //                                     zIndex: 1, 
// //                                     position: 'relative' // Text must be on top
// //                                 }}
// //                             >
// //                                 Highlights
// //                             </span>
                            
// //                             {/* 💡 WATERMARK DIV '05' - Centered Positioning and Styling */}
// //                             <div 
// //                                 className="rts-watermark-05"
// //                                 style={{
// //                                     position: 'absolute',
// //                                     // Centered horizontally and vertically within the container
// //                                     top: '0%',
// //                                     left: '50%',
// //                                     transform: 'translate(-50%, -50%)', 
                                    
// //                                     // --- Styling (Hollow, Heavy, Light Gray) ---
// //                                     // Size is adjusted to 150px to ensure it does not clip
// //                                     fontSize: '150px', 
// //                                     fontWeight: '900', 
                                    
// //                                     color: 'transparent', 
// //                                     WebkitTextFillColor: 'transparent', 
// //                                     WebkitTextStroke: '3px #f5f0f0ff', // Light gray color
                                    
// //                                     opacity: 0.3, 
// //                                     zIndex: 0, // CRITICAL: Places it in the background
// //                                     lineHeight: 1,
// //                                     padding: '5px 0', 
// //                                     display: 'block',
// //                                 }}
// //                             >
// //                                 05
// //                             </div>
// //                             {/* END WATERMARK DIV */}
                            
// //                             <h2 
// //                                 className="title rts-text-anime-style-1" 
// //                                 style={{ 
// //                                     fontSize: '48px',
// //                                     zIndex: 1, 
// //                                     position: 'relative' 
// //                                 }}
// //                             >
// //                                 Events
// //                             </h2>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Event Posts Grid */}
// //                 <div className="row g-5 mt--20">
// //                     {eventsData.map((post) => (
// //                         <div key={post.id} className="col-lg-4 col-md-6">
// //                             {/* single Post blog large */}
// //                             <div className="rts-blog-h-2-wrapper">
// //                                 <a href={post.link} className="thumbnail">
// //                                     <img 
// //                                         src={post.image} 
// //                                         alt={post.title} 
// //                                         // Placeholder fallback for missing images
// //                                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// //                                     />
// //                                 </a>
// //                                 <div className="body">
// //                                     <span>{post.category} / by {post.author}</span>
// //                                     <a href={post.link}>
// //                                         <h4 className="title">{post.title}</h4>
// //                                     </a>
// //                                     <a className="rts-read-more btn-primary" href={post.link}>
// //                                         <i className="far fa-arrow-right"></i>Read More
// //                                     </a>
// //                                 </div>
// //                             </div>
// //                             {/* single Post blog large End */}
// //                         </div>
// //                     ))}
// //                 </div>

// //                 {/* --- ADDED DOTS SECTION --- */}
// //                 <div className="row mt--50">
// //                     <div className="col-12">
// //                         <div className="pagination-dots-wrapper">
// //                             <span className="dot active"></span>
// //                             <span className="dot"></span>
// //                             <span className="dot"></span>
// //                             <span className="dot"></span>
// //                             <span className="dot"></span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Custom CSS (Based on previous theme styles) */}
// //             <style jsx global>{`
// //                 /* General Styling Reset and Setup (adjusting container padding for mobile) */
// //                 .rts-section-gapTop {
// //                     padding-top: 100px;
// //                     padding-bottom: 50px;
// //                 }
                
// //                 .rts-blog-area .container.pt--40 {
// //                     padding-top: 40px;
// //                 }
                
// //                 .title-style-three.center { text-align: center; }
// //                 .title-style-three .pre { 
// //                     display: block; 
// //                     font-size: 14px; 
// //                     letter-spacing: 2px; 
// //                     color: #666; 
// //                     margin-bottom: 10px; 
// //                 }
// //                 .title-style-three .title { 
// //                     font-weight: 900;
// //                     text-transform: uppercase;
// //                     color: #0d1c2e;
// //                 }
// //                 /* This is a mock-up for the outline effect from your previous component's title */
// //                 .title-style-three .bg-title {
// //                     font-weight: 900;
// //                     opacity: 0.05;
// //                     line-height: 1;
// //                     position: absolute;
// //                     left: 50%;
// //                     transform: translateX(-50%);
// //                     z-index: -1;
// //                     top: -50px;
// //                 }

// //                 /* Blog Post Card Wrapper */
// //                 .rts-blog-h-2-wrapper {
// //                     border-radius: 8px;
// //                     overflow: hidden;
// //                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// //                     transition: all 0.3s ease;
// //                     background: white;
// //                 }

// //                 .rts-blog-h-2-wrapper:hover {
// //                     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
// //                     transform: translateY(-5px);
// //                 }

// //                 .rts-blog-h-2-wrapper .thumbnail img {
// //                     width: 100%;
// //                     height: 250px; /* Fixed height for consistent card appearance */
// //                     object-fit: cover;
// //                     transition: transform 0.5s;
// //                 }
                
// //                 .rts-blog-h-2-wrapper:hover .thumbnail img {
// //                     transform: scale(1.05);
// //                 }

// //                 .rts-blog-h-2-wrapper .body {
// //                     padding: 25px;
// //                 }

// //                 .rts-blog-h-2-wrapper .body span {
// //                     display: block;
// //                     font-size: 14px;
// //                     color: #888;
// //                     margin-bottom: 10px;
// //                     margin-left:-20px;
// //                 }

// //                 .rts-blog-h-2-wrapper .body .title {
// //                     font-size: 22px;
// //                     font-weight: 700;
// //                     line-height: 1.4;
// //                     color: #0d1c2e;
// //                     margin-bottom: 15px;
// //                     transition: color 0.3s;
// //                     margin-left:-20px;
// //                 }

// //                 .rts-blog-h-2-wrapper .body .title:hover {
// //                     color: #ff5e14; /* Example hover color */
// //                 }

// //                 .rts-read-more {
// //                     display: inline-flex;
// //                     align-items: center;
// //                     font-weight: 600;
// //                     color: #ff5e14;
// //                     text-transform: uppercase;
// //                     font-size: 14px;
                    
// //                 }
// //                 .rts-read-more i {
// //                     margin-left: -20px;
// //                     transition: margin-left 0.3s;
// //                 }
// //                 .rts-read-more:hover i {
// //                     margin-left: 12px;
// //                 }

// //                 /* --- PAGINATION DOTS STYLING --- */
// //                 .pagination-dots-wrapper {
// //                     display: flex;
// //                     align-items: center;
// //                     justify-content: center;
// //                     gap: 12px;
// //                     margin-top: 20px;
// //                 }

// //                 .dot {
// //                     width: 6px;
// //                     height: 6px;
// //                     background: #d1d5db;
// //                     border-radius: 50%;
// //                     display: inline-block;
// //                 }

// //                 .dot.active {
// //                     width: 18px;
// //                     height: 18px;
// //                     background: transparent;
// //                     border: 1.5px solid #4b5563;
// //                     position: relative;
// //                     display: flex;
// //                     align-items: center;
// //                     justify-content: center;
// //                 }

// //                 .dot.active::after {
// //                     content: "";
// //                     width: 6px;
// //                     height: 6px;
// //                     background: #4b5563;
// //                     border-radius: 50%;
// //                 }

// //                 /* --- MOBILE OVERRIDES (Watermark and Title) --- */
// //                 @media (max-width: 768px) {
// //                     /* --- SECTION 5: EVENTS WATERMARK 05 FIX --- */
// //                     .rts-blog-area .rts-watermark-05 {
// //                         font-size: 100px !important; 
// //                         opacity: 0.6 !important;
// //                         -webkit-text-stroke: 2px #f5f0f0ff !important; /* Thinner stroke */
// //                         line-height: 1 !important; 
// //                     }

// //                     .rts-blog-area .title-style-three .title {
// //                         font-size: 36px !important; 
// //                     }
                    
// //                     .rts-blog-area.rts-section-gapTop {
// //                         padding-top: 0 !important;
// //                         margin-top: 0 !important;
// //                     }

// //                     .rts-blog-area .container.pt--40 {
// //                         padding-top: 20px !important;
// //                     }
                    
// //                     .col-lg-4, .col-md-6 {
// //                         max-width: 100%;
// //                         flex: 0 0 100%;
// //                     }
// //                 }

// //                 @media (max-width: 480px) {
// //                     .rts-blog-area .rts-watermark-05 {
// //                         font-size: 80px !important; 
// //                     }
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // export default Events;


// 'use client'

// import React from 'react';
// // 1. Import Swiper and Pagination module
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const eventsData = [
//     { id: 1, image: "/images/blog/04.webp", category: "Business Solution", author: "David Dolean", title: "Building a Brand That from Market Leaders", link: "blog-details.html" },
//     { id: 2, image: "/images/blog/05.webp", category: "Business Solution", author: "David Dolean", title: "Transforming Your Approach to Business", link: "blog-details.html" },
//     { id: 3, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
//     { id: 4, image: "/images/blog/06.webp", category: "Business Solution4", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
//     { id: 5, image: "/images/blog/06.webp", category: "Business Solution5", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
//     { id: 6, image: "/images/blog/06.webp", category: "Business Solution6", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
//     { id: 7, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
//     { id: 8, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// ];

// const Events = () => {
//     return (
//         <div className="rts-blog-area rts-section-gapTop">
//             <div className="container pt--40">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="title-style-three center" style={{ position: 'relative'}}>
//                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
//                             <div className="rts-watermark-05" style={{
//                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
//                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
//                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
//                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
//                                 }}> 05 </div>
//                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. Swiper replaces the static 'row' */}
//                 <div className="mt--20" style={{ position: 'relative' }}>
//                     <Swiper
//                         modules={[Pagination]}
//                         spaceBetween={30}
//                         slidesPerView={1}
//                         pagination={{
//                             clickable: true,
//                             el: '.pagination-dots-wrapper', // Links to your custom dots div below
//                             bulletClass: 'dot',             // Uses your existing 'dot' class
//                             bulletActiveClass: 'active'     // Uses your existing 'active' class
//                         }}
//                         breakpoints={{
//                             768: { slidesPerView: 2 },
//                             1200: { slidesPerView: 3 }
//                         }}
//                     >
//                         {eventsData.map((post) => (
//                             <SwiperSlide key={post.id}>
//                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
//                                     <a href={post.link} className="thumbnail">
//                                         <img 
//                                             src={post.image} 
//                                             alt={post.title} 
//                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
//                                         />
//                                     </a>
//                                     <div className="body">
//                                         <span>{post.category} / by {post.author}</span>
//                                         <a href={post.link}>
//                                             <h4 className="title">{post.title}</h4>
//                                         </a>
//                                         <a className="rts-read-more btn-primary" href={post.link}>
//                                             <i className="far fa-arrow-right"></i>Read More
//                                         </a>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* 3. The Pagination Container (Swiper will inject dots here) */}
//                 <div className="row mt--50">
//                     <div className="col-12">
//                         <div className="pagination-dots-wrapper">
//                             {/* Swiper will automatically generate the <span class="dot"></span> elements here */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx global>{`
//                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
//                 .title-style-three.center { text-align: center; }
//                 .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
//                 .title-style-three .title { font-weight: 900; text-transform: uppercase; color: #0d1c2e; }
                
//                 .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; }
//                 .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
//                 .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; transition: 0.5s; }
//                 .rts-blog-h-2-wrapper .body { padding: 25px; }
//                 .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
//                 .rts-blog-h-2-wrapper .body .title { font-size: 22px; font-weight: 700; line-height: 1.4; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; }
//                 .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; }
//                 .rts-read-more i { margin-left: -20px; transition: 0.3s; }
//                 .rts-read-more:hover i { margin-left: 12px; }

//                 /* --- PAGINATION DOTS STYLING --- */
//                 .pagination-dots-wrapper {
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     gap: 12px;
//                     margin-top: 20px;
//                     min-height: 30px;
//                 }

//                 .dot {
//                     width: 6px;
//                     height: 6px;
//                     background: #d1d5db;
//                     border-radius: 50%;
//                     display: inline-block;
//                     cursor: pointer;
//                     border: none;
//                     padding: 0;
//                 }

//                 .dot.active {
//                     width: 18px;
//                     height: 18px;
//                     background: transparent;
//                     border: 1.5px solid #4b5563;
//                     position: relative;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                 }

//                 .dot.active::after {
//                     content: "";
//                     width: 6px;
//                     height: 6px;
//                     background: #4b5563;
//                     border-radius: 50%;
//                 }

//                 @media (max-width: 768px) {
//                     .rts-blog-area .rts-watermark-05 { font-size: 100px !important; opacity: 0.6 !important; }
//                     .rts-blog-area .title-style-three .title { font-size: 36px !important; }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Events;




'use client'

import React from 'react';
// 1. Import Swiper and Pagination module
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const eventsData = [
    { id: 1, image: "/images/blog/04.webp", category: "Business Solution", author: "David Dolean", title: "Building a Brand That from Market Leaders", link: "/archive" },
    { id: 2, image: "/images/blog/05.webp", category: "Business Solution", author: "David Dolean", title: "Transforming Your Approach to Business", link: "/archive" },
    { id: 3, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
    { id: 4, image: "/images/blog/06.webp", category: "Business Solution4", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
    { id: 5, image: "/images/blog/06.webp", category: "Business Solution5", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
    { id: 6, image: "/images/blog/06.webp", category: "Business Solution6", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
    { id: 7, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
    { id: 8, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
];

const Events = () => {
    return (
        <div className="rts-blog-area rts-section-gapTop">
            <div className="container pt--40">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-three center" style={{ position: 'relative'}}>
                            <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
                            <div className="rts-watermark-05" style={{
                                    position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
                                    fontSize: '150px', fontWeight: '900', color: 'transparent', 
                                    WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
                                    opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
                                }}> 05 </div>
                            <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
                        </div>
                    </div>
                </div>

                {/* 2. Swiper replaces the static 'row' */}
                <div className="mt--20" style={{ position: 'relative' }}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.pagination-dots-wrapper', // Links to your custom dots div below
                            bulletClass: 'dot',             // Uses your existing 'dot' class
                            bulletActiveClass: 'active'     // Uses your existing 'active' class
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {eventsData.map((post) => (
                            <SwiperSlide key={post.id}>
                                <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
                                    <a href={post.link} className="thumbnail">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 3. The Pagination Container (Swiper will inject dots here) */}
                <div className="row mt--50">
                    <div className="col-12">
                        <div className="pagination-dots-wrapper">
                            {/* Swiper will automatically generate the <span class="dot"></span> elements here */}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
                .title-style-three.center { text-align: center; }
                .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
                .title-style-three .title { font-weight: 900; text-transform: uppercase; color: #0d1c2e; }
                
                .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; }
                .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
                .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; transition: 0.5s; }
                .rts-blog-h-2-wrapper .body { padding: 25px; }
                .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
                .rts-blog-h-2-wrapper .body .title { font-size: 22px; font-weight: 700; line-height: 1.4; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; }
                .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; }
                .rts-read-more i { margin-left: -20px; transition: 0.3s; }
                .rts-read-more:hover i { margin-left: 12px; }

                /* --- PAGINATION DOTS STYLING --- */
                .pagination-dots-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-top: 20px;
                    min-height: 30px;
                }

                .dot {
                    width: 6px;
                    height: 6px;
                    background: #d1d5db;
                    border-radius: 50%;
                    display: inline-block;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                }

                .dot.active {
                    width: 18px;
                    height: 18px;
                    background: transparent;
                    border: 1.5px solid #4b5563;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .dot.active::after {
                    content: "";
                    width: 6px;
                    height: 6px;
                    background: #4b5563;
                    border-radius: 50%;
                }

                @media (max-width: 768px) {
                    .rts-blog-area .rts-watermark-05 { font-size: 100px !important; opacity: 0.6 !important; }
                    .rts-blog-area .title-style-three .title { font-size: 36px !important; }
                }
            `}</style>
        </div>
    );
};

export default Events;