// react
import { createContext, useContext } from "react";
// state
import { MainStore } from "./stores/MainStore";

export class RootStore {
  main: MainStore;

  constructor() {
    this.main = new MainStore(this);
  }
}

// context
const AppContext = createContext<RootStore>(new RootStore());

// hook
export const useCtx: (callerFxn: (stores: RootStore) => {}) => any = (
  callerFxn: (stores: RootStore) => any
) => {
  const context = useContext(AppContext) as RootStore;

  return callerFxn(context);
};

export default AppContext;
