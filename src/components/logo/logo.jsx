import React from 'react'
import logo from '../../assets/img/logo.png';
import '../logo/logo.scss'

export const Logo = () =>{
    return(
        <div className = 'logo'>
            <a className='logo-img' href='/'>
                <img className='logo' src={logo} alt="logo"/>
             </a>
        </div>
    )
}


