import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-size: 14px;
`

export default function HeaderLink({ children, to}){
    const location = useLocation();

    return(
        <StyledLink 
        to={to}>
        {children}
        </StyledLink>
    )
}