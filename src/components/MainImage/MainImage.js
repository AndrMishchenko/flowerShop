import React from 'react'
import './MainImage.css'

const MainImage = () => {
  return (
    <div className='mainIMGWrapper'>
      <div className='mainIMG'>
        <div className='description'>
            <div className='description__first'>We bring beauty and good mood to your home</div>
            <div className='description__second'>Especially for you - fast delivery and great prices</div>
            <button className='btn'>
                <div className='btn__text'>Order flowers</div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default MainImage