// // 'use client'
// // import React from 'react';

// // // --- 1. DATA ARRAY ---
// // export interface TeamMember {
// //   name: string;
// //   role: string;
// //   image: string;
// //   delay: string;
// // }

// // const teamMembers: TeamMember[] = [
// //   // First Row (3 members)
// //   { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
// //   { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
// //   { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
  
// //   // Second Row (3 members)
// //   { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.2" },
// //   { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.4" },
// //   { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.6" },
  
// //   // Third Row (3 members)
// //   { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.2" },
// //   { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.4" },
// //   { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.6" },
  
// //   // Fourth Row (3 members)
// //   { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.2" },
// //   { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.4" },
// //   { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.6" },
  
// //   // Fifth Row (3 members)
// //   { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
// //   { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
// //   { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
  
// //   // Sixth Row (1 member, centered)
// //   { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.4" },
// // ];

// // // Helper to group team members into rows of 3
// // const chunkArray = (array: TeamMember[], chunkSize: number) => {
// //   const result = [];
// //   for (let i = 0; i < array.length; i += chunkSize) {
// //     result.push(array.slice(i, i + chunkSize));
// //   }
// //   return result;
// // };

// // const teamRows = chunkArray(teamMembers, 3);


// // // --- 2. PRESENTATION (TSX) ---

// // const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
// //   // Image path adjustment: Assuming all images are in the `public/` directory
// //   const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
// //   return (
// //     <div 
// //       className="col-lg-4 col-md-6 col-sm-12 col-12 team-card-column-mobile-adjust" // Added class for mobile adjust
// //       data-animation="fadeInUp" 
// //       data-delay={delay} 
// //       data-duration="1.2"
// //     >
// //       <div className="single-team-area-one-start">
// //         <a href="#" className="thumbnail">
// //           {/* Using a standard <img> tag for compatibility with your provided relative paths */}
// //           <img src={imgSrc} alt={name} />
// //         </a>
// //         <div className="inner-content">
// //           <div className="text-top">
// //             <a href="#">
// //               <h5 className="title">{name}</h5>
// //             </a>
// //             <span>{role}</span>
// //           </div>
// //           <div className="social-one-wrapper">
// //             <ul>
// //               <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
// //               <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
// //               <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const renderTeamRow = (row: TeamMember[], index: number) => {
// //   let className = "row g-5 g-sm-30";
// //   let style: React.CSSProperties = {};

// //   if (index === 0) {
// //     className += " mt--30 row-initial-spacing";
// //   } else if (index === 1) {
// //     className += " mobile-mt";
// //   } else if (index >= 2) {
// //     className += " mt--120";
// //   } 
  
// //   // Centering styles for the final rows
// //   if (index >= 4) {
// //     style.display = 'flex';
// //     style.justifyContent = 'center';
// //   }
  
// //   // Target the very last row (index 5) with the stronger center style
// //   if (index === 5) {
// //       style.justifyContent = 'center'; // Rely on the CSS class for !important
// //       className += " row-last-centered-mobile";
// //   }

// //   return (
// //     <div key={index} className={className} style={style}>
// //       {row.map((member, i) => (
// //         <TeamMemberCard key={i} {...member} />
// //       ))}
// //     </div>
// //   );
// // };


// // const OurTeamSection: React.FC = () => {
  
// //   // Separate rows based on the chunked data
// //   const firstRow = teamRows[0];
// //   const subsequentRows = teamRows.slice(1);

// //   return (
// //     <>
// //       {/* This is the method to include the specific, complex mobile media queries 
// //         directly into the component output, treating it as a "single file." 
// //       */}
// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //             /* Helper Classes for Next.js Component */
// //             .mobile-mt {
// //                 margin-top: 50px !important;
// //             }
// //             .team-card-column-mobile-adjust { /* Used to target the specific column for uplift */
// //                 /* Base style here if needed */
// //             }
// //             .single-team-area-one-start {
// //                 /* Base style here if needed */
// //             }

// //             /* ========================================= */
// //             /* --- MOBILE RESPONSIVENESS (Max Width 768px) --- */
// //             /* ========================================= */
// //             @media (max-width: 768px) {
                
// //                 /* 1. Overall Section Spacing */
// //                 .inner-page-team-area .container.pb--80 {
// //                     padding-bottom: 30px !important; 
// //                 }

