import { FaRegMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { setItems, getItems } from "../Helper/LocalStorage";
const Light = "light";
const Dark = "dark";
const Theme = "theme";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = getItems(Theme);
    return savedTheme || Light;
  });

  useEffect(() => {
    document.documentElement.classList.toggle(Dark, theme === Dark);
    setItems(Theme, theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === Dark ? Light : Dark));
  };

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center bg-light-elementsColor dark:bg-dark-elementscolor dark:text-dark-textcolor h-24 px-5 sm:px-14 md:px-28 shadow">
        <h1 className="font-extrabold md:text-2xl">Where In The World?</h1>
        <button className="flex items-center" onClick={handleThemeToggle}>
          {theme === Dark ? (
            <FaSun className="inline-block mr-2" />
          ) : (
            <FaRegMoon className="inline-block mr-2" />
          )}
          <span className="font-semibold text-lg">
            {theme === Dark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </header>
    </div>
  );
}
