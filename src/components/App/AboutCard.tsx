import { FC } from "react";
// mui
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
// components
import MarkdownText from "../../util/MarkdownBlock";

const description = `
## Senior Fullstack Engineer

I'm a Senior Fullstack Engineer with a focus on building robust and scalable financial applications and decentralized systems.

With experience across the finance & blockchain space,
I specialize in frontend development using React,
building REST and GraphQL APIs with several Node.js backend frameworks.

My background spans system design, architecture, and webapp development, with a solid foundation in DevOps and distributed systems.

### Tools & Technologies
- Primary languages: TypeScript, Rust
- Other languages: Solidity, C#
- Specializations: React, ReST & GraphQL APIs, System Architecture, DevOps, Blockchain (DApps), Distributed Systems
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
  >
    <Card sx={{ borderRadius: 0, flex: 1 }}>
      <CardContent>
        <MarkdownText>{description}</MarkdownText>
      </CardContent>
    </Card>
  </ListItem>
);

export default AboutCard;
