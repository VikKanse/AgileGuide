// src/components/Introduction.jsx (UPDATED)

import React from 'react';
import { methodologiesData } from '../agileData';
import MethodologyLayout from './MethodologyLayout'; // Import the reusable layout

const Introduction = () => {
  // Fetch data for the Introduction key
  const data = methodologiesData.Introduction;

  // Pass the data object to the reusable layout component
  return <MethodologyLayout data={data} />;
};

export default Introduction;