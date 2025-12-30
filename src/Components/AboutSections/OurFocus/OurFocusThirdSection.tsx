
'use client';

import React from 'react';

/* ------------------------------
   STYLES (content unchanged)
------------------------------ */

const containerStyle: React.CSSProperties = {
  marginTop: '0px',
  paddingTop: 0,
};

const rowMarginTopDefault: React.CSSProperties = { marginTop: '90px' };
const rowMarginTopFirst: React.CSSProperties = { marginTop: '50px' };

const titleStyle: React.CSSProperties = {
  fontSize: '48px', // ✅ heading 48
  marginBottom: '10px',
  lineHeight: 1.15,
};

const subtitleStyle: React.CSSProperties = {
  fontWeight: 900,
  color: 'black',
  fontSize: '14px',
  marginBottom: '18px',
};

const subtitleStyleLarge: React.CSSProperties = {
  fontWeight: 900,
  color: 'black',
  fontSize: '16px',
  marginBottom: '18px',
};

const discStyle: React.CSSProperties = {
  fontSize: '16px', // ✅ text 16
  lineHeight: 1.8,
  margin: 0,
};

const thumbnailImageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '14px',
  display: 'block',
  objectFit: 'cover',
  // NOTE: desktop height will be controlled via CSS (fixed height),
  // mobile will use aspect-ratio via CSS
};

/* ------------------------------
   COMPONENT
------------------------------ */

interface FocusAreaProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sectionNumber: number;
  textLeft?: boolean; // true => text left, image right (desktop)
}

const FocusArea: React.FC<FocusAreaProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  sectionNumber,
  textLeft = true,
}) => {
  const rowMarginStyle = sectionNumber === 2 ? rowMarginTopFirst : rowMarginTopDefault;
  const currentSubtitleStyle = sectionNumber === 5 ? subtitleStyleLarge : subtitleStyle;

  return (
    <div className="rts-about-area rts-section-gap focus2-wrap">
      <div className="container pt--40 focus2-container" style={containerStyle}>
        {/* ✅ IMPORTANT: focus2-row so we can stretch columns on desktop */}
        <div className="row g-5 focus2-row" style={rowMarginStyle}>
          {/* TEXT */}
          <div className={`col-lg-7 col-md-12 ${textLeft ? 'order-lg-1 order-2' : 'order-lg-2 order-2'}`}>
            {/* ✅ This wrapper will be forced to same height as image on desktop */}
            <div className="about-content-right-three focus2-textFill">
              <div className="title-style-three left">
                <h2 style={titleStyle}>{title}</h2>
                <p style={currentSubtitleStyle}>
                  <strong>{subtitle}</strong>
                </p>
              </div>

              <p className="disc" style={discStyle}>
                {description}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className={`col-lg-5 col-md-12 text-center ${textLeft ? 'order-lg-2 order-1' : 'order-lg-1 order-1'}`}>
            <div className="main-thumnal-inner-about-three focus2-imgWrap">
              <div className="thumbnail focus2-thumb">
                <img src={imageSrc} alt={imageAlt} style={thumbnailImageStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ GLOBAL CSS (works for all sections) */}
      <style jsx global>{`
        /* remove unwanted section gaps */
       /* ===============================
   CONSISTENT SECTION SPACING
   =============================== */
/* ===============================
   CONSISTENT SECTION SPACING
   =============================== */

/* Desktop spacing */
.focus2-wrap {
  padding-top: 80px !important;
  padding-bottom: 80px !important; /* ✅ Bottom gap add kiya taake next section touch na ho */
  border-bottom: 1px solid #eee;   /* (Optional) Halki line divider ke liye */
}

/* First focus block */
.focus2-wrap:first-of-type {
  padding-top: 50px !important;
}

/* Last focus block se bottom border hata dein agar zaroorat ho */
.focus2-wrap:last-of-type {
  border-bottom: none;
  padding-bottom: 100px !important; /* Sabse last section ke niche extra space */
}

/* Mobile spacing */
@media (max-width: 768px) {
  .focus2-wrap {
    padding-top: 50px !important;
    padding-bottom: 50px !important; /* Mobile par bhi gap ensure kiya */
  }
}
/* Desktop spacing between all focus sections */
.focus2-wrap {
  padding-top: 80px !important;
  
}

/* First focus block thoda kam gap se start ho */
.focus2-wrap:first-of-type {
  padding-top: 50px !important;
}

/* Mobile spacing */
@media (max-width: 768px) {
  .focus2-wrap {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }
}


        /* ===============================
           DESKTOP: heading starts with image + ends with image
           =============================== */
        @media (min-width: 992px) {
          /* make both columns same height */
          .focus2-row {
            align-items: stretch !important;
          }

          /* fixed consistent image height (prototype-like) */
          .focus2-thumb img {
            height: 420px !important; /* ✅ set ONE consistent height */
            width: 100%;
            object-fit: cover;
            border-radius: 14px;
            display: block;
          }

          /* text column SAME height as image */
          .focus2-textFill {
            height: 420px; /* ✅ must match image height */
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* ✅ heading top, para reaches bottom */
          }
        }

        /* ===============================
           MOBILE: image top, text bottom
           =============================== */
        @media (max-width: 768px) {
          .focus2-imgWrap {
            margin-bottom: 18px;
          }

          .focus2-thumb img {
            height: auto !important;
            aspect-ratio: 16 / 10;
            width: 100% !important;
            object-fit: cover;
            border-radius: 14px;
          }

          .focus2-textFill {
            height: auto !important;
            display: block !important;
          }

          .about-content-right-three {
            padding: 0 12px;
            text-align: left;
          }

          .about-content-right-three h2 {
            font-size: 30px !important;
            line-height: 1.25;
          }

          .disc {
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

/* ------------------------------
   MAIN COMPONENT (ALL SECTIONS)
------------------------------ */

const GBAFocusAreas: React.FC = () => {
  return (
    <>
      

      {/* 6. Strengthening Industry - Academia Linkages (Text Left, Image Right) */}
      <FocusArea
        sectionNumber={6}
        title="Strengthening Industry - Academia Linkages"
        subtitle="Bridging Knowledge, Innovation, and Industry Needs"
        description={`Collaboration between academia and industry is a cornerstone of innovation and sustainable
                    economic growth. In leading economies, such partnerships have played a vital role in developing
                    critical skills, advancing research, and fostering entrepreneurship. Recognising its importance,
                    GBA is committed to building a strong bridge between Gujranwala’s industrial sector and academic
                    institutions. The Alliance works to align academic research, training, and curricula with the
                    evolving needs of industry, ensuring that graduates are equipped with practical knowledge and
                    relevant technical expertise. Through joint research projects, internships, innovation programs,
                    and entrepreneurship development initiatives, GBA promotes the commercialisation of ideas and the
                    creation of market-driven solutions. By fostering continuous collaboration between universities,
                    research centres, and industrial enterprises, GBA aims to cultivate a knowledge-based economy
                    where innovation, skill development, and applied research drive industrial advancement and
                    regional competitiveness.`}
        imageSrc="/images/Focus2/Strengthening Industry.png"
        imageAlt="Strengthening Industry"
        textLeft={true}
      />
    </>
  );
};

export default GBAFocusAreas;
