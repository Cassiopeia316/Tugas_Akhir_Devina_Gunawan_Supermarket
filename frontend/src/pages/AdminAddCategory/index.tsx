import React, { useState, useEffect, ChangeEvent } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton, ListCategoryExist, Columngrid} from './AdminAddCategory'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { CategoryResponse, GetCategoryListService } from '@services/Category/list';
import { CreateCategoryRequest, CreateCategoryService } from '@services/Category/create';

const AdminAddCategory: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [createCategoryRequest, setCreateCategoryRequest] = useState<CreateCategoryRequest>({
        name : "", 
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await dispatch(CreateCategoryService(createCategoryRequest)).unwrap()
            navigate(adminRoutes.CATEGORY_LIST_ADMIN_PAGE)
            
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement)
        switch (id){
            case "name":
                setCreateCategoryRequest((prev) => ({
                    ...prev,
                    name: value,
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
                const res = await dispatch(GetCategoryListService()).unwrap()
                if (res) setlistCategory(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch])
    
    return (
        <Wrapper>
            <Title>Add Category Form</Title>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Category Name</Form.Label>
                    <InputField type="text"
                                id="name" 
                                onChange={onChange}
                                />
                </Form.Group>
                <ActionButton>
                    <CancelButton to={adminRoutes.CATEGORY_LIST_ADMIN_PAGE}>Cancel</CancelButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>
                <ListCategoryExist>
                    <h6>List of existing categories:</h6>
                    <Columngrid>
                    {
                        listCategory.data.map((data) => (
                                <p>- {data.name}</p> 
                    ))}
                    </Columngrid>
                </ListCategoryExist>
            </Form>
        </Wrapper>
    )
}

export default AdminAddCategory