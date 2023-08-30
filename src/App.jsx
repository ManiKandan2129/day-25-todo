import { useState } from 'react'
import './App.css'
import Form from './Form'
import TodoCard from './TodoCard'

function App() {
  const[todolist, settodolist] = useState([]);
  const[filter, setfilter] = useState('all')
  const[todo, settodo] = useState({name:'',description:''});
  console.log(todo);

  
  function addtodo(newtodo){
    settodolist([...todolist,{...newtodo, id: Date.now(), completed: false}]);
  };
  
  function updatetodo(newtodo){
    const updatedtodolist = todolist.map((todo)=>(todo.id === newtodo.id ? newtodo : todo));
    settodolist(updatedtodolist);
  };

  const deletetodo = (id) => {
    const updatedtodolist = todolist.filter((todo) => todo.id !== id);
    settodolist(updatedtodolist);
  };

  function edittodo(id){
    todolist.forEach((todos,index)=>{
      if(todos.id === id){
        settodo({...todos})
      }
    })

  
    const updatedtodolist = todolist.filter((todo) => todo.id !== id);
    settodolist(updatedtodolist);
    
  };
  

  const filteredtodo = todolist.filter((todo)=>
    filter === 'completed' ? todo.completed : filter === 'not-completed' ? !todo.completed : true
  );

  return (
    <>
      <div className="container">
        <div className="row" id='main-row'>
          <div className="col text-center">
            <h1 className='head'>Todo App</h1>
          </div>
        </div>
        <div className="row" id='row1'>
          <div className="col-lg-4" id='form'>
            <div className="form">
            <h2 className='sub'>Create a New Todo...!</h2>
            <Form 
            addtodo = {addtodo}
            todo = {todo}
            settodo = {settodo}></Form>
          </div>
          </div>
          <div className="col-lg-8">
            <div className="options">
            <select value={filter} onChange={(e)=>setfilter(e.target.value)} className='card-select'>
              <option value='all' className='card-options'>All</option>
              <option value='completed' className='card-options'>Completed</option>
              <option value='not-completed' className='card-options'>Not Completed</option>
            </select>
            </div>
            <div className="row">
           
              { filteredtodo.map((todo)=>(
                <TodoCard
                key = {todo.id}
                todo = {todo}
                updatetodo = {updatetodo}
                edittodo = {edittodo}
                deletetodo={deletetodo}
                ></TodoCard>
              ))}
            
            </div>
          </div>
        </div>
      </div>  
     
    </>
  )
}

export default App
