import React from 'react'

export const GroceryList = ({data}) => {
  return (
    <div>

        {
            data.map((item)=>(

                    <div key={item.id}>

                        {item.title}
                    </div>
                    
                    
     
            ))
        }
    </div>
  )
}
