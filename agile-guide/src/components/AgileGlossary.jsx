// src/components/AgileGlossary.jsx

import React, { useState, useMemo } from 'react';
import { glossaryData } from '../agileGlossaryData'; 
// NOTE: We do not need DOMPurify here as the glossary content is static text, not HTML content.

const AgileGlossary = () => {
    // State for functionality (we'll implement this fully later)
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('term'); 

    // Use useMemo to filter and sort the data for display
    const filteredAndSortedData = useMemo(() => {
        let currentData = [...glossaryData]; 
        
        // Default Sort: Alphabetical by Term
        currentData.sort((a, b) => a.term.localeCompare(b.term)); 
        
        return currentData;
    }, [searchTerm, sortBy]);

    return (
        <div className="main-content-wrapper">
            
            <h1>Agile Glossary & Key Terms</h1>
            <p>A quick reference guide to common terminology used across various Agile frameworks.</p>

            {/* Placeholder for Search Input Bar (will be made functional later) */}
            <div className="top-search-bar glossary-search-bar">
                <input 
                    type="text" 
                    placeholder="Search terms or definitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Temporary handler
                />
            </div>
            
            {/* Displaying Results */}
            <div className="level-section">
                <h3>Terms ({filteredAndSortedData.length} total)</h3>
                
                {filteredAndSortedData.map(item => (
                    <div key={item.term} className="glossary-term">
                        <h4 style={{marginBottom: '5px'}}>{item.term}</h4>
                        <p>{item.definition}</p>
                        <span className="glossary-related-tags">Tags: {item.related.join(', ')}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgileGlossary;