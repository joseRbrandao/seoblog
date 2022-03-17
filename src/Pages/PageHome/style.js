import styled from "styled-components";

export const Container = styled.div`
  background: var(--header);
  margin-top: 1.75rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

export const Subtitle = styled.div`
  margin: 0 auto;
  margin-top: 1.75rem;
  font-size: 1rem;
  max-width: 1120px;
`;

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 1rem;
  width: 920px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
  width: 720px;
  height: 500px;
  margin-top: 2rem;
`;
