import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: #FFF;
    text-decoration: none;

    &:hover {
        color: orange;
    }

    &.linkDestacado {
        text-decoration: underline;
    }
`


export default function HeaderLink({ children, to}){
    const location = useLocation();

    return(
        <StyledLink className={`
        ${location.pathname === to ? 'linkDestacado' : ""}`}
        to={to}>
        {children}
        </StyledLink>
    )
}