import React, { useEffect } from 'react'
import "../App.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom" 
import axios from 'axios'
import { TextField,Button,InputField, Input } from '@mui/material/'
import {useParams} from "react-router-dom";
function EditTodo() {
    let navigate=useNavigate();
    const [userId]=useState('25524');
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        editForm();
    })
    const editForm=()=>{
        axios.get(`https://bootcamp.todo.arhamsoft.org/client/todo/get/${id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       
          
          
    }
  return (
    <>
 
    <form  noValidate autoComplete="off" className='input'>
  <TextField id="id" label="UserId" variant="outlined" value={userId}   />
  <TextField id="title" label="Title" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} required />
  <TextField id="desc" label="Desc" variant="outlined" value={desc} onChange={(e)=>setDesc(e.target.value)} />
    <Button variant="contained" >Edit</Button>

</form>
  

    </>
  )
}

export default EditTodo