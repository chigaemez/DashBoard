import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart: false,
    userProfile: false,
    notification: false,
}


export const ContextProvider = ({children}) => {
    const [ activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [currentColor, setCurrentColor] = useState("#03c9d7")
    const [currentMode, setCurrentMode] = useState("Light")
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem("ThemeMode", e.target.value)
        setThemeSettings(false)
    }

    const setColor = (mode) => {
        setCurrentColor(mode)
        localStorage.setItem("ColorMode", mode)
        setThemeSettings(false)
    } 


    const handleClick = (clicked) =>{
        
        setIsClicked({...initialState, [clicked] : true})
        
        
    }

    const [screenSize, setScreenSize]= useState(undefined)


    return (
        <StateContext.Provider
        value={{
            
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked, handleClick,
            screenSize, setScreenSize,
            currentColor, currentMode,
            themeSettings, setThemeSettings,
            setMode, setColor
        }}
        >
            {children}
        </StateContext.Provider>
    )
        
    
}


export const useStateContext = () => useContext(StateContext)