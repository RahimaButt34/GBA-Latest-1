// 'use client'
// import React from 'react';

// // --- 1. DATA ARRAY ---
// export interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   delay: string;
// }

// const teamMembers: TeamMember[] = [
//   // First Row (3 members)
//   { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
//   { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
//   { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
  
//   // Second Row (3 members)
//   { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.2" },
//   { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.4" },
//   { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.6" },
  
//   // Third Row (3 members)
//   { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.2" },
//   { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.4" },
//   { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.6" },
  
//   // Fourth Row (3 members)
//   { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.2" },
//   { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.4" },
//   { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.6" },
  
//   // Fifth Row (3 members)
//   { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
//   { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
//   { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
  
//   // Sixth Row (1 member, centered)
//   { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.4" },
// ];

// // Helper to group team members into rows of 3
// const chunkArray = (array: TeamMember[], chunkSize: number) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// };

// const teamRows = chunkArray(teamMembers, 3);


// // --- 2. PRESENTATION (TSX) ---

// const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
//   // Image path adjustment: Assuming all images are in the `public/` directory
//   const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
//   return (
//     <div 
//       className="col-lg-4 col-md-6 col-sm-12 col-12 team-card-column-mobile-adjust" // Added class for mobile adjust
//       data-animation="fadeInUp" 
//       data-delay={delay} 
//       data-duration="1.2"
//     >
//       <div className="single-team-area-one-start">
//         <a href="#" className="thumbnail">
//           {/* Using a standard <img> tag for compatibility with your provided relative paths */}
//           <img src={imgSrc} alt={name} />
//         </a>
//         <div className="inner-content">
//           <div className="text-top">
//             <a href="#">
//               <h5 className="title">{name}</h5>
//             </a>
//             <span>{role}</span>
//           </div>
//           <div className="social-one-wrapper">
//             <ul>
//               <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
//               <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
//               <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const renderTeamRow = (row: TeamMember[], index: number) => {
//   let className = "row g-5 g-sm-30";
//   let style: React.CSSProperties = {};

//   if (index === 0) {
//     className += " mt--30 row-initial-spacing";
//   } else if (index === 1) {
//     className += " mobile-mt";
//   } else if (index >= 2) {
//     className += " mt--120";
//   } 
  
//   // Centering styles for the final rows
//   if (index >= 4) {
//     style.display = 'flex';
//     style.justifyContent = 'center';
//   }
  
//   // Target the very last row (index 5) with the stronger center style
//   if (index === 5) {
//       style.justifyContent = 'center'; // Rely on the CSS class for !important
//       className += " row-last-centered-mobile";
//   }

//   return (
//     <div key={index} className={className} style={style}>
//       {row.map((member, i) => (
//         <TeamMemberCard key={i} {...member} />
//       ))}
//     </div>
//   );
// };


// const OurTeamSection: React.FC = () => {
  
//   // Separate rows based on the chunked data
//   const firstRow = teamRows[0];
//   const subsequentRows = teamRows.slice(1);

//   return (
//     <>
//       {/* This is the method to include the specific, complex mobile media queries 
//         directly into the component output, treating it as a "single file." 
//       */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             /* Helper Classes for Next.js Component */
//             .mobile-mt {
//                 margin-top: 50px !important;
//             }
//             .team-card-column-mobile-adjust { /* Used to target the specific column for uplift */
//                 /* Base style here if needed */
//             }
//             .single-team-area-one-start {
//                 /* Base style here if needed */
//             }

//             /* ========================================= */
//             /* --- MOBILE RESPONSIVENESS (Max Width 768px) --- */
//             /* ========================================= */
//             @media (max-width: 768px) {
                
//                 /* 1. Overall Section Spacing */
//                 .inner-page-team-area .container.pb--80 {
//                     padding-bottom: 30px !important; 
//                 }

//                 /* 2. Top Heading Adjustments */
//                 .title-area-left .title[style*="margin-bottom: -3px"] {
//                     margin-bottom: 5px !important;
//                 }
//                 .title-area-left h1.title[style*="font-size:48px"] {
//                     font-size: 38px !important; 
//                 }

//                 /* 3. Team Row Uplift - FIRST ROW */
//                 .inner-page-team-area .row.mt--30 {
//                     margin-top: 20px !important; /* General row spacing adjustment */
//                     padding-top: 0px !important;
//                     margin-left: -10px !important; 
//                     margin-right: -10px !important; 
//                 }
                
