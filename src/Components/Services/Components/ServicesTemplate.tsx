


// // // // // src/app/global-reach/page.tsx (or Components/GlobalReach.tsx)

// // // // import React from 'react';
// // // // import Image from 'next/image';
// // // // import Link from 'next/link';

// // // // // NOTE: Update the import path below to match where you save your JSON file.
// // // // import data from '../../data/GlobalReachData.json'; // Example path

// // // // const GlobalReach = () => {
// // // //     // Destructure content for cleaner access
// // // //     const { header, mainContent, shortServices, categories } = data;

// // // //     return (
// // // //         <React.Fragment>
// // // //             {/* Breadcrumb / Banner Section */}
// // // //             <div className="breadcrumb-service-detals-one">
// // // //                 {/* Note: container-1754 suggests a custom width container */}
// // // //                 <div className="container-1754">
// // // //                     <div className="row">
// // // //                         <div className="col-lg-12">
// // // //                             <div className="banner-inner-service-details-1 bg_image">
// // // //                                 <div className="container">
// // // //                                     <div className="row">
// // // //                                         <div className="col-lg-12">
// // // //                                             <div className="title-area-left">
// // // //                                                 {/* Background Title */}
// // // //                                                 <span className="bg-title">{header.bgTitle}</span>
// // // //                                                 {/* Main Title */}
// // // //                                                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: '48px' }}>
// // // //                                                     {header.title}
// // // //                                                 </h1>
// // // //                                                 {/* Description */}
// // // //                                                 <p className="disc" style={{ fontSize: '20px' }}>
// // // //                                                     {header.description}
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Service Details Main Content Area */}
// // // //             <div className="rts-service-details-area-main-bottom">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         {/* LEFT COLUMN: Main Content (8/12ths width on extra-large screens) */}
// // // //                         <div className="col-xl-8 px-5">
// // // //                             <div className="service-details-left-area">
// // // //                                 {/* Main Image */}
// // // //                                 <div className="thumbnail">
// // // //                                     <Image 
// // // //                                         src={header.mainImagePath} 
// // // //                                         alt={header.title}
// // // //                                         width={800} // Placeholder: Adjust to actual image width
// // // //                                         height={500} // Placeholder: Adjust to actual image height
// // // //                                         style={{ width: '100%', height: 'auto' }}
// // // //                                         priority={true}
// // // //                                     />
// // // //                                 </div>
// // // //                                 {/* Main Paragraph */}
// // // //                                 <p style={{ fontSize: '15px' }}>
// // // //                                     {mainContent.paragraph}
// // // //                                 </p>

// // // //                                 {/* Short Services/Features Wrapper */}
// // // //                                 <div className="service-short-main-wrapper">
// // // //                                     {shortServices.map((service, index) => (
// // // //                                         <div className="single-short-service" key={index}>
// // // //                                             <div 
// // // //                                                 className="icon" 
// // // //                                                 // Retain original inline styling
// // // //                                                 style={{ marginLeft: index % 2 === 0 ? '-10px' : '40px' }}
// // // //                                             >
// // // //                                                 <Image 
// // // //                                                     src={service.iconPath} 
// // // //                                                     alt={service.title}
// // // //                                                     width={40} // Placeholder: Adjust for your SVG size
// // // //                                                     height={40} // Placeholder: Adjust for your SVG size
// // // //                                                 />
// // // //                                             </div>
// // // //                                             <div className="inner-content">
// // // //                                                 <h5 className="title-sm" style={{ fontSize: '18px' }}>
// // // //                                                     {service.title}
// // // //                                                 </h5>
// // // //                                                 <p 
// // // //                                                     className="disc" 
// // // //                                                     // Retain original inline styling
// // // //                                                     style={{ fontSize: '15px', width: index % 2 === 0 ? '300px' : '250px' }}
// // // //                                                 >
// // // //                                                     {service.description}
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>

