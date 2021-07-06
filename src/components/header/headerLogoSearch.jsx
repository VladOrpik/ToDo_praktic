import React from 'react'
import logo from '../../assets/img/logo.png';
import '../header/header-logo-search.scss' 

 export const HeaderLogoSearch = () => { 
        return(
            <div className='header'>
                <div className = 'header__logo'>
                    <a className='header__logo-img' href='/'>
                        <img className='logo' src={logo} alt="logo"/>
                        </a>
                </div>
                     <div className='header__search'>
                         <input type='text' className='header__input' placeholder='Search task for to do'/>
                     </div>
                 </div>
    )
}

