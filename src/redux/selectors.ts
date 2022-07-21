import { TSelectorState } from "./types";

export const getHomeData = (state: TSelectorState) => state.homeReducer;
export const getFavoritesData = (state: TSelectorState) => state.favoritesReducer;
export const getProfileData = (state: TSelectorState) => state.profileReducer;

