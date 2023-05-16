
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import planteReducer from "../reducer/planteReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['panier']
    
};

const persistedReducer = persistReducer(persistConfig,planteReducer)




export default persistedReducer