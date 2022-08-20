// react
import { FC } from "react";
// style
// state
import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../mobx/context";
import { ObjKey, Stack } from "../../../mobx/types";
// utils
import "./ProjectStack.css";
import { Grid, GridProps } from "@mui/material";

interface ToolProp extends GridProps {
  idx: number;
  toolKey: ObjKey;
  toolStr: string;
}
const Tool: FC<ToolProp> = ({ idx, toolKey, toolStr }) => {
  return (
    <Grid
      className={`${toolKey as string} tool`}
      key={`${toolKey as string}-${toolStr}-${idx}`}
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
  const stack: Stack = useAppContext((s) => s.main.projects[projectIdx].stack);
  // build fxns
  const stackElemArr = [];

  for (const [_key, toolsArr] of stack) {
    const key = String(_key);
    const toolsElemArr = toolsArr.map((tool: string, idx: number) => {
      return <Tool idx={idx} toolKey={key} toolStr={tool} key={`toolselem${idx}-${key}`} />;
    });
    stackElemArr.push(
      <Grid className={`${key} group`} key={`gridgroup-${key}`}>
        <div className="group-title">{key}</div>
        <div className="group-list">{toolsElemArr}</div>
      </Grid>
    );
  }
  // TODO: add mui

  return <div className="ProjectStack">{stackElemArr}</div>;
};

export default observer(ProjectStack);
