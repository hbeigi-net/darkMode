import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/globalStyle.css";
import ThemeProvider  from "./contexts/ThemeContext";

import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    <ThemeProvider>
     <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
