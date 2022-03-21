import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Main,
  Diviser,
  TitleQuestion,
  Answer,
  ContainerFont,
} from "./style";

const SearchConsole = () => {
  return (
    <div>
      <Helmet>
        <title>Search Console - Como utilizar</title>
        <meta
          name="description"
          content="Pontos que devem ser levados em consideraçao para melhorar o SEO de sua página utilizando o Google Search Console"
        />
        <meta
          name="keywords"
          content="React Helmt, SEO, meta tags, search console, "
        />
      </Helmet>
      <Header />
      <Container>
        <Content>
          <Title>Search Console</Title>
          <Subtitle>
            Nessa página você vai entender o básico do Google Search console,
            para que ele serve e como pode utilizar oa seu favor para melhorar o
            SEO de sua página.
          </Subtitle>
          <Diviser />
          <Main>
            <TitleQuestion>O que é Google Search Console?</TitleQuestion>
            <Answer>
              O Google Search Console é aplictivo a custo zero onde
              desenvolvedores web podem gerenciar e melhorar a indexação do seu
              site, otimizar a visibilidade e assim conseguir uma ótimoa posição
              nos rankings dos buscadores.
            </Answer>

            <TitleQuestion>
              Como utilizar o Search Console para melhora o SEO da nossa página?
            </TitleQuestion>
            <Answer>
              Dentro do Search Console podemos analisar fatores básicos, mas que
              são extrema importância para tornar nossa página amigável aos
              buscadores. Solicitar indexão da URl no buscador do Google,
              realizar teste da URl publicada e validar se ela é compativel com
              dispositivos móveis e desktop, inserir o Sitemap da sua página
              além de analisar algumas métricas.
            </Answer>

            <TitleQuestion>Métricas Importantes</TitleQuestion>
            <Answer>
              A ferramenta da Google nos oferece paineis onde podemos analisar
              métricas como desempenho e índice de interações com o usuário. A
              métrica de desenhanho é detalhada dem vários pontos, como tempo de
              carregamento, quanto tempo leva para carrger o primeiro conteúdo e
              essas informações podem ser analisads entre dados de origem do
              Desktop ou smatphones.
            </Answer>

            <Diviser />
            <Subtitle>Fonte</Subtitle>
            <ContainerFont>
              <span class="author">Documentação Google Console: </span>
              <a href="https://developers.google.com/search/docs/beginner/search-console">
                <cite>
                  https://developers.google.com/search/docs/beginner/search-console
                </cite>
              </a>
            </ContainerFont>
          </Main>
        </Content>
      </Container>
    </div>
  );
};

export default SearchConsole();
