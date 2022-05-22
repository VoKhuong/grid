import { createRoot } from "react-dom/client";

import { App } from "./App";
import { NavigationContextProvider } from "./contexts/navigationContext";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <NavigationContextProvider>
    <App />
  </NavigationContextProvider>
);
