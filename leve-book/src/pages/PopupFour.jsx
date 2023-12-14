import styled from "styled-components";

import React from 'react';




// Images
import levelogo from "../images/logo.png";




const LeveLogo = styled.img `
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 225px; /* Ajuste conforme necessário para a posição vertical desejada */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
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
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #0000000;
  border: 3px solid #F78310;
  border-radius: 20px;
  z-index: 2;
  margin-left: .5vw;
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
    top: 320px;
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
    top: 370px;
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
        window.location.href = "/";
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
        <LeveLogo src= {levelogo}/>
                <BigThank>Obrigado pela preferência</BigThank>
                <SmallThank>Nos ajude a expandir! Siga-nos em nossas redes sociais </SmallThank>

                <ContinueButton onClick={handleContinueClick}>Continuar</ContinueButton>
                <WhiteSquare />


      </main>
    </Body>
    </ div>
    
  );
}
