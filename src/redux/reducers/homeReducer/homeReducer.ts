import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { DiscountCard } from "./types";

type Card = {
  id: number;
  title: string;
  img: any;
  discounts: string;
  isSelected: boolean;
  categoryName?: string;
};

type Data = {
  id: number;
  title: string;
  cards: Card[];
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

function flatter(arrCards: any) {
  return arrCards.reduce(
    (acc: DiscountCard[], val: DiscountCard) =>
      acc.concat(Array.isArray(val) ? flatter(val) : val),
    []
  );
}

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
      const arrAllCards = current(state).data.map((data: Data) => data.cards);
      const flatterArr = flatter(arrAllCards);
      const categoryName = flatterArr.filter(
        (card: Card) => card.id === actions.payload.id
      )[0].categoryName;
      const currentCategoryInx = state.data.findIndex(
        (category) => category.title === categoryName
      );
      const currentCardInx = state.data[currentCategoryInx].cards.findIndex(
        (card: Card) => card.title === actions.payload.currentCardTiele
      );
      state.data[currentCategoryInx].cards[currentCardInx].isSelected =
        actions.payload.isSelected;
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
