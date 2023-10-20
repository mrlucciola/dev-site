```mermaid

---
title: Liquidate Undercollateralized Debt Positions
---
flowchart TD
         subgraph healthCheck ["(1) Check account health"]
            vault3[User 1's Vault]
            risk2[Risk Module]
            oracle2[Price Oracle]
            vault3 --> risk2 & oracle2
         end

         healthCheck -- "If vault is\nundercollateralized:\nLiquidate vault" --> calcLiqAmt

         subgraph calcLiqAmt ["(2) Calculate amount of collateral to liquidate"]
            liq[Liquidation Module] -- "Query collateral token price\nto calc. vault value" <--> oracle3[Price Oracle]
            liq -- "Calc. liquidation fee" --> platform[Platform settings]
         end

         calcLiqAmt --> repay

         subgraph repay ["(3) Repay Debt"]
            userLiq2[Liquidator Account] -- "Pay off User 1's\noutstanding debt" --> vault5[User 1's Vault]
            vault5 -- "Return debt to platform\n(burn stablecoin)" --> vault5
            vault5 -- "Send collateral + liquidation fee" --> userLiq3[Liquidator Account]
         end

   %% subgraph modOracle [Price Oracle]
   %% end

   %% subgraph modLiq [Liquidation Module]
   %% end

   %% subgraph modRisk [Risk Module]
   %% end

   %% subgraph modVaults [User Vaults]
   %% end

   %% subgraph modDebt [Debt Module]
   %% end

   %% subgraph modYGP [Yield Generating Programs]
   %% end

   %% modLiq <--> modOracle
   %% modLiq --> modVaults

   %% User --> modVaults
   %% modVaults <--o modOracle
   %% modVaults <--o modRisk
   %% modVaults --> modDebt

   %% modVaults --> modYGP



```

<!-- ```mermaid -->
<!-- %%subgraph borrow[Borrow against collateral] -->
<!-- %%         vault1[User 1's Vault] -->
<!-- %%         risk1[Risk Module] -->
<!-- %%         oracle1[Price Oracle] -->
<!-- %%         vault1 --\> risk1 & oracle1 --\> vault2[User 1's Vault] -->
<!-- %%         vault2 -- "Issue debt\n(mint stablecoin to User 1)" --\> user2[User 1] -->
<!-- %%end -->
<!-- %%user[User 1] -- "Deposit collateral (tokens)" --\> vault1 -->
<!-- ``` -->
