import { configureStore } from '@reduxjs/toolkit';
import panierReducer from "../reducer/planteReducer";
import persistedReducer from "./persist";
import persistStore from 'redux-persist/es/persistStore';




const store = configureStore({
    reducer: persistedReducer,
})

const persistor = persistStore(store)


export default store


