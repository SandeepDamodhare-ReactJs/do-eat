import React from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContextProvider'
import {Link, useNavigate} from "react-router-dom"

// import { FaSun } from "react-icons/fa6";
// import { FaMoon } from "react-icons/fa";

const Login  = () => {


const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


const handleChangeEmail = (e) => {
setEmail(e.target.value)
}
const handleChangepass = (e) => {
setPass(e.target.value)
}

const handleLogin = (e) => {
  e.preventDefault()
  let form = {email,pass, isAuth:"123456"}
  localStorage.setItem("token", "true");
alert("login success")
navigate("/")
}
const value = useContext(ThemeContext)
const {theme, Toggle} = value
console.log(value)
  return (
    <>
    <div style={{background:"Green"}}>
    <marquee>Not an valid user?? Then SignUp</marquee>
    </div>

<div  style={{backgroundColor: theme ? "orange" :"DarkSeaGreen", height:"100vh"}}>  
      <form className="App" onSubmit={handleLogin}>
                Email:   <input type="email"  onChange={(e)=>handleChangeEmail(e)}/> <br /> <br /> 
               Password: <input type="password"  onChange={(e)=>handleChangepass(e)}/> <br /> <br />
               <input type={"submit"} style={{ backgroundColor: "Blue" }} /><br />
              <Link to={"/signup"}><p><button>Sign Up</button></p></Link>
      </form>
 </div>
    </>
  )
}
export default Login 