import React, { useEffect, useState } from 'react'
import "./style.css"
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import {RESTAURANT_LIST_POST_URL, RESTAURANT_LIST_PAYLOAD} from "../../const/const"
import { useSelector } from 'react-redux'


export default function RestauranList({resList}) {
    const location = useSelector((store)=>store.location.location)
    
    const {lat, lng} = location.data[0]?.geometry?.location;
    RESTAURANT_LIST_PAYLOAD["lat"] = lat;
    RESTAURANT_LIST_PAYLOAD["lng"] = lng;
    
    const [restList, setRestList] = useState([])
    const restListLength = resList.length
    // const loadRestaurant=()=>{
        // RESTAURANT_LIST_PAYLOAD["widgetOffset"]["collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"]=restListLength+1;
        // console.log(RESTAURANT_LIST_PAYLOAD);
        // let data = JSON.stringify(RESTAURANT_LIST_PAYLOAD)
        // console.log(data);
        // fetch(RESTAURANT_LIST_POST_URL,{
        //     method:"POST",
        //     body:data,
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     },
        //     credentials: "same-origin",
        // }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
    // }
    useEffect(() => {
      setRestList(resList)
    //   window.addEventListener("scroll",()=>{
    //     if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
    //         loadRestaurant();
    //     }
    //   })
    },[])
    return (
      <div className="rest-list-box">
        <div className="rest-list">
          {restList?.map((restaurant) => {
            return <RestaurantCard restaurant={restaurant} />
          })}
        </div>
      </div>
    )
}
