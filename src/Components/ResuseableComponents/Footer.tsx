
// "use client";

// import React from 'react';
// // We use the Next.js <Link> component for internal navigation
// import Link from 'next/link';

// // Placeholder Logo and Image paths (assumed to be in the /public folder)
// const LOGO_SRC = "/images/logo/03.svg";
// const TITLE_UNDERLINE_SRC = "/images/footer/under-title.png";

// const Footer = () => {
//     // Function to calculate the current year dynamically, replacing the old <script> tag
//     const getCurrentYear = () => new Date().getFullYear();

//     return (
//         // The main footer container, assuming the background image is available via CSS classes
//         <footer className="footer-8-area-bg bg_image pt--65">
//             {/* The custom CSS from your original HTML is included here as a string 
//                 to ensure the precise styling and spacing is maintained, 
//                 especially for the contact section and responsiveness. 
//             */}
//             <style jsx global>{`
//                 /* Global styles for the footer container */
//                 .footer-8-area-bg {
//                     background-color: #262c3f; /* Fallback color for bg_image */
//                     color: #fff;
//                 }
//                 .footer-logo-area-left-8 .disc {
//                     font-size: 15px;
//                     line-height: 1.6;
//                     color: #c7ced0;
//                     margin-top: 20px;
//                 }
//                 .social-area-wrapper-two {
//                     list-style: none;
//                     padding: 0;
//                     display: flex;
//                     gap: 15px;
//                     margin-top: 30px;
//                 }
//                 .social-area-wrapper-two li a {
//                     width: 40px;
//                     height: 40px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     border-radius: 50%;
//                     background: #394347; /* Dark social icon background */
//                     color: #fff;
//                     font-size: 18px;
//                     transition: background-color 0.3s;
//                 }
//                 .social-area-wrapper-two li a:hover {
//                     background: #4F46E5; /* Primary color hover */
//                 }

//                 /* Wized Title (for Quick Links and Contact Us) */
//                 .footer-one-single-wized .wized-title .title {
//                     font-size: 24px;
//                     font-weight: 700;
//                     margin-bottom: 5px;
//                 }
//                 .footer-one-single-wized .wized-title img {
//                     margin-bottom: 30px;
//                 }

//                 /* Quick Links */
//                 .quick-link-inner {
//                     display: flex;
//                     flex-wrap: wrap; /* Allows links to wrap on small screens */
//                     gap: 15px; /* Gap between link columns */
//                 }
//                 .quick-link-inner .links {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                 }
//                 .quick-link-inner .links li {
//                     margin-bottom: 12px;
//                 }
//                 .quick-link-inner .links li a {
//                     color: #c7ced0;
//                     text-decoration: none;
//                     font-size: 16px;
//                     transition: color 0.3s;
//                     display: flex;
//                     align-items: center;
//                 }
//                 .quick-link-inner .links li a:hover {
//                     color: #fff;
//                 }
//                 .quick-link-inner .links li a i {
//                     margin-right: 10px;
//                     font-size: 12px;
//                 }
//                 .quick-link-inner .margin-left-70 {
//                     margin-left: 70px;
//                 }
                
//                 /* ===== Footer contact — exact spacing like screenshot (Overriding theme classes) ===== */
//                 .signle-footer-contact-8 {
//                     display: flex !important;
//                     align-items: center !important; 
//                     gap: 16px !important; 
//                     margin: 10px 0 !important; 
//                     padding: 0 !important;
//                     min-height: 56px; 
//                 }

//                 /* Icon box */
//                 .signle-footer-contact-8 .icon {
//                     width: 44px !important;
//                     height: 44px !important;
//                     display: flex !important;
//                     align-items: center !important;
//                     justify-content: center !important;
//                     border-radius: 8px !important;
//                     background: #394347 !important; 
//                     color: #fff !important;
//                     font-size: 18px !important;
//                     flex-shrink: 0 !important;
//                     box-sizing: border-box;
//                 }

//                 /* Inner content area */
//                 .signle-footer-contact-8 .inner-content {
//                     display: block;
//                     line-height: 1.35;
//                     min-width: 0; 
//                 }

//                 /* Title (small heading) */
//                 .signle-footer-contact-8 .inner-content .title {
//                     font-size: 15.5px !important;
//                     margin: 0 0 3px 0 !important;
//                     color: #ffffff !important;
//                     font-weight: 600;
//                 }

