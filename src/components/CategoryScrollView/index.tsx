import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/palletes";
import { images } from "../../constants/images";
import { CardInfo } from "../TopCategoryList/types";
import { FavoritesClickIcon } from "../FavoritesClickIcon";
import { PersonalDiscount } from "../PersonalDiscount";
import { styles } from "./styles";
import { useState } from "react";

export function CategoryScrollView({ category, navigation }) {
  const isNewItems = category.title === "New items";
  const length = category.cards.length;
  const [currentLength, setCurrentLength] = useState(4);
  return (
    <View key={category.id} style={!isNewItems ? styles.categoryHeader : {}}>
      <ScrollView horizontal>
        {category.cards.slice(0, currentLength).map((card: CardInfo) => (
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
            <View style={{ width: 200 }}>
              <Image
                source={card.img ? card.img : images.DEFAULT_IMAGE}
                style={styles.imageSize}
              />
              <PersonalDiscount discounts={card.discounts} />
              <FavoritesClickIcon category={category} card={card} />
            </View>
            <View
              style={
                !isNewItems ? styles.subTitleBlock : styles.subTitleNewItemBlock
              }
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
        ))}
        {category.cards.length > 4 && currentLength !== length && (
          <TouchableOpacity
            style={styles.showMore}
            onPress={() => {
              setCurrentLength(length);
            }}
          >
            <Text style={styles.showMoreTitle}>
              Watch more +{category.cards.length - 4}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