//                 /* 4. Subsequent Row Spacing */
//                 .inner-page-team-area .row.mobile-mt,
//                 .inner-page-team-area .row.mt--120 {
//                     margin-top: 0px !important; /* Significantly reduced from 50px/120px */
//                 }

//                 /* 5. CRITICAL: Individual Team Card (Image) Uplift and Spacing */
//                 .team-card-column-mobile-adjust {
//                     /* Applying the stronger, generalized lift from your CSS blocks */
//                     position: relative; 
//                     top: -50px; 
//                     margin-bottom: -50px !important; 
//                     padding-left: 10px !important; 
//                     padding-right: 10px !important;
//                     padding-top: 0px !important; 
//                 }
                
//                 /* Column stacking margin */
//                 .inner-page-team-area .col-lg-4.col-md-6.col-sm-12.col-12 {
//                     margin-bottom: 25px !important; 
//                 }

//                 /* 6. Individual Card Container Margin */
//                 .single-team-area-one-start {
//                     margin-bottom: 0px !important; 
//                 }
                
//                 /* The custom CTA section styles from your original code (included for completeness) */
//                 .rts-cts-area-start { padding-top: 50px !important; padding-bottom: 50px !important; }
//                 .cta-style-10-wrapper { flex-direction: column; text-align: center; }
//                 .rts-cts-area-start .left-side .title { font-size: 32px !important; line-height: 1.2; }
//                 .rts-cts-area-start .right-side form { flex-direction: column; align-items: center; width: 100%; }
//                 .rts-cts-area-start .right-side form input[type="text"] { width: 100% !important; margin-right: 0 !important; margin-bottom: 15px; }
//                 .rts-cts-area-start .right-side form button { width: 100%; }
//             }

//             @media (max-width: 576px) {
//                 .mobile-mt {
//                     margin-top: 37px !important;
//                 }
//             }
//           `
//         }}
//       />

//       {/* --- Main Structure (HTML/JSX) --- */}
//       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner" style={{ marginTop: '80px' }}>
//         <div className="container pb--80">
//           <div className="col-lg-20">
//             <div className="title-area-left center" style={{ textAlign: 'center' }}>
//               <p className="title" style={{ marginBottom: '-3px', fontSize: '16px' }}>
//                 Building Success Together
//               </p>
//               <h1 className="title" style={{ fontWeight: 900, fontSize: '48px' }}>
//                 OUR
//                 <span style={{
//                   WebkitTextStroke: '1.5px #000',
//                   WebkitTextFillColor: 'transparent',
//                   color: 'transparent',
//                   fontWeight: 900,
//                   fontSize: '48px',
//                 }}>Team</span>
//               </h1>
//             </div>
//           </div>
          
//           {/* Render the first row of 3 members */}
//           {renderTeamRow(firstRow, 0)}
          
//         </div>
//       </div>

//       {/* --- Subsequent Sections (Rows 4 to 15) --- */}
//       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner">
//         <div className="container pb--80">
//           {subsequentRows.map((row, index) => renderTeamRow(row, index + 1))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurTeamSection;


'use client'
import React from 'react';

// --- 1. DATA ARRAY ---
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  delay: string;
}

