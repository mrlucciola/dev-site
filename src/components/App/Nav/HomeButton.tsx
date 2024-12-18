import { FC } from "react";
// mui
import Grid, { Grid2Props } from "@mui/material/Unstable_Grid2";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";

const TitleText: FC<Grid2Props> = ({ children, sx, ...gridProps }) => (
  <Grid
    component={Typography}
    sx={{ fontWeight: 800, lineHeight: 1.25, color: "white", fontSize: "inherit", ...sx }}
    {...gridProps}
  >
    {children}
  </Grid>
);

const HomeButton: FC = () => (
  <Button component={MuiLink} href="#about" sx={{ textDecoration: "none", textTransform: "none" }}>
    <Grid container direction="row" gap={1} sx={{ alignItems: "center" }}>
      <AvatarGroup spacing={10}>
        <Avatar sx={{ bgcolor: blueGrey[700], color: "rgba(18,18,18,.5)", zIndex: 0 }}>M</Avatar>
        <Avatar sx={{ bgcolor: blueGrey[600], zIndex: 1 }}>R</Avatar>
        <Avatar sx={{ bgcolor: blueGrey[400], zIndex: 2 }}>L</Avatar>
      </AvatarGroup>

      <Divider orientation="vertical" flexItem variant="middle" />

      <Grid container direction="column" fontSize={25}>
        <TitleText sx={{ color: "rgb(200,200,200)" }}>Rocco</TitleText>
        <TitleText>Lucciola</TitleText>
      </Grid>
    </Grid>
  </Button>
);
export default HomeButton;
