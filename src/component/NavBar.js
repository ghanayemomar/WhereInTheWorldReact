import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header className="flex justify-between items-center bg-light-elementsColor dark:bg-dark-elementscolor dark:text-dark-textcolor h-24 px-5 sm:px-14 md:px-28 shadow">
        <h1 className="font-extrabold md:text-2xl">Where In The World?</h1>
        <button className="flex items-center" onClick={handleThemeToggle}>
          <FaRegMoon className="inline-block mr-2" />
          <span className="font-semibold text-lg">Dark Mode</span>
        </button>
      </header>
    </>
  );
}
