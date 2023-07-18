import React from 'react';
import './ragister.css';

const Register = () => {
  return (
    <div>
        <div className="container">
            <div className="section">
                <div className="register">
                    <h3>Registration Form</h3>
                </div>
               <div className='fname flex'>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" placeholder='Enter Name'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="" id="phone" placeholder='Enter Phone Number'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" placeholder='Enter Email'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" placeholder='Enter Password'/>
               </div>
               <div className='fname flex'>
                <label htmlFor="gender">Gender</label>
                <div className="gender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="others"  value="others"/>
                    <label htmlFor="others">Others</label>
                </div>
               </div>
               <div className="btn">
                    <button>Submit</button>
               </div>
               <div className="account">
                    <p>Already have an Account? <a href="">Login Now!</a></p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register