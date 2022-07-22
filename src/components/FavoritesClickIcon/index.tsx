import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Favorites, Heart } from "../../../assets/svg";
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
  return (
    <TouchableOpacity
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
      style={styles.favoritesIcon}
    >
      {card.isSelected ? <Heart /> : <Favorites />}
    </TouchableOpacity>
  );
}
