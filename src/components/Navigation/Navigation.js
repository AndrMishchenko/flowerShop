import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ candy, currentFlowers, totalAmount, selectedItems, setSelectedItems, setTotalAmount }) => {
    const [city, setCity] = useState('Ottava');
    const [cart, setCart] = useState(false);
    const [blockOrder, setBlockOrder] = useState(false)
    const [orderData, setOrderData] = useState(true);
    const [flowersData, setFlowersData] = useState(true)
    const [enterAddress, setEnterAddress] = useState(true);
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('')
    const [orderNumber, setOrderNumber] = useState(null)
    const [errors, setErrors] = useState({ email: '', phone: '', address: '' });

    const current = selectedItems.length;

    const openCart = () => {
        setCart(true);
    }

    const closeCart = () => {
        setCart(false);
    };

    const remove = (index) => {
        const itemPrice = selectedItems[index].prize;
        const newSelectedItems = selectedItems.filter((_, i) => i !== index);
        
        setSelectedItems(newSelectedItems);
        setTotalAmount(prev => prev - itemPrice - itemPrice);
    };

    const nextStep = () => {
        setEnterAddress(true)
        setOrderData(false)
        setBlockOrder(true)
        setOrderNumber(generateOrderNumber())
    }

    const closeCartSecondStep = () => {
        setOrderData(true)
        setCart(false);
        setSelectedItems([])
        setTotalAmount(0)
        
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\+?[1-9]\d{1,14}$/; 
        return regex.test(phone);
    };

    const validateAddress = (address) => {
        return address.trim().length > 0; 
    };

    const finish = (event) => {
        event.preventDefault();

        const emailError = validateEmail(email) ? '' : 'This field is required and must contain an email.';
        const phoneError = validatePhone(phone) ? '' : 'This field is required and must contain an phone number.';
        const addressError = validateAddress(address) ? '' : 'This field is required and must contain an your address';

        if (emailError || phoneError || addressError) {
            setErrors({ email: emailError, phone: phoneError, address: addressError });
            return;
        }

        setErrors({ email: '', phone: '', address: '' });
        setBlockOrder(false);
        setEmail('');
        setPhone('');
        setAddress('');
        
    };

    const generateOrderNumber = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    return (
        <>
            <div className='mainstr'>
                <div className='nav-box'>
                    <div className='nav-box__location'>
                        <div className='nav-box__location_img'></div>
                        <div className='nav-box__location_text'>{city}</div>
                        <div className='nav-box__location_arrow'></div>
                    </div>
                    <div className='nav-box__nav'>
                        <div className='nav-box__nav_store'>Store</div>
                        <div className='nav-box__nav_delivery'>Delivery</div>
                        <div className='nav-box__nav_blog'>Blog</div>
                        <div className='nav-box__nav_reviews'>Reviews</div>
                        <div className='nav-box__nav_contact'>Contacts</div>
                    </div>
                    <div className='nav-box__deliver'>
                        <div className='nav-box__deliver_text'>Delivery</div>
                        <div className='nav-box__deliver_time'>
                            <div className='nav-box__deliver_time'>MN-FR 8am - 10pm</div>
                            <div className='nav-box__deliver_time'>ST-SN 10am - 10pm</div>
                        </div>
                    </div>
                    <div className='nav-box__socNedia'>
                        <div className='nav-box__socNedia_soc'></div>
                        <div className='nav-box__socNedia_soc'></div>
                        <div className='nav-box__socNedia_soc'></div>
                    </div>
                </div>
            </div>

            <div className='title-box'>
                <div className='title-box__desciption'>
                    <div className='title-box__desciption_phone'>
                        <div className='title-box__desciption_phone_titleIMG'>
                            <div className='title-box__desciption_phone_titleIMG_img'></div>
                            <div className='title-box__desciption_phone_titleIMG_name'>
                                <div className='title-box__desciption_phone_titleIMG_name_titleName'>FLORISTMAN</div>
                                <div className='title-box__desciption_phone_titleIMG_name_shop'>Flover Shop</div>
                            </div>
                        </div>
                        <div className='title-box__desciption_phone_numberPhone'>
                            <div className='title-box__desciption_phone_numberPhone_first'>
                                <div className='title-box__desciption_phone_numberPhone_first_phone'></div>
                                <div className='title-box__desciption_phone_numberPhone_first_phone_number'>+1 (896) 715-4576</div>
                            </div>
                            <div className='title-box__desciption_phone_numberPhone_second'>
                                <div className='title-box__desciption_phone_numberPhone_first_phone'></div>
                                <div className='title-box__desciption_phone_numberPhone_first_phone_number'>+1 (896) 715-4577</div>
                            </div>
                        </div>
                    </div>
                    <div className='title-box__desciption_control'>
                        <div className='title-box__desciption_control_man'></div>
                        <div className='title-box__desciption_control_bag'>
                            <div 
                                className='title-box__desciption_control_bag_img' 
                                onClick={openCart}
                                ></div>
                            <div className='title-box__desciption_control_bag_value'>{current}</div>
                        </div>
                    </div>
                </div>
            </div>

            {cart && (
                <div className='modal-overlay' onClick={closeCart}>
                    <form 
                        className='order-form' 
                        onClick={e => e.stopPropagation()}
                        >
                        <div className='order-form__title'>Your Cart</div>
                        {orderData === true ? (
                            <>
                                <div className='order-form__headTitle'>
                                    <div className='order-form__list'>
                                    {selectedItems.length === 0 ? (
                                        <>
                                            <div className='order-form__list_none'>No items in your cart</div>
                                        </>
                                        
                                    ) : (
                                        selectedItems.map((item, index) => (
                                            <div className='order-form__list_box' key={index}>
                                                
                                                <div className='order-form__list_box_floverText'>
                                                    <img src={item.src} alt={item.name} />
                                                    <span>{item.name} - ${item.prize}</span>
                                                </div>
                                                <div className='order-form__list_box_nav'>
                                                    <div 
                                                        className='order-form__list_box_nav_delete' 
                                                        onClick={() => remove(index)} 
                                                    >X</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                    </div>
                                </div>
                                <div>
                                <div className='order-form__prise'>Total: ${totalAmount / 2}
                                        <button 
                                            type="submit" 
                                            onClick={nextStep} 
                                            disabled={selectedItems.length === 0}
                                            className={selectedItems.length === 0 ? 'order-form__prise_inactive' : ''} 
                                        >
                                            Place an order
                                        </button>
                                    <button 
                                        type="button" 
                                        onClick={closeCart}
                                    >Close</button>
                                </div>
                                </div>
                            </>
                        ) : blockOrder === true ? (
                            <>
                                <div className='data-form'>
                                <div className='data-form__title'>Enter your data</div>
                                    <div className='data-form__info'>
                                        <div className='data-form__info_email'>
                                        <input 
                                                type="text" 
                                                placeholder="Email" 
                                                required 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                            {errors.email && <div className='error-message'>{errors.email}</div>}
                                        </div>
                                        <div className='data-form__info_address'>
                                            <input 
                                                type="text" 
                                                placeholder="Address" 
                                                required 
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}/>
                                                {errors.address && <div className='error-message'>{errors.address}</div>}
                                        </div>
                                        <div className='data-form__info_phone'>
                                            <input 
                                                type="phone" 
                                                placeholder="Phone" 
                                                required 
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}/>
                                                {errors.phone && <div className='error-message'>{errors.phone}</div>}
                                        </div>
                                        
                                    </div>
                                    <div className='data-form__nav'>
                                        <button onClick={finish}>Order</button>
                                        <button onClick={closeCartSecondStep}>Close</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='finish-form'>
                            <div className='finish-form__title'>
                                <div>Your order has been placed. We will contact you for final confirmation. </div>
                                <div>Order number: {orderNumber}</div>
                            </div>
                                <div className='finish-form__nav'>
                                    <button onClick={closeCartSecondStep}>Close</button>
                                </div>
                            </div>
                        )
                        }
                    </form>
                </div>
            )}
        </>
    );
}

export default Navigation;


/**/
