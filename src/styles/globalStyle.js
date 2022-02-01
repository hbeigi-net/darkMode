import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body 
    {
        transition : all 400ms ease ; 
        background-color : ${props=>props.theme.palette.backGround};
        color : ${props=>props.theme.palette.foreGround};
    }
    *
    {
        margin : 0 ; 
        padding : 0 ; 
    }
`
