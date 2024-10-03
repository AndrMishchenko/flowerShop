import React, { useState } from 'react';
import './Additionally.css';
import add from '../../data/additional';

const Additionally = ({ setCandyCount, setTotalAmount, addItemToOrder }) => {
    const [position, setPosition] = useState(0);
    const [sumAddition, setSumAddition] = useState(0);

    const addToCart = (item) => {
        setPosition(prev => prev + 1);
        setSumAddition(prev => prev + item.prize);
        setCandyCount(prev => prev + 1);
        setTotalAmount(prev => prev + item.prize);
        addItemToOrder(item);
    };

    return (
        <div className='wrapper-additional'>
            <div className='wrapper-additional__title'>
                <div className='wrapper-additional__title_text'>They buy with flowers</div>
                <div className='wrapper-additional__title_nav'>
                    <div className='wrapper-additional__title_nav_text'>Catalog</div>
                    <div className='wrapper-additional__title_nav_arrow'></div>
                </div>
            </div>
            <div className='wrapper-additional__flower'>
                {add.map((item, index) => (
                    <div key={index} className='wrapper-additional__flower_box'>
                        <img src={item.src} alt={item.name} className='wrapper-additional__flower_box_el' />
                        <div className='wrapper-additional__flower_box_text'>{item.name}</div>
                        <div className='wrapper-additional__flower_box_prize'>${item.prize}</div>
                        <button className='wrapper-additional__flower_box_btn' onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Additionally;
