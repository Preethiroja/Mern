import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const[product,setProduct]=useState({})
    // const product=[
    //     {id:1,name:"laptop",price:"300000",description:'Acer laptop is 10th gen'},
    //     {id:2,name:"Mobile",price:"10000",description:'16gb ram'},
    //     {id:3,name:"Mouse",price:"1000",description:'gaming mouse with 8GB light'},
    //     {id:4,name:"KeyBoard",price:"3000",description:'keyborad with all keys'},
    // ]
    const {id}=useParams()
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => setProduct(data));
    },[])
    //const products=product.find((p)=>p.id==Number(id))
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{product.title   }</h2>
        <p>Price:₹{product.price}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails