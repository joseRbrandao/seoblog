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
  var _paq = (window._paq = window._paq || []);
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.misty-fog-5874.on.fleek.co"]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "https://fleek.matomo.cloud/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = "//cdn.matomo.cloud/fleek.matomo.cloud/matomo.js";
    s.parentNode.insertBefore(g, s);
  })();
  return (
    <>
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
    </>
  );
};

export default Home();
