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
