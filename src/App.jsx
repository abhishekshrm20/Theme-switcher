import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'
 
function App() {

  const [themeMode, setTheme] = useState("Light")
  const lightTheme = ()=>{
    setTheme("light")
  }
  const darkTheme = ()=>{
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
  return (

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>
          
        <div className="w-full max-w-sm mx-auto">
        <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
