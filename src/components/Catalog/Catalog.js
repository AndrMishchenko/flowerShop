import React from 'react'
import '../Catalog/Catalog.css'
import data from '../../data/data'

const Catalog = () => {
  return (
    <>
      <div className='wrapper-catalog'>
        {data.map((flowers, index) => (
          <div key={index} className='wrapper-catalog__position'>
            <img src={flowers.src} alt={flowers.name} />
            <p className='wrapper-catalog__position_text'>{flowers.name}</p>
          </div>
        ))}
      </div>        
    </>
  )
}

export default Catalog
