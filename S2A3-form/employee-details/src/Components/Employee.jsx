import React from 'react';

import {useState} from  'react'

export const Employee = () => {

    const [formData, setFormData] = useState({

        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        isMarried:false
    });

    const [martial, setMartial] = useState("")

    const handleChange =(e)=>{

        const {id,value,checked,type} = e.currentTarget ; 

        setFormData({

            ...formData,

            [id]: type==="checkbox"?checked:value
        })
        
    }

    const {name,age,address,department,salary,isMarried} = formData;

    const handleSubmit =(e)=>{

        e.preventDefault();

        fetch(` http://localhost:3001/employee`,{

        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "content-type": "application/json"
        }
        })

    }

  return (

    <div>
        <form onSubmit={handleSubmit}>

            <h1>Fill Details</h1>

            <input type="text" id="name"
                
                onChange={handleChange}
                placeholder="Enter Your Name" 

                value={name}
                
            /> <br/>

            <input type="number"  id="age"
                
                onChange={handleChange}
                placeholder="Age"  

                value={age}
            /><br/>

            <input type="text"  id="address"
                
                onChange={handleChange}
                placeholder="Enter your Address"  
                value={address}
            /><br/>

            <label>
                Department :
                <select  id="department" onChange={handleChange} value={department}>

                    <option value="">Select Department</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Others">Others</option>
                </select>
            </label> <br/><br/>

            <input type="number"  id="salary"
                
                onChange={handleChange}
                placeholder="salary"  
                value={salary}
            /><br/>

            <label>
                isMarried :
                <input type="checkbox" id="isMarried"  onChange={handleChange} checked={isMarried}/><br/>

            </label>

            <input type ="submit" value ="SUBMIT" />
        </form>
    </div>
  )
}
