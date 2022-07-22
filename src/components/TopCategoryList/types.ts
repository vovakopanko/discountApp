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

export type MainBottomTabParamList = {
  Discounts: undefined;
  Favorites: undefined;
  Profile: undefined;
  CurrentCard: {
    params: { title: string; id: number; img: any };
  };
  SelectedCategoryList: undefined
};

export type MainStackParamsList = {
  Discounts: undefined;
  Favorites: undefined;
  Profile: undefined;
  CurrentCard: {
    img: any;
    title: string;
    id: number;
  };
  SelectedCategoryList: undefined
};
