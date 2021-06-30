import React from 'react'
import './search-box.style.css'

export const SearchBox=({placeholder="serach here",onChange})=>{
    return (
        <input className="search" type="search" placeholder={placeholder} onChange={onChange} />
    )
}