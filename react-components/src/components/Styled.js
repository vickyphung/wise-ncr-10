import styled from "styled-components"



export default function Styled() {

    const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
  `
  
  const Title = styled.h1`
    font-size: 7em;
    color: purple;
  `


  return (
    <div>
        
    <Container>
    <Title>Hello World</Title>
    </Container>

    </div>
  )
}
