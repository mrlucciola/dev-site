import type { FC, PropsWithChildren } from "react";
// utils
import { currentEnv, envConfigLookup } from ".";
import { RuntimeEnvKey, RuntimeEnvLevel } from "./interfaces";

/** ### Flag a feature for a specific environment by wrapping with this component
 * @todo add provider for environment
 *
 * Usage:
 * ```tsx
 * // Prevent entire set of routes from rendering
 * <FeatureFlag maxAllowedEnv="qa" conditions={[isDcsEmail]}>
 *   <Routes>
 *     <Route path="user-management/*">
 *       <Route index element={<UserAuthTable />} />
 *       <Route path="user/:userRecId" element={<UserAuthDetail />} />
 *       // ...
 *     </Route>
 *   </Routes>
 * </FeatureFlag>
 * ```
 *
 * @todo add environment variables to global state context
 */
const FeatureFlag: FC<
  PropsWithChildren & {
    maxAllowedEnv: RuntimeEnvKey | RuntimeEnvLevel;
    /** If ***all*** conditions are true (excluding `maxAllowedEnv`): render component.
     *
     * Accepts a single boolean or an array of booleans.
     */
    conditions?: boolean | boolean[];
  }
> = ({ maxAllowedEnv, children, conditions = [] }) => {
  const areCustomConditionsMet =
    typeof conditions === "boolean" ? conditions : conditions.every((c) => c);

  const maxAllowedEnvKey =
    typeof maxAllowedEnv === "string"
      ? RuntimeEnvKey.safeParse(maxAllowedEnv).data
      : RuntimeEnvKey.options[RuntimeEnvLevel.safeParse(maxAllowedEnv).data ?? -1];
  if (!maxAllowedEnvKey) {
    console.error(`Invalid 'env' value: ${maxAllowedEnv}`);
    return <></>;
  }
  const maxAllowedEnvConfig = envConfigLookup[maxAllowedEnvKey];

  maxAllowedEnvKey &&
    // @ts-ignore
    console.log("Name of component wrapped in feature flag: ", children?.valueOf().type.name);

  const shouldRender = currentEnv.level <= maxAllowedEnvConfig.level && areCustomConditionsMet;
  console.warn("current:", currentEnv, "max", maxAllowedEnvConfig, { areCustomConditionsMet });

  if (shouldRender) return <>{children}</>;

  return <></>;
};

export default FeatureFlag;
