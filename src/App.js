import {useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import AuthenticationPage from "./pages/Authentication/Authentication";
import appstore from "./store/AppStore";
import { updateLocation } from "./store/slices/location/locationSlice";


export default App=()=>{
  return (
  <Provider store={appstore}>
    <AppLayout />
  </Provider>)
}
const AppLayout=()=>{
  const isLocated = useSelector((store)=>store.location.isLocated)
  const dispatch = useDispatch()
  useEffect(()=>{
    const location = localStorage.getItem("userLocation")
    if(location){
      dispatch(updateLocation(JSON.parse(location)))
    }
  },[])
  
    return (
      <div className="app">
      {!isLocated ? <AuthenticationPage/> : <>
          <Navbar/>
        <div className="seprator">
          <Outlet/>
        </div>
      </>
      }</div>
    )
}