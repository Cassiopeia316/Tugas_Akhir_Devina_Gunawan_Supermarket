import styled from "styled-components";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    margin-bottom: 20px;
`
export const Title = styled.h3`
    margin: 20px 0px;
    font-weight: bold;
    color: #F5BB2D;
    display: flex;
    justify-content: center;
`

export const AddCategoryPosition = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
`
export const AddCategory = styled(Link)`
    text-align: center;
    font-size: 14px;
    padding: 8px 10px;
    margin-left: auto;
    justify-content: center;
    background-color: #F5911D;
    border-color: #F5911D;
    color: var(--white-color) !important;
    box-shadow: none !important;
    border-radius: 8px;
    border: none;
    &:hover{
        background-color: #b36a16 !important;
        border-color: #F5BB2D;
    }
`
export const Content = styled.div`
    width: 90%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    align-items: flex-end;

    table {
        width: 100%;
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

export const SupermarketLayout = styled(Image)`
    width: 50%;
    display: flex;
    justify-content: center;
`