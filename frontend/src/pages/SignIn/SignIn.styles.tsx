import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@components/Button";

export const Wrapper = styled(Form)`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`

export const BackgroundImage = styled.img`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;   
`

export const SignInLogo = styled.img`
    margin-top: -65px;
    width: 100px;
    height: 100px;
    margin-left: calc(50% - 50px);
`

export const SupermarketLogo = styled.img`
    margin-top: 10px;
`

export const Content = styled(Form.Group)`
    width: 448px;
    height: 466px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 20px;
`

export const Title = styled.div`
    color: white;
    text-align: center;
`

export const SubmitButton = styled(Button)`
    background-color: #F5911D !important;
    color: var(--white-color) !important;
    box-shadow: none !important;
    margin: 0 auto;
    width: 122px;
    height: 48px;
    border-radius: 7px;
    border: none;
    :hover{
        background-color: #724919 !important;
    }
    :active{
        background-color: #a36319 !important;
    }
`

export const ForgotPassword = styled(Link)`
    color: white !important;
    font-size: 14px;
    width: fit-content;
    margin-left: 7.5%;
    :hover{
        color: #9b703f !important;
        text-decoration: underline !important;
    }
    :active{
        color: #F5911D !important;
    }
`
export const DontHaveAnAccount = styled(Link)`
    color: white !important;
    font-size: 14px;
    margin: 0 auto;
    :hover{
        color: #9b703f !important;
        text-decoration: underline !important;
    }
    :active{
        color: #F5911D !important;
    }
`