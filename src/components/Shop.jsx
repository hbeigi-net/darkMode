import React from 'react';
import Grid from '@mui/material/Grid';
import ShopFilters from "./subc/shopFilters"
import SideCart from "./SideCart";
import styled from "styled-components"
import Product from "./ShopProduct"
import { spacing } from '@mui/system';

const Container = styled.div`
    width : 85vw ;
    margin-right : auto ; 
    margin-left : auto ;
`
export default function Shop() {
  const list = [1 , 2,3,4,5,6,7,8,9,10,11,12,14,1,4,4,4,42,2,3,4];
  return <>
    <SideCart/>
    <Container>
    <Grid container sx={{justifyContent : "center"}} spacing={2}>

        <Grid item xs={12} md={3}>
                <Grid container sx={{justifyContent : "center" , width : "100%"}}>
                   <ShopFilters/>
                </Grid>
        </Grid>
        <Grid item xs={12}  md={9}>
              <Grid container spacing={2} sx={{justifyContent : "center"}}>
                {
                  list.map((item)=>
                  {
                    return (
                      <>
                      <Grid item xs={6} sm={6} md ={4} lg={3}>
                         <Product/>
                      </Grid>
                      </>
                    )
                  })
                }
                       
              </Grid> 
        </Grid>

    </Grid>
    </Container>
  </>;
}
