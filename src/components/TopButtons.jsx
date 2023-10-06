import React from 'react'

function TopButtons(setQuery) {
    const cities = [
        {
            id:1,
            title:'New York',
        },
        {
            id:2,
            title:'London',
        },
        {
            id:3,
            title:'Bombay',
        },
        {
            id:4,
            title:'Cairo',
        },
        {
            id:5,
            title:'Sydney',
        },
        {
            id:6,
            title:'Tokyo',
        },
    ]




  return (
    <div className='flex justify-center items-center my-6'>
        {
            cities.map(city => {
                return <button key={city.id} className='px-4 py-2 rounded text-white text-lg font-medium' onClick={() => setQuery({q:city.title})}>{city.title}</button>
            })
        }
    </div>
  )
}

export default TopButtons