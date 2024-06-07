
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/ThemeContextProvider'
import { BsDisplay } from 'react-icons/bs'

import image from '../assets/Biryani.png'


const Menu = () => {
  const [Product, setProduct]= useState([
      
    {
      title:"Biryani",
      image: "https://i.postimg.cc/tgdtKJWw/dish18.jpg",
      menu:"Biryani"
      
    },
    {
      title:"Biryani",
      image: "https://i.postimg.cc/tgdtKJWw/dish18.jpg",
      menu:"Biryani"
    },
    {
      title:"Burger",
      image:"https://i.postimg.cc/2yDcF57V/menu2.png",
      menu:"Burger"
    },
    {
      title:"Combos",
      image:"https://i.postimg.cc/D0Ghmmy0/combos.png",
      menu:"Combos"
    },
    {
      title:"Main Course",
      image:"https://i.postimg.cc/wjpqy5Np/mani-course.png",
      menu:"Main Course"
    },
    {
      title:"Breakfast",
      image:"https://i.postimg.cc/QtnwQDn7/breakfast.jpg",
      menu:"Breakfast"
    }
  ])
const [temp, setTemp] = useState([
      
  {
    title:"Biryani",
    image: "https://i.postimg.cc/tgdtKJWw/dish18.jpg",
    menu:"Biryani"
    
  },
  {
    title:"chicken Biryani",
    image: "https://i.postimg.cc/tgdtKJWw/dish18.jpg",
    menu:"Biryani"
  },
  {
    title:"Burger",
    image:"https://i.postimg.cc/2yDcF57V/menu2.png",
    menu:"Burger"
  },
  {
    title:"Combos",
    image:"https://i.postimg.cc/D0Ghmmy0/combos.png",
    menu:"Combos"
  },
  {
    title:"Main Course",
    image:"https://i.postimg.cc/wjpqy5Np/mani-course.png",
    menu:"Main Course"
  },
  {
    title:"Breakfast",
    image:"https://i.postimg.cc/QtnwQDn7/breakfast.jpg",
    menu:"Breakfast"
  }
])


  const menu = [
    
    {
      title:"Biryani",
      image: image,
      
    },
    {
      title:"Burger",
      image:"https://i.postimg.cc/2yDcF57V/menu2.png",
      
    },
    {
      title:"Combos",
      image:"https://i.postimg.cc/D0Ghmmy0/combos.png",
      
    },
    {
      title:"Main Course",
      image:"https://i.postimg.cc/wjpqy5Np/mani-course.png",
     
    },
    {
      title:"Breakfast",
      image:"https://i.postimg.cc/QtnwQDn7/breakfast.jpg",
    
    }
  ]


const value = useContext(ThemeContext)
   const {theme, Toggle} = value
// console.log(value)

const handleFilter = (props) => {
  console.log(props)
  console.log(Product)
const newArray = temp.filter((item) => item.menu == props.title)
setProduct(newArray)
console.log(newArray)
}


  return (
    <>

<div style={{display:"flex"}} >
      {
                /*  This maps each array item to a div adds
                the style declared above and return it */
               
                menu.map((menu) => (
                    <div style={{margin:"auto", border:"1px solid blue"}} onClick={()=>handleFilter(menu)}>
                      
                       <h1>{menu.title}</h1> 
                       <img  src={menu.image}  style={{width:"100px", height:"100px"}}/>
                       <p>{menu.price}</p>
                    </div> 
                ))
            }
            </div>
<div style={{display:"flex"}}>
  <div style={{width:"30%", height:"100vh", border:"1px solid red"}}></div>


  <div style={{width:"70%", height:"100vh", border:"1px solid red"}}>
  <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
      {
                /*  This maps each array item to a div adds
                the style declared above and return it */
               
                Product.map((menu) => (
                    <div style={{margin:"auto"}}>
                      
                       <h1>{menu.title}</h1> 
                       <img  src={menu.image}  style={{width:"200px", height:"200px"}}/>
                       <p>{menu.price}</p>
                    </div> 
                ))
            }
            </div>
  </div>
 
</div>
    </>
  )
}

export default Menu