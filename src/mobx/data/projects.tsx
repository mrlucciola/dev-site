import { Project } from "../interfaces/project";

export const projectsArr = [
  new Project(
    "Aave Liquidation Engine",
    `\
      Polygon smart contract and Node.js application which monitored and liquidated undercollateralized
      debt positions on Aave, a money-market DeFi platform on Polygon (and Ethereum).

      This application 1) monitors account activity on Aave's smart contracts; 2) identifies unhealthy debt positions; and 3) liquidates positions using a dedicated smart contract.

      Since this is a competitive task, the main concerns were 1) frontrunning; 2) transaction submission latency; and 3) transaction submission limits.

      One form of frontrunning occurs in the mempool, where participants can observe pending transactions, copy the information and compete for priority by increasing the gas-price. We solved for this by building a gas-price calculation that increases gas price up to the point of unprofitability.
      A second form of frontrunning occurs when block producers are elected to submit a block - allowing them to copy transaction information, submit their own, and prioritize their own (or outright exclude competing transactions) for the same liquidation.  We could not reasonably mitigate this risk, as it required running our own validator with a large token stake.
      
      To avoid RPC rate-limits from the public RPCs, minimize latency and prevent mempool-frontrunning, we deployed a managed Polygon RPC node (Infura).
      Used a managed PostgreSQL instance to store account health information for fast lookups and analysis.
    `,
    new Map([
      ["Blockchain", ["Polygon SDK", "Solidity", "Ethers.js"]],
      ["Backend", ["Node.js", "PostgreSQL", "Express.js"]],
    ]),
    "https://github.com/mrlucciola/aave-liquidation-engine"
  ),
];
