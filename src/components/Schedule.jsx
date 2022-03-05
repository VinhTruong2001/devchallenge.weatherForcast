import React from 'react'
import LoadingOverlay from './LoadingOverlay';
import ScheduleItem from './ScheduleItem';

function Schedule({ weatherData, degreeUnit, isLoading }) {
  return (
    <div className="min-h-[260px] relative py-[40px] lg:p-[30px_0] grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-3 lg:gap-12">
        { isLoading ? <LoadingOverlay /> :
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