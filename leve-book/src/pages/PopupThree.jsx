import styled from "styled-components";

import React from 'react';




// Images
import ao from "../images/autores/AliceOseman.png";
import db from "../images/autores/DanBrown.png";
import ds from "../images/autores/DanielleSteel.png";
import dk from "../images/autores/DeanKoontz.png";
import elj from "../images/autores/ELJames.png";
import jp from "../images/autores/JamesPatterson.png";
import jkr from "../images/autores/JKRowling.png";
import jg from "../images/autores/JohnGrisham.png";
import kf from "../images/autores/KenFollett.png";
import mc from "../images/autores/MichaelCrichton.png";
import pc from "../images/autores/PauloCoelho.png";
import re from "../images/autores/Rectangle 102.png";
import rr from "../images/autores/RickRiordan.png";
import ss from "../images/autores/SidneySheldon.png";
import sk from "../images/autores/StephenKing.png";






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
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`




const ThirdDot = styled.div `
  top: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #0000000;
  border: 3px solid #F78310;
  border-radius: 20px;
  z-index: 2;
  margin-left: .5vw;
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
        window.location.href = "/PopupFour";
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

                <BigThank>Quais seus autores favoritos?</BigThank>
                <SmallThank>Isso serve pra customizar-mos sua experiência</SmallThank>
                <GenerosGrid>
                    <HorizontalGrid>
                        <Genero src={ao}/>
                        <Genero src={db}/>
                        <Genero src={ds}/>
                        <Genero src={dk}/>
                        <Genero src={elj}/>
                    </HorizontalGrid>
                    <HorizontalGrid>
                        <Generos src={jp}/>
                        <Generos src={jkr}/>
                        <Generos src={jg}/>
                        <Generos src={kf}/>
                        <Generos src={mc}/>
                    </HorizontalGrid>
                    <HorizontalGrid>
                        <Generos src={pc}/>
                        <Generos src={re}/>
                        <Generos src={rr}/>
                        <Generos src={ss}/>
                        <Generos src={sk}/>
                    </HorizontalGrid>
                </GenerosGrid>
                <ContinueButton onClick={handleContinueClick}>Continuar</ContinueButton>
                <WhiteSquare />


      </main>
    </Body>
    </ div>
    
  );
}
