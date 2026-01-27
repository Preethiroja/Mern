import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const product=[
        {id:1,name:"laptop",price:"300000",description:'Acer laptop is 10th gen'},
        {id:2,name:"Mobile",price:"10000",description:'16gb ram'},
        {id:3,name:"Mouse",price:"1000",description:'gaming mouse with 8GB light'},
        {id:4,name:"KeyBoard",price:"3000",description:'keyborad with all keys'},
    ]
    const {id}=useParams()
    const products=product.find((p)=>p.id==Number(id))
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{products.name   }</h2>
        <p>Price:₹{products.price}</p>
        <p>{products.description}</p>
    </div>
  )
}

export default ProductDetails