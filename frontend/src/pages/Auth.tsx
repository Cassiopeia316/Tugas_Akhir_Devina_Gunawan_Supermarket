import Footer from '@components/Footer'
import NavbarAdmin from '@components/NavbarAdmin'
import SidebarAdmin from '@components/SidebarAdmin'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Content, Wrapper } from './Auth.styles'


const Auth: React.FC = () => {
    // code untuk ngecek udah pernah login atau belum
    return (
        <Wrapper>
            <NavbarAdmin/>
            <SidebarAdmin/>
                <Content>
                    <Outlet />
                </Content>
            <Footer/>
            
        </Wrapper>
    )
}

export default Auth
