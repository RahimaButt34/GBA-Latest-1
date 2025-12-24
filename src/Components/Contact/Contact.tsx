// // "use client";
// // import React from "react";
// // import contactData from "../Data/ContactData.json";

// // interface Breadcrumb {
// //   bgTitle: string;
// //   title: string;
// //   titleFontSize: string;
// //   description: string;
// //   shapes: string[];
// // }

// // interface ContactInfoItem {
// //   type: string;
// //   label: string;
// //   values: string[];
// //   icon: string;
// // }

// // interface ContactFormField {
// //   name: string;
// //   type: string;
// //   placeholder: string;
// // }

// // interface ContactForm {
// //   title: string;
// //   fields: ContactFormField[];
// //   buttonText: string;
// //   action: string;
// // }

// // interface MapData {
// //   src: string;
// //   width: number;
// //   height: number;
// // }

// // interface ContactContent {
// //   breadcrumb: Breadcrumb;
// //   contactInfo: ContactInfoItem[];
// //   contactForm: ContactForm;
// //   map: MapData;
// // }

// // const Contact = () => {
// //   const data: ContactContent = contactData as ContactContent;

// //   return (
// //     <>
// //       {/* BREADCRUMB */}
// //       <div className="rts-breadcrumb-area">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="title-area-left center">
// //                 <span className="bg-title">{data.breadcrumb.bgTitle}</span>
// //                 <h1 className="title rts-text-anime-style-1" style={{ fontSize: data.breadcrumb.titleFontSize }}>
// //                   {data.breadcrumb.title}
// //                 </h1>
// //                 <p>{data.breadcrumb.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="shape-area">
// //           {data.breadcrumb.shapes.map((shape, index) => (
// //             <img key={index} src={shape} alt="shape" className={["one", "two", "three"][index]} />
// //           ))}
// //         </div>
// //       </div>

// //       {/* CONTACT AREA */}
// //       <div className="rts-contact-area-in-page" data-animation="fadeInUp" data-delay="0.2">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             {/* CONTACT INFO */}
// //             <div className="col-lg-6">
// //               <div className="contact-info-area-wrapper-p new">
// //                 {data.contactInfo.map((item, index) => (
// //                   <div key={index} className="single-contact-info">
// //                     <div className="icon">
// //                       <i className={item.icon}></i>
// //                     </div>
// //                     <div className="info-wrapper">
// //                       <span>{item.label}</span>
// //                       {item.values.map((val, i) =>
// //                         item.type === "location" ? <p key={i} style={{ color: "#fff" }}>{val}</p> : <a key={i} href="#">{val}</a>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* CONTACT FORM */}
// //             <div className="col-lg-6">
// //               <div className="contact-form-p new">
// //                 <form className="form__content" method="post" action={data.contactForm.action} id="contact-form">
// //                   <h4 className="title">{data.contactForm.title}</h4>
// //                   {data.contactForm.fields.map((field, i) =>
// //                     field.type === "textarea" ? (
// //                       <textarea key={i} name={field.name} id={field.name} placeholder={field.placeholder}></textarea>
// //                     ) : (
// //                       <input key={i} type={field.type} name={field.name} id={field.name} placeholder={field.placeholder} />
// //                     )
// //                   )}
// //                   <button className="rts-btn btn-primary" type="submit">{data.contactForm.buttonText}</button>
// //                 </form>
// //                 <div id="form-messages"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* MAP */}
// //       <div className="google-map-area rts-section-gapTop">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="google-map">
// //                 <iframe
// //                   src={data.map.src}
// //                   width={data.map.width}
// //                   height={data.map.height}
// //                   style={{ border: 0 }}
// //                   allowFullScreen
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                 ></iframe>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* STYLES */}
// //       <style jsx>{`
// //         @media (max-width: 575px) {
// //           .contact-info-area-wrapper-p.new {
// //             margin-top: 30px !important;
// //             margin-bottom: 50px !important;
// //             display: block;
// //           }
// //         }