// // // //                         {/* RIGHT COLUMN: Categories Sidebar (4/12ths width on extra-large screens) */}
// // // //                         <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
// // // //                             {/* Single Widget Start */}
// // // //                             <div className="rts-single-wized Categories">
// // // //                                 <div className="wized-header">
// // // //                                     <h5 className="title">
// // // //                                         {categories.title}
// // // //                                     </h5>
// // // //                                 </div>
// // // //                                 <div className="wized-body">
// // // //                                     {categories.links.map((link, index) => (
// // // //                                         <ul 
// // // //                                             className="single-categories" 
// // // //                                             key={index}
// // // //                                             // Conditional styling for the active link (Global Reach)
// // // //                                             style={link.isActive ? { backgroundColor: '#fff !important' } : {}}
// // // //                                         >
// // // //                                             <li>
// // // //                                                 <Link href={link.href}>
// // // //                                                     {link.text} <i className="far fa-long-arrow-right"></i>
// // // //                                                 </Link>
// // // //                                             </li>
// // // //                                         </ul>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </div>
// // // //                             {/* Single Widget End */}
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Note: The @media style block in your original HTML is now handled by the external CSS files linked in your RootLayout, 
// // // //                but I'm keeping the empty style tag here just to show where it was. */}
// // // //             <style jsx global>{`
// // // //                 /* Your original CSS media query is redundant if included this way, 
// // // //                    but if you need specific CSS, this is how you'd inject it */
// // // //                 @media (max-width: 767px) {
// // // //                     .blog-list-style {
// // // //                         margin-top: 70px !important;
// // // //                         padding-top: 10px; /* optional */
// // // //                     }
// // // //                 }
// // // //             `}</style>
// // // //         </React.Fragment>
// // // //     );
// // // // }

// // // // export default GlobalReach;


// // // 'use client'
// // // import React from 'react';
// // // import Image from 'next/image';
// // // import Link from 'next/link';

// // // // Component for the short service items
// // // const ShortServiceItem = ({ iconSrc, title, description, iconStyle, descWidth }: {
// // //     iconSrc: string;
// // //     title: string;
// // //     description: string;
// // //     iconStyle: React.CSSProperties;
// // //     descWidth: React.CSSProperties;
// // // }) => (
// // //     <div className="single-short-service">
// // //         <div className="icon" style={iconStyle}>
// // //             {/* The image path has been updated from 'assets/images/service/05.svg' to '/images/service/05.svg' */}
// // //             <Image 
// // //                 src={iconSrc} 
// // //                 alt={title} 
// // //                 width={30} // Assuming a reasonable size based on the layout
// // //                 height={30} 
// // //             />
// // //         </div>
// // //         <div className="inner-content">
// // //             <h5 className="title-sm" style={{ fontSize: '18px' }}>
// // //                 {title}
// // //             </h5>
// // //             <p className="disc" style={descWidth}>
// // //                 {description}
// // //             </p>
// // //         </div>
// // //     </div>
// // // );

// // // // Component for the sidebar categories
// // // const CategoryLink = ({ href, text }: { href: string; text: string }) => (
// // //     <ul className="single-categories" style={href === 'service-details.html' ? { backgroundColor: '#fff' } : {}}>
// // //         <li>
// // //             {/* Use Next.js Link for internal navigation */}
// // //             <Link href={`/${href.replace('.html', '')}`}>
// // //                 {text} <i className="far fa-long-arrow-right"></i>
// // //             </Link>
// // //         </li>
// // //     </ul>
// // // );


// // // const GlobalReachPage = () => {
// // //     // Define the list of categories for the sidebar
// // //     const categories = [
// // //         { href: 'service-details.html', text: 'Global Reach' },
// // //         { href: 'business-deligation.html', text: 'Business Delegations' },
// // //         { href: 'pakistan-products.html', text: 'Pakistan Products House' },
// // //         { href: 'trade-shows.html', text: 'Trade Shows & Expos' },
// // //         { href: 'industry-academia.html', text: 'Industry Academia Linkages' },
// // //         { href: 'global-growth.html', text: 'Global Growth Windows' },
// // //         { href: 'international-tech.html', text: 'International Tech Gateways' },
// // //         { href: 'leadership-incubation.html', text: 'Leadership Incubation & Mentorship' },
// // //         { href: 'business-events.html', text: 'Business Events' },
// // //         { href: 'women-empowerment.html', text: 'Women Empowerment' },
// // //         { href: 'bRI-centre.html', text: 'BRI Centre' },
// // //         { href: 'capacity-building.html', text: 'Capacity Building & Research' },
// // //         { href: 'global-trade.html', text: 'Global Trade Facilitation Desks' },
// // //         { href: 'community-development.html', text: 'Community Development' },
// // //     ];

