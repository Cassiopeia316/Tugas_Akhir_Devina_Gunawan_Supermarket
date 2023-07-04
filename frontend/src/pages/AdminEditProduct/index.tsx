import React, { useState, useEffect, ChangeEvent } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton, DeleteButton, DeleteModal} from './AdminEditProduct.styles'
import { Button, Form, Modal } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { CategoryResponse, GetCategoryListService } from '@services/Category/list';
import { GetProductListService } from '@services/Product/list';
import { EditProductService, Params } from '@services/Product/edit';
import { GetShelfListService, ShelfResponse } from '@services/Location/list';

type RequestParams = {
    productId :string;
}

const AdminEditProduct: React.FC = () => {
    const {productId} = useParams<RequestParams>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [listCategory, setlistCategory] = useState<CategoryResponse>({
        data: []
    })

    const [listShelfLocation, setlistShelfLocation] = useState<ShelfResponse>({
        data: []
    })

    // const [editProductFormParams, seteditProductFormParams] = useState<Params>({
    //     id: String(productId),
    //     name : "", 
    //     description : "",
    //     category_id : "", 
    //     shelf_location_id : "",
    //     price : 0,
    //     stock : 0
    // })

    const [editProductFormParams, seteditProductFormParams] = useState<Params>({
        id: productId || "",
        category_id: "",
        code : "",
        description : "",
        name : "",
        price : 0,
        shelf_location_id : "",
        stock: 0,
        category: {
            id: "",
            name : ""
        },
        shelf : {
            id: "",
            elabel_code: "",
            product_name: ""
        }
    })
    console.log(editProductFormParams)

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await dispatch(GetShelfListService()).unwrap() // [....]
                if (res) setlistShelfLocation(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await dispatch(GetCategoryListService()).unwrap() 
                if (res) setlistCategory(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])

    // const [productInfo, setProductInfo] = useState<Product>({
    //     id: productId || "",
    //     category_id: "",
    //     code : "",
    //     description : "",
    //     name : "",
    //     price : 0,
    //     shelf_location_id : "",
    //     stock: 0,
    //     category: {
    //         id: "",
    //         name : ""
    //     },
    //     shelf : {
    //         id: "",
    //         elabel_code: ""
    //     }
    // })
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         try{
    //             const request = {
    //                 product_id: productId,
    //                 offset: 1,
    //                 limit: 1
    //             }
    //             const res = await dispatch(GetProductListService(request)).unwrap()
    //             if (res) setProductInfo(res.data[0])
    //         } catch(err) {
    //             dispatch(statusActions.setError((err as Error).message))
    //         }
    //     }
    //    fetchData()
    // }, [dispatch, productId])

    // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     try{
    //         await dispatch(EditProductService(productInfo)).unwrap()
    //         navigate(adminRoutes.PRODUCT_LIST_ADMIN_PAGE)
    //     } catch(err) {
    //         console.log(err)
    //         dispatch(statusActions.setError((err as Error).message))
    //     }
    // }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await dispatch(EditProductService(editProductFormParams)).unwrap()
            navigate(adminRoutes.PRODUCT_LIST_ADMIN_PAGE)
        } catch(err) {
            console.log(err)
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        
        // seteditProductFormParams(prev => ({
        //     ...prev,
        //     [id]: value,
        // }))

        switch (id){
            case "name":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    name: value,
                }))
                console.log(value)
                break
            case "description":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    description: value,
                }))
                console.log(value)
                break
            case "category":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    category_id: value,
                }))
                console.log(value)
                break
            case "shelf":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    shelf_location_id: value,
                }))
                console.log(value)
                break
            case "price":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    price: Number(value),
                }))
                console.log(value)
                break
            case "stock":
                seteditProductFormParams((prev) => ({
                    ...prev,
                    stock: Number(value),
                }))
                console.log(value)
                break
            
        }
    }

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    product_id: productId,
                    offset: 1,
                    limit: 1,
                    search: ""
                }
                console.log(request)
                const res = await dispatch(GetProductListService(request)).unwrap()
                // if (res) setlistProduct(res)
                console.log(res)
                if (res){
                    const productData = res.data[0]
                    console.log(productData)
                    // setProductInfo(res.data[0])
                    seteditProductFormParams((prev) => ({
                        ...prev,
                        id: String(productId),
                        name : productData.name, 
                        code : productData.code,
                        description : productData.description,
                        category_id : productData.category.id, 
                        shelf_location_id : productData.shelf.id,
                        price : productData.price,
                        stock : productData.stock,
                        category : productData.category,
                        shelf : productData.shelf
                    }))
                
                }
                dispatch(statusActions.setLoading(false))
            
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, productId])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Wrapper>
            <Title>Edit Product Form</Title>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Name</Form.Label>
                    <InputField type="text"
                                id="name"
                                value={editProductFormParams.name} 
                                onChange = {onChange}
                                />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Code</Form.Label>
                    <InputField type="text"
                                id="productcode"
                                value={editProductFormParams?.code}
                                // onChange = {onChange} 
                                disabled
                                />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Description</Form.Label>
                    <textarea className="form-control" 
                                    id="description" 
                                    value={editProductFormParams.description}
                                    onChange={onChange}
                                    >
                    </textarea>
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Category</Form.Label>
                    <Form.Select id="category"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder={editProductFormParams.category?.name}>
                        <option disabled>{editProductFormParams.category?.name}</option>
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
                            value={editProductFormParams.stock}
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Price (Rp.)</Form.Label>
                    <InputField type="text"
                                id="price"
                                onChange={onChange} 
                                value={editProductFormParams.price}  
                            />
                </Form.Group>

                {/* <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Shelf Location</Form.Label>
                <InputField type="text"
                            id="shelf"
                            onChange={onChange}
                            placeholder="Select Shelf Location"   
                            value={productInfo.shelf?.elabel_code}
                            />
                </Form.Group> */}
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Shelf Location</Form.Label>
                    <Form.Select id="shelf"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder="Select Shelf Location">
                        <option disabled>{editProductFormParams.shelf?.elabel_code}</option>
                        {
                            listShelfLocation.data.map((data => (
                                <option value={data.id} >{data.elabel_code}</option>
                            )))
                        }
                    </Form.Select>
                </Form.Group>

                <ActionButton>
                    <CancelButton to={generatePath(adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE, { productId: productId })}>Cancel</CancelButton>
                    <DeleteButton variant="primary" onClick={handleShow}>Delete</DeleteButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>

                <DeleteModal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <p><i className="fa-solid fa-trash-can"></i></p>
                        <p>Do you really want to delete this product?</p>
                        <p>This process can't be undone.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        {/* <DeleteButton variant="primary" type="submit">Delete</DeleteButton> */}
                    </Modal.Footer>
                </DeleteModal>
            </Form>
        </Wrapper>
    )
}

export default AdminEditProduct