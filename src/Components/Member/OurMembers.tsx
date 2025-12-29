"use client";
import React from "react";
import membersData from "../Data/OurMemberData.json";

interface MembersContent {
  pageTitle: string;
  banner: {
    bgTitle: string;
    title: string;
    titleFontSize: string;
  };
  introSection: {
    leftTitle: string;
    rightText: string;
    rightTextFontSize: string;
  };
  membersLogos: string[];
}

const OurMembers = () => {
  const data: MembersContent = membersData as MembersContent;

  return (
    <>
      {/* BANNER */}
      <div className="partner-breadcrumb bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area">
                <h1
                  className="title"
                  style={{ color: "aliceblue", fontSize: data.banner.titleFontSize }}
                >
                  {data.banner.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="rts-service-details-area-main-bottom members-intro-section pt--50 pb--80">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <h2 className="members-left-title">{data.introSection.leftTitle}</h2>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <p
                className="members-right-text"
                style={{ fontSize: data.introSection.rightTextFontSize }}
              >
                {data.introSection.rightText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MEMBERS GRID */}
      <div className="brand-box">
        <div className="brand-table">
          {data.membersLogos.map((logo, index) => (
            <div key={index} className="brand-item">
              <img src={logo} alt={`Member-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .members-left-title {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          color: #000;
          margin-bottom: 20px;
        }

        .members-right-text {
          font-size: 16px;
          line-height: 1.8;
          color: #333;
          max-width: 650px;
        }

        .members-intro-section {
          margin-top: 40px;
        }

        .brand-table {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #e1e1e1;
          width: 80%;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .brand-table {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .brand-item {
          border: 1px solid #e1e1e1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          background: #fff;
        }

        @media (max-width: 768px) {
          .brand-item {
            padding: 30px;
          }
        }

        .brand-item img {
          width: 120px;
          height: auto;
          object-fit: contain;
        }

        .brand-box {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
        }
      `}</style>
      {/* STYLES */}
      <style jsx>{`
        .members-left-title {
          font-size: 32px; /* Adjusted to match scale of Pic 2 */
          font-weight: 700;
          line-height: 1.2;
          color: #000;
          margin-bottom: 20px;
          /* Ensures heading starts exactly at the container edge */
          padding-left: 0; 
        }

        .members-right-text {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          /* Aligns paragraph top with heading top */
          margin-top: 5px; 
          max-width: 100%; 
        }

        .members-intro-section {
          margin-top: 60px;
          margin-bottom: 40px;
        }

        .brand-table {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #e1e1e1;
          /* Match this width to the Bootstrap container width for perfect alignment */
          width: 100%; 
          max-width: 1320px; 
          margin: 0 auto;
        }

        @media (max-width: 1400px) {
          .brand-table { max-width: 1140px; }
        }

        @media (max-width: 1200px) {
          .brand-table { max-width: 960px; }
        }

        @media (max-width: 992px) {
          .brand-table { 
            max-width: 720px;
            grid-template-columns: repeat(2, 1fr); 
          }
        }

        .brand-item {
          border: 1px solid #e1e1e1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          background: #fff;
        }

        .brand-item img {
          width: 120px;
          height: auto;
          object-fit: contain;
        }

        .brand-box {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 15px; /* Matches standard container gutter */
          margin-bottom: 80px;
        }
      `}</style>
    </>
  );
};

export default OurMembers;
