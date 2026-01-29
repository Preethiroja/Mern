import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const [product,setProducts]=useState([])
    const getProducts=async()=>{
        const res=await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(data => setProducts(data));
        getProducts()
    },[])
    // const product=[
    //     {id:1,name:"laptop",price:"300000"},
    //     {id:2,name:"Mobile",price:"10000"},
    //     {id:3,name:"Mouse",price:"1000"},
    //     {id:4,name:"KeyBoard",price:"3000"},
    // ]
  return (
    <div>
        <h2>Products</h2>
        {product.map((product)=>(
            <div key={product.id}>
                <h4>{product.title}</h4>
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