import React from 'react';
import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react"


const Theme = {
    dark: {
        mode: "dark",
        palette: {
            backGround: "#333",
            foreGround: "#fff",
            primary: "#91C788"
        }
    },
    light: {
        mode: "light",
        palette: {
            backGround: "#fffe",
            foreGround: "#333",
            primary: "#98DDCA"
        }
    }

}

const ThemeContext = createContext(null);

export  default function ThemeProvider({ children}) {

    const  [mode, setMode] = useState("light");
    const [theme, setTheme] = useState(Theme.light)
    useEffect(() => {
        mode ==="dark"?setTheme(Theme.dark): setTheme(Theme.light);
        window.localStorage.setItem("themeMode" , mode);
    }, [mode]);
    // useEffect(() => {
    //     const localTheme = window.localStorage.getItem("themeMode");
    //     console.log(Theme[localTheme]);
    //     setMode(localTheme);
    //     // localTheme ? setTheme(Theme[localTheme]) : setTheme(Theme[localTheme]);
    // }, []);

    
    return <>
        <ThemeContext.Provider value= {{theme , mode , setMode}}>
        {
            children
        } 
        </ThemeContext.Provider> 
        </>;
}

export const useTheme = () => {
    return useContext(ThemeContext);
}