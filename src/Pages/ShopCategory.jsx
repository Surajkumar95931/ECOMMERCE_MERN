import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'
 const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>ShopCategory
      <img src={props.banner} alt=""/>
      <div className="shopcategoty-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <dic className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </dic>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item/>
          }

        })}
      </div>
    </div>
  )
}

export default ShopCategory;
