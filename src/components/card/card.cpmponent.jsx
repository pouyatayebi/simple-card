import React from 'react'
import './card.style.css'

export const Card=({user})=>{
    return(
        <div className="card-container">
            <img alt="avatar" src={user.avatar} />
            <h2 key={user.id}>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
        </div>
    )
}