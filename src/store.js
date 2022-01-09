import { createContext, useContext, useMemo, useReducer } from "react";

const StoreContext = createContext();

const initialState = {
  count: 0,
  complex: {
    object1: { id: 1, name: "Object 1" },
    object2: { id: 2, name: "Object 2" }
  }
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const useStore = () => {
  // This component will ALWAYS be re-rendered as it uses useContext
  console.log("::useStore is ALWAYS rendered on context value change::");

  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  const { state, dispatch } = context;

  return {
    dispatch,
    store: state
  };
};

const StoreProvider = ({ children }) => {
  console.log("==========StoreProvider==========");

  const [state, dispatch] = useReducer(storeReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  // const value = { state, dispatch };
  const store = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreProvider, useStore };
