import React, { useState, useEffect } from 'react'
import { Content, Title, Wrapper, Grid, Left, Right, Delete, AddCategory, AddCategoryPosition } from './AdminCategoryList.styles'
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { CategoryResponse, GetCategoryListService } from '@services/Category/list';
import { adminRoutes } from '@constants/route';

const AdminCategoryList: React.FC = () => {
    const [listCategory, setlistCategory] = useState<CategoryResponse>({
        data: []
    })

    const dispatch = useAppDispatch()
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
    return (
        <Wrapper>  
            <Title>CATEGORY LIST</Title>
            <AddCategoryPosition>
                <AddCategory to={adminRoutes.ADD_CATEGORY_ADMIN_PAGE}>+ Add New Category</AddCategory>
            </AddCategoryPosition>

            <Grid>
                {
                    listCategory.data.map((data) => (
                        <Content>
                            <Left>
                                <i className="fa-solid fa-basket-shopping"></i>
                                &nbsp; <p>{data.name}</p>
                            </Left>
                            <Right>
                            {/* <Delete><i className="fa-solid fa-trash"></i></Delete> */}
                            </Right>
                        </Content>
                    ))
                }
            </Grid>
        </Wrapper>
    )
}

export default AdminCategoryList