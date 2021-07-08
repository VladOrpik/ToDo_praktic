import React, { useState } from 'react';
import { Filter } from '../../components/filter/filter.jsx';
import {TaskCreate} from '../../components/taskCreate/taskCreate.jsx'
import { ToDo } from '../../components/ToDo/toDo.jsx';

export const MainContent = () => {
   const  [tod,setTod]= useState([]);

    const handleToggle = ()=>{
        
    }
    const addTask = (newItem) => setTod([...tod, newItem])
    
    return(
        <div>
        <Filter/>
        <TaskCreate addTask={addTask} />
        {tod.map((task)=>{
            return(
                <ToDo
                task={task}
                
                toggleTask={handleToggle} />
            )
        })}
        </div>
    )

}