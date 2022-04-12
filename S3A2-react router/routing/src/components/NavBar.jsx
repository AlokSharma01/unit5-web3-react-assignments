import React from 'react'

import Styled from "styled-components"

import { Link, useNavigate } from 'react-router-dom'

const NavWrapper = Styled.div`

    width:100%;
    height:100px;
    display:flex;
    gap:40px;
    font-size:30px;
    align-items:center;
    background-color:black;
    padding-left:100px;
    color:white;
`

export const NavBar = () => {

    const navigate = useNavigate();

    const handleProducts =()=>{

        navigate("/products")
    }
    
  return (
    <NavWrapper>
        <Link to="/"><div>
            Home
        </div></Link>


        <div onClick={handleProducts}>
            products
        </div>
    </NavWrapper>
  )
}
