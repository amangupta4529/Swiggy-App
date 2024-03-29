import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assests/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./navbar.css"
// import userContext from '../../util/userCintext'
import { useDispatch, useSelector } from 'react-redux'
import { faCartShopping, faMagnifyingGlass, faPercent, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {

  const cartItems = useSelector((store)=>store.cart.cartItems)
  const dispatch = useDispatch();
  return (
    <div className='nav'>
      <div className='h-auto'>
        <div>
          <Link to="/"><img className='logo' src={logo} alt="Logo"/></Link>
        </div>
        <div ></div>
      </div>
      <div className='nav-items'>
        <li><Link className=''  to={"/Search"}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Search</Link></li>
        <li><Link className=''  to={"/Offers"}>
        <FontAwesomeIcon icon={faPercent} />
          Offers</Link></li>
        <li><Link className='' to={"/SignIn"}>
        <FontAwesomeIcon icon={faRightToBracket} />
          SignIn</Link></li>
        <li><Link className='' to={"/Cart"}>
        <FontAwesomeIcon icon={faCartShopping} />
          Cart{ cartItems.length}</Link></li>
      {/* <span>{loggedInUser}</span>
      <button onClick={()=>dispatch(addItem("aman"))}> Add</button> */}
      </div>
    </div>
  )
}