// //                 /* 2. Top Heading Adjustments */
// //                 .title-area-left .title[style*="margin-bottom: -3px"] {
// //                     margin-bottom: 5px !important;
// //                 }
// //                 .title-area-left h1.title[style*="font-size:48px"] {
// //                     font-size: 38px !important; 
// //                 }

// //                 /* 3. Team Row Uplift - FIRST ROW */
// //                 .inner-page-team-area .row.mt--30 {
// //                     margin-top: 20px !important; /* General row spacing adjustment */
// //                     padding-top: 0px !important;
// //                     margin-left: -10px !important; 
// //                     margin-right: -10px !important; 
// //                 }
                
// //                 /* 4. Subsequent Row Spacing */
// //                 .inner-page-team-area .row.mobile-mt,
// //                 .inner-page-team-area .row.mt--120 {
// //                     margin-top: 0px !important; /* Significantly reduced from 50px/120px */
// //                 }

// //                 /* 5. CRITICAL: Individual Team Card (Image) Uplift and Spacing */
// //                 .team-card-column-mobile-adjust {
// //                     /* Applying the stronger, generalized lift from your CSS blocks */
// //                     position: relative; 
// //                     top: -50px; 
// //                     margin-bottom: -50px !important; 
// //                     padding-left: 10px !important; 
// //                     padding-right: 10px !important;
// //                     padding-top: 0px !important; 
// //                 }
                
// //                 /* Column stacking margin */
// //                 .inner-page-team-area .col-lg-4.col-md-6.col-sm-12.col-12 {
// //                     margin-bottom: 25px !important; 
// //                 }

// //                 /* 6. Individual Card Container Margin */
// //                 .single-team-area-one-start {
// //                     margin-bottom: 0px !important; 
// //                 }
                
// //                 /* The custom CTA section styles from your original code (included for completeness) */
// //                 .rts-cts-area-start { padding-top: 50px !important; padding-bottom: 50px !important; }
// //                 .cta-style-10-wrapper { flex-direction: column; text-align: center; }
// //                 .rts-cts-area-start .left-side .title { font-size: 32px !important; line-height: 1.2; }
// //                 .rts-cts-area-start .right-side form { flex-direction: column; align-items: center; width: 100%; }
// //                 .rts-cts-area-start .right-side form input[type="text"] { width: 100% !important; margin-right: 0 !important; margin-bottom: 15px; }
// //                 .rts-cts-area-start .right-side form button { width: 100%; }
// //             }

// //             @media (max-width: 576px) {
// //                 .mobile-mt {
// //                     margin-top: 37px !important;
// //                 }
// //             }
// //           `
// //         }}
// //       />

// //       {/* --- Main Structure (HTML/JSX) --- */}
// //       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner" style={{ marginTop: '80px' }}>
// //         <div className="container pb--80">
// //           <div className="col-lg-20">
// //             <div className="title-area-left center" style={{ textAlign: 'center' }}>
// //               <p className="title" style={{ marginBottom: '-3px', fontSize: '16px' }}>
// //                 Building Success Together
// //               </p>
// //               <h1 className="title" style={{ fontWeight: 900, fontSize: '48px' }}>
// //                 OUR
// //                 <span style={{
// //                   WebkitTextStroke: '1.5px #000',
// //                   WebkitTextFillColor: 'transparent',
// //                   color: 'transparent',
// //                   fontWeight: 900,
// //                   fontSize: '48px',
// //                 }}>Team</span>
// //               </h1>
// //             </div>
// //           </div>
          
// //           {/* Render the first row of 3 members */}
// //           {renderTeamRow(firstRow, 0)}
          
// //         </div>
// //       </div>

// //       {/* --- Subsequent Sections (Rows 4 to 15) --- */}
// //       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner">
// //         <div className="container pb--80">
// //           {subsequentRows.map((row, index) => renderTeamRow(row, index + 1))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default OurTeamSection;


// // 'use client'
// // import React from 'react';

// // // --- 1. DATA ARRAY ---
// // export interface TeamMember {
// //   name: string;
// //   role: string;
// //   image: string;
// //   delay: string;
// // }

// // const teamMembers: TeamMember[] = [
// //   // First Row (3 members)
// //   { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
// //   { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
// //   { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
  
// //   // Second Row (3 members)
// //   { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.2" },
// //   { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.4" },
// //   { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.6" },
  
// //   // Third Row (3 members)
// //   { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.2" },
// //   { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.4" },
// //   { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.6" },
  
// //   // Fourth Row (3 members)
// //   { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.2" },
// //   { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.4" },
// //   { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.6" },
  
// //   // Fifth Row (3 members)
// //   { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
// //   { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
// //   { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
  
// //   // Sixth Row (1 member, centered)
// //   { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.4" },
// // ];

// // // Helper to group team members into rows of 3
// // const chunkArray = (array: TeamMember[], chunkSize: number) => {
// //   const result = [];
// //   for (let i = 0; i < array.length; i += chunkSize) {
// //     result.push(array.slice(i, i + chunkSize));
// //   }
// //   return result;
// // };

// // const teamRows = chunkArray(teamMembers, 3);


// // // --- 2. PRESENTATION (TSX) ---

// // const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
// //   const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
// //   return (
// //     <div 
// //       className="col-lg-4 col-md-6 col-sm-12 col-12 team-card-column-mobile-adjust" 
// //       data-animation="fadeInUp" 
// //       data-delay={delay} 
// //       data-duration="1.2"
// //     >
// //       <div className="single-team-area-one-start">
// //         <a href="#" className="thumbnail">
// //           <img src={imgSrc} alt={name} />
// //         </a>
// //         <div className="inner-content">
// //           <div className="text-top">
// //             <a href="#">
// //               <h5 className="title">{name}</h5>
// //             </a>
// //             <span>{role}</span>
// //           </div>
// //           <div className="social-one-wrapper">
// //             <ul>
// //               <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
// //               <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
// //               <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const renderTeamRow = (row: TeamMember[], index: number) => {
// //   let className = "row g-5 g-sm-30";
// //   let style: React.CSSProperties = {};

// //   if (index === 0) {
// //     className += " mt--30 row-initial-spacing";
// //   } else if (index === 1) {
// //     className += " mobile-mt";
// //   } else if (index >= 2) {
// //     className += " mt--120";
// //   } 
  
// //   if (index >= 4) {
// //     style.display = 'flex';
// //     style.justifyContent = 'center';
// //   }
  
// //   if (index === 5) {
// //       style.justifyContent = 'center'; 
// //       className += " row-last-centered-mobile";
// //   }

// //   return (
// //     <div key={index} className={className} style={style}>
// //       {row.map((member, i) => (
// //         <TeamMemberCard key={i} {...member} />
// //       ))}
// //     </div>
// //   );
// // };


// // const OurTeamSection: React.FC = () => {
  
// //   const firstRow = teamRows[0];
// //   const subsequentRows = teamRows.slice(1);

// //   return (
// //     <>
// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //             .mobile-mt {
// //                 margin-top: 30px !important;
// //             }
// //             @media (max-width: 768px) {
// //                 .inner-page-team-area .container.pb--80 {
// //                     padding-bottom: 30px !important; 
// //                 }
// //                 .title-area-left .title[style*="margin-bottom: -3px"] {
// //                     margin-bottom: 5px !important;
// //                 }
// //                 .title-area-left h1.title[style*="font-size:48px"] {
// //                     font-size: 38px !important; 
// //                 }
// //                 .inner-page-team-area .row.mt--30 {
// //                     margin-top: 20px !important;
// //                     padding-top: 0px !important;
// //                     margin-left: -10px !important; 
// //                     margin-right: -10px !important; 
// //                 }
// //                 .inner-page-team-area .row.mobile-mt,
// //                 .inner-page-team-area .row.mt--120 {
// //                     margin-top: 0px !important;
// //                 }
// //                 .team-card-column-mobile-adjust {
// //                     position: relative; 
// //                     top: -50px; 
// //                     margin-bottom: -50px !important; 
// //                     padding-left: 10px !important; 
// //                     padding-right: 10px !important;
// //                     padding-top: 0px !important; 
// //                 }
// //                 .inner-page-team-area .col-lg-4.col-md-6.col-sm-12.col-12 {
// //                     margin-bottom: 25px !important; 
// //                 }
// //                 .single-team-area-one-start {
// //                     margin-bottom: 0px !important; 
// //                 }
// //                 .rts-cts-area-start { padding-top: 50px !important; padding-bottom: 50px !important; }
// //                 .cta-style-10-wrapper { flex-direction: column; text-align: center; }
// //                 .rts-cts-area-start .left-side .title { font-size: 32px !important; line-height: 1.2; }
// //                 .rts-cts-area-start .right-side form { flex-direction: column; align-items: center; width: 100%; }
// //                 .rts-cts-area-start .right-side form input[type="text"] { width: 100% !important; margin-right: 0 !important; margin-bottom: 15px; }
// //                 .rts-cts-area-start .right-side form button { width: 100%; }
// //             }
// //             @media (max-width: 576px) {
// //                 .mobile-mt {
// //                     margin-top: 30px !important;
// //                 }
// //             }
// //           `
// //         }}
// //       />

