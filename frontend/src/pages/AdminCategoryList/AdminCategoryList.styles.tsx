import styled from "styled-components";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    right: 0;
    margin-bottom: 20px;
`
export const Title = styled.h3`
    margin: 20px 0px;
    font-weight: bold;
    color: #F5BB2D;
    display: flex;
    justify-content: center;
`

export const Grid = styled.div`
    width: 90%;
    margin: 30px auto;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 1rem;
    justify-items: center;
`
export const Content = styled(Card)`
    width: 180px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    background-color: #e6eacf;
    color: #717844;
`
export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    i{
        padding-right: 5px;
    }
`

export const Right = styled.div`
`

export const Delete = styled(Button)`
    border: none;
    background-color: #717844;
`

export const AddCategoryPosition = styled.div`
    width: calc(90% - 1rem);
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