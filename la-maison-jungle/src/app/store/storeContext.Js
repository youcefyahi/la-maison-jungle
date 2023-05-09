import React from "react";
import store from "./store"

const storeContext = React.createContext();

export const StoreProvider = ({children}) => (
    <StoreContext.StoreProvider value={store}>{children}</StoreContext.StoreProvider>
)

export default StoreContext;
