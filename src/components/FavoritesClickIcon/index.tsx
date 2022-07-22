import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Favorites, Heart } from "../../../assets/svg";
import { colors } from "../../../styles/palletes";
import { getFavoritesCard, selectedCurrentCard } from "../../redux/reducers/homeReducer/homeReducer";
import { CardInfo, Data } from "../Discounts/types";



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

  export const styles = StyleSheet.create({
    favoritesIcon: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: colors.WHITE,
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      },
  })