const routes = {
    INDEX_PAGE: '/',
    SIGNIN_PAGE : '/signin',
    LANDING_PAGE: '/landingpage',
    PRODUCTLIST_PAGE :'/products',
}

const PREFIX = "/admin"
const adminRoutes = {
    PRODUCT_LIST_ADMIN_PAGE: PREFIX + '/products',
    PRODUCT_DETAIL_ADMIN_PAGE: PREFIX + '/products/:productId',
    ADD_PRODUCT_ADMIN_PAGE: PREFIX + '/products/addproduct',
    EDIT_PRODUCT_ADMIN_PAGE : PREFIX + '/products/:productId/editproduct',
    CATEGORY_LIST_ADMIN_PAGE: PREFIX + '/categorylist',
    ADD_CATEGORY_ADMIN_PAGE: PREFIX + '/categorylist/addcategory',
    SHELF_LOCATION_ADMIN_PAGE : PREFIX + '/shelflocation',
    ADD_PROMO_ADMIN_PAGE : PREFIX + '/products/addpromo/:productId'
}

export {
    routes,
    adminRoutes,
}
