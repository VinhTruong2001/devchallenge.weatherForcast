import React from 'react'
import AutorenewSharpIcon from '@mui/icons-material/AutorenewSharp';


function LoadingOverlay({ hasBlackOverlay, fontSize }) {
  return (
      <div className={`absolute top-0 bottom-0 left-0 right-0 z-50 flex-center ${hasBlackOverlay ? 'bg-black/[0.5]' : 'bg-transparent'}`}>
        <div
            className={`animate-spin origin-center text-white flex-center ${fontSize === 'small' ? 'text-[50px]' : 'text-[100px]'} `}
        >
            <AutorenewSharpIcon fontSize="inherit"/>
        </div>
    </div>
  )
}

export default LoadingOverlay