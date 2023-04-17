import React from 'react'
import { Wrapper } from './Button.styles'

interface ButtonParams{
    type: "button" | "submit" | "reset" | undefined

    [additionalProps: string]: any
}

const Button: React.FC<ButtonParams> = ({ type, ...additionalProps }) => {
    return (
        <Wrapper 
            type={type}
            {...additionalProps}
            />
    )
}

export default Button