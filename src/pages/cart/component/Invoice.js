import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MEDIA_LINK } from '../../../const/const'
import "./style.css"
import { getCartTotal } from '../../../store/slices/cart/common'

export default function Invoice() {
    const {cartItems, restaurantInfo} = useSelector((store)=>store.cart)
    const [cartTotal, setcartTotal] = useState(0)
    useEffect(() => {
        let total = getCartTotal(cartItems)
        setcartTotal(total["totalAmount"])
    }, [cartItems])
    
  return (
    <div className='invoice'>
        <div className='invoice-container'>
            <div className="invoice-rest-info">
                <div className="invoice-rest-info-left">
                    <div className="invoice-rest-img">
                        <img className='invoice-rest-img' src={MEDIA_LINK+""+restaurantInfo.imgId} alt="" />
                    </div>
                </div>
                <div className="invoice-rest-info-right">
                <div className="invoice-rest-name">{restaurantInfo.name}</div>
                <div className="invoice-rest-location">{restaurantInfo.location}</div>

                </div>

            </div>
            <div className="invoice-items-list">
                {
                    cartItems?.map((dish)=>
                         <div className="invoice-item" key={dish.id}>
                            <div className="invoice-item-name">{dish.name}</div>
                            <div className="invoice-item-price">{dish.price} * {dish.quantity} = {dish.price*dish.quantity}</div>
                        </div>
                    )
                }
            </div>
            <div className="invoice-items-total-price-box">
                <span className='invoice-total-price-text'>Total</span>
                <span className='invoice-items-total-price'>{Math.ceil(cartTotal)}</span>
            </div>
        </div>
    </div>
  )
}
