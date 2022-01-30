import Drawer from "./subc/drawer";
import {useState } from "react"
import {useContext} from "react"
import ThemeContext from "../contexts/ThemeContext"
import React from 'react';
export default function SideCart() {
  const theme = useContext(ThemeContext) ; 
    const [open , setOpen] = useState(true);

    return (
      <>
        <button onClick={(e)=>setOpen(!open)}  style={{right : "50px" , position : "fixed"}}>
          toggle
        </button>
        <Drawer width ={300} open ={!open} mode ={theme.mode} >
          <div className="position-relative">

          <div className=" position-absolute top-0 pt-4 start-50 translate-middle">
            <h4 className="  m-0 ">
              Cart 
            </h4>
          </div>

          </div>
        </Drawer>
      </>
  );
}
