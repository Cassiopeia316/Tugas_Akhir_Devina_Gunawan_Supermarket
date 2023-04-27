import React from 'react'
import { Wrapper, Logo, Left, Signin, Menu} from './NavbarPublic.styles'
import Container from 'react-bootstrap/Container';
import { routes } from '@constants/route'

const NavbarPublic: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Left>
                    <Logo to={routes.LANDING_PAGE}>
                        <i className="fa-solid fa-cart-shopping"></i> Supermarket
                    </Logo>
                    <Menu to={routes.LANDING_PAGE}>
                        Home
                    </Menu>
                    <Menu to={routes.PRODUCTLIST_PAGE}>
                        Product
                    </Menu>
                    <Menu to={routes.LANDING_PAGE}>
                        About Us
                    </Menu>
                    <Menu to={routes.LANDING_PAGE}>
                        Help
                    </Menu>
                </Left>
                <Signin to={routes.SIGNIN_PAGE}>
                    Sign In
                </Signin> 
            </Container>
        </Wrapper>
    )    
}

export default NavbarPublic