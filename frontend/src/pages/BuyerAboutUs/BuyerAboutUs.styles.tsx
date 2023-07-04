import styled from "styled-components";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const Wrapper = styled.div`
`

export const Content = styled.div`
    min-height: calc(100vh - 150px - 75px - 20px);
    width: 80vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: calc(75px + 35px);
`
export const UpperContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30%;
    margin: 0px 40px;
    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`

export const AboutUsImage = styled(Image)`
    width: 40vw;
    height: 30%;
    @media screen and (max-width: 1245px){
        width: 38vw;
    }
    @media screen and (max-width: 1100px){
        width: 33vw;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        margin: 0 auto;
    }
`

export const Title = styled.div`
    width: 60%;
    margin-left: 20px;
    line-height: 1.6;
    h3{
        text-align: right;
        font-size: 36px;
        font-weight: bold;
        color: #F5BB2D;
    }
    h6{
        margin-top: 30px;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        line-height: 1.6;
    }
    @media screen and (max-width: 1245px){
        h3 {font-size: 30px;}
        h6 {font-size: 18px;}
        p  {font-size: 14px;}
    }
    @media screen and (max-width: 1100px){
        h3 {font-size: 25px;}
        h6 {font-size: 16px;}
        p {font-size: 12px;}
    }
    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        margin-top: 20px;

        h3 {font-size: 25px; text-align: center;}
        h6 {font-size: 16px; margin-top: 10px;}
        p {font-size: 12px;}
    }
`

export const MiddleContent = styled.div`
    display: flex;
    margin: 40px 100px 0px 100px;
    border-radius: 10px;
    .ourhistory{
        width: 600px;
        background-color: #F3835D;
        border-radius: 7px 0px 0px 7px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        h6{
            font-size: 24px;
            font-weight: bold;
        }
    }
    .ourmission{
        width: 600px;
        background-color: #F5BB2D;
        border-radius: 7px 0px 0px 7px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        h6{
            font-size: 24px;
            font-weight: bold;
        }
    }
    .ourteam{
        width: 600px;
        background-color: #9EAE27;
        border-radius: 7px 0px 0px 7px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        h6{
            font-size: 24px;
            font-weight: bold;
        }
    }
    @media screen and (max-width: 1245px){
        .ourteam h6, .ourhistory h6, .ourmission h6{
           font-size: 24px;
       }
   }
   @media screen and (max-width: 1100px){
        .ourteam h6, .ourhistory h6, .ourmission h6{
           font-size: 18px;
       }
   }
   @media screen and (max-width: 1000px){
        width: 90%;
        margin: 10px auto;
        margin-top: 20px;
    }
    @media screen and (max-width: 900px){
        /* margin-bottom: 0; */
    }
`

export const Description = styled.div`
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    border: 2px solid #adadad;
    border-radius: 0px 10px 10px 0px;
    border-left: none;
    @media screen and (max-width: 1245px){
        p{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 1100px){
        p{
            font-size: 12px;
        }
    }
`
export const BottomContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 40px;
    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`

export const AboutUsCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 21rem;
    border: 2px solid #d2d2d2;
    text-align: center;
    font-size: 20px;
    h5{
        font-weight: bold;
        padding-top: 20px;
    }
    h6{
        color: #808080;
        font-size: 16px;
        padding-bottom: 10px;
    }
    p{
        font-size: 14px;
    }
    @media screen and (max-width: 1245px){
        width: 17rem;
    }
    @media screen and (max-width: 1150px){
        width: 30%;
        p{
            font-size: 12px;
        }
    }
    @media screen and (max-width: 900px){
        width: 100%;
        /* margin: 0 auto; */
        margin-top: 20px;
    }
`
export const Avatar = styled(Image)`
    display: flex;
    justify-content: center;
    width: 40%;
    @media screen and (max-width: 900px){
        width: 20%;
    }
`
export const ThankyouContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 40px 20px 40px;
    background-color: #AAB278;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    p{
        color: white;
        font-size: 18px;
    }
    @media screen and (max-width: 1245px){
        p{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1100px){
        p{
            font-size: 14px;
        }
    }
`