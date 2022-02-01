import {GlobalStyle} from "./styles/globalStyle";
import ThemeToggle from "./components/ThemeToggle"
import ThemeContext ,{Theme} from "./contexts/ThemeContext"
import {useState , useEffect} from "react"
import Shop from "./components/Shop"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ShopProduct from "./components/ShopProduct"
function App() {
  
    const  [mode, setMode] = useState("dark");
    const [theme, setTheme] = useState(Theme.light);
    useEffect(() => {
        mode ==="dark"? setTheme(Theme.dark) : setTheme(Theme.light) ;
      }, [mode]);
    
      return (
          <ThemeContext.Provider value={theme} >
            <GlobalStyle theme={theme}/>
            <ThemeToggle toggler={setMode}/>
            <Shop/>
          </ThemeContext.Provider>
        );
      }
      
      export default App;
      
      
