import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export const Wrapper = styled(Navbar)`
    /* position: sticky; */
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

export const Username = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px;
    max-width: 400px;
    .user-name{
        font-weight: bold;
    }
`

export const Signout = styled(Link)`
    color: #F5BB2D !important;
    i {
        color: #F5911D;
    }
    :hover {
        color: #b36a16 !important;
    }
`

export const Userimage = styled.img`
    width: 30px;
`