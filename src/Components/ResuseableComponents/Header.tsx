'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import headerData from '../Data/HeaderData.json';

// ----------------------
// TYPES (unchanged)
type MenuItem = { title: string; href: string };
type MegaMenuColumn = MenuItem[];
type MegaMenuMultiColumn = { columns: MegaMenuColumn[] };
type MegaMenuSingleColumn = { dropdownItems: MenuItem[]; dropdownStyle?: React.CSSProperties };
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
// Dropdown item
const DropdownItem = ({ item }: { item: MenuItem }) => (
  <li>
    <Link href={item.href}>
      <i className="fa-sharp fa-regular fa-chevron-right" /> {item.title}
    </Link>
  </li>
);

// ----------------------
// Mega menus
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
// HEADER COMPONENT (mobile toggle added)
export default function Header() {
  const { topBar, logo, mobileMenuIcon, mainNav } = hd;
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavItem = (item: MainNavItem, index: number) => {
    if (item.type === 'link') {
      return (
        <div key={index} className="main-nav project-a-after">
          <Link href={item.href}>{item.strong ? <strong>{item.title}</strong> : item.title}</Link>
        </div>
      );
    }

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
    <header className="header-one header--sticky">
      {/* TOP BAR */}
      <div className="header-top-area-wrapper header-top-cta-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-top-one-wrapper nav-cta-layout">
                <div className="left top-cta-message">
                  <p>
                    {topBar.ctaMessage}
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
                  <ul className="social-wrapper-one">
                    {topBar.socialLinks.map((social, idx) => (
                      <li key={idx}>
                        <a href={social.href} aria-label={social.ariaLabel} className={social.className}>
                          <i className={social.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
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
                <div className="thumbnail">
                  <Link href={logo.homeLink}>
                    <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                  </Link>
                </div>

                <div className="main-header">
                  {/* Desktop Menu */}
                  <div className="nav-area d-none d-lg-block">
                    <ul>{mainNav.map((item, i) => renderNavItem(item, i))}</ul>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="button-area d-lg-none">
                    <button
                      onClick={() => setMobileOpen(!mobileOpen)}
                      className="menu menu-btn ml--20 ml_sm--5"
                      aria-label="Open menu"
                    >
                      <Image
                        src={mobileMenuIcon.src}
                        alt={mobileMenuIcon.alt}
                        width={mobileMenuIcon.width}
                        height={mobileMenuIcon.height}
                      />
                    </button>
                  </div>

                  {/* Mobile Menu Drawer */}
                  {mobileOpen && (
                    <div
                      className="mobile-nav"
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '75%',
                        height: '100%',
                        backgroundColor: '#fff',
                        zIndex: 999,
                        padding: '1rem',
                        overflowY: 'auto',
                      }}
                    >
                      <button onClick={() => setMobileOpen(false)} style={{ marginBottom: '1rem' }}>
                        Close ✕
                      </button>
                      <ul>{mainNav.map((item, i) => renderNavItem(item, i))}</ul>
                    </div>
                  )}

                  {/* Overlay */}
                  {mobileOpen && (
                    <div
                      onClick={() => setMobileOpen(false)}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
