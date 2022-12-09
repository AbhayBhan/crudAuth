import React, { useState } from 'react';
import { auth } from '../firebaseCfg';
import {createUserWithEmailAndPassword} from "firebase/auth";

const SignupPage = ({signUpAccept}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        try{
            const user = await createUserWithEmailAndPassword(auth,email,pass);
            signUpAccept();
        }
        catch(err){
            console.log(err.message);
            setEmail("");
            setPass("");
        }
    }
  return (
    <div className='container flex flex-col mx-auto items-center p-6'>
        <h1 className='text-4xl text-orange-500 font-bold mb-[80px]'>Sign Up!</h1>
        <form onSubmit={signup} className='container flex flex-col items-center'>
            <div className='flex flex-col gap-1 items-start mb-8'>
                <h3>Enter your email</h3>
                <input value={email} className='border-solid border-2 border-slate-500 rounded-lg px-1' required type='email' placeholder='example@gmail.com' onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>
            <div className='flex flex-col gap-1 items-start mb-8'>
                <h3>Set your password</h3>
                <input value={pass} className='border-solid border-2 border-slate-500 rounded-lg px-1' required type='password' placeholder='enter your pass...' onChange={(e) => {setPass(e.target.value)}}></input>
            </div>
            <button type='submit' className='bg-orange-400 px-3 py-1 mb-3 font-semibold rounded-2xl text-white transition-all hover:bg-orange-600'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupPage