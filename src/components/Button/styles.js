import styled from "styled-components";

export const Container = styled.div`
  button {
    font-size: 1rem;
    /* margin: 0 0.75rem; */
    color: var(--blue-500);
    border: none;
    background: transparent;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  /* @media (max-width: 340px) {
    button {
      margin-bottom: 1rem;
    }
  } */
`;
