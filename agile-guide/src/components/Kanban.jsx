// src/components/Kanban.jsx

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout';

const Kanban = () => {
    // Fetch data specifically for the Kanban key
    const data = methodologiesData.Kanban;
    return <MethodologyLayout data={data} />;
};

export default Kanban;