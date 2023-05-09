import { configureStore } from '@reduxjs/toolkit';
import panierReducer from "../reducer/panierReducer";

const store = configureStore({
    reducer: panierReducer,
})


