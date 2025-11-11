// src/components/SAFe.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const SAFe = () => {
    // Fetch data specifically for the SAFe key
    const data = methodologiesData.SAFe;
    return <MethodologyLayout data={data} />;
};

export default SAFe;