//                 /* Link / lines (phone, email, address) */
//                 .signle-footer-contact-8 .inner-content a {
//                     display: block !important; 
//                     font-size: 14.5px !important;
//                     color: #c7ced0 !important;
//                     text-decoration: none !important;
//                     margin: 0;
//                     line-height: 1.45 !important;
//                 }
//                 /* Move ONLY the last icon (location) slightly up for better vertical alignment */
//                 .quick-link-inner .signle-footer-contact-8:last-child {
//                     margin-top: -2px !important; 
//                 }

//                 /* Copyright Area */
//                 .copyright-area-main-wrapper {
//                     border-top: 1px solid rgba(255, 255, 255, 0.1);
//                     padding: 25px 0;
//                 }
//                 .copyright-8-wrapper {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     color: #c7ced0;
//                     font-size: 15px;
//                 }
//                 .copyright-8-wrapper p {
//                     margin: 0;
//                 }
//                 .copyright-8-wrapper ul {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                     display: flex;
//                     gap: 20px;
//                 }
//                 .copyright-8-wrapper ul a {
//                     color: #c7ced0;
//                     text-decoration: none;
//                     transition: color 0.3s;
//                 }
//                 .copyright-8-wrapper ul a:hover {
//                     color: #fff;
//                 }

//                 /* Responsive Adjustments */
//                 @media (max-width: 991px) {
//                     .footer-8-area-bg .container {
//                         padding-bottom: 40px;
//                     }
//                     .footer-logo-area-left-8 {
//                         margin-bottom: 40px;
//                     }
//                     .footer-one-single-wized {
//                         margin-bottom: 40px;
//                     }
//                     .quick-link-inner {
//                         justify-content: space-between;
//                     }
//                     .quick-link-inner .margin-left-70 {
//                         margin-left: 0; /* Remove horizontal offset on mobile */
//                     }
//                 }
//                 @media (max-width: 767px) {
//                     .quick-link-inner {
//                         flex-direction: column; /* Stack link columns vertically */
//                         gap: 20px;
//                     }
//                     .copyright-8-wrapper {
//                         flex-direction: column;
//                         text-align: center;
//                     }
//                     .copyright-8-wrapper ul {
//                         margin-top: 10px;
//                     }
//                 }
//             `}</style>
            