// //         .single-contact-info {
// //           display: flex;
// //           flex-direction: row;
// //           align-items: flex-start;
// //           gap: 12px;
// //           margin: 0 0 22px !important;
// //           flex-wrap: wrap;
// //         }

// //         .single-contact-info:last-child {
// //           margin-bottom: 0 !important;
// //         }

// //         .single-contact-info .icon {
// //           width: 45px;
// //           height: 45px;
// //           min-width: 45px;
// //           min-height: 45px;
// //           background: #fff;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           flex-shrink: 0;
// //         }

// //         .single-contact-info .icon i {
// //           font-size: 18px;
// //           line-height: 1;
// //         }

// //         .single-contact-info .info-wrapper {
// //           flex: 1;
// //           min-width: 220px;
// //           text-align: left;
// //         }

// //         .single-contact-info .info-wrapper a {
// //           font-size: 15px !important;
// //           word-break: break-word;
// //           display: block;
// //           line-height: 1.6;
// //         }

// //         .single-contact-info .info-wrapper p {
// //           font-size: 14px !important;
// //           line-height: 1.5;
// //         }

// //         .contact-section-title {
// //           text-align: center;
// //           font-size: 17px;
// //           margin-bottom: 14px;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default Contact;



// "use client";
// import React from "react";
// import contactData from "../Data/ContactData.json";

// interface Breadcrumb {
//   bgTitle: string;
//   title: string;
//   titleFontSize: string;
//   description: string;
//   shapes: string[];
// }

// interface ContactInfoItem {
//   type: string;
//   label: string;
//   values: string[];
//   icon: string;
// }

// interface ContactFormField {
//   name: string;
//   type: string;
//   placeholder: string;
// }

// interface ContactForm {
//   title: string;
//   fields: ContactFormField[];
//   buttonText: string;
//   action: string;
// }

// interface MapData {
//   src: string;
//   width: number;
//   height: number;
// }

// interface ContactContent {
//   breadcrumb: Breadcrumb;
//   contactInfo: ContactInfoItem[];
//   contactForm: ContactForm;
//   map: MapData;
// }

// const Contact = () => {
//   const data: ContactContent = contactData as ContactContent;

//   return (
//     <>
//       {/* BREADCRUMB */}
//       <div className="rts-breadcrumb-area" data-animation="fadeInUp" data-delay="0.2">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left center">
//                 <span className="bg-title animated fadeIn">{data.breadcrumb.bgTitle}</span>
//                 <h1
//                   className="title rts-text-anime-style-1 animated fadeIn"
//                   style={{ fontSize: data.breadcrumb.titleFontSize }}
//                 >
//                   {data.breadcrumb.title}
//                 </h1>
//                 <p className="animated fadeIn">{data.breadcrumb.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shape-area">
//           {data.breadcrumb.shapes.map((shape, index) => (
//             <img
//               key={index}
//               src={shape}
//               alt="shape"
//               className={["one", "two", "three"][index]}
//               data-animation="fadeIn"
//               data-delay={`${0.2 + index * 0.1}s`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* CONTACT AREA */}
//       <div className="rts-contact-area-in-page" data-animation="fadeInUp" data-delay="0.2">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* CONTACT INFO */}
//             <div className="col-lg-6">
//               <div className="contact-info-area-wrapper-p new">
//                 {data.contactInfo.map((item, index) => (
//                   <div
//                     key={index}
//                     className="single-contact-info"
//                     data-animation="fadeInUp"
//                     data-delay={`${0.2 + index * 0.1}s`}
//                   >
//                     <div className="icon animated fadeIn">
//                       <i className={item.icon}></i>
//                     </div>
//                     <div className="info-wrapper animated fadeIn">
//                       <span>{item.label}</span>
//                       {item.values.map((val, i) =>
//                         item.type === "location" ? (
//                           <p key={i} style={{ color: "#fff" }}>
//                             {val}
//                           </p>
//                         ) : (
//                           <a key={i} href="#">
//                             {val}
//                           </a>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CONTACT FORM */}
//             <div className="col-lg-6">
//               <div className="contact-form-p new" data-animation="fadeInUp" data-delay="0.3">
//                 <form
//                   className="form__content animated fadeIn"
//                   method="post"
//                   action={data.contactForm.action}
//                   id="contact-form"
//                 >
//                   <h4 className="title animated fadeIn">{data.contactForm.title}</h4>
//                   {data.contactForm.fields.map((field, i) =>
//                     field.type === "textarea" ? (
//                       <textarea
//                         key={i}
//                         name={field.name}
//                         id={field.name}
//                         placeholder={field.placeholder}
//                         className="animated fadeIn"
//                       ></textarea>
//                     ) : (
//                       <input
//                         key={i}
//                         type={field.type}
//                         name={field.name}
//                         id={field.name}
//                         placeholder={field.placeholder}
//                         className="animated fadeIn"
//                       />
//                     )
//                   )}
//                   <button className="rts-btn btn-primary animated fadeIn" type="submit">
//                     {data.contactForm.buttonText}
//                   </button>
//                 </form>
//                 <div id="form-messages"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAP */}
//       <div className="google-map-area rts-section-gapTop" data-animation="fadeInUp" data-delay="0.4">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="google-map animated fadeIn">
//                 <iframe
//                   src={data.map.src}
//                   width={data.map.width}
//                   height={data.map.height}
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* STYLES */}
//       <style jsx>{`
//         @media (max-width: 575px) {
//           .contact-info-area-wrapper-p.new {
//             margin-top: 30px !important;
//             margin-bottom: 50px !important;
//             display: block;
//           }
//         }

