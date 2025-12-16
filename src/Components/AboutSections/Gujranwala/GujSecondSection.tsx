// 'use client'
// import React from 'react';

// const GujranwalaIndustries = () => {
    
//     const iconPath = '/images/logo/logos.png'; // Assuming a single icon for all items

//     const industryColumns = [
//         [
//             "Rice & Agro Processing",
//             "Ceramics",
//             "Sanitary Fittings",
//             "Sanitaryware",
//             "Cookware & Utensils",
//             "Home Appliances",
//             "Kitchen Appliances",
//             "Electric Fans",
//             "Textile & Apparel"
//         ],
//         [
//             "Pipes & Fittings",
//             "Pumps & Motors",
//             "Automobile Parts",
//             "Plastic Furniture",
//             "Plastic Kitchenware",
//             "Metal Processing",
//             "Switches & Transformers",
//             "Heavy Engineering",
//             "Chemicals & Detergents"
//         ],
//         [
//             "Cutlery & Hunting Knives",
//             "Carpets & Rugs",
//             "Paper & Paper Board",
//             "Real Estate & Construction",
//             "Beauty Products",
//             "Food & Beverages",
//             "Agri Implements",
//             "Steel Security Equipment",
//             "LPG Cylinders Valves"
//         ]
//     ];

//     return (
//         <>
//             {/* ---------------------------------------------------------------------- */}
//             {/* 1. EMBEDDED CSS (Global and Responsive Styles) */}
//             {/* ---------------------------------------------------------------------- */}
//             <style jsx global>{`
//                 /* Base Styles for Title */
//                 .title-style-three .title {
//                     font-size: 60px;
//                     font-weight: 900;
//                     display: inline-block;
//                     margin: 0;
//                 }

//                 .title-style-three .solid-text {
//                     color: #0d1c2e; /* dark navy */
//                 }

//                 .title-style-three .outline-text {
//                     color: transparent;
//                     -webkit-text-stroke: 1.5px #0d1c2e; /* outline effect */
//                     text-stroke: 1.5px #0d1c2e;
//                     margin-left: 10px;
//                 }

//                 .title-style-three .pre {
//                     display: block;
//                     font-size: 14px;
//                     letter-spacing: 2px;
//                     color: #666;
//                     margin-bottom: 10px;
//                 }

//                 .title-style-three.center {
//                     text-align: center;
//                 }

//                 /* Industry List Styles */
//                 .industry-list {
//                     list-style: none; /* Removes the bullet dots */
//                     padding: 0;
//                     margin: 0;
//                 }

//                 .industry-list li {
//                     display: flex; /* Use flex to align icon and text */
//                     align-items: center;
//                     gap: 10px; /* Space between icon & text */
//                     margin-bottom: 10px; /* Spacing between list items */
//                     font-size: 16px;
//                     font-weight: 600;
//                 }

//                 .industry-list img {
//                     width: 20px; /* Icon size */
//                 }
                
//                 /* Mobile Fixes */
//                 @media (max-width: 768px) {
//                     /* 2. Also ensure the solid part of the text is reduced in size */
//                     /* Applying reduction to both solid and outline text for balance */
//                     .title-style-three .solid-text,
//                     .title-style-three .outline-text {
//                         font-size: 32px !important; 
//                         line-height: 1.1; 
//                         /* Adjusting margin for outline text on mobile */
//                         margin-left: 8px !important; 
//                     }

//                     /* 3. Center the entire h2 title */
//                     .title-style-three .title {
//                         text-align: center !important;
//                     }

//                     /* Ensure the main container spacing is also responsive */
//                     .working-process-area-three {
//                         margin-left: 15px !important; 
//                         margin-right: 15px !important;
//                         margin-top: 60px !important; 
//                         margin-bottom: 60px !important;
//                     }
//                 }
//             `}</style>

