import styled from "styled-components"

const Card = styled.div`
    width: 480px;
    backdrop-filter: blur(15px);
    text-align: center;
    border-radius: 7px;
    box-shadow: -3px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    overflow: hidden;
    padding: 20px 40px;

`

export default function CardLogin(props){
    return(
        <Card>{props.children}</Card>
    )
}