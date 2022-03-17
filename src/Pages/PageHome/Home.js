import { Helmet } from "react-helmet";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";

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
      <GlobalStyle />
    </div>
  );
};

export default Home();
