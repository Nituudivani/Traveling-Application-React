import React, {useState} from 'react'
import '../SignIn/SignIn.css';

export default function SignIn(props) {

  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [Signin , setSignin] = useState(false)

  const form = () => {
    if (email && password){
      const first = localStorage.getItem('email')
      const second= localStorage.getItem('password')

      if(first == email && second == password)
      alert('Signin Successfully')
    
      else{
      alert('Please Enter Your Valid Password')
    }
    }
  }

  
  return (
    <div>
       <div>
      <form className='firm'>
        <h2 className='firm-title'>SignIn</h2>
        <div class="form-group">
            <input type="email" id='email' className='firm-input' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div class="form-group">
            <input type="password" id='password' className='firm-input' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button className='signup-btn'  type="submit" onClick={()=>form()}>Sign In</button>

        <p>Create New account? <span onClick={()=>{props.setSigInpClick(false);props.setSignupClick(true)}}>Click here</span></p>

    </form>
    </div>
    </div>
  )
}
