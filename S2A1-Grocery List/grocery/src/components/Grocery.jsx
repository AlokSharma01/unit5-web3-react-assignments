import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import { v4 as uuid} from 'uuid';
import { useState } from 'react';

export const Grocery = () => {

    const [data, setData] = useState([]);
    const [item, setItem] = useState("");

    const addItems = (item) =>{

        const payload ={

            title: item,
            status:false,
            id: uuid(),
            
        }

        setData([...data,payload]);

        setItem("")

    }

    const handleDelete =(deleteThisItem)=>{

        const newList = data.filter((item) => item.id !== deleteThisItem.id);

        setData(newList)
    }

  return (

        <>

            <GroceryInput addItems={addItems} item={item} setItem={setItem}/>

            <GroceryList  data={data} handleDelete={handleDelete}/>
        </>
)
}
