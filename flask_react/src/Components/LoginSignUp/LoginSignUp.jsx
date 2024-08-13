//jsx allows us to write html in react
import React from 'react'
import './LoginSignUp.css'
import compass_image from '../Assets/compass.png'
const LoginSignUp = () => {
  return (
    <div>
        <div className='container'>
            <div className='headerimage'>
                <img src={compass_image} alt=''/>
            </div>
            <div className='header'>
                <div className='text'>Let's Get Started!</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type = "text" placeholder='Username'/>
                </div>
                <div className='input'>
                    <input type = "email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <input type = "password" placeholder='Password'/>
                </div>
                <div className='input'>
                    <input type = "password" placeholder='Confirm Password'/>
                </div>
            </div>
            <div className="submit-container">
                <div className='signsubmit'>Sign Up</div>
                <div className='submit'>Login</div>
            </div>
        </div>

    </div>
  )
}

export default LoginSignUp

