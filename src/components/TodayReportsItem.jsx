import React from 'react'
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';

function TodayReportsItem({title, value, unit, windData, type}) {

  const getWindDirectionIcon = () => {
    return Math.round(windData.windDirection) - 90;
  }

  return (
    <div className="bg-primary-color p-[22px_0_37px] flex flex-col items-center">
      <div className="text-center">{title}</div>
      <div className="flex-1">
        <span className="text-[64px] font-bold">{value}</span>
        <span className="text-[36px]">{unit}</span>
      </div>

      {
        /* Wind direction */
        type === 1 &&
        <div className="flex items-center">
          <div
            className="circle-btn"
            style={{
              transform: `rotate(${getWindDirectionIcon()}deg)`
            }}
          >
            <DoubleArrowSharpIcon />
          </div>
          <span>{windData.windDirectionCompass}</span>
        </div>
      }

      {
        /* Humidity progress bar */
        type === 2 &&
        <div className="px-[50px] w-full relative text-[#A09FB1] font-bold text-[12px]">
            <div className="flex justify-between">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="relative overflow-hidden h-2 rounded-full">
              <progress
                value={value}
                max="100"
                className="w-full absolute top-0"
              ></progress>
            </div>
            <span className="absolute right-[50px]">%</span>
        </div>
      }
    </div>
  )
}

export default TodayReportsItem