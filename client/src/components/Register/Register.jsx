import React, { useState } from 'react';
import './ragister.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
    const [data, setData] =useState({
        name:"",
        phone:null,
        email:"",
        password:"",
        gender:""
    })
    const navigate = useNavigate()

    const payload ={...data}

    const handleRegister =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/register", payload)
        .then((res)=>{
            console.log(res.data)
            if(res.data === "userexist"){
                alert("User Already Exist")
            }
            else{
                navigate("/login")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <div className="container">
            <div className="section">
                <div className="register">
                    <h3>Registration Form</h3>
                </div>
               <div className='fname flex'>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" onChange={(e)=>setData({...data, name:e.target.value})} placeholder='Enter Name'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="" onChange={(e)=>setData({...data, phone:e.target.value})} id="phone" placeholder='Enter Phone Number'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" onChange={(e)=>setData({...data, email:e.target.value})} placeholder='Enter Email'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" onChange={(e)=>setData({...data, password:e.target.value})} placeholder='Enter Password'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="gender">Gender</label>
                <div className="gender">
                    <input type="radio" name="gender" id="male" value="male" onChange={(e)=>setData({...data, gender:e.target.value})}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={(e)=>setData({...data, gender:e.target.value})}/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="others"  value="others" onChange={(e)=>setData({...data, gender:e.target.value})}/>
                    <label htmlFor="others">Others</label>
                </div>
               </div>
               <div className="btn">
                    <button onClick={handleRegister}>Register</button>
               </div>
               <div className="account">
                    <p>Already have an Account? <Link to="/login">Login Now!</Link></p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register