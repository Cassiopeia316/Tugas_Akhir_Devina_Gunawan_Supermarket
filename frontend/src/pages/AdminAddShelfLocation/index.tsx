import React, { useState, ChangeEvent } from 'react'
import { ActionButton, CancelButton, SubmitButton, Title, Wrapper, SupermarketLayout} from './AdminAddShelfLocation.styles'
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { adminRoutes } from '@constants/route';
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { useNavigate } from 'react-router-dom';
import { CreateLocationService } from '@services/Location/createlocation';
import { location } from '@models/location';
import  Supermarketlayout from '@assets/images/websitestyle-01.jpg'


const AdminAddShelfLocation: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [locationRequest, setLocationRequest] = useState<location>({
        aisle_number : "",
        position :"",
        column : "",
        row : ""
    })

    // const [createLocationRequest, setCreateLocationRequest] = useState<CreateLocationRequest>({
    //     elabel_code : ""
    // })

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        
        setLocationRequest(prev => ({
            ...prev,
            [id]: value,
        }))
    }
      
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const { aisle_number, position, column, row } = locationRequest;
            const elabel_code = (`${aisle_number}`+`${position}`+"C"+`${column}`+"R"+`${row}`);
            await dispatch(CreateLocationService({elabel_code})).unwrap()
            
            navigate(adminRoutes.EPAPER_LOCATION_ADMIN_PAGE)
            
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    return (
        <Wrapper>  
            <Title>ADD SHELF LOCATION</Title>
            <SupermarketLayout src={Supermarketlayout} className="img-fluid" alt="Responsive image"/>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Aisle Number</Form.Label>
                    <InputField type="text"
                                id="aisle_number" 
                                onChange={onChange}
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Position</Form.Label>
                    <InputField type="text"
                                id="position" 
                                onChange={onChange}
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Column</Form.Label>
                    <InputField type="text"
                                id="column"
                                onChange={onChange}
                                />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Row</Form.Label>
                    <InputField type="text"
                                id="row" 
                                onChange={onChange}
                                />
                </Form.Group>
                {/* <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                    <Form.Label>Row</Form.Label>
                    <Form.Select id="row"
                                aria-label="Default select example" 
                                onChange={onChange}
                                placeholder="Select Category">
                        <option value="01" >1</option>
                        <option value="02" >2</option>
                        <option value="03" >1</option>
                        <option value="04" >2</option>
                        <option value="05" >1</option>
                        <option value="06" >2</option>
                        <option value="07" >1</option>
                        <option value="08" >2</option>
                        <option value="09" >2</option>
                        <option value="10" >2</option>
                    </Form.Select>
                </Form.Group> */}
                <ActionButton>
                    <CancelButton to={adminRoutes.EPAPER_LOCATION_ADMIN_PAGE}>Cancel</CancelButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>
                
            </Form>
            
        </Wrapper>
    )
}

export default AdminAddShelfLocation