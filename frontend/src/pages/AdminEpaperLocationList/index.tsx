import React, { useState, useEffect }  from 'react'
import { Title, Wrapper, AddEpaperPosition, SupermarketLayout, AddLocation, Content, PaginationContent, ViewDetail } from './AdminEpaperLocation.styles'
import { adminRoutes } from '@constants/route';
import  Supermarketlayout from '@assets/images/websitestyle-01.jpg'
import { Table } from 'react-bootstrap';
import Paginate from '@components/Paginate';
import { GetElabelListService, Response } from '@services/Location/epaper';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { generatePath } from 'react-router-dom';

const AdminEpaperLocationList: React.FC = () => {
    const LIMIT = 10
    const [listEpaperCode, setListEpaperCode] = useState<Response>({
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
                const res = await dispatch(GetElabelListService(request)).unwrap() 
                if (res) setListEpaperCode(res)
            } catch(err) {
                dispatch(statusActions.setError((err as Error).message))
            }
        }
       fetchData()
    }, [dispatch, currentPage, LIMIT])
    return (
        <Wrapper>  
            <Title>E-LABEL LOCATION LIST</Title>
            <AddEpaperPosition>
                <p>Supermarket Layout</p>
                <AddLocation to={adminRoutes.ADD_LOCATION_ADMIN_PAGE}>+ Add New Shelf Location</AddLocation>
            </AddEpaperPosition>
            
            <Content>
            <SupermarketLayout src={Supermarketlayout} className="img-fluid" alt="Responsive image"/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>E-label Code</th>
                            <th>Aisle</th>
                            <th>Position</th>
                            <th>Column</th>
                            <th>Row</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listEpaperCode.data.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.elabel_code}</td>
                                    <td>{data.elabel_code.slice(0,2)}</td>
                                    <td>{
                                            data.elabel_code.slice(2,3) === "R" ? ("Right") : 
                                                (data.elabel_code.slice(2,3) === "L" ? ("Left") : 
                                                    (data.elabel_code.slice(2,3) === "M" ? ("Middle") : 
                                                        (data.elabel_code.slice(2,3) === "F" ? ("Front") : 
                                                            (data.elabel_code.slice(2,3) === "B" ? ("Back") : ("-")))
                                                ))
                                        }</td>
                                    <td>{data.elabel_code.slice(4,6)}</td>
                                    <td>{data.elabel_code.slice(7)}</td>
                                    <td>{data.product_name == null ? ("-") : (data.product_name)}</td>
                                    <td>
                                        <ViewDetail to={generatePath(adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE, { productId: data.id })}><i className="fa-solid fa-trash"></i></ViewDetail> 
                                    </td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </Table>
            </Content>
            <PaginationContent>
            <Paginate currentPage={currentPage}
                        hasPrevPage={listEpaperCode.hasPrevPage}
                        hasNextPage={listEpaperCode.hasNextPage}
                        onClick={setCurrentPage}
                        />
            </PaginationContent>
            
        </Wrapper>
    )
}

export default AdminEpaperLocationList