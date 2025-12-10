


"use client";

export default function FlagshipList() {
  return (
    <div className="working-process-area-three rts-section-gap working-process-bg"
         style={{ alignItems: "center" }}>

      <style>
        {`
          .industry-list { list-style: none; padding: 0; margin: 0; }
          .industry-list li { align-items: center; gap: 10px; margin-bottom: 10px; font-size: 16px; }
          .industry-list img { width: 20px; }
          .title-style-three .title { font-size: 60px; font-weight: 900; text-transform: uppercase; }
          .title-style-three .solid-text { color: #0d1c2e; }
          .title-style-three .outline-text {
            color: transparent;
            -webkit-text-stroke: 1.5px #0d1c2e;
            text-stroke: 1.5px #0d1c2e;
            margin-left: 10px;
          }
          .title-style-three.center { text-align: center; }
        `}
      </style>

      <div className="container">
        <div className="row mt--40">
          <div className="title-style-three center">

            <h2 className="title" style={{ marginBottom: "20px" }}>
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
              <li><img src="/images/logo/logos.png" /> Pakistan Products House</li>
              <li><img src="/images/logo/logos.png" /> Global Growth Windows</li>
              <li><img src="/images/logo/logos.png" /> International Tech Gateways</li>
              <li><img src="/images/logo/logos.png" /> BRI Centre</li>
              <li><img src="/images/logo/logos.png" /> GBA Business Networking</li>
              <li><img src="/images/logo/logos.png" /> GBA Trade Delegations</li>
              <li><img src="/images/logo/logos.png" /> GBA Trade Desks</li>
              <li><img src="/images/logo/logos.png" /> GBA Events</li>
              <li><img src="/images/logo/logos.png" /> GBA Seminars & Workshops</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <ul className="industry-list">
              <li><img src="/images/logo/logos.png" /> GBA Launch Pad</li>
              <li><img src="/images/logo/logos.png" /> GBA Research Awards</li>
              <li><img src="/images/logo/logos.png" /> GBA Internships</li>
              <li><img src="/images/logo/logos.png" /> Meet The CEO</li>
              <li><img src="/images/logo/logos.png" /> GBA Talks</li>
              <li><img src="/images/logo/logos.png" /> GBA Leadership Incubation</li>
              <li><img src="/images/logo/logos.png" /> GBA Industrial Visits</li>
              <li><img src="/images/logo/logos.png" /> GBA Expos</li>
              <li><img src="/images/logo/logos.png" /> GBA E-Com</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <ul className="industry-list">
              <li><img src="/images/logo/logos.png" /> MIG 200</li>
              <li><img src="/images/logo/logos.png" /> GBA JV Desk</li>
              <li><img src="/images/logo/logos.png" /> GBA Women Empowerment</li>
              <li><img src="/images/logo/logos.png" /> GBA Welfare</li>
              <li><img src="/images/logo/logos.png" /> GBA Scholarships</li>
              <li><img src="/images/logo/logos.png" /> GBA Industrial Development</li>
              <li><img src="/images/logo/logos.png" /> MIG Documentaries</li>
              <li><img src="/images/logo/logos.png" /> GBA Research Desks</li>
              <li><img src="/images/logo/logos.png" /> GBA Friends</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}