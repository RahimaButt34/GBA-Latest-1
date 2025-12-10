// 'use client'
// import React from 'react';

// // 1. Import the reusable TEMPLATE component and the exported interface.
// // Path: from app/services/global-reach/ to Components/Services/
// import ServicesTemplate, { ServiceContent } from './ServicesTemplate'; 

// // 2. Import the UNIQUE JSON data file.
// // Path: from app/services/global-reach/ to Components/Data/
// //import globalReachData from '../../../Components/Data/GlobalReachData.json';
// import contentData from '../../Data/GlobalReachData.json';
// // Define the exact route path for sidebar highlighting
// const ACTIVE_PATH = '/service-details'; // Matches the 'service-details.html' link

// const GlobalReachPage = () => {
    
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

// export default GlobalReachPage;

'use client'
import React from 'react';

// 1. Import the reusable TEMPLATE component and the exported interface.
import ServicesTemplate, { ServiceContent } from './ServicesTemplate'; 

// 2. Import the UNIQUE JSON data file.
// Path: from src/Components/Services/Components/ to src/Components/Data/
import contentData from '../../Data/GlobalReachData.json';

// Define the exact route path for sidebar highlighting
const ACTIVE_PATH = '/services/service-details';

const GlobalReach = () => {
    
    const data: ServiceContent = contentData as ServiceContent;

    return (
        <ServicesTemplate 
            data={data} 
            activePath={ACTIVE_PATH}
        />
    );
};

// ✅ FIX 3: Export the page component
export default GlobalReach;