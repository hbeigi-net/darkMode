import {GlobalStyle} from "./styles/globalStyle";
import ThemeToggle from "./components/ThemeToggle"
import ThemeContext ,{Theme} from "./contexts/ThemeContext"
import {useState , useEffect} from "react"
import SideCart from "./components/SideCart";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <SideCart />
    </ThemeContext.Provider>
  );
}

export default App;
