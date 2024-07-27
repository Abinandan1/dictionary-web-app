import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 2rem;
  .form-row {
    position: relative;
    margin-bottom: 0.5rem;
  }
  .error {
    display: none;
    color: var(--red);
  }
  .show-error {
    display: block;
  }
  .form-input {
    background: var(--form-input-bg-color);
    color: var(--text-color);
    font-weight: 700;
    font-size: var(--heading-small);
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
  }
  .error-form-input {
    border: 1px solid var(--red);
  }
  .form-input:focus {
    /* outline: none; */
    outline: 1px solid var(--purple-100);
  }
  button {
    background: transparent;
    border: none;
    display: grid;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
`;
