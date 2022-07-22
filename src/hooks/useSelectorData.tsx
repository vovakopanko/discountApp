import { useSelector } from "react-redux";
import {
  Card,
  Data,
  InitialState,
} from "../redux/reducers/homeReducer/homeReducer";
import {
  getHomeDataSelector,
  getCategoryListSelector,
  getDiscountDataList,
  getSelectedData,
  getCurrentCategory,
  getFavoritesData,
} from "../redux/selectors";
import { CategoryList } from "../screen/HomeScreen/types";

interface useSavings {
  homePageData: InitialState;
  categoryList: CategoryList[];
  data: Data[];
  selectedData: Data[];
  currentCategory: string;
  favoritesData: Card[];
}

export const useSelectorData = (): useSavings => {
  const homePageData = useSelector(getHomeDataSelector);
  const categoryList = useSelector(getCategoryListSelector);
  const data = useSelector(getDiscountDataList);
  const selectedData = useSelector(getSelectedData);
  const currentCategory = useSelector(getCurrentCategory);
  const favoritesData = useSelector(getFavoritesData);

  return {
    homePageData,
    categoryList,
    data,
    selectedData,
    currentCategory,
    favoritesData,
  };
};
