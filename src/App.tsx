import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeProvider from "./context/ThemeProvider";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("");
  
  

  useEffect(() => {
    
    const body: HTMLElement = document.querySelector("#root") as HTMLElement;
    const Theme = localStorage.getItem("theme");
    if (Theme) {
      if (Theme == "dark") {
        body.style.background = "#0D1321";
        setTheme("dark");
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("ligth")
      } else {
        body.style.background = "#FEFAE0";
        setTheme("ligth");
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("ligth")
      }
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider.Provider value={{theme: theme, setTheme: (theme) => setTheme(theme)}}>
          <Layout />
          <NavBar/>
        </ThemeProvider.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
