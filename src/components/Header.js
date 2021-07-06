import React from 'react'
import logo from '../img/logo.png';
import '../components/Header_style.scss' /*Нейминг поменять*/
const Header =()=>{ /*4 и 23 строка объеденить в одну и порефакторить пробелы*/
    return(
        <div>/*Убрать*/
             <div className='wrapper'> /*Попытаться избавится от большего кол-ва дивов*/
                 <div className='header__inner'>
                     <div className = 'header__logo'>
                         <a className='header__logo-img' href='/'>
                             <img className='logo' src={logo} alt="logo"/>
                         </a>
                     </div>
                     <div className='header__search'>
                         <input type='text' className='header__input' placeholder='Search task for to do'/>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Header;

