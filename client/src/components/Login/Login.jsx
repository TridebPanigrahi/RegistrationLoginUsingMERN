import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="section login">
                <div className="register">
                    <h3>Login Now!</h3>
                </div>
                <div className='fname flex'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" placeholder='Enter Email'/>
                </div>
                <div className='fname flex'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" placeholder='Enter Password'/>
                </div>
                <div className="btn">
                    <button>Login</button>
                </div>
                <div className="account">
                    <p>Don't have an Account? <a href="/">Register Now!</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login