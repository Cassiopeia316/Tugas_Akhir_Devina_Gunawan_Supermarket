import React, { useState, useEffect } from 'react'
import { AddPromo, AddPromoPosition, PromoSubtitle, Content, Grid, Left, Right, Title, Wrapper } from './AdminPromoHistory.styles'
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { adminRoutes } from '@constants/route';
import { GetPromoListService, PromoResponse } from '@services/Promo/list';
import { generatePath } from 'react-router-dom';

const AdminPromoHistory: React.FC = () => {
    const [listPromo, setlistPromo] = useState<PromoResponse>({
        data: []
    })

    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchData = async () =>{
            const request = {
                promo_id: ""
            }
            try{
                const res = await dispatch(GetPromoListService(request)).unwrap() // [....]
                if (res) setlistPromo(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])
    return (
        <Wrapper>  
            <Title>PROMO LIST</Title>
                <AddPromoPosition>
                    <AddPromo to={adminRoutes.ADD_PROMO_FORM_PAGE}>+ Add New Promo</AddPromo>
                </AddPromoPosition>
                <PromoSubtitle><h6>Active Promo</h6></PromoSubtitle>
                <Grid>
                     {
                        listPromo.data.map((data) => (
                            <>
                                {data.isExpired === false && data.isActive === true ? (
                                    <>
                                        <Content to={generatePath(adminRoutes.PROMO_DETAIL_PAGE, { promoId: data.id })}>
                                            <Left>
                                                <i className="fa-solid fa-tag"></i>
                                                &nbsp; 
                                            </Left>
                                            <Right>
                                                <h6>Discount = {data.value}%</h6>
                                                <p>Period = {String(data.start_date).slice(0,16)} - {String(data.end_date).slice(0,16)}</p>
                                            </Right>
                                        </Content>
                                    </>) : ("")
                                }
                            </>
                        ))
                    }
                </Grid>
                <PromoSubtitle><h6>Coming Soon</h6></PromoSubtitle>
                <Grid>
                     {
                        listPromo.data.map((data) => (
                            <>
                                {data.isExpired === false && data.isActive === false ? (
                                    <>
                                        <Content to={generatePath(adminRoutes.PROMO_DETAIL_PAGE, { promoId: data.id })}>
                                            <Left>
                                                <i className="fa-solid fa-tag"></i>
                                                &nbsp; 
                                            </Left>
                                            <Right>
                                                <h6>Discount = {data.value}%</h6>
                                                <p>Period = {String(data.start_date).slice(0,16)} - {String(data.end_date).slice(0,16)}</p>
                                            </Right>
                                        </Content>
                                    </>) : ("")
                                }
                            </>
                        ))
                    }
                </Grid>
                <PromoSubtitle><h6>Expired Promo</h6></PromoSubtitle>
                <Grid>
                    {
                        listPromo.data.map((data) => (
                            <>
                                {data.isExpired === true ? (
                                    <>
                                        <Content to={generatePath(adminRoutes.PROMO_DETAIL_PAGE, { promoId: data.id })}>
                                            <Left>
                                                <i className="fa-solid fa-tag"></i>
                                                &nbsp; 
                                            </Left>
                                            <Right>
                                                <h6>Discount = {data.value}%</h6>
                                                <p>Period = {String(data.start_date).slice(0,16)} - {String(data.end_date).slice(0,16)}</p>
                                            </Right>
                                        </Content>
                                    </>) : ("")
                                }
                            </>
                        ))
                    }
                </Grid>
                
            
        </Wrapper>
    )
}

export default AdminPromoHistory