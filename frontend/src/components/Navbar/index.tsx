import React from 'react'
import { InputField, Label, Wrapper } from './Navbar.styles'

interface InputParams {
    type: string
    topic: string
    placeholder?: string
    // value: string | number
    // onChange: (e: Event) => void
    [x: string]: any
}


const Navbar: React.FC<InputParams> = ({ type, topic, placeholder, value, ...additionalProps }) => {
    return (
        <Wrapper>
            <Label> {topic} </Label>
            <InputField 
                type={type}
                id={topic}
                placeholder={placeholder}
                value={value}
                // onChange={onChange}
                {...additionalProps}
            />
        </Wrapper>
    )    
}

export default Navbar