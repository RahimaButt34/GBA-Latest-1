// "use client";
// import React from "react";
// import headerData from "../Data/ArchiveBlogHeader.json";

// interface SocialLink {
//   icon: string;
//   href: string;
// }

// interface TopBarRight {
//   links: { label: string; href: string }[];
//   social: SocialLink[];
// }

// interface TopBarLeft {
//   email: string;
//   workingTime: string;
// }

// interface TopBar {
//   left: TopBarLeft;
//   right: TopBarRight;
// }

// interface Logo {
//   src: string;
//   href: string;
//   alt: string;
// }

// interface MegaMenuItem {
//   label: string;
//   href: string;
//   icon?: string;
//   desc?: string;
// }

// interface MegaMenuColumn {
//   title?: string;
//   items: MegaMenuItem[];
// }

// interface MenuItem {
//   label: string;
//   href?: string;
//   submenu?: MegaMenuItem[];
//   megaMenu?: boolean;
//   columns?: MegaMenuColumn[];
// }

// interface HeaderContent {
//   topBar: TopBar;
//   logo: Logo;
//   menu: MenuItem[];
// }

// const Header = () => {
//   const data: HeaderContent = headerData as HeaderContent;

//   return (
//     <header className="header-one header--sticky">
//       {/* Top Bar */}
//       <div className="header-top-area-wrapper">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="header-top-one-wrapper">
//                 <div className="left">
//                   <div className="mail">
//                     <a href={`mailto:${data.topBar.left.email}`}>
//                       <i className="fal fa-envelope"></i> {data.topBar.left.email}
//                     </a>
//                   </div>
//                   <div className="working-time">
//                     <p>
//                       <i className="fal fa-clock"></i> Working: {data.topBar.left.workingTime}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="right">
//                   <ul className="top-nav">
//                     {data.topBar.right.links.map((link, i) => (
//                       <li key={i}>
//                         <a href={link.href}>{link.label}</a>
//                       </li>
//                     ))}
//                   </ul>
//                   <ul className="social-wrapper-one">
//                     {data.topBar.right.social.map((social, i) => (
//                       <li key={i}>
//                         <a href={social.href}>
//                           <i className={social.icon}></i>
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="header-main">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="header-main-one-wrapper">
//                 <div className="thumbnail">
//                   <a href={data.logo.href}>
//                     <img src={data.logo.src} alt={data.logo.alt} />
//                   </a>
//                 </div>
//                 <div className="main-header">
//                   <div className="nav-area">
//                     <ul>
//                       {data.menu.map((item, i) => (
//                         <li
//                           key={i}
//                           className={`main-nav ${item.submenu || item.megaMenu ? "has-dropdown" : ""} ${
//                             item.megaMenu ? "mega-menu" : ""
//                           }`}
//                         >
//                           <a href={item.href ?? "#"}>{item.label}</a>

//                           {/* Submenu */}
//                           {item.submenu && (
//                             <ul className="submenu parent-nav">
//                               {item.submenu.map((sub, j) => (
//                                 <li key={j}>
//                                   <a href={sub.href}>{sub.label}</a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}

//                           {/* Mega Menu */}
//                           {item.megaMenu && item.columns && (
//                             <div className="rts-mega-menu">
//                               <div className="wrapper">
//                                 <div className="container">
//                                   <div className="row g-0">
//                                     {item.columns.map((col, k) => (
//                                       <div key={k} className="col-lg-3">
//                                         <ul className="mega-menu-item parent-nav">
//                                           {col.title && <li className="hega-menu-head-wrapper"><p className="hega-menu-head">{col.title}</p></li>}
//                                           {col.items.map((menuItem, l) => (
//                                             <li key={l}>
//                                               <a href={menuItem.href}>
//                                                 {menuItem.icon && <img src={menuItem.icon} alt={menuItem.label} />}
//                                                 {menuItem.label} {menuItem.desc && <span className="desc">{menuItem.desc}</span>}
//                                               </a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Buttons */}
//                   <div className="button-area">
//                     <button className="search" id="search" aria-label="Search">
//                       <i className="far fa-search"></i>
//                     </button>
//                     <a href="contact.html" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn">
//                       Get Quote
//                     </a>
//                     <button id="menu-btn" aria-label="Menu" className="menu-btn menu ml--20 ml_sm--5">
//                       <img className="menu-light" src="assets/images/icons/01.svg" alt="Menu-icon" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


//events  previous code 


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
                    .rts-blog-area .rts-watermark-05 { font-size: 80px !important; opacity: 0.6 !important; }
                    .rts-blog-area .title-style-three .title { font-size: 36px !important; }
                }
            `}</style>
        </div>
    );
};

export default Events;