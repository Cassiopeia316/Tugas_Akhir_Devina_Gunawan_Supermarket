import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export const Wrapper = styled(Navbar)`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #A8ABB1;
    justify-content: center;
    height: 75px;
    width: 100vw;
    background-color: white;
    z-index: 10;
`
export const Logo = styled(Link)`
    font-size: 18px;
    color: #F5BB2D !important;
    i{
        color: #F5911D;
    }
`
export const Left = styled.div`

`
export const Menu = styled(Link)`
    margin-left: 30px;
    /* color: #758121 !important; */
    :hover {
        color: #959b60 !important;
    }
`
export const Signin = styled(Link)`
    background-color: #F5911D !important;
    padding: 8px 12px;
    border-radius: 8px;
    color: var(--white-color) !important;
    font-size: 14px;
    :hover {
        background-color: #b36a16 !important;
    }
`