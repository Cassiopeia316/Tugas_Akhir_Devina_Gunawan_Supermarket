const routes = {
    INDEX_PAGE: '/',
    SIGNIN_PAGE : '/signin',
    LANDING_PAGE: '/landingpage',
    PRODUCTLIST_PAGE :'/products',
    ABOUTUS_PAGE: '/aboutus',
}

const PREFIX = "/admin"
const adminRoutes = {
    PRODUCT_LIST_ADMIN_PAGE: PREFIX + '/products',
    PRODUCT_DETAIL_ADMIN_PAGE: PREFIX + '/products/:productId',
    ADD_PRODUCT_ADMIN_PAGE: PREFIX + '/products/addproduct',
    EDIT_PRODUCT_ADMIN_PAGE : PREFIX + '/products/:productId/editproduct',
    CATEGORY_LIST_ADMIN_PAGE: PREFIX + '/categorylist',
    ADD_CATEGORY_ADMIN_PAGE: PREFIX + '/categorylist/addcategory',
    EPAPER_LOCATION_ADMIN_PAGE : PREFIX + '/elabellocation',
    ADD_PRODUCT_PROMO_ADMIN_PAGE : PREFIX + '/products/addpromo/:productId',
    ADD_LOCATION_ADMIN_PAGE : PREFIX + '/elabellocation/addlocation',
    PROMO_HISTORY_PAGE : PREFIX + '/promo',
    ADD_PROMO_FORM_PAGE : PREFIX + '/promo/addpromo',
    PROMO_DETAIL_PAGE : PREFIX + '/promo/detail/:promoId'
}

export {
    routes,
    adminRoutes,
}
