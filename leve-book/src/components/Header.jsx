// React Router
import styled from 'styled-components';
// componentes
import HeaderLink from './HeaderLink';
// imagens
import Logo from '../images/logo.png'
// React Icons
import {FaBars} from 'react-icons/fa'
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
`

const SectionCategorias = styled.section`
    display: flex;
    align-items: center;
    color: white;
    gap: 5px;
    cursor: pointer;
`
const TextoCategorias = styled.p`
    font-size: 17px;
`


const PrimeiraSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-primaria);
    width: 100%;    
    gap: 40px;
`
const HeaderLogo = styled.img`
    width: 120px;
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
    background-color: #ffffffea;
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

const SegundaSection = styled.section`
    background-color: var(--cor-secundaria);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
`
const TextoSegundaSection = styled.p`
    font-size: 15px;
`

export default function Header(){
    return(
        <HeaderContainer>
            <PrimeiraSection>

                <HeaderLink to='/'>
                    <HeaderLogo src={Logo}/>
                </HeaderLink>

                <SectionCategorias>
                    <FaBars size='20px'/>
                    <TextoCategorias>Categorias</TextoCategorias>
                </SectionCategorias>
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
            <SegundaSection>
                <TextoSegundaSection>Explore um mundo de conhecimento e emoção em nossa loja online de livros. Encontre a sua próxima história hoje!</TextoSegundaSection>
            </SegundaSection>


        </HeaderContainer>
    )
}