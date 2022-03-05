import React, { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LocationSearch from './components/LocationSearch';
import callApi from './utils/callApi';
import Schedule from './components/Schedule';
import TodayReports from './components/TodayReports';
import { getCurrentLocation } from './utils/methods'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isToggleLocation, setIsToggleLocation] = useState(false);
  const [woeid, setWoeid] = useState(1252431);
  const [weatherData, setWeatherData] = useState(null);
  const [degreeUnit, setDegreeUnit] = useState(0);

  useEffect(() => {
    if (!getCurrentLocation(getPosition, getMyPosition)) {
      getMyPosition();
    }
  }, [woeid])

  const getMyPosition = () => {
    callApi('GET', null, woeid).then((res) => {
      setWeatherData(res.data);
      closeLoadingOverlay();
    })
  }

  const getPosition = (position) => {
    setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`);
    closeLoadingOverlay();
  }

  const setCurrentLocation = (location) => {
    setIsLoading(true);
    callApi('GET', null, `search/?lattlong=${location}`).then((queryRes) => {
      callApi('GET', null, queryRes.data[0].woeid).then((res) => {
        setWeatherData(res.data);
        closeLoadingOverlay();
      })
    })
  }

  const closeLoadingOverlay = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="App">
      <div className="flex flex-col lg:flex-row min-h-screen relative">
        <div className="lg:flex-2-5 overflow-hidden relative">
          <SideBar
            weatherData={weatherData}
            toggleLocation={() => setIsToggleLocation(true)}
            setCurrentLocation={(location) => setCurrentLocation(location)}
            degreeUnit={degreeUnit}
            isLoading={isLoading}
          />
          <LocationSearch
            toggleLocation={() => setIsToggleLocation(false)}
            isToggleLocation={isToggleLocation}
            setWoeid={(woeid) => setWoeid(woeid)}
          />
        </div>

        <div className="lg:flex-3-5 flex flex-col justify-between bg-secondary-color p-[52px_30px_25px] md:px-[10px] lg:p-[42px_123px_25px_154px]">
          <div className="flex justify-end">
            <div
              onClick={() => setDegreeUnit(0)}
              className={`circle-btn ${degreeUnit === 0 && 'text-secondary-color bg-white'}`}
            >
                &#8451;
            </div>
            <div
              onClick={() => setDegreeUnit(1)}
              className={`circle-btn ${degreeUnit === 1 && 'text-secondary-color bg-white'}`}
            >
                &#8457;
            </div>
          </div>

          <div className="flex-1">
            <Schedule
              weatherData={weatherData?.consolidated_weather.slice(1) || []}
              degreeUnit={degreeUnit}
              isLoading={isLoading}
            />

            <TodayReports
              weatherData={weatherData?.consolidated_weather[0] || []}
              isLoading={isLoading}
            />
          </div>

          <footer className="text-sm m-auto mt-[30px]">
            created by&#160;
            <a
              href="https://github.com/VinhTruong2001"
              className="underline"
              target="_blank"
            >
              VinhTruong2001
            </a>
            - devChallenges.io
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