// // //     return (
// // //         <>
// // //             {/* Breadcrumb/Banner Area */}
// // //             <div className="breadcrumb-service-detals-one">
// // //                 <div className="container-1754">
// // //                     <div className="row">
// // //                         <div className="col-lg-12">
// // //                             <div className="banner-inner-service-details-1 bg_image">
// // //                                 <div className="container">
// // //                                     <div className="row">
// // //                                         <div className="col-lg-12">
// // //                                             <div className="title-area-left">
// // //                                                 <span className="bg-title">Business</span>
// // //                                                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: '48px' }}>
// // //                                                     Global Reach
// // //                                                 </h1>
// // //                                                 <p className="disc" style={{ fontSize: '20px' }}>
// // //                                                     Connecting Gujranwala&apos;s Industries to the World.
// // //                                                 </p>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Service Details Main Area */}
// // //             <div className="rts-service-details-area-main-bottom">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         <div className="col-xl-8 px-5">
// // //                             <div className="service-details-left-area">
// // //                                 <div className="thumbnail">
// // //                                     {/* The image path has been updated from 'assets/images/about/Global Reach1.jpg' to '/images/about/Global Reach1.jpg' */}
// // //                                     <Image 
// // //                                         src="/images/about/Global Reach1.jpg" 
// // //                                         alt="Global Reach" 
// // //                                         width={800} // Example dimensions
// // //                                         height={500} // Example dimensions
// // //                                         layout="responsive" // Make it responsive
// // //                                     />
// // //                                 </div>
// // //                                 <p style={{ fontSize: '15px' }}>
// // //                                     GBA strengthens international understanding and cooperation by facilitating engagement between Gujranwala’s business community and the global diplomatic and trade network. Through regular visits of foreign diplomats, trade representatives, and international delegations, GBA provides a platform for dialogue, partnership building, and exploration of country-specific trade and investment opportunities. The Alliance also organises industry visits and B2B meetings that allow foreign missions and trade bodies to experience Gujranwala’s industrial strength firsthand, fostering trust and collaboration. Complementing these efforts, GBA offers training sessions, seminars, and advisory programs designed to help businesses navigate international markets, understand global trade practices, and develop cross-cultural competencies - empowering Gujranwala’s industries to thrive on the world stage.
// // //                                 </p>

// // //                                 {/* Service Short Main Wrapper */}
// // //                                 <div className="service-short-main-wrapper">
// // //                                     <ShortServiceItem
// // //                                         iconSrc="/images/service/05.svg"
// // //                                         title="Diplomatic Engagement"
// // //                                         description="Connecting Gujranwala’s industry with global diplomats and trade envoys"
// // //                                         iconStyle={{ marginLeft: '-10px' }}
// // //                                         descWidth={{ fontSize: '15px', width: '300px' }}
// // //                                     />

// // //                                     <ShortServiceItem
// // //                                         iconSrc="/images/service/06.svg"
// // //                                         title="Industry Showcases"
// // //                                         description="Hosting B2B meetings and industrial visits for foreign missions"
// // //                                         iconStyle={{ marginLeft: '40px' }}
// // //                                         descWidth={{ fontSize: '15px', width: '250px' }}
// // //                                     />

// // //                                     <ShortServiceItem
// // //                                         iconSrc="/images/service/07.svg"
// // //                                         title="International Partnerships"
// // //                                         description="Building cross-border alliances and country-specific trade opportunities"
// // //                                         iconStyle={{ marginLeft: '-10px' }}
// // //                                         descWidth={{ fontSize: '15px', width: '300px' }}
// // //                                     />

// // //                                     <ShortServiceItem
// // //                                         iconSrc="/images/service/08.svg"
// // //                                         title="Global Trade Support"
// // //                                         description="Providing guidance, training, and insights for entering international markets"
// // //                                         iconStyle={{ marginLeft: '40px' }}
// // //                                         descWidth={{ fontSize: '15px', width: '250px' }}
// // //                                     />
// // //                                 </div>

// // //                                 {/* Media Query Style moved to CSS or inline styles if necessary */}
// // //                                 {/* The inline <style> block is difficult to handle directly in a React component,
// // //                                     it's better to move it to a global CSS file or use a module. 
// // //                                     I'll apply the CSS class directly here if needed.
// // //                                 */}
// // //                             </div>
// // //                         </div>

// // //                         {/* Sidebar */}
// // //                         <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
// // //                             <div className="rts-single-wized Categories">
// // //                                 <div className="wized-header">
// // //                                     <h5 className="title">
// // //                                         Categories
// // //                                     </h5>
// // //                                 </div>
// // //                                 <div className="wized-body">
// // //                                     {categories.map((category, index) => (
// // //                                         <CategoryLink 
// // //                                             key={index} 
// // //                                             href={category.href} 
// // //                                             text={category.text} 
// // //                                         />
// // //                                     ))}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
            
// // //             {/* The inline <style> block from the original HTML: 
// // //                 @media (max-width: 767px) {
// // //                     .blog-list-style {
// // //                         margin-top: 70px !important;
// // //                         padding-top: 10px; 
// // //                     }
// // //                 }
            
// // //             This should be moved to your /css/style.css or /app/globals.css file for proper Next.js implementation.
// // //             */}
// // //         </>
// // //     );
// // // };

