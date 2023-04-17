import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '@constants/routes/admin'
import SignIn from '@pages/SignIn'

export const AdminEndpoint = () => {
    return (
        <Routes>
            <Route path={routes.PRODUCT_LIST_ADMIN_PAGE} element={<SignIn />}/>
        </Routes>
    )
}
