
// // CtaArea.tsx
// import React from 'react';

// // Define the component's props if needed, but for this static example, we can use an empty interface.
// interface CtaAreaProps {}

// const CtaArea: React.FC<CtaAreaProps> = () => {
//   // Image path relative to the 'publ  ic' directory
//   const backgroundImagePath = '/images/cta/10.webp';
   

//   return (
//     // Note: The original had bg_cts-10 and bg_iamge classes, which presumably set the background image.
//     // In React, we'll use an inline style to set the background URL directly for simplicity and robustness.
//     <div
//       className="rts-cts-area-start bg_cts-10  bg_iamge ptb--95 mt--160"
//       style={{
//         backgroundImage: `url(${backgroundImagePath})`,
        
//         // Assuming your original CSS set these properties:
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
        
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="cta-style-10-wrapper">
//               <div className="left-side">
//                 <span>Subscribe Newsletter</span>
//                 <h3 className="title">
//                   Stay Updated with <br /> the Latest News!
//                 </h3>
//               </div>
//               <div className="right-side">
//                 <form action="#">
//                   {/* The input style has been moved inline from the original snippet. 
//                       It's better practice to define this in CSS. */}
//                   <input
//                     style={{ color: 'white' }}
//                     type="text"
//                     placeholder="Enter Email Address"
//                   />
//                   <button className="rts-btn btn-primary btn-white">
//                     Subscribe Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CtaArea;



'use client';

import React from 'react';

const NewsletterCTA: React.FC = () => {
    // Handling form submission
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your subscription logic here
        console.log("Subscription submitted");
    };

    return (
        /* rts cta area start */
        <div className="rts-cts-area-start bg_cts-10 bg_iamge ptb--95 mt--160">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cta-style-10-wrapper">
                            <div className="left-side">
                                <span>Subscribe Newsletter</span>
                                <h3 className="title">
                                    Stay Updated with <br /> the Latest News!
                                </h3>
                            </div>
                            <div className="right-side">
                                <form onSubmit={handleSubscribe}>
                                    <input 
                                        style={{ color: 'white' }} 
                                        type="email" 
                                        placeholder="Enter Email Address" 
                                        required 
                                    />
                                    <button 
                                        type="submit" 
                                        className="rts-btn btn-primary btn-white"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterCTA;
