import React from 'react'
import logo from '../../assets/img/logo.png';
import '../logo/logo.scss'

export const Logo = () =>{
    return(
        <div className = 'header__logo'>
            <a className='header__logo-img' href='/'>
                <img className='logo' src={logo} alt="logo"/>
             </a>
        </div>
    )
}


