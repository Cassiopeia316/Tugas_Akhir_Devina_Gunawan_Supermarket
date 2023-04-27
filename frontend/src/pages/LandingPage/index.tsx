import React from 'react'
import { Content, Title, CardContent, Wrapper, ViewProduct, LandingPageCard } from './LandingPage.styles'
import NavbarPublic from '@components/NavbarPublic'
import Footer from '@components/FooterPublic'
import Image from '@assets/images/landingpage.png'
import { routes } from '@constants/route'
import Card from 'react-bootstrap/Card';

const LandingPage: React.FC = () => {
    return (
        <Wrapper>  
            <NavbarPublic/>
            <Content>
                <img src={Image} className="img-fluid" alt="Responsive image"/>
                <Title>
                   <h4>WELCOME TO</h4> 
                   <h2>SUPERMARKET!</h2>
                   <h6>We're here to serve only the best products for you!</h6>
                   <ViewProduct to={routes.PRODUCTLIST_PAGE}><i className="fa-solid fa-list"></i> View Product</ViewProduct>
                </Title>
            </Content>
            <CardContent>
                <LandingPageCard >
                    <Card.Body className='cardone'>
                        <Card.Title><i className="fa-solid fa-bag-shopping"></i></Card.Title>
                        <Card.Text>
                            Always stocked for your needs!
                        </Card.Text>
                    </Card.Body>
                </LandingPageCard>
                <LandingPageCard >
                    <Card.Body className='cardtwo'>
                        <Card.Title><i className="fa-solid fa-house"></i></Card.Title>
                        <Card.Text>
                            Home of family essentials!
                        </Card.Text>
                    </Card.Body>
                </LandingPageCard>
                <LandingPageCard >
                    <Card.Body className='cardthree'>
                        <Card.Title><i className="fa-solid fa-cart-shopping"></i></Card.Title>
                        <Card.Text>
                            Serving fresh ingredients!
                        </Card.Text>
                    </Card.Body>
                </LandingPageCard>
            </CardContent>
            <Footer/>
        </Wrapper>
    )
}

export default LandingPage