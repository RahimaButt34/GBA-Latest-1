

// // // // // // // 'use client'

// // // // // // // import React from 'react';

// // // // // // // // Data for the event posts (assuming images are located in the public/blog directory)
// // // // // // // const eventsData = [
// // // // // // //     {
// // // // // // //         id: 1,
// // // // // // //         image: "/images/blog/04.webp",
// // // // // // //         category: "Business Solution",
// // // // // // //         author: "David Dolean",
// // // // // // //         title: "Building a Brand That from Market Leaders",
// // // // // // //         link: "blog-details.html"
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id: 2,
// // // // // // //         image: "/images/blog/05.webp",
// // // // // // //         category: "Business Solution",
// // // // // // //         author: "David Dolean",
// // // // // // //         title: "Transforming Your Approach to Business",
// // // // // // //         link: "blog-details.html"
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id: 3,
// // // // // // //         image: "/images/blog/06.webp",
// // // // // // //         category: "Business Solution",
// // // // // // //         author: "David Dolean",
// // // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // // //         link: "blog-details.html"
// // // // // // //     },
// // // // // // // ];

// // // // // // // const Events = () => {
// // // // // // //     return (
// // // // // // //         <div className="rts-blog-area rts-section-gapTop">
// // // // // // //             <div className="container pt--40">
// // // // // // //                 {/* Section Title with Watermark */}
// // // // // // //                 <div className="row">
// // // // // // //                     <div className="col-lg-12">
// // // // // // //                         <div 
// // // // // // //                             className="title-style-three center"
// // // // // // //                             // 💡 CRITICAL: Anchor the absolute watermark to this parent div
// // // // // // //                             style={{ position: 'relative'}}
// // // // // // //                         >
// // // // // // //                             <span 
// // // // // // //                                 className="pre" 
// // // // // // //                                 style={{ 
// // // // // // //                                     fontSize: '16px',
// // // // // // //                                     zIndex: 1, 
// // // // // // //                                     position: 'relative' // Text must be on top
// // // // // // //                                 }}
// // // // // // //                             >
// // // // // // //                                 Highlights
// // // // // // //                             </span>

// // // // // // //                             {/* 💡 WATERMARK DIV '05' - Centered Positioning and Styling */}
// // // // // // //                             <div 
// // // // // // //                                 className="rts-watermark-05"
// // // // // // //                                 style={{
// // // // // // //                                     position: 'absolute',
// // // // // // //                                     // Centered horizontally and vertically within the container
// // // // // // //                                     top: '0%',
// // // // // // //                                     left: '50%',
// // // // // // //                                     transform: 'translate(-50%, -50%)', 

// // // // // // //                                     // --- Styling (Hollow, Heavy, Light Gray) ---
// // // // // // //                                     // Size is adjusted to 150px to ensure it does not clip
// // // // // // //                                     fontSize: '150px', 
// // // // // // //                                     fontWeight: '900', 

// // // // // // //                                     color: 'transparent', 
// // // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // // //                                     WebkitTextStroke: '3px #f5f0f0ff', // Light gray color

// // // // // // //                                     opacity: 0.3, 
// // // // // // //                                     zIndex: 0, // CRITICAL: Places it in the background
// // // // // // //                                     lineHeight: 1,
// // // // // // //                                     padding: '5px 0', 
// // // // // // //                                     display: 'block',
// // // // // // //                                 }}
// // // // // // //                             >
// // // // // // //                                 05
// // // // // // //                             </div>
// // // // // // //                             {/* END WATERMARK DIV */}

// // // // // // //                             <h2 
// // // // // // //                                 className="title rts-text-anime-style-1" 
// // // // // // //                                 style={{ 
// // // // // // //                                     fontSize: '48px',
// // // // // // //                                     zIndex: 1, 
// // // // // // //                                     position: 'relative' 
// // // // // // //                                 }}
// // // // // // //                             >
// // // // // // //                                 Events
// // // // // // //                             </h2>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 {/* Event Posts Grid */}
// // // // // // //                 <div className="row g-5 mt--20">
// // // // // // //                     {eventsData.map((post) => (
// // // // // // //                         <div key={post.id} className="col-lg-4 col-md-6">
// // // // // // //                             {/* single Post blog large */}
// // // // // // //                             <div className="rts-blog-h-2-wrapper">
// // // // // // //                                 <a href={post.link} className="thumbnail">
// // // // // // //                                     <img 
// // // // // // //                                         src={post.image} 
// // // // // // //                                         alt={post.title} 
// // // // // // //                                         // Placeholder fallback for missing images
// // // // // // //                                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // // // // //                                     />
// // // // // // //                                 </a>
// // // // // // //                                 <div className="body">
// // // // // // //                                     <span>{post.category} / by {post.author}</span>
// // // // // // //                                     <a href={post.link}>
// // // // // // //                                         <h4 className="title">{post.title}</h4>
// // // // // // //                                     </a>
// // // // // // //                                     <a className="rts-read-more btn-primary" href={post.link}>
// // // // // // //                                         <i className="far fa-arrow-right"></i>Read More
// // // // // // //                                     </a>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                             {/* single Post blog large End */}
// // // // // // //                         </div>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* Custom CSS (Based on previous theme styles) */}
// // // // // // //             <style jsx global>{`
// // // // // // //                 /* General Styling Reset and Setup (adjusting container padding for mobile) */
// // // // // // //                 .rts-section-gapTop {
// // // // // // //                     padding-top: 100px;
// // // // // // //                     padding-bottom: 50px;
// // // // // // //                 }

// // // // // // //                 .rts-blog-area .container.pt--40 {
// // // // // // //                     padding-top: 40px;
// // // // // // //                 }

// // // // // // //                 .title-style-three.center { text-align: center; }
// // // // // // //                 .title-style-three .pre { 
// // // // // // //                     display: block; 
// // // // // // //                     font-size: 14px; 
// // // // // // //                     letter-spacing: 2px; 
// // // // // // //                     color: #666; 
// // // // // // //                     margin-bottom: 10px; 
// // // // // // //                 }
// // // // // // //                 .title-style-three .title { 
// // // // // // //                     font-weight: 900;
// // // // // // //                     text-transform: uppercase;
// // // // // // //                     color: #0d1c2e;
// // // // // // //                 }
// // // // // // //                 /* This is a mock-up for the outline effect from your previous component's title */
// // // // // // //                 .title-style-three .bg-title {
// // // // // // //                     font-weight: 900;
// // // // // // //                     opacity: 0.05;
// // // // // // //                     line-height: 1;
// // // // // // //                     position: absolute;
// // // // // // //                     left: 50%;
// // // // // // //                     transform: translateX(-50%);
// // // // // // //                     z-index: -1;
// // // // // // //                     top: -50px;
// // // // // // //                 }

