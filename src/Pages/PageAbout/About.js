import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
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
          <h1>Page About</h1>
        </Content>
      </Container>
    </div>
  );
};

export default About();
