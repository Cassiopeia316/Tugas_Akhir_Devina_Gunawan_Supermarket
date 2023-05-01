const endpoints = {
    // Authentication
    SIGNIN: '/v1/signin',

    // [PUBLIC] PRODUCT
    GETPRODUCTLIST: '/v1/products',
    GETCATEGORYLIST: '/v1/products/category',
}

const adminEndpoints = {
    CREATEPRODUCT: '/v1/products',
    CREATECATEGORY: '/v1/products/category',
    EDITPRODUCT: '/v1/products/<string:id>',
}

export {
    endpoints,
    adminEndpoints
}