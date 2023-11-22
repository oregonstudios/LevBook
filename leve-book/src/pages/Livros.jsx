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
  display: flex;
`
const FilterBar = styled.section`
  background-color: pink;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: start;
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
const Results = styled.div`
  
`
const FilterOptions = styled.section`
  
`
const ResultsList = styled.ul`
  
`
const ResultsItem = styled.li`
  
`
const FilterType = styled.p`
  
`
const FilterList = styled.ul`
  
`
const FilterListItem = styled.li`
  
`
export default function Livros(){

    const location = useLocation();
    const LivrosContent = obterLivrosContent(location.pathname)

  return(
    <div>
        <Header/>
        <HeaderSection/>
        <LivrosWrapper>
            <FilterBar>
                <NavList>
                  {LivrosContent.links.map( link => (
                    <LinkItem>{link}</LinkItem>
                  ))}
                </NavList>
                <CategoriaAtual>{LivrosContent.categoriaAtual}</CategoriaAtual>



                <NumeroDeProdutos>{LivrosContent.livros.length} Resultados</NumeroDeProdutos>


              <FilterOptions>
                <FilterList>
                  <FilterType>Categoria</FilterType>

                  <FilterListItem>Filtro</FilterListItem>
                  <FilterListItem>Filtro</FilterListItem>
                  <FilterListItem>Filtro</FilterListItem>
                  <FilterListItem>Filtro</FilterListItem>
                  <FilterListItem>Filtro</FilterListItem>
                  <FilterListItem>Filtro</FilterListItem>
                </FilterList>
              </FilterOptions>


            </FilterBar>






            <Results>
              <ResultsList>

              {LivrosContent.livros.map( livro => (
                <ResultsItem>{livro.titulo}</ResultsItem>
              ))}
              </ResultsList>
            </Results>
        </LivrosWrapper>
        <Footer/>
    </div>
    )
}