import React from 'react'


export const ToDo = (todo,toggleTask) =>{
    return(
        <div key= {todo.id} className="zxc" >
            <div >
                {todo.task}
            </div>
            <div></div>
        </div>
    )
} 