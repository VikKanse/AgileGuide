// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { methodologiesData } from './agileData'; // Import agile data here
import SearchInput from './components/SearchInput';
import Introduction from './components/Introduction';
import Scrum from './components/Scrum';
import Kanban from './components/Kanban';
import LeSS from './components/LeSS';
import XP from './components/ExtremeProgramming';
import SAFe from './components/SAFe';
import FlightLevels from './components/FlightLevels';
import AgileGlossary from './components/AgileGlossary';
import './App.css';

// A placeholder component for your methodology pages
const MethodologyPage = ({ methodologyName }) => {
  const data = methodologiesData[methodologyName];

  if (!data) {
    return <h1>404 - Methodology Not Found</h1>;
  }
  
  // contains rendering logic
  // Display the title and description.
  return (
    <div id="content-area">
      {/* Search Bar will be placed here */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* We will loop through and render sections here next */}
    </div>
  );
};

function App() {
  // New state to store the term entered by the user

  const [currentSearchTerm, setCurrentSearchTerm] = useState('');

  // 4. Function to receive the search term from the SearchInput component
  const handleSearchChange = (term) => {
    setCurrentSearchTerm(term);
  };

  // Get the names of all methodologies to build the navigation
  const methodologyNames = Object.keys(methodologiesData);

  // 5. Filtering Logic
  const filteredNames = methodologyNames.filter(name => 
    name.toLowerCase().includes(currentSearchTerm.toLowerCase())
  );

  return (
    <div id="app-container">

      <div className="search-bar-top-wrapper"> 
        {/* 6. Place the search component */}
        <SearchInput onSearchChange={handleSearchChange} />
      </div>

      <div className='content-and-sidebar-wrapper'>

          {/* Sidebar Component */}
                <aside id="sidebar">
                  <h2>Agile Methodologies</h2>
                    <ul className="nav-section">
                      {/* Map over the names to create links */}
                      {filteredNames.map((name) => (
                        <li key={name}>
                          {/* NavLink is a special link component from React Router */}
                          <NavLink 
                            to={`/${name.toLowerCase().replace(/\s/g, '-')}`}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                          >
                            {name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                </aside>

                      {/* Main Content Area: Routes swap components here */}
      <main className="main-content">
        <Routes>
          
          {/* Default Route */}
          <Route path="/" element={<Introduction />} />
          
          {/* Dedicated Routes */}
          <Route path="/introduction" element={<Introduction />} /> 
          <Route path="/glossary" element={<AgileGlossary />} />
          <Route path="/scrum" element={<Scrum />} /> 
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/xp" element={<XP />} />
          <Route path="/less" element={<LeSS />} />
          <Route path="/safe" element={<SAFe />} />
          <Route path="/flightlevels" element={<FlightLevels />} />

          {/* Fallback for other methodologies until their components are built */}
          {/* This uses a helper function to find names not explicitly routed above */}
          {methodologyNames
            .filter(name => !["Introduction", "AgileGlossary", "Scrum", "Kanban", "XP", "LeSS", "SAFe", "FlightLevels", "Lean"].includes(name))
            .map((name) => (
              <Route
                key={name}
                path={`/${name.toLowerCase().replace(/\s/g, '-')}`}
                element={<h1 style={{paddingTop: '20px'}}>Content for {name} coming soon!</h1>}
              />
          ))}
          
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;