import styled from "styled-components"
import LoginInputLabel from "components/LoginInputLabel"

import {FcGoogle} from 'react-icons/fc'

const TituloCriarConta = styled.h1`
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
    justify-content: center;
    align-items:center;
    gap:7px;
    padding: 0 4%;
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
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);    
    &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
 `
const EntrarComGoogle = styled(FcGoogle)`
    height: 33px;
    width: 33px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);    
    &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`
const ParagrafoCriarConta = styled.p`
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 25px 0 60px 0;
`
const LinkEntre = styled.a`
    text-decoration: underline;
    cursor: pointer;
`
export default function LoginCriarConta({ atualizarModo }){
    return(
        <div>
            <TituloCriarConta>Criar conta</TituloCriarConta>
            <FormCriarConta>
                <LoginInputLabel 
                    InputId='input-nome-criar-conta'  
                    InputType='text'>
                    Nome
                </LoginInputLabel>
                <LoginInputLabel 
                    InputId='input-email-criar-conta' 
                    InputType='email'>
                    E-mail
                </LoginInputLabel>
                <LoginInputLabel 
                    InputId='input-senha-criar-conta' 
                    InputType='password'>
                    Senha
                    </LoginInputLabel>
                <SectionAceitarTermos>
                    <CheckboxAceitarTermos type='checkbox' id='check-box'/>
                    <LabelAceitarTermos 
                    htmlFor='check-box'>
                    Concordo com os Termos e condições
                    </LabelAceitarTermos>
                </SectionAceitarTermos >
                <SectionSubmit>
                    <LoginFormSubmit type='submit' value='Prosseguir'/>
                    <EntrarComGoogle/>
                </SectionSubmit>
            </FormCriarConta>
            <ParagrafoCriarConta>Já possui uma conta? <LinkEntre onClick={() => atualizarModo('entrar')}>Entre</LinkEntre></ParagrafoCriarConta>
        </div>
    )
 }