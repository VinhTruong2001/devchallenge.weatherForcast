import React from 'react'
import { getWeatherIcon, getTemperature, getDateFormat } from '../utils/methods'

function ScheduleItem({ weatherData, index, degreeUnit }) {
    return (
        <div className="h-[220px] bg-primary-color p-[18px_22px] text-[16px] flex flex-col">
            <div className="text-center">
                {
                    index === 0 ?
                        'Tomorrow':
                        getDateFormat(null, index)
                }
            </div>
            <div className={`w-full m-auto flex-1 bg-default bg-[length:90px] bg-[center_top] ${getWeatherIcon(weatherData?.weather_state_name)}`}></div>
            <div className="flex justify-between">
                <span>
                    {
                        getTemperature(weatherData?.max_temp, degreeUnit)
                        +
                        (degreeUnit ? '\u2109' : '\u2103')
                    }
                </span>
                <span className="text-[#A09FB1]">
                    {
                        getTemperature(weatherData?.min_temp, degreeUnit)
                        +
                        (degreeUnit ? '\u2109' : '\u2103')
                    }
                </span>
            </div>
        </div>
    )
}

export default ScheduleItem