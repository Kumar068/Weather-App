import React from 'react'
import { Search,  MapPin, Map } from 'lucide-react';
import { toast } from 'react-toastify';
import { useState } from 'react';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState('');
  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({q:city});
      setUnits('metric');
    }
  }
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching location');
      navigator.geolocation.getCurrentPosition((Position) => {
        toast.success('Successfully Fetched location');
        let lat = Position.coords.latitude;
        let lon = Position.coords.longitude;
        setQuery({q:`${lat},${lon}`});
      });
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  }
  return (
    <div className='flex justify-center flex-row my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={e => setCity(e.currentTarget.value)} type="text" className='p-2 w-full px-4 py-2 shadow-xl rounded text-white text-xl font-light focus:outline-none first-letter:capitalize' placeholder='Search for Any City' />
            <Search size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleSearchClick} />
            <MapPin size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleLocationClick}/>
            <Map size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name='metric' className=' text-white text-light font-medium mx-1 transition ease-out hover:scale-125' onClick={handleUnitsChange} >°C </button>
            <p className=' text-white text-light'>|</p>
            <button name='imperial' className=' text-white text-light font-medium mx-1 transition ease-out hover:scale-125' onClick={handleUnitsChange}>°F </button>
        </div>
    </div>
  )
}

export default Inputs