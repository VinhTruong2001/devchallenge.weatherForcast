import React from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getWeatherIcon, getTemperature, getDateFormat, getCurrentLocation } from '../utils/methods'
import LoadingOverlay from './LoadingOverlay';

function SideBar({ toggleLocation, weatherData, degreeUnit, setCurrentLocation, isLoading }) {

    const getPosition = (position) => {
        setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`)
    }

    return (
        <div className="bg-primary-color p-[18px_11px_50px] lg:p-[42px_46px] h-[810px] lg:h-full relative">
            <div className="absolute w-full h-[400px] top-14 left-0 lg:top-24 bg-default bg-clouds bg-center bg-[length:150%] md:bg-[length:150%_100%] z-10"></div>

            {
                isLoading ?
                    <LoadingOverlay />
                    :
                    <div className="relative h-full z-20 flex flex-col justify-between items-center">
                        {/*Search location buttons */}
                        <div className="w-full flex justify-between">
                            <div
                                onClick={toggleLocation}
                                className="w-[160px] h-[40px] flex-center shadow-btn bg-gray-500 cursor-pointer"
                            >
                                <span>Search for places</span>
                            </div>
                            <div
                                onClick={() => getCurrentLocation(getPosition)}
                                className="circle-btn"
                            >
                                <MyLocationIcon />
                            </div>
                        </div>

                        {/* Weather status img */}
                        <div className="flex-center">
                            <div
                                className={`w-[150px] h-[174px] lg:w-[202px] lg:h-[234px] bg-default ${ getWeatherIcon(weatherData?.consolidated_weather[0].weather_state_name) }`}
                            >
                            </div>
                        </div>

                        {/* Temperature */}
                        <div className="flex-center items-end">
                            <span className="text-[144px] leading-none">{ getTemperature(weatherData?.consolidated_weather[0].the_temp, degreeUnit) }</span>
                            <span className="text-[48px] text-[#A09FB1]">
                                {degreeUnit ? '\u2109' : '\u2103'}
                            </span>
                        </div>

                        {/* Weather status */}
                        <div className="text-[36px] text-[#A09FB1] font-[600]">
                            { weatherData?.consolidated_weather[0].weather_state_name }
                        </div>

                        {/* Date & Location */}
                        <div className="text-[#88869D] text-[18px]">
                            <div className="mb-8">
                                <span>Today</span>
                                <span className="mx-4">•</span>
                                <span>{getDateFormat(weatherData?.time)}</span>
                            </div>

                            <div className="flex-center">
                                <LocationOnIcon />
                                <span>{ weatherData?.title }</span>
                            </div>
                        </div>
                    </div>
            }



        </div>
    )
}

export default SideBar