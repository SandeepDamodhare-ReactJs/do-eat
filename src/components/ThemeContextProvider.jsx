
// C - P - C
// create start
import { createContext, useState } from "react";
  export  const ThemeContext = createContext()
// create end





 // context provider
 export  function ThemeContextProvider({children}){
const [theme, setTheme] = useState(false)
const Toggle = () => {
    setTheme(prev => !prev)
}
     return <ThemeContext.Provider value={{theme, Toggle}}>
{children }
     </ThemeContext.Provider>
}