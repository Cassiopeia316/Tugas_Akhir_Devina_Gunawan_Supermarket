import React from 'react'
import { Wrapper, Left, Right, Middle, Content } from './Footer.styles'

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Left>
                    <i className="fa-solid fa-location-dot"></i>&nbsp; &nbsp; <p>Jl. Husein Sastranegara, RT.003/RW.004, Jurumudi, Kec. Benda, Kota Tangerang, Banten 15124</p>
                    <Middle>
                        <p><i className="fa-solid fa-envelope"></i>&nbsp; supermarket@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i>&nbsp; 5400123</p>
                        <p><i className="fa-brands fa-instagram"></i>&nbsp; @supermarket</p>
                    </Middle>
                </Left>
                <Right>
                        <p><i className="fa-regular fa-copyright"></i>&nbsp; Copyright Supermarket 2023</p>
                </Right>

            </Content>
            
        </Wrapper>
    )    
}

export default Footer