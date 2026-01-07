

'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <div className="rts-hero-section-wrapper">
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left">
                                {/* Watermark Background */}
                                <span className="bg-title watermark-about">About Us</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container about-heading-wrapper">
                    <div className="about-heading-container">
                        <p className="about-sub-label">About GBA</p>
                        <h1 className="about-main-title">
                            Gujranwala <br /> Business Alliance
                        </h1>
                    </div>
                </div>

                <div className="shape-area">
                    <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
                    <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
                    <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
                </div>
            </div>

            <style jsx global>{`
                /* Wrapper taake Navbar se distance rahe */
                .rts-hero-section-wrapper {
                    padding-top: 100px; /* Navbar ki height ke mutabiq adjust karein */
                    position: relative;
                    overflow: hidden;
                    background: #fff;
                }

                .rts-breadcrumb-area {
                    position: relative;
                    padding-bottom: 60px;
                }

                .watermark-about {
                    font-size: 150px;
                    font-weight: 900;
                    color: transparent;
                    -webkit-text-stroke: 1px #e0e0e0;
                    opacity: 0.4;
                    position: absolute;
                    top: 0px; /* Isay adjust kiya taake text ke piche rahe */
                    left: 0;
                    z-index: 0;
                    white-space: nowrap;
                }

                .about-heading-wrapper {
                    position: relative;
                    z-index: 2;
                    margin-top: 40px; /* Negative margin khatam kar di */
                }

                .about-sub-label {
                    margin-bottom: 10px !important;
                    display: block;
                    color: #666;
                    font-size: 16px;
                    font-weight: 500;
                }

                .about-main-title {
                    font-size: 56px;
                    line-height: 1.1;
                    font-weight: 800;
                    color: #1c2539; /* Dark color for clarity */
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .rts-hero-section-wrapper { padding-top: 60px; }
                    .watermark-about { font-size: 70px; top: 10px; }
                    .about-main-title { font-size: 32px; }
                    .about-heading-wrapper { margin-top: 20px; }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;