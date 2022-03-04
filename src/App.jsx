import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LocationSearch from './components/LocationSearch';

function App() {
  const [isToggleLocation, setIsToggleLocation] = useState(false);

  return (
    <div className="App">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:flex-1-3 overflow-hidden relative">
          <SideBar
            toggleLocation={() => setIsToggleLocation(true)}
          />
          <LocationSearch
            toggleLocation={() => setIsToggleLocation(false)}
            isToggleLocation={isToggleLocation}
          />
        </div>

        <div className="lg:flex-2-3 bg-secondary-color">

        </div>
      </div>
    </div>
  );
}

export default App;
