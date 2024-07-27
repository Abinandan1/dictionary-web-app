import styled from "styled-components";

export const Wrapper = styled.nav`
  margin-bottom: 2rem;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .options {
    display: flex;
    align-items: center;
    gap: 1.625rem;
  }
  .dropdown-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .dropdown-container img {
    width: 12px;
    height: 6px;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
  }
  .select {
    position: absolute;
    top: 2rem;
    right: 0;
    width: 10rem;
    display: none;
    gap: 0.5rem;
    background: var(--font-options-bg-color);
    box-shadow: ${(props) => {
      return props.theme === "dark"
        ? "0px 2px 10px 4px rgba(var(--shadow-color), 0.5)"
        : "rgba(149, 157, 165, 0.2) 0px 8px 24px;";
    }};
    border-radius: 0.5rem;
    padding: 1rem;
    z-index: 2;
  }
  .show-select {
    display: grid;
  }
  .option {
    transition: 0.3s all linear;
    cursor: pointer;
  }
  @media (width>768px) {
    .option {
      font-size: 18px;
    }
  }
  .option:not(.selected):hover {
    color: var(--purple-100);
  }
  hr {
    height: 1.5rem;
    width: 1px;
  }
  .toggle-btn-container {
    background: var(--theme-toggle-color);
    border-radius: 1rem;
    height: 0.875rem;
    padding: 2px;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    position: relative;
    transition: all 0.3s linear;
  }
  .toggle-btn-container:hover {
    background: var(--purple-100);
  }
  span {
    position: absolute;
    left: 3px;
    background: var(--white);
    width: 0.6rem;
    height: 0.6rem;
    transition: 0.3s all linear;
    border-radius: 50%;
  }
  .dark {
    left: 1.2rem;
  }
  .toggle-btn-container input {
    width: 0.75rem;
    height: 0.75rem;
    cursor: pointer;
    opacity: 0;
  }
  svg path {
    stroke: var(--theme-toggle-color);
  }
`;
