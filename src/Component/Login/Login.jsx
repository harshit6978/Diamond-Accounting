import React from 'react';
import login from './Login.module.css'
const Login = () => {
  return (
    <div>
      <div
        className="container"
        style={{ '--clr': '#ce4b0e', '--clrWhite': '#ffffff', '--clrGreen': '#056e13' }}
      >
        <i style={{ color: 'var(--clr)' }}></i>
        <i style={{ color: 'var(--clrWhite)' }}></i>
        <i style={{ color: 'var(--clrGreen)' }}></i>
        <div className={login['login']}>
          <h2>Login Form</h2>
          <div className={login['input-box']}>
            <input type="text" placeholder="Username" />
          </div>
          <div className={login['input-box']}>
            <input type="password" placeholder="Enter Password" id="password" />
          </div>
          <div className={login['input-box']}>
            <input type="submit" value="Sign In" />
          </div>
          <div className="links">
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
