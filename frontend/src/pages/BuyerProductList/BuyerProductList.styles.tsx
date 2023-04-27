import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Wrapper = styled.div`
    /* min-height: calc(100vh - 150px); */
`

export const Content = styled.div`
    min-height: calc(100vh - 150px - 75px - 20px);
    width: 90vw;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    margin-top: 75px;

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
    padding-bottom: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Paginationbar = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: right;
    padding-top: 20px;
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
