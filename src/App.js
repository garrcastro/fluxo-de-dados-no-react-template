import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [inputImage, setInputImage] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [inputTitle, setInputTitle] = useState('')

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro inputImage={inputImage} setInputImage={setInputImage} inputDescription={inputDescription} setInputDescription={setInputDescription} inputTitle={inputTitle} setInputTitle={setInputTitle}/>
        </aside>
        <TelaDaPostagem inputImage={inputImage} inputDescription={inputDescription} inputTitle={inputTitle}/>
      </Container>
    </>
  );
}

export default App;
