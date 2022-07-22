import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { DiscountCard } from "./types";

type Data = {
  id: number;
  title: string;
  cards: any;
};

type CategoryList = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type InitialState = {
  data: Data[];
  categoryList: CategoryList[];
  favoritesData: any;
  currentCategory: string;
};

let initialState: InitialState = {
  data: [],
  categoryList: [],
  favoritesData: [],
  currentCategory: null,
};

const discountsSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getFakeResponseData: (state, action: PayloadAction<InitialState>) => {
      state.data = action.payload.data;
      state.categoryList = action.payload.categoryList;
      state.currentCategory = action.payload.currentCategory;
      state.favoritesData = action.payload.favoritesData;
    },
    selectedCurrentCard: (
      state,
      actions: PayloadAction<{
        title: string;
        currentCardTitle: string;
        isSelected: boolean;
      }>
    ) => {
      const currentIndex = current(state).data.findIndex(
        (el) => el.title === actions.payload.title
      );
      const currentCard = current(state).data[currentIndex].cards.findIndex(
        (card) => card.title === actions.payload.currentCardTitle
      );
      state.data[currentIndex].cards[currentCard].isSelected =
        actions.payload.isSelected;
      state.data[currentIndex].cards[currentCard].categoryName =
        actions.payload.title;
    },
    getFavoritesCard: (state) => {
      const cards = current(state).data.map((b) => b.cards);
      function flatter(arrCards: any) {
        return arrCards.reduce(
          (acc: DiscountCard[], val: DiscountCard) =>
            acc.concat(Array.isArray(val) ? flatter(val) : val),
          []
        );
      }
      const flatterArr = flatter(cards);
      const data = flatterArr.filter(
        (currentCard: DiscountCard) => currentCard.isSelected === true
      );
      state.favoritesData = data;
    },
    removeFavoriteCard: (
      state,
      actions: PayloadAction<{
        id: number;
        currentCardTiele: string;
        isSelected: boolean;
      }>
    ) => {
      
    },
    selectedCategory: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
        isSelected: boolean;
        index: number;
      }>
    ) => {
      const currentIndex = current(state).categoryList.findIndex(
        (el) => el.name === action.payload.name
      );
      state.categoryList.forEach((el) => (el.isSelected = false));
      if (state.categoryList[currentIndex].isSelected !== true) {
        state.categoryList[currentIndex].isSelected = action.payload.isSelected;
        state.currentCategory = action.payload.name;
      }
    },
  },
});

const { actions, reducer } = discountsSlice;

export const {
  getFakeResponseData,
  selectedCurrentCard,
  getFavoritesCard,
  removeFavoriteCard,
  selectedCategory,
} = actions;

export default reducer;
