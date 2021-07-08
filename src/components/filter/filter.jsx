import React, {useState} from 'react';
import '../filter/filter.scss'
import { FilterElement } from '../filterElement/filterElement';


 export const Filter = () => {
    const arr =['Add','Active','Done']
    
    
    return(
        <div className='filter_box'>  
        <div className="qwerty">
        {arr.map(el=><FilterElement name={el}/>)}
        </div>
        </div>
        )  
    } 
