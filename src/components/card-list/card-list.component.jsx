import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.cpmponent'

export const CardList=({data})=>{

    return(
        <div className="card-list">
             {data.map((user)=><Card key={user.id} user={user} />)}
        </div>
    )
}