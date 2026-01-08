

// //  'use client';

// // import React, { useEffect, useState } from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import footerDataImport from '../Data/FooterData.json';

// // // --- TYPESCRIPT INTERFACES (Fixes Error 1: Property does not exist) ---
// // interface FooterData {
// //     logoSrc: string;
// //     titleUnderlineSrc: string;
// //     description: string;
// //     socialLinks: Array<{ iconClass: string; href: string; ariaLabel: string }>;
// //     quickLinks: {
// //         title: string;
// //         columns: Array<Array<{ text: string; href: string }>>;
// //     };
// //     contactInfo: {
// //         title: string;
// //         details: Array<{
// //             iconClass: string;
// //             title: string;
// //             lines: Array<{ text: string; href?: string }>;
// //         }>;
// //     };
// //     copyrightText: string;
// //     policyLinks: Array<{ text: string; href: string }>;
// // }

// // const footerData = footerDataImport as FooterData;

// // const Footer: React.FC = () => {
// //     // --- HYDRATION FIX (Fixes Error 2: Text content does not match) ---
// //     // We initialize the year after the component mounts on the client
// //     const [year, setYear] = useState<number | string>("");

// //     useEffect(() => {
// //         setYear(new Date().getFullYear());
// //     }, []);

// //     return (
// //         <footer className="footer-8-area-bg pt--65">
// //             <style jsx>{`
// //                 .footer-8-area-bg { background-color: #262c3f; color: #fff; padding-top: 65px; }
// //                 .footer-logo-area-left-8 .disc { font-size: 15px; color: #c7ced0; margin-top: 20px; line-height: 1.6; }
// //                 .social-area-wrapper-two { list-style: none; padding: 0; display: flex; gap: 15px; margin-top: 30px; }
// //                 .social-area-wrapper-two li a { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #394347; color: #fff; transition: 0.3s; }
// //                 .social-area-wrapper-two li a:hover { background: #4F46E5; }
// //                 .footer-one-single-wized .wized-title .title { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
// //                 .quick-link-inner { display: flex; flex-wrap: wrap; gap: 15px; }
// //                 .quick-link-inner .links { list-style: none; padding: 0; margin: 0; }
// //                 .quick-link-inner .links li { margin-bottom: 12px; }
// //                 .quick-link-inner .links li a { color: #c7ced0; font-size: 16px; transition: 0.3s; display: flex; align-items: center; text-decoration: none; }
// //                 .quick-link-inner .links li a:hover { color: #fff; }
// //                 .quick-link-inner .links li a i { margin-right: 10px; font-size: 12px; }
// //                 .margin-left-70 { margin-left: 70px; }
// //                 .signle-footer-contact-8 { display: flex; align-items: center; gap: 16px; margin: 10px 0; min-height: 56px; }
// //                 .signle-footer-contact-8 .icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #394347; color: #fff; flex-shrink: 0; }
// //                 .signle-footer-contact-8 .inner-content .title { font-size: 15.5px; color: #fff; font-weight: 600; margin: 0 0 3px 0; }
// //                 .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; line-height:1.2 }
// //                 .copyright-area-main-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 25px 0; margin-top: 40px; }
// //                 .copyright-8-wrapper { display: flex; justify-content: space-between; align-items: center; color: #c7ced0; font-size: 15px; }
// //                 .copyright-8-wrapper ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
// //                 .copyright-8-wrapper ul a { color: #c7ced0; text-decoration: none; transition: 0.3s; }
// //                 .copyright-8-wrapper ul a:hover { color: #fff; }
// //                 @media (max-width: 991px) { .margin-left-70 { margin-left: 0; } .quick-link-inner { justify-content: space-between; } }
               
// //                 @media (max-width: 767px) { .quick-link-inner { flex-direction: column; } .copyright-8-wrapper { flex-direction: column; text-align: center; gap: 10px; } }
// //                  @media (max-width: 991px) { .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; line-height:1.2 }}
// //             `}</style>

// //             <div className="container pb--65">
// //                 <div className="row">
// //                     <div className="col-lg-3 col-md-12">
// //                         <div className="footer-logo-area-left-8">
// //                             <Link href="/" className="logo">
// //                                 <Image src={footerData.logoSrc} alt="logo" width={120} height={50} priority />
// //                             </Link>
// //                             <p className="disc">{footerData.description}</p>
// //                             <ul className="social-area-wrapper-two">
// //                                 {footerData.socialLinks.map((social, idx) => (
// //                                     <li key={`social-${idx}`}>
// //                                         <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
// //                                             <i className={social.iconClass}></i>
// //                                         </a>
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                     </div>

