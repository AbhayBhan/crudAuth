import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseCfg';
import {signOut} from 'firebase/auth';
import "../styles/main.css";
import uniqid from 'uniqid';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

const Homepage = ({logoutAccept}) => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");
  const [updater, setUpdater] = useState(false);

  const logout = async () => {
    await signOut(auth);
    logoutAccept();
  }

  useEffect(() => {
    const getData = async () => {
      const dataRef = doc(db, "users", auth.currentUser.uid);
      const data = await getDocs(collection(dataRef, "messages"));
      setItems(data.docs.map((doc) => ({...doc.data(), id : doc.id })));
    }
    getData();
  },[updater])

  const addData = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "users", auth.currentUser.uid, "messages", uniqid()), {value : val});
    setVal("");
    setUpdater(!updater);
  }

  return (
    <div>
      <nav className='container p-6 flex flex-row mb-[90px] justify-center gap-3 space-x-3'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Services</h3>
        <h3>logged in as : {auth.currentUser.email}</h3>
        <button onClick={logout} className='bg-blue-300 px-2 py-1 rounded-xl hover:bg-blue-500'>logout</button>
      </nav>
      <div className='mb-6'>
        <form onSubmit={addData}>
          <h3>value</h3>
          <input className='border-2 border-solid border-slate-600 px-1' value={val} type='text' onChange={(e) => {setVal(e.target.value)}}></input>
          <button type='submit' className='px-2 py-1 bg-blue-500 mt-2 hover:bg-blue-600'></button>
        </form>
      </div>
      <ul>
        {items.map((item) => {
          return(
            <li key={item.id} >{item.value}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Homepage