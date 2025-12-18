


// "use client";

// export default function FlagshipList() {
//   return (
//     <div className="working-process-area-three rts-section-gap working-process-bg"
//         style={{ 
//                     alignItems: 'center', 
//                     marginTop: '120px', 
                    
//                     marginBottom: '120px', 
                   
//                     marginLeft: '60px', 
//                     marginRight: '60px',
                     
                    
//                 }}>

//       <style>
       
//         {`
//           .industry-list { list-style: none; padding: 0; margin: 0; }
//           .industry-list li { align-items: center; gap: 10px; margin-bottom: 10px; font-size: 16px; }
//           .industry-list img { width: 20px; }
//           .title-style-three .title { font-size: 60px; font-weight: 900; text-transform: uppercase; }
//           .title-style-three .solid-text { color: #0d1c2e; }
//           .title-style-three .outline-text {
//             color: transparent;
//             -webkit-text-stroke: 1.5px #0d1c2e;
//             text-stroke: 1.5px #0d1c2e;
//             margin-left: 10px;
//           }
//           .title-style-three.center { text-align: center; }
//           .working-process-bg {
//                     background-position: center center;
//                 background-repeat: no-repeat;
//                 background-size: 100% 100%; /* This is the key part */
// }
                       
                
//         `}
//       </style>

//       <div className="container "
//       >
//         <div className="row mt--40">
//           <div className="title-style-three center" >

//             <h2 className="title" style={{ marginBottom: "20px" }}>
//               <span className="solid-text">Flagship</span>
//               <span className="outline-text">programs</span>
//             </h2>

//             <p>
//               Explore GBA’s flagship programs - a suite of high-impact initiatives...
//             </p>

//           </div>
//         </div>

//         <div className="row justify-content-center mt-5">

//           {/* Column 1 */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <ul className="industry-list">
//               <li><img src="/images/logo/logos.png" /> Pakistan Products House</li>
//               <li><img src="/images/logo/logos.png" /> Global Growth Windows</li>
//               <li><img src="/images/logo/logos.png" /> International Tech Gateways</li>
//               <li><img src="/images/logo/logos.png" /> BRI Centre</li>
//               <li><img src="/images/logo/logos.png" /> GBA Business Networking</li>
//               <li><img src="/images/logo/logos.png" /> GBA Trade Delegations</li>
//               <li><img src="/images/logo/logos.png" /> GBA Trade Desks</li>
//               <li><img src="/images/logo/logos.png" /> GBA Events</li>
//               <li><img src="/images/logo/logos.png" /> GBA Seminars & Workshops</li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <ul className="industry-list">
//               <li><img src="/images/logo/logos.png" /> GBA Launch Pad</li>
//               <li><img src="/images/logo/logos.png" /> GBA Research Awards</li>
//               <li><img src="/images/logo/logos.png" /> GBA Internships</li>
//               <li><img src="/images/logo/logos.png" /> Meet The CEO</li>
//               <li><img src="/images/logo/logos.png" /> GBA Talks</li>
//               <li><img src="/images/logo/logos.png" /> GBA Leadership Incubation</li>
//               <li><img src="/images/logo/logos.png" /> GBA Industrial Visits</li>
//               <li><img src="/images/logo/logos.png" /> GBA Expos</li>
//               <li><img src="/images/logo/logos.png" /> GBA E-Com</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <ul className="industry-list">
//               <li><img src="/images/logo/logos.png" /> MIG 200</li>
//               <li><img src="/images/logo/logos.png" /> GBA JV Desk</li>
//               <li><img src="/images/logo/logos.png" /> GBA Women Empowerment</li>
//               <li><img src="/images/logo/logos.png" /> GBA Welfare</li>
//               <li><img src="/images/logo/logos.png" /> GBA Scholarships</li>
//               <li><img src="/images/logo/logos.png" /> GBA Industrial Development</li>
//               <li><img src="/images/logo/logos.png" /> MIG Documentaries</li>
//               <li><img src="/images/logo/logos.png" /> GBA Research Desks</li>
//               <li><img src="/images/logo/logos.png" /> GBA Friends</li>
//             </ul>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }


"use client";

export default function FlagshipList() {
  const customStyles = `
    /* --- Base Section Styling --- */
    .flagship-list-wrapper {
        margin-top: 120px;
        margin-bottom: 120px;
        margin-left: 60px;
        margin-right: 60px;
        align-items: center;
    }

    .industry-list { 
        list-style: none; 
        padding: 0; 
        margin: 0; 
    }

    .industry-list li { 
        display: flex; /* Added flex to align image and text */
        align-items: center; 
        gap: 10px; 
        margin-bottom: 10px; 
        font-size: 16px; 
    }

    .industry-list img { 
        width: 20px; 
    }

    .title-style-three .title { 
        font-size: 60px; 
        font-weight: 900; 
        text-transform: uppercase; 
        margin-bottom: 20px;
    }

    .title-style-three .solid-text { 
        color: #0d1c2e; 
    }

    .title-style-three .outline-text {
        color: transparent;
        -webkit-text-stroke: 1.5px #0d1c2e;
        text-stroke: 1.5px #0d1c2e;
        margin-left: 10px;
    }

    .title-style-three.center { 
        text-align: center; 
    }

    .working-process-bg {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    /* --- Mobile Responsive Styling --- */
    @media (max-width: 768px) {
        .flagship-list-wrapper {
            margin: 40px 15px !important; /* Reduces large margins on mobile */
        }

        .title-style-three .title {
            font-size: 32px !important; /* Smaller text for mobile screens */
        }

        .outline-text {
            display: block; /* Stack "programs" under "Flagship" if needed */
            margin-left: 0 !important;
        }

        .industry-list li {
            font-size: 14px !important;
        }
    }
  `;

  return (
    <div className="working-process-area-three rts-section-gap working-process-bg flagship-list-wrapper">
      <style jsx global>{customStyles}</style>

      <div className="container">
        <div className="row mt--40">
          <div className="title-style-three center">
            <h2 className="title">
              <span className="solid-text">Flagship</span>
              <span className="outline-text">programs</span>
            </h2>
            <p>
              Explore GBA’s flagship programs - a suite of high-impact initiatives...
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <ul className="industry-list">
              <li><img src="/images/logo/logos.png" alt="logo" /> Pakistan Products House</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> Global Growth Windows</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> International Tech Gateways</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> BRI Centre</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Business Networking</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Trade Delegations</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Trade Desks</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Events</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Seminars & Workshops</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <ul className="industry-list">
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Launch Pad</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Research Awards</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Internships</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> Meet The CEO</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Talks</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Leadership Incubation</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Industrial Visits</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Expos</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA E-Com</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <ul className="industry-list">
              <li><img src="/images/logo/logos.png" alt="logo" /> MIG 200</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA JV Desk</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Women Empowerment</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Welfare</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Scholarships</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Industrial Development</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> MIG Documentaries</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Research Desks</li>
              <li><img src="/images/logo/logos.png" alt="logo" /> GBA Friends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}