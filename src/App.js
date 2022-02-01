import {GlobalStyle} from "./styles/globalStyle";
import ThemeToggle from "./components/ThemeToggle"
import {useState , useEffect} from "react"
import Shop from "./components/Shop"
import {useTheme} from "./contexts/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ShopProduct from "./components/ShopProduct"
function App()
{
  const {theme , setMode} =  useTheme();


  return (
      <>
          <GlobalStyle theme={theme}/>
          <ThemeToggle toggler={setMode}/>
      </>
  );
}
      
export default App;
      
      
