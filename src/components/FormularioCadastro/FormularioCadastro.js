
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={(e)=>props.setInputImage(e.target.value)} value={props.inputImage}/>
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" onChange={(e)=>props.setInputTitle(e.target.value)} value={props.inputTitle} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={(e)=>props.setInputDescription(e.target.value)} value={props.inputDescription}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro