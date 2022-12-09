import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Homepage from './components/Homepage';
import './styles/main.css'

function App() {
  const [loginShow, setLoginShow] = useState(true);
  const [signupShow, setSignupShow] = useState(false);

  const signupRedir = () => {
    setLoginShow(false);
    setSignupShow(true);
  }

  const signUpAccept = () => {
    setLoginShow(true);
    setSignupShow(false);
  }

  const loginAccept = () => {
    setLoginShow(false);
    setSignupShow(false);
  }

  const logoutAccept = () => {
    setLoginShow(true);
    setSignupShow(false);
  }

  return (
    <div>
      {loginShow ? <LoginPage loginAccept={loginAccept} signupRedir={signupRedir} /> : <div></div>}
      {signupShow ? <SignupPage signUpAccept={signUpAccept}/> : <div></div>}
      {!loginShow && !signupShow ? <Homepage logoutAccept={logoutAccept} /> : <div></div>}
    </div>
  )
}

export default App
