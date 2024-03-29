import React from 'react'
import { MEDIA_LINK } from '../../const/const';
import { Link } from 'react-router-dom';
import "./style.css"

export default function Carousel({carouselItems}) {
  if(!carouselItems)return
  return (
    <div className='carousel'>
      {
      carouselItems.map((obj)=>{
        return <div key={obj.id} className='carousel-item'>
            <Link  to={"/"}>
              <img  className="carousel-img" src={MEDIA_LINK+obj.imageId} alt={obj.action.alt} srcset="" />
              </Link>
            </div>
            
      })
      }
    </div>
  )
}
