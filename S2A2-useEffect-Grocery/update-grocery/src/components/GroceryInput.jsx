import React from 'react';

import { useState} from 'react';

export const GroceryInput = () => {

  const [item, setItem] = useState("");


  const addItems = (item) =>{

    const payload ={

        title: item,
        status:false,
        
    }

    fetch(`http://localhost:3001/todos`,{
        method:"POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type":"application/json"
        }
    }).then((res)=>console.log(res))


    setItem("");

  }

  return (
    <div>

        <input placeholder='Add item' 

            value={item} 
            onChange={(e)=> setItem(e.currentTarget.value)}
        />

        <button onClick={()=> addItems(item)}>Add Item</button>
    </div>
  )
}
