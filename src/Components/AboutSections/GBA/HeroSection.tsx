

'use client';

import React from 'react';
import Image from 'next/image';

const AboutHeroSection: React.FC = () => {
    return (
        <>
            {/* --- HERO / BREADCRUMB SECTION --- */}
            <div className="rts-breadcrumb-area top-300">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left" style={{ textAlign: 'left' }}>
                                <span className="bg-title watermark-about">About Us</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-area">
                    <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
                    <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
                    <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
                </div>
            </div>

            {/* --- HEADING --- */}
            <div className="container about-main-overlap">
                <div className="about-heading-container">
                    <p className="about-sub-label">About GBA</p>
                    <h1 className="about-main-title" style={{ fontSize: '48px' }}>
                        Gujranwala <br /> Business Alliance
                    </h1>
                </div>
            </div>
        </>
    );
};

export default AboutHeroSection;
