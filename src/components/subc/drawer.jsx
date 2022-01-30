import styled from "styled-components"

const Drawer = styled.div`
    position :  fixed; 
    top  : 0 ; 
    display : block ; 
    bottom : 0 ; 
    width : ${props=> props.width}px; 
    left : ${props => props.open ? 0 : -(props.width+5)}px;
    background-color :${props=> props.mode ==="dark"? "#1C6DD0": "#C0D8C0"} ; 
    box-shadow :${props=>props.mode==='dark'?"0px 0px 2px 2px #1C6DD0 ":"0px 0px 2px 2px #C0D8C0 "},-10px 0px 16px 0 ${props=> props.mode==="dark" ? "skyblue":"darkcyan"}  ; 
    padding : 5px ; 
    box-sizing : border-box ; 
    transition : all 432ms ease ; 
    z-index : 100 ; 
`
export default Drawer ; 