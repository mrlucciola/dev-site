import { Context, createContext, FC, PropsWithChildren, useContext } from "react";

const createCtxHook =
  <TCtx,>(Ctx: Context<TCtx | null>) =>
  <TField,>(selector: (state: TCtx) => TField): TField => {
    const ctx = useContext(Ctx);

    if (!ctx) {
      const selectorName = `use${Ctx.displayName}`;
      const providerName = Ctx.displayName?.replace("Ctx", "Provider");
      throw new Error(`${selectorName} must be used within ${providerName}`);
    }

    return selector(ctx);
  };

/**
 * ### Usage:
 * ```tsx
 * const useCtxState = () => {
 *   const [isLoading, setIsLoading] = useState(false);
 *
 *   return {
 *     isLoading,
 *     setIsLoading,
 *   };
 * };
 *
 * export const { useMyCtx, MyProvider } = useCtxFactory(useCtxState);
 * export type IMyCtx = ReturnType<typeof useCtxState>;
 * ```
 */
// prettier-ignore
const useCtxFactory = <THook extends (...args: any[]) => any, TCtx extends ReturnType<THook>, TLabel extends string>(
  useCtxHook: THook,
  label: TLabel
): Record<ProviderLabel<TLabel>, FC<PropsWithChildren>> &
  Record<HookLabel<TLabel>, <TField>(selector: (state: TCtx) => TField) => TField> => {
  const Ctx = createContext<TCtx | null>(null);

  const Provider: FC<PropsWithChildren> = ({ children }) => (
    <Ctx.Provider value={useCtxHook()}>{children}</Ctx.Provider>
  );

  return {
    [`${label}Provider`]: Provider,
    [`use${label}Ctx`]: createCtxHook(Ctx),
  } as Record<ProviderLabel<TLabel>, FC<PropsWithChildren>> &
  Record<HookLabel<TLabel>, <TField>(selector: (state: TCtx) => TField) => TField>;
};

type ProviderLabel<TLabel extends string> = `${Capitalize<TLabel>}Provider`;
type HookLabel<TLabel extends string> = `use${Capitalize<TLabel>}Ctx`;

export default useCtxFactory;
