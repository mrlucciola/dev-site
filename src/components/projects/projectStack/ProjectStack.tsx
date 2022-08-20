// react
import { FC } from "react";
// style
import { Grid, GridProps, Typography } from "@mui/material";
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../mobx/context";
import { ObjKey, Stack } from "../../../mobx/types";
// utils
import "./ProjectStack.css";

interface ToolProp extends GridProps {
  idx: number;
  toolKey: ObjKey;
  toolStr: string;
}
const Tool: FC<ToolProp> = ({ idx, toolKey, toolStr }) => {
  return (
    <Grid
      item
      key={`${toolKey as string}-${toolStr}-${idx}`}
      component={Typography}
      // className={`${toolKey as string} tool`}
    >
      {toolStr}
    </Grid>
  );
};

interface Props {
  projectIdx: number;
}
// main
const ProjectStack: FC<Props> = ({ projectIdx }) => {
  const stack: Stack = useAppContext((s) => s.main.projects[projectIdx]).stack;
  // build fxns
  const stackElemArr = [];

  for (const [_key, toolsArr] of stack) {
    const key = String(_key);
    const toolsElemArr = toolsArr.map((tool: string, idx: number) => {
      return (
        <Tool
          idx={idx}
          toolKey={key}
          toolStr={tool}
          key={`toolselem${idx}-${key}`}
        />
      );
    });
    stackElemArr.push(
      <Grid
        item
        container
        key={`gridgroup-${key}`}
        // className={`${key} group`}
      >
        <Grid
          item
          component={Typography}
          // className="group-title"
        >
          {key}
        </Grid>
        <Grid
          item
          container
          direction="row"
          // className="group-list"
        >
          {toolsElemArr}
        </Grid>
      </Grid>
    );
  }
  // TODO: add mui

  return (
    <Grid
      item
      container
      //className="ProjectStack"
    >
      {stackElemArr}
    </Grid>
  );
};

export default observer(ProjectStack);
