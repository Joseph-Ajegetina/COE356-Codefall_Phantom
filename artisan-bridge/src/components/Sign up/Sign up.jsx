import React from 'react'
import "./Sign up.scss"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useHistory} from "react-router-dom"
import { useState } from 'react'

export default function Signup({Sign_up}) {

  const [Signup_details, setSignup_details]= useState ({first_name:"", last_name:"",email:"",city:"" ,phone:"" ,customer_username:"", password:""});
  
  let history= useHistory();
  
  const submithand = e =>{
    e.preventDefault();
    Sign_up(Signup_details);
    
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5000/login';
    
    axios.post("http://127.0.0.1:5000/register", Signup_details)
    .then(response=>{
      if(response.data.Registration=="Account created for Kevin"){
        history.push("/login")
      }
      }    
    ).catch(error=>{
      console.log(error)
    })
 

  }



    return (
        <div className="signup">
            <div class="signup-box">
      <div className="left ">
        <h1>ARTISAN<span class="text-warning">BRIDGE</span></h1>
        </div>
      <div class="login-box">
      <form onSubmit={submithand}>
        <label for="">
        <input type="text" placeholder="First Name" maxlength="50" required name="first_name" id="first_name" onChange={e=> setSignup_details({...Signup_details, first_name:e.target.value})} value={Signup_details.first_name} />
        </label>
        <label for="">
          <input type="text" placeholder="Last Name" maxlength="50" required name="last_name" id="last_name" onChange={e=> setSignup_details({...Signup_details, last_name:e.target.value})} value={Signup_details.last_name}/>
        </label>
        <label for="">
          <input type="email" placeholder="Email Address" required name="email" id="email" onChange={e=> setSignup_details({...Signup_details, email:e.target.value})} value={Signup_details.email}/>
        </label>
        <label for="">
          <input type="text" placeholder="City" required name="city" id="city" onChange={e=> setSignup_details({...Signup_details, city:e.target.value})} value={Signup_details.city}/>
        </label>
        <label for="">
          <input type="text" placeholder="Phone" required name="phone" id="phone" onChange={e=> setSignup_details({...Signup_details, phone:e.target.value})} value={Signup_details.phone}/>
        </label>
        <label for="">
          <input type="text" placeholder="Username" required name="customer_username" id="customer_username" onChange={e=> setSignup_details({...Signup_details, customer_username:e.target.value})} value={Signup_details.customer_username}/>
        </label>
        <label for="">
          <input type="password" placeholder="Password" minlength="8" required name="password" id="password" onChange={e=> setSignup_details({...Signup_details, password:e.target.value})} value={Signup_details.password}/>
        </label>
        <label for="">
          <input type="password" placeholder="Confirm Password" minlength="8" required/>
        </label>
        <label for="">
        <input type="submit" value="Sign Up" />
      </label>
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
      <p>
        Already have an account?
        <Link to="/login">
        Login
        </Link>
      </p>
      </div>
        </div>
        </div>
    )
}