// //       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner" style={{ marginTop: '80px' }}>
// //         <div className="container pb--80">
// //           <div className="col-lg-12">
// //             <div className="title-area-left center" style={{ textAlign: 'center' }}>
// //               <p className="title" style={{ marginBottom: '-3px', fontSize: '14px' }}>
// //                 Building Success Together
// //               </p>
// //               <h1 className="title" style={{ fontWeight: 900, fontSize: '48px', marginBottom: '20px' }}>
// //                 OUR
// //                 <span style={{
// //                   WebkitTextStroke: '1.5px #000',
// //                   WebkitTextFillColor: 'transparent',
// //                   color: 'transparent',
// //                   fontWeight: 900,
// //                   fontSize: '48px',
// //                 }}> Team</span>
// //               </h1>
// //               {/* --- ADDED PARAGRAPH --- */}
// //               <p className="disc" style={{ 
// //                 maxWidth: '900px', 
// //                 margin: '0 auto 40px auto', 
// //                 lineHeight: '1.6',
// //                 fontSize: '15px',
// //                 color: '#666'
// //               }}>
// //                 At the heart of the Gujranwala Business Alliance (GBA) is a team of 
// //                 dedicated professionals and business leaders who share a common vision to
// //                  drive industrial growth, strengthen international partnerships, and empower
// //                   the business community of Gujranwala. Their expertise, leadership, and 
// //                   commitment to excellence ensure that GBA continues to evolve as a dynamic
// //                    platform for collaboration, innovation, and global engagement.
// //               </p>
// //             </div>
// //           </div>
          
// //           {renderTeamRow(firstRow, 0)}
          
// //         </div>
// //       </div>

// //       <div className="inner-page-team-area rts-section-gapBottom mt-dec-section-inner">
// //         <div className="container pb--80">
// //           {subsequentRows.map((row, index) => renderTeamRow(row, index + 1))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default OurTeamSection;


// // 'use client'
// // import React from 'react';

// // // --- 1. DATA ARRAY ---
// // export interface TeamMember {
// //   name: string;
// //   role: string;
// //   image: string;
// //   delay: string;
// // }

// // const teamMembers: TeamMember[] = [
// //   { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
// //   { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
// //   { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
// //   { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.8" },
// //   { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.2" },
// //   { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.4" },
// //   { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.6" },
// //   { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.8" },
// //   { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.2" },
// //   { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.4" },
// //   { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.6" },
// //   { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.8" },
// //   { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
// //   { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
// //   { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
// //   { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.8" },
// // ];

// // const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
// //   const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
// //   return (
// //     <div 
// //       className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 team-column-spacing" 
// //       data-animation="fadeInUp" 
// //       data-delay={delay} 
// //     >
// //       <div className="single-team-card-wrapper">
// //         <div className="thumbnail-area">
// //           <img src={imgSrc} alt={name} />
// //         </div>
        
// //         {/* Info Box - Styled exactly like pic2 */}
// //         <div className="info-box-container">
// //           <div className="info-content">
// //             <h5 className="member-name">{name}</h5>
// //             <p className="member-role">{role}</p>
            
// //             <div className="social-divider"></div>
            
// //             <div className="social-links">
// //               <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
// //               <a href="#"><i className="fa-brands fa-twitter"></i></a>
// //               <a href="#"><i className="fa-brands fa-instagram"></i></a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const OurTeamSection: React.FC = () => {
// //   return (
// //     <>
// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //             .team-column-spacing {
// //                 margin-bottom: 80px; /* Strong vertical row gap */
// //                 padding: 0 15px;
// //             }

// //             .single-team-card-wrapper {
// //                 position: relative;
// //                 width: 100%;
// //                 text-align: center;
// //             }

