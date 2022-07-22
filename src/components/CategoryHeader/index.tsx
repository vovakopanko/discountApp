import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../../redux/reducers/homeReducer/homeReducer";
import { styles } from "../CategoryScrollView/styles";
import { MainBottomTabParamList } from "../TopCategoryList/types";

export function CategoryHeader({ category, index }) {
  const isNewItems = category.title === "New items";
  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  const dispatch = useDispatch();
  return (
    <>
      <View
        key={category.id}
        style={
          !isNewItems ? styles.categoryHeader : styles.categoryNewItenHeader
        }
      >
        <Text style={styles.categoryTitle}>{category.title}</Text>
        {!isNewItems && (
          <TouchableOpacity
            onPress={() => {
              dispatch(
                selectedCategory({
                  name: category.title,
                  id: category.id,
                  isSelected: !category.isSelected,
                  index: index,
                })
              ),
                navigation.navigate("SelectedCategoryList");
            }}
          >
            <Text style={styles.btnShowAll}>All</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
