import React, { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LocationSearch from './components/LocationSearch';
import callApi from './utils/callApi';

function App() {
  const [isToggleLocation, setIsToggleLocation] = useState(false);
  const [woeid, setWoeid] = useState(1252431);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    callApi('GET', null, woeid).then((res) => {
      console.log(res.data);
      setWeatherData(res.data);
    })
  }, [woeid])

  return (
    <div className="App">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:flex-1-3 overflow-hidden relative">
          <SideBar
            weatherData={weatherData}
            toggleLocation={() => setIsToggleLocation(true)}
          />
          <LocationSearch
            toggleLocation={() => setIsToggleLocation(false)}
            isToggleLocation={isToggleLocation}
            setWoeid={(woeid) => setWoeid(woeid)}
          />
        </div>

        <div className="lg:flex-2-3 bg-secondary-color">

        </div>
      </div>
    </div>
  );
}

export default App;
