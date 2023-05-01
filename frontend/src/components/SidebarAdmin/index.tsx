import React from 'react'
import { Wrapper, NavigationMenu, Menu } from './SidebarAdmin.styles'
import { adminRoutes } from '@constants/route'

const SidebarAdmin: React.FC = () => {
    return (
        <Wrapper>
            <NavigationMenu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-list"></i><p>All Product</p>
                </Menu>
                {/* TODO: warna navbar isActive */}
                <Menu to={adminRoutes.CATEGORY_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-border-all"></i>
                    <p>Category</p>
                </Menu>
                <Menu to={adminRoutes.EPAPER_LOCATION_ADMIN_PAGE}>
                    <i className="fa-solid fa-box"></i>
                    <p>E-label</p>
                </Menu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-percent"></i>
                    <p>Promo</p>
                </Menu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-user-plus"></i>
                    <p>Tenant</p>
                </Menu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-circle-info"></i>
                    <p>Help</p>
                </Menu>
            </NavigationMenu>
        </Wrapper>
    )    
}

export default SidebarAdmin