// // // export default GlobalReachPage;



// // 'use client'
// // import React from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // // Component for the short service items
// // const ShortServiceItem = ({ iconSrc, title, description, iconStyle, descWidth }: {
// //     iconSrc: string;
// //     title: string;
// //     description: string;
// //     iconStyle: React.CSSProperties;
// //     descWidth: React.CSSProperties;
// // }) => (
// //     <div className="single-short-service">
// //         <div className="icon" style={iconStyle}>
// //             {/* The image path has been updated from 'assets/images/service/05.svg' to '/images/service/05.svg' */}
// //             <Image 
// //                 src={iconSrc} 
// //                 alt={title} 
// //                 width={30} // Assuming a reasonable size based on the layout
// //                 height={30} 
// //             />
// //         </div>
// //         <div className="inner-content">
// //             <h5 className="title-sm" style={{ fontSize: '18px' }}>
// //                 {title}
// //             </h5>
// //             <p className="disc" style={descWidth}>
// //                 {description}
// //             </p>
// //         </div>
// //     </div>
// // );

// // // Component for the sidebar categories
// // const CategoryLink = ({ href, text }: { href: string; text: string }) => (
// //     <ul className="single-categories" style={href === 'service-details.html' ? { backgroundColor: '#fff' } : {}}>
// //         <li>
// //             {/* Use Next.js Link for internal navigation */}
// //             <Link href={`/${href.replace('.html', '')}`}>
// //                 {text} <i className="far fa-long-arrow-right"></i>
// //             </Link>
// //         </li>
// //     </ul>
// // );


// // const GlobalReachPage = () => {
// //     // Define the list of categories for the sidebar
// //     const categories = [
// //         { href: 'service-details.html', text: 'Global Reach' },
// //         { href: 'business-deligation.html', text: 'Business Delegations' },
// //         { href: 'pakistan-products.html', text: 'Pakistan Products House' },
// //         { href: 'trade-shows.html', text: 'Trade Shows & Expos' },
// //         { href: 'industry-academia.html', text: 'Industry Academia Linkages' },
// //         { href: 'global-growth.html', text: 'Global Growth Windows' },
// //         { href: 'international-tech.html', text: 'International Tech Gateways' },
// //         { href: 'leadership-incubation.html', text: 'Leadership Incubation & Mentorship' },
// //         { href: 'business-events.html', text: 'Business Events' },
// //         { href: 'women-empowerment.html', text: 'Women Empowerment' },
// //         { href: 'bRI-centre.html', text: 'BRI Centre' },
// //         { href: 'capacity-building.html', text: 'Capacity Building & Research' },
// //         { href: 'global-trade.html', text: 'Global Trade Facilitation Desks' },
// //         { href: 'community-development.html', text: 'Community Development' },
// //     ];

// //     return (
// //         <>
// //             {/* Breadcrumb/Banner Area */}
// //             <div className="breadcrumb-service-detals-one">
// //                 <div className="container-1754">
// //                     <div className="row">
// //                         <div className="col-lg-12">
// //                             <div className="banner-inner-service-details-1 bg_image">
// //                                 <div className="container">
// //                                     <div className="row">
// //                                         <div className="col-lg-12">
// //                                             <div className="title-area-left">
// //                                                 <span className="bg-title">Business</span>
// //                                                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: '48px' }}>
// //                                                     Global Reach
// //                                                 </h1>
// //                                                 <p className="disc" style={{ fontSize: '20px' }}>
// //                                                     Connecting Gujranwala&apos;s Industries to the World.
// //                                                 </p>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Service Details Main Area */}
// //             <div className="rts-service-details-area-main-bottom">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-xl-8 px-5">
// //                             <div className="service-details-left-area">
// //                                 <div className="thumbnail">
// //                                     {/* The image path has been updated from 'assets/images/about/Global Reach1.jpg' to '/images/about/Global Reach1.jpg' */}
// //                                     <Image 
// //                                         src="/images/about/Global Reach1.jpg" 
// //                                         alt="Global Reach" 
// //                                         width={800} // Example dimensions
// //                                         height={500} // Example dimensions
// //                                         layout="responsive" // Make it responsive
// //                                     />
// //                                 </div>
// //                                 <p style={{ fontSize: '15px' }}>
// //                                     GBA strengthens international understanding and cooperation by facilitating engagement between Gujranwala’s business community and the global diplomatic and trade network. Through regular visits of foreign diplomats, trade representatives, and international delegations, GBA provides a platform for dialogue, partnership building, and exploration of country-specific trade and investment opportunities. The Alliance also organises industry visits and B2B meetings that allow foreign missions and trade bodies to experience Gujranwala’s industrial strength firsthand, fostering trust and collaboration. Complementing these efforts, GBA offers training sessions, seminars, and advisory programs designed to help businesses navigate international markets, understand global trade practices, and develop cross-cultural competencies - empowering Gujranwala’s industries to thrive on the world stage.
// //                                 </p>

