import React from 'react'
import { Input, SubmitButton, Wrapper } from './Searchbar.styles'

const Searchbar: React.FC = () => {
    return (
        <Wrapper className="d-flex">
            <Input
                type="search"
                placeholder="Search Here..."
                aria-label="Search"
            />
            <SubmitButton variant="outline-primary" type="button">Search</SubmitButton>
        </Wrapper>
    )
}

export default Searchbar