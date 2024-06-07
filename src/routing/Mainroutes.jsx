import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../components/Home'
import Menu from '../page/Menu'
import ContactUS from '../page/ContactUS'
import Login from '../page/Login'
import PrivateRoutes from '../PrivateRoutes'
import SignUp from '../page/SignUp'

const Mainroutes = () => {
  return (
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/menu" element={ <PrivateRoutes><Menu/> </PrivateRoutes>  }/>
<Route path="/contactus" element={<PrivateRoutes><ContactUS/></PrivateRoutes>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
</Routes>
)
}

export default Mainroutes