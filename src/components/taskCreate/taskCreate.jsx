import React, { useState } from 'react'
import '../taskCreate/task-create.scss'

export const TaskCreate = ({addTask}) => {
    const [useInput,setUseInput] = useState('');
    
    const createTaskHandler = () => {
     addTask(useInput)
    }
    const handleChange = (e) => {
     setUseInput(e.target.value)
     
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        setUseInput('')
    }
    const handleKeyPress = (e) =>{
         if(e.key==="Enter"){
             handleSubmit(e)
         }
    }
    return( 
        <div>
            <div onSubmit={handleSubmit} className='form'>
            <label className='label__create'>New task</label>
            <div className='taskCteateComponent'>
                <input value={useInput} onKeyDown={handleKeyPress} onChange={handleChange} className='create_input' name='create' />
            </div>
            <button onClick={createTaskHandler} className='button__add'>Add</button>
        </div>
        </div>
    )
}