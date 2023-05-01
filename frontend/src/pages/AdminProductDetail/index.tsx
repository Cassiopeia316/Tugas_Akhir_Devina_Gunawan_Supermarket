import React, { useState, useEffect } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, EditButton} from './AdminProductDetail.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { generatePath, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { GetProductListService, Response } from '@services/Product/list';

type Params = {
    productId :string;
}

const AdminProductDetail: React.FC = () => {
    const {productId} = useParams<Params>()
    const dispatch = useAppDispatch()

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
            <Title>View Product Detail</Title>
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
                    <Form.Label>Product Code</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={listProduct.data[0]?.code} 
                                disabled
                                />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Description</Form.Label>
                <textarea className="form-control" 
                                id="exampleFormControlTextarea1" 
                                value={listProduct.data[0]?.description}
                                disabled/>
                                
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Category</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={listProduct.data[0]?.category.name} 
                                disabled
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Stock</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={listProduct.data[0]?.stock} 
                                disabled
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Price (Rp)</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={listProduct.data[0]?.price} 
                                disabled
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Shelf Location</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={listProduct.data[0]?.shelf.aisle} 
                                disabled
                                />
                </Form.Group>
                <ActionButton>
                    <CancelButton to={adminRoutes.PRODUCT_LIST_ADMIN_PAGE}>Cancel</CancelButton>
                    <EditButton to={generatePath(adminRoutes.EDIT_PRODUCT_ADMIN_PAGE, { productId: productId })}>Edit</EditButton>
                </ActionButton>
            </Form>
        </Wrapper>
    )
}

export default AdminProductDetail