import { InitialState } from "./reducers/homeReducer/homeReducer";

export type TSelectorState = {
  homeReducer: InitialState;
  favoritesReducer: {
    name: string;
  };
  profileReducer: {
    name: string;
  };
};
