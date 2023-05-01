import React, { useState, useEffect } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton} from './AdminAddPromo.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { GetProductListService, Response } from '@services/Product/list';

type Params = {
    productId :string;
}

const AdminAddPromo: React.FC = () => {
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
                    limit: 1
                }
                const res = await dispatch(GetProductListService(request)).unwrap()
                if (res) setlistProduct(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, productId])

    return (
        <Wrapper>
            <Title>Add Promo Form</Title>
            <Form className='inputform'>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Name</Form.Label>
                    <InputField type="text"
                                id="name"
                                value={listProduct.data[0]?.name} 
                                disabled
                                />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Description</Form.Label>
                <InputField type="text"   
                            id="description"
                            // onChange={onChange}
                            placeholder="Enter Product Description"
                            />
                </Form.Group>

                <ActionButton>
                    <CancelButton to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>Cancel</CancelButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>
            </Form>
        </Wrapper>
    )
}

export default AdminAddPromo