//             <div className="container pb--65">
//                 <div className="row">
//                     {/* Column 1: Logo & Social */}
//                     <div className="col-lg-3 col-md-12">
//                         <div className="footer-logo-area-left-8">
//                             <Link href="/" className="logo">
//                                 <img src={LOGO_SRC} alt="logo" width={100} height={40} />
//                             </Link>
//                             <p className="disc">
//                                 Empowering Gujranwala’s industries with global connectivity, innovation, and strategic growth
//                             </p>
//                             <ul className="social-area-wrapper-two">
//                                 <li>
//                                     <Link href="https://www.facebook.com/gbaofficial" target="_blank" aria-label="Facebook">
//                                         <i className="fa-brands fa-facebook-f"></i>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://www.linkedin.com/company/gbaofficial/" target="_blank" aria-label="LinkedIn">
//                                         <i className="fa-brands fa-linkedin-in"></i>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://www.instagram.com/gba.connect/" target="_blank" aria-label="Instagram">
//                                         <i className="fa-brands fa-instagram"></i>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Column 2: Quick Links */}
//                     <div className="offset-lg-1 col-lg-4 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">Quick Links</h5>
//                                 {/* Using <img> for the underline image */}
//                                 <img src={TITLE_UNDERLINE_SRC} alt="finbiz_footer" width={80} height={10} />
//                             </div>
//                             <div className="quick-link-inner">
//                                 <ul className="links">
//                                     {/* Using Next.js Link component */}
//                                     <li><Link href="/gba.html"><i className="far fa-arrow-right"></i> About Us</Link></li>
//                                     <li><Link href="/gujranwala.html"><i className="far fa-arrow-right"></i> Gujranwala</Link></li>
//                                     <li><Link href="/our-team.html"><i className="far fa-arrow-right"></i> Our Team</Link></li>
//                                     <li><Link href="/partners2.html"><i className="far fa-arrow-right"></i> Partners</Link></li>
//                                     <li><Link href="/Flagship.html"><i className="far fa-arrow-right"></i> Flagships</Link></li>
//                                 </ul>
//                                 <ul className="links margin-left-70">
//                                     <li><Link href="/service-details.html"><i className="far fa-arrow-right"></i> Services</Link></li>
//                                     <li><Link href="#"><i className="far fa-arrow-right"></i> Resources</Link></li>
//                                     <li><Link href="/archive.html"><i className="far fa-arrow-right"></i> Archives</Link></li>
//                                     <li><Link href="/contact-2.html"><i className="far fa-arrow-right"></i> Contact Us</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Column 3: Contact Us */}
//                     <div className="offset-lg-1 col-lg-3 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">Contact Us</h5>
//                                 <img src={TITLE_UNDERLINE_SRC} alt="finbiz_footer" width={80} height={10} />
//                             </div>
//                             <div className="quick-link-inner d-block">
//                                 {/* Phone Contact */}
//                                 <div className="signle-footer-contact-8">
//                                     <div className="icon">
//                                         <i className="fa-solid fa-phone-alt"></i>
//                                     </div>
//                                     <div className="inner-content">
//                                         <h5 className="title">Call Us 24/7</h5>
//                                         <a href="tel:+923338207872">+92 333 8207872</a> 
//                                         <a href="tel:+923338207872">+92 333 8207872</a>
//                                     </div>
//                                 </div>
//                                 {/* Email Contact */}
//                                 <div className="signle-footer-contact-8">
//                                     <div className="icon">
//                                         <i className="fa-solid fa-envelope"></i>
//                                     </div>
//                                     <div className="inner-content">
//                                         <h5 className="title">Work with us</h5>
//                                         <a href="mailto:info@gba.org.pk">info@gba.org.pk</a>
//                                     </div>
//                                 </div>
//                                 {/* Location Contact */}
//                                 <div className="signle-footer-contact-8">
//                                     <div className="icon">
//                                         <i className="fa-solid fa-location-dot"></i>
//                                     </div>
//                                     <div className="inner-content">
//                                         <h5 className="title">Our Location</h5>
//                                         <p>
//                                             Office G-11,
//                                             Innovista Rachna, DHA <br /> Gujranwala - Pakistan.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Area */}
//             <div className="copyright-area-main-wrapper">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="copyright-8-wrapper">
//                                 {/* Using the dynamically calculated year */}
//                                 <p>Invena - Copyright {getCurrentYear()}. All rights reserved.</p>
//                                 <ul>
//                                     <li><Link href="/privacy-policy.html">Privacy Policy</Link></li>
//                                     <li><Link href="/terms-of-condition.html">Terms & Condition</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
// import React from 'react';

// // =========================================================================
// // 1. TYPESCRIPT INTERFACES
// // Define the types that match the structure of FooterData.json
// // =========================================================================

// interface LinkLine {
//     text: string;
//     href?: string;
// }

// interface SocialLink {
//     iconClass: string;
//     href: string;
//     ariaLabel: string;
// }

// interface QuickLinkSection {
//     text: string;
//     href: string;
// }

// interface ContactDetail {
//     iconClass: string;
//     title: string;
//     lines: LinkLine[];
//     isAddress?: boolean;
// }

// interface QuickLinksData {
//     title: string;
//     columns: QuickLinkSection[][];
// }

// interface FooterDataType {
//     logoSrc: string;
//     titleUnderlineSrc: string;
//     description: string;
//     socialLinks: SocialLink[];
//     quickLinks: QuickLinksData;
//     contactInfo: {
//         title: string;
//         details: ContactDetail[];
//     };
//     copyrightText: string;
//     policyLinks: QuickLinkSection[];
// }


