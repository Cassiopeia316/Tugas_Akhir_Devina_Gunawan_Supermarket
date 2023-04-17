import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '@constants/routes/public'
import SignIn from '@pages/SignIn'
import LandingPage from '@pages/LandingPage'

export const PublicEndpoint = () => {
    return (
        <Routes>
            <Route path={routes.SIGNIN_PAGE} element={<SignIn/>}/>
            <Route path={routes.LANDING_PAGE} element={<LandingPage/>}/>
        </Routes>
    )
}