//         .single-contact-info {
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           gap: 12px;
//           margin: 0 0 22px !important;
//           flex-wrap: wrap;
//         }

//         .single-contact-info:last-child {
//           margin-bottom: 0 !important;
//         }

//         .single-contact-info .icon {
//           width: 45px;
//           height: 45px;
//           min-width: 45px;
//           min-height: 45px;
//           background: #fff;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .single-contact-info .icon i {
//           font-size: 18px;
//           line-height: 1;
//         }

//         .single-contact-info .info-wrapper {
//           flex: 1;
//           min-width: 220px;
//           text-align: left;
//         }

//         .single-contact-info .info-wrapper a {
//           font-size: 15px !important;
//           word-break: break-word;
//           display: block;
//           line-height: 1.6;
//         }

//         .single-contact-info .info-wrapper p {
//           font-size: 14px !important;
//           line-height: 1.5;
//         }

//         .contact-section-title {
//           text-align: center;
//           font-size: 17px;
//           margin-bottom: 14px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Contact;



"use client";
import React from "react";
import contactData from "../Data/ContactData.json";

interface Breadcrumb {
  bgTitle: string;
  title: string;
  titleFontSize: string;
  description: string;
  shapes: string[];
}

interface ContactInfoItem {
  type: string;
  label: string;
  values: string[];
  icon: string;
}

interface ContactFormField {
  name: string;
  type: string;
  placeholder: string;
}

interface ContactForm {
  title: string;
  fields: ContactFormField[];
  buttonText: string;
  action: string;
}

interface MapData {
  src: string;
  width: number;
  height: number;
}

interface ContactContent {
  breadcrumb: Breadcrumb;
  contactInfo: ContactInfoItem[];
  contactForm: ContactForm;
  map: MapData;
}

