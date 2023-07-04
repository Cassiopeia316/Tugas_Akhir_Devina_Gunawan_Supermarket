import React, { useState, useEffect, ChangeEvent } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton} from './AdminAddProduct.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { CreateProductRequest, CreateProductService } from '@services/Product/create'
import { statusActions } from '@store/status';
import { CategoryResponse, GetCategoryListService } from '@services/Category/list';
import { GetShelfListService, ShelfResponse } from '@services/Location/list';

const AdminAddProduct: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [createProductRequest, setCreateProductRequest] = useState<CreateProductRequest>({
        name : "", 
        description : "",
        category_id : "", 
        shelf_location_id : "",
        price : "",
        stock : ""
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await dispatch(CreateProductService(createProductRequest)).unwrap()
            navigate(adminRoutes.PRODUCT_LIST_ADMIN_PAGE)
            
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement)
        switch (id){
            case "name":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    name: value,
                }))
                break
            case "description":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    description: value,
                }))
                break
            case "category":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    category_id: value,
                }))
                break
            case "shelf":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    shelf_location_id: value,
                }))
                break
            case "price":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    price: value,
                }))
                break
            case "stock":
                setCreateProductRequest((prev) => ({
                    ...prev,
                    stock: value,
                }))
                break
            
        }
    }

    const [listCategory, setlistCategory] = useState<CategoryResponse>({
        data: []
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await dispatch(GetCategoryListService()).unwrap() // [....]
                if (res) setlistCategory(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])
    
    const [listShelfLocation, setlistShelfLocation] = useState<ShelfResponse>({
        data: []
    })

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await dispatch(GetShelfListService()).unwrap() // [....]
                if (res) setlistShelfLocation(res)
                // console.log(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])

    return (
        <Wrapper>
            <Title>Add Product Form</Title>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Name</Form.Label>
                    <InputField type="text"
                                id="name" 
                                onChange={onChange}
                                placeholder="Enter Product Name"
                                />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Description</Form.Label>
                <InputField type="text"   
                            id="description"
                            onChange={onChange}
                            placeholder="Enter Product Description"
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Category</Form.Label>
                    <Form.Select id="category"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder="Select Category">
                        <option disabled>Select Category</option>
                        {
                            listCategory.data.map((data => (
                                <option value={data.id} >{data.name}</option>
                            )))
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Stock</Form.Label>
                <InputField type="text"
                            id="stock"
                            onChange={onChange}
                            placeholder="Enter Product Stock"   
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Price (Rp.)</Form.Label>
                <InputField type="text"
                            id="price"
                            onChange={onChange} 
                            placeholder="Enter Product Price"  
                            />
                </Form.Group>

                {/* <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Shelf Location</Form.Label>
                <InputField type="text"
                            id="shelf"
                            onChange={onChange}
                            placeholder="Select Shelf Location"   
                            />
                </Form.Group> */}

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Shelf Location</Form.Label>
                    <Form.Select id="shelf"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder="Select Shelf Location">
                        <option disabled>Select Shelf Location</option>
                        {
                            listShelfLocation.data.map((data => (
                                <option value={data.id} >{data.elabel_code}</option>
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

export default AdminAddProduct