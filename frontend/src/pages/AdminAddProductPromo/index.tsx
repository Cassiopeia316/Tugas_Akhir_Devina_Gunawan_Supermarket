import React, { useState, useEffect, ChangeEvent } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton} from './AdminAddProductPromo.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { GetProductListService, Response } from '@services/Product/list';
import { GetPromoListService, PromoResponse } from '@services/Promo/list';
import { CreatePromoProductMappingRequest, CreatePromoProductMappingService } from '@services/Promo/createproductmapping';

type Params = {
    productId :string;
}

const AdminAddProductPromo: React.FC = () => {
    const {productId} = useParams<Params>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [listProduct, setlistProduct] = useState<Response>({
        data: [],
        hasPrevPage : false,
        hasNextPage : false,
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    product_id: productId,
                    offset: 1,
                    limit: 1,
                    search: ""
                }
                const res = await dispatch(GetProductListService(request)).unwrap()
                if (res) setlistProduct(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, productId])

    const [listPromo, setlistPromo] = useState<PromoResponse>({
        data: []
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    promo_id: ""
                }
                const res = await dispatch(GetPromoListService(request)).unwrap() // [....]
                if (res) setlistPromo(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])

    const [createPromoProductMappingRequest, setCreatePromoProductMappingRequest] = useState<CreatePromoProductMappingRequest>({
        product_id : String(productId),
        promo_id : ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement)
        switch (id){
            case "promo_id":
                setCreatePromoProductMappingRequest((prev) => ({
                    ...prev,
                    promo_id: value,
                }))
                break
            
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await dispatch(CreatePromoProductMappingService(createPromoProductMappingRequest)).unwrap()
            navigate(adminRoutes.PRODUCT_LIST_ADMIN_PAGE)
            
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    return (
        <Wrapper>
            <Title>Add Product Promo Form</Title>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Name</Form.Label>
                    <InputField type="text"
                                id="name"
                                value={listProduct.data[0]?.name} 
                                disabled
                                />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Product Description</Form.Label>
                <InputField type="text"   
                            id="description"
                            value={listProduct.data[0]?.description} 
                            disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Normal Price</Form.Label>
                <InputField type="text"   
                            id="price"
                            value={listProduct.data[0]?.price} 
                            disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Promo</Form.Label>
                    <Form.Select id="promo_id"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder="Select Category">
                        <option disabled>Select Category</option>
                        {
                            listPromo.data.map((data => (
                                <>
                                    { data.isExpired === false ? (                                
                                        <option value={data.id} > Discount {data.value}% (Period : {String(data.start_date).slice(0,16)} - {String(data.end_date).slice(0,16)})</option>
                                    ) : ("")}
                                </>
                            )))
                        }
                    </Form.Select>
                </Form.Group>


                <ActionButton>
                    <CancelButton to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>Cancel</CancelButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>
            </Form>
        </Wrapper>
    )
}

export default AdminAddProductPromo