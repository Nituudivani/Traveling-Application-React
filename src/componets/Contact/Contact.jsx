import React, {useEffect, useState} from 'react'
import '../Contact/Contact.css';

// react icon
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {


  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();
  const [contact , setContact] = useState(false);

  const validation =() => {
    if(name && email && message){
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('message',message)
        localStorage.setItem('contact',email)

        alert('Message send  successfully')
        setContact ('contact')
    }
}

  
   // Lets create a react hook to add a scroll animation...
   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div>
      <section  data-aos='fade-up' className="contact-1" id='contact'>
        <div className="container-1">
          <h2>Contact Us</h2>
          <div className="contact-wrapper-1">
            <div className="contact-form-1">
              <h3>Send us a message</h3>
              <form>
                <div className="form-group-1">
                  <input type='text' name='name' className='contact-input' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="form-group-1">
                  <input type='email' name='email' className='contact-input' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="form-group-1">
                  <textarea name='message' className='contact-input' placeholder='Enter Your Message' onChange={(e)=>setMessage(e.target.value)} required ></textarea>
                </div>
                <button type='submit' onClick={()=>validation()}>Send Message<FiSend  className='ico'/></button>
              </form>
            </div>

            <div className="contact-info-1">
              <h3>Contact Information</h3>
              <p><FaPhoneAlt  className='ico'/> +1 123 456 789</p>
              <p><MdEmail className='ico'/> Nituu@gmail.com</p>
              <p><FaMapMarkerAlt  className='ico'/> 123 street, city, contry</p>


              <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d69862.41884583831!2d72.57219573292721!3d23.035111531872975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf9c5a8e6670804f%3A0xd56885365812e5e5!2sTech%20Amdavad%20LLP!5e0!3m2!1sen!2sin!4v1720711081808!5m2!1sen!2sin" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
