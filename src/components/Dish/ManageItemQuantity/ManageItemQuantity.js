import React, { useEffect } from 'react'
import "./style.css" 
import { useDispatch, useSelector } from 'react-redux'
import { updateItemQuantity } from '../../../store/slices/cart/cartSlice' 

export default function ManageItemQuantity({quantity, setQuantity, id}) {
    const INCREASE = "INCREASE"
    const DECREASE = "DECREASE"
    const dispatch = useDispatch()
    
    const setItemQuantity=(type)=>{
        if(type===INCREASE){
            setQuantity((prev)=>prev+1)
            dispatch(updateItemQuantity({id:id,weight:1}))
        }
        else {
            setQuantity((prev)=>prev-1)
            dispatch(updateItemQuantity({id:id,weight:-1}))
        }
    }

  return (
    <div className='Manage-item-quantity-btn'>
        <div className='Manage-item-quantity-btn-box'>
            <button onClick={()=>setItemQuantity(DECREASE)} className="Manage-item-quantity-decrease">-</button>
            <div className="item-quantity">{quantity}</div>
            <button onClick={()=>setItemQuantity(INCREASE)} className="Manage-item-quantity-inrease">+</button>
        </div>
    </div>
  )
}
