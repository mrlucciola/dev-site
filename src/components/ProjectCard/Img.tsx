import { FC } from "react";
// mui
import CardMedia from "@mui/material/CardMedia";
// interfaces
import { IImg } from "../../mobx/interfaces/project";

const Img: FC<{ imgUrl: IImg; title: string }> = ({ imgUrl, title }) => {
  return (
    <CardMedia
      component="img"
      image={`${imgUrl}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={`img: ${title}`}
      loading="lazy"
    />
  );
};

export default Img;