const teamMembers: TeamMember[] = [
  // First Row (3 members)
  { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
  { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
  { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
  
  // Second Row (3 members)
  { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.2" },
  { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.4" },
  { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.6" },
  
  // Third Row (3 members)
  { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.2" },
  { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.4" },
  { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.6" },
  
  // Fourth Row (3 members)
  { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.2" },
  { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.4" },
  { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.6" },
  
  // Fifth Row (3 members)
  { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
  { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
  { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
  
  // Sixth Row (1 member, centered)
  { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.4" },
];

// Helper to group team members into rows of 3
const chunkArray = (array: TeamMember[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const teamRows = chunkArray(teamMembers, 3);


// --- 2. PRESENTATION (TSX) ---

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
  const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
  return (
    <div 
      className="col-lg-4 col-md-6 col-sm-12 col-12 team-card-column-mobile-adjust" 
      data-animation="fadeInUp" 
      data-delay={delay} 
      data-duration="1.2"
    >
      <div className="single-team-area-one-start">
        <a href="#" className="thumbnail">
          <img src={imgSrc} alt={name} />
        </a>
        <div className="inner-content">
          <div className="text-top">
            <a href="#">
              <h5 className="title">{name}</h5>
            </a>
            <span>{role}</span>
          </div>
          <div className="social-one-wrapper">
            <ul>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderTeamRow = (row: TeamMember[], index: number) => {
  let className = "row g-5 g-sm-30";
  let style: React.CSSProperties = {};

  if (index === 0) {
    className += " mt--30 row-initial-spacing";
  } else if (index === 1) {
    className += " mobile-mt";
  } else if (index >= 2) {
    className += " mt--120";
  } 
  
  if (index >= 4) {
    style.display = 'flex';
    style.justifyContent = 'center';
  }
  
  if (index === 5) {
      style.justifyContent = 'center'; 
      className += " row-last-centered-mobile";
  }

  return (
    <div key={index} className={className} style={style}>
      {row.map((member, i) => (
        <TeamMemberCard key={i} {...member} />
      ))}
    </div>
  );
};


const OurTeamSection: React.FC = () => {
  
  const firstRow = teamRows[0];
  const subsequentRows = teamRows.slice(1);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .mobile-mt {
                margin-top: 50px !important;
            }
            @media (max-width: 768px) {
                .inner-page-team-area .container.pb--80 {
                    padding-bottom: 30px !important; 
                }
                .title-area-left .title[style*="margin-bottom: -3px"] {
                    margin-bottom: 5px !important;
                }
                .title-area-left h1.title[style*="font-size:48px"] {
                    font-size: 38px !important; 
                }
                .inner-page-team-area .row.mt--30 {
                    margin-top: 20px !important;
                    padding-top: 0px !important;
                    margin-left: -10px !important; 
                    margin-right: -10px !important; 
                }
                .inner-page-team-area .row.mobile-mt,
                .inner-page-team-area .row.mt--120 {
                    margin-top: 0px !important;
                }
                .team-card-column-mobile-adjust {
                    position: relative; 
                    top: -50px; 
                    margin-bottom: -50px !important; 
                    padding-left: 10px !important; 
                    padding-right: 10px !important;
                    padding-top: 0px !important; 
                }
                .inner-page-team-area .col-lg-4.col-md-6.col-sm-12.col-12 {
                    margin-bottom: 25px !important; 
                }
                .single-team-area-one-start {
                    margin-bottom: 0px !important; 
                }
                .rts-cts-area-start { padding-top: 50px !important; padding-bottom: 50px !important; }
                .cta-style-10-wrapper { flex-direction: column; text-align: center; }
                .rts-cts-area-start .left-side .title { font-size: 32px !important; line-height: 1.2; }
                .rts-cts-area-start .right-side form { flex-direction: column; align-items: center; width: 100%; }
                .rts-cts-area-start .right-side form input[type="text"] { width: 100% !important; margin-right: 0 !important; margin-bottom: 15px; }
                .rts-cts-area-start .right-side form button { width: 100%; }
            }
            @media (max-width: 576px) {
                .mobile-mt {
                    margin-top: 37px !important;
                }
            }
          `
        }}
      />

      <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner" style={{ marginTop: '80px' }}>
        <div className="container pb--80">
          <div className="col-lg-12">
            <div className="title-area-left center" style={{ textAlign: 'center' }}>
              <p className="title" style={{ marginBottom: '-3px', fontSize: '14px' }}>
                Building Success Together
              </p>
              <h1 className="title" style={{ fontWeight: 900, fontSize: '48px', marginBottom: '20px' }}>
                OUR
                <span style={{
                  WebkitTextStroke: '1.5px #000',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  fontWeight: 900,
                  fontSize: '48px',
                }}> Team</span>
              </h1>
              {/* --- ADDED PARAGRAPH --- */}
              <p className="disc" style={{ 
                maxWidth: '900px', 
                margin: '0 auto 40px auto', 
                lineHeight: '1.6',
                fontSize: '12px',
                color: '#666'
              }}>
                At the heart of the Gujranwala Business Alliance (GBA) is a team of 
                dedicated professionals and business leaders who share a common vision to
                 drive industrial growth, strengthen international partnerships, and empower
                  the business community of Gujranwala. Their expertise, leadership, and 
                  commitment to excellence ensure that GBA continues to evolve as a dynamic
                   platform for collaboration, innovation, and global engagement.
              </p>
            </div>
          </div>
          
          {renderTeamRow(firstRow, 0)}
          
        </div>
      </div>

      <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner">
        <div className="container pb--80">
          {subsequentRows.map((row, index) => renderTeamRow(row, index + 1))}
        </div>
      </div>
    </>
  );
};

export default OurTeamSection;