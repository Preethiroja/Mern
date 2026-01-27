import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const product=[
        {id:1,name:"laptop",price:"300000"},
        {id:2,name:"Mobile",price:"10000"},
        {id:3,name:"Mouse",price:"1000"},
        {id:4,name:"KeyBoard",price:"3000"},
    ]
  return (
    <div>
        <h2>Products</h2>
        {product.map((product)=>(
            <div key={product.id}>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <Link to ={`/product/${product.id}`}>
                   view Details 
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Product