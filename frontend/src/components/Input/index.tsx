import React from 'react'
import { InputField, Label, Wrapper } from './Input.styles'

interface InputParams {
    type: string
    name: string
    topic: string
    placeholder?: string
    value: string | number
    onChange: (e: Event) => void
    [x: string]: any
}


const Input: React.FC<InputParams> = ({ type, topic, name, placeholder, value, onChange, ...additionalProps }) => {
    return (
        <Wrapper>
            <Label> {topic} </Label>
            <InputField 
                type={type}
                name={name}
                id={topic}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...additionalProps}
            />
        </Wrapper>
    )    
}

export default Input