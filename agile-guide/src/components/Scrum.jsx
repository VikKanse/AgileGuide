// src/components/Scrum.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const Scrum = () => {
    // Fetch data specifically for the Scrum key
    const data = methodologiesData.Scrum;
    return <MethodologyLayout data={data} />;
};

export default Scrum;