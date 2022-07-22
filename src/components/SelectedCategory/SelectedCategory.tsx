import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../constants/images";
import { CardInfo, MainBottomTabParamList } from "../TopCategoryList/types";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedData } from "../../redux/selectors";
import {
  getFavoritesCard,
  selectedCurrentCard,
} from "../../redux/reducers/homeReducer/homeReducer";
import { Favorites, Heart } from "../../../assets/svg";
import { styles } from "./style";
import { TFavoritesClickIcon } from "./types";

function PersonalDiscount({ discounts }: { discounts: string }) {
  return (
    <View style={styles.discountInfo}>
      <Text style={styles.discountSales}>{discounts}</Text>
    </View>
  );
}

function FavoritesClickIcon({ category, card }: TFavoritesClickIcon) {
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

export function SelectedCategory() {
  const selectedData = useSelector(getSelectedData);
  const category = selectedData[0];
  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  return (
    <ScrollView>
      <Text style={styles.tittleSelectedCategory}>{category.title}</Text>
      {category.cards.map((card: CardInfo) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => {
            navigation.navigate("CurrentCard", {
              params: {
                title: card.title,
                id: card.id,
                img: card.img,
              },
            });
          }}
          style={styles.wrapper}
        >
          <View>
            <Image
              source={card.img ? card.img : images.DEFAULT_IMAGE}
              style={styles.imageSize}
            />
            <PersonalDiscount discounts={card.discounts} />
            <FavoritesClickIcon category={category} card={card} />
          </View>
          <View style={styles.subTitleBlock}>
            <Text style={styles.subTitle}>{card.title}</Text>
            <Text style={styles.description}>
              There should be a description of your discount here
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
