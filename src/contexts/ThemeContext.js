import {createContext} from "react"
export const Theme = {
    dark :{
        mode : "dark",
        palette : 
        {
            backGround : "#333",
            foreGround : "#fff",
            primary : "#91C788"
        }}
        ,
        light :{
            mode : "light",
            palette : 
            {
                backGround :  "#fffe",
                foreGround :"#333",
                primary : "#98DDCA"
            }
        }
        
}
const ThemeContext = createContext(Theme.light);
export default ThemeContext; 