import React, {useState} from 'react';
import '../filterElement/filter-element.scss';

export const FilterElement = (props) =>{
    
    const [isActive, setIsActive]= useState(false);
    const onClickFilter = (event) =>{
    event.preventDefault();
    setIsActive(!isActive);
    }
    return(
        <div className="filter__block">
            <div className="asd">
                <span  onClick={e=> onClickFilter(e)} className={`filter__item ${isActive ? 'blue' :''} `}>
                    <a  className='filter__link' href='/'>{props.name}</a>
                </span> 
                </div>
        </div>
    )

}