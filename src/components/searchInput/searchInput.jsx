import React from 'react'
import '../searchInput/search-input.scss'
export const SearchInput = () => {
    return(
    <div className='header__search'>
        <input type='text' className='header__input' placeholder='Search task for to do'/>
    </div>
    )
}