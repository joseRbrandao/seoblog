import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Container, Content, Title, Subtitle } from "./style";

const About = () => {
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
    <div>
      <Helmet>
        <title>SEO Blog - About</title>
        <meta
          name="description"
          content="estudo de caso sobre SEO. metatags, title, description, react-helmet, reat-router-dom, 
              google search console, site map, robot.tsx."
        />
        <meta
          name="keywords"
          content="seo, sitemap, robot.txt, meta tags, search console"
        />
      </Helmet>
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
