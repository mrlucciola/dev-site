// react
import { Grid } from "@mui/material";
import { FC, UIEvent, useState, WheelEvent } from "react";
// style
import "./Progress.css";

// main
const Progress: FC = () => {
  // component state
  const [scrollProgress, setScrollProgress] = useState(0);

  // util fxn
  // const updateScrollProgress = (e: WheelEvent) => {
  //   let scrollMax =
  //     e.target.scrollingElement.target.scrollingElement.scrollHeight -
  //     e.currentTarget.scrollingElement.clientHeight;
  //   let scrollCurrent = e.target.scrollingElement.scrollTop;
  //   let scrollPct = scrollCurrent / scrollMax;
  //   if (scrollPct <= 1 && scrollPct >= 0) {
  //     setScrollProgress(() => {
  //       return scrollPct;
  //     });
  //   }
  // };

  // window.onscroll = updateScrollProgress;
  const scrollProgressStyle = {
    left: 0,
    height: "100%",
    width: `${scrollProgress * 100}%`,
  };

  return (
    <Grid
      item
      container
      className="Progress noselect"
      component="div"
      onScroll={() => {}}
    >
      <Grid
        item
        container
        className="prog-amt noselect"
        style={scrollProgressStyle}
      ></Grid>
      <div></div>
    </Grid>
  );
};

export default Progress;
