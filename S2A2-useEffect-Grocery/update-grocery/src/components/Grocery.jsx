import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import { v4 as uuid} from 'uuid';
import { useState,useEffect } from 'react';

export const Grocery = () => {

    const [data, setData] = useState([]);
    const [page,setPage] = useState(1);
    


    useEffect(() => {
      
       getTodos();
    }, [page])


    const getTodos=()=>{

        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)

        .then((res)=> res.json())
        .then((res)=>setData(res))
    }
    

 

  return (

        <>

            <GroceryInput />

            <GroceryList  data={data} />

            <button onClick={()=>setPage(page-1)}>prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
        </>
)
}
