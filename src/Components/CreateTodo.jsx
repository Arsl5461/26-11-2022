import React from 'react'
import "../App.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom" 
import axios from 'axios'
import { TextField,Button,InputField, Input } from '@mui/material/'
function CreateTodo() {
    let navigate=useNavigate();
    const [userId]=useState('25524');
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const addForm=(e)=>{
        e.preventDefault();
        axios.post('https://bootcamp.todo.arhamsoft.org/client/todo/create', {
            userId: userId,
            title: title,
            desc:desc
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       
          
              let path=`/25524`;
              navigate(path)
          
    }
  return (
    <>
 
    <form  noValidate autoComplete="off" className='input'>
  <TextField id="id" label="UserId" variant="outlined" value={userId}   />
  <TextField id="title" label="Title" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} required />
  <TextField id="desc" label="Desc" variant="outlined" value={desc} onChange={(e)=>setDesc(e.target.value)} />
    <Button variant="contained" onClick={addForm}>Create</Button>

</form>
  

    </>
  )
}

export default CreateTodo