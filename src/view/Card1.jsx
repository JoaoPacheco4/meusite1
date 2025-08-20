import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow:2px 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
    width:100%;
    max-width:300px;
    text-align: center;
    transition: 0.3s;
    background-color: rgba(255, 255, 255, 0.54);
&:hover{
    transform: scale(1.05);
    };`

const Title = styled.h2`
`

const Text = styled.p`
    font-size: 14px;
    color: #00000;
`

const Form = styled.form`
    font-size: 14px;
    color: #00000;
`

const Label = styled.label`
    font-size: 14px;
    color: #00000;
`
const Input = styled.input`
    font-size: 14px;
    color: #00000;
`

const Button = styled.button`
  background: white;
  color: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 12px;


`

export default function Card(){
    return(
        <CardContainer>
            <Title>Nos ajude</Title> <br />
            <Text>Crie uma conta para poder nos ajudar</Text> <br />
            <Form>
                <Label>Email</Label><br />
                <Input/><br />
                <Label>Senha</Label><br />
                <Input/><br />
                <Label>Confirmar senha</Label><br />
                <Input/><br /> <br />
                <Button> Quero Ajudar</Button>
            </Form>
        </CardContainer>
    )
}