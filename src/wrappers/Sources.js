import styled from "styled-components";

export const Wrapper = styled.section`
  hr {
    width: 327px;
    height: 2px;
    margin-bottom: 1rem;
  }
  .sources-container small {
    color: var(--gray-300);
    text-decoration: underline;
  }
  .sources {
    margin-top: 0.5rem;
    font-weight: 400;
  }
  .source {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
  }
  @media (width>=768px) {
    hr {
      width: 688px;
    }
    .sources-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .sources {
      margin-top: 0;
    }
  }
  @media (width>=1170px) {
    hr {
      width: 736px;
    }
  }
`;
