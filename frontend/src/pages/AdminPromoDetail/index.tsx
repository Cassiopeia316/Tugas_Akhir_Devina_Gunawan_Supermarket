import React, { useState, useEffect } from 'react'
import { Wrapper, Title, ActionButton, Grid, Content, NodataPosition, ProductListTitle, UpContent, Delete, BottomContent, CancelButton} from './AdminPromoDetail.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { GetPromoProductMappingService, PromoProductMappingResponse } from '@services/Promo/getproductmapping';
import Nodataimage from '@assets/images/nodata.png'
import { DeletePromoProductMappingService } from '@services/Promo/deleteproductmapping';
import { GetPromoListService, PromoResponse } from '@services/Promo/list';
import { DeletePromoService } from '@services/Promo/delete';

type Params = {
    promoId : string;
}

const AdminPromoDetail: React.FC = () => {
    const {promoId} = useParams<Params>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [listPromo, setlistPromo] = useState<PromoResponse>({
        data: []
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    promo_id: String(promoId)
                }
                const res = await dispatch(GetPromoListService(request)).unwrap()
                if (res) setlistPromo(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, promoId])

    const [listPromoProduct, setlistPromoProduct] = useState<PromoProductMappingResponse>({
        data: []
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    promo_id: String(promoId)
                }
                const res = await dispatch(GetPromoProductMappingService(request)).unwrap()
                if (res) setlistPromoProduct(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, promoId])

    const onDeletePromo = async (e: React.MouseEvent<Element, MouseEvent>, promoId: string) => {
        e.preventDefault()
        try{
            await dispatch(DeletePromoService(promoId))
            navigate(adminRoutes.PROMO_HISTORY_PAGE)
            // const request = {
            //     promo_id: String(promoId)
            // }
            // const res = await dispatch(GetPromoService(request)).unwrap()
            // if (res) setlistPromoProduct(res)
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onDeletePromoProductMapping = async (e: React.MouseEvent<Element, MouseEvent>, promoproductmappingId: string) => {
        e.preventDefault()
        try{
            await dispatch(DeletePromoProductMappingService(promoproductmappingId))
            const request = {
                promo_id: String(promoId)
            }
            const res = await dispatch(GetPromoProductMappingService(request)).unwrap()
            if (res) setlistPromoProduct(res)
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    return (
        <Wrapper>
            <Title>Promo Detail</Title>
            <Form className='inputform'>
                {(listPromoProduct?.data[0]) == null ? (
                    <>  
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Code</Form.Label>
                        <InputField type="text"
                                    id="code" 
                                    value={listPromo.data[0]?.code}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Discount(%)</Form.Label>
                        <InputField type="text"
                                    id="promo_discount" 
                                    value={listPromo.data[0]?.value}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Description</Form.Label>
                        <InputField type="text"
                                    id="description" 
                                    value={listPromo.data[0]?.description}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Start Promo Date</Form.Label>
                        <InputField type="text"
                                    id="start_date" 
                                    value={String(listPromo.data[0]?.start_date).slice(0,16)}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>End Promo Date</Form.Label>
                        <InputField type="text"
                                    id="end_date" 
                                    value={String(listPromo.data[0]?.end_date).slice(0,16)}
                                    disabled
                                    />
                    </Form.Group>
                    <ProductListTitle>Product List :</ProductListTitle>
                    <NodataPosition>
                        <img src={Nodataimage} className="img-fluid" alt="Responsive image"/>
                        <h6>No Product List Available</h6>
                    </NodataPosition>

                    <ActionButton>
                        <CancelButton to={adminRoutes.PROMO_HISTORY_PAGE}>Cancel</CancelButton>
                        {/* <SubmitButton>Back</SubmitButton> */}
                        <Delete onClick={(e: React.MouseEvent<Element, MouseEvent>) => onDeletePromo(e, listPromo.data[0].id)}>Delete</Delete>
                    </ActionButton>
                    </> 
                    ) : (
                    <>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Code</Form.Label>
                        <InputField type="text"
                                    id="code" 
                                    value={listPromoProduct?.data[0]?.promo?.code}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Discount(%)</Form.Label>
                        <InputField type="text"
                                    id="promo_discount" 
                                    value={listPromoProduct?.data[0]?.promo?.value}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Promo Description</Form.Label>
                        <InputField type="text"
                                    id="description" 
                                    value={listPromoProduct?.data[0]?.promo?.description}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>Start Promo Date</Form.Label>
                        <InputField type="text"
                                    id="start_date" 
                                    value={String(listPromoProduct?.data[0]?.promo?.start_date).slice(0,16)}
                                    disabled
                                    />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                        <Form.Label>End Promo Date</Form.Label>
                        <InputField type="text"
                                    id="end_date" 
                                    value={String(listPromoProduct?.data[0]?.promo?.end_date).slice(0,16)}
                                    disabled
                                    />
                    </Form.Group>
                    <ProductListTitle>Product List :</ProductListTitle>
                    <Grid>
                        {
                            listPromoProduct?.data.map((data) => (
                                <Content>
                                    <UpContent>
                                        <p>Product : {data.product.name}</p>
                                        <p>Code: {data.product.code}</p>
                                        <p>Category : {data.product.category.name}</p>
                                        <p>Shelf Location : {data.product.shelf.elabel_code}</p>
                                    </UpContent>
                                    <BottomContent>
                                        { listPromo.data[0].isExpired == true ? (
                                            <>
                                                <Delete onClick={(e: React.MouseEvent<Element, MouseEvent>) => onDeletePromoProductMapping(e, data.id)}disabled>
                                                    <i className="fa-solid fa-trash"></i> &nbsp; Delete
                                                </Delete>
                                            </> ) :  ( 
                                            <>
                                                <Delete onClick={(e: React.MouseEvent<Element, MouseEvent>) => onDeletePromoProductMapping(e, data.id)}>
                                                    <i className="fa-solid fa-trash"></i> &nbsp; Delete
                                                </Delete>
                                            </>)}
                                    </BottomContent>
                                </Content>
                            ))
                        }
                    </Grid>
                    <ActionButton>
                        <CancelButton to={adminRoutes.PROMO_HISTORY_PAGE}>Cancel</CancelButton>
                    </ActionButton>
                    </>
                )}
            </Form>
        </Wrapper>
    )
}

export default AdminPromoDetail