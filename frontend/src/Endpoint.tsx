import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes, adminRoutes } from '@constants/route'
import SignIn from '@pages/SignIn'
import LandingPage from '@pages/LandingPage'
import Auth from '@pages/Auth'
import AdminProductList from '@pages/AdminProductList'
import BuyerProductList from '@pages/BuyerProductList'
import AdminAddProduct from '@pages/AdminAddProduct'

export const Endpoint = () => {
    return (
        <Routes>
            <Route path={routes.SIGNIN_PAGE} element={<SignIn/>}/>
            <Route path={routes.LANDING_PAGE} element={<LandingPage/>}/>
            <Route path={routes.PRODUCTLIST_PAGE} element={<BuyerProductList/>}/>
            <Route path='/admin' element={<Auth />}>
                <Route path={adminRoutes.PRODUCT_LIST_ADMIN_PAGE} element={<AdminProductList />}/>
                <Route path={adminRoutes.ADD_PRODUCT_ADMIN_PAGE} element={<AdminAddProduct />}/>
            </Route>
        </Routes>
    )
}