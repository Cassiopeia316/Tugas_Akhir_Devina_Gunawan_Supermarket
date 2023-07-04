import React, { useState, useEffect, ChangeEvent } from 'react'
import { Content, SearchProduct, Title, Wrapper, Action, FilterCategory, CategoryButton, AddProduct, PaginationAndAddProduct, CategoryScroll, ViewDetailsandAddPromo, SubmitButton, Input } from '@pages/AdminProductList/AdminProductList.styles'
import Table from 'react-bootstrap/Table';
import { GetProductListService, Response } from '@services/Product/list';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { adminRoutes } from '@constants/route';
import Paginate from '@components/Paginate';
import { CategoryResponse, GetCategoryListService } from '@services/Category/list';
import { generatePath } from 'react-router-dom';

const AdminProductList: React.FC = () => {
    const LIMIT = 10
    const [listProduct, setlistProduct] = useState<Response>({
        data: [],
        hasPrevPage : false,
        hasNextPage : false,
    })
    
    const [categoryId, setCategoryId] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget as HTMLInputElement
        setSearch(value)
    }

    const onSearch = async () => {
        try{
            const request = {
                category_id: categoryId,
                offset: currentPage,
                limit: LIMIT,
                search: search
            }
            const res = await dispatch(GetProductListService(request)).unwrap() 
            if (res) setlistProduct(res)
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const dispatch = useAppDispatch()
    useEffect(() => {
        // if(listProduct) {
        //     onSearch()
        // }
    //     const fetchData = async () =>{
    //         try{
    //             const request = {
    //                 category_id: categoryId,
    //                 offset: currentPage,
    //                 limit: LIMIT,
    //                 search: search
    //             }
    //             const res = await dispatch(GetProductListService(request)).unwrap() 
    //             if (res) setlistProduct(res)
    //         } catch(err) {
    //             dispatch(statusActions.setError((err as Error).message))
    //         }
    //     }
    //    fetchData()
        onSearch()
    }, [dispatch, categoryId, currentPage, LIMIT])

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
    const onClick = () => {
        location.reload();
    }
    return (
        <Wrapper>  
            <Title>PRODUCT LIST</Title>
                <SearchProduct>
                    <p className='searchlabel'>Search Product : &nbsp; &nbsp;</p>
                    <Input type="text" placeholder='search' value={search} onChange={onChange}/>
                    <SubmitButton onClick = {onSearch}> Search </SubmitButton>
                    {/* <Searchbar/> */}
                    {/* <Input
                        type="search"
                        placeholder="Search Here..."
                        aria-label="Search"
                    />
                    <SubmitButton variant="outline-primary" type="button">Search</SubmitButton> */}
                </SearchProduct>
                <FilterCategory>
                    <p >Category : &nbsp; &nbsp;</p>
                    <CategoryScroll>
                        <CategoryButton onClick={onClick}>All</CategoryButton>
                        {
                            listCategory.data.map((data, index) => (
                                <CategoryButton key={index} onClick={() => setCategoryId(data.id)}>{data.name}</CategoryButton>
                            ))
                        }
                    </CategoryScroll>
                </FilterCategory>
            <Content>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Category</th>
                            <th>Normal Price (Rp)</th>
                            <th>Price After Promo (Rp)</th>
                            <th>Stock</th>
                            <th>Aisle</th>
                            <th>Position</th>
                            <th>Column</th>
                            <th>Row</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listProduct.data.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>{data.category.name}</td>
                                    <td>{data.price}</td>
                                    <td>{data.price_after_promo == data.price ? ("-") : (data.price_after_promo)}</td>
                                    <td>{data.stock}</td>
                                    <td>{data.shelf.elabel_code.slice(0,2)}</td>
                                    <td>{
                                            data.shelf.elabel_code.slice(2,3) === "R" ? ("Right") : ("Left")
                                        }</td>
                                    <td>{data.shelf.elabel_code.slice(4,6)}</td>
                                    <td>{data.shelf.elabel_code.slice(7)}</td>
                                    <td>
                                        <Action>
                                            <ViewDetailsandAddPromo to={generatePath(adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE, { productId: data.id })}><i className="fa-solid fa-magnifying-glass"></i> </ViewDetailsandAddPromo> 
                                            <ViewDetailsandAddPromo to={generatePath(adminRoutes.ADD_PRODUCT_PROMO_ADMIN_PAGE, { productId: data.id })} ><i className="fa-solid fa-tag"></i></ViewDetailsandAddPromo>
                                        </Action>
                                    </td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </Table>
            </Content>
            <PaginationAndAddProduct>
                <Paginate currentPage={currentPage}
                        hasPrevPage={listProduct.hasPrevPage}
                        hasNextPage={listProduct.hasNextPage}
                        onClick={setCurrentPage}
                        />
                <AddProduct to={adminRoutes.ADD_PRODUCT_ADMIN_PAGE}>+ Add Product</AddProduct>
            </PaginationAndAddProduct>
        </Wrapper>
    )
}

export default AdminProductList