// React Router
import styled from 'styled-components';
// componentes
import HeaderLink from './HeaderLink';
// imagens
import Logo from '../images/logo.png'
// React Icons
import {BiSearchAlt2, BiHomeAlt2} from 'react-icons/bi'
import {PiSquaresFour, PiChatCircleBold} from 'react-icons/pi'
import {MdOutlineNotificationsNone, MdLogin} from 'react-icons/md'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const itensNavHeader = [
    {
        nome: 'Home',
        icone: <BiHomeAlt2 size={20}/>,
        pathname: '/'
    },
    {
        nome: 'Meus Anúncios',
        icone: <PiSquaresFour size={22}/>,
        pathname: '/meusanuncios'
    },
    {
        nome: 'Chat',
        icone: <PiChatCircleBold size={20}/>,
        pathname: '/chat'
    },
    {
        nome: 'Notificações',
        icone: <MdOutlineNotificationsNone size={23}/>,
        pathname: '/notificacoes'
    },
    {
        nome: 'Sacola',
        icone: <HiOutlineShoppingBag size={22}/>,
        pathname: '/sacola'
    },
    {
        nome: 'Login',
        icone: <MdLogin size={22}/>,
        pathname: '/login'
    },
]

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-main);  
    padding:10px 10px;
`
const DivHeaderMain = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const HeaderLogo = styled.img`
    width: 90px;
`
const SectionPesquisar = styled.section`
    display: flex;
    align-items: center;
    gap: 6px;
`
const BarraDePesquisa = styled.input`
    width: 400px;
    font-family: var(--font-main);
    font-size: 16px;
    padding: 9px;
    border-radius: 11px;
    border: none;
`
const BotaoPesquisa = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`
const NavHeader = styled.nav`
    display: flex;
    color: #FFF;
    font-size: 13px;
    gap: 20px;
    a {
        display: flex;
        align-items: center;
        gap: 4px;
}
`

const BotaoAnunciar = styled.a`
    color: #FFF;
    text-decoration: none;
    background-color: var(--cor-secundaria);
    padding: 11px 33px;
    border-radius: 18px;
`

export default function Header(){
    return(
        <HeaderContainer>
            <DivHeaderMain>
                <HeaderLogo src={Logo} alt="Logo"/>
                <SectionPesquisar>
                    <BarraDePesquisa type="text" placeholder="Títulos, Autores, Gêneros e Linhas Editoriais"/>
                    <BotaoPesquisa><BiSearchAlt2 size={30}/></BotaoPesquisa>
                </SectionPesquisar>
            </DivHeaderMain>
                <NavHeader>
                    {itensNavHeader.map( item => (
                        <HeaderLink to={item.pathname}>{item.icone}{item.nome}</HeaderLink>
                    ))}
                </NavHeader >
                <BotaoAnunciar class="botao-anunciar" href="">Anunciar</BotaoAnunciar>
        </HeaderContainer>
    )
}