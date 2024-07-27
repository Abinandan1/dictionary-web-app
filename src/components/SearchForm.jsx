import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/SearchForm";
import search from "/assets/images/icon-search.svg";
const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!Object.fromEntries(new FormData(e.currentTarget)).search) {
            document
              .querySelector(".form-input")
              .classList.add("error-form-input");
            document.querySelector(".error").classList.add("show-error");
            return;
          }
          document
            .querySelector(".form-input")
            .classList.remove("error-form-input");
          document.querySelector(".error").classList.remove("show-error");
          setSearchTerm(
            Object.fromEntries(new FormData(e.currentTarget)).search
          );
        }}
      >
        <div className="form-row">
          <input
            name="search"
            type="text"
            placeholder="Search for any word..."
            className="form-input"
          />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </div>
        <p className="error">Whoops, can't be empty...</p>
      </form>
    </Wrapper>
  );
};
export default SearchForm;
