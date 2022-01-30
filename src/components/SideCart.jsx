import Drawer from "./subc/drawer";
import {useState } from "react"
import {useContext} from "react"
import ThemeContext from "../contexts/ThemeContext"
import styled from "styled-components";
import React from 'react';
import SideCartItem from "./SideCartItem";
const List = styled.ul`
  width : 100% ; 
  height : 70vh ; 
  overflow-y : auto ; 
  /* border : 1px solid #D77FA1 ;  */
  padding : 5px ; 

`
export default function SideCart() {
  const theme = useContext(ThemeContext) ; 
    const [open , setOpen] = useState(true);

    return (
      <>
        <button onClick={(e)=>setOpen(!open)}  style={{right : "50px" , position : "fixed"}}>
          toggle
        </button>
        <Drawer width ={300} open ={!open} mode ={theme.mode} >
          <div className="position-relative d-flex flex-column " style={{height : "90vh"}}>

          <div className="sideCartHeader pt-2 text-center mb-3">
            <h4 className="  m-0 ">
              سبد خرید 
            </h4>
          </div>

          <div className="sideCartBody">
            <List>
              <SideCartItem />
              <SideCartItem />
              <SideCartItem />
         
            </List>
          </div>

          </div>
        </Drawer>
      </>
  );
}
