import styled from "styled-components"

const Btn2 = styled.button`
    background-color:${props=> props.theme.mode ==="dark" ? "darkblue" : "yellowgreen"};
    padding : 5px 10px;
    border-radius : 5px ; 
    border-color : #ffffff;
    color : ${props=> props.theme.mode ==="dark" ? "white" : "black"};


`

export default Btn2 ; 