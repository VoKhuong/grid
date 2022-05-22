import { useContext } from "react";

import NavigationContext from "./contexts/navigationContext";

import Navbar from "./components/navbar";

import Grid from "./routes/grid";
import About from "./routes/about";

const routing = { grid: <Grid />, about: <About /> };

export function App() {
  const { route } = useContext(NavigationContext);

  return (
    <div className="bg-slate-600 w-full h-full min-h-screen p-6">
      <Navbar />
      {routing[route]}
    </div>
  );
}
