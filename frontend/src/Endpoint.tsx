import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes, adminRoutes } from '@constants/route'
import SignIn from '@pages/SignIn'
import LandingPage from '@pages/LandingPage'
import Auth from '@pages/Auth'
import AdminProductList from '@pages/AdminProductList'
import BuyerProductList from '@pages/BuyerProductList'
import AdminAddProduct from '@pages/AdminAddProduct'
import AdminCategoryList from '@pages/AdminCategoryList'
import AdminAddCategory from '@pages/AdminAddCategory'
import AdminShelfLocationList from '@pages/AdminShelfLocationList'
import AdminAddPromo from '@pages/AdminAddPromo'
import AdminProductDetail from '@pages/AdminProductDetail'
import AdminEditProduct from '@pages/AdminEditProduct'

export const Endpoint = () => {
    return (
        <Routes>
            <Route path={routes.SIGNIN_PAGE} element={<SignIn/>}/>
            <Route path={routes.LANDING_PAGE} element={<LandingPage/>}/>
            <Route path={routes.PRODUCTLIST_PAGE} element={<BuyerProductList/>}/>
            <Route path='/admin' element={<Auth />}>
                <Route path={adminRoutes.PRODUCT_LIST_ADMIN_PAGE} element={<AdminProductList />}/>
                <Route path={adminRoutes.ADD_PRODUCT_ADMIN_PAGE} element={<AdminAddProduct />}/>
                <Route path={adminRoutes.CATEGORY_LIST_ADMIN_PAGE} element={<AdminCategoryList />}/>
                <Route path={adminRoutes.ADD_CATEGORY_ADMIN_PAGE} element={<AdminAddCategory />}/>
                <Route path={adminRoutes.SHELF_LOCATION_ADMIN_PAGE} element={<AdminShelfLocationList />}/>
                <Route path={adminRoutes.ADD_PROMO_ADMIN_PAGE} element={<AdminAddPromo />}/>
                <Route path={adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE} element={<AdminProductDetail />}/>
                <Route path={adminRoutes.EDIT_PRODUCT_ADMIN_PAGE} element={<AdminEditProduct />}/>
            </Route>
        </Routes>
    )
}