

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // رُوٹنگ کے لیے Pathname استعمال کیا گیا۔

// ... (Type declarations remain unchanged) ...
type MenuItem = { title: string; href: string };
type NavLinkItem = { type: 'link'; title: string; href: string; strong?: boolean };
type NavMegaSingleColumnItem = { type: 'mega-menu-single-column'; title: string; href: string; dropdownItems: MenuItem[]; dropdownStyle?: React.CSSProperties };
type NavMegaMultiColumnItem = { type: 'mega-menu-multi-column'; title: string; href: string; columns: MenuItem[][] };
type MainNavItem = NavLinkItem | NavMegaSingleColumnItem | NavMegaMultiColumnItem;

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    mainNav: MainNavItem[]; 
}



const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, mainNav }) => {
    const sidebarClasses = `side-bar header-two ${isOpen ? 'show' : ''}`;
    const pathname = usePathname(); // موجودہ پاتھ معلوم کرنے کے لیے
    
    // ہم صرف ایک ڈراپ ڈاؤن کو کنٹرول کرنے کے بجائے ہر ڈراپ ڈاؤن کے لیے ایک سٹیٹ رکھیں گے
    // تاکہ MetisMenu جیسی فنکشنلٹی کی نقل کی جا سکے۔
    const [openStates, setOpenStates] = useState<boolean[]>(mainNav.map(() => false));

    const handleToggle = (index: number) => {
        // نئے اوپن سٹیٹس کو کیلکولیٹ کریں
        const newOpenStates = [...openStates];
        // صرف موجودہ آئٹم کو ٹوگل کریں
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    const getDropdownItems = (item: MainNavItem): MenuItem[] => {
        if (item.type === 'mega-menu-single-column') {
            return item.dropdownItems;
        }
        if (item.type === 'mega-menu-multi-column') {
            return item.columns.flat();
        }
        return [];
    };

    // **********************************************
    // *** ⭐ INLINE STYLES (Cleaned up for MetisMenu style) ⭐ ***
    // **********************************************

    const submenuStyle = (isOpen: boolean): React.CSSProperties => ({
        // height: isOpen ? 'auto' : '0', // 'auto' CSS transition کے ساتھ اچھا کام نہیں کرتا، لیکن MetisMenu لائبریریاں اسے JS سے ہینڈل کرتی ہیں۔
        overflow: 'hidden',
        padding: '0', 
        margin: '0',
        display: isOpen ? 'block' : 'none', // tạm solution: block/none
    });

    // Submenu Link Style
    const submenuItemLinkStyle: React.CSSProperties = {
        padding: '10px 40px 10px 25px', // MetisMenu سٹائل
        display: 'block', 
        textDecoration: 'none',
        color: '#666',
        backgroundColor: '#f8f8f8', // ہلکا گرے پس منظر
        fontSize: '1em',
        borderBottom: 'none', // سب مینیو کے آئٹمز کے درمیان لائن نہ ہو
    };


    return (
        <div id="side-bar" className={sidebarClasses}>
            
            {/* Close Button */}
            <button className="close-icon-menu" title="Close menu" onClick={onClose}>
                <i className="far fa-times"></i>
            </button>

            {/* inner menu area desktop start */}
            <div className="rts-sidebar-menu-desktop">
                {/* Logo in Sidebar */}
                <a className="logo-1" href="/">
                    <div style={{ textAlign: 'center', padding: '10px 0 40px 0' }}>
                        <img className="logo" src="/images/logo/01.svg" alt="finbiz_logo" style={{ maxWidth: '180px' }} />
                    </div>
                </a>

                {/* --- Primary Mobile Navigation Structure (Using HTML Classes) --- */}
                {/* MetisMenu کی نقل کرنے کے لیے کلاسز استعمال کی جا رہی ہیں۔ */}
                <div className="mobile-menu d-block d-xl-none">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu metismenu" id="mobile-menu-active"> 
                            {mainNav.map((item, index) => {
                                const dropdownItems = getDropdownItems(item);
                                const hasDropdown = dropdownItems.length > 0;
                                const isCurrentlyOpen = openStates[index];
                                const isActive = pathname === item.href;

                                return (
                                    <li 
                                        key={index} 
                                        // HTML میں has-droupdown کلاس استعمال ہوتی ہے
                                        className={`${hasDropdown ? 'has-droupdown' : ''} ${isCurrentlyOpen ? 'active' : ''}`}
                                        style={{ listStyle: 'none', borderBottom: '1px solid #eee' }} // صرف لائنیں شامل کریں
                                    >
                                        
                                        {/* HTML میں drop-down کے لیے یہ structure تھا: <a href="#" class="main">About</a> */}
                                        {hasDropdown ? (
                                            <a 
                                                href="#" 
                                                className={`main ${isActive ? 'active' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault(); // لنک کو فالو کرنے سے روکیں
                                                    handleToggle(index);
                                                }}
                                                aria-expanded={isCurrentlyOpen}
                                                // MetisMenu style emulation - no heavy inline style,
                                                style={{ display: 'block', padding: '18px 25px', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link 
                                                href={item.href} 
                                                onClick={onClose}
                                                className={`main ${isActive ? 'active' : ''}`}
                                                // MetisMenu style emulation - no heavy inline style
                                                style={{ display: 'block', padding: '18px 25px', textDecoration: 'none', color: 'inherit' }}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                        
                                        {/* Render Submenu */}
                                        {hasDropdown && (
                                            <ul 
                                                className={`submenu ${isCurrentlyOpen ? 'mm-collapse mm-show' : 'mm-collapse'}`} 
                                                style={submenuStyle(isCurrentlyOpen)} // JSX میں ڈراپ ڈاؤن کو ہینڈل کرنے کا عارضی طریقہ
                                            >
                                                {dropdownItems.map((subItem, subIndex) => {
                                                    const isSubActive = pathname === subItem.href;
                                                    return (
                                                        <li key={subIndex} style={{ listStyle: 'none' }}>
                                                            <Link 
                                                                href={subItem.href} 
                                                                onClick={onClose}
                                                                className={isSubActive ? 'active' : ''}
                                                                style={submenuItemLinkStyle}
                                                            >
                                                                {/* اگر آپ کے HTML میں یہ آئیکن ہے، تو یہاں شامل کریں */}
                                                                <i className="fa-sharp fa-regular fa-chevron-right" style={{ marginRight: '10px', fontSize: '0.8em' }}></i>
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>


                {/* --- Contact and Social Content (Desktop/Large Screen structure from HTML) --- */}
                <div className="body d-none d-xl-block">
                    <p className="disc">
                        We must explain to you how all seds this mistakens idea denouncing pleasures and praising account.
                        All seds this mistakens idea denouncing pleasures.
                    </p>
                    <div className="get-in-touch">
                        {/* title */}
                        <div className="h6 title">Get In Touch</div>
                        {/* title End */}
                        <div className="wrapper">
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-phone-alt"></i>
                                <a href="tel:+8801234566789">+8801234566789</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-globe"></i>
                                <a href="http://www.webexample.com">www.webexample.com</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>13/A, New Pro State, NYC</span>
                            </div>
                            {/* single ENd */}
                        </div>

                        
                        <div className="social-wrapper-two menu">
                            <a href="https://www.facebook.com/gbaofficial" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/gba.connect/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/gbaofficial/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* --- Social Icons (Mobile-only structure from HTML) --- */}
                {/* یہ آپ کے دوسرے HTML کوڈ سے ہے جو mobile-menu کے اندر تھا۔ */}
                <div className="social-wrapper-one d-block d-xl-none" style={{ padding: '20px 25px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
                        <li>
                            <a href="https://www.facebook.com/gbaofficial" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gba.connect/" aria-label="instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/gbaofficial/" aria-label="linkedin">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;