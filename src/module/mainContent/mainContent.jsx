import React, { useState } from 'react';
import { Filter } from '../../components/filter/filter.jsx';
import {TaskCreate} from '../../components/taskCreate/taskCreate.jsx'
import { ToDo } from '../../components/ToDo/toDo.jsx';

export const MainContent = () => {
   const  [tod,setTod]= useState([]);

    const handleToggle = ()=>{
        
    }
    const addInput = (useInput) =>{
            if(useInput){
                const newItem = {
                    ad: Math.random().toString(36).substr(2,9),
                    task: useInput,
                    complete: false
                }
                setTod([...tod,newItem])
            }
    }
    return(
        <div>
        <Filter/>
        <TaskCreate addInput={addInput} />
        {tod.map((todo)=>{
            return(
                <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle} />
            )
        })}
        </div>
    )

}