// // =========================================================================
// // 2. MOCK DATA (Simulates import from FooterData.json for runnability)
// // In a real Next.js/React project, you would use:
// // import FooterData from '../../Data/FooterData.json';
// // =========================================================================
// const FooterData: FooterDataType = {
//     "logoSrc": "/images/logo/03.svg",
//     "titleUnderlineSrc": "/images/footer/under-title.png",
//     "description": "Empowering Gujranwala’s industries with global connectivity, innovation, and strategic growth",
//     "socialLinks": [
//         {"iconClass": "fa-brands fa-facebook-f", "href": "https://www.facebook.com/gbaofficial", "ariaLabel": "Facebook"},
//         {"iconClass": "fa-brands fa-linkedin-in", "href": "https://www.linkedin.com/company/gbaofficial/", "ariaLabel": "LinkedIn"},
//         {"iconClass": "fa-brands fa-instagram", "href": "https://www.instagram.com/gba.connect/", "ariaLabel": "Instagram"}
//     ],
//     "quickLinks": {
//         "title": "Quick Links",
//         "columns": [
//             [
//                 {"text": "About Us", "href": "/gba.html"},
//                 {"text": "Gujranwala", "href": "/gujranwala.html"},
//                 {"text": "Our Team", "href": "/our-team.html"},
//                 {"text": "Partners", "href": "/partners2.html"},
//                 {"text": "Flagships", "href": "/Flagship.html"}
//             ],
//             [
//                 {"text": "Services", "href": "/service-details.html"},
//                 {"text": "Resources", "href": "#"},
//                 {"text": "Archives", "href": "/archive.html"},
//                 {"text": "Contact Us", "href": "/contact-2.html"}
//             ]
//         ]
//     },
//     "contactInfo": {
//         "title": "Contact Us",
//         "details": [
//             {
//                 "iconClass": "fa-solid fa-phone-alt",
//                 "title": "Call Us 24/7",
//                 "lines": [
//                     {"text": "+92 333 8207872", "href": "tel:+923338207872"},
//                     {"text": "+92 333 8207872", "href": "tel:+923444844448"}
//                 ]
//             },
//             {
//                 "iconClass": "fa-solid fa-envelope",
//                 "title": "Work with us",
//                 "lines": [
//                     {"text": "info@gba.org.pk", "href": "mailto:info@gba.org.pk"}
//                 ]
//             },
//             {
//                 "iconClass": "fa-solid fa-location-dot",
//                 "title": "Our Location",
//                 "lines": [
//                     {"text": "Office G-11, Innovista Rachna, DHA"},
//                     {"text": "Gujranwala - Pakistan."}
//                 ],
//                 "isAddress": true
//             }
//         ]
//     },
//     "copyrightText": "GBA - Copyright",
//     "policyLinks": [
//         {"text": "Privacy Policy", "href": "/privacy-policy.html"},
//         {"text": "Terms & Condition", "href": "/terms-of-condition.html"}
//     ]
// };


// // =========================================================================
// // 3. FOOTER COMPONENT
// // =========================================================================

// /**
//  * Renders a responsive footer using data defined in FooterData.json.
//  */
// const Footer: React.FC = () => {
//     // Note: In a real app, FooterData would be imported from the JSON file
//     const data = FooterData;
    
//     // Function to calculate the current year dynamically
//     const getCurrentYear = (): number => new Date().getFullYear();

//     return (
//         <>
//             {/* Embedded CSS from the original structure */}
//             <style>
//             {`
//                 /* Global styles for the footer container */
//                 .footer-8-area-bg {
//                     background-color: #262c3f; /* Fallback color for bg_image */
//                     color: #fff;
//                     padding-top: 65px;
//                 }
//                 .footer-logo-area-left-8 .disc {
//                     font-size: 15px;
//                     line-height: 1.6;
//                     color: #c7ced0;
//                     margin-top: 20px;
//                 }
//                 .social-area-wrapper-two {
//                     list-style: none;
//                     padding: 0;
//                     display: flex;
//                     gap: 15px;
//                     margin-top: 30px;
//                 }
//                 .social-area-wrapper-two li a {
//                     width: 40px;
//                     height: 40px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     border-radius: 50%;
//                     background: #394347; /* Dark social icon background */
//                     color: #fff;
//                     font-size: 18px;
//                     transition: background-color 0.3s;
//                 }
//                 .social-area-wrapper-two li a:hover {
//                     background: #4F46E5; /* Primary color hover */
//                 }

//                 /* Wized Title (for Quick Links and Contact Us) */
//                 .footer-one-single-wized .wized-title .title {
//                     font-size: 24px;
//                     font-weight: 700;
//                     margin-bottom: 5px;
//                 }
//                 .footer-one-single-wized .wized-title img {
//                     margin-bottom: 30px;
//                 }

//                 /* Quick Links */
//                 .quick-link-inner {
//                     display: flex;
//                     flex-wrap: wrap; 
//                     gap: 15px; 
//                 }
//                 .quick-link-inner .links {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                 }
//                 .quick-link-inner .links li {
//                     margin-bottom: 12px;
//                 }
//                 .quick-link-inner .links li a {
//                     color: #c7ced0;
//                     text-decoration: none;
//                     font-size: 16px;
//                     transition: color 0.3s;
//                     display: flex;
//                     align-items: center;
//                 }
//                 .quick-link-inner .links li a:hover {
//                     color: #fff;
//                 }
//                 .quick-link-inner .links li a i {
//                     margin-right: 10px;
//                     font-size: 12px;
//                 }
//                 .quick-link-inner .margin-left-70 {
//                     margin-left: 70px;
//                 }
                
