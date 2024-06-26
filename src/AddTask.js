import react, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
// import App from './App.css'
// import {Button } from 'react-icons/'

const AddTask = ({todolist,settodolist}) => {

    const [newtext,setnewtext]=useState("")

    const onTextChange = (evt) => {
      const text = evt.target.value
      setnewtext(text)
    }

    
    const addTask=(item)=>{
       const newid = todolist.length !==0 ? todolist[todolist.length-1].id + 1 : 1; 
       const newTaskItem = {id:newid,descr:item,checked:false}
       const newTaskList = [...todolist,newTaskItem]
      //  setnewtext(newTaskList)
      settodolist(newTaskList)
       //setting the text into list 
    }
 
    const handleSubmit=(event) =>{
     event.preventDefault()
     addTask(newtext)
     setnewtext("")
    }


    return(
    <form className="form-group" onSubmit={(event)=>{handleSubmit(event)}}>
        <label htmlFor="addtask">Add task: </label>
        <div className='input-group'>
                <input 
                id="addtask"
                value={newtext}
                autoFocus
                className='form-control'
                type="text"
                required
                placeholder='I want to do task'
                onChange={(evt) => onTextChange(evt)}
                />           
                 
                <span className="input-group-text" style={{color:"blue"}}>
                      <FaPlus role="button"></FaPlus>
                </span>
    </div>
    </form>
 );
}
 
export default AddTask;