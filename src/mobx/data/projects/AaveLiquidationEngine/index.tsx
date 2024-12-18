// interfaces
import { Project } from "../../../../projectConfigs/interfaces";


export default new Project(
  "Aave Liquidation Engine",
  `
Polygon smart contract and Node.js application which
monitoredand liquidated undercollateralized debt positions
on Aave, a money-market DeFi platform on Polygon (and Ethereum).

This application:
1) Monitors account activity on Aave's smart contracts;
2) Identifies unhealthy debt positions;
3) Liquidates positions using a dedicated smart contract;

Since this is a competitive task, the main concerns were:
1) Frontrunning;
2) Transaction submission latency;
3) Transaction submission limits;

### Frontrunning
One form of frontrunning occurs in the mempool, where
participants can observe pending transactions, copy the
information and compete for priority by increasing the gas-price.
We solved for this by building a gas-price calculation that
increases gas price up to the point of unprofitability.

A second form of frontrunning occurs when block producers are
elected to submit a block - allowing them to copy transaction
information, submit their own, and prioritize their own (or
outright exclude competing transactions) for the same liquidation.
We could not reasonably mitigate this risk, as it required running
our own validator with a large token stake.

### Transaction submission
To avoid RPC rate-limits from the public RPCs, 
minimize latency and prevent mempool-frontrunning, 
we deployed a managed Polygon RPC node (Infura).

Used a managed PostgreSQL instance to store account health information 
for fast lookups and analysis.
  `,
  new Map([
    ["Blockchain", ["Polygon SDK", "Solidity", "Ethers.js"]],
    ["Backend", ["Node.js", "PostgreSQL", "Express.js"]],
  ]),
  "https://github.com/mrlucciola/aave-liquidation-engine",
  undefined,
  undefined,
  undefined,
  diagramStr
);
