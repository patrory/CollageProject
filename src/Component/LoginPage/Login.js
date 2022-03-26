import React, { useState } from 'react'
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../../firebaseConfig/firebaseConfig';
import {useNavigate} from 'react-router-dom'
function Login() {
    let navigate = useNavigate();
    const register = async()=>{
        try{
            const user= await createUserWithEmailAndPassword(auth,RegisterEmail,registerPassword);
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
       
    }
    const login = async ()=>{
        try{
            const user= await signInWithEmailAndPassword(auth,LoginEmail,LoginPassword);
            navigate("/");
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    }
    const logout = async()=>{
        await signOut(auth);
    };
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    const [RegisterEmail,setRegisterEmail]=useState("");
    const[registerPassword,setRegisterPassword]=useState("");
    const [LoginEmail,setLoginEmail]=useState("");
    const[LoginPassword,setLoginPassword]=useState("");
    const [user ,setUser]=useState("")
  return (
    <div className='App'>
      <div>
          <h3>Register User</h3>
          <input placeholder='Email' onChange={(event)=>{
              setRegisterEmail(event.target.value)
          }} />
          <input placeholder='PassWord'onChange={(event)=>{
              setRegisterPassword(event.target.value)
          }} />
          <button onClick={register}>Create User</button>
      </div>
      <div>
          <h3>Login</h3>
          <input placeholder='Email'onChange={(event)=>{
              setLoginEmail(event.target.value)
          }} /> 
          <input placeholder='PassWord'onChange={(event)=>{
              setLoginPassword(event.target.value)
          }} />
          <button onClick={login}>Login</button>
      </div>
      <h4>User Logged in</h4>
      
         {user?.email}
    
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default Login
