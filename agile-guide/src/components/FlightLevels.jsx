// src/components/FlightLevels.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const FlightLevels = () => {
    // Fetch data specifically for the FlightLevels key
    const data = methodologiesData.FlightLevels;
    return <MethodologyLayout data={data} />;
};

export default FlightLevels;