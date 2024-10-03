import React, { useState } from 'react';
import './Footer.css';
import insta from '../../image/insta.svg';
import tg from '../../image/teleg.svg';
import whats from '../../image/wats.svg';
import data from '../../data/data';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const choise = () => {
        if (validateEmail(email)) {
            alert(`Subscribed with ${email}`);
            setError(''); 
        } else {
            setError('Please enter a valid email'); 
        }
        setEmail(''); 
    };

    return (
        <div className='wrapper-footer'>
            <div className='wrapper-footer__box'>
                <div className='wrapper-footer__box_contactBlock'>
                    <div className='wrapper-footer__box_contactBlock_phone'>
                        <div>Phone</div>
                        <div>+1 (896) 715-4576</div>
                        <div>+1 (896) 715-4577</div>
                    </div>
                    <div className='wrapper-footer__box_contactBlock_socialMedia'>
                        <img src={insta} alt='Instagram' />
                        <img src={tg} alt='Telegram' />
                        <img src={whats} alt='WhatsApp' />
                    </div>
                </div>
                <div className='wrapper-footer__box_flowersBlock'>
                    {data.map((catalog, index) => (
                        <div key={index} className='wrapper-footer__box_flowersBlock_catalog'>{catalog.name}</div>
                    ))}
                </div>
                <div className='wrapper-footer__box_address'>
                    <div className='wrapper-footer__box_address_emailBox'>
                        <div className='wrapper-footer__box_address_emailBox_title'>
                            Stay up to date with the best offers and latest news
                        </div>
                        <div className='wrapper-footer__box_address_emailBox_input'>
                            <input 
                                type='email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Enter your email'
                            />
                            <button onClick={choise}>Subscribe</button> 
                        </div>
                        {error && <div className='error-message'>{error}</div>}
                    </div>
                    <div className='wrapper-footer__box_address_schedule'>
                        <div className='wrapper-footer__box_address_schedule_address'>Ottawa 200 Kent St</div>
                        <div className='wrapper-footer__box_address_schedule_email'>order@floristMan.ca</div>
                        <div className='wrapper-footer__box_address_schedule_time'>
                            <div>MN-FR 8am - 10pm</div>
                            <div>ST-SN 10am - 10pm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
