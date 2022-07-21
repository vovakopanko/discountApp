import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import homeReducer from './reducers/homeReducer/homeReducer';


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  homeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default () => {
  return { store, persistor };
};
