import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Main,
  ImageContainer,
} from "./style";
import iconseo from "../../assets/seo.svg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HOME - Laboratório SEO</title>
        <meta
          name="description"
          content="Aqui eu estou testanto a descrição META e se está funcionando"
        />
        <meta
          name="keywords"
          content="seo, sitemap, robot.txt, meta tags, search console, blog"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://misty-fog-5874.on.fleek.co/" />
        <meta property="og:title" content="Blog SEO" />
        <meta
          property="og:description"
          content="Ações Basicas para SEO da sua página"
        />
        <meta property="og:image" content={iconseo} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://misty-fog-5874.on.fleek.co/"
        />
        <meta property="twitter:title" content="Blog SEO" />
        <meta
          property="twitter:description"
          content="Ações Basicas para SEO da sua página"
        />
        <meta property="twitter:image" content={iconseo}></meta>
      </Helmet>
      <Header />
      <Container>
        <Content>
          <Title>Blog - LAB SEO</Title>
          <Subtitle>
            Ferramentas utiliadas no site para melhorar o SEO.
          </Subtitle>
          <Main>
            <div>
              <ul>
                <li>React Helmet</li>
                <li>Search Console</li>
                <li>Robots.txt</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>URL semântica</li>
                <li>Meta Description</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </Main>
          <ImageContainer>
            <img
              src={iconseo}
              alt="icone com a sigla SEO. Em volta da sigla contém as palavras meta, links, web, url, authority, description, ranking tags, title, bing, yahoo, google"
            ></img>
          </ImageContainer>
        </Content>
      </Container>
    </div>
  );
};

export default Home();
