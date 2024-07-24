import React, { useContext, useEffect } from 'react'
import './Cart.css'

import Footer from '../../componets/Footer/Footer'
import { StoreContext } from '../../context/StoreContect';

// react icon
import { MdDelete } from "react-icons/md";
import { travel_list } from '../../Data/Data';
import { package_list } from '../../Data/DataPackage';



const Cart = (props) => {
  const {cartItem,removecart,getTotalAmount} = useContext(StoreContext);

  useEffect(() => {
    console.log(cartItem);
  })

  
  return (
     <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Image</p>
          <p>Place</p>
          <p>Contry</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {travel_list.map((item, index)=>{
          if (cartItem[item._id] > 0)
          {
            return(
              <div>
                <div className='cart-item-title cart-output'>
                  <img src={item.Image} className='image-1' alt="" />
                  <p className='place'>{item.place}</p>
                  <p>{item.country}</p>
                  <p>{item.price}</p>
                  <p onClick={()=>removecart(item._id)} className='cross'><MdDelete /></p>
                </div>
              </div> 
              
            )
          }
        })}


        {package_list.map((item,index)=>{
           if (cartItem[item._id] > 0)
            {
              return(
                <div>
                  <div className='cart-item-title cart-output'>
                    <img src={item.Image} className='image-1' alt="" />
                    <p className='place'>{item.country}</p>
                    <p>{item.country}</p>
                    <p>{item.price}</p>
                    <p onClick={()=>removecart(item._id)} className='cross'><MdDelete /></p>
                  </div>
                </div> 
              )
            }
        })}
        <br />
        <hr />

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Charge</p>
              <p>{getTotalAmount() === 0 ? 0 : 150 }</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalAmount() === 0 ? 0 : parseInt(getTotalAmount()) + parseInt(150)}</p>
            </div>
          </div>
          <button>BOOKING</button>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default Cart

