import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './form.css'

function Form(props) {
    

    function handlechange(event){
        const{name,value}=event.target;
        props.settodo({...props.todo,[name]:value});
    };

    function handlesubmit(event){
        event.preventDefault();
        if(props.todo.name.trim() !== ''){
            props.addtodo(props.todo)
            props.settodo({name:'',description:''})
           
        }
    }
  return (
    <>
        <div className="row">
            <div className="col-12">
                <form onSubmit={handlesubmit}>
                    <label for ='name'><h5>Todo Name:</h5></label><br></br>
                    <input type='text'
                     name='name'
                     placeholder='TodoName'
                     value={props.todo.name}
                     onChange={handlechange}
                     className='input'>
                     </input><br></br>
                     <label for ='name'><h5>Todo Description:</h5></label><br></br>
                     <input type='text'
                     name='description'
                     placeholder='Todo Description'
                     value={props.todo.description}
                     onChange={handlechange}
                     className='input'>
                     </input><br></br>
                     <Button type='submit' variant="dark" className='form-btn'>Add Todo</Button>             
                </form>
            </div>
        </div>
    </>
  )
}

export default Form