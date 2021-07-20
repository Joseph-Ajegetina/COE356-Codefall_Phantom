import React from 'react'
import "./Sign up.scss"
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="signup">
            <div class="signup-box">
      <div className="left ">
        <h1>ARTISAN<span class="text-warning">BRIDGE</span></h1>
        </div>
      <div class="login-box">
      <form>
        <label for="">
        <input type="text" placeholder="First Name" maxlength="50" required/></label>
        <label for="">
          <input type="text" placeholder="Last Name" maxlength="50" required/>
        </label>
        <label for="">
          <input type="email" placeholder="Email Address" required/>
        </label>
        <label for="">
          <input type="password" placeholder="Password" minlength="8" required/>
        </label>
        <label for="">
          <input type="password" placeholder="Confirm Password" minlength="8" required/>
        </label>
        <label for="">
        <button class="btn btn-md btn-warning"> Sign Up</button>
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
