// import {GlobalStyle} from "./styles/globalStyle";
// import ThemeToggle from "./components/ThemeToggle"
// import ThemeContext ,{Theme} from "./contexts/ThemeContext"
// import {useState , useEffect} from "react"
// import SideCart from "./components/SideCart";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ShopProduct from "./components/ShopProduct"
// function App() {
  
  //   const  [mode, setMode] = useState("dark");
  //   const [theme, setTheme] = useState(Theme.light);
  //   useEffect(() => {
    //     mode ==="dark"? setTheme(Theme.dark) : setTheme(Theme.light) ;
    //   }, [mode]);
    
    //   return (
      //     <ThemeContext.Provider value={theme} >
      //       <GlobalStyle theme={theme}/>
      //       <ThemeToggle toggler={setMode}/>
      //       <ShopProduct/>
      //     </ThemeContext.Provider>
      //   );
      // }
      
      // export default App;
      
      
import SideCart from "./components/SideCart";
import ShopProduct from "./components/ShopProduct"
import {Routes , Route } from "react-router-dom"
import Nav from "./components/Nav";
export default function App()
{

  return <>
        <Nav/>
        <Routes>
          <Route path="/" element={<ShopProduct/>}/>
          <Route path="blog" element={<SideCart/>}/>
        </Routes>

  </>
}
