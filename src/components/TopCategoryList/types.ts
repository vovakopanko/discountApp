import { StackNavigationProp } from "@react-navigation/stack";
import { RootAppStackParamsList } from "../../screen/HomeScreen/types";

export type Data = {
  id: number;
  title: string;
  cards: CardInfo[];
};

export type CategoryList = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type CategoryType = {
  categoryData: Data[];
};

export type CardInfo = {
  id: number;
  title: string;
  img: any;
  discounts: string;
  isSelected: boolean;
};

export type NavigationProp = StackNavigationProp<RootAppStackParamsList>;

export type MainBottomTabParamList = {
  Discounts: undefined;
  Favorites: undefined;
  Profile: undefined;
  CurrentCard: {
    params: {
      title: string;
      id: number;
      img: any;
      navigation: any;
    };
  };
  DiscountsCategory: undefined;
  SelectedCategory: undefined;
};

export type MainStackParamsList = {
  Discounts: undefined;
  Favorites: undefined;
  Profile: undefined;
  CurrentCard: {
    img: any;
    title: string;
    id: number;
    navigation: any;
  };
  DiscountsCategory: undefined;
  SelectedCategory: undefined;
};
