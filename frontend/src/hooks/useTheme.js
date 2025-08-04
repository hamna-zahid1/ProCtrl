import { useEffect } from "react";

// const useTheme = () => {
//   const [theme, setTheme] = useState(() => localStorage.getItem("theme") ||
//     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
//   );
//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

const useTheme = () => {
  const theme = "dark"; // Force dark

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, []);

  // const toggleTheme = () => {
  //   setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  // };

  return { theme }; //toggleTheme
};

export default useTheme;