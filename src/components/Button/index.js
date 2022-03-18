import { Container } from "./styles";

export function Button(props) {
  return (
    <Container>
      <button type="button">{props.name}</button>
    </Container>
  );
}
