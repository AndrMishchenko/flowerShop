import React from 'react'
import './Reviews.css'
import reviews from '../../data/reviews'

const Reviews = () => {
  return (
    <div className='wrapper-reviews'>
      
        <div className='wrapper-reviews__title'>Our reviews</div>
      
      <div className='wrapper-reviews__block'>
        {reviews.map((rev, index) => (
          <div className='wrapper-reviews__block_box' key={index}>
            <div className='wrapper-reviews__block_box_head'>
              <img src={rev.src}></img>
              <div className='wrapper-reviews__block_box_head_boxName'>
                <div className='wrapper-reviews__block_box_head_boxName_name'>{rev.name}</div>
                <img src={rev.grade}></img>
              </div>
            </div>
            <div className='wrapper-reviews__block_box_info'>{rev.descript}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews