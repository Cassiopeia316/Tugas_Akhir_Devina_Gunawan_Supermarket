import styled from "styled-components";

export const Wrapper = styled.div`
    height: 150px;
    background-color: #262626;
    /* margin-left: 250px; */
    color: white;
    font-weight: light !important;
    font-size: 12px;
`

export const Content= styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Left= styled.div`
    width: 70%;
    display: flex;
    align-items: center;
`
export const Middle= styled.div`
    width: 60%;
`

export const Right= styled.div`
    width: 30%;
    text-align: right;
`