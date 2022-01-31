import {GlobalStyle} from "./styles/globalStyle";
import ThemeToggle from "./components/ThemeToggle"
import ThemeContext ,{Theme} from "./contexts/ThemeContext"
import {useState , useEffect} from "react"
import SideCart from "./components/SideCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route , Link} from "react-router-dom"
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
      {/* <Link to="/about">
        hello world
      </Link>
      <Routes>

        <Route path="/" element={<SideCart/>}></Route>
        <Route path="/about" element={<ThemeToggle/>}/> */}
      {/* </Routes> */}


    </ThemeContext.Provider>
  );
}

export default App;
