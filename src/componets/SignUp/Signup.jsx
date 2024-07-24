import React, {useState} from 'react'
import '../SignUp/Signup.css';


function Signup(props) {

  const [username , setUsername] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [signup , setSignup] = useState(false);

  const validation =() => {
    if(username && email && password){
        localStorage.setItem('username',username)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        localStorage.setItem('signup',email)

        alert('signup successfully')
        setSignup('signup')
    }
}
  
  return (
    
    <div>
      <form className='firm'>
        <h2 className='firm-title'>Signup</h2>
        <div class="form-group div-1">
            <input type="text" className='firm-input' placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/>
        </div>
        <div class="form-group">
            <input type="email" className='firm-input' placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div class="form-group">
            <input type="password" className='firm-input' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button className='signup-button'  type="submit" onClick={()=>validation()}>Sign Up</button>
        
        <p>Already have an account? <span onClick={()=>{props.setSigInpClick(true);props.setSignupClick(false)}}>Click here</span></p>
        
    </form>
    </div>
  )
}

export default Signup
