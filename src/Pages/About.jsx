import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Blog para testar praticas de SEO</title>
        <meta
          name="description"
          content="estudo de caso sobre SEO. metatags, title, description, react-helmet, reat-router-dom, 
              google search console, site map, robot.tsx."
        />
      </Helmet>
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Page About
      </div>
    </div>
  );
};

export default About();
