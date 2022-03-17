import { Helmet } from "react-helmet";

const ReactHelmet = () => {
  return (
    <div>
      <Helmet>
        <title>React Helmet-Como utilizar</title>
        <meta
          name="description"
          content="Como utilizar o React Helmet para ajudar no SEO do seu site"
        />
        <meta
          name="keywords"
          content="React Helmt, SEO, meta tags, search console, "
        />
      </Helmet>
      <div>
        <h1>React Helmet</h1>
        <h3>Como utilizar o React Helmet para ajudar no SEO do seu site</h3>
      </div>
    </div>
  );
};

export default ReactHelmet();
