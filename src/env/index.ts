import { z } from "zod";
import { RuntimeEnvKey, RuntimeEnvConfig, newRuntimeEnvConfig } from "./interfaces";

export const isAllowedEnv = (
  envConfig: RuntimeEnvConfig,
  maxAllowedEnv: RuntimeEnvKey,
  customCondition: boolean = true
): boolean => {
  // Check if environment is set properly
  const maxAllowedEnvVal = RuntimeEnvKey.safeParse(maxAllowedEnv);
  if (!maxAllowedEnvVal.success) {
    console.error(maxAllowedEnvVal.error);
    return false;
  }
  const maxEnvLevelConfig = envConfigLookup[maxAllowedEnvVal.data];
  if (!maxEnvLevelConfig) {
    console.error("Invalid config:", maxAllowedEnvVal.data, "for environment key:", maxAllowedEnv);
    return false;
  }

  const shouldRender = envConfig.level <= maxEnvLevelConfig.level && customCondition;
  return shouldRender;
};

const currentRuntimeEnvStr = RuntimeEnvKey.parse(process.env.NODE_ENV);

type EnvCfgInput = Partial<z.infer<typeof newRuntimeEnvConfig>>;
const local = newRuntimeEnvConfig.parse({ key: "local", label: "Local/dev" } as EnvCfgInput);
const test = newRuntimeEnvConfig.parse({ key: "test", label: "QA" } as EnvCfgInput);
const production = newRuntimeEnvConfig.parse({
  key: "production",
  label: "Production",
} as EnvCfgInput);

export const envConfigLookup: { [k in RuntimeEnvKey]: RuntimeEnvConfig } = {
  local,
  test,
  production,
};
export const currentEnv = envConfigLookup[currentRuntimeEnvStr];

console.warn("ALL ENVIRONMENT VARS", process.env);
console.warn("currentEnv", currentEnv);
console.warn("currentRuntimeEnvStr", currentRuntimeEnvStr);
