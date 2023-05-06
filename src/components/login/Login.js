import React from 'react'
import './Login.css'

function Login() {
    return (
        <aside className='login'>
            <div className='login__left'>
                <div className='login__left__svgs'>
                    <img className='login__logo' src='/assets/images/loginLogo.svg' alt='greenstitch__logo' draggable='false' />
                    <img className='login__dancing' src='/assets/images/dancing.svg' alt='dancing' draggable='false' />
                    <img className='login__arrow' src='/assets/images/loginArrow.svg' alt='login__arrow' draggable='false' />
                    <img className='login__ball' src='/assets/images/loginBall.svg' alt='login__ball' draggable='false' />
                </div>
            </div>
            <div className='login__right'>
                <div className='login__form__container'>
                    <div className='login__form__wrapper'>
                        <h3>Hello!</h3>
                        <p>Welcome, Please enter your details.</p>
                        <form className='login__form'>
                            <label htmlFor='email'><p>Email</p>
                                <input type='email' name='email' placeholder='Enter your email' required />
                            </label>
                            <label htmlFor='password'><p>Password</p>
                                <input type='password' name='password' autoComplete='true' placeholder='Current Password' required />
                            </label>
                            <label htmlFor='checkbox'>
                                <input type='checkbox' name='checkbox' />
                                <span>I agree to terms of service, privacy policy & cookie policy</span>
                            </label>
                            <button className='login__submit__button' type='submit'>Sign in</button>
                        </form>
                        <span>Forgot Password</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Login