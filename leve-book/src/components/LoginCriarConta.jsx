import styled from "styled-components"
import LoginInputLabel from "components/LoginInputLabel"

import ImgGoogle from 'images/Sign-in-with-Google-button.png'

const TextoCriarConta = styled.h1`
    font-family: var(--font-main);
    font-size: 40px;
    font-weight: 700;
    margin: 30px 0 0 0;
`
const FormCriarConta = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px 0 0 0;
`
const SectionAceitarTermos = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 4px;
`
const CheckboxAceitarTermos = styled.input`
    border: none;
    outline: none;
`
const LabelAceitarTermos = styled.label`
    font-size: 17px;
    font-weight: 600;
`
const SectionSubmit = styled.section`
    display:flex; 
    align-items: center;
    gap:7px;
`
const LoginFormSubmit = styled.input`
    border: none;
    outline: none;
    border-radius: 5px;
    background: #6B0096;
    font-size: 20px;
    font-weight: 500;
    color: #FFF;
    padding:  0.8rem 0;
    cursor: pointer;
    flex-grow: 1;
 `
const EntrarComGoogle = styled.img`
    height: 33px;
    width: 33px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;

`

export default function LoginCriarConta(){

    return(
        <div>
            <TextoCriarConta>Criar conta</TextoCriarConta>
            <FormCriarConta>
                <LoginInputLabel InputId='input-nome-criar-conta'  InputType='text'>Nome</LoginInputLabel>
                <LoginInputLabel InputId='input-email-criar-conta' InputType='email'>Email</LoginInputLabel>
                <LoginInputLabel InputId='input-senha-criar-conta' InputType='password'>Senha</LoginInputLabel>
                <SectionAceitarTermos>
                    <CheckboxAceitarTermos type='checkbox' id='check-box'/>
                    <LabelAceitarTermos htmlFor='check-box'>Concordo com os Termos e condições</LabelAceitarTermos>
                </SectionAceitarTermos >
                <SectionSubmit>
                    <LoginFormSubmit type='submit' value='Prosseguir'/>
                    <EntrarComGoogle src={ImgGoogle}></EntrarComGoogle>
                </SectionSubmit>
            </FormCriarConta>

        </div>
    )
 }