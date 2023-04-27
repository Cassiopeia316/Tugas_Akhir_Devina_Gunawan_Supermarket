import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export const Wrapper = styled.div`
    /* height: 100vh; */
    /* overflow: hidden; */
`

export const Content = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    margin-top: calc(75px + 35px);
    /* margin-bottom: 35px; */
    position: relative;
    
    img{
        width: 65%;
    }
`

export const Title = styled.div`
    position: absolute;
    color: white;
    text-align: center;
    margin-top: 35px;
    h2, h4, h6{
        font-weight: 800;
        /* font-size: 1.3vw !important; */
    }
    h6{
        margin: 30px 0px;
    }
`

export const ViewProduct = styled(Link)`
    text-align: center;
    font-size: 14px;
    padding: 10px 15px;
    justify-content: center;
    background-color: #ffffff;
    opacity: 0.8;
    color: #555E11 !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    &:hover{
        background-color: #959b60 !important;
        color: #FFFFFF !important;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: -50px;
    margin-bottom: 40px;
    width: 65%;
`
export const LandingPageCard = styled(Card)`
    width: 18rem;
    height: 180px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    i{
        font-size: 2.5rem;
    }

    .cardone{
        background-color: rgb(242, 124, 84, 0.85) !important;
        border-radius: 8px;
        border: solid 3px #F4A085;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .cardtwo{
        background-color: rgb(245, 183, 34, 0.85) !important;
        border-radius: 8px;
        border: solid 3px #F4CE71;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .cardthree{
        background-color: rgb(153, 170, 28, 0.85) !important;
        border-radius: 8px;
        border: solid 3px #C3C773;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`