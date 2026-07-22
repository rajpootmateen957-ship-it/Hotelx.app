import { useEffect } from "react";
import Home from "./page/home";
import { colors } from "./theme/theme";
import "./App.css";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;