// //                     <div className="offset-lg-1 col-lg-4 col-md-6">
// //                         <div className="footer-one-single-wized">
// //                             <div className="wized-title">
// //                                 <h5 className="title">{footerData.quickLinks.title}</h5>
// //                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
// //                             </div>
// //                             <div className="quick-link-inner">
// //                                 {footerData.quickLinks.columns.map((col, colIdx) => (
// //                                     <ul key={`col-${colIdx}`} className={`links ${colIdx === 1 ? 'margin-left-70' : ''}`}>
// //                                         {col.map((link, linkIdx) => (
// //                                             <li key={`link-${colIdx}-${linkIdx}`}>
// //                                                 <Link href={link.href}>
// //                                                     <i className="far fa-arrow-right"></i> {link.text}
// //                                                 </Link>
// //                                             </li>
// //                                         ))}
// //                                     </ul>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="offset-lg-1 col-lg-3 col-md-6">
// //                         <div className="footer-one-single-wized">
// //                             <div className="wized-title">
// //                                 <h5 className="title">{footerData.contactInfo.title}</h5>
// //                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
// //                             </div>
// //                             <div className="contact-details">
// //                                 {footerData.contactInfo.details.map((contact, idx) => (
// //                                     <div className="signle-footer-contact-8" key={`contact-${idx}`}>
// //                                         <div className="icon"><i className={contact.iconClass}></i></div>
// //                                         <div className="inner-content">
// //                                             <h5 className="title">{contact.title}</h5>
// //                                             {contact.lines.map((line, lIdx) => (
// //                                                 line.href ? (
// //                                                     <a href={line.href} key={`line-${idx}-${lIdx}`}>{line.text}</a>
// //                                                 ) : (
// //                                                     <p key={`line-${idx}-${lIdx}`}>{line.text}</p>
// //                                                 )
// //                                             ))}
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="copyright-area-main-wrapper">
// //                 <div className="container">
// //                     <div className="copyright-8-wrapper">
// //                         <p>{footerData.copyrightText} © {year}. All rights reserved.</p>
// //                         <ul>
// //                             {footerData.policyLinks.map((policy, idx) => (
// //                                 <li key={`policy-${idx}`}>
// //                                     <Link href={policy.href}>{policy.text}</Link>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </div>
// //         </footer>
// //     );
// // };

// // export default Footer;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import footerDataImport from '../Data/FooterData.json';

// // --- TYPESCRIPT INTERFACES ---
// interface FooterData {
//     logoSrc: string;
//     titleUnderlineSrc: string;
//     description: string;
//     socialLinks: Array<{ iconClass: string; href: string; ariaLabel: string }>;
//     quickLinks: {
//         title: string;
//         columns: Array<Array<{ text: string; href: string }>>;
//     };
//     contactInfo: {
//         title: string;
//         details: Array<{
//             iconClass: string;
//             title: string;
//             lines: Array<{ text: string; href?: string }>;
//         }>;
//     };
//     copyrightText: string;
//     policyLinks: Array<{ text: string; href: string }>;
// }

// const footerData = footerDataImport as FooterData;

// const Footer: React.FC = () => {
//     const [year, setYear] = useState<number | string>("");

//     useEffect(() => {
//         setYear(new Date().getFullYear());
//     }, []);

//     return (
//         <footer className="footer-8-area-bg">
//             <style jsx>{`
//                 /* 1. Footer top padding kam kar di (65px se 35px) */
//                 .footer-8-area-bg { background-color: #262c3f; color: #fff; padding-top: 35px; }
                
