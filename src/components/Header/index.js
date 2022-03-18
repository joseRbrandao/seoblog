import { Container, Content, Title, ButtonContainer } from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function Header(props) {
  const name = {
    home: "Home",
    about: "About",
    searchconsole: "Search Console",
  };
  return (
    <Container>
      <Content>
        <Title>BLOG SEO</Title>
        <ButtonContainer>
          <Link to="/">
            <Button name={name.home} />
          </Link>
          <Link to="/about">
            <Button name={name.about} />
          </Link>
          <Link to="/searchconsole">
            <Button name={name.searchconsole} />
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
