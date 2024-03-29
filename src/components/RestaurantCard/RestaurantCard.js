import { Link } from "react-router-dom"
import "./style.css"
import Star from "../rating/Star"
import { MEDIA_LINK } from "../../const/const" 

export default Restaurantcard=({restaurant})=>{
    const link = restaurant.cta.link.split("www.swiggy.com")[1]
    let  info = restaurant.info
    let cuisines = info?.cuisines.join(", ")
    let resName = info.name;
    if(resName.length>22)resName = resName.substring(0, 20)+"...";

    if(cuisines.length>30)cuisines = cuisines.substring(0, 25)+"...";

    return (
      <div key={info.id} className="rest-card">
        <Link to={link} >
          <div className='res-img'>
            <img src={MEDIA_LINK+restaurant.info.cloudinaryImageId} alt="Restaurant Logo" />
            <div className="rest-name">{resName}</div>
            <div className="res-rating-container">
              <Star/> &nbsp;{+info?.avgRating}   •   {info?.sla?.deliveryTime-(info?.sla?.deliveryTime%5)}-{info?.sla?.deliveryTime+(5-(info?.sla?.deliveryTime%5))}
            </div>
            <div className="rest-cuisines">
              {cuisines}
            </div>
            <div>
              {info?.areaName}
            </div>
          </div>
          </Link>
      </div>
    )
  }