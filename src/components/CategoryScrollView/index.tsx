import {  ScrollView, Text, TouchableOpacity, View } from "react-native";

import { CardInfo } from "../TopCategoryList/types";
import { styles } from "./styles";
import { useState } from "react";
import { DiscountCard } from "../DiscountCard";

export function CategoryScrollView({ category, navigation }) {
  const isNewItems = category.title === "New items";
  const length = category.cards.length;
  const [currentLength, setCurrentLength] = useState(4);
  return (
    <View key={category.id} style={!isNewItems ? styles.categoryHeader : {}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {category.cards.slice(0, currentLength).map((card: CardInfo) => (
          <DiscountCard
            card={card}
            navigation={navigation}
            category={category}
            key={card.id}
          />
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
