import React from 'react';
import {Filter} from '../components/mainContentComponents/filter.jsx';
import {TaskCreate} from '../components/mainContentComponents/taskCreate.jsx'

export const MainContent = () => {
    return(
        <div>
        <Filter/>
        <TaskCreate/>
        </div>
    )

}