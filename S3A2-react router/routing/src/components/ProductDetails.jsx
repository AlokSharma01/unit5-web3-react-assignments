import React from 'react';
import { useState,useEffect } from 'react';
import { useParams,useNavigate  } from 'react-router-dom';
import { NotFound } from './NotFound';

export const ProductDetails = () => {
  const {id}= useParams();
  const [length,setLength]=useState(false);
  const [product,setProduct] = useState([]);

  const productspage = useNavigate();
  const homepage = useNavigate();

  useEffect(() => {
    
    fetch(` http://localhost:3001/products/${id}`)
    .then((res)=> res.json())
    .then((res)=> 
      {
        if(Object.keys(res).length){

          
          setLength(true);
          // console.log(length);
          setProduct(res);
        }
        else{
          setLength(false)
        }
      }
    
    )
    .catch((res)=>console.log(res))
  }, [])

  const gotoHome=()=>{

    homepage("/")
  }
  const gotoProducts=()=>{

    productspage("/products")
  }

  if(!length){

    return (
      <>
        <NotFound/>
      </>
    )
  }
  return (
    <div>
      <h1>Product Detail</h1>

      <h2>Name: {product.name}</h2>
      <h2>Cost: {product.price}</h2>
      <h2>Id: {product.id}</h2>

      <button onClick={gotoProducts}>View all products</button>
      <button onClick={gotoHome}>Go to home</button>
    </div>
  )
}
