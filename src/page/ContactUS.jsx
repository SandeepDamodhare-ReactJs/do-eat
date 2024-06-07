import React from 'react'

import { useState } from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContextProvider'

const ContactUS = () => {


  
const value = useContext(ThemeContext)
const {theme, Toggle} = value
console.log(value)

  return (
    
<div  style={{backgroundColor: theme ? "lightpink" :"plum", height:"100vh"}}>
  
  
<div>ContactUS</div>
  
    </div>
  )
}

export default ContactUS