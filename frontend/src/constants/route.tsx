const routes = {
    INDEX_PAGE: '/',
    SIGNIN_PAGE : '/signin',
    LANDING_PAGE: '/landingpage',
    PRODUCTLIST_PAGE :'/productlist',
}

const PREFIX = "/admin"
const adminRoutes = {
    PRODUCT_LIST_ADMIN_PAGE: PREFIX + '/productlist',
    ADD_PRODUCT_ADMIN_PAGE: PREFIX + '/productlist/addproduct'
}

export {
    routes,
    adminRoutes,
}
