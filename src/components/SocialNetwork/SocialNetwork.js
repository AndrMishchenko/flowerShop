import React from 'react'
import './SocialNetwork.css'
import socNet from '../../data/socNet'

const SocialNetwork = () => {
  return (
    <div className='wrapper-socNet'>
        <div className='wrapper-socNet__header'>
            <div className='wrapper-socNet__header_text'>We are on Instagram</div>
            <button>@floristMan</button>
        </div>
        <div className='wrapper-socNet__boxIMG'>
            {socNet.map((img, index) => (
                <div className='wrapper-socNet__boxIMG_location'>
                    <img className='img' src={img.src}></img>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SocialNetwork