// // // // // // //                 /* Blog Post Card Wrapper */
// // // // // // //                 .rts-blog-h-2-wrapper {
// // // // // // //                     border-radius: 8px;
// // // // // // //                     overflow: hidden;
// // // // // // //                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // // // // // //                     transition: all 0.3s ease;
// // // // // // //                     background: white;
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper:hover {
// // // // // // //                     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
// // // // // // //                     transform: translateY(-5px);
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper .thumbnail img {
// // // // // // //                     width: 100%;
// // // // // // //                     height: 250px; /* Fixed height for consistent card appearance */
// // // // // // //                     object-fit: cover;
// // // // // // //                     transition: transform 0.5s;
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper:hover .thumbnail img {
// // // // // // //                     transform: scale(1.05);
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper .body {
// // // // // // //                     padding: 25px;
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper .body span {
// // // // // // //                     display: block;
// // // // // // //                     font-size: 14px;
// // // // // // //                     color: #888;
// // // // // // //                     margin-bottom: 10px;
// // // // // // //                     margin-left:-20px;
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper .body .title {
// // // // // // //                     font-size: 22px;
// // // // // // //                     font-weight: 700;
// // // // // // //                     line-height: 1.4;
// // // // // // //                     color: #0d1c2e;
// // // // // // //                     margin-bottom: 15px;
// // // // // // //                     transition: color 0.3s;
// // // // // // //                     margin-left:-20px;
// // // // // // //                 }

// // // // // // //                 .rts-blog-h-2-wrapper .body .title:hover {
// // // // // // //                     color: #ff5e14; /* Example hover color */
// // // // // // //                 }

// // // // // // //                 .rts-read-more {
// // // // // // //                     display: inline-flex;
// // // // // // //                     align-items: center;
// // // // // // //                     font-weight: 600;
// // // // // // //                     color: #ff5e14;
// // // // // // //                     text-transform: uppercase;
// // // // // // //                     font-size: 14px;

// // // // // // //                 }
// // // // // // //                 .rts-read-more i {
// // // // // // //                     margin-left: -20px;
// // // // // // //                     transition: margin-left 0.3s;
// // // // // // //                 }
// // // // // // //                 .rts-read-more:hover i {
// // // // // // //                     margin-left: 12px;
// // // // // // //                 }


// // // // // // //                 /* ==================================== */
// // // // // // //                 /* --- MOBILE OVERRIDES (Watermark and Title) --- */
// // // // // // //                 /* ==================================== */
// // // // // // //                 @media (max-width: 768px) {
// // // // // // //                     /* --- SECTION 5: EVENTS WATERMARK 05 FIX --- */
// // // // // // //                     .rts-blog-area .rts-watermark-05 {
// // // // // // //                         /* Match the size of Watermark 02/03 from previous sections */
// // // // // // //                         font-size: 100px !important; 
// // // // // // //                         opacity: 0.6 !important;
// // // // // // //                         -webkit-text-stroke: 2px #f5f0f0ff !important; /* Thinner stroke */
// // // // // // //                         line-height: 1 !important; 
// // // // // // //                         /* Position/transform can remain as they are centered */
// // // // // // //                     }

// // // // // // //                     /* --- SECTION 5: EVENTS HEADING FIX --- */
// // // // // // //                     .rts-blog-area .title-style-three .title {
// // // // // // //                         font-size: 36px !important; /* Match previous headings for mobile */
// // // // // // //                     }

// // // // // // //                     /* Adjust section and container padding */
// // // // // // //                     .rts-blog-area.rts-section-gapTop {
// // // // // // //                         padding-top: 0 !important;
// // // // // // //                         margin-top: 0 !important;
// // // // // // //                     }

// // // // // // //                     .rts-blog-area .container.pt--40 {
// // // // // // //                         padding-top: 20px !important;
// // // // // // //                     }

// // // // // // //                     /* Ensure full width on mobile for better usability */
// // // // // // //                     .col-lg-4, .col-md-6 {
// // // // // // //                         max-width: 100%;
// // // // // // //                         flex: 0 0 100%;
// // // // // // //                     }
// // // // // // //                 }

// // // // // // //                 /* Further size reduction for very small screens (phones) */
// // // // // // //                 @media (max-width: 480px) {
// // // // // // //                     .rts-blog-area .rts-watermark-05 {
// // // // // // //                         font-size: 80px !important; 
// // // // // // //                     }
// // // // // // //                 }
// // // // // // //             `}</style>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Events;


// // // // // // 'use client'

// // // // // // import React from 'react';

// // // // // // // Data for the event posts (assuming images are located in the public/blog directory)
// // // // // // const eventsData = [
// // // // // //     {
// // // // // //         id: 1,
// // // // // //         image: "/images/blog/04.webp",
// // // // // //         category: "Business Solution",
// // // // // //         author: "David Dolean",
// // // // // //         title: "Building a Brand That from Market Leaders",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 2,
// // // // // //         image: "/images/blog/05.webp",
// // // // // //         category: "Business Solution",
// // // // // //         author: "David Dolean",
// // // // // //         title: "Transforming Your Approach to Business",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 3,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 4,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution4",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 5,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution5",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 6,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution6",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 7,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // //     {
// // // // // //         id: 8,
// // // // // //         image: "/images/blog/06.webp",
// // // // // //         category: "Business Solution",
// // // // // //         author: "David Dolean",
// // // // // //         title: "The quick settle tips of the new ages exist",
// // // // // //         link: "blog-details.html"
// // // // // //     },
// // // // // // ];

// // // // // // const Events = () => {
// // // // // //     return (
// // // // // //         <div className="rts-blog-area rts-section-gapTop">
// // // // // //             <div className="container pt--40">
// // // // // //                 {/* Section Title with Watermark */}
// // // // // //                 <div className="row">
// // // // // //                     <div className="col-lg-12">
// // // // // //                         <div 
// // // // // //                             className="title-style-three center"
// // // // // //                             // 💡 CRITICAL: Anchor the absolute watermark to this parent div
// // // // // //                             style={{ position: 'relative'}}
// // // // // //                         >
// // // // // //                             <span 
// // // // // //                                 className="pre" 
// // // // // //                                 style={{ 
// // // // // //                                     fontSize: '16px',
// // // // // //                                     zIndex: 1, 
// // // // // //                                     position: 'relative' // Text must be on top
// // // // // //                                 }}
// // // // // //                             >
// // // // // //                                 Highlights
// // // // // //                             </span>

// // // // // //                             {/* 💡 WATERMARK DIV '05' - Centered Positioning and Styling */}
// // // // // //                             <div 
// // // // // //                                 className="rts-watermark-05"
// // // // // //                                 style={{
// // // // // //                                     position: 'absolute',
// // // // // //                                     // Centered horizontally and vertically within the container
// // // // // //                                     top: '0%',
// // // // // //                                     left: '50%',
// // // // // //                                     transform: 'translate(-50%, -50%)', 

// // // // // //                                     // --- Styling (Hollow, Heavy, Light Gray) ---
// // // // // //                                     // Size is adjusted to 150px to ensure it does not clip
// // // // // //                                     fontSize: '150px', 
// // // // // //                                     fontWeight: '900', 

// // // // // //                                     color: 'transparent', 
// // // // // //                                     WebkitTextFillColor: 'transparent', 
// // // // // //                                     WebkitTextStroke: '3px #f5f0f0ff', // Light gray color

// // // // // //                                     opacity: 0.3, 
// // // // // //                                     zIndex: 0, // CRITICAL: Places it in the background
// // // // // //                                     lineHeight: 1,
// // // // // //                                     padding: '5px 0', 
// // // // // //                                     display: 'block',
// // // // // //                                 }}
// // // // // //                             >
// // // // // //                                 05
// // // // // //                             </div>
// // // // // //                             {/* END WATERMARK DIV */}

// // // // // //                             <h2 
// // // // // //                                 className="title rts-text-anime-style-1" 
// // // // // //                                 style={{ 
// // // // // //                                     fontSize: '48px',
// // // // // //                                     zIndex: 1, 
// // // // // //                                     position: 'relative' 
// // // // // //                                 }}
// // // // // //                             >
// // // // // //                                 Events
// // // // // //                             </h2>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* Event Posts Grid */}
// // // // // //                 <div className="row g-5 mt--20">
// // // // // //                     {eventsData.map((post) => (
// // // // // //                         <div key={post.id} className="col-lg-4 col-md-6">
// // // // // //                             {/* single Post blog large */}
// // // // // //                             <div className="rts-blog-h-2-wrapper">
// // // // // //                                 <a href={post.link} className="thumbnail">
// // // // // //                                     <img 
// // // // // //                                         src={post.image} 
// // // // // //                                         alt={post.title} 
// // // // // //                                         // Placeholder fallback for missing images
// // // // // //                                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // // // //                                     />
// // // // // //                                 </a>
// // // // // //                                 <div className="body">
// // // // // //                                     <span>{post.category} / by {post.author}</span>
// // // // // //                                     <a href={post.link}>
// // // // // //                                         <h4 className="title">{post.title}</h4>
// // // // // //                                     </a>
// // // // // //                                     <a className="rts-read-more btn-primary" href={post.link}>
// // // // // //                                         <i className="far fa-arrow-right"></i>Read More
// // // // // //                                     </a>
// // // // // //                                 </div>
// // // // // //                             </div>
// // // // // //                             {/* single Post blog large End */}
// // // // // //                         </div>
// // // // // //                     ))}
// // // // // //                 </div>

// // // // // //                 {/* --- ADDED DOTS SECTION --- */}
// // // // // //                 <div className="row mt--50">
// // // // // //                     <div className="col-12">
// // // // // //                         <div className="pagination-dots-wrapper">
// // // // // //                             <span className="dot active"></span>
// // // // // //                             <span className="dot"></span>
// // // // // //                             <span className="dot"></span>
// // // // // //                             <span className="dot"></span>
// // // // // //                             <span className="dot"></span>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* Custom CSS (Based on previous theme styles) */}
// // // // // //             <style jsx global>{`
// // // // // //                 /* General Styling Reset and Setup (adjusting container padding for mobile) */
// // // // // //                 .rts-section-gapTop {
// // // // // //                     padding-top: 100px;
// // // // // //                     padding-bottom: 50px;
// // // // // //                 }

// // // // // //                 .rts-blog-area .container.pt--40 {
// // // // // //                     padding-top: 40px;
// // // // // //                 }

// // // // // //                 .title-style-three.center { text-align: center; }
// // // // // //                 .title-style-three .pre { 
// // // // // //                     display: block; 
// // // // // //                     font-size: 14px; 
// // // // // //                     letter-spacing: 2px; 
// // // // // //                     color: #666; 
// // // // // //                     margin-bottom: 10px; 
// // // // // //                 }
// // // // // //                 .title-style-three .title { 
// // // // // //                     font-weight: 900;
// // // // // //                     text-transform: uppercase;
// // // // // //                     color: #0d1c2e;
// // // // // //                 }
// // // // // //                 /* This is a mock-up for the outline effect from your previous component's title */
// // // // // //                 .title-style-three .bg-title {
// // // // // //                     font-weight: 900;
// // // // // //                     opacity: 0.05;
// // // // // //                     line-height: 1;
// // // // // //                     position: absolute;
// // // // // //                     left: 50%;
// // // // // //                     transform: translateX(-50%);
// // // // // //                     z-index: -1;
// // // // // //                     top: -50px;
// // // // // //                 }

// // // // // //                 /* Blog Post Card Wrapper */
// // // // // //                 .rts-blog-h-2-wrapper {
// // // // // //                     border-radius: 8px;
// // // // // //                     overflow: hidden;
// // // // // //                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
// // // // // //                     transition: all 0.3s ease;
// // // // // //                     background: white;
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper:hover {
// // // // // //                     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
// // // // // //                     transform: translateY(-5px);
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper .thumbnail img {
// // // // // //                     width: 100%;
// // // // // //                     height: 250px; /* Fixed height for consistent card appearance */
// // // // // //                     object-fit: cover;
// // // // // //                     transition: transform 0.5s;
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper:hover .thumbnail img {
// // // // // //                     transform: scale(1.05);
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper .body {
// // // // // //                     padding: 25px;
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper .body span {
// // // // // //                     display: block;
// // // // // //                     font-size: 14px;
// // // // // //                     color: #888;
// // // // // //                     margin-bottom: 10px;
// // // // // //                     margin-left:-20px;
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper .body .title {
// // // // // //                     font-size: 22px;
// // // // // //                     font-weight: 700;
// // // // // //                     line-height: 1.4;
// // // // // //                     color: #0d1c2e;
// // // // // //                     margin-bottom: 15px;
// // // // // //                     transition: color 0.3s;
// // // // // //                     margin-left:-20px;
// // // // // //                 }

// // // // // //                 .rts-blog-h-2-wrapper .body .title:hover {
// // // // // //                     color: #ff5e14; /* Example hover color */
// // // // // //                 }

// // // // // //                 .rts-read-more {
// // // // // //                     display: inline-flex;
// // // // // //                     align-items: center;
// // // // // //                     font-weight: 600;
// // // // // //                     color: #ff5e14;
// // // // // //                     text-transform: uppercase;
// // // // // //                     font-size: 14px;

// // // // // //                 }
// // // // // //                 .rts-read-more i {
// // // // // //                     margin-left: -20px;
// // // // // //                     transition: margin-left 0.3s;
// // // // // //                 }
// // // // // //                 .rts-read-more:hover i {
// // // // // //                     margin-left: 12px;
// // // // // //                 }

// // // // // //                 /* --- PAGINATION DOTS STYLING --- */
// // // // // //                 .pagination-dots-wrapper {
// // // // // //                     display: flex;
// // // // // //                     align-items: center;
// // // // // //                     justify-content: center;
// // // // // //                     gap: 12px;
// // // // // //                     margin-top: 20px;
// // // // // //                 }

// // // // // //                 .dot {
// // // // // //                     width: 6px;
// // // // // //                     height: 6px;
// // // // // //                     background: #d1d5db;
// // // // // //                     border-radius: 50%;
// // // // // //                     display: inline-block;
// // // // // //                 }

// // // // // //                 .dot.active {
// // // // // //                     width: 18px;
// // // // // //                     height: 18px;
// // // // // //                     background: transparent;
// // // // // //                     border: 1.5px solid #4b5563;
// // // // // //                     position: relative;
// // // // // //                     display: flex;
// // // // // //                     align-items: center;
// // // // // //                     justify-content: center;
// // // // // //                 }

// // // // // //                 .dot.active::after {
// // // // // //                     content: "";
// // // // // //                     width: 6px;
// // // // // //                     height: 6px;
// // // // // //                     background: #4b5563;
// // // // // //                     border-radius: 50%;
// // // // // //                 }

// // // // // //                 /* --- MOBILE OVERRIDES (Watermark and Title) --- */
// // // // // //                 @media (max-width: 768px) {
// // // // // //                     /* --- SECTION 5: EVENTS WATERMARK 05 FIX --- */
// // // // // //                     .rts-blog-area .rts-watermark-05 {
// // // // // //                         font-size: 100px !important; 
// // // // // //                         opacity: 0.6 !important;
// // // // // //                         -webkit-text-stroke: 2px #f5f0f0ff !important; /* Thinner stroke */
// // // // // //                         line-height: 1 !important; 
// // // // // //                     }

// // // // // //                     .rts-blog-area .title-style-three .title {
// // // // // //                         font-size: 36px !important; 
// // // // // //                     }

// // // // // //                     .rts-blog-area.rts-section-gapTop {
// // // // // //                         padding-top: 0 !important;
// // // // // //                         margin-top: 0 !important;
// // // // // //                     }

// // // // // //                     .rts-blog-area .container.pt--40 {
// // // // // //                         padding-top: 20px !important;
// // // // // //                     }

// // // // // //                     .col-lg-4, .col-md-6 {
// // // // // //                         max-width: 100%;
// // // // // //                         flex: 0 0 100%;
// // // // // //                     }
// // // // // //                 }

// // // // // //                 @media (max-width: 480px) {
// // // // // //                     .rts-blog-area .rts-watermark-05 {
// // // // // //                         font-size: 80px !important; 
// // // // // //                     }
// // // // // //                 }
// // // // // //             `}</style>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default Events;


// // // // // 'use client'

// // // // // import React from 'react';
// // // // // // 1. Import Swiper and Pagination module
// // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // import { Pagination } from 'swiper/modules';

// // // // // // Import Swiper styles
// // // // // import 'swiper/css';
// // // // // import 'swiper/css/pagination';

// // // // // const eventsData = [
// // // // //     { id: 1, image: "/images/blog/04.webp", category: "Business Solution", author: "David Dolean", title: "Building a Brand That from Market Leaders", link: "blog-details.html" },
// // // // //     { id: 2, image: "/images/blog/05.webp", category: "Business Solution", author: "David Dolean", title: "Transforming Your Approach to Business", link: "blog-details.html" },
// // // // //     { id: 3, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // //     { id: 4, image: "/images/blog/06.webp", category: "Business Solution4", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // //     { id: 5, image: "/images/blog/06.webp", category: "Business Solution5", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // //     { id: 6, image: "/images/blog/06.webp", category: "Business Solution6", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // //     { id: 7, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // //     { id: 8, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "blog-details.html" },
// // // // // ];

// // // // // const Events = () => {
// // // // //     return (
// // // // //         <div className="rts-blog-area rts-section-gapTop">
// // // // //             <div className="container pt--40">
// // // // //                 <div className="row">
// // // // //                     <div className="col-lg-12">
// // // // //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// // // // //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// // // // //                             <div className="rts-watermark-05" style={{
// // // // //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// // // // //                                 }}> 05 </div>
// // // // //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* 2. Swiper replaces the static 'row' */}
// // // // //                 <div className="mt--20" style={{ position: 'relative' }}>
// // // // //                     <Swiper
// // // // //                         modules={[Pagination]}
// // // // //                         spaceBetween={30}
// // // // //                         slidesPerView={1}
// // // // //                         pagination={{
// // // // //                             clickable: true,
// // // // //                             el: '.pagination-dots-wrapper', // Links to your custom dots div below
// // // // //                             bulletClass: 'dot',             // Uses your existing 'dot' class
// // // // //                             bulletActiveClass: 'active'     // Uses your existing 'active' class
// // // // //                         }}
// // // // //                         breakpoints={{
// // // // //                             768: { slidesPerView: 2 },
// // // // //                             1200: { slidesPerView: 3 }
// // // // //                         }}
// // // // //                     >
// // // // //                         {eventsData.map((post) => (
// // // // //                             <SwiperSlide key={post.id}>
// // // // //                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
// // // // //                                     <a href={post.link} className="thumbnail">
// // // // //                                         <img 
// // // // //                                             src={post.image} 
// // // // //                                             alt={post.title} 
// // // // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // // //                                         />
// // // // //                                     </a>
// // // // //                                     <div className="body">
// // // // //                                         <span>{post.category} / by {post.author}</span>
// // // // //                                         <a href={post.link}>
// // // // //                                             <h4 className="title">{post.title}</h4>
// // // // //                                         </a>
// // // // //                                         <a className="rts-read-more btn-primary" href={post.link}>
// // // // //                                             <i className="far fa-arrow-right"></i>Read More
// // // // //                                         </a>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                             </SwiperSlide>
// // // // //                         ))}
// // // // //                     </Swiper>
// // // // //                 </div>

// // // // //                 {/* 3. The Pagination Container (Swiper will inject dots here) */}
// // // // //                 <div className="row mt--50">
// // // // //                     <div className="col-12">
// // // // //                         <div className="pagination-dots-wrapper">
// // // // //                             {/* Swiper will automatically generate the <span class="dot"></span> elements here */}
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <style jsx global>{`
// // // // //                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
// // // // //                 .title-style-three.center { text-align: center; }
// // // // //                 .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
// // // // //                 .title-style-three .title { font-weight: 900; text-transform: uppercase; color: #0d1c2e; }

// // // // //                 .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; }
// // // // //                 .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
// // // // //                 .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; transition: 0.5s; }
// // // // //                 .rts-blog-h-2-wrapper .body { padding: 25px; }
// // // // //                 .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
// // // // //                 .rts-blog-h-2-wrapper .body .title { font-size: 22px; font-weight: 700; line-height: 1.4; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; }
// // // // //                 .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; }
// // // // //                 .rts-read-more i { margin-left: -20px; transition: 0.3s; }
// // // // //                 .rts-read-more:hover i { margin-left: 12px; }

// // // // //                 /* --- PAGINATION DOTS STYLING --- */
// // // // //                 .pagination-dots-wrapper {
// // // // //                     display: flex;
// // // // //                     align-items: center;
// // // // //                     justify-content: center;
// // // // //                     gap: 12px;
// // // // //                     margin-top: 20px;
// // // // //                     min-height: 30px;
// // // // //                 }

// // // // //                 .dot {
// // // // //                     width: 6px;
// // // // //                     height: 6px;
// // // // //                     background: #d1d5db;
// // // // //                     border-radius: 50%;
// // // // //                     display: inline-block;
// // // // //                     cursor: pointer;
// // // // //                     border: none;
// // // // //                     padding: 0;
// // // // //                 }

// // // // //                 .dot.active {
// // // // //                     width: 18px;
// // // // //                     height: 18px;
// // // // //                     background: transparent;
// // // // //                     border: 1.5px solid #4b5563;
// // // // //                     position: relative;
// // // // //                     display: flex;
// // // // //                     align-items: center;
// // // // //                     justify-content: center;
// // // // //                 }

// // // // //                 .dot.active::after {
// // // // //                     content: "";
// // // // //                     width: 6px;
// // // // //                     height: 6px;
// // // // //                     background: #4b5563;
// // // // //                     border-radius: 50%;
// // // // //                 }

// // // // //                 @media (max-width: 768px) {
// // // // //                     .rts-blog-area .rts-watermark-05 { font-size: 100px !important; opacity: 0.6 !important; }
// // // // //                     .rts-blog-area .title-style-three .title { font-size: 36px !important; }
// // // // //                 }
// // // // //             `}</style>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Events;




// // // // // 'use client'

// // // // // import React from 'react';
// // // // // // 1. Import Swiper and Pagination module
// // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // import { Pagination } from 'swiper/modules';

// // // // // // Import Swiper styles
// // // // // import 'swiper/css';
// // // // // import 'swiper/css/pagination';

// // // // // const eventsData = [
// // // // //     { id: 1, image: "/images/blog/04.webp", category: "Business Solution", author: "David Dolean", title: "Building a Brand That from Market Leaders", link: "/archive" },
// // // // //     { id: 2, image: "/images/blog/05.webp", category: "Solution Model", author: "David Dolean", title: "Transforming Your Approach to Business", link: "/archive" },
// // // // //     { id: 3, image: "/images/blog/06.webp", category: "Finbiz Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // //     { id: 4, image: "/images/blog/06.webp", category: "Consuting Business", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // //     //{ id: 5, image: "/images/blog/06.webp", category: "Business Solution5", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // //     //{ id: 6, image: "/images/blog/06.webp", category: "Business Solution6", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // //     //{ id: 7, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // //     //{ id: 8, image: "/images/blog/06.webp", category: "Business Solution", author: "David Dolean", title: "The quick settle tips of the new ages exist", link: "/archive" },
// // // // // ];

// // // // // const Events = () => {
// // // // //     return (
// // // // //         <div className="rts-blog-area rts-section-gapTop">
// // // // //             <div className="container pt--40">
// // // // //                 <div className="row">
// // // // //                     <div className="col-lg-12">
// // // // //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// // // // //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// // // // //                             <div className="rts-watermark-05" style={{
// // // // //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// // // // //                                 }}> 05 </div>
// // // // //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* 2. Swiper replaces the static 'row' */}
// // // // //                 <div className="mt--20" style={{ position: 'relative' }}>
// // // // //                     <Swiper
// // // // //                         modules={[Pagination]}
// // // // //                         spaceBetween={30}
// // // // //                         slidesPerView={1}
// // // // //                         pagination={{
// // // // //                             clickable: true,
// // // // //                             el: '.pagination-dots-wrapper', // Links to your custom dots div below
// // // // //                             bulletClass: 'dot',             // Uses your existing 'dot' class
// // // // //                             bulletActiveClass: 'active'     // Uses your existing 'active' class
// // // // //                         }}
// // // // //                         breakpoints={{
// // // // //                             768: { slidesPerView: 2 },
// // // // //                             1200: { slidesPerView: 3 }
// // // // //                         }}
// // // // //                     >
// // // // //                         {eventsData.map((post) => (
// // // // //                             <SwiperSlide key={post.id}>
// // // // //                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
// // // // //                                     <a href={post.link} className="thumbnail">
// // // // //                                         <img 
// // // // //                                             src={post.image} 
// // // // //                                             alt={post.title} 
// // // // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // // //                                         />
// // // // //                                     </a>
// // // // //                                     <div className="body">
// // // // //                                         <span>{post.category} / by {post.author}</span>
// // // // //                                         <a href={post.link}>
// // // // //                                             <h4 className="title">{post.title}</h4>
// // // // //                                         </a>
// // // // //                                         <a className="rts-read-more btn-primary" href={post.link}>
// // // // //                                             <i className="far fa-arrow-right"></i>Read More
// // // // //                                         </a>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                             </SwiperSlide>
// // // // //                         ))}
// // // // //                     </Swiper>
// // // // //                 </div>

// // // // //                 {/* 3. The Pagination Container (Swiper will inject dots here) */}
// // // // //                 <div className="row mt--50">
// // // // //                     <div className="col-12">
// // // // //                         <div className="pagination-dots-wrapper">
// // // // //                             {/* Swiper will automatically generate the <span class="dot"></span> elements here */}
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <style jsx global>{`
// // // // //                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
// // // // //                 .title-style-three.center { text-align: center; }
// // // // //                 .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
// // // // //                 .title-style-three .title { font-weight: 900; text-transform: uppercase; color: #0d1c2e; }

// // // // //                 .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; }
// // // // //                 .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
// // // // //                 .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; transition: 0.5s; }
// // // // //                 .rts-blog-h-2-wrapper .body { padding: 25px; }
// // // // //                 .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
// // // // //                 .rts-blog-h-2-wrapper .body .title { font-size: 22px; font-weight: 700; line-height: 1.4; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; }
// // // // //                 .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; }
// // // // //                 .rts-read-more i { margin-left: -20px; transition: 0.3s; }
// // // // //                 .rts-read-more:hover i { margin-left: 12px; }

// // // // //                 /* --- PAGINATION DOTS STYLING --- */
// // // // //                 .pagination-dots-wrapper {
// // // // //                     display: flex;
// // // // //                     align-items: center;
// // // // //                     justify-content: center;
// // // // //                     gap: 12px;
// // // // //                     margin-top: 20px;
// // // // //                     min-height: 30px;
// // // // //                 }

// // // // //                 .dot {
// // // // //                     width: 6px;
// // // // //                     height: 6px;
// // // // //                     background: #d1d5db;
// // // // //                     border-radius: 50%;
// // // // //                     display: inline-block;
// // // // //                     cursor: pointer;
// // // // //                     border: none;
// // // // //                     padding: 0;
// // // // //                 }

// // // // //                 .dot.active {
// // // // //                     width: 18px;
// // // // //                     height: 18px;
// // // // //                     background: transparent;
// // // // //                     border: 1.5px solid #4b5563;
// // // // //                     position: relative;
// // // // //                     display: flex;
// // // // //                     align-items: center;
// // // // //                     justify-content: center;
// // // // //                 }

// // // // //                 .dot.active::after {
// // // // //                     content: "";
// // // // //                     width: 6px;
// // // // //                     height: 6px;
// // // // //                     background: #4b5563;
// // // // //                     border-radius: 50%;
// // // // //                 }

// // // // //                 @media (max-width: 768px) {
// // // // //                     .rts-blog-area .rts-watermark-05 { font-size: 80px !important; opacity: 0.6 !important; }
// // // // //                     .rts-blog-area .title-style-three .title { font-size: 36px !important; }
// // // // //                 }
// // // // //             `}</style>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Events;



// // // // 'use client'

// // // // import React, { useState } from 'react';
// // // // import useSWR from 'swr';
// // // // // 1. Import Swiper and Pagination module
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Pagination } from 'swiper/modules';

// // // // // Import Swiper styles
// // // // import 'swiper/css';
// // // // import 'swiper/css/pagination';

// // // // // Fetcher function for SWR
// // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // const Events = () => {
// // // //     // 1. Fetch data from your API
// // // //     const { data: apiResponse, error } = useSWR("https://gba.mig.org.pk/api/news", fetcher);

// // // //     // 2. State for filtering (Same logic as your sidebar)
// // // //     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // //     if (error) return <div className="text-center p-5">Failed to load events</div>;
// // // //     if (!apiResponse) return <div className="text-center p-5">Loading Events...</div>;

// // // //     // Extract the array from the API response
// // // //     const allPosts = apiResponse.data || [];

// // // //     // 3. Filter Logic: Show only posts matching selectedCategory, or show all if null
// // // //     const displayPosts = selectedCategory 
// // // //         ? allPosts.filter((post: any) => post.category === selectedCategory)
// // // //         : allPosts;

// // // //     return (
// // // //         <div className="rts-blog-area rts-section-gapTop">
// // // //             <div className="container pt--40">
// // // //                 <div className="row">
// // // //                     <div className="col-lg-12">
// // // //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// // // //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// // // //                             <div className="rts-watermark-05" style={{
// // // //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// // // //                                 }}> 05 </div>
// // // //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Optional: Reset Filter Button (Shown only when a category is selected) */}
// // // //                 {selectedCategory && (
// // // //                     <div className="row mb--20">
// // // //                         <div className="col-12 text-center">
// // // //                             <button 
// // // //                                 onClick={() => setSelectedCategory(null)}
// // // //                                 style={{ border: 'none', background: '#ff5e14', color: '#fff', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
// // // //                             >
// // // //                                 Show All Posts (Category: {selectedCategory}) ×
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 <div className="mt--20" style={{ position: 'relative' }}>
// // // //                     <Swiper
// // // //                         key={selectedCategory || 'all'} // Forces swiper to refresh when filter changes
// // // //                         modules={[Pagination]}
// // // //                         spaceBetween={30}
// // // //                         slidesPerView={1}
// // // //                         pagination={{
// // // //                             clickable: true,
// // // //                             el: '.pagination-dots-wrapper',
// // // //                             bulletClass: 'dot',
// // // //                             bulletActiveClass: 'active'
// // // //                         }}
// // // //                         breakpoints={{
// // // //                             768: { slidesPerView: 2 },
// // // //                             1200: { slidesPerView: 3 }
// // // //                         }}
// // // //                     >
// // // //                         {displayPosts.map((post: any) => (
// // // //                             <SwiperSlide key={post.id}>
// // // //                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
// // // //                                     <a href={post.fb_post_url || "#"} className="thumbnail" target="_blank" rel="noopener noreferrer">
// // // //                                         <img 
// // // //                                             src={post.image} 
// // // //                                             alt={post.title} 
// // // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // //                                         />
// // // //                                     </a>
// // // //                                     <div className="body">
// // // //                                         {/* Clickable Category: Updates the state to filter other cards */}
// // // //                                         <span 
// // // //                                             onClick={(e) => { e.preventDefault(); setSelectedCategory(post.category); }}
// // // //                                             style={{ cursor: 'pointer', color: selectedCategory === post.category ? '#ff5e14' : 'inherit', fontWeight: 'bold' }}
// // // //                                         >
// // // //                                             {post.category} / GBC Official
// // // //                                         </span>

// // // //                                         <a href={post.fb_post_url || "#"}>
// // // //                                             <h4 className="title">{post.title}</h4>
// // // //                                         </a>
// // // //                                         <a className="rts-read-more btn-primary" href={post.fb_post_url || "#"}>
// // // //                                             <i className="far fa-arrow-right"></i>Read More
// // // //                                         </a>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </SwiperSlide>
// // // //                         ))}
// // // //                     </Swiper>
// // // //                 </div>

// // // //                 <div className="row mt--50">
// // // //                     <div className="col-12">
// // // //                         <div className="pagination-dots-wrapper"></div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <style jsx global>{`
// // // //                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
// // // //                 .title-style-three.center { text-align: center; }
// // // //                 .title-style-three .pre { display: block; font-size: 14px; letter-spacing: 2px; color: #666; margin-bottom: 10px; }
// // // //                 .title-style-three .title { font-weight: 900; text-transform: uppercase; color: #0d1c2e; }

// // // //                 .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; height: 100%; }
// // // //                 .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
// // // //                 .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; transition: 0.5s; }
// // // //                 .rts-blog-h-2-wrapper .body { padding: 25px; }
// // // //                 .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
// // // //                 .rts-blog-h-2-wrapper .body .title { font-size: 20px; font-weight: 700; line-height: 1.4; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; min-height: 56px; }
// // // //                 .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; text-decoration: none; }
// // // //                 .rts-read-more i { margin-left: 10px; transition: 0.3s; }
// // // //                 .rts-read-more:hover i { margin-left: 15px; }

// // // //                 .pagination-dots-wrapper { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 20px; min-height: 30px; }
// // // //                 .dot { width: 6px; height: 6px; background: #d1d5db; border-radius: 50%; display: inline-block; cursor: pointer; border: none; padding: 0; }
// // // //                 .dot.active { width: 18px; height: 18px; background: transparent; border: 1.5px solid #4b5563; position: relative; display: flex; align-items: center; justify-content: center; }
// // // //                 .dot.active::after { content: ""; width: 6px; height: 6px; background: #4b5563; border-radius: 50%; }

// // // //                 @media (max-width: 768px) {
// // // //                     .rts-blog-area .rts-watermark-05 { font-size: 80px !important; opacity: 0.6 !important; }
// // // //                     .rts-blog-area .title-style-three .title { font-size: 36px !important; }
// // // //                 }
// // // //             `}</style>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Events;


// // // // 'use client'

// // // // import React, { useState } from 'react';
// // // // import useSWR from 'swr';
// // // // import { useRouter } from 'next/navigation'; // Import router for navigation
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Pagination } from 'swiper/modules';

// // // // import 'swiper/css';
// // // // import 'swiper/css/pagination';

// // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // Helper to create slug from title
// // // // const slugify = (text: string) =>
// // // //     text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// // // // const Events = () => {
// // // //     const router = useRouter();
// // // //     const { data: apiResponse, error } = useSWR("https://gba.mig.org.pk/api/news", fetcher);
// // // //     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // //     if (error) return <div className="text-center p-5">Failed to load events</div>;
// // // //     if (!apiResponse) return <div className="text-center p-5">Loading Events...</div>;

// // // //     const allPosts = apiResponse.data || [];
// // // //     const displayPosts = selectedCategory 
// // // //         ? allPosts.filter((post: any) => post.category === selectedCategory)
// // // //         : allPosts;

// // // //     // 🔹 Navigation Logic
// // // //     const handleNavigation = (e: React.MouseEvent, post: any) => {
// // // //         e.preventDefault();
// // // //         e.stopPropagation(); // Prevents category click from triggering this

// // // //         if (post.fb_post_url && post.fb_post_url.trim() !== "") {
// // // //             const slug = slugify(post.title);
// // // //             router.push(`/blog-details/${slug}`);
// // // //         } else {
// // // //             alert("No FB post available for this event.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="rts-blog-area rts-section-gapTop">
// // // //             <div className="container pt--40">
// // // //                 <div className="row">
// // // //                     <div className="col-lg-12">
// // // //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// // // //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// // // //                             <div className="rts-watermark-05" style={{
// // // //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// // // //                                 }}> 05 </div>
// // // //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {selectedCategory && (
// // // //                     <div className="row mb--20">
// // // //                         <div className="col-12 text-center">
// // // //                             <button 
// // // //                                 onClick={() => setSelectedCategory(null)}
// // // //                                 style={{ border: 'none', background: '#ff5e14', color: '#fff', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
// // // //                             >
// // // //                                 Show All Posts (Category: {selectedCategory}) ×
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 <div className="mt--20" style={{ position: 'relative' }}>
// // // //                     <Swiper
// // // //                         key={selectedCategory || 'all'}
// // // //                         modules={[Pagination]}
// // // //                         spaceBetween={30}
// // // //                         slidesPerView={1}
// // // //                         pagination={{
// // // //                             clickable: true,
// // // //                             el: '.pagination-dots-wrapper',
// // // //                             bulletClass: 'dot',
// // // //                             bulletActiveClass: 'active'
// // // //                         }}
// // // //                         breakpoints={{
// // // //                             768: { slidesPerView: 2 },
// // // //                             1200: { slidesPerView: 3 }
// // // //                         }}
// // // //                     >
// // // //                         {displayPosts.map((post: any) => (
// // // //                             <SwiperSlide key={post.id}>
// // // //                                 {/* 🔹 Whole div click triggers navigation check */}
// // // //                                 <div 
// // // //                                     className="rts-blog-h-2-wrapper" 
// // // //                                     style={{ margin: '15px 5px', cursor: 'pointer' }}
// // // //                                     onClick={(e) => handleNavigation(e, post)}
// // // //                                 >
// // // //                                     <div className="thumbnail">
// // // //                                         <img 
// // // //                                             src={post.image} 
// // // //                                             alt={post.title} 
// // // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // // //                                         />
// // // //                                     </div>
// // // //                                     <div className="body">
// // // //                                         <span 
// // // //                                             onClick={(e) => { 
// // // //                                                 e.preventDefault(); 
// // // //                                                 e.stopPropagation(); // Stops main div click
// // // //                                                 setSelectedCategory(post.category); 
// // // //                                             }}
// // // //                                             style={{ cursor: 'pointer', color: selectedCategory === post.category ? '#ff5e14' : 'inherit', fontWeight: 'bold' }}
// // // //                                         >
// // // //                                             {post.category} / GBC Official
// // // //                                         </span>

// // // //                                         <h4 className="title">{post.title}</h4>

// // // //                                         <span className="rts-read-more btn-primary">
// // // //                                             <i className="far fa-arrow-right"></i>Read More
// // // //                                         </span>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </SwiperSlide>
// // // //                         ))}
// // // //                     </Swiper>
// // // //                 </div>

// // // //                 <div className="row mt--50">
// // // //                     <div className="col-12">
// // // //                         <div className="pagination-dots-wrapper"></div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <style jsx global>{`
// // // //                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 50px; }
// // // //                 .title-style-three.center { text-align: center; }
// // // //                 .rts-blog-h-2-wrapper { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; background: white; height: 100%; }
// // // //                 .rts-blog-h-2-wrapper:hover { box-shadow: 0 15px 45px rgba(0,0,0,0.1); transform: translateY(-5px); }
// // // //                 .rts-blog-h-2-wrapper .thumbnail img { width: 100%; height: 250px; object-fit: cover; }
// // // //                 .rts-blog-h-2-wrapper .body { padding: 25px; }
// // // //                 .rts-blog-h-2-wrapper .body span { display: block; font-size: 14px; color: #888; margin-bottom: 10px; margin-left:-20px; }
// // // //                 .rts-blog-h-2-wrapper .body .title { font-size: 20px; font-weight: 700; color: #0d1c2e; margin-bottom: 15px; margin-left:-20px; min-height: 56px; }
// // // //                 .rts-read-more { display: inline-flex; align-items: center; font-weight: 600; color: #ff5e14; text-transform: uppercase; font-size: 14px; }
// // // //                 .pagination-dots-wrapper { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 20px; }
// // // //                 .dot { width: 6px; height: 6px; background: #d1d5db; border-radius: 50%; display: inline-block; cursor: pointer; }
// // // //                 .dot.active { width: 18px; height: 18px; background: transparent; border: 1.5px solid #4b5563; display: flex; align-items: center; justify-content: center; }
// // // //                 .dot.active::after { content: ""; width: 6px; height: 6px; background: #4b5563; border-radius: 50%; }
// // // //             `}</style>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Events;


// // // 'use client'

// // // import React, { useState } from 'react';
// // // import useSWR from 'swr';
// // // import { useRouter } from 'next/navigation';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Pagination } from 'swiper/modules';

// // // import 'swiper/css';
// // // import 'swiper/css/pagination';

// // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // const slugify = (text: string) =>
// // //     text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// // // const Events = () => {
// // //     const router = useRouter();
// // //     const { data: apiResponse, error } = useSWR("https://gba.mig.org.pk/api/news", fetcher);
// // //     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // //     if (error) return <div className="text-center p-5">Failed to load events</div>;
// // //     if (!apiResponse) return <div className="text-center p-5">Loading Events...</div>;

// // //     const allPosts = apiResponse.data || [];
// // //     const displayPosts = selectedCategory 
// // //         ? allPosts.filter((post: any) => post.category === selectedCategory)
// // //         : allPosts;

// // //     const handleNavigation = (e: React.MouseEvent, post: any) => {
// // //         e.preventDefault();
// // //         e.stopPropagation();

// // //         if (post.fb_post_url && post.fb_post_url.trim() !== "") {
// // //             const slug = slugify(post.title);
// // //             router.push(`/blog-details/${slug}`);
// // //         } else {
// // //             alert("No FB post available for this event.");
// // //         }
// // //     };

// // //     return (
// // //         <div className="rts-blog-area rts-section-gapTop">
// // //             <div className="container pt--40">
// // //                 <div className="row">
// // //                     <div className="col-lg-12">
// // //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// // //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// // //                             <div className="rts-watermark-05" style={{
// // //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// // //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// // //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// // //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// // //                                 }}> 05 </div>
// // //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {selectedCategory && (
// // //                     <div className="row mb--20">
// // //                         <div className="col-12 text-center">
// // //                             <button 
// // //                                 onClick={() => setSelectedCategory(null)}
// // //                                 style={{ border: 'none', background: '#ff5e14', color: '#fff', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}
// // //                             >
// // //                                 Show All Posts (Category: {selectedCategory}) ×
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 <div className="mt--20" style={{ position: 'relative' }}>
// // //                     <Swiper
// // //                         key={selectedCategory || 'all'}
// // //                         modules={[Pagination]}
// // //                         spaceBetween={30}
// // //                         slidesPerView={1}
// // //                         pagination={{
// // //                             clickable: true,
// // //                             el: '.pagination-dots-wrapper',
// // //                             bulletClass: 'dot',
// // //                             bulletActiveClass: 'active'
// // //                         }}
// // //                         breakpoints={{
// // //                             768: { slidesPerView: 2 },
// // //                             1200: { slidesPerView: 3 }
// // //                         }}
// // //                     >
// // //                         {displayPosts.map((post: any) => (
// // //                             <SwiperSlide key={post.id} style={{ height: 'auto' }}>
// // //                                 <div 
// // //                                     className="rts-blog-h-2-wrapper" 
// // //                                     style={{ margin: '15px 5px', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '25px', overflow: 'hidden' }}
// // //                                     onClick={(e) => handleNavigation(e, post)}
// // //                                 >
// // //                                     <div className="thumbnail">
// // //                                         <img 
// // //                                             src={post.image} 
// // //                                             alt={post.title} 
// // //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// // //                                         />
// // //                                     </div>
// // //                                     {/* Increased bottom padding (pb--40) to show the bottom corners clearly */}
// // //                                     <div className="body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '30px 25px 40px 25px' }}>
// // //                                         <span 
// // //                                             onClick={(e) => { 
// // //                                                 e.preventDefault(); 
// // //                                                 e.stopPropagation(); 
// // //                                                 setSelectedCategory(post.category); 
// // //                                             }}
// // //                                             style={{ cursor: 'pointer', color: selectedCategory === post.category ? '#ff5e14' : 'inherit', fontWeight: 'bold', fontSize: '14px', marginBottom: '12px', display: 'block' }}
// // //                                         >
// // //                                             {post.category} / GBC Official
// // //                                         </span>

// // //                                         <h4 className="title">{post.title}</h4>

// // //                                         <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
// // //                                             <span className="rts-read-more">
// // //                                                 <i className="far fa-arrow-right" style={{ marginRight: '8px' }}></i> READ MORE
// // //                                             </span>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </SwiperSlide>
// // //                         ))}
// // //                     </Swiper>
// // //                 </div>

// // //                 <div className="row mt--50">
// // //                     <div className="col-12">
// // //                         <div className="pagination-dots-wrapper"></div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <style jsx global>{`
// // //                 .rts-section-gapTop { padding-top: 100px; padding-bottom: 100px; }
// // //                 .title-style-three.center { text-align: center; }

// // //                 .rts-blog-h-2-wrapper { 
// // //                     box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
// // //                     transition: all 0.3s ease; 
// // //                     border: 1px solid #f0f0f0;
// // //                     /* Ensuring the bottom shape is fully visible */
// // //                     margin-bottom: 20px; 
// // //                 }

// // //                 .rts-blog-h-2-wrapper:hover { 
// // //                     box-shadow: 0 15px 45px rgba(0,0,0,0.1); 
// // //                     transform: translateY(-5px); 
// // //                 }

// // //                 .rts-blog-h-2-wrapper .thumbnail img { 
// // //                     width: 100%; 
// // //                     height: 250px; 
// // //                     object-fit: cover; 
// // //                 }

// // //                 .rts-blog-h-2-wrapper .body .title { 
// // //                     font-size: 20px; 
// // //                     font-weight: 700; 
// // //                     color: #0d1c2e; 
// // //                     margin-bottom: 0;
// // //                     display: -webkit-box;
// // //                     -webkit-line-clamp: 2; 
// // //                     -webkit-box-orient: vertical;
// // //                     overflow: hidden;
// // //                     text-overflow: ellipsis;
// // //                     line-height: 1.4;
// // //                     min-height: 56px;
// // //                 }

// // //                 .rts-read-more { 
// // //                     display: inline-flex; 
// // //                     align-items: center; 
// // //                     font-weight: 700; 
// // //                     color: #0d1c2e; 
// // //                     letter-spacing: 1px;
// // //                     text-transform: uppercase; 
// // //                     font-size: 13px;
// // //                     transition: 0.3s;
// // //                 }

// // //                 .rts-blog-h-2-wrapper:hover .rts-read-more {
// // //                     color: #ff5e14;
// // //                 }

// // //                 .pagination-dots-wrapper { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 20px; }
// // //                 .dot { width: 6px; height: 6px; background: #d1d5db; border-radius: 50%; display: inline-block; cursor: pointer; }
// // //                 .dot.active { width: 18px; height: 18px; background: transparent; border: 1.5px solid #4b5563; display: flex; align-items: center; justify-content: center; }
// // //                 .dot.active::after { content: ""; width: 6px; height: 6px; background: #4b5563; border-radius: 50%; }
// // //             `}</style>
// // //         </div>
// // //     );
// // // };

// // // export default Events;



// // 'use client'

// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Pagination } from 'swiper/modules';
// // import useSWR from 'swr';
// // import Link from 'next/link';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';

// // const fetcher = (url) => fetch(url).then((res) => res.json());

// // const Events = () => {
// //     const { data, error, isLoading } = useSWR("https://gba.mig.org.pk/api/news", fetcher);

// //     if (error) return <div className="text-center p-5">Failed to load events</div>;
// //     if (isLoading) return <div className="text-center p-5">Loading Events...</div>;

// //     const eventsData = data?.data || [];

// //     // Truncate function to keep cards balanced and headings uniform
// //     const truncateText = (str, num) => {
// //         if (str?.length <= num) return str;
// //         return str?.slice(0, num) + "...";
// //     };

// //     return (
// //         <div className="rts-blog-area rts-section-gapTop">
// //             <div className="container pt--40">
// //                 <div className="row">
// //                     <div className="col-lg-12">
// //                         <div className="title-style-three center" style={{ position: 'relative'}}>
// //                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
// //                             <div className="rts-watermark-05" style={{
// //                                     position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)', 
// //                                     fontSize: '150px', fontWeight: '900', color: 'transparent', 
// //                                     WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px #f5f0f0ff', 
// //                                     opacity: 0.3, zIndex: 0, lineHeight: 1, padding: '5px 0', display: 'block',
// //                                 }}> 05 </div>
// //                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="mt--20" style={{ position: 'relative' }}>
// //                     <Swiper
// //                         modules={[Pagination]}
// //                         spaceBetween={30}
// //                         slidesPerView={1}
// //                         pagination={{
// //                             clickable: true,
// //                             el: '.pagination-dots-wrapper',
// //                             bulletClass: 'dot',
// //                             bulletActiveClass: 'active'
// //                         }}
// //                         breakpoints={{
// //                             768: { slidesPerView: 2 },
// //                             1200: { slidesPerView: 3 }
// //                         }}
// //                     >
// //                         {eventsData.map((post) => (
// //                             <SwiperSlide key={post.id}>
// //                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
// //                                     <div className="thumbnail">
// //                                         <img 
// //                                             src={post.image} 
// //                                             alt={post.title} 
// //                                             className="event-img"
// //                                             onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/400x250/F0F8FF/333333?text=Event+Image` }}
// //                                         />
// //                                     </div>
// //                                     <div className="body">
// //                                         {/* Category text is now Black with "/ by GBA Official" */}
// //                                         <span className="category-tag">
// //                                             {post.category} / by GBA Official
// //                                         </span>

// //                                         <h4 className="title">
// //                                             {truncateText(post.title, 50)}
// //                                         </h4>

// //                                         <Link 
// //                                             className="rts-read-more" 
// //                                             href={`/archive?category=${encodeURIComponent(post.category)}`}
// //                                         >
// //                                             <div className="read-more-circle">
// //                                                 <i className="far fa-arrow-right"></i>
// //                                             </div>
// //                                             <span>Read More</span>
// //                                         </Link>
// //                                     </div>
// //                                 </div>
// //                             </SwiperSlide>
// //                         ))}
// //                     </Swiper>
// //                 </div>

// //                 <div className="row mt--50">
// //                     <div className="col-12">
// //                         <div className="pagination-dots-wrapper"></div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <style jsx global>{`
// //                 .rts-blog-h-2-wrapper { 
// //                     border-radius: 15px; 
// //                     overflow: hidden; 
// //                     box-shadow: 0 5px 25px rgba(0,0,0,0.06); 
// //                     background: white; 
// //                     height: 540px; 
// //                     display: flex;
// //                     flex-direction: column;
// //                     border: 1px solid #f0f0f0;
// //                 }

// //                 /* Making the image display larger and taller as requested */
// //                 .event-img { 
// //                     width: 100%; 
// //                     height: 280px; 
// //                     object-fit: cover; 
// //                     transition: transform 0.5s ease;
// //                 }

// //                 .rts-blog-h-2-wrapper:hover .event-img {
// //                     transform: scale(1.05);
// //                 }

// //                 .rts-blog-h-2-wrapper .body { 
// //                     padding: 25px 30px; 
// //                     display: flex;
// //                     flex-direction: column;
// //                     flex-grow: 1;
// //                 }

// //                 /* Category color changed to Black as requested */
// //                 .category-tag { 
// //                     display: block; 
// //                     font-size: 14px; 
// //                     color: #1C2428 !important; 
// //                     font-weight: 500;
// //                     margin-bottom: 12px;
// //                 }

// //                 .rts-blog-h-2-wrapper .body .title { 
// //                     font-size: 22px; 
// //                     font-weight: 700; 
// //                     line-height: 1.3; 
// //                     color: #1C2428; 
// //                     margin-bottom: auto;
// //                     min-height: 90px;
// //                 }

// //                 .rts-read-more { 
// //                     display: flex; 
// //                     align-items: center; 
// //                     gap: 12px;
// //                     text-decoration: none !important;
// //                     margin-top: 15px;
// //                 }

// //                 .rts-read-more span {
// //                     font-size: 14px;
// //                     font-weight: 600;
// //                     color: #1C2428;
// //                 }

// //                 .read-more-circle {
// //                     width: 38px;
// //                     height: 38px;
// //                     background: #f8f9fa;
// //                     border-radius: 50%;
// //                     display: flex;
// //                     align-items: center;
// //                     justify-content: center;
// //                     transition: all 0.3s ease;
// //                 }

// //                 .rts-read-more:hover .read-more-circle {
// //                     background: #1C2428;
// //                 }

// //                 .rts-read-more:hover i {
// //                     color: white;
// //                 }

// //                 .read-more-circle i { 
// //                     font-size: 12px; 
// //                     color: #1C2428; 
// //                 }

// //                 /* Pagination Dots */
// //                 .pagination-dots-wrapper .dot { 
// //                     width: 10px; 
// //                     height: 10px; 
// //                     background: #ccc; 
// //                     margin: 0 5px;
// //                     border-radius: 50%;
// //                 }

// //                 .pagination-dots-wrapper .dot.active { 
// //                     background: #1C2428;
// //                     transform: scale(1.2);
// //                 }

// //                 @media (max-width: 768px) {
// //                     .event-img { height: 220px; }
// //                     .rts-blog-h-2-wrapper { height: auto; min-height: 480px; }
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // export default Events;


// 'use client'

// import React, { Suspense } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import useSWR from 'swr';
// import Link from 'next/link';

// import 'swiper/css';
// import 'swiper/css/pagination';

// // Fetcher
// const fetcher = (url) => fetch(url).then((res) => {
//     if (!res.ok) throw new Error('Failed to fetch');
//     return res.json();
// });

// const EventsContent = () => {
//     // FIX 1: Safe URL string for Vercel
//     const apiUrl = "https://gba.mig.org.pk/api/news";

//     const { data, error, isLoading } = useSWR(apiUrl, fetcher, {
//         revalidateOnFocus: false,
//     });

//     if (error) return <div className="text-center p-5">Failed to load events</div>;
//     if (isLoading) return <div className="text-center p-5">Loading Events...</div>;

//     // FIX 2: prevent hydration mismatch
//     if (!data) return null;

//     const eventsData = data?.data || [];

//     if (eventsData.length === 0) {
//         return <div className="text-center p-5">No Events Found</div>;
//     }

//     // Truncate function
//     const truncateText = (str, num) => {
//         if (!str) return "";
//         return str.length <= num ? str : str.slice(0, num) + "...";
//     };

//     return (
//         <div className="rts-blog-area rts-section-gapTop">
//             <div className="container pt--40">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="title-style-three center" style={{ position: 'relative' }}>
//                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
//                             <div className="rts-watermark-05" style={{
//                                 position: 'absolute',
//                                 top: '0%',
//                                 left: '50%',
//                                 transform: 'translate(-50%, -50%)',
//                                 fontSize: '150px',
//                                 fontWeight: '900',
//                                 color: 'transparent',
//                                 WebkitTextFillColor: 'transparent',
//                                 WebkitTextStroke: '3px #f5f0f0ff',
//                                 opacity: 0.3,
//                                 zIndex: 0,
//                                 lineHeight: 1,
//                                 padding: '5px 0',
//                                 display: 'block',
//                             }}> 05 </div>
//                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}> Events </h2>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt--20" style={{ position: 'relative' }}>
//                     <Swiper
//                         modules={[Pagination]}
//                         spaceBetween={30}
//                         slidesPerView={1}
//                         pagination={{
//                             clickable: true,
//                             el: '.pagination-dots-wrapper',
//                             bulletClass: 'dot',
//                             bulletActiveClass: 'active'
//                         }}
//                         breakpoints={{
//                             768: { slidesPerView: 2 },
//                             1200: { slidesPerView: 3 }
//                         }}
//                     >
//                         {eventsData.map((post) => {
//                             // FIX 3: convert category always to safe string
//                             const cat = String(post.category || "");

//                             return (
//                                 <SwiperSlide key={post.id}>
//                                     <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
//                                         <div className="thumbnail">
//                                             <img
//                                                 src={post.image || '/placeholder.jpg'}
//                                                 alt={post.title || 'Event'}
//                                                 className="event-img"
//                                                 loading="lazy"
//                                             />
//                                         </div>
//                                         <div className="body">
//                                             <span className="category-tag">
//                                                 {post.category} / by GBA Official
//                                             </span>

//                                             <h4 className="title">
//                                                 {truncateText(post.title, 50)}
//                                             </h4>

//                                             <Link
//                                                 className="rts-read-more"
//                                                 href={`/archive?category=${encodeURIComponent(cat)}`}
//                                             >
//                                                 <div className="read-more-circle">
//                                                     <i className="far fa-arrow-right"></i>
//                                                 </div>
//                                                 <span>Read More</span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             );
//                         })}
//                     </Swiper>
//                 </div>

//                 <div className="row mt--50">
//                     <div className="col-12">
//                         <div className="pagination-dots-wrapper"></div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx global>{`
//                 .rts-blog-h-2-wrapper { 
//                     border-radius: 15px; 
//                     background: white; 
//                     height: 540px; 
//                     display: flex;
//                     flex-direction: column;
//                     border: 1px solid #f0f0f0;
//                     overflow: hidden;
//                 }
//                 .event-img { 
//                     width: 100%; 
//                     height: 280px; 
//                     object-fit: cover; 
//                 }
//                 .category-tag { 
//                     display: block; 
//                     font-size: 14px; 
//                     color: #1C2428 !important; 
//                     font-weight: 500;
//                     margin-bottom: 12px;
//                 }
//                 .rts-blog-h-2-wrapper .body .title { 
//                     font-size: 22px; 
//                     font-weight: 700; 
//                     color: #1C2428; 
//                     min-height: 90px;
//                     margin-bottom: auto;
//                 }
//                 .read-more-circle {
//                     width: 38px;
//                     height: 38px;
//                     background: #f8f9fa;
//                     border-radius: 50%;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                 }
//                 .pagination-dots-wrapper .dot { 
//                     width: 10px; height: 10px; background: #ccc; margin: 0 5px; border-radius: 50%; display: inline-block;
//                 }
//                 .pagination-dots-wrapper .dot.active { background: #1C2428; }
//             `}</style>
//         </div>
//     );
// };

// // Main Export
// export default function Events() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <EventsContent />
//         </Suspense>
//     );
// }


//         'use client'

// import React, { Suspense } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import useSWR from 'swr';
// import Link from 'next/link';

// import 'swiper/css';
// import 'swiper/css/pagination';

// // Fetcher (client-only safe)
// const fetcher = (url) =>
//     fetch(url).then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch');
//         return res.json();
//     });

// const EventsContent = () => {
//     const apiUrl = "https://gba.mig.org.pk/api/news";

//     const { data, error, isLoading } = useSWR(apiUrl, fetcher, {
//         revalidateOnFocus: false,
//         suspense: false,
//     });

//     if (error) return <div className="text-center p-5">Failed to load events</div>;
//     if (isLoading) return <div className="text-center p-5">Loading Events...</div>;
//     if (!data) return null;

//     const eventsData = data?.data || [];

//     const truncateText = (str, num) => {
//         if (!str) return "";
//         return str.length <= num ? str : str.slice(0, num) + "...";
//     };

//     return (
//         <div className="rts-blog-area rts-section-gapTop">
//             <div className="container pt--40">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="title-style-three center" style={{ position: 'relative' }}>
//                             <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>

//                             <div
//                                 className="rts-watermark-05"
//                                 style={{
//                                     position: 'absolute',
//                                     top: '0%',
//                                     left: '50%',
//                                     transform: 'translate(-50%, -50%)',
//                                     fontSize: '150px',
//                                     fontWeight: '900',
//                                     color: 'transparent',
//                                     WebkitTextFillColor: 'transparent',
//                                     WebkitTextStroke: '3px #f5f0f0ff',
//                                     opacity: 0.3,
//                                     zIndex: 0,
//                                     lineHeight: 1,
//                                     padding: '5px 0',
//                                 }}
//                             >
//                                 05
//                             </div>

//                             <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}>
//                                 Events
//                             </h2>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt--20" style={{ position: 'relative' }}>
//                     <Swiper
//                         modules={[Pagination]}
//                         spaceBetween={30}
//                         slidesPerView={1}
//                         pagination={{
//                             clickable: true,
//                             el: '.pagination-dots-wrapper',
//                             renderBullet: (index, className) =>
//                                 '<span class="' + className + '"></span>',
//                         }}
//                         breakpoints={{
//                             768: { slidesPerView: 2 },
//                             1200: { slidesPerView: 3 },
//                         }}
//                     >
//                         {eventsData.map((post) => (
//                             <SwiperSlide key={post.id}>
//                                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
//                                     <div className="thumbnail">
//                                         <img
//                                             src={post?.image || '/placeholder.jpg'}
//                                             alt={post?.title || 'Event'}
//                                             className="event-img"
//                                             loading="lazy"
//                                         />
//                                     </div>

//                                     <div className="body">
//                                         <span className="category-tag">
//                                             {post?.category} / by GBA Official
//                                         </span>

//                                         <h4 className="title">
//                                             {truncateText(post?.title, 50)}
//                                         </h4>

//                                         <Link
//                                             className="rts-read-more"
//                                             href={`/archive?category=${encodeURIComponent(
//                                                 String(post.category || '')
//                                             )}`}
//                                         >
//                                             <div className="read-more-circle">
//                                                 <i className="far fa-arrow-right"></i>
//                                             </div>
//                                             <span className="read-more-text">Read More</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* Pagination Dots */}
//                 <div className="pagination-wrapper-center">
//                     <div className="pagination-dots-wrapper"></div>
//                 </div>
//             </div>

//             {/* Global CSS Fix (safe for deployment) */}
//             <style global jsx>{`
//                 .rts-blog-h-2-wrapper {
//                     border-radius: 15px;
//                     background: white;
//                     height: 540px;
//                     display: flex;
//                     flex-direction: column;
//                     border: 1px solid #f0f0f0;
//                     overflow: hidden;
//                 }
//                 .event-img {
//                     width: 100%;
//                     height: 280px;
//                     object-fit: cover;
//                 }
//                 .category-tag {
//                     display: block;
//                     font-size: 14px;
//                     color: #1C2428 !important;
//                     font-weight: 500;
//                     margin-bottom: 12px;
//                 }
//                 .rts-blog-h-2-wrapper .body .title {
//                     font-size: 22px;
//                     font-weight: 700;
//                     color: #1C2428;
//                     min-height: 90px;
//                     margin-bottom: auto;
//                 }
//                 .rts-read-more {
//                     display: flex;
//                     align-items: center;
//                     text-decoration: none !important;
//                     gap: 12px;
//                     width: fit-content;
//                 }
//                 .read-more-circle {
//                     width: 40px;
//                     height: 40px;
//                     background: #f8f9fa;
//                     border-radius: 50%;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     transition: 0.3s;
//                 }
//                 .read-more-text {
//                     font-size: 15px;
//                     font-weight: 600;
//                     color: #1C2428;
//                 }
//                 .rts-read-more:hover .read-more-circle {
//                     background: #1C2428;
//                     color: white;
//                 }
//                 .rts-read-more:hover i {
//                     color: white;
//                 }
//                 .pagination-wrapper-center {
//                     display: flex;
//                     justify-content: center;
//                     margin-top: 40px;
//                     width: 100%;
//                 }
//                 .pagination-dots-wrapper {
//                     display: flex;
//                     gap: 8px;
//                     align-items: center;
//                 }
//                 .swiper-pagination-bullet {
//                     width: 10px;
//                     height: 10px;
//                     background: #d1d1d1 !important;
//                     opacity: 1 !important;
//                     margin: 0 !important;
//                     border-radius: 50%;
//                     cursor: pointer;
//                     transition: 0.3s;
//                 }
//                 .swiper-pagination-bullet-active {
//                     background: #1C2428 !important;
//                     transform: scale(1.2);
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default function Events() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <EventsContent />
//         </Suspense>
//     );
// }



// 'use client'

// import React, { Suspense } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import useSWR from 'swr';
// import Link from 'next/link';

// import 'swiper/css';
// import 'swiper/css/pagination';

// // --- TypeScript types ---
// interface EventData {
//   id: number;
//   title: string;
//   category: string;
//   image?: string;
// }

// interface ApiResponse {
//   data: EventData[];
// }

// // Fetcher (typed)
// const fetcher = (url: string): Promise<ApiResponse> =>
//   fetch(url).then((res) => {
//     if (!res.ok) throw new Error('Failed to fetch');
//     return res.json();
//   });

// const EventsContent = () => {
//   const apiUrl = 'https://gba.mig.org.pk/api/news';

//   const { data, error, isLoading } = useSWR<ApiResponse>(apiUrl, fetcher, {
//     revalidateOnFocus: false,
//     suspense: false,
//   });

//   if (error) return <div className="text-center p-5">Failed to load events</div>;
//   if (isLoading) return <div className="text-center p-5">Loading Events...</div>;
//   if (!data) return null;

//   const eventsData = data.data || [];

//   const truncateText = (str: string | undefined, num: number) => {
//     if (!str) return '';
//     return str.length <= num ? str : str.slice(0, num) + '...';
//   };

//   return (
//     <div className="rts-blog-area rts-section-gapTop">
//       <div className="container pt--40">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="title-style-three center" style={{ position: 'relative' }}>
//               <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
//               <div
//                 className="rts-watermark-05"
//                 style={{
//                   position: 'absolute',
//                   top: '0%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   fontSize: '150px',
//                   fontWeight: '900',
//                   color: 'transparent',
//                   WebkitTextFillColor: 'transparent',
//                   WebkitTextStroke: '3px #f5f0f0ff',
//                   opacity: 0.3,
//                   zIndex: 0,
//                   lineHeight: 1,
//                   padding: '5px 0',
//                 }}
//               >
//                 05
//               </div>
//               <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}>
//                 Events
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="mt--20" style={{ position: 'relative' }}>
//           <Swiper
//             modules={[Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{
//               clickable: true,
//               el: '.pagination-dots-wrapper',
//               renderBullet: (index, className) => '<span class="' + className + '"></span>',
//             }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1200: { slidesPerView: 3 },
//             }}
//           >
//             {eventsData.map((post) => (
//               <SwiperSlide key={post.id}>
//                 <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
//                   <div className="thumbnail">
//                     <img
//                       src={post.image || '/placeholder.jpg'}
//                       alt={post.title || 'Event'}
//                       className="event-img"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="body">
//                     <span className="category-tag">
//                       {post.category} / by GBA Official
//                     </span>

//                     <h4 className="title">{truncateText(post.title, 50)}</h4>

//                     <Link
//                       className="rts-read-more"
//                       href={`/archive?category=${encodeURIComponent(String(post.category || ''))}`}
//                     >
//                       <div className="read-more-circle">
//                         <i className="far fa-arrow-right"></i>
//                       </div>
//                       <span className="read-more-text">Read More</span>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Pagination Dots */}
//         <div className="pagination-wrapper-center">
//           <div className="pagination-dots-wrapper"></div>
//         </div>
//       </div>

//       {/* Global CSS */}
//       <style global jsx>{`
//         .rts-blog-h-2-wrapper {
//           border-radius: 15px;
//           background: white;
//           height: 540px;
//           display: flex;
//           flex-direction: column;
//           border: 1px solid #f0f0f0;
//           overflow: hidden;
//         }
//         .event-img {
//           width: 100%;
//           height: 280px;
//           object-fit: cover;
//         }
//         .category-tag {
//           display: block;
//           font-size: 14px;
//           color: #1C2428 !important;
//           font-weight: 500;
//           margin-bottom: 12px;
//         }
//         .rts-blog-h-2-wrapper .body .title {
//           font-size: 22px;
//           font-weight: 700;
//           color: #1C2428;
//           min-height: 90px;
//           margin-bottom: auto;
//         }
//         .rts-read-more {
//           display: flex;
//           align-items: center;
//           text-decoration: none !important;
//           gap: 12px;
//           width: fit-content;
//         }
//         .read-more-circle {
//           width: 40px;
//           height: 40px;
//           background: #f8f9fa;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: 0.3s;
//         }
//         .read-more-text {
//           font-size: 15px;
//           font-weight: 600;
//           color: #1C2428;
//         }
//         .rts-read-more:hover .read-more-circle {
//           background: #1C2428;
//           color: white;
//         }
//         .rts-read-more:hover i {
//           color: white;
//         }
//         .pagination-wrapper-center {
//           display: flex;
//           justify-content: center;
//           margin-top: 40px;
//           width: 100%;
//         }
//         .pagination-dots-wrapper {
//           display: flex;
//           gap: 8px;
//           align-items: center;
//         }
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #d1d1d1 !important;
//           opacity: 1 !important;
//           margin: 0 !important;
//           border-radius: 50%;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .swiper-pagination-bullet-active {
//           background: #1C2428 !important;
//           transform: scale(1.2);
//         }
//           /* Center Swiper pagination dots */
// .pagination-wrapper-center {
//   display: flex;
//   justify-content: center;
//   margin-top: 20px; /* adjust space above dots */
//   width: 100%;
// }

// .pagination-dots-wrapper {
//   display: flex !important;
//   justify-content: center !important;
//   gap: 8px;
//   align-items: center;
// }

// /* Swiper default bullets */
// .swiper-pagination-bullet {
//   width: 10px;
//   height: 10px;
//   background: #d1d1d1 !important;
//   opacity: 1 !important;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: 0.3s;
// }

// .swiper-pagination-bullet-active {
//   background: #1C2428 !important;
//   transform: scale(1.2);
// }

//       `}</style>
//     </div>
//   );
// };

// export default function Events() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <EventsContent />
//     </Suspense>
//   );
// }


'use client'

import React, { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useSWR from 'swr';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

// --- TypeScript types ---
interface EventData {
  id: number;
  title: string;
  category: string;
  image?: string;
}

interface ApiResponse {
  data: EventData[];
}

// ✅ Typed fetcher
const fetcher = (url: string): Promise<ApiResponse> =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });

const EventsContent = () => {
  const apiUrl = 'https://gba.mig.org.pk/api/news';

  const { data, error, isLoading } = useSWR<ApiResponse>(apiUrl, fetcher, {
    revalidateOnFocus: false,
    suspense: false,
  });

  if (error) return <div className="text-center p-5">Failed to load events</div>;
  if (isLoading) return <div className="text-center p-5">Loading Events...</div>;
  if (!data) return null;

  const eventsData = data.data || [];

  const truncateText = (str: string | undefined, num: number) => {
    if (!str) return '';
    return str.length <= num ? str : str.slice(0, num) + '...';
  };

  return (
    <div className="rts-blog-area rts-section-gapTop">
      <div className="container pt--40">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-three center" style={{ position: 'relative' }}>
              <span className="pre" style={{ fontSize: '16px', zIndex: 1, position: 'relative' }}> Highlights </span>
              <div
                className="rts-watermark-05"
                style={{
                  position: 'absolute',
                  top: '0%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '150px',
                  fontWeight: '900',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '3px #f5f0f0ff',
                  opacity: 0.3,
                  zIndex: 0,
                  lineHeight: 1,
                  padding: '5px 0',
                }}
              >
                05
              </div>
              <h2 className="title rts-text-anime-style-1" style={{ fontSize: '48px', zIndex: 1, position: 'relative' }}>
                Events
              </h2>
            </div>
          </div>
        </div>

        <div className="mt--20" style={{ position: 'relative' }}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.pagination-dots-wrapper',
              renderBullet: (index, className) => '<span class="' + className + '"></span>',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {eventsData.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="rts-blog-h-2-wrapper" style={{ margin: '15px 5px' }}>
                  <div className="thumbnail">
                    <img
                      src={post.image || '/placeholder.jpg'}
                      alt={post.title || 'Event'}
                      className="event-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="body">
                    <span className="category-tag">
                      {post.category} 
                    </span>

                    <h4 className="title">{truncateText(post.title, 50)}</h4>

                    <Link
                      className="rts-read-more"
                      href={`/archive?category=${encodeURIComponent(String(post.category || ''))}`}
                    >
                      <div className="read-more-circle">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <span className="read-more-text">Read More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pagination-wrapper-center">
          <div className="pagination-dots-wrapper"></div>
        </div>
      </div>

      {/* Global CSS */}
      <style global jsx>{`
        .rts-blog-h-2-wrapper {
          border-radius: 15px;
          background: white;
          height: 540px;
          display: flex;
          flex-direction: column;
          border: 1px solid #f0f0f0;
          overflow: hidden;
        }
        .event-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .category-tag {
          display: block;
          font-size: 14px;
          color: #1C2428 !important;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .rts-blog-h-2-wrapper .body .title {
          font-size: 22px;
          font-weight: 700;
          color: #1C2428;
          min-height: 90px;
          margin-bottom: auto;
        }
        .rts-read-more {
          display: flex;
          align-items: center;
          text-decoration: none !important;
          gap: 12px;
          width: fit-content;
        }
        .read-more-circle {
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .read-more-text {
          font-size: 15px;
          font-weight: 600;
          color: #1C2428;
        }
        .rts-read-more:hover .read-more-circle {
          background: #1C2428;
          color: white;
        }
        .rts-read-more:hover i {
          color: white;
        }
        .pagination-wrapper-center {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          width: 100%;
        }
        .pagination-dots-wrapper {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d1d1 !important;
          opacity: 1 !important;
          margin: 0 !important;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #1C2428 !important;
          transform: scale(1.2);
        }
          /* Center Swiper pagination dots */
.pagination-wrapper-center {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* adjust space above dots */
  width: 100%;
}

.pagination-dots-wrapper {
  display: flex !important;
  justify-content: center !important;
  gap: 8px;
  align-items: center;
}

/* Swiper default bullets */
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #d1d1d1 !important;
  opacity: 1 !important;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.swiper-pagination-bullet-active {
  background: #1C2428 !important;
  transform: scale(1.2);
}
   @media (max-width: 768px) {
    .rts-watermark-05 {
      font-size: 80px !important;
    }
      
  }


      `}</style>
    </div>
  );
};

export default function Events() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsContent />
    </Suspense>
  );
}



