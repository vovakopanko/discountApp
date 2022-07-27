import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
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
import { MainBottomTabParamList } from "../TopCategoryList/types";
import { styles } from "./styles";
import { Data } from "./types";

export default function FavoriteList({ data }: Data) {
  const dispatch = useDispatch();

  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  return (
    <>
      {data.map((card: Card, index: number) => (
        <TouchableOpacity
          style={styles.favoritesBlock}
          key={index}
          onPress={() => {
            navigation.navigate("CurrentCard", {
              params: {
                title: card.title,
                id: card.id,
                img: card.img,
                navigation,
              },
            });
          }}
        >
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
        </TouchableOpacity>
      ))}
    </>
  );
}
