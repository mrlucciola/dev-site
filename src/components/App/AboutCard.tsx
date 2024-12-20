import type { FC } from "react";
// mui
import Grid from "@mui/material/Grid2";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
// components
import MarkdownText from "../../util/MarkdownBlock";

const description = `
## Senior Fullstack Engineer

### Specializations
- Webapp development (React, ReST & GraphQL APIs)
- web3 development
- Distributed systems
- DevOps
- System architecture


### Tools & Technologies
- Main languages: TypeScript, Rust
- Other languages: Solidity, C#

### Domains
- Finance
- Blockchain (dApps)
`;

/** ###  */
const AboutCard: FC = () => (
  <ListItem
    direction="column"
    component={Grid}
    disableGutters
    disablePadding
    divider
    className="#about"
    id="about"
    sx={{ px: 2 }}
  >
    <Card sx={{ borderRadius: 0, flex: 1 }}>
      <CardContent>
        <MarkdownText>{description}</MarkdownText>
      </CardContent>
    </Card>
  </ListItem>
);

export default AboutCard;
