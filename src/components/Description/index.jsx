import React from "react";
import {Container, Title, SubTitle} from './styles';

function Description(){
    return(
        <Container style={{width: window.innerWidth - 90}}>
            <Title> Sua nova</Title>
            <SubTitle> Experiência</SubTitle>
            <SubTitle> Seu novo</SubTitle>
            <Title>Playstation 5</Title>
        </Container>
    )
}

export default Description;