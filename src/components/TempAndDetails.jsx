import React from 'react'
import { Cloudy, ArrowUp, ArrowDown, ThermometerSunIcon, Droplets, Wind, Sun, Sunset, Rain,  } from 'lucide-react';
import { formatToLocalTime } from '../services/WeatherService'

function TempAndDetails({weather: { dt, details, icon, timezone, name, country, weather, wind, speed, temp, humidity, temp_min, temp_max, feels_like, sunset, sunrise  }}) {
  return (
    <div>
    <div className='flex justify-center items-center pt-6 text-xl text-cyan-300'>
        <p> {details} </p>
    </div>
    <br />
    <div className='flex justify-center items-center py-3 flex-row text-white'>
    <p className='flex flex-row py-3 items-center justify-center text-white'>
    <Cloudy className=' h-9 mr-0 w-20'/>
    </p>
    <p className='text-4xl m-2 p-2'>{`${temp.tofixed()}°`}</p>
    <div className='flex flex-col space-y-2 mr-1'>
    <div className='flex font-light text-sm items-center'>
    <ThermometerSunIcon size={18} className='mr-1'/>
    <span>Temperature:</span>
    <span className='text-white font-medium ml-1'>{`${feels_like.tofixed()}°`}</span>
    </div>
    <div className='flex font-light text-sm items-center'>
    <Droplets size={18} className='mr-1'/>
    <span>Humidity:</span>
    <span className='text-white font-medium ml-1'>{`${humidity.tofixed()}%`}</span>
    </div>
    <div className='flex font-light text-sm items-center'>
    <Wind size={18} className='mr-1'/>
    <span>Wind:</span>
    <span className='text-white font-medium ml-1'>{`${speed.tofixed()}km/h`}</span>
    </div>
    </div>
    </div>
    <div className='flex flex-row justify-center items-center py-3 space-x-2 text-lg text-white'>
    <Sun size={18} className='mr-1'/>
    <p className='font-light text-sm'>
    SunRise:<span className='font-light ml-1 whitespace-nowrap'>{`${formatToLocalTime(sunrise, timezone, 'hh:mm a')} |`}</span>
    </p>
    <Sunset size={18} className='mr-1'/>
    <p className='font-light text-sm'>
    SunSet:<span className='font-light ml-1 whitespace-nowrap'>{`${formatToLocalTime(sunset, timezone, 'hh:mm a')} |`}</span>
    </p>
    <ArrowUp size={18} className='mr-1'/>
    <p className='font-light text-sm'>
    High:<span className='font-light ml-1 whitespace-nowrap'> {`${temp_max.tofixed()}°`}</span>
    </p>
    <ArrowDown size={18} className='mr-1'/>
    <p className='font-light text-sm'>
    Low:<span className='font-light ml-1 whitespace-nowrap'> {`${temp_min.tofixed()}°`} </span>
    </p>
    </div>
    </div>
  )
}

export default TempAndDetails