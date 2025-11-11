// src/components/LeSS.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const LeSS = () => {
    // Fetch data specifically for the LeSS key
    const data = methodologiesData.LeSS;
    return <MethodologyLayout data={data} />;
};

export default LeSS;