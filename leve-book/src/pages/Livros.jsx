import Header from "components/Header"
import Footer from "components/Footer"
import HeaderSection from "components/HeaderSection"
import styled from "styled-components"
import { useLocation, Link } from "react-router-dom"
import { obterLivrosContent } from "../scripts/LivrosContent"
import Logo from '../images/logo.png'
import { LuFilter } from "react-icons/lu";
import livrosConfig from '../routes/livrosConfig.json'


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
  justify-content: space-between;
`
const LivrosMiniHeader = styled.div`
  font-family: var(--font-main);
  width: 1250px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #b8b8b8;
  `
const LivrosMiniHeaderSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`
const FilterBar = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 17%;
  gap: 20px;
  box-sizing: border-box;
  font-family: var(--font-main);

`
const FilterHeader = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;
  width: 90%;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #b8b8b8;

`
const FilterTitle = styled.p`
`
const CategoriaAtual = styled.h3`
  font-size:26px;
  font-weight: bold;
  font-family: var(--font-secundaria);

`
const NavList = styled.ol`
  display: flex;
  font-size: 15px;
  gap: 5px;
  font-family: var(--font-secundaria);
  color: #5f5f5f;
`
const LinkItem = styled(Link)`
  text-decoration: none;
  color:#5f5f5f;
  &:hover{
    color: var(--cor-secundaria);
  }
`

const NumeroDeProdutos = styled.p`
  font-size: 15px;
  font-family: var(--font-secundaria);
  color:#5f5f5f;

`

const FilterOptions = styled.section`
  display: flex;
  flex-direction:column;
  gap: 10px;
`
const FilterType = styled.p`
  font-size: 18px;

`
const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  gap: 5px;

`
const FilterListItem = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  &:hover{
    color:var(--cor-secundaria)
  }
`
const ResultsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 30px; 
  padding: 0 auto; 
  width: 83%;
  box-sizing: border-box;

`
const ResultsItemImagemWrapper = styled.div`
  height: 67%;
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
  width: 100%;
  border-bottom: 3px solid #a1a1a1;
  `

const ResultsItem = styled.li`
  width: 185px;
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 0 0 10px 0;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color: #fff;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    ${ResultsItemImagemWrapper} {
      border-bottom: 3px solid var(--cor-secundaria);
    }
  }
`

const ResultsItemImagem = styled.img`
  height: 100%;
  align-self: center;
`
const ResultsItemTituloWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 11%;
  text-align: center;
  padding: auto 0;
  overflow: hidden;
  padding: 0 4px;
  justify-content: center;
`
const ResultsItemTitulo = styled.p`
  font-size: 18px;
`
const ResultsItemAutorWrapper = styled.div`
  height: 5%;
  text-align: center;
  overflow: hidden;
`
const ResultsItemAutor = styled.p`
  font-size: 14px;
  color: #696969;
`
const ResultsItemPrecoWrapper = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
`
const ResultsItemPreco = styled.p`
  text-transform: uppercase;
  border: 1px solid var(--cor-primaria);
  border-radius: 3px;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 0 10px;
  background-color: #eceaea;

  &:hover{
    background-color: var(--cor-primaria);
    color: #fff;
  }
`
export default function Livros(){
    const verificaPathname = nomeLink =>{
      if (nomeLink == "home"){
        return "/"
      }
      if (nomeLink == "livros"){
        return "/livros"
      }
    }
    const location = useLocation();
    const livrosContent = obterLivrosContent(location.pathname)

  return(
    <div>
        <Header/>
        <HeaderSection/>
        <LivrosBackground>
          <LivrosMiniHeader>
            <LivrosMiniHeaderSection>
              <CategoriaAtual>{livrosContent.categoriaAtual}</CategoriaAtual>
              <NavList>
                {livrosContent.links.map((link, index, array) => [
                  <LinkItem to={verificaPathname(link.toLowerCase())}>{link}</LinkItem>,
                  index < array.length - 1 && ' > ',
                ])}
              </NavList>


            </LivrosMiniHeaderSection>
            <NumeroDeProdutos>{livrosContent.livros.length} Resultados</NumeroDeProdutos>

          </LivrosMiniHeader>

          <LivrosWrapper>

              <FilterBar>
                <FilterHeader>
                  <LuFilter/>
                  <FilterTitle>Filtros</FilterTitle>
                </FilterHeader>
                <FilterOptions>
                  <FilterType>Categorias</FilterType>
                  <FilterList>
                    {livrosConfig.map( rota => (
                      <FilterListItem to={rota.path}>{rota.categoria}</FilterListItem>
                    ))}
                  </FilterList>
                </FilterOptions>
            </FilterBar>
            <ResultsList>
              {livrosContent.livros.map( livro => (
                <ResultsItem>
                  <ResultsItemImagemWrapper>
                    {livro.Url ? (
                      <ResultsItemImagem src={livro.Url} alt="Descrição da imagem" />
                    ) : (
                      <ResultsItemImagem src={Logo} alt="Imagem Padrão" />
                    )}
                  </ResultsItemImagemWrapper>

                  <ResultsItemTituloWrapper>
                    <ResultsItemTitulo>{livro.Título}</ResultsItemTitulo>
                  </ResultsItemTituloWrapper>
                  <ResultsItemAutorWrapper>
                    <ResultsItemAutor>{livro.Autor}</ResultsItemAutor>
                  </ResultsItemAutorWrapper>
                
                  <ResultsItemPrecoWrapper>
                    <ResultsItemPreco>A partir de R$ {livro.Preço}</ResultsItemPreco>
                  </ResultsItemPrecoWrapper>
                </ResultsItem>
              ))}
            </ResultsList>

          </LivrosWrapper>
        </LivrosBackground>
        <Footer/>
    </div>
    )
}