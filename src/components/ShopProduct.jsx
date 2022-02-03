import React from 'react';
import {useTheme} from "../contexts/ThemeContext"
import styled from "styled-components"
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import Btn2 from "./subc/btn2"
const Paper = styled.div`
    background-color : ${props=> "#5495e6"};
    box-shadow : 0 0 2px black ; 
    position :relative ; 
    overflow:hidden ; 
    border-radius :5px ; 

`
export default function ShopProduct() {

    const {theme} = useTheme();
  return <>
    
    <Paper>
        <div className="card-banner">
                <img class="w-100" src={faker.image.image()} alt=""/>
        </div>
        <div className="card-title pe-3 pt-2">
          <h4 className='m-0'>
              نام محصول
          </h4>
          <small>دسته بندی</small>
        </div>
        <div className="product-body p-3">
            <div className='d-flex align-items-center justify-content-between'>
                <p className='m-0 '>
                    قیمت : 
                </p>
                <h4 className='m-0'>
                    80,000
                    <small className='text-danger fs-6 me-2'>
                        تومان
                    </small>
                </h4>
            </div>
            <div className='d-flex justify-content-end mt-3 border-white'> 
                <Btn2  theme={theme}>
                    سفارش
                </Btn2>
            </div>
        </div>
          
    </Paper>
  </>;
}

