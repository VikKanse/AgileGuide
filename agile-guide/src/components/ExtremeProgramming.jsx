// src/components/ExtrememProgramming.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const XP = () => {
    // Fetch data specifically for the Scrum key
    const data = methodologiesData.XP;
    return <MethodologyLayout data={data} />;
};

export default XP;