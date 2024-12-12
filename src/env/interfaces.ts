import { z } from "zod";

export const AppConfig = z.object({});
export type AppConfig = z.infer<typeof AppConfig>;

export const RuntimeEnvKey = z.enum(["local", "test", "production"]);
export type RuntimeEnvKey = z.infer<typeof RuntimeEnvKey>;
export const envKeyLevelMap = new Map(
  RuntimeEnvKey.options.map((k, idx) => [k, idx]) as [RuntimeEnvKey, number][]
);
export const RuntimeEnvLevel = z
  .number()
  .int()
  .gte(0)
  .lte(RuntimeEnvKey.options.length - 1);
export type RuntimeEnvLevel = z.infer<typeof RuntimeEnvLevel>;

export const RuntimeEnvConfig = z.object({
  key: RuntimeEnvKey,
  level: RuntimeEnvLevel,
  label: z.string().default(""),
  config: AppConfig.nullish().default({}), // @todo remove `.nullish()`
});

export type RuntimeEnvConfig = z.infer<typeof RuntimeEnvConfig>;

export const newRuntimeEnvConfig = z.preprocess((input, ctx) => {
  if (typeof input !== "object")
    ctx.addIssue({
      code: "custom",
      message: `Invalid input type: '${typeof input}',  value = ${input}`,
    });
  const inputValue = input as RuntimeEnvConfig;
  return {
    ...inputValue,
    level: envKeyLevelMap.get(inputValue.key),
  } as RuntimeEnvConfig;
}, RuntimeEnvConfig);
