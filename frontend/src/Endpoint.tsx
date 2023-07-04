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
import AdminAddPromo from '@pages/AdminAddPromo'
import AdminProductDetail from '@pages/AdminProductDetail'
import AdminEditProduct from '@pages/AdminEditProduct'
import AdminEpaperLocationList from '@pages/AdminEpaperLocationList'
import AdminAddShelfLocation from '@pages/AdminAddShelfLocation'
import BuyerAboutUsPage from '@pages/BuyerAboutUs'
import AdminPromoHistory from '@pages/AdminPromoHistory'
import AdminAddProductPromo from '@pages/AdminAddProductPromo'
import AdminPromoDetail from '@pages/AdminPromoDetail'

export const Endpoint = () => {
    return (
        <Routes>
            <Route path={routes.SIGNIN_PAGE} element={<SignIn/>}/>
            <Route path={routes.LANDING_PAGE} element={<LandingPage/>}/>
            <Route path={routes.PRODUCTLIST_PAGE} element={<BuyerProductList/>}/>
            <Route path={routes.ABOUTUS_PAGE} element={<BuyerAboutUsPage/>}/>
            <Route path='/admin' element={<Auth />}>
                <Route path={adminRoutes.PRODUCT_LIST_ADMIN_PAGE} element={<AdminProductList />}/>
                <Route path={adminRoutes.ADD_PRODUCT_ADMIN_PAGE} element={<AdminAddProduct />}/>
                <Route path={adminRoutes.CATEGORY_LIST_ADMIN_PAGE} element={<AdminCategoryList />}/>
                <Route path={adminRoutes.ADD_CATEGORY_ADMIN_PAGE} element={<AdminAddCategory />}/>
                <Route path={adminRoutes.EPAPER_LOCATION_ADMIN_PAGE} element={<AdminEpaperLocationList />}/>
                <Route path={adminRoutes.ADD_PRODUCT_PROMO_ADMIN_PAGE} element={<AdminAddProductPromo />}/>
                <Route path={adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE} element={<AdminProductDetail />}/>
                <Route path={adminRoutes.EDIT_PRODUCT_ADMIN_PAGE} element={<AdminEditProduct />}/>
                <Route path={adminRoutes.ADD_LOCATION_ADMIN_PAGE} element={<AdminAddShelfLocation />}/>
                <Route path={adminRoutes.PROMO_HISTORY_PAGE} element={<AdminPromoHistory />}/>
                <Route path={adminRoutes.ADD_PROMO_FORM_PAGE} element={<AdminAddPromo />}/>
                <Route path={adminRoutes.PROMO_DETAIL_PAGE} element={<AdminPromoDetail/>}/>
            </Route>
        </Routes>
    )
}