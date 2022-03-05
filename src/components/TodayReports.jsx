import React from 'react'
import TodayReportsItem from './TodayReportsItem';

function TodayReports({ weatherData }) {
  return (
    <div>
      <h2 className="text-[30px] lg:text-[40px] font-bold">Today's Hightlights</h2>
      <div className="pt-[32px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        <TodayReportsItem
          title="Wind status"
          value={Math.round(weatherData?.wind_speed)}
          unit= "mph"
          windData={
            {
              windDirection: weatherData?.wind_direction,
              windDirectionCompass: weatherData?.wind_direction_compass,
            }
          }
          type={1}
        />
        <TodayReportsItem
          title="Humidity"
          value={weatherData?.humidity}
          unit="%"
          type={2}
        />
        <TodayReportsItem
          title="Visibility"
          value={Math.round(weatherData?.visibility * 10) / 10}
          unit=" miles"
        />
        <TodayReportsItem
          title="Air pressure"
          value={Math.round(weatherData?.air_pressure)}
          unit=" mb"
        />
      </div>
    </div>
  )
}

export default TodayReports