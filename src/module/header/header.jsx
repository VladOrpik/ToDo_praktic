import React from 'react';
import { Logo } from '../../components/logo/logo';
import { SearchInput } from '../../components/searchInput/searchInput';
import '../header/header.scss'

export const Header = () => {
    return(
      <div className='header'>
      <Logo/>
      <SearchInput/>
      </div>
    )
}