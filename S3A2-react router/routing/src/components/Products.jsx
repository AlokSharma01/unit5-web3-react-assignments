import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Table = styled.table`
text-align:center;
width:80%;
border:2px solid black;
margin-top:30px;
margin-left:10%;
font-size:20px;

`

export const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch(' http://localhost:3001/products/')
    .then((res)=> res.json())
    .then((res)=> setProducts(res))
    .catch((res)=>console.log(res))
  
    
  }, [])
  
  return (
    <>
    <Table>
        <thead>
            <tr>
              <th>Products</th>
              <th>Cost</th>
              <th>View more</th>
            </tr>
        </thead>
        <tbody>

        {products.map((item)=>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Link to={`/products/${item.id}`}>view more...</Link></td>
        </tr>
        
        )}

        </tbody>
    </Table>

    </>
  )
}