//             {/* ---------------------------------------------------------------------- */}
//             {/* 2. WORKING PROCESS SECTION (Industries of Gujranwala) */}
//             {/* ---------------------------------------------------------------------- */}
//             <div 
//                 className="working-process-area-three rts-section-gap working-process-bg" 
//                 style={{ 
//                     alignItems: 'center', 
//                     marginTop: '120px', 
//                     marginBottom: '120px', 
//                     marginLeft: '60px', 
//                     marginRight: '60px' 
//                 }}
//             >
//                 <div className="container mx-auto px-4">
//                     <div className="row mt-40">
//                         {/* Title Block */}
//                         <div className="title-style-three center w-full">
//                             <h2 className="title" style={{ marginBottom: '20px', fontSize: '48px' }}>
//                                 <span className="solid-text">Industries of </span>
//                                 <span className="outline-text">Gujranwala</span>
//                             </h2>
//                             <p style={{ fontSize: '15px', lineHeight: '1.6' }} className="max-w-3xl mx-auto">
//                                 From engineering goods and ceramics to home appliances and textiles, Gujranwala’s industries represent a diverse and rapidly expanding 
//                                 <br/> 
//                                 manufacturing base that drives both domestic growth and international trade
//                             </p>
//                         </div>
//                     </div>

//                     {/* Industry List Columns */}
//                     <div className="row justify-content-center mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
//                         {industryColumns.map((column, colIndex) => (
//                             <div 
//                                 key={colIndex} 
//                                 className="col-lg-4 col-md-6 mb-4" 
//                                 // Resetting custom style for better responsiveness
//                                 style={colIndex === 0 ? { alignItems: 'start' } : {}}
//                             >
//                                 <ul className="industry-list">
//                                     {column.map((industry, itemIndex) => (
//                                         <li key={itemIndex}>
//                                             <img src={iconPath} alt="" />
//                                             {industry}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GujranwalaIndustries;


'use client'
import React from 'react';

