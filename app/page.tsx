'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;


const Header = styled.h1`
  color: white;
`

export default function Home() {
  return (
    <Container>
      <Main>
        <Header>
          Hello World
        </Header>
      </Main>
    </Container>
  );
}
