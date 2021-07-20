import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className="login">
            <div className="left ">
    <h1>ARTISAN<span class="text-warning">BRIDGE</span></h1>
    </div>
  <div class="login-box">
      <form>
        <label>
          <input type="email" placeholder="Email Address" required/>
        </label>
        <label>
          <input type="password" placeholder="Password" required/>
        </label>
        <label for="">
          <button class="btn btn-md btn-warning"> Login</button>
        </label>
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
