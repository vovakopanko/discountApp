import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/palletes";
import { images } from "../../constants/images";
import { FavoritesClickIcon } from "../FavoritesClickIcon";
import { PersonalDiscount } from "../PersonalDiscount";
import { styles } from "./styles";

export function DiscountCard({ card, navigation, category }) {
  const isNewItems = category.title === "New items";
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CurrentCard", {
          params: {
            title: card.title,
            id: card.id,
            img: card.img,
            navigation
          },
        });
      }}
      style={styles.wrapper}
    >
      <View style={{ width: 200 }}>
        <Image
          source={card.img ? card.img : images.DEFAULT_IMAGE}
          style={styles.imageSize}
        />
        <PersonalDiscount discounts={card.discounts} />
        <FavoritesClickIcon category={category} card={card} />
      </View>
      <View
        style={!isNewItems ? styles.subTitleBlock : styles.subTitleNewItemBlock}
      >
        <Text
          style={{
            ...styles.subTitle,
            color: isNewItems ? colors.WHITE : colors.BLACK,
          }}
        >
          {card.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
