import styled from 'styled-components'
import VisaPayMethod from '../images/visa-pay-method.png'
import SeloSeguranca1 from '../images/RA1000 1.png'
import SeloSeguranca2 from '../images/pci-menor 1.png'
import SeloSeguranca3 from '../images/imagens-de-selo-de-seguranca-png-8 1.png'
import InstagramIcon from '../images/instagram-icon.png'
import FacebookIcon from '../images/facebook.icon.png'
import YoutubeIcon from '../images/youtube-icon.png'
import TwitterIcon from '../images/twitter-icon.png'


const FooterContainer = styled.footer`
    font-family: var(--font-main);
    display: flex;
    justify-content: space-around;
`
const FooterTitle = styled.h4`
    font-size: 16px;
`
const LinkFooter = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.50);
`
const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`
const FooterSegDiv = styled(FooterDiv)`
    text-align: center;
`
const FooterTercDiv = styled(FooterDiv)`
    gap: 100px;
`
const SectionComTexto = styled.section`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    a{
        margin: 0 0 3px 0;
    }
`
const ImgFooterRedesSociais = styled.img`
    width: 30px;
    height: 30px;
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
                    <img src={SeloSeguranca1} alt="Selo de Segurança"/>
                    <img src={SeloSeguranca2} alt="Selo de Segurança"/>
                    <img src={SeloSeguranca3} alt="Selo de Segurança"/>
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
                    <LinkFooter href=""><ImgFooterRedesSociais src={InstagramIcon} alt=""/></LinkFooter>
                    <LinkFooter href=""><ImgFooterRedesSociais src={FacebookIcon} alt=""/></LinkFooter>
                    <LinkFooter href=""><ImgFooterRedesSociais src={YoutubeIcon} alt=""/></LinkFooter>
                    <LinkFooter href=""><ImgFooterRedesSociais src={TwitterIcon} alt=""/></LinkFooter>
                </section> 
            </FooterTercDiv>
        </FooterContainer>
    )
}
 