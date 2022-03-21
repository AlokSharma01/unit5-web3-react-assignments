import React from 'react'

export const GroceryInput = ({addItems, item, setItem}) => {

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
