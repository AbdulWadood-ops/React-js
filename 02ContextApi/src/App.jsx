import Card from "./Card"
import ThemeBtn from "./ThemeBtn"
import ThemeContextProvider from "../UserContext"
import { useEffect, useState } from "react"
function App() {
const [mode , setMode ]=useState("light")
const lightMode=()=>{
  setMode("light");
}
function darkMode(){
     setMode("dark")
    }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(mode)

  },[mode])  

  return <>
 <ThemeContextProvider value={{mode,lightMode,darkMode}}>

    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

        </div>

          <ThemeBtn/>
        <div className="w-full max-w-sm mx-auto">
      <Card/>

        </div>
      </div>
    </div>

  </ThemeContextProvider>
  </>
}

export default App