import React, { useState } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function Login({log_in}) {

  const [details,setDetails]= useState ({username:"", password:""});
  
  const submithand = e =>{
    e.preventDefault();
    log_in(details);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5000/login';
    axios.post("http://127.0.0.1:5000/login", details)
    .then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })

  }
  return (
    <div className="login">
      <div className="left ">
        <h1>ARTISAN<span class="text-warning">BRIDGE</span></h1>
      </div>
      <div class="login-box">
        <form onSubmit={submithand}>

        <div>
            <label>
              <input type="text" placeholder="username" name="username" id="username" required onChange={e=> setDetails({...details, username:e.target.value})} value={details.username} />
            </label>
            </div>
            <div>
            <label>
              <input type="password" placeholder="Password" name="password" id="password" required onChange={e=> setDetails({...details,password:e.target.value})} value={details.password} />
            </label>
            </div>
            <div>
            <label for="">
              <input type="submit" value="Login" />
            </label>
            </div>
        </form>
        <label for="">
          <Link to="/signup" className="signup">
          <button class="btn btn-md btn-secondary m-2">Create New Account</button>
          </Link>
          </label>
      </div> 
    </div>
    )
}