// //             .thumbnail-area img {
// //                 width: 100%;
// //                 border-radius: 12px;
// //                 display: block;
// //                 background-color: #e0e0e0;
// //             }

// //             /* The Floating Info Box Styling (Pic2 Prototype) */
// //             .info-box-container {
// //                 position: relative;
// //                 margin-top: -70px; /* Pulls the box up onto the image */
// //                 z-index: 2;
// //                 display: flex;
// //                 justify-content: center;
// //                 padding: 0 20px;
// //             }

// //             .info-content {
// //                 background: #ffffff;
// //                 width: 90%; /* Box is smaller than the image div */
// //                 padding: 20px 10px;
// //                 border-radius: 10px;
// //                 box-shadow: 0 10px 30px rgba(0,0,0,0.08);
// //             }

// //             .member-name {
// //                 font-size: 18px;
// //                 font-weight: 700;
// //                 margin-bottom: 4px;
// //                 color: #1c1c1c;
// //                 text-transform: capitalize;
// //             }

// //             .member-role {
// //                 font-size: 13px;
// //                 color: #777;
// //                 margin-bottom: 0;
// //                 text-transform: capitalize;
// //             }

// //             .social-divider {
// //                 height: 1px;
// //                 background: #eee;
// //                 margin: 15px auto;
// //                 width: 80%;
// //             }

// //             .social-links {
// //                 display: flex;
// //                 justify-content: center;
// //                 gap: 15px;
// //             }

// //             .social-links a {
// //                 color: #333;
// //                 font-size: 14px;
// //                 transition: 0.3s;
// //                 display: flex;
// //                 align-items: center;
// //                 justify-content: center;
// //                 width: 32px;
// //                 height: 32px;
// //                 background: #f8f9fa;
// //                 border-radius: 50%;
// //             }

// //             .social-links a:hover {
// //                 background: #000;
// //                 color: #fff;
// //             }

// //             .title-area-center {
// //                 text-align: center;
// //                 margin-bottom: 70px;
// //             }

// //             @media (max-width: 768px) {
// //                 .team-column-spacing { margin-bottom: 100px; }
// //                 .info-box-container { margin-top: -50px; }
// //             }
// //           `
// //         }}
// //       />

// //       <div className="inner-page-team-area rts-section-gapBottom" style={{ marginTop: '80px' }}>
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="title-area-center">
// //                 <p className="title" style={{ fontSize: '14px', marginBottom: '5px' }}>Building Success Together</p>
// //                 <h1 className="title" style={{ fontWeight: 900, fontSize: '48px' }}>
// //                   OUR <span style={{ WebkitTextStroke: '1.5px #000', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Team</span>
// //                 </h1>
// //                 <p className="disc" style={{ maxWidth: '850px', margin: '20px auto 0', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
// //                   At the heart of the Gujranwala Business Alliance (GBA) is a team of dedicated professionals and business leaders who share a common vision to drive industrial growth and global engagement.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="row">
// //             {teamMembers.map((member, index) => (
// //               <TeamMemberCard key={index} {...member} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default OurTeamSection;


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
//   { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
//   { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
//   { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
//   { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.8" },
//   { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.2" },
//   { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.4" },
//   { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.6" },
//   { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.8" },
//   { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.2" },
//   { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.4" },
//   { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.6" },
//   { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.8" },
//   { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
//   { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
//   { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
//   { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.8" },
// ];

// const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
//   const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
//   return (
//     <div 
//       className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 team-column-spacing" 
//       data-animation="fadeInUp" 
//       data-delay={delay} 
//     >
//       <div className="single-team-card-wrapper">
//         <div className="thumbnail-area">
//           <img src={imgSrc} alt={name} />
//         </div>
        
//         <div className="info-box-container">
//           <div className="info-content">
//             <h5 className="member-name">{name}</h5>
//             <p className="member-role">{role}</p>
            
//             <div className="social-divider"></div>
            
//             <div className="social-links">
//               <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
//               <a href="#"><i className="fa-brands fa-twitter"></i></a>
//               <a href="#"><i className="fa-brands fa-instagram"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const OurTeamSection: React.FC = () => {
//   return (
//     <>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             .team-column-spacing {
//                 margin-bottom: 80px; /* Gap between rows */
//                 padding: 0 15px;
//             }

//             /* REMOVE GAP FROM THE LAST ROW */
//             .row > .team-column-spacing:nth-last-child(-n+4) {
//                 margin-bottom: 50px !important;
//             }

