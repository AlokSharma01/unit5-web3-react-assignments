import React from 'react'
import { Button } from './Buttons'

export const Body = () => {
  return (
    <div>
        <Button customize="
        
        background-color: #2490FD;
        padding:8px 20px;
        border:none;
        border-radius:2px;
        color:white;
        "
        
        
        >Primary button</Button>



        <Button customize="
        
        background-color: white;
        padding:8px 20px;
        border: 1px solid grey;
        border-radius:2px;
        color:black;
        "
        >Default button</Button>

        <Button customize="
        
        background-color: white;
        padding:8px 20px;
        border: 1px dashed;
        border-radius:2px;
        color:black;
        " 
        >Dashed button</Button>
        <br />
        <br />

        <Button customize="
        
        background-color: white;
        padding:8px 20px;
        border:none;
        border-radius:2px;
        color: black;
        " 
        >Text button</Button>

        <Button customize="
        
        background-color: white;
        padding:8px 20px;
        border:none;
        border-radius:2px;
        color: #2490FD;
        " 
        >Link button</Button>
    </div>
  )
}
