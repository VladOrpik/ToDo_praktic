import React from 'react'
import '../components/filter_style.scss' /*Ренейм файла*/
/*Интеры*/

const Filter = ()=>{ /*В одну строку 5 и 24*/
    return(
        <div>/*Класснейм filter сделать для вложенности*/
            <ul className='filter__list'>
                <li className='filter__item'>/*Компонентно разбить*/
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
