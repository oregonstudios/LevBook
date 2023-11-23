import Header from "components/Header"
import Footer from "components/Footer"
import HeaderSection from "components/HeaderSection"
import styled from "styled-components"
import { useLocation, Link } from "react-router-dom"
import { obterLivrosContent } from "../scripts/LivrosContent"

const LivrosBackground = styled.div`
  width: 100%;
  background-color: #ecebeb;
`
const LivrosWrapper = styled.main`
  font-family: var(--font-main);
  width: 1250px;
  margin: 0 auto;
  padding: 20px 0 ;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
`
const FilterBar = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  gap: 20px;
`

const CategoriaAtual = styled.h3`
  font-size:26px;
  font-weight: bold;
`
const NavList = styled.ol`
  display: flex;
`
const LinkItem = styled.li`
    
`

const NumeroDeProdutos = styled.p`
  font-size: 16px;
`

const FilterOptions = styled.section`
  display: flex;
  flex-direction:column;
  gap: 10px;
`
const FilterType = styled.p`
  
  `
const FilterList = styled.ul`
  
  `
const FilterListItem = styled.li`
`
const ResultsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px; 
  padding: 0 auto; 
`
const ResultsItem = styled.li`
  width: 185px;
  height: 330px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 10px 0;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color: #fff;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`
const ResultsItemImagem = styled.img`
  width: 65%;
  align-self: center;
`
const ResultsItemDados = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #b9b9b9;
  padding: 14px 0 ;
  gap: 5px;
  
`
const ResultsItemTitulo = styled.p`
  font-size: 18px;
`
const ResultsItemAutor = styled.p`
  font-size: 14px;
  color: #696969;
`
const ResultsItemPreco = styled.p`
  text-transform: uppercase;
  border: 1px solid var(--cor-primaria);
  border-radius: 3px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 0 10px;
  &:hover{
    background-color: var(--cor-primaria);
    color: #fff;
  }
`
export default function Livros(){

    const location = useLocation();
    const livrosContent = obterLivrosContent(location.pathname)

  return(
    <div>
        <Header/>
        <HeaderSection/>
        <LivrosBackground>

          <LivrosWrapper>
              <FilterBar>
                  <NavList>
                    {livrosContent.links.map( link => (
                      <LinkItem>{link} </LinkItem>
                    ))}
                  </NavList>
                  <div>
                    <CategoriaAtual>{livrosContent.categoriaAtual}</CategoriaAtual>
                    <NumeroDeProdutos>{livrosContent.livros.length} Resultados</NumeroDeProdutos>
                  </div>


                <FilterOptions>
                  <FilterType>Categorias</FilterType>
                  <FilterList>
                    <FilterListItem>Fantasia</FilterListItem>
                    <FilterListItem>Ficção</FilterListItem>
                    <FilterListItem>Receitas</FilterListItem>
                    <FilterListItem>Religião</FilterListItem>
                    <FilterListItem>Romances</FilterListItem>
                    <FilterListItem>Terror</FilterListItem>
                  </FilterList>
                </FilterOptions>


              </FilterBar>
              <ResultsList>

              {livrosContent.livros.map( livro => (
                <ResultsItem>
                  <ResultsItemImagem src={livro.imagem}/>
                  <ResultsItemDados>
                    <ResultsItemTitulo>{livro.titulo}</ResultsItemTitulo>
                    <ResultsItemAutor>{livro.autor}</ResultsItemAutor>
                  </ResultsItemDados>
                  <ResultsItemPreco>A partir de R$ {livro.preco}</ResultsItemPreco>
                </ResultsItem>
              ))}
              </ResultsList>
          </LivrosWrapper>
        </LivrosBackground>
        <Footer/>
    </div>
    )
}