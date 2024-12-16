import { FC } from "react";
// markdown
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// mui
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const description = `
Hello this is the about page
`;

/** ###  */
const AboutCard: FC = () => (
  <ListItem
    direction="column"
    component={Stack}
    disableGutters
    disablePadding
    divider
    className="#about"
    id="about"
    sx={{ flex: 1, background: "green" }}
  >
    <Card sx={{ borderRadius: 0, flex: 1,background: "blue" }}>
      <CardContent sx={{ background: "purple" }}>
        <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
      </CardContent>
    </Card>
  </ListItem>
);

export default AboutCard;
