import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow:2px 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
    width:100%;
    max-width:1080px;
    text-align: center;
    transition: 0.3s;
    background-color: rgba(255, 255, 255, 0.54);
&:hover{
    transform: scale(1.05);
    };`

    const Container = styled.div`
    display: flex;
    flex-directions: column;
    padding: 40px;
    align-items: center;
  
    @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    };
  `

const Text = styled.p`
    font-size: 16px;
    color: #00000;
    text-align: start;
`

const Div = styled.div`
    background-color: rgba(255, 255, 255, 0.54);
    padding: 20px;
    border-radius: 10px;

`

const Title = styled.h4`
`

export default function Card(){
    return(
        <CardContainer>
            <Text style={{fontSize: '18px'}}>
                A Alma Silvestre é mais que uma ONG ambiental — é um movimento que reconecta pessoas e natureza 
                através de ações tangíveis e paixão pela vida selvagem. Nossas iniciativas são construídas sobre 
                três pilares:
            </Text>
            <Container>
                <Div>
                    <Title>Reflorestamento com Espécies Nativas</Title>
                    <Text>
                    Recuperamos áreas degradadas usando mudas de espécies originais de biomas brasileiros,
                     priorizando corredores ecológicos que restauram habitats de fauna ameaçada. Em 2023, 
                     plantamos 7.000 árvores na Mata Atlântica, envolvendo comunidades locais no cultivo e 
                     monitoramento.
                    </Text>
                </Div>
                <Div>
                    <Title>Corredores de Vida Silvestre</Title>
                    <Text>
                    Instalamos câmeras de monitoramento e sinais de alerta em estradas próximas a 
                    unidades de conservação, reduzindo atropelamentos de animais em 62% no Vale do 
                    Ribeira (SP). Parcerias com cientistas permitem rastrear onças-pardas e antas para
                     proteger seus territórios.
                    </Text>
                </Div>
                <Div>
                    <Title>Educação que Transforma</Title>
                    <Text>
                    Nossos "EcoNúcleos" levam oficinas de biomímica (design inspirado na natureza) a 
                    escolas públicas. Já capacitamos 400 jovens em técnicas de compostagem, agrofloresta
                     urbana e identificação de aves — transformando aprendizado em ação.
                    </Text>
                </Div>
                <Div>
                    <Title>Advocacy com Voz Local</Title>
                    <Text>
                    Recuperamos áreas degradadas usando mudas de espécies originais de biomas brasileiros,
                     priorizando corredores ecológicos que restauram habitats de fauna ameaçada. Em 2023, 
                     plantamos 7.000 árvores na Mata Atlântica, envolvendo comunidades locais no cultivo e 
                     monitoramento.
                    </Text>
                </Div>
            </Container>
        </CardContainer>
    )
}