import {InfernActionsType} from '../reduxStore';
const CHANGE_NAME = './redux/homeReducer/change_name';

type initialState = {
};

let initialState: initialState = {
  name: 'Home Page',
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof authActions>;

const homeReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: "New Home name",
      };
    }
    default:
      return state;
  }
};

//Actions
export const authActions = {
  ChangeNameProfile: () =>
    <const>{type: CHANGE_NAME},
};

export default homeReducer;
