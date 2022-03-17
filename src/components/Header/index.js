import { Container, Content, Title, Main, Subtitle } from "./styles";
import { HashRouter, Link } from "react-router-dom";
import iconseo from "../../assets/seo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <h1>BLOG SEO - LABORATÓRIO!</h1>
        </div>
        {/* <HashRouter>
          <Link to="/"> Home</Link>
          <br />
          <Link to="/about"> About</Link>
          <br />
          <Link to="/reacthelmet"> React Helmet</Link>
        </HashRouter> */}

        <Title>
          Objetivo do Blog
          <Subtitle>
            O blog foi criado para servir como um laboratório. Colocar em
            práticas conceitos e ferramentas de SEO. Recursos utilizados no
            site: React Helmet, Google Seacrh Console, Robots.txt, Sitemap, URL
            semântica.
          </Subtitle>
        </Title>
        <Main>
          <img
            src={iconseo}
            alt="icone com a sigla SEO. Em volta da sigla contém as palavras meta, links, web, url, authority, description, ranking tags, title, bing, yahoo, google"
          ></img>
        </Main>
      </Content>
    </Container>
  );
}
