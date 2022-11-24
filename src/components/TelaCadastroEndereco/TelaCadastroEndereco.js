import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro Endereço</h1>
      <Form>
        <StyledLabel htmlFor="endereço">
          Endereço:
          <Input id="endereço" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número:
          <Input id="numero" type={"number"}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="telefone" type={"tel"}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>
          Cancelar Cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}
export default TelaCadastroEndereco;