// //                                 {/* Service Short Main Wrapper */}
// //                                 <div className="service-short-main-wrapper">
// //                                     <ShortServiceItem
// //                                         iconSrc="/images/service/05.svg"
// //                                         title="Diplomatic Engagement"
// //                                         description="Connecting Gujranwala’s industry with global diplomats and trade envoys"
// //                                         iconStyle={{ marginLeft: '-10px' }}
// //                                         descWidth={{ fontSize: '15px', width: '300px' }}
// //                                     />

// //                                     <ShortServiceItem
// //                                         iconSrc="/images/service/06.svg"
// //                                         title="Industry Showcases"
// //                                         description="Hosting B2B meetings and industrial visits for foreign missions"
// //                                         iconStyle={{ marginLeft: '40px' }}
// //                                         descWidth={{ fontSize: '15px', width: '250px' }}
// //                                     />

// //                                     <ShortServiceItem
// //                                         iconSrc="/images/service/07.svg"
// //                                         title="International Partnerships"
// //                                         description="Building cross-border alliances and country-specific trade opportunities"
// //                                         iconStyle={{ marginLeft: '-10px' }}
// //                                         descWidth={{ fontSize: '15px', width: '300px' }}
// //                                     />

// //                                     <ShortServiceItem
// //                                         iconSrc="/images/service/08.svg"
// //                                         title="Global Trade Support"
// //                                         description="Providing guidance, training, and insights for entering international markets"
// //                                         iconStyle={{ marginLeft: '40px' }}
// //                                         descWidth={{ fontSize: '15px', width: '250px' }}
// //                                     />
// //                                 </div>

// //                                 {/* Media Query Style moved to CSS or inline styles if necessary */}
// //                                 {/* The inline <style> block is difficult to handle directly in a React component,
// //                                     it's better to move it to a global CSS file or use a module. 
// //                                     I'll apply the CSS class directly here if needed.
// //                                 */}
// //                             </div>
// //                         </div>

// //                         {/* Sidebar */}
// //                         <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
// //                             <div className="rts-single-wized Categories">
// //                                 <div className="wized-header">
// //                                     <h5 className="title">
// //                                         Categories
// //                                     </h5>
// //                                 </div>
// //                                 <div className="wized-body">
// //                                     {categories.map((category, index) => (
// //                                         <CategoryLink 
// //                                             key={index} 
// //                                             href={category.href} 
// //                                             text={category.text} 
// //                                         />
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
            
// //             {/* The inline <style> block from the original HTML: 
// //                 @media (max-width: 767px) {
// //                     .blog-list-style {
// //                         margin-top: 70px !important;
// //                         padding-top: 10px; 
// //                     }
// //                 }
            
// //             This should be moved to your /css/style.css or /app/globals.css file for proper Next.js implementation.
// //             */}
// //         </>
// //     );
// // };

// // export default GlobalReachPage;




// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // Import the content data from the JSON file
// // NOTE: You might need to adjust the path based on your project structure (e.g., './data/GlobalReach.json')
// import contentData from '../../Data/GlobalReachData.json';

// // --- Interface Definitions for Type Safety ---

// interface ShortServiceData {
//     iconSrc: string;
//     title: string;
//     description: string;
//     iconStyle: React.CSSProperties;
//     descWidthStyle: React.CSSProperties;
// }

// interface CategoryData {
//     href: string;
//     text: string;
// }

// interface GlobalReachContent {
//     pageTitle: string;
//     banner: {
//         bgTitle: string;
//         title: string;
//         description: string;
//         titleFontSize: string;
//         descriptionFontSize: string;
//     };
//     mainContent: {
//         imageSrc: string;
//         altText: string;
//         description: string;
//         descriptionFontSize: string;
//     };
//     shortServices: ShortServiceData[];
//     sidebarCategories: CategoryData[];
//     sidebarTitle: string;
// }

// // Type assertion for the imported data
// const data: GlobalReachContent = contentData as GlobalReachContent;


// // --- Helper Components with Structure and Styling ---

// // Component for the short service items
// const ShortServiceItem = ({ service }: { service: ShortServiceData }) => (
//     <div className="single-short-service">
//         {/* Structure and inline style for the icon container */}
//         <div className="icon" style={service.iconStyle}>
//             <Image 
//                 src={service.iconSrc} 
//                 alt={service.title} 
//                 width={30} // Fixed width/height for the icon
//                 height={30} 
//             />
//         </div>
//         <div className="inner-content">
//             {/* Structure and inline style for the title */}
//             <h5 className="title-sm" style={{ fontSize: '18px' }}>
//                 {service.title}
//             </h5>
//             {/* Structure and inline style for the description */}
//             <p className="disc" style={service.descWidthStyle}>
//                 {service.description}
//             </p>
//         </div>
//     </div>
// );

// // Component for the sidebar categories
// const CategoryLink = ({ category }: { category: CategoryData }) => {
//     // Styling logic for the active link (based on 'service-details.html')
//     const isActive = category.href === 'service-details.html';
//     const linkStyle: React.CSSProperties = isActive ? { backgroundColor: '#fff' } : {};
    
//     // Construct the actual Next.js path
//     const nextPath = `/${category.href.replace('.html', '')}`;

//     return (
//         // Structure and conditional inline style for the list item
//         <ul className="single-categories" style={linkStyle}>
//             <li>
//                 <Link href={nextPath}>
//                     {category.text} <i className="far fa-long-arrow-right"></i>
//                 </Link>
//             </li>
//         </ul>
//     );
// };


// // --- Main Page Component ---

// const GlobalReachPage = () => {
    
//     const { banner, mainContent, shortServices, sidebarCategories, sidebarTitle } = data;

//     return (
//         <>
//             {/* Breadcrumb/Banner Area */}
//             <div className="breadcrumb-service-detals-one">
//                 <div className="container-1754">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="banner-inner-service-details-1 bg_image">
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="col-lg-12">
//                                             <div className="title-area-left">
//                                                 {/* Data from JSON */}
//                                                 <span className="bg-title">{banner.bgTitle}</span>
//                                                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: banner.titleFontSize }}>
//                                                     {banner.title}
//                                                 </h1>
//                                                 <p className="disc" style={{ fontSize: banner.descriptionFontSize }}>
//                                                     {banner.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Service Details Main Area */}
//             <div className="rts-service-details-area-main-bottom">
//                 <div className="container">
//                     <div className="row">
//                         {/* Main Content Column */}
//                         <div className="col-xl-8 px-5">
//                             <div className="service-details-left-area">
//                                 <div className="thumbnail">
//                                     {/* Data from JSON for the main image */}
//                                     <Image 
//                                         src={mainContent.imageSrc} 
//                                         alt={mainContent.altText} 
//                                         width={800} // Example dimensions
//                                         height={500} // Example dimensions
//                                         layout="responsive" // Make it responsive
//                                     />
//                                 </div>
//                                 {/* Data from JSON for the main description */}
//                                 <p style={{ fontSize: mainContent.descriptionFontSize }}>
//                                     {mainContent.description}
//                                 </p>

//                                 {/* Service Short Main Wrapper - Populated from JSON */}
//                                 <div className="service-short-main-wrapper">
//                                     {shortServices.map((service, index) => (
//                                         <ShortServiceItem key={index} service={service} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Sidebar Column */}
//                         <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
//                             <div className="rts-single-wized Categories">
//                                 <div className="wized-header">
//                                     <h5 className="title">
//                                         {/* Data from JSON for sidebar title */}
//                                         {sidebarTitle}
//                                     </h5>
//                                 </div>
//                                 <div className="wized-body">
//                                     {/* Categories Populated from JSON */}
//                                     {sidebarCategories.map((category, index) => (
//                                         <CategoryLink 
//                                             key={index} 
//                                             category={category}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GlobalReachPage;


// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // --- Interface Definitions (Exported for Container use) ---

// interface ShortServiceData {
//     iconSrc: string;
//     title: string;
//     description: string;
//     iconStyle: React.CSSProperties;
//     descWidthStyle: React.CSSProperties;
// }

// interface CategoryData {
//     href: string;
//     text: string;
// }

// // Exported interface for the JSON structure
// export interface ServiceContent {
//     pageTitle: string;
//     banner: {
//         bgTitle: string;
//         title: string;
//         description: string;
//         titleFontSize: string;
//         descriptionFontSize: string;
//     };
//     mainContent: {
//         imageSrc: string;
//         altText: string;
//         description: string;
//         descriptionFontSize: string;
//     };
//     shortServices: ShortServiceData[];
//     sidebarCategories: CategoryData[];
//     sidebarTitle: string;
// }

// // Props for the template component
// interface ServicesTemplateProps {
//     data: ServiceContent; // The unique content data for the current page
//     activePath: string; // The path used for sidebar highlighting
// }

// // --- Helper Components with Structure and Styling ---

