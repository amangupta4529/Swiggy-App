import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItems, updateRestaurant } from "../../store/slices/cart/cartSlice";
import { HOTELMISMATCHMESSAGE, MEDIA_LINK, REST_URL } from "../../const/const";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./style.css"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordian from "./component/Accordian/Accordian";
import { modifyURL } from "../../util/util";
import CartInfoBar from "../../components/CartInfoBar/CartInfoBar";
import Spinner from "../../components/Spinner/Spinner";


const Restaurant = ()=>{
    const {cartItems, restaurantInfo} = useSelector((store)=>store.cart)
    const curURL = useLocation().pathname
    const restId = curURL.split('-').pop()
    const location = useSelector((store)=>store.location.location)
    const {lat, lng} = location.data[0]?.geometry?.location;
    let rest_url = modifyURL(REST_URL, lat, lng)
    rest_url = rest_url.replace("{RESTID}", restId )

    const [data, loading, error] = useFetch(rest_url)
    const restInfo = data?.data?.cards.filter((card)=>card?.card?.card?.info)[0]?.card?.card?.info
    const [restMenuCategories, setRestMenuCategories] = useState()
    const [isCollapsed, setisCollapsed] = useState(1)

    const isCollapsedValue=(ind)=>{
        if(ind === isCollapsed)setisCollapsed(0)
        else setisCollapsed(ind)
    }

    const dispatch = useDispatch()
    //memoize
    useEffect(()=>{ 
        data?.data?.cards?.forEach((card)=>{ 
            if(card?.groupedCard?.cardGroupMap?.REGULAR?.cards){
                setRestMenuCategories(card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            }});
   },[data])
   const addToCart = (dishObj, setitemQuantity) => {
    const restObj = {name:restInfo?.name,location:restInfo?.areaName, imgId:restInfo?.cloudinaryImageId}
    if(cartItems.length === 0){
        // First Item to add in cart, so update it's Hotel detail's
        dispatch(updateRestaurant(restObj))
    }else if(restaurantInfo.name!==restInfo.name) {
        // if selects adding item from different Hotel
        let userDescision = confirm(HOTELMISMATCHMESSAGE)
        if(userDescision){
            dispatch(clearItems())
            dispatch(updateRestaurant(restObj)) // update hotel
        }else return
    }
    setitemQuantity(1)
    dispatch(addItem(dishObj))
}
   if(loading)return <Spinner />


    return (
        <div className="rest-page">
            <div className="rest-page-center">
                <div className="rest-info">
                    <div className="info-part">
                    <div className="rest-name">{restInfo?.name}</div>
                    <div className="rest-food-type">{restInfo?.cuisines?.join(", ")}</div>
                    <div className="rest-location">{restInfo?.areaName+", "+ restInfo?.sla?.lastMileTravelString}</div>
                    <div className="dilevery-time"><img src={MEDIA_LINK+"/"+restInfo?.feeDetails?.icon}/> &nbsp; | {restInfo?.feeDetails?.message}</div>
                    </div>
                    <div className="rating-part">
                        <div className="rest-rating">
                        <FontAwesomeIcon icon={faStar} /> &nbsp;
                            {restInfo?.avgRating}</div>
                        <hr className="rating-sep" />
                        <div className="rest-total-rating">{restInfo?.totalRatingsString}</div>
                    </div>
                </div>
                <div className="rest-menu-part">
                    {
                        restMenuCategories?.map((card, ind) =><Accordian card={card} ind={ind} isCollapsed={isCollapsed} setisCollapsed={isCollapsedValue} addToCart={addToCart} />
                    )}
                </div>
            <CartInfoBar/>
            </div>
        </div>
    )
}
export default Restaurant