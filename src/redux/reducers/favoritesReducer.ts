import {InfernActionsType} from '../reduxStore';

type initialState = {
};

let initialState: initialState = {
  name: 'Favorite Page',
  age: 26,
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof authActions>;

const favoritesReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions
export const authActions = {
};

export default favoritesReducer;
