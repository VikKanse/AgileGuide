// src/components/SearchInput.jsx

import React, { useState } from 'react';

// This component takes a prop function (onSearchChange) from the parent
const SearchInput = ({ onSearchChange }) => {
    // 1. Local state to manage the input text
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
        
        // 2. Pass the new term up to the parent component (App.jsx)
        onSearchChange(newTerm);
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                id="searchInput"
                placeholder="Search methodologies (Scrum, Kanban, etc.)..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;