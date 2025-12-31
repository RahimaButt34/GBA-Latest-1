
// 'use client'
// // ./src/Components/AboutSections/Gujranwala/Counter.tsx
// import Image from 'next/image';
// import React from 'react';

// // --- 1. CSS Styles as a String (UPDATED FOR MARGIN/CENTERING) ---
// const counterStyles = `
// /* Ensure no conflict with global styles by using a unique class or high specificity */
// .counter-section-wrapper {
//     margin-bottom: 90px;
//     margin-top: 90px;
    
//     /* 💡 CHANGES START HERE: To center content and add side margins */
//     max-width: 1200px; /* Set a maximum width for the content (e.g., 1200px or your theme's container width) */
//     margin-left: auto; /* Center the block horizontally */
//     margin-right: auto; /* Center the block horizontally */
//     padding: 0 20px; /* Add padding on the left and right sides for spacing */
//     /* 💡 CHANGES END HERE */
// }

// .counter-row {
//     display: flex;
//     justify-content: space-between;
//     gap: 60px;
//     padding: 60px 0;
// }

// .counter-box {
//     display: flex;
//     align-items: center;
//     gap: 18px;
//     flex: 1;
// }

// .counter-icon {
//     width: 65px;
//     height: 65px;
//     background: #f4f4f4;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-shrink: 0;
// }

// .counter-icon img {
//     width: 32px;
// }

// .counter-text {
//     font-size: 12px;
//     font-weight: 600;
//     color: #707070;
//     letter-spacing: 0.5px;
//     margin: 0;
//     /* Inline styles from original HTML */
//     line-height: 1.1 !important; 
//     margin-top: -4px;
// }

// .counter-divider {
//     width: 1px;
//     height: 100px;
//     background: #e5e5e5;
// }

// @media (max-width: 768px) {
//     .counter-row {
//         flex-direction: column;
//         gap: 35px;
//     }
//     .counter-divider {
//         display: none;
//     }
//     .counter-section-wrapper {
//         margin-top: 5px !important;
//         margin-bottom: 5px !important;
//         /* Mobile: Ensure padding is kept for small screens */
//         padding: 0 15px;
//     }
// }
// `;


// // --- 2. Data Array ---
// const counterData = [
//   {
//     iconSrc: '/images/counterup/icon/01.svg', 
//     number: '21000+',
//     text: 'SMES & COTTAGE INDUSTRIES',
//   },
//   {
//     iconSrc: '/images/counterup/icon/02.svg',
//     number: '500K+',
//     text: 'SKILLED LABOUR',
//   },
//   {
//     iconSrc: '/images/counterup/icon/03.svg',
//     number: '150+',
//     text: 'PRODUCT CATEGORIES',
//   },
//   {
//     iconSrc: '/images/counterup/icon/04.svg',
//     number: '80+',
//     text: 'EXPORT DESTINATIONS',
//   },
// ];


// // --- 3. React Component ---
// const Counter = () => {
//   // Common styles extracted from original HTML inline styles
//   const numberStyle: React.CSSProperties = { 
//     fontWeight: 800, 
//     fontSize: '25px', 
//     marginBottom: '2px' 
//   };
//   const textStyle: React.CSSProperties = { 
//     fontSize: '8px' 
//   };

//   return (
//     <div className="counter-section-wrapper"> 
      
//       {/* 💡 Embed the CSS string directly in a <style> tag. */}
//       <style>{counterStyles}</style>

//       <div className="counter-row">
//         {counterData.map((item, index) => (
//           <React.Fragment key={index}> 
//             {/* Counter Box */}
//             <div className="counter-box">
//               <div className="counter-icon">
//                 <Image 
//                   src={item.iconSrc} 
//                   alt={item.text} 
//                   width={32} 
//                   height={32} 
//                 />
//               </div>
//               <div>
//                 {/* Apply the inline styles for the exact number look */}
//                 <h2 className="counter-number" style={numberStyle}>
//                   {item.number}
//                 </h2>
//                 {/* Apply the text class and inline style for the exact text look */}
//                 <p className="counter-text" style={textStyle}>
//                   {item.text}
//                 </p>
//               </div>
//             </div>

//             {/* Divider - Render only if it's not the last item */}
//             {index < counterData.length - 1 && (
//               <div className="counter-divider"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Counter;



// 'use client'
// // ./src/Components/AboutSections/Gujranwala/Counter.tsx
// import Image from 'next/image';
// import React from 'react';

// // --- 1. CSS Styles (UPDATED FOR REDUCED GAPS) ---
// const counterStyles = `
// .counter-section-wrapper {
//     /* 💡 REDUCED MARGINS: Changed from 90px to 20px */
//     margin-bottom: 20px;
//     margin-top: 20px;
    
//     max-width: 1200px;
//     margin-left: auto;
//     margin-right: auto;
//     padding: 0 20px;
// }

// .counter-row {
//     display: flex;
//     justify-content: space-between;
//     gap: 60px;
//     /* 💡 REDUCED PADDING: Changed from 60px to 10px */
//     padding: 10px 0;
// }

// .counter-box {
//     display: flex;
//     align-items: center;
//     gap: 18px;
//     flex: 1;
// }

// .counter-icon {
//     width: 65px;
//     height: 65px;
//     background: #f4f4f4;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-shrink: 0;
// }

// .counter-icon img {
//     width: 32px;
// }

// .counter-text {
//     font-weight: 600;
//     color: #707070;
//     letter-spacing: 0.5px;
//     margin: 0;
//     line-height: 1.1 !important; 
//     margin-top: -4px;
// }

