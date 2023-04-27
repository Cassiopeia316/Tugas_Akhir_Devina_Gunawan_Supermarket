import React, { useState } from 'react'
import { Content, ForgotPassword, Title, Wrapper, BackgroundImage, SignInLogo, SubmitButton, DontHaveAnAccount, SupermarketLogo } from '../SignIn/SignIn.styles'
import Image from '@assets/images/loginbackground.jpg'
import UserIcon from '@assets/images/usericon.png'
import supermarketlogo from '@assets/images/supermarketlogo.png'

import InputField  from '@components/Input'
import { routes, adminRoutes } from '@constants/route'
import { useAppDispatch } from '@store'
import { useNavigate } from 'react-router-dom'
import { SignInRequest, signInService } from '@services/signIn'
import LocalStorage from '@utils/localStorage'
import { statusActions } from '@store/status'

const SignIn: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [requestParams, setRequestParams] = useState<SignInRequest>({
        email: "",
        password: "",
    })

    const onSubmit = async (e: Event) => {
        e.preventDefault()
        try{
            const response = await dispatch(signInService(requestParams)).unwrap()

            if (response) {
                LocalStorage.set("credentials", response)
                // if (response.isAdmin){
                    navigate(adminRoutes.PRODUCT_LIST_ADMIN_PAGE)
                // }
                // else{
                    // navigate(routes.LANDING_PAGE)
                // }
            }
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onChange = (e: Event) => {
        const { name, value } = (e.currentTarget as HTMLInputElement)
        
        setRequestParams(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    return (
        <Wrapper onSubmit={onSubmit}>  
            <BackgroundImage src={Image} alt="background" />
            <Content>
                <SignInLogo src={UserIcon} alt="background"/>
                <Title className="text-super-bold">SIGN IN</Title>
                <InputField 
                    type="email"
                    name="email"
                    topic="Email"
                    id="email"
                    placeholder="Enter your email"
                    value={requestParams.email}
                    onChange={onChange}
                    />
                <InputField 
                    type="password"
                    name="password"
                    topic="Password"
                    id="password"
                    placeholder="Enter your password"
                    value={requestParams.password}
                    onChange={onChange}
                    />

                {/* TODO: Change to corresponding link */}
                <ForgotPassword to='/'>Forgot Password? Click Here!</ForgotPassword>

                <SubmitButton type="submit">SIGN IN</SubmitButton>

                <DontHaveAnAccount to={routes.LANDING_PAGE}>Not an admin? Back to home page</DontHaveAnAccount>
            </Content>
            <SupermarketLogo src={supermarketlogo} alt="background"/>
        </Wrapper>
    )
}

export default SignIn