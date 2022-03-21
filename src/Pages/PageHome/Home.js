import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Main,
  ImageContainer,
  ContentList,
} from "./style";
import iconseo from "../../assets/seo.svg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BLOG SEO - O básico do SEO</title>
        <meta name="title" content="BLOG SEO - O básico do SEO" />
        <meta
          name="description"
          content="Tarefas básicas para tornar o SEO do seu site inicialmente bom"
        />
        <meta
          name="keywords"
          content="seo, sitemap, robot.txt, meta tags, search console, blog"
        />
      </Helmet>
      <Header />
      <Container>
        <Content>
          <Title>Blog - LAB SEO</Title>
          <Subtitle>
            Ferramentas utiliadas no site para melhorar o SEO.
          </Subtitle>
          <Main>
            <ContentList>
              <ul>
                <li>React Helmet</li>
                <li>Search Console</li>
                <li>Robots.txt</li>
              </ul>
            </ContentList>

            <ContentList>
              <ul>
                <li>URL semântica</li>
                <li>Meta Tags</li>
                <li>Sitemap</li>
              </ul>
            </ContentList>
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
