import { LOCATION_URL } from "../const/const";

const getGeoLocation=()=>{
  const GeoLoactionPromise = new Promise((resolve, reject)=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
          const location = { "latitude" : position.coords.latitude, "longitude":position.coords.longitude}
          resolve(location) 
      })
      } else { 
        reject("Geolocation is not supported by this browser.")
      }
    })
    return GeoLoactionPromise;
}


const getLocationInfo=async({latitude, longitude})=>{
    let url = LOCATION_URL.replace("{LAT}", latitude)
    url = url.replace("{LONG}", longitude)
    try {
      const res = await fetch(url,{
        credentials: "same-origin"
      })
      const data = await res.json()
      return data
    } catch (error) {
      console.error(error)
    }
}

const modifyURL=(url,lat,lng)=>{
    let modify_url = url.replace("{LAT}", lat)
    modify_url = modify_url.replace("{LONG}", lng)
    return modify_url;
}

export {getGeoLocation,getLocationInfo,modifyURL}