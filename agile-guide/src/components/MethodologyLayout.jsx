// src/components/MethodologyLayout.jsx

import React from 'react';
// We'll pass the data into this component from the individual methodology component

const MethodologyLayout = ({ data }) => {

    if (!data) {
        return <div className="main-content-wrapper"><h1>Content Not Found</h1></div>;
    }

    // Temporary Search Bar HTML (Will be replaced by a Search component later)
    // const searchBarHtml = (
    //     <div className="search-container">
    //         <input type="text" id="searchInput" placeholder="Search methodologies..." />
    //     </div>
    // );
    
    return (
        <div className="main-content-wrapper">
            {/* {searchBarHtml} */}
            
            <h1>{data.title}</h1>
            
            {/* Render the main description */}
            <p>{data.description}</p>
            
            {/* Render sections with the dangerouslySetInnerHTML fix */}
            <div className="level-section">
                {/* Ensure data.sections exists before mapping */}
                {data.sections && Object.keys(data.sections).map((level) => {
                    const section = data.sections[level];
                    return (
                        <div key={level}>
                            <h3>{section.title} ({level})</h3>
                            {/* CRITICAL FIX: Renders the stored HTML content */}
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MethodologyLayout;