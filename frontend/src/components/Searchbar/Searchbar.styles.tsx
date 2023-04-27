import styled from "styled-components";
import { Button, Form } from 'react-bootstrap'

export const Wrapper = styled(Form)`
    width: 85%;
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
    padding: 0 15px;
    color: #FFFFFF !important;
    transition: 0.5s;

    &:hover{
        background-color: #b36a16 !important;
        border-color: #F5BB2D;
    }
`