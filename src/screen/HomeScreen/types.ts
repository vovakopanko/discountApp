export type CategoryList = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type RootAppStackParamsList = {
  [RootAppStackParams.DiscountsCategory]: undefined;
  [RootAppStackParams.SelectedCategory]: undefined;
  [RootAppStackParams.CurrentCard]: undefined;
};

export enum RootAppStackParams {
  DiscountsCategory = "DiscountsCategory",
  SelectedCategory = "SelectedCategory",
  CurrentCard = "CurrentCard",
}

export type PropsEvent = {
  category: CategoryList;
  index: number;
};