// // Component for the short service items
// const ShortServiceItem = ({ service }: { service: ShortServiceData }) => (
//     <div className="single-short-service">
//         <div className="icon" style={service.iconStyle}>
//             {/* ✅ FIX 1: Removed redundant leading slash (e.g., stops //images) */}
//             <Image 
//                 src={service.iconSrc} 
//                 alt={service.title} 
//                 width={30} 
//                 height={30} 
//             />
//         </div>
//         <div className="inner-content">
//             <h5 className="title-sm" style={{ fontSize: '18px' }}>
//                 {service.title}
//             </h5>
//             <p className="disc" style={service.descWidthStyle}>
//                 {service.description}
//             </p>
//         </div>
//     </div>
// );

// // Component for the sidebar categories
// const CategoryLink = ({ category, activePath }: { category: CategoryData, activePath: string }) => {
    
//     // Logic to check if the current link is active
//     const nextPath = `/${category.href.replace('.html', '')}`;
//     const isActive = nextPath === activePath;
    
//     // Conditional styling
//     const linkStyle: React.CSSProperties = isActive ? { backgroundColor: '#f0f0f0', borderLeft: '3px solid #0056b3' } : {};
    
//     return (
//         <ul className="single-categories" style={linkStyle}>
//             <li>
//                 <Link href={nextPath}>
//                     {category.text} <i className="far fa-long-arrow-right"></i>
//                 </Link>
//             </li>
//         </ul>
//     );
// };


// // --- Main Template Component (Exported) ---

// // ✅ FIX 2: Component is correctly named ServicesTemplate
// const ServicesTemplate: React.FC<ServicesTemplateProps> = ({ data, activePath }) => {
    
//     // Destructure content from the 'data' prop (NOT imported JSON)
//     const { banner, mainContent, shortServices, sidebarCategories, sidebarTitle } = data;

//     return (
//         <>
//             {/* Breadcrumb/Banner Area */}
//             <div className="breadcrumb-service-detals-one">
//                 <div className="container-1754">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="banner-inner-service-details-1 bg_image">
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="col-lg-12">
//                                             <div className="title-area-left">
//                                                 <span className="bg-title">{banner.bgTitle}</span>
//                                                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: banner.titleFontSize }}>
//                                                     {banner.title}
//                                                 </h1>
//                                                 <p className="disc" style={{ fontSize: banner.descriptionFontSize }}>
//                                                     {banner.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Service Details Main Area */}
//             <div className="rts-service-details-area-main-bottom">
//                 <div className="container">
//                     <div className="row">
//                         {/* Main Content Column */}
//                         <div className="col-xl-8 px-5">
//                             <div className="service-details-left-area">
//                                 <div className="thumbnail">
//                                     {/* ✅ FIX 1: Use the path directly */}
//                                     <Image 
//                                         src={mainContent.imageSrc}
//                                         alt={mainContent.altText} 
//                                         width={800} 
//                                         height={500} 
//                                         layout="responsive" 
//                                     />
//                                 </div>
//                                 <p style={{ fontSize: mainContent.descriptionFontSize }}>
//                                     {mainContent.description}
//                                 </p>

//                                 {/* Service Short Main Wrapper */}
//                                 <div className="service-short-main-wrapper">
//                                     {shortServices.map((service, index) => (
//                                         <ShortServiceItem key={index} service={service} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Sidebar Column */}
//                         <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
//                             <div className="rts-single-wized Categories">
//                                 <div className="wized-header">
//                                     <h5 className="title">
//                                         {sidebarTitle}
//                                     </h5>
//                                 </div>
//                                 <div className="wized-body">
//                                     {/* Categories Populated from the prop data, passing activePath */}
//                                     {sidebarCategories.map((category, index) => (
//                                         <CategoryLink 
//                                             key={index} 
//                                             category={category}
//                                             activePath={activePath} 
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ServicesTemplate;



//just remove container radius 
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Interface Definitions (Exported for Container use) ---

interface ShortServiceData {
    iconSrc: string;
    title: string;
    description: string;
    iconStyle: React.CSSProperties;
    descWidthStyle: React.CSSProperties;
}

interface CategoryData {
    href: string;
    text: string;
}

// Exported interface for the JSON structure
export interface ServiceContent {
    pageTitle: string;
    banner: {
        bgTitle: string;
        title: string;
        description: string;
        titleFontSize: string;
        descriptionFontSize: string;
    };
    mainContent: {
        imageSrc: string;
        altText: string;
        description: string;
        descriptionFontSize: string;
    };
    shortServices: ShortServiceData[];
    sidebarCategories: CategoryData[];
    sidebarTitle: string;
}

