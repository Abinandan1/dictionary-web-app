import { createContext, useContext, useEffect, useState } from "react";
import { customFetch } from "./utils/customFetch";
import { Error, Navbar, SearchForm } from "./components";
import Word from "./components/Word";
const AppContext = createContext();
const getThemeFromLocalStorage = () => {
  const theme = JSON.parse(localStorage.getItem("theme"));
  return theme || false;
};
const App = () => {
  const [result, setResult] = useState();
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [isFound, setIsFound] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customFetch(`/${searchTerm}`);
        setResult(data[0]);
        setIsFound(true);
      } catch (error) {
        setIsFound(false);
        console.log(error?.response?.data?.msg);
      }
    };
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme", theme);
  }, [theme]);
  return (
    <AppContext.Provider
      value={{ result, theme, setTheme, searchTerm, setSearchTerm }}
    >
      <main>
        <div className="section-center">
          {/* NAVBAR */}
          <Navbar />
          {/* SEARCH FORM */}
          <SearchForm setSearchTerm={setSearchTerm} />
          {isFound ? <Word /> : <Error />}
        </div>
      </main>
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default App;
