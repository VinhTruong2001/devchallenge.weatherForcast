import React from 'react'
import ScheduleItem from './ScheduleItem';

function Schedule({ weatherData, degreeUnit }) {
  return (
    <div className="pt-[40px] lg:p-[66px_0_72px] grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12">
        {
            weatherData?.map((data, index) =>
                <ScheduleItem
                    key={index}
                    weatherData={data}
                    index={index}
                    degreeUnit={degreeUnit}
                />
            )
        }
    </div>
  )
}

export default Schedule