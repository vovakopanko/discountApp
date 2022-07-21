import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import favoritesReducer from './reducers/favoritesReducer';
import profileReducer from './reducers/profileReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let reducers = combineReducers({
  homeReducer,
  favoritesReducer,
  profileReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type InfernActionsType<
  T extends {[key: string]: (...args: any[]) => any},
> = ReturnType<PropertiesTypes<T>>;

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
  let persistor = persistStore(store);
  return {store, persistor};
};