//                 /* Footer contact styling */
//                 .signle-footer-contact-8 {
//                     display: flex !important;
//                     align-items: center !important; 
//                     gap: 16px !important; 
//                     margin: 10px 0 !important; 
//                     padding: 0 !important;
//                     min-height: 56px; 
//                 }
//                 .signle-footer-contact-8 .icon {
//                     width: 44px !important;
//                     height: 44px !important;
//                     display: flex !important;
//                     align-items: center !important;
//                     justify-content: center !important;
//                     border-radius: 8px !important;
//                     background: #394347 !important; 
//                     color: #fff !important;
//                     font-size: 18px !important;
//                     flex-shrink: 0 !important;
//                     box-sizing: border-box;
//                 }
//                 .signle-footer-contact-8 .inner-content {
//                     display: block;
//                     line-height: 1.35;
//                     min-width: 0; 
//                 }
//                 .signle-footer-contact-8 .inner-content .title {
//                     font-size: 15.5px !important;
//                     margin: 0 0 3px 0 !important;
//                     color: #ffffff !important;
//                     font-weight: 600;
//                 }
//                 .signle-footer-contact-8 .inner-content a,
//                 .signle-footer-contact-8 .inner-content p {
//                     display: block !important; 
//                     font-size: 14.5px !important;
//                     color: #c7ced0 !important;
//                     text-decoration: none !important;
//                     margin: 0;
//                     line-height: 1.45 !important;
//                 }
//                 .quick-link-inner .signle-footer-contact-8:last-child {
//                     margin-top: -10px !important; 
//                 }

//                 /* Copyright Area */
//                 .copyright-area-main-wrapper {
//                     border-top: 1px solid rgba(255, 255, 255, 0.1);
//                     padding: 25px 0;
//                 }
//                 .copyright-8-wrapper {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     color: #c7ced0;
//                     font-size: 15px;
//                 }
//                 .copyright-8-wrapper p {
//                     margin: 0;
//                 }
//                 .copyright-8-wrapper ul {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                     display: flex;
//                     gap: 20px;
//                 }
//                 .copyright-8-wrapper ul a {
//                     color: #c7ced0;
//                     text-decoration: none;
//                     transition: color 0.3s;
//                 }
//                 .copyright-8-wrapper ul a:hover {
//                     color: #fff;
//                 }

//                 /* Responsive Adjustments (using Tailwind style column classes for row layout) */
//                 @media (max-width: 991px) {
//                     .footer-8-area-bg .container {
//                         padding-bottom: 40px;
//                     }
//                     .footer-logo-area-left-8 {
//                         margin-bottom: 40px;
//                     }
//                     .footer-one-single-wized {
//                         margin-bottom: 40px;
//                     }
//                     .quick-link-inner {
//                         justify-content: space-between;
//                     }
//                     .quick-link-inner .margin-left-70 {
//                         margin-left: 0;
//                     }
//                 }
//                 @media (max-width: 767px) {
//                     .quick-link-inner {
//                         flex-direction: column;
//                         gap: 20px;
//                     }
//                     .copyright-8-wrapper {
//                         flex-direction: column;
//                         text-align: center;
//                     }
//                     .copyright-8-wrapper ul {
//                         margin-top: 10px;
//                     }
//                 }
//             `}
//             </style>