// .counter-divider {
//     width: 1px;
//     height: 80px; /* Slightly shorter divider */
//     background: #e5e5e5;
// }

// @media (max-width: 768px) {
//     .counter-row {
//         flex-direction: column;
//         gap: 25px;
//         padding: 20px 0;
//     }
//     .counter-divider {
//         display: none;
//     }
//     .counter-section-wrapper {
//         margin-top: 10px !important;
//         margin-bottom: 10px !important;
//         padding: 0 15px;
//     }
// }
// `;


// // --- 2. Data Array ---
// const counterData = [
//   {
//     iconSrc: '/images/counterup/icon/01.svg', 
//     number: '21000+',
//     text: 'SMES & COTTAGE INDUSTRIES',
//   },
//   {
//     iconSrc: '/images/counterup/icon/02.svg',
//     number: '500K+',
//     text: 'SKILLED LABOUR',
//   },
//   {
//     iconSrc: '/images/counterup/icon/03.svg',
//     number: '150+',
//     text: 'PRODUCT CATEGORIES',
//   },
//   {
//     iconSrc: '/images/counterup/icon/04.svg',
//     number: '80+',
//     text: 'EXPORT DESTINATIONS',
//   },
// ];


// const Counter = () => {
//   // 💡 INCREASED SIZES: Made numbers and text larger as requested
//   const numberStyle: React.CSSProperties = { 
//     fontWeight: 800, 
//     fontSize: '32px', // Increased from 25px
//     marginBottom: '0px',
//     color: '#0D1C2E'
//   };
  
//   const textStyle: React.CSSProperties = { 
//     fontSize: '11px', // Increased from 8px
//     textTransform: 'uppercase'
//   };

//   return (
//     <div className="counter-section-wrapper"> 
//       <style>{counterStyles}</style>

//       <div className="counter-row">
//         {counterData.map((item, index) => (
//           <React.Fragment key={index}> 
//             <div className="counter-box">
//               <div className="counter-icon">
//                 <Image 
//                   src={item.iconSrc} 
//                   alt={item.text} 
//                   width={32} 
//                   height={32} 
//                 />
//               </div>
//               <div>
//                 <h2 className="counter-number" style={numberStyle}>
//                   {item.number}
//                 </h2>
//                 <p className="counter-text" style={textStyle}>
//                   {item.text}
//                 </p>
//               </div>
//             </div>

//             {index < counterData.length - 1 && (
//               <div className="counter-divider"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Counter;
'use client'
// ./src/Components/AboutSections/Gujranwala/Counter.tsx
import Image from 'next/image';
import React from 'react';

const counterStyles = `
.counter-section-wrapper {
    margin-bottom: 20px;
    margin-top: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
}

.counter-row {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 10px 0;
}

.counter-box {
    display: flex;
    align-items: center;
    gap: 18px;
    flex: 1;
}

.counter-icon {
    width: 65px;
    height: 65px;
    background: #f4f4f4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.counter-icon img {
    width: 32px;
}

.counter-text {
    font-weight: 600;
    color: #707070;
    letter-spacing: 0.5px;
    margin: 0;
    line-height: 1.1 !important; 
    margin-top: -4px;
}

.counter-divider {
    width: 1px;
    height: 80px;
    background: #e5e5e5;
}

/* --- MOBILE RESPONSIVENESS --- */
@media (max-width: 991px) {
    .counter-row {
        gap: 30px;
    }
    .counter-number {
        font-size: 24px !important; /* Slightly smaller for tablets */
    }
}

@media (max-width: 768px) {
    .counter-row {
        flex-direction: column;
        gap: 25px;
        padding: 20px 0;
        align-items: flex-start; /* Aligns content to left on mobile */
    }
    .counter-divider {
        display: none;
    }
    .counter-section-wrapper {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
        padding: 0 25px;
    }
    .counter-box {
        width: 100%;
    }
}
`;

const counterData = [
  {
    iconSrc: '/images/counterup/icon/01.svg', 
    number: '21000+',
    text: 'SMES & COTTAGE INDUSTRIES',
  },
  {
    iconSrc: '/images/counterup/icon/02.svg',
    number: '500K+',
    text: 'SKILLED LABOUR',
  },
  {
    iconSrc: '/images/counterup/icon/03.svg',
    number: '150+',
    text: 'PRODUCT CATEGORIES',
  },
  {
    iconSrc: '/images/counterup/icon/04.svg',
    number: '80+',
    text: 'EXPORT DESTINATIONS',
  },
];

const Counter = () => {
  const numberStyle: React.CSSProperties = { 
    fontWeight: 800, 
    fontSize: '32px', 
    marginBottom: '0px',
    color: '#0D1C2E'
  };
  
  const textStyle: React.CSSProperties = { 
    fontSize: '11px', 
    textTransform: 'uppercase'
  };

  return (
    <div className="counter-section-wrapper"> 
      <style>{counterStyles}</style>

      <div className="counter-row">
        {counterData.map((item, index) => (
          <React.Fragment key={index}> 
            <div className="counter-box">
              <div className="counter-icon">
                <Image 
                  src={item.iconSrc} 
                  alt={item.text} 
                  width={32} 
                  height={32} 
                />
              </div>
              <div>
                <h2 className="counter-number" style={numberStyle}>
                  {item.number}
                </h2>
                <p className="counter-text" style={textStyle}>
                  {item.text}
                </p>
              </div>
            </div>

            {index < counterData.length - 1 && (
              <div className="counter-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Counter;