//                 .footer-logo-area-left-8 .disc { font-size: 15px; color: #c7ced0; margin-top: 15px; line-height: 1.5; }
//                 .social-area-wrapper-two { list-style: none; padding: 0; display: flex; gap: 15px; margin-top: 20px; }
//                 .social-area-wrapper-two li a { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #394347; color: #fff; transition: 0.3s; }
//                 .social-area-wrapper-two li a:hover { background: #4F46E5; }
//                 .footer-one-single-wized .wized-title .title { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
//                 .quick-link-inner { display: flex; flex-wrap: wrap; gap: 15px; }
//                 .quick-link-inner .links { list-style: none; padding: 0; margin: 0; }
//                 .quick-link-inner .links li { margin-bottom: 10px; }
//                 .quick-link-inner .links li a { color: #c7ced0; font-size: 16px; transition: 0.3s; display: flex; align-items: center; text-decoration: none; }
//                 .quick-link-inner .links li a:hover { color: #fff; }
//                 .quick-link-inner .links li a i { margin-right: 10px; font-size: 12px; }
//                 .margin-left-70 { margin-left: 70px; }
//                 .signle-footer-contact-8 { display: flex; align-items: center; gap: 16px; margin: 8px 0; min-height: auto; }
//                 .signle-footer-contact-8 .icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #394347; color: #fff; flex-shrink: 0; }
//                 .signle-footer-contact-8 .inner-content .title { font-size: 15.5px; color: #fff; font-weight: 600; margin: 0 0 3px 0; }
//                 .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; line-height:1.2 }
                
//                 /* 2. Copyright area ka gap aur padding boht kam kar di */
//                 .copyright-area-main-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 15px 0; margin-top: 20px; }
//                 .copyright-8-wrapper { display: flex; justify-content: space-between; align-items: center; color: #c7ced0; font-size: 15px; }
//                 .copyright-8-wrapper ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
//                 .copyright-8-wrapper ul a { color: #c7ced0; text-decoration: none; transition: 0.3s; }
//                 .copyright-8-wrapper ul a:hover { color: #fff; }
                
//                 @media (max-width: 991px) { .margin-left-70 { margin-left: 0; } .quick-link-inner { justify-content: space-between; } }
//                 @media (max-width: 767px) { .quick-link-inner { flex-direction: column; } .copyright-8-wrapper { flex-direction: column; text-align: center; gap: 10px; } }
//             `}</style>

//             {/* Container bottom padding pb--65 se pb--30 kar di */}
//             <div className="container pb--30">
//                 <div className="row">
//                     <div className="col-lg-3 col-md-12">
//                         <div className="footer-logo-area-left-8">
//                             <Link href="/" className="logo">
//                                 <Image src={footerData.logoSrc} alt="logo" width={120} height={50} priority />
//                             </Link>
//                             <p className="disc">{footerData.description}</p>
//                             <ul className="social-area-wrapper-two">
//                                 {footerData.socialLinks.map((social, idx) => (
//                                     <li key={`social-${idx}`}>
//                                         <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
//                                             <i className={social.iconClass}></i>
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="offset-lg-1 col-lg-4 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">{footerData.quickLinks.title}</h5>
//                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
//                             </div>
//                             <div className="quick-link-inner">
//                                 {footerData.quickLinks.columns.map((col, colIdx) => (
//                                     <ul key={`col-${colIdx}`} className={`links ${colIdx === 1 ? 'margin-left-70' : ''}`}>
//                                         {col.map((link, linkIdx) => (
//                                             <li key={`link-${colIdx}-${linkIdx}`}>
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

//                     <div className="offset-lg-1 col-lg-3 col-md-6">
//                         <div className="footer-one-single-wized">
//                             <div className="wized-title">
//                                 <h5 className="title">{footerData.contactInfo.title}</h5>
//                                 <Image src={footerData.titleUnderlineSrc} alt="underline" width={80} height={10} />
//                             </div>
//                             <div className="contact-details">
//                                 {footerData.contactInfo.details.map((contact, idx) => (
//                                     <div className="signle-footer-contact-8" key={`contact-${idx}`}>
//                                         <div className="icon"><i className={contact.iconClass}></i></div>
//                                         <div className="inner-content">
//                                             <h5 className="title">{contact.title}</h5>
//                                             {contact.lines.map((line, lIdx) => (
//                                                 line.href ? (
//                                                     <a href={line.href} key={`line-${idx}-${lIdx}`}>{line.text}</a>
//                                                 ) : (
//                                                     <p key={`line-${idx}-${lIdx}`}>{line.text}</p>
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

//             <div className="copyright-area-main-wrapper">
//                 <div className="container">
//                     <div className="copyright-8-wrapper">
//                         <p>{footerData.copyrightText} © {year}. All rights reserved.</p>
//                         <ul>
//                             {footerData.policyLinks.map((policy, idx) => (
//                                 <li key={`policy-${idx}`}>
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

