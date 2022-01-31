import Drawer from "./subc/drawer";
import {useState } from "react"
import {useContext} from "react"
import ThemeContext from "../contexts/ThemeContext"
import styled from "styled-components";
import React from 'react';
import SideCartItem from "./SideCartItem";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from '@mui/material/Button'
import Btn1 from "./subc/btn1"
const List = styled.ul`
  width : 100% ; 
  height : 70vh ; 
  overflow-y : auto ; 
  border-radius :3px ; 
  background-color : #253f5e5b ; 
  box-shadow : 0 0 3px 1px #253f5e5b ;
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
              سبد خرید <LocalMallIcon />
            </h4>
          </div>

          <div className="sideCartBody">
            <List>
              <SideCartItem />
              <SideCartItem />
              <SideCartItem />
         
            </List>
          </div>

          <div className="mt-5 d-flex justify-content-between align-items-center">
     

            <div className="costSummery">
              <p className="m-0">
                مجموع : 
              </p>
              <span className="costSum fs-5 d-block" >
                   345,233,12  <small> تومان</small>
              </span>
            </div>
            <Btn1 variant="contained" color="secondary">
                پرداخت 
            </Btn1>
        
          </div>
          </div>
        </Drawer>
      </>
  );
}
