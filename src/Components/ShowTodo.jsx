
import {useState,useEffect} from "react"
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom';

function ShowTodo() {
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
  return (
    <>
    <h1>This is TODOS Page</h1>
    <table>
        <thead>
            <tr>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>View Details</th>
            </tr>
        </thead>
        <tbody>
            {
                posts.map((todo, index)=>{
                    return (
                        <tr key={index}>
                            <td>{todo.userId}</td>
                           <td>{todo._id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.desc}</td>
                            <td>
                            <div className="button">
                <button className="delete-btn" onClick={() => deleteTodos(todo._id)}>Delete</button>
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

export default ShowTodo