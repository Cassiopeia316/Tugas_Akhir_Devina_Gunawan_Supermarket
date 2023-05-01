import React  from 'react'
import { Title, Wrapper, AddCategoryPosition, SupermarketLayout, AddCategory, Content } from './AdminEpaperLocation.styles'
import { adminRoutes } from '@constants/route';
import  Supermarketlayout from '@assets/images/denah.jpg'
import { Table } from 'react-bootstrap';

const AdminEpaperLocationList: React.FC = () => {
    return (
        <Wrapper>  
            <Title>E-LABEL LOCATION LIST</Title>
            <AddCategoryPosition>
                <AddCategory to={adminRoutes.ADD_CATEGORY_ADMIN_PAGE}>+ Add New Shelf Location</AddCategory>
            </AddCategoryPosition>
            {/* <SupermarketLayout src={Supermarketlayout} className="img-fluid" alt="Responsive image"/> */}
            <Content>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>E-label Code</th>
                            <th>Floor</th>
                            <th>Aisle</th>
                            <th>Positiion</th>
                            <th>Row</th>
                            <th>Column</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            listProduct.data.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>{data.category.name}</td>
                                    <td>{data.price}</td>
                                    <td>floor = {data.shelf.floor}, aisle = {data.shelf.aisle}, position = {data.shelf.position}</td>
                                    <td>{data.stock}</td>
                                    <td>
                                        <Action>
                                            <ViewDetailsandAddPromo to={generatePath(adminRoutes.PRODUCT_DETAIL_ADMIN_PAGE, { productId: data.id })}><i className="fa-solid fa-magnifying-glass"></i> </ViewDetailsandAddPromo> 
                                            <ViewDetailsandAddPromo to={generatePath(adminRoutes.ADD_PROMO_ADMIN_PAGE, { productId: data.id })} ><i className="fa-solid fa-tag"></i></ViewDetailsandAddPromo>
                                        </Action>
                                    </td>
                                </tr> 
                            ))
                        } */}
                    </tbody>
                </Table>
            </Content>
        </Wrapper>
    )
}

export default AdminEpaperLocationList