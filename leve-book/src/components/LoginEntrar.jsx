import styled from "styled-components"
import LoginInputLabel from "components/LoginInputLabel"

import {FcGoogle} from 'react-icons/fc'
import {IoIosArrowBack} from 'react-icons/io'

const SetaVoltar = styled(IoIosArrowBack)`
    height: 25px;
    width:  25px;
    position: absolute;
    top: 13px;
    left: 10px;
    cursor: pointer;
`
const TituloEntrar = styled.h2`
    font-family: var(--font-main);
    font-size: 21px;
    font-weight: 500;
    margin: 60px 0;
`
const FormEntrar = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const SectionSubmit = styled.section`
    display:flex; 
    justify-content: center;
    align-items:center;
    gap:7px;
    padding: 0 4% 50px 4%;
    
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

export default function LoginEntrar({ atualizarModo }){
    return(
        <div>
            <SetaVoltar onClick={() => atualizarModo('criar-conta')}/>
            <TituloEntrar>Bem-vindo de volta!</TituloEntrar>
            <FormEntrar>
                <LoginInputLabel 
                    InputId='input-email-entrar' 
                    InputType='email'>
                    E-mail
                </LoginInputLabel>
                <LoginInputLabel 
                    InputId='input-senha-entrar' 
                    InputType='password'>
                    Senha
                </LoginInputLabel>
                <SectionSubmit>
                    <LoginFormSubmit type='submit' value='Entrar'/>
                    <EntrarComGoogle/>
                </SectionSubmit>
            </FormEntrar>
        </div>
    )
}