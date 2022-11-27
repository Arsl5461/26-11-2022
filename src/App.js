
import './App.css';
import Create from './Components/Create';
import {Routes,Route} from "react-router-dom"
import CreateTodo from './Components/CreateTodo';
import ShowTodo from './Components/ShowTodo';
import EditTodo from './Components/EditTodo';

function App() {
  return (
  <>

<Routes>
<Route path="/25524" exact={true} element={<Create/>}></Route>
<Route path="/create" element={<CreateTodo/>}></Route>
{/* <Route path="/show" element={<ShowTodo/>}></Route> */}

<Route path="25524/edit/:id" exact={true} element={<EditTodo/>}></Route>
</Routes>

  </>
  );
}

export default App;
