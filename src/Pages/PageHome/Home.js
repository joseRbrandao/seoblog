import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Title, Subtitle, Main } from "./style";
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
      </Helmet>
      <Header />
      <Title>
        Resumão sobre o conteúdo do Blog
        <Subtitle>
          O blog foi criado para servir como um laboratório. Colocar em práticas
          conceitos e ferramentas de SEO.
          <Main>
            <div>
              <ul>
                <li>React Helmet</li>
                <li>Google Seacrh Console</li>
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
        </Subtitle>
      </Title>
      <Main>
        <img
          src={iconseo}
          alt="icone com a sigla SEO. Em volta da sigla contém as palavras meta, links, web, url, authority, description, ranking tags, title, bing, yahoo, google"
        ></img>
      </Main>
    </div>
  );
};

export default Home();
