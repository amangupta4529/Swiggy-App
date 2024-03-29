import React, { useState } from 'react'
import "./style.css"
import Dish from '../../../../components/Dish/dish'


export default function Accordian({ card, ind, isCollapsed, setisCollapsed,addToCart }) {
    const ItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"


    const getPrice = (dish) => {
        let price = 0;
        if (dish?.card?.info?.finalPrice) price = dish?.card?.info?.finalPrice;
        else if (dish?.card?.info?.price) price = dish?.card?.info?.price;
        else {
            let prices = dish?.card?.info?.variantsV2?.pricingModels
            let minPrice = Number.MAX_VALUE
            prices.forEach((curObj) => minPrice = Math.min(curObj?.price, minPrice));
            price = minPrice
        }
        return price;
    }
    const getDishObj = (dish) => {
        const dishObj = {}
        dishObj.name = dish?.card?.info?.name
        dishObj.id = dish?.card?.info?.id
        dishObj.MRPPrice = dish?.card?.info?.price ? dish?.card?.info?.price / 100 : undefined
        dishObj.price = getPrice(dish) / 100
        dishObj.description = dish?.card?.info?.description
        dishObj.imageId = dish?.card?.info?.imageId
        return dishObj
    }

    if(card?.card?.card["@type"] !== ItemCategory)return

    return (
        <div className='accordian-box'>
            <div className="accordian-item">
                <div className="accordian-item-head">
                    <div className="accordian-title">
                        {card.card.card.title}
                    </div>
                    <button onClick={() => setisCollapsed(ind)} className='collapse-accordian-btn'>^</button>
                </div>
                {
                    isCollapsed === ind && <div className="accordian-item-body">
                        {
                            card?.card?.card?.itemCards?.map((dish) => {
                                const dishObj = getDishObj(dish)
                                return <Dish dishObj={dishObj} addToCart={addToCart} />
                            }
                            )}
                    </div>
                }
            </div>

        </div>
    )
}
