import { Container, Content, Title, ButtonContainer } from "./style";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <Title>BLOG SEO</Title>
        <ButtonContainer>
          <Link to="/">
            <strong>Home</strong>
          </Link>
          <Link to="/about">
            <strong>About</strong>
          </Link>
          <Link to="/searchconsole">
            <strong>SearchConsole</strong>
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
