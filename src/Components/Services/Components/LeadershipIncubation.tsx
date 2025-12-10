


// 'use client'
// import React from 'react';


// import ServicesTemplate, { ServiceContent } from './ServicesTemplate'; 
// //import contentData from '../../Data/BusinessDeligationData.json';


// //import businessData from '../../Data/BusinessDeligationData.json';
// import contentData from '../../Data/BusinessDeligationData.json';

// // Define the exact route path for sidebar highlighting
// // This corresponds to the 'business-deligation.html' href path in the sidebar
// const ACTIVE_PATH = '/business-deligation'; 

// const BusinessDeligation = () => {
    
//     // Type assert the imported data
//     const data: ServiceContent = contentData as ServiceContent;

//     return (
//         // 3. Render the template and pass the UNIQUE data and ACTIVE_PATH via props
//         <ServicesTemplate 
//             data={data} 
//             activePath={ACTIVE_PATH}
//         />
//     );
// };

// export default BusinessDeligation;

'use client'
import React from 'react';

// 1. Import the reusable TEMPLATE component and the exported interface.
import ServicesTemplate, { ServiceContent } from './ServicesTemplate'; 

// 2. Import the UNIQUE JSON data file.
// Path: from src/Components/Services/Components/ to src/Components/Data/
import contentData from '../../Data/LeadershipIncubationData.json';

// Define the exact route path for sidebar highlighting
const ACTIVE_PATH = '/services/leadership-incubation'; 

const LeadershipIncubation = () => {
    
    const data: ServiceContent = contentData as ServiceContent;

    return (
        <ServicesTemplate 
            data={data} 
            activePath={ACTIVE_PATH}
        />
    );
};

// ✅ FIX 3: Export the page component
export default LeadershipIncubation;