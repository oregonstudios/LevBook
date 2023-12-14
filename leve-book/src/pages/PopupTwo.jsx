import styled from "styled-components";

import React from 'react';




// Images
import autoconhecimento from "../images/generos/autoconhecimento.png";
import biografia from "../images/generos/biografia.png";
import classicos from "../images/generos/classicos.png";
import culinaria from "../images/generos/culinaria.png";
import didatico from "../images/generos/didatico.png";
import fantasia from "../images/generos/fantasia.png";
import filosofia from "../images/generos/filosofia.png";
import gibis from "../images/generos/gibis.png";
import infantil from "../images/generos/infantil.png";
import investigacao from "../images/generos/investigacao.png";
import politica from "../images/generos/politica.png";
import religiao from "../images/generos/religiao.png";
import romance from "../images/generos/romance.png";
import scifi from "../images/generos/sci-fi.png";
import terror from "../images/generos/terror.png";





const HorizontalGrid = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


const Genero = styled.img `
    z-index: 2;
    width: 12%;
  border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 350px;
    cursor: pointer;
`




const Generos = styled.img `
    z-index: 2;
    width: 12%;
  border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`




const GenerosGrid = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Dots = styled.div `
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 150px; /* Ajuste conforme necessário para a posição vertical desejada */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
`


const FirstDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .5vw;
`


const SecondDot = styled.div `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #0000000;
  border: 3px solid #F78310;
  border-radius: 20px;
  z-index: 2;
  margin-left: .55vw;
`




const ThirdDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`



const FourthDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`






const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;




const WhiteSquare = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vw;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 20px;
  z-index: 1;
`;








const BigThank = styled.div `
         color: #000000;
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
`


const SmallThank = styled.div `
             color: #000000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
`



const ContinueButton = styled.div `
                 color: #ffffff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: fixed;
    top: 700px;
    left: 50%;
    background-color: #F78310;
    padding:30px;
    padding-left: 180px;
    padding-right: 180px;
    border-radius: 15px;
    transform: translateX(-50%);
    cursor: pointer;
`



export default function popuptwo() {


    window.addEventListener('wheel', function(e) {
        e.preventDefault();
      }, { passive: false });

      
      const handleContinueClick = () => {
        // Redireciona para o link especificado
        window.location.href = "/PopupThree";
      };
    




  return (
    <div>
        
    <Body>
      <main>




<Dots>
                <FirstDot />
                <SecondDot />
                <ThirdDot />
                <FourthDot />
                </Dots>

                <BigThank>O que você gosta de ler?</BigThank>
                <SmallThank>Isso serve pra customizar-mos sua experiência</SmallThank>
                <GenerosGrid>
                    <HorizontalGrid>
                        <Genero src={autoconhecimento}/>
                        <Genero src={biografia}/>
                        <Genero src={classicos}/>
                        <Genero src={culinaria}/>
                        <Genero src={didatico}/>
                    </HorizontalGrid>
                    <HorizontalGrid>
                        <Generos src={fantasia}/>
                        <Generos src={filosofia}/>
                        <Generos src={gibis}/>
                        <Generos src={infantil}/>
                        <Generos src={investigacao}/>
                    </HorizontalGrid>
                    <HorizontalGrid>
                        <Generos src={politica}/>
                        <Generos src={religiao}/>
                        <Generos src={romance}/>
                        <Generos src={scifi}/>
                        <Generos src={terror}/>
                    </HorizontalGrid>
                </GenerosGrid>
                <ContinueButton onClick={handleContinueClick}>Continuar</ContinueButton>
                <WhiteSquare />


      </main>
    </Body>
    </ div>
    
  );
}
