import React from 'react'
import '../components/filter_style.scss'


const Filter = ()=>{
    return(
        <div>
            <ul className='filter__list'>
                <li className='filter__item'>
                  <a className='filter__link' href='/'> All</a>  
                  </li>   
                <li className='filter__item'>
                <a className='filter__link' href='/'>Active</a>
                </li> 
                <li className='filter__item'>
                <a className='filter__link' href='/'>Done</a>
                </li>  
            </ul>
        </div>
    )
}


export default Filter;