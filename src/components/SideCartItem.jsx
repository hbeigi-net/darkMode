import React from 'react';
import styled from "styled-components"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const Paper = styled.div`
  width : 100% ; 
  padding-right: 5px ;
  margin-right : auto ; 
  margin-left : auto ;
  border-radius : 3px;
  position :relative ; 
  overflow :hidden !important ;  
  background-color : #6db5e6 ; 
  max-height : 70px;
  z-index :10 ;

`
const PrImg = styled.img`
  max-width : 90px ;
  /* max-height : 60px ;  */
  width : 100% ;
`
export default function SideCartItem() {
  return (
      <>
      <li className='my-1'>
       <Paper>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="priceNode d-flex flex-column flex-grow-1">
                <span className='price'> 999</span> <small className='text-success' style={{fontSize:"12px"}}>تومان</small>
            </div>
            <div className="titleNode d-flex flex-column ms-3">
              <div className="productTitle"> عنوان محصول </div>
              <div className="productCount d-flex justify-content-between">
                <IconButton aria-label="increase" size="small">
                    <AddIcon fontSize='small'/>
                </IconButton>
                <div className="countHolder">
                  3
                </div>
                <IconButton aria-label="increase" size="small">
                    <RemoveIcon fontSize='small'/>
                </IconButton>
              </div>
            </div>
            <div className="bannerNode positon-relative">
              {/* <img   className='img-fluid' alt="" /> */}
              <PrImg src={faker.image.image()} />
            </div>
          </div>
       </Paper>
      </li>
      </>
  )
}
