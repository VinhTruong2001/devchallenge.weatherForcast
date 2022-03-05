import React from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SideBar({ toggleLocation, weatherData }) {

    const getWeatherIcon = () => {
        getDateFormat();
        return weatherData?.consolidated_weather[0].weather_state_name
                .toLowerCase()
                .replace(' ', '');
    }

    const getTemperature = () => {
        return Math.round(weatherData?.consolidated_weather[0].the_temp || 0)
    }

    const getDateFormat = () => {
        const today = new Date(weatherData?.time);
        const dateFormated = today.toString().split(' ');
        return `${dateFormated[0]} ${dateFormated[2]} ${dateFormated[1]}`;
    }

    return (
        <div className="bg-primary-color p-[18px_11px_50px] lg:p-[42px_46px] h-[810px] lg:h-full relative">
            <div className="absolute h-[400px] top-14 lg:top-24 left-[-120px] right-[-120px] bg-default bg-clouds z-10"></div>

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
                        onClick={toggleLocation}
                        className="w-10 h-10 flex-center shadow-btn rounded-full bg-gray-500 cursor-pointer"
                    >
                        <MyLocationIcon />
                    </div>
                </div>

                {/* Weather status img */}
                <div className="flex-center">
                    <div
                        className={`w-[150px] h-[174px] lg:w-[202px] lg:h-[234px] bg-default ${ getWeatherIcon() }`}
                    >
                    </div>
                </div>

                {/* Temperature */}
                <div className="flex-center items-end">
                    <span className="text-[144px] leading-none">{ getTemperature() }</span>
                    <span className="text-[48px] text-[#A09FB1]">&#8451;</span>
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
                        <span>{getDateFormat()}</span>
                    </div>

                    <div className="flex-center">
                        <LocationOnIcon />
                        <span>{ weatherData?.title }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar