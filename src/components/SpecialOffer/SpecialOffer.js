import React, { useState } from 'react';
import './SpecialOffer.css';
import flowers from '../../data/flowers';

const SpecialOffer = ({ setFlowerCount, setTotalAmount, addItemToOrder }) => {
    const [counter, setCounter] = useState(0);
    const [flowersSum, setFlowersSum] = useState(0);

    const addToCart = (flower) => {
        setCounter(prev => prev + 1);
        setFlowersSum(prevSum => prevSum + flower.prize);
        setFlowerCount(prev => prev + 1);
        setTotalAmount(prev => prev + flower.prize);
        addItemToOrder(flower);
    };

    return (
        <div className='wrapper-specOffer'>
            <div className='wrapper-specOffer__title'>
                <div className='wrapper-specOffer__title_text'>Special Offer</div>
                <div className='wrapper-specOffer__title_nav'>
                    <div className='wrapper-specOffer__title_nav_text'>Catalog</div>
                    <div className='wrapper-specOffer__title_nav_arrow'></div>
                </div>
            </div>
            <div className='wrapper-specOffer__flower'>
                {flowers.map((flower, index) => (
                    <div key={index} className='wrapper-specOffer__flower_box'>
                        <img src={flower.src} alt={flower.name} className='wrapper-specOffer__flower_box_el' />
                        <div className='wrapper-specOffer__flower_box_text'>{flower.name}</div>
                        <div className='wrapper-specOffer__flower_box_prize'>${flower.prize}</div>
                        <button onClick={() => addToCart(flower)} className='wrapper-specOffer__flower_box_btn'>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffer;
