import { Wrapper } from "../wrappers/Navbar";
import logo from "/assets/images/logo.svg";
import moon from "/assets/images/icon-moon.svg";
import arrowDown from "/assets/images/icon-arrow-down.svg";
import { useAppContext } from "../App";
const Navbar = () => {
  const { theme, setTheme } = useAppContext();
  const elements = [document.body, document.querySelector(".form-input")];
  const handleFontChange = (e) => {
    document.querySelector(".show-select").classList.remove("show-select");
    document.querySelector(".selected").textContent =
      e.currentTarget.textContent;
    if (e.currentTarget.textContent === "Sans Serif") {
      elements.map((element) => {
        element.classList.remove("font2");
        element.classList.remove("font3");
      });
    }
    if (e.currentTarget.textContent === "Serif") {
      elements.map((element) => {
        element.classList.add("font2");
      });
    }
    if (e.currentTarget.textContent === "Mono") {
      elements.map((element) => {
        element.classList.add("font3");
      });
    }
  };
  return (
    <Wrapper theme={theme ? "dark" : "light"}>
      <div className="nav-center">
        <img src={logo} alt="" className="logo" />
        <div className="options">
          <div className="dropdown">
            <div
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle(
                  "show-select"
                );
              }}
              className="dropdown-container"
            >
              <small className="selected option bold">Sans Serif</small>
              <img src={arrowDown} alt="" />
            </div>
            <div className=" select">
              <small onClick={handleFontChange} className="option bold">
                Sans Serif
              </small>
              <small onClick={handleFontChange} className="option bold">
                Serif
              </small>
              <small onClick={handleFontChange} className="option bold">
                Mono
              </small>
            </div>
          </div>
          <hr />
          <div className="toggle-btn-container">
            <span className={`${theme && "dark"}`}></span>
            <input
              type="radio"
              name="theme"
              id="theme"
              defaultChecked={!theme}
              onClick={(e) => {
                setTheme(false);
              }}
            />
            <input
              type="radio"
              name="theme"
              id="theme"
              defaultChecked={theme}
              onClick={(e) => {
                setTheme(true);
              }}
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