// Props for the template component
interface ServicesTemplateProps {
    data: ServiceContent; // The unique content data for the current page
    activePath: string; // The path used for sidebar highlighting
}

// --- Helper Components with Structure and Styling ---

// Component for the short service items
const ShortServiceItem = ({ service }: { service: ShortServiceData }) => (
    <div className="single-short-service">
        <div className="icon" style={service.iconStyle}>
            {/* ✅ FIX 1: Removed redundant leading slash (e.g., stops //images) */}
            <Image 
                src={service.iconSrc} 
                alt={service.title} 
                width={30} 
                height={30} 
            />
        </div>
        <div className="inner-content">
            <h5 className="title-sm" style={{ fontSize: '18px' }}>
                {service.title}
            </h5>
            <p className="disc" style={service.descWidthStyle}>
                {service.description}
            </p>
        </div>
    </div>
);

// // Component for the sidebar categories
// const CategoryLink = ({ category, activePath }: { category: CategoryData, activePath: string }) => {
    
//     // Logic to check if the current link is active
//     const nextPath = `/${category.href.replace('.html', '')}`;
//     const isActive = nextPath === activePath;
    
//     // Conditional styling
//     const linkStyle: React.CSSProperties = isActive ? { backgroundColor: '#f0f0f0', borderLeft: '3px solid #0056b3' } : {};
    
//     return (
//         <ul className="single-categories" style={linkStyle}>
//             <li>
//                 <Link href={nextPath}>
//                     {category.text} <i className="far fa-long-arrow-right"></i>
//                 </Link>
//             </li>
//         </ul>
//     );
// };

const CategoryLink = ({
  category,
  activePath,
}: {
  category: CategoryData;
  activePath: string;
}) => {
  const nextPath = category.href; // ✅ USE AS-IS

  const isActive = nextPath === activePath;

  const linkStyle: React.CSSProperties = isActive
    ? { backgroundColor: '#f0f0f0', borderLeft: '3px solid #0056b3' }
    : {};

  return (
    <ul className="single-categories" style={linkStyle}>
      <li>
        <Link href={nextPath}>
          {category.text} <i className="far fa-long-arrow-right"></i>
        </Link>
      </li>
    </ul>
  );
};


// --- Main Template Component (Exported) ---

// ✅ FIX 2: Component is correctly named ServicesTemplate
const ServicesTemplate: React.FC<ServicesTemplateProps> = ({ data, activePath }) => {
    
    // Destructure content from the 'data' prop (NOT imported JSON)
    const { banner, mainContent, shortServices, sidebarCategories, sidebarTitle } = data;

    return (
        <>
            {/* Breadcrumb/Banner Area */}
            <div className="breadcrumb-service-detals-one">
                <div className="container-1754">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner-service-details-1 bg_image">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="title-area-left">
                                                <span className="bg-title">{banner.bgTitle}</span>
                                                <h1 className="title rts-text-anime-style-1" style={{ fontSize: banner.titleFontSize }}>
                                                    {banner.title}
                                                </h1>
                                                <p className="disc" style={{ fontSize: banner.descriptionFontSize }}>
                                                    {banner.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Details Main Area */}
            <div className="rts-service-details-area-main-bottom">
                <div className="container">
                    <div className="row">
                        {/* Main Content Column */}
                        <div className="col-xl-8 px-5">
                            <div className="service-details-left-area">
                                <div className="thumbnail">
                                    {/* ✅ FIX 1: Use the path directly */}
                                    <Image 
                                        src={mainContent.imageSrc}
                                        alt={mainContent.altText} 
                                        width={800} 
                                        height={500} 
                                        layout="responsive" 
                                    />
                                </div>
                                <p style={{ fontSize: mainContent.descriptionFontSize }}>
                                    {mainContent.description}
                                </p>

                                {/* Service Short Main Wrapper */}
                                <div className="service-short-main-wrapper">
                                    {shortServices.map((service, index) => (
                                        <ShortServiceItem key={index} service={service} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="col-xl-4 px-5 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style mt-service-shorter">
                            {/* Added style here to remove rounding */}
                            <div className="rts-single-wized Categories" style={{ borderRadius: '0px' }}>
                                <div className="wized-header" style={{ borderRadius: '0px' }}>
                                    <h5 className="title">
                                        {sidebarTitle}
                                    </h5>
                                </div>
                                <div className="wized-body">
                                    {/* Categories Populated from the prop data, passing activePath */}
                                    {sidebarCategories.map((category, index) => (
                                        <CategoryLink 
                                            key={index} 
                                            category={category}
                                            activePath={activePath} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTemplate;