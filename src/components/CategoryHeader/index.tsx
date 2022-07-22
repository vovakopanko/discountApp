import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../CategoryScrollView/styles";

export function CategoryHeader({ category }) {
  const isNewItems = category.title === "New items";
  return (
    <>
      <View
        key={category.id}
        style={
          !isNewItems
            ? styles.categoryHeader
            : styles.categoryNewItenHeader
        }
      >
        <Text style={styles.categoryTitle}>{category.title}</Text>
        {!isNewItems && (
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.btnShowAll}>All</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
