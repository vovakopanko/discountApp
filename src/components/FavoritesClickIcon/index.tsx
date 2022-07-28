import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Favorites, Heart } from "../../../assets/svg";
import { useSelectorData } from "../../hooks/useSelectorData";
import {
  getFavoritesCard,
  selectedCurrentCard,
} from "../../redux/reducers/homeReducer/homeReducer";
import { CardInfo, Data } from "../TopCategoryList/types";
import { styles } from "./styles";

type FavoritesClickIcon = {
  category: Data;
  card: CardInfo;
};

export function FavoritesClickIcon({ category, card }: FavoritesClickIcon) {
  const dispatch = useDispatch();
  const { isAllDiscounts } = useSelectorData();
  return (
    <TouchableOpacity
      disabled={isAllDiscounts}
      onPress={() => {
        dispatch(
          selectedCurrentCard({
            title: category.title,
            currentCardTitle: card.title,
            isSelected: !card.isSelected,
          })
        );
        dispatch(getFavoritesCard());
      }}
      style={card.isSelected && styles.favoritesIcon}
    >
      {card.isSelected && <Heart />}
    </TouchableOpacity>
  );
}
