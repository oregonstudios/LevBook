import Header from "components/Header"
import Footer from "components/Footer"
import HeaderSection from "components/HeaderSection"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { obterLivrosContent } from "../scripts/LivrosContent"

const LivrosWrapper = styled.main`
  background-color: green;
  font-family: var(--font-main);
  width: 1250px;
  margin: 0 auto;
  padding: 20px 0 ;
  box-sizing: border-box;
`
const ResultsBar = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: pink;
    align-items: center;
`
const NavSection = styled.section`
  display: flex;
  align-items: center;
`
const CategoriaAtual = styled.h3`
    font-size:26px;
`
const NavList = styled.ol`
    display: flex;
`
const LinkItem = styled.li`
    
`

const NumeroDeProdutos = styled.p`
  font-size: 16px;
`

export default function Livros(){

    const ResultadoLivros = new Array(6).fill({imagem:`sla`, Titulo:'Titulo dp Livro', Autor:'Autor do Livro', Valor: '44,54'});
    const location = useLocation();
    const LivrosContent = obterLivrosContent(location.pathname)

    return(
        <div>
            <Header/>
            <HeaderSection/>
            <LivrosWrapper>
                <ResultsBar>
                    <NavSection>
                        <CategoriaAtual>{LivrosContent.categoriaAtual}</CategoriaAtual>
                        <NavList>
                          {LivrosContent.links.map( link => (
                            <LinkItem>{link}</LinkItem>
                          ))}
                        </NavList>
                    </NavSection>

                    <NumeroDeProdutos>{ResultadoLivros.length} Livros</NumeroDeProdutos>
                </ResultsBar>
            </LivrosWrapper>
            <Footer/>
        </div>
    )
}