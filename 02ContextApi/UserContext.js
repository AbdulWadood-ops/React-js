import React from "react"

const ThemeContext = React.createContext({
    mode:"light",
    lightMode :()=>{},
    darkMode :()=>{}
})


const  ThemeContextProvider = ThemeContext.Provider
export default  ThemeContextProvider

export function ThemeProvider(){

    return React.useContext(ThemeContext)
}