import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    right: 0;
    margin-bottom: 20px;
`

export const Content = styled.div`
    width: 100%;
    /* height: 62vh; */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    table {
        width: 90%;
        margin: 0 auto;
        border-color: #d1960d;
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

export const SearchProduct = styled.div`
    width: 90%;
    margin: 0 auto;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    .searchlabel{
        width: 15%;
    }
`
export const FilterCategory = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const PaginationAndAddProduct = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const CategoryButton = styled(Button)`
    background-color: #AAB278 !important;
    color: var(--white-color) !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    margin-right: 20px;
    &:hover{
        background-color: #5c661e !important;
        border-color: #7D892F;
    }
`

export const AddProduct = styled(Link)`
    text-align: center;
    padding: 8px 10px;
    margin-left: auto;
    justify-content: center;
    background-color: #F5911D;
    border-color: #F5911D;
    color: var(--white-color) !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    margin-bottom: 10px;
    &:hover{
        background-color: #b36a16 !important;
        border-color: #F5BB2D;
    }
`