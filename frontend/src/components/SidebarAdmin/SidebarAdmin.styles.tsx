import styled from "styled-components";
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 75px);
    width: 250px;
    background-color: #F3F4F6;
    padding-top: 10px;
`
export const NavigationMenu = styled.div`
    width: 90%;
    
    /* .accordion-item{
        background-color: transparent;
        border: none !important;
    }

    .accordion-item:last-of-type, .accordion-item:first-of-type {
        border-top-left-radius: none !important; 
        border-top-right-radius: none !important;
    }

    .accordion-body{
        padding: 0px;
        p{
            padding-left: 40px;
        }
    }

    .accordion-header, button{
        background-color: transparent !important;
        padding-left: 0px;
        padding-right: 0px;
        padding: 4px 8px;
        box-shadow: none !important;
        transition: 0.5s;
        color: #111928 !important;
        i{
            margin-right: 15px;
        }
        :hover{
            background-color: #cbcbcb !important;
        }
        :focus{
            background-color: #c9cbce !important;
        }
    } */
`

export const Menu = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    transition: 0.5s;
    
    i{
        margin-right: 15px;
        width: 18px;
    }
    :hover{
        background-color: #cbcbcb;
    }
    :focus{
        background-color: #FDD87F;
        border-radius: 5px;
    }

`

