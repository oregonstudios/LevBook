import styled from "styled-components";
import Header from "components/Header";
import HeaderSection from "components/HeaderSection";
import Footer from "components/Footer";



// Images
import mainbanner from "../images/home-banner.jpg";
import silverswan from "../images/books/TheSilverSwan.jpg";
import sequisermudaromundo from "../images/books/SeQuiserMudaroMundo.jpg";
import vermelhobrancosangueazul from "../images/books/VermelhoBrancoeSangueAzul.jpg";
import lupin from "../images/books/lupin.jpg";
import ladykillers from "../images/books/LadyKillers.png";






const HeroSection = styled.div`
  flex-shrink: 0;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeroIllustration = styled.img`
  max-width: 100%;
  display: flex;
  margin-top: 36.5px;
  border-radius: 75px;
`;

const Btext = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 150px;
`;


const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;




const Ltext = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 20px;
`;

const Offers = styled.div`
  cursor: pointer;
  color: #FFF;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 118px;
  height: 38px;
  flex-shrink: 0;
  background-color: #F78310;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 40px;
`;

const HeroOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileEdit = styled.div`
  width: 351px;
  height: 129px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #FBF8F5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;

const BoxOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const BigOptions = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SmallOptions = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
`;

const LibraryIcon = styled.div`
  width: 150px;
  height: 150px;
  margin-top: -15px;
  margin-right: -30px;
`;




const Products = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-bottom: 25vw;
  margin-top: 15vw;
  align-self: center;
  
`;




const BooksOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 25px;
    margin: 0 auto;
`;



const Book = styled.img`
  width: 100%;
  border-radius: 10px;
`;




const BookName = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 20px;
`;



const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; /* Ajuste a largura conforme necessário */
  margin: 5vw;
`;




const ProductsTitle = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 50px;
    margin-bottom: 15px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Line = styled.footer`
width: 1500px;
height: 1px;
background-color: gray;
`


const ProductsSubTitle = styled.div`
     color: #00000083;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
`;


const OptionsCarousel = styled.div `
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`







export default function Home() {

  return (
    <div>
      <Header />
      <HeaderSection/>
    <Body>
      <main>

        <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                

                <BooksOptions>
                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Escolhidos a dedo</ProductsTitle>
                <ProductsSubTitle>Criamos uma biblioteca só sua, com base em seus interesses</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan}/>
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Clássicos do terror</ProductsTitle>
                <ProductsSubTitle>O halloween já passou, mas ainda da tempo de ver os bestsellers do medo</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Os melhores</ProductsTitle>
                <ProductsSubTitle>Obras com as melhores avaliações em nosso site</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


      </main>
      <Line />
    </Body>
      <Footer />
    </div>
    
  );
}
