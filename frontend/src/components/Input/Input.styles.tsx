import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const Label = styled(Form.Label)`
    font-size: 14px;
    /* font-weight: 600; */
    color: white;
    /* margin-top: 5px; */
`

export const InputField = styled(Form.Control)`
    box-shadow: none !important;
    padding: 10px;
    font-size: 14px;
    /* margin-bottom: 10px; */
`