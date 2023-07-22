import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const history = useNavigate();
    const [data, setData] = useState({
        email:"",
        password:"",
        // terms:false,
    })

    function handelLogin(e){
        e.preventDefault()
        axios.post('http://localhost:5000/login', {...data})
        .then((res)=>{
            console.log(res.data)
            if(res.data.status === "Success"){
                history("/dashboard",)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <div className="container">
            <div className="section login">
                <div className="register">
                    <h3>Login Now!</h3>
                </div>
                <div className='fname flex'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" placeholder='Enter Email' onChange={(e)=>setData({...data, email:e.target.value})}/>
                </div>
                <div className='fname flex'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" onChange={(e)=>{setData({...data, password:e.target.value})}} placeholder='Enter Password'/>
                </div>
                <div className='terms'>
                    <div className='condition'>
                        {/* <input type="checkbox" name="" id="password" onChange={(e)=>setData({...data, terms:!data.terms})}/> */}
                        <input type="checkbox" name="" id="password"/>
                        <label htmlFor="password"><a href="/terms">Terms & Condition</a></label>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={handelLogin}>Login</button>
                </div>
                <div className="account">
                    <p>Don't have an Account? <Link to="/">Register Now!</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login