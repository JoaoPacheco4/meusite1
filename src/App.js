import React from 'react';
import styled from 'styled-components';
import SobreNos from './view/SobreNos';
import Card1 from './view/Card1';
import { GlobalStyle } from './styles/StyledComponents';

const Container = styled.div`
  display: flex;
  flex-directions: column;
  padding: 40px;
  align-items: center;

  @media(min-width: 768px){
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  };`

  const Header = styled.div`
  color:rgb(0, 0, 0);
  background:rgba(0, 152, 124, 0.9);
  padding-top: 15px;
  padding-bottom: 2px;
  };`

function App() {
  return (
<>
    <GlobalStyle/>
    <Header>
      <h1 style={{textAlign: 'center'}}>Alma Silvestre</h1>
      <h3 style={{textAlign: 'center', marginBotton:'40px'}}>Onde a Conservação Encontra a Comunidade</h3>
    </Header>
    <Container>
      <SobreNos/>
      <Card1/>
    </Container>
</>    
  );
}

export default App;