const Contact = () => {
  const data: ContactContent = contactData as ContactContent;

  return (
    <>
      {/* BREADCRUMB */}
      <div className="rts-breadcrumb-area" data-animation="fadeInUp" data-delay="0.2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center">
                <span className="bg-title animated fadeIn">{data.breadcrumb.bgTitle}</span>
                <h1
                  className="title rts-text-anime-style-1 animated fadeIn"
                  style={{ fontSize: data.breadcrumb.titleFontSize }}
                >
                  {data.breadcrumb.title}
                </h1>
                <p className="animated fadeIn">{data.breadcrumb.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area">
          {data.breadcrumb.shapes.map((shape, index) => (
            <img
              key={index}
              src={shape}
              alt="shape"
              className={["one", "two", "three"][index]}
              data-animation="fadeIn"
              data-delay={`${0.2 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>

      {/* CONTACT AREA */}
      <div className="rts-contact-area-in-page" data-animation="fadeInUp" data-delay="0.2">
        <div className="container">
          <div className="row align-items-stretch"> {/* Changed align-items-center to stretch */}
            {/* CONTACT INFO */}
            <div className="col-lg-6 mb-[30px] lg:mb-0">
              <div className="contact-info-area-wrapper-p new equal-height-card">
                {data.contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="single-contact-info"
                    data-animation="fadeInUp"
                    data-delay={`${0.2 + index * 0.1}s`}
                  >
                    <div className="icon animated fadeIn">
                      <i className={item.icon}></i>
                    </div>
                    <div className="info-wrapper animated fadeIn">
                      <span>{item.label}</span>
                      {item.values.map((val, i) => {
                        if (item.type === "location") {
                          return (
                            <p key={i} style={{ color: "#fff" }}>
                              {val}
                            </p>
                          );
                        }

                        if (item.type === "email") {
                          return (
                            <a key={i} href={`mailto:${val}`}>
                              {val}
                            </a>
                          );
                        }

                        if (item.type === "phone") {
                          return (
                            <a key={i} href={`tel:${val.replace(/\s+/g, "")}`}>
                              {val}
                            </a>
                          );
                        }

                        return (
                          <a key={i} href="#">
                            {val}
                          </a>
                        );
                      })}

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="col-lg-6">
              <div className="contact-form-p new equal-height-card" data-animation="fadeInUp" data-delay="0.3">
                <form
                  className="form__content animated fadeIn"
                  method="post"
                  action={data.contactForm.action}
                  id="contact-form"
                >
                  <h4 className="title animated fadeIn">{data.contactForm.title}</h4>
                  {data.contactForm.fields.map((field, i) =>
                    field.type === "textarea" ? (
                      <textarea
                        key={i}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        className="animated fadeIn"
                      ></textarea>
                    ) : (
                      <input
                        key={i}
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        className="animated fadeIn"
                      />
                    )
                  )}
                  <button className="rts-btn btn-primary animated fadeIn" type="submit">
                    {data.contactForm.buttonText}
                  </button>
                </form>
                <div id="form-messages"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="google-map-area rts-section-gapTop" data-animation="fadeInUp" data-delay="0.4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map animated fadeIn">
                <iframe
                  src={data.map.src}
                  width={data.map.width}
                  height={data.map.height}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* Forces both cards to fill the height of the row */
        .equal-height-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centers content vertically */
          padding: 40px !important; /* Adjust padding to match your prototype */
          box-sizing: border-box;
        }

        @media (max-width: 575px) {
          .contact-info-area-wrapper-p.new {
            margin-top: 30px !important;
            margin-bottom: 50px !important;
            display: block;
          }
          .equal-height-card {
            height: auto; /* Allow cards to stack on mobile */
          }
        }

        .single-contact-info {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
          margin: 0 0 22px !important;
          flex-wrap: wrap;
        }

        .single-contact-info:last-child {
          margin-bottom: 0 !important;
        }

        .single-contact-info .icon {
          width: 45px;
          height: 45px;
          min-width: 45px;
          min-height: 45px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .single-contact-info .icon i {
          font-size: 18px;
          line-height: 1;
        }

        .single-contact-info .info-wrapper {
          flex: 1;
          min-width: 220px;
          text-align: left;
        }

        .single-contact-info .info-wrapper a {
          font-size: 15px !important;
          word-break: break-word;
          display: block;
          line-height: 1.6;
        }

        .single-contact-info .info-wrapper p {
          font-size: 14px !important;
          line-height: 1.5;
        }

        .contact-section-title {
          text-align: center;
          font-size: 17px;
          margin-bottom: 14px;
        }
      `}</style>
    </>
  );
};

export default Contact;