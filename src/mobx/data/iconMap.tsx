import { FaReact, FaEthereum, FaAnchor } from "react-icons/fa";
import {
  SiD3Dotjs,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiMui,
  SiExpress,
  SiMozilla,
  SiDjango,
  SiJavascript,
  SiMobx,
  SiSolidity,
  SiPostgresql,
  SiRust,
} from "react-icons/si";
import Avatar from "@mui/material/Avatar";

export const toolsIconMap: { [key: string]: JSX.Element } = {
  "React.js": <FaReact />,
  "D3.js": <SiD3Dotjs />,
  "Redux.js": <SiRedux />,
  MongoDB: <SiMongodb />,
  "Node.js": <SiNodedotjs />,
  Typescript: <SiTypescript />,
  MaterialUI: <SiMui />,
  "Express.js": <SiExpress />,
  "Web Audio API": <SiMozilla />,
  Django: <SiDjango />,
  JavaScript: <SiJavascript />,
  MobX: <SiMobx />,
  "Ethers.js": <FaEthereum />,
  "Polygon SDK": (
    <Avatar
      alt="MATIC"
      src="https://cdn.iconscout.com/icon/free/png-128/polygon-token-4086725-3379855.png"
      // src="https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086724-3379854.png"
      sx={{ width: 24, height: 24, margin: 0, padding: 0 }}
    />
  ),
  Solidity: <SiSolidity />,
  PostgreSQL: <SiPostgresql />,
  Solana: (
    <Avatar
      alt="SOL"
      src="https://static.coinpaprika.com/coin/sol-solana/logo.png" //?rev=10608559
      sx={{ ml: `-6px`, width: 24, height: 24, margin: 0, padding: 0 }}
    />
  ),
  Rust: <SiRust />,
  "Anchor.rs": <FaAnchor />,
};
