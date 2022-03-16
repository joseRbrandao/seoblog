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
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>React Helmet</h1>
        <h3>Como utilizar o React Helmet para ajudar no SEO do seu site</h3>
      </div>
    </div>
  );
};

export default ReactHelmet();
