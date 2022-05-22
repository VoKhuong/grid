import { useContext } from "react";

import NavigationContext from "../contexts/navigationContext";

export default function Navbar() {
  const { route, setRoute } = useContext(NavigationContext);

  const onClickHandler = (target) => {
    if (target === route) return;
    setRoute(target);
  };

  return (
    <ul className="flex justify-center divide-x-4 divide-white text-white text-center text-lg mb-2">
      <li
        className={`px-2 py-1 w-28 ${
          route === "grid"
            ? "font-bold"
            : "hover:cursor-pointer hover:underline"
        }`}
        onClick={() => onClickHandler("grid")}
      >
        The Grid
      </li>
      <li
        className={`px-2 py-1 w-28 ${
          route === "about"
            ? "font-bold"
            : "hover:cursor-pointer hover:underline"
        }`}
        onClick={() => onClickHandler("about")}
      >
        About Me
      </li>
    </ul>
  );
}
