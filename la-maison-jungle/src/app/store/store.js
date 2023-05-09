import { configureStore } from '@reduxjs/toolkit';
import panierReducer from "../reducer/planteReducer";


const store = configureStore({
    reducer: panierReducer,
})


export default store