const GujranwalaIndustries = () => {
    
    const iconPath = '/images/logo/logos.png'; // Assuming a single icon for all items

    const industryColumns = [
        [
            "Rice & Agro Processing",
            "Ceramics",
            "Sanitary Fittings",
            "Sanitaryware",
            "Cookware & Utensils",
            "Home Appliances",
            "Kitchen Appliances",
            "Electric Fans",
            "Textile & Apparel"
        ],
        [
            "Pipes & Fittings",
            "Pumps & Motors",
            "Automobile Parts",
            "Plastic Furniture",
            "Plastic Kitchenware",
            "Metal Processing",
            "Switches & Transformers",
            "Heavy Engineering",
            "Chemicals & Detergents"
        ],
        [
            "Cutlery & Hunting Knives",
            "Carpets & Rugs",
            "Paper & Paper Board",
            "Real Estate & Construction",
            "Beauty Products",
            "Food & Beverages",
            "Agri Implements",
            "Steel Security Equipment",
            "LPG Cylinders Valves"
        ]
    ];

    return (
        <>
            {/* ---------------------------------------------------------------------- */}
            {/* 1. EMBEDDED CSS (Global and Responsive Styles) */}
            {/* ---------------------------------------------------------------------- */}
            <style jsx global>{`
                /* Base Styles for Title */
                .title-style-three .title {
                    font-size: 60px;
                    font-weight: 900;
                    display: inline-block;
                    margin: 0;
                }

                .title-style-three .solid-text {
                    color: #0d1c2e; /* dark navy */
                }

                .title-style-three .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1.5px #0d1c2e; /* outline effect */
                    text-stroke: 1.5px #0d1c2e;
                    margin-left: 10px;
                }

                .title-style-three .pre {
                    display: block;
                    font-size: 14px;
                    letter-spacing: 2px;
                    color: #666;
                    margin-bottom: 10px;
                }

                .title-style-three.center {
                    text-align: center;
                }

                /* Industry List Styles */
                .industry-list {
                    list-style: none; /* Removes the bullet dots */
                    padding: 0;
                    margin: 0;
                }

                .industry-list li {
                    display: flex; /* Use flex to align icon and text */
                    align-items: center;
                    gap: 10px; /* Space between icon & text */
                    margin-bottom: 10px; /* Spacing between list items */
                    font-size: 16px;
                    font-weight: 600;
                }

                .industry-list img {
                    width: 20px; /* Icon size */
                }
                
                /* Mobile Fixes */
                @media (max-width: 768px) {
                    /* 2. Also ensure the solid part of the text is reduced in size */
                    /* Applying reduction to both solid and outline text for balance */
                    .title-style-three .solid-text,
                    .title-style-three .outline-text {
                        font-size: 32px !important; 
                        line-height: 1.1; 
                        /* Adjusting margin for outline text on mobile */
                        margin-left: 8px !important; 
                    }

                    /* 3. Center the entire h2 title */
                    .title-style-three .title {
                        text-align: center !important;
                    }

                    /* Ensure the main container spacing is also responsive */
                    .working-process-area-three {
                        margin-left: 15px !important; 
                        margin-right: 15px !important;
                        margin-top: 60px !important; 
                        margin-bottom: 60px !important;
                    }
                }
                
                /* FIX: Added CSS rule for the background to ensure it scales correctly */
                /* Assuming the background image is responsible for the side design. 
                   If the background is not an image, you'll need to adapt this. 
                   If it's an image, this should help maintain its presence across zoom levels.
                */
                .working-process-bg {
                    /* The background image URL should be defined here, 
                       but since it's not provided, I'll use a placeholder/standard rule. 
                       If the background is applied elsewhere, these properties 
                       may need to be moved to that selector.
                    */
                    background-position: center center;
                    background-repeat: no-repeat;
                    /* This is the key change: 'contain' or '100vw' can help maintain 
                       the background image's presence across different zoom levels, 
                       but 'cover' might be better if the background is a large design. 
                       Let's use 'contain' to ensure the whole design is visible.
                       I will use a standard responsive background setup.
                    */
                    background-size: 100% 100%; /* Stretches the background to cover the element */
                    /* A fallback to ensure it covers the area */
                    /* The original style is likely in an external CSS file, 
                       so I'll try to override the most common issues.
                    */
                }
            `}</style>

            {/* ---------------------------------------------------------------------- */}
            {/* 2. WORKING PROCESS SECTION (Industries of Gujranwala) */}
            {/* ---------------------------------------------------------------------- */}
            <div 
                className="working-process-area-three rts-section-gap working-process-bg" 
                // Removed the style prop to allow background styles from the CSS block to take effect, 
                // and to prevent style conflicts unless they are essential margin/padding.
                // Keeping essential spacing for layout
                style={{ 
                    alignItems: 'center', 
                    marginTop: '120px', 
                    marginBottom: '120px', 
                    // Keeping these margins as they are present in your original code
                    marginLeft: '60px', 
                    marginRight: '60px',
                    // Adding min-height or min-width might be necessary if the background relies on viewport size
                    // minHeight: '100vh', 
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="row mt-40">
                        {/* Title Block */}
                        <div className="title-style-three center w-full">
                            <h2 className="title" style={{ marginBottom: '20px', fontSize: '48px' }}>
                                <span className="solid-text">Industries of </span>
                                <span className="outline-text">Gujranwala</span>
                            </h2>
                            <p style={{ fontSize: '15px', lineHeight: '1.6' }} className="max-w-3xl mx-auto">
                                From engineering goods and ceramics to home appliances and textiles, Gujranwala’s industries represent a diverse and rapidly expanding 
                                <br/> 
                                manufacturing base that drives both domestic growth and international trade
                            </p>
                        </div>
                    </div>

                    {/* Industry List Columns */}
                    <div className="row justify-content-center mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
                        {industryColumns.map((column, colIndex) => (
                            <div 
                                key={colIndex} 
                                className="col-lg-4 col-md-6 mb-4" 
                                // Resetting custom style for better responsiveness
                                style={colIndex === 0 ? { alignItems: 'start' } : {}}
                            >
                                <ul className="industry-list">
                                    {column.map((industry, itemIndex) => (
                                        <li key={itemIndex}>
                                            <img src={iconPath} alt="" />
                                            {industry}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GujranwalaIndustries;