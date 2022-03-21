import React from 'react'

export const GroceryList = ({data, handleDelete}) => {
  return (
    <div>

        {
            data.map((item)=>(

                    <div key={item.id}>

                        {item.title}
                        <button onClick={()=>handleDelete(item)}>delete</button>
                    </div>
                    
                    
     
            ))
        }
    </div>
  )
}
