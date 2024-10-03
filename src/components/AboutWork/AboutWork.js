import React from 'react'
import './AboutWork.css'
import aboutWork from '../../data/aboutWork'

const AboutWork = () => {
  return (
    <div className='wrapper-AboutWork'>
        <div className='wrapper-AboutWork__treeOne'></div>
        <div className='wrapper-AboutWork__treeTwo'></div>
        <div className='wrapper-AboutWork__edging'>
            <div className='wrapper-AboutWork__edging_description'>
                <div className='wrapper-AboutWork__edging_description_title'>It is profitable to work with us</div>
                <div className='wrapper-AboutWork__edging_description_info'>
                    {aboutWork.map((aboutWork, index) => (
                        <div className='wrapper-AboutWork__edging_description_info_box' key={index}>
                            <img className='wrapper-AboutWork__edging_description_info_box_img' src={aboutWork.src}/>
                            <div className='wrapper-AboutWork__edging_description_info_box_title'>{aboutWork.title}</div>
                            <div className='wrapper-AboutWork__edging_description_info_box_desc'>{aboutWork.descript}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutWork