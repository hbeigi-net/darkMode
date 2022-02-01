import React from 'react';
import Grid from '@mui/material/Grid';
import ShopFilters from "./subc/shopFilters"
import SideCart from "./SideCart";
import styled from "styled-components"


const Container = styled.div`
    width : 90vw ;
    margin-right : auto ; 
    margin-left : auto ;
`
export default function Shop() {
  return <>
    {/* <SideCart/> */}
    <Container>

        <div className="row justify-content-center">
            <div className="col-lg-3">
                <div className="row justify-content-center">
                    <ShopFilters/>
                </div>
            </div>
            <div className="col-lg-8">
                <div style={{height: "100vh" , backgroundColor : "red" , width : "100%"}}>

                </div>
            </div>
        </div>

{/* 
    <Grid container spacing={2} sx={{justifyContent : "center"}}>
    <Grid item md={3}  >
    <Grid container sx={{justifyContent : "center" , width : "100%"}}>
    <ShopFilters/>
                </Grid>
            </Grid>
            <Grid item  md={9}>
                
            </Grid>

    </Grid> */}
    </Container>
  </>;
}
