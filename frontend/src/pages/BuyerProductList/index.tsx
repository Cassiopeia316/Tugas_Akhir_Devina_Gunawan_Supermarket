import React, { useEffect, useState } from 'react'
import { CategoryButton, Content, FilterCategory, Paginationbar, SearchProduct, Title, Wrapper } from './BuyerProductList.styles'
import NavbarPublic from '@components/NavbarPublic'
import Footer from '@components/FooterPublic'
import Searchbar from '@components/Searchbar'
import { Table } from 'react-bootstrap'
import { GetProductListService, Response } from '@services/Product/list'
import { useAppDispatch } from '@store'
import { statusActions } from '@store/status'
import Paginate from '@components/Paginate'

const BuyerProductList: React.FC = () => {
    const LIMIT = 1
    const [listProduct, setlistProduct] = useState<Response>({
        data: [],
        hasPrevPage : false,
        hasNextPage : false,
    })
    
    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = {
                    offset: currentPage,
                    limit: LIMIT,
                }
                const res = await dispatch(GetProductListService(request)).unwrap() // [....]
                // console.log(res)
                if (res) setlistProduct(res)
                // console.log(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, currentPage, LIMIT])
    return (
        <Wrapper>  
            <NavbarPublic/>
            <Content>
            <Title>PRODUCT LIST</Title>
                <SearchProduct>
                    <p className='searchlabel'>Search Product : &nbsp; &nbsp;</p>
                    <Searchbar/>
                </SearchProduct>
                <FilterCategory>
                    <p >Category : &nbsp; &nbsp;</p>
                    <CategoryButton type="button">All</CategoryButton>
                    <CategoryButton type="button">Can or Jar</CategoryButton>
                </FilterCategory>
            
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Shelf Location</th>
                            <th>Stock</th>
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
                                    <td>floor = {data.shelf.floor}, aisle = {data.shelf.aisle}, position = {data.shelf.position}</td>
                                    <td>{data.stock}</td>
                                    <td><i className="fa-solid fa-magnifying-glass"></i></td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </Table>
                <Paginationbar>
                <Paginate currentPage={currentPage}
                        hasNextPage={listProduct.hasNextPage}
                        hasPrevPage={listProduct.hasPrevPage}
                        onClick={setCurrentPage}
                        />
                </Paginationbar>
            </Content>
            <Footer/>
        </Wrapper>
    )
}

export default BuyerProductList