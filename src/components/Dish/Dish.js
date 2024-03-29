import React, { useEffect, useState } from 'react'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import ManageItemQuantity from './ManageItemQuantity/ManageItemQuantity' 
import { MEDIA_LINK } from '../../const/const'


export default function Dish({dishObj,addToCart}) {
    const [itemQuantity, setitemQuantity] = useState(0)
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store.cart.cartItems)


    useEffect (() => {
      const curDish = cartItems.filter((dish)=>dish.id===dishObj.id)[0]
      if(curDish)setitemQuantity(curDish.quantity)
    }, [])


    return (
        <div className="accordian-item-box" key={dishObj.id}>
            <div className="accordian-item-box-left">
                <div className='item-name'>{dishObj.name}</div>
                <div className="dish-price">
                    {dishObj.MRPPrice && <span className='mrp-price'><s>&#8377; {dishObj.MRPPrice}</s> </span>}
                    <span className="actual-price">&#8377;{dishObj.price}</span>
                </div>
                <div className="dish-desc">
                    {dishObj.description}
                </div>
            </div>

            <div className="accordian-item-box-right">
                {dishObj.imageId && <img loading='lazy' className='item-image' src={MEDIA_LINK + dishObj.imageId} alt="" />}
                {
                    itemQuantity === 0 ? <button onClick=
                        {() => {
                            addToCart(dishObj,setitemQuantity)
                        }}
                        className='add-item-btn'>Add
                    </button> :
                        <ManageItemQuantity quantity={itemQuantity} setQuantity={setitemQuantity}  id={dishObj.id} />
                }
            </div>
        </div>
    )
}
