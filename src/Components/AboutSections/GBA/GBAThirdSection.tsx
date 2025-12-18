 
 'use client'
 import React from 'react';
// If you were using CSS Modules for styling *only* this component, you'd import it here:
// import styles from './JoinGBASection.module.css'; 

const JoinGBASection: React.FC = () => {
    return (
        <div className="rts-client-review-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between-wrapper">
                            {/* Converted style: class -> className, inline styles remain */}
                            <div className="title-style-two mb--40 left">
                                <span className="bg-content">Why</span>
                                <span className="pre" style={{ fontSize: '16px' }}>Choose</span>
                                {/* Inline style converted to a JSX object: '48px' -> '48px' */}
                                <h2 className="title" style={{ fontSize: '48px' }}>
                                    Why Join GBA?
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* The <style> block has been removed and its content moved to 
                  the global CSS file (src/app/globals.css) to ensure the 
                  media queries work correctly with the global classes.
                */}

                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-wrapper-swiper-demo-2">
                            <div className="swiper mySwiper-testimonials-dmeo-2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonials-main-wrapper-two">
                                            <div className="left-thumbnail">
                                                {/* CRITICAL CHANGE: Image path updated for Next.js 
                                                  to use the 'public' folder. 
                                                  'assets\images\GBA\Join GBA.jpg' becomes '/images/GBA/Join GBA.jpg' 
                                                  (assuming you moved the assets folder content into public). 
                                                  Next.js recommends using the <Image> component for optimization, 
                                                  but a standard <img> tag is used here to match your original HTML structure 
                                                  and avoid extra setup.
                                                */}
                                                <img 
                                                    src="/images/GBA/Join GBA.jpg" // Check this path!
                                                    alt="testimonials" 
                                                />
                                            </div>
                                            <div className="right-content-testimonials">
                                                {/* Inline style converted to a JSX object */}
                                                <p className="disc" style={{ fontSize: '20px' }}>
                                                    Joining GBA gives businesses direct access to international markets, B2B networks, and growth platforms. With trade missions,
                                                    business forums, expert guidance, and strategic support, members strengthen their competitiveness and unlock new opportunities for global expansion
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Add other swiper-slide elements here if they exist */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinGBASection;

