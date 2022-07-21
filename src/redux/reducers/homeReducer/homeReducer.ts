import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { images } from "../../../constants/images";
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
    // selectedFilter: (state) => {
    //   const currentIndex = current(state).categoryList.findIndex(
    //     (el) => el.isSelected === true
    //   );
    //   const selectedData = current(state).data.filter(
    //     (el: Data) =>
    //       el.title === current(state).categoryList[currentIndex].name
    //   );
    //   console.log("selectedData", selectedData);
    // },
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
        currentCardTiele: string;
        isSelected: boolean;
      }>
    ) => {
      const currentIndex = current(state).data.findIndex(
        (el) => el.title === actions.payload.title
      );
      const currentCard = current(state).data[currentIndex].cards.findIndex(
        (card) => card.title === actions.payload.currentCardTiele
      );
      state.data[currentIndex].cards[currentCard].isSelected =
        actions.payload.isSelected;
    },
    getFavoritesCard: (state) => {
      const cards = current(state).data.map((a) => a.cards);
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
        currentCardTiele: string;
        isSelected: boolean;
        currentSection: string;
      }>
    ) => {
      const currentIndex = current(state).favoritesData.findIndex(
        (card) => card.title === actions.payload.currentCardTiele
      );
      const delleteCard = current(state).favoritesData[currentIndex];
      const currentIndexSection = current(state).data.findIndex(
        (el) => el.title === actions.payload.currentSection
      );
      const currentIndexCard = current(state).data[
        currentIndexSection
      ].cards.findIndex((el) => el.title === actions.payload.currentCardTiele);
      state.data[currentIndexSection].cards[currentIndexCard].isSelected =
        !actions.payload.isSelected;
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
      console.log(
        "currentCategory",
        state.currentCategory,
        "name",
        action.payload.name
      ); 
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
  // selectedFilter,
} = actions;

export default reducer;
