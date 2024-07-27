import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
  margin-top: 10rem;
  .error-center:first-child {
    font-size: 4rem;
  }
  .error-center {
    text-align: center;
    display: grid;
    gap: 2rem;
  }
  p:nth-child(2) {
    color: var(--gray-300);
  }
`;