//             <footer className="footer-8-area-bg pt--65">
//                 <div className="container pb--65">
//                     <div className="row">
//                         {/* Column 1: Logo & Social */}
//                         <div className="col-lg-3 col-md-12">
//                             <div className="footer-logo-area-left-8">
//                                 {/* In a real app, use Next.js <Link> */}
//                                 <a href="/" className="logo">
//                                     <img src={data.logoSrc} alt="logo" width={100} height={40} />
//                                 </a>
//                                 <p className="disc">
//                                     {data.description}
//                                 </p>
//                                 <ul className="social-area-wrapper-two">
//                                     {data.socialLinks.map((social) => (
//                                         <li key={social.ariaLabel}>
//                                             <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
//                                                 <i className={social.iconClass}></i>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Column 2: Quick Links */}
//                         <div className="offset-lg-1 col-lg-4 col-md-6">
//                             <div className="footer-one-single-wized">
//                                 <div className="wized-title">
//                                     <h5 className="title">{data.quickLinks.title}</h5>
//                                     <img src={data.titleUnderlineSrc} alt="footer-underline" width={80} height={10} />
//                                 </div>
//                                 <div className="quick-link-inner">
//                                     {data.quickLinks.columns.map((column, colIndex) => (
//                                         <ul className={`links ${colIndex === 1 ? 'margin-left-70' : ''}`} key={colIndex}>
//                                             {column.map((link, linkIndex) => (
//                                                 <li key={linkIndex}>
//                                                     {/* In a real app, use Next.js <Link> */}
//                                                     <a href={link.href}>
//                                                         <i className="far fa-arrow-right"></i> {link.text}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Column 3: Contact Us */}
//                         <div className="offset-lg-1 col-lg-3 col-md-6">
//                             <div className="footer-one-single-wized">
//                                 <div className="wized-title">
//                                     <h5 className="title">{data.contactInfo.title}</h5>
//                                     <img src={data.titleUnderlineSrc} alt="footer-underline" width={80} height={10} />
//                                 </div>
//                                 <div className="quick-link-inner d-block">
//                                     {data.contactInfo.details.map((contact, contactIndex) => (
//                                         <div className="signle-footer-contact-8" key={contactIndex}>
//                                             <div className="icon">
//                                                 <i className={contact.iconClass}></i>
//                                             </div>
//                                             <div className="inner-content">
//                                                 <h5 className="title">{contact.title}</h5>
//                                                 {contact.lines.map((line, lineIndex) => (
//                                                     // Render as <a> if href is present, otherwise render as <p> (for address lines)
//                                                     line.href ? (
//                                                         <a href={line.href} key={lineIndex}>{line.text}</a>
//                                                     ) : (
//                                                         <p key={lineIndex}>{line.text}</p>
//                                                     )
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright Area */}
//                 <div className="copyright-area-main-wrapper">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="copyright-8-wrapper">
//                                     <p>{data.copyrightText} {getCurrentYear()}. All rights reserved.</p>
//                                     <ul>
//                                         {data.policyLinks.map((link, index) => (
//                                             <li key={index}>
//                                                 {/* In a real app, use Next.js <Link> */}
//                                                 <a href={link.href}>{link.text}</a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// };

// export default Footer;
// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import footerData from '../Data/FooterData.json'; // Adjust this path to where your JSON is
// //import headerData from '../Data/HeaderData.json';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="footer-8-area-bg pt--65">
//             <style jsx>{`
//                 .footer-8-area-bg { background-color: #262c3f; color: #fff; padding-top: 65px; }
//                 .footer-logo-area-left-8 .disc { font-size: 15px; color: #c7ced0; margin-top: 20px; line-height: 1.6; }
//                 .social-area-wrapper-two { list-style: none; padding: 0; display: flex; gap: 15px; margin-top: 30px; }
//                 .social-area-wrapper-two li a { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #394347; color: #fff; transition: 0.3s; }
//                 .social-area-wrapper-two li a:hover { background: #4F46E5; }
                
//                 .footer-one-single-wized .wized-title .title { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
//                 .quick-link-inner { display: flex; flex-wrap: wrap; gap: 15px; }
//                 .quick-link-inner .links { list-style: none; padding: 0; margin: 0; }
//                 .quick-link-inner .links li { margin-bottom: 12px; }
//                 .quick-link-inner .links li a { color: #c7ced0; font-size: 16px; transition: 0.3s; display: flex; align-items: center; text-decoration: none; }
//                 .quick-link-inner .links li a:hover { color: #fff; }
//                 .quick-link-inner .links li a i { margin-right: 10px; font-size: 12px; }
//                 .margin-left-70 { margin-left: 70px; }

//                 .signle-footer-contact-8 { display: flex; align-items: center; gap: 16px; margin: 10px 0; min-height: 56px; }
//                 .signle-footer-contact-8 .icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #394347; color: #fff; flex-shrink: 0; }
//                 .signle-footer-contact-8 .inner-content .title { font-size: 15.5px; color: #fff; font-weight: 600; margin: 0 0 3px 0; }
//                 .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; }

