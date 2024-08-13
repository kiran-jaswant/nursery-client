import React from 'react'
import './PlantCard.css'

function PlantCard(props) {
    const {key,_id,name,category,image,price,description}=props
  return (
    <div className='plantcard'>
        <h1>{name}</h1>
        <h4>{category}</h4>
        <h6>{description}</h6>
      
    </div>
  )
}

export default PlantCard
