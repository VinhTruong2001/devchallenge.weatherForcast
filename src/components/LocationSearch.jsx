import React, { useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import callApi from '../utils/callApi';

function LocationSearch({ isToggleLocation, toggleLocation, setWoeid }) {
    const searchRef = useRef();
    const [results, setResults] = useState([]);

    const searchLocation = () => {
        callApi('GET', null, `search/?query=${searchRef.current.value}`).then((res) => {
            setResults(res.data);
        })
    }

    const clearSearch = () => {
        searchRef.current.value = '';
        setResults([]);
    }

    const changeCity = (woeid) => {
        setWoeid(woeid);
        toggleLocation();
        clearSearch();
    }

    return (
        <div
            className={`bg-primary-color p-[60px_13px] lg:p-[82px_47px_10px] absolute h-full w-full top-0 z-30 p- ${isToggleLocation ? 'scroll-in' : 'scroll-out'}`}
        >
            {/* Close icon */}
            <div
                onClick={toggleLocation}
                className="absolute top-4 right-4 lg:top-5 lg:right-14 cursor-pointer"
            >
                <CloseIcon fontSize="large"/>
            </div>

            {/* Search bar */}
            <div className="flex justify-between">
                <div className="p-4 border border-[#E7E7EB] flex flex-1">
                    <SearchIcon />
                    <input
                        ref={searchRef}
                        type="search"
                        name="location"
                        placeholder='Search location'
                        className="outline-none bg-transparent ml-4 flex-1"
                    />
                </div>
                <div
                    onClick={searchLocation}
                    className="flex-center ml-3 bg-[#3C47E9] p-[14px] cursor-pointer"
                >
                    <span>Search</span>
                </div>
            </div>

            {/* Result */}
            <div className="max-h-full mt-9 lg:mt-14">
                <div className="flex justify-between">
                    <h4 className="font-bold">Results ({results.length})</h4>
                    <span
                        onClick={clearSearch}
                        className="hover:underline cursor-pointer"
                    >
                        clear
                    </span>
                </div>
                <ul className="pl-2 pt-2 overflow-y-auto max-h-full">
                    {
                        results?.map((city, index) =>
                            <li
                                className="my-4 text-xl cursor-pointer font-[600] hover:text-[#FEEC64]"
                                key={index}
                                onClick={() => changeCity(city.woeid)}
                            >
                                {city.title}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default LocationSearch