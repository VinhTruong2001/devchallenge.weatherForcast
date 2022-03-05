import React from 'react'
import LoadingOverlay from './LoadingOverlay';
import TodayReportsItem from './TodayReportsItem';

function TodayReports({ weatherData, isLoading }) {
  return (
    <div className="relative min-h-[478px]">
      <h2 className="text-[30px] lg:text-[40px] font-bold">Today's Hightlights</h2>
      {
        isLoading ? <LoadingOverlay /> :
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
            isLoading={isLoading}
            type={1}
          />
          <TodayReportsItem
            title="Humidity"
            value={weatherData?.humidity}
            unit="%"
            isLoading={isLoading}
            type={2}
          />
          <TodayReportsItem
            title="Visibility"
            value={Math.round(weatherData?.visibility * 10) / 10}
            unit=" miles"
            isLoading={isLoading}
          />
          <TodayReportsItem
            title="Air pressure"
            value={Math.round(weatherData?.air_pressure)}
            unit=" mb"
            isLoading={isLoading}
          />
        </div>
      }
    </div>
  )
}

export default TodayReports