// --- TYPESCRIPT INTERFACES ---
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
    const [year, setYear] = useState<number | string>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer-8-area-bg">
            <style jsx>{`
                /* 1. Footer Top Padding aur Background */
                .footer-8-area-bg { background-color: #262c3f; color: #fff; padding-top: 30px; /* ✅ Background settings for Pic 2 alignment */
                    background-size: 113% auto !important; 
                    background-position: center  !important;
                    color: #fff; 
                    /* ✅ GAP INCREASED: Upar se content ko niche dhakela hai */
                    padding-top: 100px;}
                
                .footer-logo-area-left-8 .disc { font-size: 15px; color: #c7ced0; margin-top: 15px; line-height: 1.5; }
                .social-area-wrapper-two { list-style: none; padding: 0; display: flex; gap: 15px; margin-top: 20px; }
                .social-area-wrapper-two li a { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #394347; color: #fff; transition: 0.3s; }
                // .social-area-wrapper-two li a:hover { background: #00B9FE; }//#4F46E5 updated


                /* Purane hover code ko hata kar ye lagayein */

.social-area-wrapper-two li a { 
    width: 40px; 
    height: 40px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 50%; 
    background: #394347; /* Background hamesha yahi rahega */
    color: #fff; 
    transition: 0.3s; 
    text-decoration: none;
}

/* Hover karne par sirf ICON ka color change hoga */
.social-area-wrapper-two li a:hover i { 
    color: #00B9FE; /* Icon color blue ho jayega */
    transform: scale(1.1); /* Optional: Icon thoda bada dikhega */
}

/* Background ko change hone se rokne ke liye */
.social-area-wrapper-two li a:hover {
    background: #394347 !important; /* Circle ka color change nahi hoga */
}
                
                .footer-one-single-wized .wized-title .title { font-size: 24px; font-weight: 700; margin-bottom: 2px; }
                .quick-link-inner { display: flex; flex-wrap: wrap; gap: 15px; }
                .quick-link-inner .links { list-style: none; padding: 0; margin: 0; }
                .quick-link-inner .links li { margin-bottom: 8px; }
                .quick-link-inner .links li a { color: #c7ced0; font-size: 16px; transition: 0.3s; display: flex; align-items: center; text-decoration: none; }
                
                .margin-left-70 { margin-left: 70px; }
                
                /* 2. Contact Details Gap */
                .signle-footer-contact-8 { display: flex; align-items: center; gap: 16px; margin: 5px 0; min-height: auto; }
                .signle-footer-contact-8 .icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #394347; color: #fff; flex-shrink: 0; }
                .signle-footer-contact-8 .inner-content .title { font-size: 15.5px; color: #fff; font-weight: 600; margin: 0; }
                .signle-footer-contact-8 .inner-content a, .signle-footer-contact-8 .inner-content p { display: block; font-size: 14.5px; color: #c7ced0; text-decoration: none; margin: 0; line-height:1.2 }
                
                /* 3. COPYRIGHT GAP REDUCTION (Main Fix) */
                .copyright-area-main-wrapper { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 15px 0; margin-top: 15px; }
                .copyright-8-wrapper { display: flex; justify-content: space-between; align-items: center; color: #c7ced0; font-size: 15px; }
                .copyright-8-wrapper ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
                
                @media (max-width: 991px) { .margin-left-70 { margin-left: 0; } }
                @media (max-width: 767px) { .copyright-8-wrapper { flex-direction: column; gap: 10px; } }
            `}</style>

            {/* pb--65 ko hata kar margin/padding manual control ki hai */}
            <div className="container" style={{ paddingBottom: '20px' }}>
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <div className="footer-logo-area-left-8">
                            {/* <Link href="/" className="logo">
                                <Image src={footerData.logoSrc} alt="logo" width={120} height={50} priority />
                            </Link> */}
                            <Link href="/" style={{ width: '100%', display: 'block', maxWidth: '150px' }}>
            <Image 
                src={footerData.logoSrc} 
                alt="logo" 
                width={150}      // Aapke Header logic ke mutabiq
                height={60}      // Aapke Header logic ke mutabiq
                priority 
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain' // Logo stretch hone se bachega
                }} 
            />
        </Link>
                            <p className="disc">{footerData.description}</p>
                            <ul className="social-area-wrapper-two">
                                {footerData.socialLinks.map((social, idx) => (
                                    <li key={`social-${idx}`}>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer">
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