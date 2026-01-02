
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import headerData from '../Data/HeaderData.json';
import Sidebar from './Sidebar';

// ----------------------
// TYPES (kept for clarity)
type MenuItem = { title: string; href: string };
type MegaMenuColumn = MenuItem[];
type TopBarSocial = { href: string; ariaLabel?: string; className?: string; iconClass?: string };
type TopBar = { ctaMessage: string; ctaLink: string; ctaLinkText: string; email: string; socialLinks: TopBarSocial[] };
type Logo = { homeLink: string; src: string; alt: string; width: number; height: number };
type MobileIcon = { src: string; alt: string; width: number; height: number };
type NavLinkItem = { type: 'link'; title: string; href: string; strong?: boolean };
type NavMegaMultiColumnItem = { type: 'mega-menu-multi-column'; title: string; href: string; columns: MegaMenuColumn[] };
type NavMegaSingleColumnItem = { type: 'mega-menu-single-column'; title: string; href: string; dropdownItems: MenuItem[]; dropdownStyle?: React.CSSProperties };
type MainNavItem = NavLinkItem | NavMegaMultiColumnItem | NavMegaSingleColumnItem;
type HeaderData = { topBar: TopBar; logo: Logo; mobileMenuIcon: MobileIcon; mainNav: MainNavItem[] };

const hd = headerData as unknown as HeaderData;

// ----------------------
// Dropdown item (unchanged)
const DropdownItem = ({ item }: { item: MenuItem }) => (
    <li>
        <Link href={item.href}>
            <i className="fa-sharp fa-regular fa-chevron-right" /> {item.title}
        </Link>
    </li>
);

