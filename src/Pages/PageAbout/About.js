import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Container, Content, Title, Subtitle } from "./style";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>SEO Blog - About</title>
        <meta
          name="og:description"
          content="Teste da description - pagina about."
        />
        <meta property="og:title" content="og: SEO Blog - About"></meta>
        <meta
          name="keywords"
          content="seo, sitemap, robot.txt, meta tags, search console"
        />
        <meta
          property="og:url"
          content="https://misty-fog-5874.on.fleek.co/#/about"
        ></meta>
        <link rel="canonical" href="https://misty-fog-5874.on.fleek.co/about" />
      </Helmet>
      <head>
        <script
          defer
          data-domain="misty-fog-5874.on.fleek.co"
          src="https://plausible.io/js/script.hash.js"
        ></script>
      </head>
      <Header />
      <Container>
        <Content>
          <Title>About</Title>
          <Subtitle>
            O objetivo do blog foi reunir os conceitos básicos de SEO e colocar
            em prática. Transformar esse simples blog num laboratório para
            testar técnicas de SEO e conseguir o melhor resultado nos rankings
            dos buscadores.
          </Subtitle>
        </Content>
      </Container>
    </div>
  );
};

export default About();
