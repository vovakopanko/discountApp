import { TSelectorState } from "./types";

export const getHomeDataSelector = (state: TSelectorState) => state.homeReducer;
export const getCategoryListSelector = (state: TSelectorState) =>
  state.homeReducer.categoryList;
export const getDiscountDataList = (state: TSelectorState) =>
  state.homeReducer.data;
export const getSelectedData = (state: TSelectorState) =>
  state.homeReducer.selectedData;
export const getCurrentCategory = (state: TSelectorState) =>
  state.homeReducer.currentCategory;
export const getFavoritesData = (state: TSelectorState) =>
  state.homeReducer.favoritesData;
