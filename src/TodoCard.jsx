import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './card.css'

function TodoCard({todo, updatetodo, deletetodo, edittodo}) {
    function handleonchange(event){
        const updatedtodo = {...todo, completed : event.target.value === 'completed'};
        updatetodo(updatedtodo);
    };
    
    
  return (
    <>
        <div className="col-lg-6 col-md-12">
        <Card className='todo-card'>
        <Card.Body>
            <Card.Title>Name: {todo.name}</Card.Title>
            <Card.Text>
            <p>Description: {todo.description}</p>
            <div className="todo-select">
            <span>Status:</span> 
            <select value ={todo.completed ? 'completed' : 'not-completed'} onChange={handleonchange} className='select'>
                <option value = 'completed' className='option'>Completed</option>
                <option value = 'not-completed' className='option'>Not Completed</option>
            </select>
            </div>
            </Card.Text>
            <div className="btns">
            <Button variant="dark" onClick={()=>edittodo(todo.id)} className='todo-btn'>Edit</Button>
            <Button variant="dark" onClick={()=>deletetodo(todo.id)} className='todo-btn'>Delete</Button>
            </div>
        </Card.Body>
        </Card>
        </div>
    </>
  )
}

export default TodoCard