//             .single-team-card-wrapper {
//                 position: relative;
//                 width: 100%;
//                 text-align: center;
//             }

//             .thumbnail-area img {
//                 width: 100%;
//                 border-radius: 12px;
//                 display: block;
//                 background-color: #e0e0e0;
//             }

//             .info-box-container {
//                 position: relative;
//                 margin-top: -70px;
//                 z-index: 2;
//                 display: flex;
//                 justify-content: center;
//                 padding: 0 20px;
//             }

//             .info-content {
//                 background: #ffffff;
//                 width: 90%;
//                 padding: 20px 10px;
//                 border-radius: 10px;
//                 box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                
//             }


            
//             .member-name {
//                 font-size: 18px;
//                 font-weight: 700;
//                 margin-bottom: 4px;
//                 color: #1c1c1c;
//                 text-transform: capitalize;
//             }

//             .member-role {
//                 font-size: 13px;
//                 color: #777;
//                 margin-bottom: 0;
//                 text-transform: capitalize;
//             }

//             .social-divider {
//                 height: 1px;
//                 background: #eee;
//                 margin: 15px auto;
//                 width: 80%;
//             }

//             .social-links {
//                 display: flex;
//                 justify-content: center;
//                 gap: 15px;
//             }

//             .social-links a {
//                 color: #333;
//                 font-size: 14px;
//                 transition: 0.3s;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 width: 32px;
//                 height: 32px;
//                 background: #f8f9fa;
//                 border-radius: 50%;
//             }

//             .social-links a:hover {
//                 background: #000;
//                 color: #fff;
//             }

//             .title-area-center {
//                 text-align: center;
//                 margin-bottom: 70px;
//             }

//             /* Adjusting section gap */
//             .no-bottom-gap {
//                 padding-bottom: 0px !important;
//                 margin-bottom: -50px !important; /* Forces layout to pull up */
//             }

//             @media (max-width: 768px) {
//                 .team-column-spacing { margin-bottom: 80px; }
//                 .row > .team-column-spacing:last-child { margin-bottom: 0px !important; }
//                 .info-box-container { margin-top: -50px; }
//             }
//           `
//         }}
//       />

//       {/* Added 'no-bottom-gap' class and removed default rts-section-gapBottom if it was causing issues */}
//       <div className="inner-page-team-area no-bottom-gap" style={{ marginTop: '80px' }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-center">
//                 <p className="title" style={{ fontSize: '14px', marginBottom: '5px' }}>Building Success Together</p>
//                 <h1 className="title" style={{ fontWeight: 900, fontSize: '48px' }}>
//                   OUR <span style={{ WebkitTextStroke: '1.5px #000', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Team</span>
//                 </h1>
//                 <p className="disc" style={{ maxWidth: '850px', margin: '20px auto 0', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
//                   At the heart of the Gujranwala Business Alliance (GBA) is a team of dedicated professionals and business leaders.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="row">
//             {teamMembers.map((member, index) => (
//               <TeamMemberCard key={index} {...member} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurTeamSection;


'use client';
import React from 'react';

// --- 1. DATA ARRAY ---
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  delay: string;
}

