import React,{useState,useEffect} from 'react'
import "./Home.css";
import PlantCard from '../../component/PlantCard/PlantCard'

import axios from 'axios'


function Home() {
  const [plants,setPlants]=useState([])

  const loadPlants = async ()=>{
    const response= await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    setPlants(response.data.data)
  }

  useEffect(()=>{
    loadPlants()
  },[])

  return (
    <div>
      <h1 className='heading'>Nursery Client</h1>
      {
        plants.map((plant,i)=>{
          const {_id,name,category,image,price,description}=plant

          return(
            <PlantCard 
            key={i}
            _id={_id}
            name={name}
            category={category}
            image={image}
            price={price}
            description={description}
            
            ></PlantCard>
          )

          })
      }

    </div>
  )
}

export default Home
