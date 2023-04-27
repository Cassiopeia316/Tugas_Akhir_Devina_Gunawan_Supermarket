import { Pagination } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled(Pagination)`
    ul{
        .page-item > .page-link{
            border: 1px solid #D0D0D0;
            :hover{
                background-color: #cbcbcb;
            }

            :active{
                background-color: #a5a5be !important;
            }
        }

        .page-item.active{
            .page-link{
            background-color: #CFD4ED ;
            color: #070738;
            }
        }
    }
`