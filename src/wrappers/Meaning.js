import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 2rem;
  .partOfSpeech {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .definitions-container h2 {
    font-weight: 400;
    color: var(--gray-300);
    margin-bottom: 1rem;
  }
  .synonyms-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .synonyms {
    display: flex;
    align-items: center;
    color: var(--purple-100);
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .synonyms:hover {
    text-decoration: underline;
  }
  .synonyms-container h2 {
    font-weight: 400;
    color: var(--gray-300);
  }
  .definitions {
    list-style-type: none;
  }
  .definition {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
  }
  .definition div li {
    margin-bottom: 1rem;
  }
  .definition div p {
    color: var(--gray-300);
  }
  .definition-text {
    line-height: 24px;
  }
  .bullet {
    width: 1rem;
    height: 1rem;
  }
`;