//                 .copyright-area-main-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 25px 0; margin-top: 40px; }
//                 .copyright-8-wrapper { display: flex; justify-content: space-between; align-items: center; color: #c7ced0; font-size: 15px; }
//                 .copyright-8-wrapper ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
//                 .copyright-8-wrapper ul a { color: #c7ced0; text-decoration: none; transition: 0.3s; }
//                 .copyright-8-wrapper ul a:hover { color: #fff; }

//                 @media (max-width: 991px) {
//                     .margin-left-70 { margin-left: 0; }
//                     .quick-link-inner { justify-content: space-between; }
//                 }
//                 @media (max-width: 767px) {
//                     .quick-link-inner { flex-direction: column; }
//                     .copyright-8-wrapper { flex-direction: column; text-align: center; gap: 10px; }
//                 }
//             `}</style>

//             <div className="container pb--65">
//                 <div className="row">
//                     {/* Left Column: Logo and Bio */}
//                     <div className="col-lg-3 col-md-12">
//                         <div className="footer-logo-area-left-8">
//                             <Link href="/" className="logo">
//                                 <Image src={footerData.logoSrc} alt="logo" width={120} height={50} />
//                             </Link>
//                             <p className="disc">{footerData.description}</p>
//                             <ul className="social-area-wrapper-two">
//                                 {footerData.socialLinks.map((social, idx) => (
//                                     <li key={idx}>
//                                         <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
//                                             <i className={social.iconClass}></i>
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Middle Column: Quick Links */}
//                     <div className="offset-lg-1 col-lg-4 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">{footerData.quickLinks.title}</h5>
//                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
//                             </div>
//                             <div className="quick-link-inner">
//                                 {footerData.quickLinks.columns.map((col, colIdx) => (
//                                     <ul key={colIdx} className={`links ${colIdx === 1 ? 'margin-left-70' : ''}`}>
//                                         {col.map((link, linkIdx) => (
//                                             <li key={linkIdx}>
//                                                 <Link href={link.href}>
//                                                     <i className="far fa-arrow-right"></i> {link.text}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column: Contact Info */}
//                     <div className="offset-lg-1 col-lg-3 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">{footerData.contactInfo.title}</h5>
//                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
//                             </div>
//                             <div className="contact-details">
//                                 {footerData.contactInfo.details.map((contact, idx) => (
//                                     <div className="signle-footer-contact-8" key={idx}>
//                                         <div className="icon">
//                                             <i className={contact.iconClass}></i>
//                                         </div>
//                                         <div className="inner-content">
//                                             <h5 className="title">{contact.title}</h5>
//                                             {contact.lines.map((line, lIdx) => (
//                                                 line.href ? (
//                                                     <a href={line.href} key={lIdx}>{line.text}</a>
//                                                 ) : (
//                                                     <p key={lIdx}>{line.text}</p>
//                                                 )
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Copyright Bar */}
//             <div className="copyright-area-main-wrapper">
//                 <div className="container">
//                     <div className="copyright-8-wrapper">
//                         <p>{footerData.copyrightText} © {currentYear}. All rights reserved.</p>
//                         <ul>
//                             {footerData.policyLinks.map((policy, idx) => (
//                                 <li key={idx}>
//                                     <Link href={policy.href}>{policy.text}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerDataImport from '../Data/FooterData.json';

// --- TYPESCRIPT INTERFACES (Fixes Error 1: Property does not exist) ---
interface FooterData {
    logoSrc: string;
    titleUnderlineSrc: string;
    description: string;
    socialLinks: Array<{ iconClass: string; href: string; ariaLabel: string }>;
    quickLinks: {
        title: string;
        columns: Array<Array<{ text: string; href: string }>>;
    };
    contactInfo: {
        title: string;
        details: Array<{
            iconClass: string;
            title: string;
            lines: Array<{ text: string; href?: string }>;
        }>;
    };
    copyrightText: string;
    policyLinks: Array<{ text: string; href: string }>;
}

const footerData = footerDataImport as FooterData;

