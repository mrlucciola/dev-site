import { useState } from "react";
import useCtxFactory, { type ICtxState } from "./util/useCtxFactory";

export const { useAppCtx, AppProvider } = useCtxFactory(() => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
}, "App");
export type IAppCtx = ICtxState<typeof useAppCtx>;
