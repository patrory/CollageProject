import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebaseConfig';
import {useNavigate} from 'react-router-dom';
function CreatePost() {
  const postCollectionRef = collection(db,"data");
  let navigate = useNavigate();
  const [title,setTitle]= useState("");
  const [text,serText]=useState("");
  const createPost = async()=>{
    await addDoc(postCollectionRef,{title,text});
    navigate('/');
  }

  return (
    <div className='CreatePostPage'>
     <div className="cpContainer">
       <h1>Create Post</h1>
       <div className="inputGp">
         <label className='inputGp'>Title</label>
         <input placeholder='Title...' onChange={(event)=>{
           setTitle(event.target.value);
         }} />
       </div>
       <div className="inputGp">
         <label >Post...</label>
         <textarea placeholder='Post'
         onChange={(event)=>{
           serText(event.target.value);
         }}
         ></textarea>
       </div>
       <button onClick={createPost}>Submit Post</button>
     </div>
    </div>
  )
}

export default CreatePost
