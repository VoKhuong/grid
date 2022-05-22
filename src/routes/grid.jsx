import { useState } from "react";

import Grid from "../components/grid";
import GridForm from "../components/gridForm";

export default function Grid() {
  const [nbSquares, setNbSquares] = useState(100);

  return (
    <>
      <GridForm value={nbSquares} setValue={setNbSquares} />
      <Grid nbSquares={nbSquares} />
    </>
  );
}
