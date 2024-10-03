import React from 'react'
import howWork from '../../data/howWork'
import './HowWork.css'

const HowWork = () => {
  return (
    <div className='wrapper-howWorks'>
        <div className='wrapper-howWorks__treeOne'></div>
        <div className='wrapper-howWorks__edging'>
            <div className='wrapper-howWorks__edging_description'>
                <div className='wrapper-howWorks__edging_description_title'>How does this work</div>
                <div className='wrapper-howWorks__edging_description_info'>
                    {howWork.map((aboutWork, index) => (
                        <div className='wrapper-howWorks__edging_description_info_box' key={index}>
                            <div className='wrapper-howWorks__edging_description_info_box_block'>
                                <img className='wrapper-howWorks__edging_description_info_box_block_img' src={aboutWork.src}/>
                                <div className='wrapper-howWorks__edging_description_info_box_block_title'>{aboutWork.title}</div>
                            </div>
                            <div className='wrapper-howWorks__edging_description_info_box_desc'>{aboutWork.descript}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWork