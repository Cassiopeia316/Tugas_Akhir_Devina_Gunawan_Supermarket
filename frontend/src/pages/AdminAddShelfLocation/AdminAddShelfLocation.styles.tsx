import styled from "styled-components";
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: 30px;
    margin: 20px;
    min-height: 420px;
    border-radius: 10px;
    border: 1px solid #B4B4B4;
    font-size: 14px;
    
    .inputform{
        /* width: 50%; */
        .mb-3{
            .form-control, .form-select {
                width: 80%;
                font-size: 14px;
            }
        }
    }
`

export const SupermarketLayout = styled(Image)`
    display: flex;
    justify-content: center;
`

export const Title = styled.h6`
    text-align: center;
    font-weight: 800;
    margin-bottom: 20px;
`
export const ActionButton = styled.div`
    display: flex;
    justify-content: flex-end;

`
export const CancelButton = styled(Link)`
    border: 2px solid #F5911D;
    color: #F5911D !important;
    background-color: #FFFFFF;
    padding: 12px 13px;
    border-radius: 8px;
    transition: 0.3s;
    :hover{
        background-color: #f6efe6;
        border: 2px solid #F5911D;
        color: #F5911D;
        }
    :active{
        background-color: #fec58b !important;
        color: #FFFFFF !important;
    }
`

export const SubmitButton = styled(Button)`
    margin-left: 20px;
    background-color: #F5911D;
    border: 1px solid #F5911D;
    transition: 0.3s;
    :hover{
        background-color: #ae6817;
        border: 1px solid #ae6817;
        }
    :active{
        background-color: #6b3e0a !important;
        border: 1px solid #ae6817 !important;
        * {
            color: var(--white-color);
        }
    }
`