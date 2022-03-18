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

export const TitleQuestion = styled.div`
  font-size: 2rem;
`;

export const Answer = styled.div`
  margin: 0.2rem 0 1rem 0;
`;

export const Subtitle = styled.div`
  margin-top: 1.75rem;
  font-size: 1rem;
  max-width: 1120px;
`;

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
`;

export const Diviser = styled.hr`
  margin-top: 1.75rem;
  border: none;
  border-top: 3px solid #bbb;
  width: 100%;
`;
