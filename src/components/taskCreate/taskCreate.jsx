import React from 'react'
import '../taskCreate/task-create.scss'

export const TaskCreate = () => {
    return( 
        <div>
            <div className='form'>
            <label className='label__create'>New task</label>
            <div className='taskCteateComponent'>
                <input className='create_input' name='create' />
            </div>
            <button className='button__add'>Add</button>
        </div>
        </div>
    )
}