import React, { useContext} from 'react'
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';

// React icon
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContect';


export default function Navbar(props) {
  const navigate = useNavigate();
  const { cartIconCount} = useContext(StoreContext)

  return (
    <header>
      <div className='navbar'>
        <div className='logoDiv'>
          {/* naviagte no use karine direct page open kari sakay....
        ---> onClick={()=> navigate('/')} */}
          <Link to={'/'} className='logo flex'><h1><MdOutlineTravelExplore className='icon-1' /> Travel.</h1> </Link>
        </div>
        <ul className="links">
          <Link to={'/'}  className='nav-link active' href='#'>Home</Link>
          <li className='nav-item'><a className='nav-link active' href='#mainIn'>Destination</a></li>
          <li className='nav-item'><a  className='nav-link active' href='#package'>Package</a></li>
          <li className='nav-item'><a className='nav-link active' href='#about'>About Us</a></li>
          <li className='nav-item'><a  className='nav-link active' href='#contact'>Contact</a></li>
        </ul>
       <div className="cart-icon">
      <p onClick={() =>  navigate("/Cart")}><FaCartPlus /></p> 
      <div className={ cartIconCount()==0? "" : "dot"}>
        { cartIconCount () > 0 && <span>{ cartIconCount ()}</span>}
      </div>
     </div>
      <button onClick={() => {props.setSigInpClick(!props.signInClick);props.setSignupClick(false)}}  className='action_btn'>Sign In</button>
      <button onClick={() => {props.setSignupClick(!props.signupClick);props.setSigInpClick(false)}} className='action_btn-1' >Sign Up</button>
        
        
      </div>


    </header>
    
      
  )
}
