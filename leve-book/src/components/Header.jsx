// React Router
import styled from 'styled-components';
import { Link} from 'react-router-dom';

// componentes
import HeaderLink from './HeaderLink';
import HeaderMenu from './HeaderMenu';
// imagens
import Logo from '../images/logo.png'
// React Icons
import {RiShoppingBasket2Line, RiHeartLine, RiUser3Line, RiSearchLine} from 'react-icons/ri'

const itensNavHeader = [
    {
        nome: 'Favoritos',
        icone: <RiHeartLine size={22}/>,
        pathname: '/favoritos'
    },
    {
        nome: 'Entrar',
        icone: <RiUser3Line size={22}/>,
        pathname: '/login'
    },
    {
        nome: 'Minha Cesta',
        icone: <RiShoppingBasket2Line size={22}/>,
        pathname: '/cesta'
    }
]
const HeaderContainer = styled.header`
    font-family: var(--font-main);
    position: sticky;
    top: 0px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const PrimeiraSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-primaria);
    width: 100%;    
    gap: 40px;
    padding: 10px 0 ;
`

const LeveBook = styled(Link)`
    color: #FFF;
    text-decoration: none;
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 2px;
    font-size: 14px;
`

const HeaderLogo = styled.img`
    width: 80px;
`
const NomeLoja = styled.h1`
    font-family: var(--font-secundaria);
    font-size: 24px;
`

const FormPesquisa = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

`
const BarraDePesqisa = styled.input`
    width: 500px;
    height: 40px;
    font-size: 19px;
    background-color: #e3e2e2;
    color: #000000a8;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 49px 0 10px;

    &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`
const IconeLupa = styled.button`
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
`
const NavBar = styled.menu`
    display: flex;
    gap: 30px;
`


export default function Header(){
    return(
        <HeaderContainer>
            <PrimeiraSection>
                <LeveBook to='/'>
                    <HeaderLogo src={Logo}/>
                    <NomeLoja>Leve Book</NomeLoja>
                </LeveBook>
                <HeaderMenu/>
                <FormPesquisa>
                    <BarraDePesqisa type='search' placeholder='O que você está procurando?'/>
                    <IconeLupa>
                        <RiSearchLine/>
                    </IconeLupa>
                </FormPesquisa>
                <NavBar>
                {itensNavHeader.map( item => (
                    <HeaderLink to={item.pathname}>{item.icone}{item.nome}</HeaderLink>
                ))}
                </NavBar>
            </PrimeiraSection>

        </HeaderContainer>
    )
}