

'use client'
import React from 'react';

// 1. Import the reusable TEMPLATE component and the exported interface.
import ServicesTemplate, { ServiceContent } from './ServicesTemplate'; 

// 2. Import the UNIQUE JSON data file.

import contentData from '../../Data/GlobalGrowthData.json';

// Define the exact route path for sidebar highlighting
const ACTIVE_PATH = '/services/global-growth'; 

const GlobalGrowth = () => {
    
    const data: ServiceContent = contentData as ServiceContent;

    return (
        <ServicesTemplate 
            data={data} 
            activePath={ACTIVE_PATH}
        />
    );
};

// ✅ FIX 3: Export the page component
export default GlobalGrowth;