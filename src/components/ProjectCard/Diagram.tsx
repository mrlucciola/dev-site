import { FC, useEffect } from "react";
import mermaid from "mermaid";
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Diagram: FC<{
  diagramStr: string;
}> = ({ diagramStr }) => {
  // effects
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <Grid className="mermaid">{diagramStr}</Grid>;
};

export default Diagram;