const teamMembers: TeamMember[] = [
  { name: "Ahmad Ikram Lone", role: "Chairman", image: "/images/Group 75.png", delay: "0.2" },
  { name: "Umer Mehmood", role: "Sr. Vice Chairman", image: "/images/Our Team/Team/Group 66.png", delay: "0.4" },
  { name: "Kh. Shariq Kaleem", role: "Vice Chairman", image: "/images/Our Team/Team/Group 68.png", delay: "0.6" },
  { name: "Faseeh ur Rehman", role: "Director trade development", image: "/images/Our Team/Team/Group 106.png", delay: "0.8" },
  { name: "Yasir Shabbir Khan", role: "Director International affairs", image: "/images/Our Team/Team/Group 107.png", delay: "0.2" },
  { name: "Adnan Shafique", role: "Director IT", image: "/images/Our Team/Team/Group 108.png", delay: "0.4" },
  { name: "khalid m. minhas", role: "Director CSR", image: "/images/Our Team/Team/Group 109.png", delay: "0.6" },
  { name: "sadiq sabir", role: "Director public relations", image: "/images/Our Team/Team/Group 110.png", delay: "0.8" },
  { name: "syed wajid a. shah", role: "Director Industry-Academia", image: "/images/Our Team/Team/Group 111.png", delay: "0.2" },
  { name: "mohsin ali", role: "Director Industry liaison", image: "/images/Our Team/Team/Group 112.png", delay: "0.4" },
  { name: "usman nawaz bajwa", role: "Director SME development", image: "/images/Our Team/Team/Group 113.png", delay: "0.6" },
  { name: "Kh. faiq kaleem", role: "Director youth empowerment", image: "/images/Our Team/Team/Group 114.png", delay: "0.8" },
  { name: "arsalan shahid", role: "Director International jvs", image: "/images/Our Team/Team/Group 115.png", delay: "0.2" },
  { name: "kh. rohan ashraf", role: "Director finance", image: "/images/Our Team/Team/Group 116.png", delay: "0.4" },
  { name: "Anas farooqi", role: "Director media affairs", image: "/images/Our Team/Team/Group 117.png", delay: "0.6" },
  { name: "Salman sheikh", role: "Director r&d", image: "/images/Our Team/Team/Group 118.png", delay: "0.8" },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, delay }) => {
  const imgSrc = image.replace(/assets\/|assets\\/gi, '/');
  
  return (
    <div 
      className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 team-column-spacing" 
      data-animation="fadeInUp" 
      data-delay={delay} 
    >
      <div className="single-team-card-wrapper">
        <div className="thumbnail-area">
          <img src={imgSrc} alt={name} />
        </div>
        
        <div className="info-box-container">
          <div className="info-content">
            <div className="text-data">
                <h5 className="member-name">{name}</h5>
                <p className="member-role">{role}</p>
            </div>
            
            <div className="social-divider"></div>
            
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeamSection: React.FC = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .team-column-spacing {
                margin-bottom: 80px; 
                padding: 0 15px;
            }

            .row > .team-column-spacing:nth-last-child(-n+4) {
                margin-bottom: 50px !important;
            }

            .single-team-card-wrapper {
                position: relative;
                width: 100%;
                text-align: center;
            }

            .thumbnail-area img {
                width: 100%;
                border-radius: 12px;
                display: block;
                background-color: #e0e0e0;
            }

            .info-box-container {
                position: relative;
                margin-top: -70px;
                z-index: 2;
                display: flex;
                justify-content: center;
                padding: 0 20px;
            }

            .info-content {
                background: #ffffff;
                width: 100%; /* Changed from 90% for better alignment */
                padding: 20px 10px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                /* FIXED HEIGHT LOGIC */
                min-height: 180px; 
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .text-data {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .member-name {
                font-size: 17px;
                font-weight: 700;
                margin-bottom: 6px;
                color: #1c1c1c;
                text-transform: capitalize;
                line-height: 1.2;
            }

            .member-role {
                font-size: 13px;
                color: #777;
                margin-bottom: 0;
                text-transform: capitalize;
                line-height: 1.4;
            }

            .social-divider {
                height: 1px;
                background: #eee;
                margin: 12px auto;
                width: 80%;
            }

            .social-links {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-top: auto;
            }

            .social-links a {
                color: #333;
                font-size: 14px;
                transition: 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                background: #f8f9fa;
                border-radius: 50%;
            }

            .social-links a:hover {
                background: #000;
                color: #fff;
            }

            .title-area-center {
                text-align: center;
                margin-bottom: 70px;
            }

            .no-bottom-gap {
                padding-bottom: 0px !important;
                margin-bottom: -50px !important;
            }

            @media (max-width: 768px) {
                .info-content { min-height: unset; } /* Mobile pe auto rehne dein */
                .team-column-spacing { margin-bottom: 80px; }
                .info-box-container { margin-top: -50px; }
            }
          `
        }}
      />

      <div className="inner-page-team-area no-bottom-gap" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center">
                <p className="title" style={{ fontSize: '14px', marginBottom: '5px' }}>Building Success Together</p>
                <h1 className="title" style={{ fontWeight: 900, fontSize: '48px' }}>
                  OUR <span style={{ WebkitTextStroke: '1.5px #000', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Team</span>
                </h1>
                <p className="disc" style={{ maxWidth: '850px', margin: '20px auto 0', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                  At the heart of the Gujranwala Business Alliance (GBA) is a team of dedicated professionals and business leaders.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamSection;