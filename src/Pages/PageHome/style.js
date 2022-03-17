import styled from "styled-components";

export const Container = styled.div`
  background: var(--header);
  margin-top: 3.75rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-top: 1rem;
`;

export const Subtitle = styled.div`
  margin-top: 1.75rem;
  font-size: 1rem;
`;

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 3.75rem;
  max-width: 30rem;
  max-height: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
