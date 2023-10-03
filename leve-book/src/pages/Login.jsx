// styled components
import styled from "styled-components"
// componentes
import LoginCard from "components/LoginCard"
import LoginCriarConta from 'components/LoginCriarConta'
// Imagens
import BackgroundLogin from '../images/login-background.png'

const PageWrapper = styled.div`
    background: url(${BackgroundLogin});
    background-size:cover;
    background-repeat: no-repeat;
    height: 100vh;
`
const LoginContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-main);
    height: 100vh;
    margin: 0 30px;
    gap: 50px;
    color: white;
`
const DivBemVindo = styled.div`
    color: #FFF;
    width: 900px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const NomeDoSite = styled.h1`
    font-size: 60px;
    font-weight: 700;
`
const TextoBemVindo = styled.h2`
    font-size: 35px;
    font-weight: 700;
`
const DescDoSite = styled.p`
    font-size: 18px;
`



export default function Login() {
    return (
        <PageWrapper>
            <LoginContainer>
                {/*<DivBemVindo>
                    <NomeDoSite>LeveBook</NomeDoSite>
                    <TextoBemVindo>Bem-vindo!</TextoBemVindo>
                    <DescDoSite>Seja você um ávido leitor ou apenas esteja começando a 
                descobrir o encanto das palavras impressas, este é o lugar onde as 
                palavras saltam das páginas para dar vida a mundos
                desconhecidos e personagens inesquecíveis.</DescDoSite>
    </DivBemVindo>*/}
                <LoginCard>
                    <LoginCriarConta />
                </LoginCard>
            </LoginContainer>
        </PageWrapper>
    )
}