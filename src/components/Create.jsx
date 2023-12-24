import React, { useState } from 'react'
import { toast } from 'react-toastify';


const Create = (props) => {

    const {thoughts, setthoughts} = props;
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');

    const sumbitHandler = (e)=>{
        e.preventDefault();
        if(title.trim().length < 4 || description.trim().length < 4){
            toast.error('Title and description must have min-mum 4 character');
        }
    }

  return (
    <>
    <div className="login-box">
  <h2>Thought Form</h2>
  <form onSubmit={sumbitHandler}>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Title</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Description</label>
    </div>
    <button >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Save
    </button>
  </form>
</div>
    </>
  )
}

export default Create