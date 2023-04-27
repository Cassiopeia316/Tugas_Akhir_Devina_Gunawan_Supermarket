import React, { useState, useEffect } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton} from './AdminAddProduct.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';

const AdminAddProduct: React.FC = () => {
    
    return (
        <Wrapper>
            <Title>Add Product Form</Title>
            <Form className='inputform'>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Product Name</Form.Label>
                    <InputField type="text" 
                                // value={patientDetailReport.name}
                                />
                </Form.Group>
                
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Description</Form.Label>
                <InputField type="text"   
                            // value={patientDetailReport.preOperations[0].diagnose}
                            // disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Category</Form.Label>
                <InputField type="text"   
                            // value={patientDetailReport.preOperations[0].diagnose}
                            // disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Stock</Form.Label>
                <InputField type="text"   
                            // value={patientDetailReport.preOperations[0].diagnose}
                            // disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Price</Form.Label>
                <InputField type="text"   
                            // value={patientDetailReport.preOperations[0].diagnose}
                            // disabled
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Shelf Location</Form.Label>
                <InputField type="text"   
                            // value={patientDetailReport.preOperations[0].diagnose}
                            // disabled
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

export default AdminAddProduct