const Footer: React.FC = () => {
    // --- HYDRATION FIX (Fixes Error 2: Text content does not match) ---
    // We initialize the year after the component mounts on the client
    const [year, setYear] = useState<number | string>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer-8-area-bg pt--65">
            <style jsx>{`
                .footer-8-area-bg { background-color: #262c3f; color: #fff; padding-top: 65px; }
                .footer-logo-area-left-8 .disc { font-size: 15px; color: #c7ced0; margin-top: 20px; line-height: 1.6; }
                .social-area-wrapper-two { list-style: none; padding: 0; display: flex; gap: 15px; margin-top: 30px; }
                .social-area-wrapper-two li a { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #394347; color: #fff; transition: 0.3s; }
                .social-area-wrapper-two li a:hover { background: #4F46E5; }
                .footer-one-single-wized .wized-title .title { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
                .quick-link-inner { display: flex; flex-wrap: wrap; gap: 15px; }
                .quick-link-inner .links { list-style: none; padding: 0; margin: 0; }
                .quick-link-inner .links li { margin-bottom: 12px; }
                .quick-link-inner .links li a { color: #c7ced0; font-size: 16px; transition: 0.3s; display: flex; align-items: center; text-decoration: none; }
                .quick-link-inner .links li a:hover { color: #fff; }
                .quick-link-inner .links li a i { margin-right: 10px; font-size: 12px; }
                .margin-left-70 { margin-left: 70px; }
                .signle-footer-contact-8 { display: flex; align-items: center; gap: 16px; margin: 10px 0; min-height: 56px; }
                .signle-footer-contact-8 .icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #394347; color: #fff; flex-shrink: 0; }
                .signle-footer-contact-8 .inner-content .title { font-size: 15.5px; color: #fff; font-weight: 600; margin: 0 0 3px 0; }
                .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; }
                .copyright-area-main-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 25px 0; margin-top: 40px; }
                .copyright-8-wrapper { display: flex; justify-content: space-between; align-items: center; color: #c7ced0; font-size: 15px; }
                .copyright-8-wrapper ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
                .copyright-8-wrapper ul a { color: #c7ced0; text-decoration: none; transition: 0.3s; }
                .copyright-8-wrapper ul a:hover { color: #fff; }
                @media (max-width: 991px) { .margin-left-70 { margin-left: 0; } .quick-link-inner { justify-content: space-between; } }
                @media (max-width: 767px) { .quick-link-inner { flex-direction: column; } .copyright-8-wrapper { flex-direction: column; text-align: center; gap: 10px; } }
            `}</style>

            <div className="container pb--65">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <div className="footer-logo-area-left-8">
                            <Link href="/" className="logo">
                                <Image src={footerData.logoSrc} alt="logo" width={120} height={50} priority />
                            </Link>
                            <p className="disc">{footerData.description}</p>
                            <ul className="social-area-wrapper-two">
                                {footerData.socialLinks.map((social, idx) => (
                                    <li key={`social-${idx}`}>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
                                            <i className={social.iconClass}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-4 col-md-6">
                        <div className="footer-one-single-wized">
                            <div className="wized-title">
                                <h5 className="title">{footerData.quickLinks.title}</h5>
                                <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
                            </div>
                            <div className="quick-link-inner">
                                {footerData.quickLinks.columns.map((col, colIdx) => (
                                    <ul key={`col-${colIdx}`} className={`links ${colIdx === 1 ? 'margin-left-70' : ''}`}>
                                        {col.map((link, linkIdx) => (
                                            <li key={`link-${colIdx}-${linkIdx}`}>
                                                <Link href={link.href}>
                                                    <i className="far fa-arrow-right"></i> {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-3 col-md-6">
                        <div className="footer-one-single-wized">
                            <div className="wized-title">
                                <h5 className="title">{footerData.contactInfo.title}</h5>
                                <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
                            </div>
                            <div className="contact-details">
                                {footerData.contactInfo.details.map((contact, idx) => (
                                    <div className="signle-footer-contact-8" key={`contact-${idx}`}>
                                        <div className="icon"><i className={contact.iconClass}></i></div>
                                        <div className="inner-content">
                                            <h5 className="title">{contact.title}</h5>
                                            {contact.lines.map((line, lIdx) => (
                                                line.href ? (
                                                    <a href={line.href} key={`line-${idx}-${lIdx}`}>{line.text}</a>
                                                ) : (
                                                    <p key={`line-${idx}-${lIdx}`}>{line.text}</p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area-main-wrapper">
                <div className="container">
                    <div className="copyright-8-wrapper">
                        <p>{footerData.copyrightText} © {year}. All rights reserved.</p>
                        <ul>
                            {footerData.policyLinks.map((policy, idx) => (
                                <li key={`policy-${idx}`}>
                                    <Link href={policy.href}>{policy.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;