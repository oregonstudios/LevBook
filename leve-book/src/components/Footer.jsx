// styled components
import styled from 'styled-components'
// imagens
import VisaPayMethod from '../images/visa-pay-method.png'
import SeloSeguranca1 from '../images/RA1000 1.png'
import SeloSeguranca2 from '../images/pci-menor 1.png'
import SeloSeguranca3 from '../images/imagens-de-selo-de-seguranca-png-8 1.png'

// React Icons
import {FaSquareYoutube, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'

const FooterContainer = styled.footer`
    font-family: var(--font-main);
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
`
const FooterTitle = styled.h4`
    font-size: 16px;
    padding: 0 0 15px 0 ;
    font-weight: bold;
`
const LinkFooter = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.50);

    &:hover {
        color: var(--cor-secundaria);
        text-decoration: underline;
    }
`
const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`
const FooterSegDiv = styled(FooterDiv)`
    text-align: center;
`
const ImgSeguranca = styled.img`
    margin: 0 5px;
`
const FooterTercDiv = styled(FooterDiv)`
    gap: 100px;
`
const SectionComTexto = styled.section`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    a{
        margin: 0 0 5px 0;
    }
`

export default function Footer() {
    return(
        <FooterContainer>
            <FooterDiv>
                <SectionComTexto>
                    <FooterTitle>Privacidade Termos</FooterTitle>
                    <LinkFooter href="">Política de Pagamento</LinkFooter>
                    <LinkFooter href="">Política de Privacidade</LinkFooter>
                    <LinkFooter href="">Trocas e Devoluções</LinkFooter>
                    <LinkFooter href="">Encontre o seu pedido</LinkFooter>
                </SectionComTexto> 
                <section>
                    <FooterTitle>Métodos de pagamento</FooterTitle>
                    <div>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                    </div>
                    <div>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                        <img src={VisaPayMethod} alt=""/>
                    </div>
                </section> 
            </FooterDiv>
            <FooterSegDiv>
                <SectionComTexto>
                    <FooterTitle>Mapa do Site</FooterTitle>
                    <LinkFooter href="">Inicio</LinkFooter>
                    <LinkFooter href="">Buscar</LinkFooter>
                    <LinkFooter href="">Sacola</LinkFooter>
                    <LinkFooter href="">Perfil</LinkFooter>
                </SectionComTexto> 
                <section>
                    <FooterTitle>Selos de Qualidade e segurança</FooterTitle>
                    <ImgSeguranca src={SeloSeguranca1} alt="Selo de Segurança"/>
                    <ImgSeguranca src={SeloSeguranca2} alt="Selo de Segurança"/>
                    <ImgSeguranca src={SeloSeguranca3} alt="Selo de Segurança"/>
                </section> 
            </FooterSegDiv>
            <FooterTercDiv>
                <SectionComTexto>
                    <FooterTitle>Informações</FooterTitle>
                    <LinkFooter href="">Parceiros</LinkFooter>
                    <LinkFooter href="">Sobre nós</LinkFooter>
                    <LinkFooter href="">Fale conosco</LinkFooter>
                </SectionComTexto> 
                <section>
                    <FooterTitle>Siga-nos</FooterTitle>
                    <LinkFooter href=""><FaSquareInstagram color = 'black'  size={33}/></LinkFooter>
                    <LinkFooter href=""><FaSquareFacebook  color = 'black'  size={33}/></LinkFooter>
                    <LinkFooter href=""><FaSquareYoutube   color = 'black'  size={33}/></LinkFooter>
                    <LinkFooter href=""><FaSquareXTwitter  color = 'black'  size={33}/></LinkFooter>
                </section> 
            </FooterTercDiv>
        </FooterContainer>
    )
}
 