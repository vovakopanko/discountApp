import { useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Favorites, Heart } from "../../../assets/svg";
import { images } from "../../constants/images";
import {
  Card,
  getFavoritesCard,
  removeFavoriteCard,
} from "../../redux/reducers/homeReducer/homeReducer";
import { styles } from "./styles";
import { Data } from "./types";

export default function FavoriteList({ data }: Data) {
  const dispatch = useDispatch();
  return (
    <>
      {data.map((card: Card, index: number) => (
        <View style={styles.favoritesBlock} key={index}>
          <View style={styles.favoritesWrapper}>
            <Text style={styles.favoritesTitle}>{card.discounts}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                removeFavoriteCard({
                  id: card.id,
                  currentCardTiele: card.title,
                  isSelected: !card.isSelected,
                })
              );
              dispatch(getFavoritesCard());
            }}
            style={styles.selectedBtn}
          >
            {card.isSelected ? <Heart /> : <Favorites />}
          </TouchableOpacity>
          <Image
            source={card.img ? card.img : images.DEFAULT_IMAGE}
            style={styles.imageSize}
          />
          <View style={styles.titleBlock}>
            <Text style={styles.cardTitle}>{card.title}</Text>
          </View>
        </View>
      ))}
    </>
  );
}
