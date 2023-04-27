import React from 'react'
import { Wrapper, NavigationMenu, Menu } from './SidebarAdmin.styles'
import { adminRoutes } from '@constants/route'
import Accordion from 'react-bootstrap/Accordion';

const SidebarAdmin: React.FC = () => {
    return (
        <Wrapper>
            <NavigationMenu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-list"></i><p>All Product List</p>
                </Menu>
                {/* <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-clipboard-list"></i>
                    <p>Category</p>
                </Menu> */}
                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><i className="fa-solid fa-bag-shopping"></i>Category</Accordion.Header>
                        <Accordion.Body>
                        <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE} className="category-menu">
                            <p>Frozen Food</p>
                        </Menu>
                        <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                            <p>Snack</p>
                        </Menu>
                        <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                            <p>Dairy</p>
                        </Menu>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion> */}
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-border-all"></i>
                    <p>Category</p>
                </Menu>
                <Menu to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>
                    <i className="fa-solid fa-box"></i>
                    <p>Shelf</p>
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