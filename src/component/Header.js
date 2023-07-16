import { FaRegMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
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
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center bg-light-elementsColor dark:bg-dark-elementscolor dark:text-dark-textcolor h-24 px-5 sm:px-14 md:px-28 shadow">
        <h1 className="font-extrabold md:text-2xl">Where In The World?</h1>
        <button className="flex items-center" onClick={handleThemeToggle}>
          {theme === "dark" ? (
            <FaSun className="inline-block mr-2" />
          ) : (
            <FaRegMoon className="inline-block mr-2" />
          )}
          <span className="font-semibold text-lg">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </header>
    </div>
  );
}
