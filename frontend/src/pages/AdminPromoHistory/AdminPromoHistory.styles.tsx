import styled from "styled-components";
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    right: 0;
    margin-bottom: 20px;
`

export const Grid = styled.div`
    width: 90%;
    margin: 30px auto;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
`

export const PromoSubtitle = styled.div`
    width: 90%;
    margin: 0 auto; 
    h6{
        font-weight: bold;
    }
`

export const Content = styled(Link)`
    width: 250px;
    height: 100px;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    padding: 10px 15px;
    align-items: center;
    background-color: #ffffff;
    color: #8a8a8a;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    h6{
        font-weight: bold;
    }
    p{
        font-size: 14px;
    }
    :hover{
        background-color: #f4f3ef;
    }
`
export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    i{
        padding-right: 5px;
        color: #F5911D;
    }
`
export const Right = styled.div`
`

export const Title = styled.h3`
    margin: 20px 0px;
    font-weight: bold;
    color: #F5BB2D;
    display: flex;
    justify-content: center;
`

export const AddPromoPosition = styled.div`
    width: calc(90% - 1rem);
    margin: 0 auto;
    display: flex;
`

export const AddPromo = styled(Link)`
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