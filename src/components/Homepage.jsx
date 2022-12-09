import React from 'react';
import { auth } from '../firebaseCfg';
import {signOut} from 'firebase/auth';
import "../styles/main.css";

const Homepage = ({logoutAccept}) => {

  const logout = async () => {
    await signOut(auth);
    logoutAccept();
  }

  return (
    <div>
      <nav className='container fixed top-0 p-6 flex flex-row justify-center gap-3 space-x-3'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Services</h3>
        <h3>logged in as : {auth.currentUser.email}</h3>
        <button onClick={logout} className='bg-blue-300 px-2 py-1 rounded-xl hover:bg-blue-500'>logout</button>
      </nav>
    </div>
  )
}

export default Homepage