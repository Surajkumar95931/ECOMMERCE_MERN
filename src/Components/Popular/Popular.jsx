import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={Item.id} name={Item.name} image={item.image}/>
            })}
        </div>
    </div>
  )
}
export  default Popular;