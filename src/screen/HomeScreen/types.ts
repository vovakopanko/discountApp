export type CategoryList = {
    id: number;
    name: string;
    isSelected: boolean;
  };

  export type RootAppStackParamsList = {
    [RootAppStackParams.SelectedCategoryList]: undefined;
  };
  
  export enum RootAppStackParams {
    SelectedCategoryList = "SelectedCategoryList"
  }

  export type PropsEvent = {
    category: CategoryList;
    index: number;
  };