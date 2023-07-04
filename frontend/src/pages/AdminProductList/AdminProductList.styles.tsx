import styled from "styled-components";
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    right: 0;
    margin-bottom: 20px;
`

export const Content = styled.div`
    width: 95%;
    /* height: 62vh; */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    table {
        max-width: 90%;
        margin: 0 auto;
        border-color: #d1960d;
        /* overflow-x: auto; */
    }
    thead{
        background-color: #FDD87F;
    }

    tbody, td, tfoot, th, thead, tr {
        border-collapse: collapse;
        text-align: center;
        vertical-align: middle;
    }
`

export const Title = styled.h3`
    margin: 20px 0px;
    font-weight: bold;
    color: #F5BB2D;
    display: flex;
    justify-content: center;
`

export const SearchProduct = styled(Form.Group)`
    width: 90%;
    margin: 0 auto;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    .searchlabel{
        /* width: 15%; */
    }
`

export const Input = styled(Form.Control)`
    background-color: #E0DFDF;
    margin-right: 20px;
    
    &:focus{
        box-shadow: none;
        outline: none;
        border-color: #8A8A8A;
    }
`

export const SubmitButton = styled(Button)`
    border-radius: 8px;
    background-color: #F5BB2D;
    border-color: #F5BB2D;
    /* font-weight: 800; */
    padding: 8px 15px;
    color: #FFFFFF !important;
    transition: 0.5s;

    &:hover{
        background-color: #b36a16 !important;
        border-color: #F5BB2D;
    }
`

export const FilterCategory = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CategoryScroll = styled.div`
    /* width: 800px; */
    width: 90%;
    display: flex;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        height: 2px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
        background: transparent;     /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
        background: #929191;
    }
`


export const CategoryButton = styled(Button)`
    background-color: #AAB278 !important;
    color: var(--white-color) !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    margin-right: 20px;
    white-space: nowrap;
    font-size: 14px;
    &:hover{
        background-color: #7f893e !important;
        border-color: #7D892F;
    }
    &:focus{
        background-color: #667311 !important;
        border-color: #7D892F;
    }
    &:active{
        background-color: #2d3113 !important;
        border-color: #7D892F;
    }
`
export const PaginationAndAddProduct = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const AddProduct = styled(Link)`
    padding: 8px 10px;
    background-color: #F5911D;
    border-color: #F5911D;
    color: var(--white-color) !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    margin-bottom: 10px;
    font-size: 14px;
    &:hover{
        background-color: #b36a16 !important;
        border-color: #F5BB2D;
    }
`
export const Action = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const ViewDetailsandAddPromo = styled(Link)`
    
    i:hover{
        color: #F5BB2D;
    }
    i:active{
        color: #b36a16;
    }
`