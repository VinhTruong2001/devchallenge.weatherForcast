import React, { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LocationSearch from './components/LocationSearch';
import callApi from './utils/callApi';
import Schedule from './components/Schedule';

function App() {
  const [isToggleLocation, setIsToggleLocation] = useState(false);
  const [woeid, setWoeid] = useState(1252431);
  const [weatherData, setWeatherData] = useState(null);
  const [degreeUnit, setDegreeUnit] = useState(0)

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
            degreeUnit={degreeUnit}
          />
          <LocationSearch
            toggleLocation={() => setIsToggleLocation(false)}
            isToggleLocation={isToggleLocation}
            setWoeid={(woeid) => setWoeid(woeid)}
          />
        </div>

        <div className="lg:flex-2-3 bg-secondary-color p-[52px_30px_25px] lg:p-[42px_123px_25px_154px]">
          <div className="flex justify-end">
            <div
              onClick={() => setDegreeUnit(0)}
              className={`w-10 h-10 flex-center shadow-btn rounded-full bg-gray-500 cursor-pointer mr-3 font-bold ${degreeUnit === 0 && 'text-secondary-color bg-white'}`}
            >
                &#8451;
            </div>
            <div
              onClick={() => setDegreeUnit(1)}
              className={`w-10 h-10 flex-center shadow-btn rounded-full bg-gray-500 cursor-pointer font-bold ${degreeUnit === 1 && 'text-secondary-color bg-white'}`}
            >
                &#8457;
            </div>
          </div>
          <Schedule
            weatherData={weatherData?.consolidated_weather.slice(1) || []}
            degreeUnit={degreeUnit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
