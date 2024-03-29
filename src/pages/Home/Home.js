import React, { useState, useEffect, useContext } from 'react'

import Carousel from '../../components/carousel/Carousel';
import { Link } from 'react-router-dom';
import "./home.css"
import Restaurantcard from '../../components/RestaurantCard/RestaurantCard';
import { useSelector } from 'react-redux';
import AuthenticationPage from '../Authentication/Authentication';
import { useFetch } from '../../hooks/useFetch';
import RestauranList from '../../components/RestaurantList/RestauranList';
import { modifyURL } from '../../util/util';
import { HOME_URL } from '../../const/const';
import Spinner from '../../components/Spinner/Spinner';
export default function Home() {
  const location = useSelector((store) => store.location.location)
  const home_url = modifyURL(HOME_URL, location.data[0].geometry.location.lat, location.data[0].geometry.location.lng)
  const [res, loading, error] = useFetch(home_url)
  const [restList, setRestList] = useState([])
  if(loading)return <Spinner />
  if (!res) return
  const RowCarousel = ({carouselItems}) => {
    if (!carouselItems) return
    return <div className='row-carousel'>
      {
        carouselItems.map((obj) => {
          return <>
            <div className='row-carousel-item'>
              {/* <img className='h-full w-full' src={media_link + obj.imageId} alt={obj.action.alt} srcset="" /> */}
              <Restaurantcard restaurant={obj}/>
            </div>
          </>
        })
      }
    </div>
  }
  // const resCard = res?.cards;
  // const carouselItems = resCard[0]?.card?.card?.imageGridCards?.info

  
  return (
    <div className='home_page'>
      <div className="content-center">
        {
          res?.data?.cards?.map((card)=>{
            return <>
              {
                card?.card?.card?.id==="whats_on_your_mind" ? <>
                <h1 className='home-head'>{card.card.card.header?.title}</h1>
                <div className='offer-carousel'>
                  <Carousel carouselItems={card.card.card.imageGridCards?.info} />
                  <hr className="hr-seprator"/>
                </div>
                </> : 
                card?.card?.card?.id==="top_brands_for_you" ? <>
                <h1 className='home-head'>{card.card.card.header?.title}</h1>
               <RowCarousel  carouselItems={card?.card?.card?.gridElements?.infoWithStyle?.restaurants} /> 
               <hr className="hr-seprator"/>               
                </> : card?.card?.card?.id === "popular_restaurants_title" ?
                <> <h1 className='home-head'>{card.card.card?.title}</h1>
                </> : card?.card?.card?.id === "restaurant_grid_listing" ?
                <> <RestauranList resList={card?.card?.card?.gridElements?.infoWithStyle?.restaurants}/>
                </> : <></>
              }
            </>
          })
        }
      </div>
      {/* <RowCarousel  restList={card?.card?.gridElements?.infoWithStyle?.restaurants} />                 */}

    </div>
  )
}
