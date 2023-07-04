import React, { useState, ChangeEvent } from 'react'
import { Wrapper, Title, ActionButton, CancelButton, SubmitButton} from './AdminAddPromo.styles'
import { Form } from 'react-bootstrap';
import { InputField } from '@components/Input/Input.styles';
import { adminRoutes } from '@constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store';
import { statusActions } from '@store/status';
import { CreatePromoRequest, CreatePromoService } from '@services/Promo/create';


const AdminAddPromo: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [createPromoRequest, setCreatePromoRequest] = useState<CreatePromoRequest>({
        description: "",
        value: 0,
        start_date: "",
        end_date: ""
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await dispatch(CreatePromoService(createPromoRequest)).unwrap()
            navigate(adminRoutes.PROMO_HISTORY_PAGE)
            
        } catch(err) {
            dispatch(statusActions.setError((err as Error).message))
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = (e.currentTarget as HTMLInputElement | HTMLSelectElement)
        switch (id){
            case "description":
                setCreatePromoRequest((prev) => ({
                    ...prev,
                    description: value,
                }))
                break
            case "value":
                setCreatePromoRequest((prev) => ({
                    ...prev,
                    value: Number(value),
                }))
                break
            case "start_date":
                setCreatePromoRequest((prev) => ({
                    ...prev,
                    start_date: value,
                }))
                break
            case "end_date":
                setCreatePromoRequest((prev) => ({
                    ...prev,
                    end_date: value,
                }))
                break
        }
    }

    return (
        <Wrapper>
            <Title>Add Promo Form</Title>
            <Form className='inputform' onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Promo Description</Form.Label>
                <InputField type="text"   
                            id="description"
                            onChange={onChange}
                            placeholder= "Enter Promo Description"
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Discount (%)</Form.Label>
                <InputField type="text"   
                            id="value"
                            onChange={onChange}
                            placeholder= "Enter Promo Discount"
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Promo Start Date</Form.Label>
                <InputField type="date"   
                            id="start_date"
                            onChange={onChange}
                            />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
                <Form.Label>Promo End Date</Form.Label>
                <InputField type="date"   
                            id="end_date"
                            onChange={onChange}
                            />
                </Form.Group>

                <ActionButton>
                    <CancelButton to={adminRoutes.PROMO_HISTORY_PAGE}>Cancel</CancelButton>
                    <SubmitButton variant="primary" type="submit">Submit</SubmitButton>
                </ActionButton>
            </Form>
        </Wrapper>
    )
}

export default AdminAddPromo