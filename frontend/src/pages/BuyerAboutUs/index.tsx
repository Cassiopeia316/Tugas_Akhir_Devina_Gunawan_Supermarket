import React from 'react'
import { Content, Title, Wrapper, AboutUsImage, UpperContent, MiddleContent, Description, BottomContent, AboutUsCard, Avatar, ThankyouContent } from './BuyerAboutUs.styles'
import NavbarPublic from '@components/NavbarPublic'
import Footer from '@components/FooterPublic'
import AboutusImage from '@assets/images/aboutus.png'
import Avatar1 from '@assets/images/avatar1.png'
import Avatar2 from '@assets/images/avatar2.png'
import Avatar3 from '@assets/images/avatar3.png'

const BuyerAboutUsPage: React.FC = () => {
    return (
        <Wrapper>  
            <NavbarPublic/>
            <Content>
                <UpperContent>
                    <AboutUsImage src={AboutusImage} className="img-fluid" alt="Responsive image"/>
                    <Title>
                        <h3>ABOUT US</h3> 
                        <h6>Welcome to our supermarket, where we're passionate about providing you with the best grocery shopping experience possible</h6>
                        <p>We're a team of dedicated professionals who are committed to offering top-quality products at affordable prices. Here's a little bit more about us:</p>                    
                    </Title>
                </UpperContent>
                <MiddleContent>
                    <div className='ourhistory'>
                        <h6>Our History</h6>
                    </div>
                    <Description>
                        <p>We opened our doors more than 20 years ago with the vision of providing our local community with a convenient and affordable place to shop for groceries. Over the years, we've grown and expanded our offerings to better serve our customers. Today, we're proud to be one of the most trusted and reliable supermarkets in the area.</p>
                    </Description>
                </MiddleContent>
                <MiddleContent>
                    <div className='ourmission'>
                        <h6>Our Mission</h6>
                    </div>
                    <Description>
                        <p>At our supermarket, our mission is to make grocery shopping easy, convenient, and enjoyable for our customers. We're dedicated to offering high-quality products at competitive prices, and we're always looking for new ways to improve our offerings and services. Whether you're looking for fresh produce, meat and poultry, or everyday household items, we've got you covered.</p>
                    </Description>
                </MiddleContent>
                <MiddleContent>
                    <div className='ourteam'>
                        <h6>Our Team</h6>
                    </div>
                    <Description>
                        <p>We believe that our team is the heart and soul of our supermarket. That's why we've assembled a team of knowledgeable and friendly professionals who are always ready to help you find what you need. Whether you have a question about a product, need help navigating our store, or just want to chat, our team is here for you.</p>
                    </Description>
                </MiddleContent>
                <BottomContent>
                    <AboutUsCard>
                        <Avatar src={Avatar1} className="img-fluid" alt="Responsive image"/>
                        <h5>Maria Rodriguez</h5>
                        <h6>Head of Produce Department</h6>
                        <p>Maria has been with our supermarket for 5 years and is the head of our produce department. She is passionate about providing our customers with the freshest and highest quality produce possible. Maria grew up on a farm and has a deep understanding of the importance of locally-sourced and sustainable farming practices.</p>
                    </AboutUsCard>
                    <AboutUsCard>
                        <Avatar src={Avatar3} className="img-fluid" alt="Responsive image"/>
                        <h5>John Smith</h5>
                        <h6>Store Manager</h6>
                        <p>John has been with our supermarket for over 15 years, starting as a cashier and working his way up to his current position as Store Manager. With his extensive experience in the grocery industry, John is passionate about providing our customers with the best possible shopping experience.</p>
                    </AboutUsCard>
                    <AboutUsCard>
                        <Avatar src={Avatar2} className="img-fluid" alt="Responsive image"/>
                        <h5>Sarah Johnson</h5>
                        <h6>Customer Service Representative</h6>
                        <p>Sarah has been with our supermarket for 2 years and is a customer service representative. She is passionate about helping our customers and ensuring that they have a positive shopping experience. Sarah is always willing to go the extra mile to help customers find what they need and answer any questions they may have.</p>
                    </AboutUsCard>
                </BottomContent>
                <ThankyouContent>
                        <p>Thank you for choosing our supermarket for all your grocery needs.
                        </p>
                        <p>We're grateful for your business and look forward to serving you for years to come.
                        </p>
                </ThankyouContent>
            </Content>
            <Footer/>
        </Wrapper>
    )
}

export default BuyerAboutUsPage