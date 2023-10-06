import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

function TimeAndLocation({ weather: {dt, timezone, name, country} }) {
  return (
    <div>
        <div className='flex justify-center items-center mx-6'>
            <p className='text-white text-xl front-extra-light'>
            {formatToLocalTime(dt, timezone, 'hh:mm a')}
            </p>
            </div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
  )
}

export default TimeAndLocation