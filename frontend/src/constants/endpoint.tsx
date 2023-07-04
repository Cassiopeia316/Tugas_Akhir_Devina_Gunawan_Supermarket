const endpoints = {
    SIGNIN: '/v1/signin',
    GETPRODUCTLIST: '/v1/products',
    GETCATEGORYLIST: '/v1/products/category',
    GETELABELCODELIST: '/v1/elabelcode',
    GETPROMOLIST: '/v1/promos',
    GETPROMOPRODUCTMAPPING: '/v1/promosproductsmapping'
}

const adminEndpoints = {
    CREATEPRODUCT: '/v1/products',
    CREATECATEGORY: '/v1/products/category',
    EDITPRODUCT: '/v1/products/:productId',
    CREATELABELLOCATION: '/v1/elabelcode',
    ELABELDROPDOWN: '/v1/elabelcode/dropdown',
    CREATEPROMO: '/v1/promos',
    DELETEPROMO: '/v1/promos/:promoId',
    CREATEPROMOPRODUCTMAPPING: '/v1/promosproductsmapping',
    DELETEPROMOPRODUCTMAPPING: '/v1/promosproductsmapping/:promoproductmappingId'
}

export {
    endpoints,
    adminEndpoints
}