// ----------------------
// Mega menus (unchanged)
const MultiColumnMenu = ({ columns }: { columns: MegaMenuColumn[] }) => (
    <div className="rts-mega-menu" style={{ top: '101%' }}>
        <div className="wrapper">
            <div className="container">
                <div className="row g-0">
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className="col-lg-3">
                            <ul className="mega-menu-item with-list parent-nav">
                                {column.map((item, idx) => <DropdownItem key={idx} item={item} />)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const SingleColumnMenu = ({ items, dropdownStyle }: { items: MenuItem[]; dropdownStyle?: React.CSSProperties }) => (
    <div className="rts-mega-menu" style={{ ...dropdownStyle, top: '101%' }}>
        <div className="wrapper">
            <div style={{ maxWidth: '300px' }}>
                <div className="row g-0">
                    <div className="col-lg-12">
                        <ul className="mega-menu-item with-list parent-nav">
                            {items.map((item, idx) => <DropdownItem key={idx} item={item} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// ----------------------
// HEADER COMPONENT
export default function Header() {
    const { topBar, logo, mobileMenuIcon, mainNav } = hd;
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSidebar = () => {
        setMobileOpen(!mobileOpen);
    };

    const renderNavItem = (item: MainNavItem, index: number) => {
        // Ensure all top-level items are rendered as <li> elements for proper list context
        if (item.type === 'link') {
            return (
                <li key={index} className="main-nav project-a-after">
                    <Link href={item.href}>{item.strong ? <strong>{item.title}</strong> : item.title}</Link>
                </li>
            );
        }

        // Mega Menu link
        return (
            <li key={index} className="main-nav has-dropdown mega-menu">
                <Link href={item.href}>{item.title}</Link>
                {item.type === 'mega-menu-multi-column' && item.columns && <MultiColumnMenu columns={item.columns} />}
                {item.type === 'mega-menu-single-column' && item.dropdownItems && (
                    <SingleColumnMenu items={item.dropdownItems} dropdownStyle={item.dropdownStyle || {}} />
                )}
            </li>
        );
    };

    return (
        <>
            <header className="header-one header--sticky">
                {/* TOP BAR (unchanged) */}
                <div className="header-top-area-wrapper header-top-cta-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-top-one-wrapper nav-cta-layout">
                                    <div className="left top-cta-message">
                                        {/* <p>
                                            {topBar.ctaMessage}
                                            <Link className="contact-link" href={topBar.ctaLink}>
                                                {topBar.ctaLinkText} <i className="fal fa-arrow-right" />
                                            </Link>
                                        </p> */}
                                        <p>
                                            {/* .trim() laga kar check karein agar space missing hai to space manually add karein */}
                                            {topBar.ctaMessage.endsWith('?') ? `${topBar.ctaMessage} ` : topBar.ctaMessage}
                                            <Link className="contact-link" href={topBar.ctaLink}>
                                                {topBar.ctaLinkText} <i className="fal fa-arrow-right" />
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="right top-cta-contact">
                                        <a className="email-link" href={`mailto:${topBar.email}`}>
                                            <i className="fal fa-envelope" /> {topBar.email}
                                        </a>
                                        <span className="divider" />
                                        {/* <ul className="social-wrapper-one">
                                            {topBar.socialLinks.map((social, idx) => (
                                                <li key={idx}>
                                                    <a href={social.href} aria-label={social.ariaLabel} className={social.className}>
                                                        <i className={social.iconClass} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul> */}
                                        {/* <ul className="social-wrapper-one">
                                            {topBar.socialLinks.map((social, idx) => (
                                                <li key={idx}>
                                                   
                                                    <a
                                                        href={social.href}
                                                        aria-label={social.ariaLabel}
                                                        className={social.className}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className={social.iconClass} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul> */}

                                        <>
                                            {/* 1. The Style Block (Place this above the map) */}
                                            <style>
                                                {`
      .social-wrapper-one li a i {
        transition: color 0.3s ease;
        color: #ffffff; 
      }

      .social-wrapper-one li a:hover i {
        color: var(--hover-color) !important;
      }
    `}
                                            </style>

                                            {/* 2. The Loop */}
                                            <ul className="social-wrapper-one">
                                                {topBar.socialLinks.map((social: any, idx: number) => (
                                                    <li key={idx}>
                                                        <a
                                                            href={social.href}
                                                            aria-label={social.ariaLabel}
                                                            className={social.className}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                "--hover-color": social.hoverColor || "#00B9FE"
                                                            } as React.CSSProperties}
                                                        >
                                                            <i className={social.iconClass} />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                        {/* <ul className="social-wrapper-one">
                                            {topBar.socialLinks.map((social, idx) => {
                                                // State ke bajaye hum CSS variable ya class use kar sakte hain
                                                // Lekin inline handle karne ke liye simple logic ye hai:
                                                return (
                                                    <li key={idx}>
                                                        <a
                                                            href={social.href}
                                                            aria-label={social.ariaLabel}
                                                            className={social.className}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.color = '#00B9FE';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.color = ''; // Wapis original color par le ayega
                                                            }}
                                                            style={{
                                                                transition: 'color 0.3s ease', // Smooth effect ke liye
                                                            }}
                                                        >
                                                            <i className={social.iconClass} />
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN HEADER */}
                <div className="header-main" style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-main-one-wrapper">
                                    {/* Logo */}
                                    {/* <div className="thumbnail">
                                        <Link href={logo.homeLink}>
                                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                                        </Link>
                                    </div> */}
                                    {/* Logo Area */}
                                    <div className="thumbnail" style={{
                                        width: '100%',
                                        maxWidth: '150px', // Original size ke liye isse apni marzi mutabiq 150px-200px ke darmiyan rakhein
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Link href={logo.homeLink} style={{ width: '100%' }}>
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={150}   // Original design ki width
                                                height={60}   // Original design ki height
                                                priority      // Clarity aur fast loading ke liye
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'contain' // Logo ko stretch hone se bachata hai
                                                }}
                                            />
                                        </Link>
                                    </div>

                                    <div className="main-header">
                                        {/* Desktop Menu */}
                                        {/* <div className="nav-area d-none d-lg-block">
                                            <ul className="d-flex align-items-center">
                                                {mainNav.map((item, i) => renderNavItem(item, i))}
                                            </ul>
                                        </div> */}
{/* Desktop Menu   Gap Created  Between Sections*/}
<div className="nav-area d-none d-lg-block">
    {/* I added style={{ gap: '30px' }} below */}
    <ul className="d-flex align-items-center" style={{ gap: '50px' }}>
        {mainNav.map((item, i) => renderNavItem(item, i))}
    </ul>
</div>

                                        {/* Mobile Menu Button */}
                                        <div className="button-area d-lg-none">

                                            <button
                                                onClick={toggleSidebar}
                                                className="menu menu-btn ml--20 ml_sm--5"
                                                aria-label="Open menu"
                                                // ⭐⭐ یہاں نئی INLINE STYLING شامل کی گئی ہے ⭐⭐
                                                style={{
                                                    // پس منظر کا رنگ: ہلکا گرے/آف وائٹ
                                                    backgroundColor: '#f8f8f8', // یہ رنگ آپ کی مطلوبہ تصویر سے ملتا جلتا ہے
                                                    // گول کنارے
                                                    borderRadius: '10px',
                                                    // پیڈنگ: بٹن کے اندرونی مواد اور کناروں کے درمیان فاصلہ
                                                    padding: '10px 15px',
                                                    // بٹن کو دوسرے ایلیمنٹس سے الگ رکھنے کے لیے مارجن
                                                    marginLeft: '20px',
                                                    // اگر آپ چاہتے ہیں کہ یہ باکسڈ نظر آئے
                                                    border: '1px solid #e0e0e0', // ہلکا گرے بارڈر
                                                    cursor: 'pointer',
                                                    // یہ یقینی بنائے گا کہ سٹائل لاگو ہو
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    height: '45px', // ہائٹ سیٹ کریں
                                                    width: '60px',  // چوڑائی سیٹ کریں
                                                }}
                                            >
                                                <Image
                                                    className="menu-light"
                                                    src={mobileMenuIcon.src}
                                                    alt={mobileMenuIcon.alt}
                                                    width={mobileMenuIcon.width}
                                                    height={mobileMenuIcon.height}
                                                    // آئیکن کا رنگ گہرا نیلا/سیاہ ہے جیسا تصویر میں ہے
                                                    style={{ filter: 'brightness(0.3)' }}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* RENDER THE SIDEBAR COMPONENT */}
            <Sidebar isOpen={mobileOpen} onClose={toggleSidebar} mainNav={mainNav as any[]} />

            {/* Overlay for background dimming */}
            {mobileOpen && (
                <div
                    className="rts-sidebar-overlay"
                    onClick={toggleSidebar}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        zIndex: 998,
                    }}
                />
            )}
        </>
    );
}