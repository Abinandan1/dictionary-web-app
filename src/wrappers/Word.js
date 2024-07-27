import styled from "styled-components";

export const Wrapper = styled.section`
  .word-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  hr {
    width: 266px;
  }
  svg {
    cursor: pointer;
    width: 48px;
    height: 48px;
  }
  svg:hover circle {
    transition: all 0.3s linear;
    opacity: 1;
  }
  svg:hover path {
    transition: all 0.3s linear;
    fill: var(--white);
  }
  .name h1 {
    margin-bottom: 1rem;
  }
  .name h2 {
    color: var(--purple-100);
    font-weight: 400;
  }
  @media (width>768px) {
    svg {
      width: 75px;
      height: 75px;
    }
    hr {
      width: 608px;
    }
  }
  @media (width>1170px) {
    hr {
      width: 656px;
    }
  }
`;
