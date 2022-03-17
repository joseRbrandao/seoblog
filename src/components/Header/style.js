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

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.75rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--purple);
  border-radius: 0.5rem;
  font-size: 1.25rem;
`;
