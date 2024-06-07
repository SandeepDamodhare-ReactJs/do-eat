import React, { useContext } from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from './ThemeContextProvider';
import { FcSearch } from "react-icons/fc";
import { BsCartPlusFill } from "react-icons/bs";
// import { ThemeContextProvider } from './ThemeContextProvider';
const NavBar = () => {

  const value = useContext(ThemeContext)
  const {theme, Toggle} = value
console.log(value)
  return (
    <DIV  style={{backgroundColor: theme ? "red" :"orange"}} >
        <div className='left'>
<img src="https://foodorder-pink.vercel.app/assets/Group%2047-VPe2s1rp.png" alt="" />
<Link to={"/"}><p><div style={{color:"white"}}><h3>HOME</h3></div></p></Link>



<Link to={"/menu"}><p><div style={{color:"white"}}><h3>MENU</h3></div></p></Link>
<Link to={"/contactus"}><p><div style={{color:"white"}}><h3>CONTACT US</h3></div></p></Link>
        </div>
        <div className='right'>

    {theme ?  <FaMoon color='white' size={40} onClick={Toggle}/> : <FaSun size={40} color='Yellow' onClick={Toggle}/>}      
        
       
<FcSearch  color='red' size={40} />
<BsCartPlusFill  size={40}  />
<Link to={"/login"}><p><button>Login</button></p></Link>
        </div>
    </DIV>
  )
}

export default NavBar;

const DIV = styled.div`
display:flex;
justify-content:space-between;
padding:20px;



.left{
  display:flex;
  gap:20px;
 
}
.left img{
  width:60px;
  height:60px
}
.right{
  display:flex;
  gap:20px;
}
.right button{
  background-color:green;
  color:white;

}

`