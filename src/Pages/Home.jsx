import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Estudando SEO e suas melhores práticas</title>
        <meta
          name="description"
          content="Aqui eu estou testanto a descrição META e se está funcionando"
        />
      </Helmet>
      <span
        style={{
          height: "100vh",
          width: "100%",
          background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Page Home
      </span>
    </div>
  );
};
export default Home();
