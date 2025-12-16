


import React from 'react';

// Define the paths for the individual logo images
const brandLogos = [
  '/images/brand/01.webp',
  '/images/brand/02.webp',
  '/images/brand/03.webp',
  '/images/brand/04.webp',
  '/images/brand/05.webp',
  '/images/brand/06.webp',
];

interface ClientAreaProps {}

const ClientArea: React.FC<ClientAreaProps> = () => {
  // Image path relative to the 'public' directory for the background
  const backgroundImagePath = '/images/brand/bg.webp';

  return (
    <div
      className="rts-client-area ptb--100 brand-bg-three bg_image"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-three-wrapper">
              {/* Map over the logo paths to render each logo */}
              {brandLogos.map((src, index) => (
                <div key={index} className="single">
                  <img 
                    src={src} 
                    alt={`Business_client ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* NOTE: The inline <style> block has been removed from the component.
        In a Next.js project, you should move this CSS into your global 
        stylesheet (e.g., globals.css) or a CSS Module. 
      */}
    </div>
  );
};

export default ClientArea;