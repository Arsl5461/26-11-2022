import React from 'react'
import {useNavigate,useParams} from "react-router-dom"
import { TextField,Button,InputField, Input } from '@mui/material/'
import {useState,useEffect} from "react"
import axios from 'axios'

import "../App.css"
function Create() {
    const params=useParams();
    console.log(params);
    let navigate=useNavigate();
    const createTodo=()=>{
        let path=`/create`;
        navigate(path)
    }
    const editTodo=(id)=>{
        let path=`/25524/edit/${id}`;
        navigate(path);
    }
  
    const userId = window.location.href.split("/").pop()
    console.log(userId);
    const [posts, setPosts] = useState([]);
      useEffect(()=>{
        fetchTodos(userId);
    }, [])
    
        const fetchTodos = async (id) =>{
            let response = await axios.get(`https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=${id}`)
            setPosts(response.data.todos)
            console.log(response.data.todos)
        }
        const deleteTodos= async (id)=>{
            let response=  await axios.delete(`https://bootcamp.todo.arhamsoft.org/client/todo/delete/${id}`)
            
        fetchTodos(userId);
            
        }
        const editTodos=async(id)=>{

        }
  return (
    <>
    <Button onClick={createTodo} className="create" variant='contained'>Create Todo</Button>
    <table class="table">
  <thead>
    <tr>
     
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
            {
                posts.map((todo, index)=>{
                    return (
                        <tr key={index}>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.desc}</td>
                            <td>
                            <div className="button">
                <Button className="delete-btn" variant="contained" onClick={() => deleteTodos(todo._id)}>Delete</Button>
                <Button className="update-btn" variant="contained" onClick={() => editTodo(todo._id)}>Update</Button>

             </div>
             </td>
                        </tr>
                    )
                })
            }
        </tbody>
</table>

    
    </>
  )
}

export default Create