import React from 'react'
import { Wrapper, Logo, Username, Userimage, Signout} from './NavbarAdmin.styles'
import Container from 'react-bootstrap/Container';
import Avatar from '@assets/images/usericon.png'
import { routes, adminRoutes } from '@constants/route'
import LocalStorage from '@utils/localStorage';

const NavbarAdmin: React.FC = () => {
    const onClick = () => {
        LocalStorage.delete("credentials")
    }
    return (
        <Wrapper>
            <Container>
                <Logo to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-cart-shopping"></i> Supermarket
                </Logo>
                <Username>
                    <p className="user-name"><Userimage src={Avatar} alt="avatar"/>&nbsp; Hi, {LocalStorage.get("credentials").name}!</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Signout to={routes.SIGNIN_PAGE} onClick={onClick}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
                    </Signout> 
                </Username>
            </Container>
        </Wrapper>
    )    
}

export default NavbarAdmin